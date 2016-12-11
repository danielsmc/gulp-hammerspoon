var gulp = require('gulp');
var onExit = require('signal-exit');
var path = require('path');
var tildify = require('tildify');
var child_process = require('child_process');


const projectName = tildify(path.resolve(__dirname).split('/node_modules')[0]);

function send(params) {
  params.project = projectName;
  const b64json = Buffer.from(JSON.stringify(params),'utf8').toString('base64');
  child_process.spawnSync('hs',{input:"gulpHandler('"+b64json+"')"});
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
