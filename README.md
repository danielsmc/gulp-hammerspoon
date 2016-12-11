# gulp-hammerspoon

_This is experimental code. Please don't use it for anything important._

Gulp-hammerspoon relays the status of your [Gulp](http://gulpjs.com) tasks to [Hammerspoon](http://www.hammerspoon.org). The code in `gulp-hammerspoon.lua` can display the status in your menubar, or you can use it as a reference to write whatever script you want.

To get notifications from a project, you need to npm install gulp-hammerspoon and add `require('gulp-hammerspoon')()` to the gulpfile. This approach is totally backwards, since we actually want this for every instance of gulp on this Mac without mucking with each project. I suspect the right way is to make a global cli wrapper `gulp-hs` that calls gulp with the hooks added. Stay tuned.