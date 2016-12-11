# gulp-hammerspoon

_This is experimental code. Please don't use it for anything important._

Gulp-hammerspoon relays the status of your [Gulp](http://gulpjs.com) tasks to [Hammerspoon](http://www.hammerspoon.org). The code in `gulp-hammerspoon.lua` can display the status in your menubar, or you can use it as a reference to write whatever script you want.

To get notifications from a gulp process, run it as `gulp --require gulp-hammerspoon <taskname>`. You could alias that to `gulp-hs` or even `gulp` if you're feeling saucy. Unfortunately, you'll still have to install gulp-hammerspoon locally for every project. If you don't want to bother your collaborators who aren't hip to Hammerspoon, you don't have to save the dependency in package.json.