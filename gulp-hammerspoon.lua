gulpState = {}
gulpMenu = hs.menubar.new()

hs.urlevent.bind("gulp", function(eventName, params)
	local icons = {start="🍳", stop="🏆", err="👺"}
	if params.event == "quit" then
		gulpState[params.project] = nil
	else
		if gulpState[params.project] == nil then
			gulpState[params.project] = {}
		end
		gulpState[params.project][params.task] = params.event
	end
	local mainStatus = nil
	local menuItems = {}
	for proj,tasks in pairs(gulpState) do
		table.insert(menuItems,{title=proj})
		for task,status in pairs(tasks) do
			if status=="err" or mainStatus=="err" then
				mainStatus = "err"
			elseif status=="start" or mainStatus=="start" then
				mainStatus = "start"
			else
				mainStatus = "stop"
			end
			table.insert(menuItems,{title=icons[status]..task})
		end
	end
	gulpMenu:setTitle(icons[mainStatus])
	gulpMenu:setMenu(menuItems)
end)