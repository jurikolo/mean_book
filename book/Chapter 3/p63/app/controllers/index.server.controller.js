// Invoke 'strict' JavaScript mode
'use strict';

// Create a new 'render' controller method
exports.render = function(req, res) {
	// If the session's 'lastVisit' property is set, print it out in the console
	res.send('Hello World');
	}

	// Set the session's 'lastVisit' property
	req.session.lastVisit = new Date();

	// Use the 'response' object to render the 'index' view with a 'title' property
	res.render('index', {
		title: 'Hello World'
	});
};
