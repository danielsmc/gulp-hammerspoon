var gulp = require('gulp');
var openurl = require("openurl");
var querystring = require('querystring');
var onExit = require('signal-exit');
var path = require('path');
var tildify = require('tildify');

module.exports = function() {
  const projectName = tildify(path.resolve(__dirname).split('/node_modules')[0]);

  function send(params) {
    params.project = projectName;
    const url = "hammerspoon://gulp?"+querystring.stringify(params);
    openurl.open(url, e => (false)); // Fail silently if hammerspoon urls don't work
  }

  onExit(() => send({event: "quit"}));

  gulp.onAll(e => {
    const params = {
      task: e.task,
      event: {task_start:"start", task_stop:"stop", task_err:"err"}[e.src]
    }
    if (e.err) {
      params.err = e.err.message;
    }
    if (params.event) {
      send(params);
    }
  });
};