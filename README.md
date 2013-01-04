velocitr
========

This is a simple way of managing something's velocity and drag

Usage
-----

	// create an instance
	var v = new Velocitr();
	// set starting point
	v.move(30, true);
	// move
	v.move(50);
	// get velocity
	assert(v.velocity).equals(20);

Tests
-----
Run grunt from the root of the project

	$ grunt

Tests are written with the help of [QUnit](http://qunitjs.com) and [Pavlov](https://github.com/mmonteleone/pavlov) and can be found in the `test/` folder.