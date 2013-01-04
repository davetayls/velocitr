velocitr
========

This is a simple way of managing something's velocity and drag

Usage
-----

```javascript
// create an instance
var v = new Velocitr();
// set starting point
v.move(30, true);
// move
v.move(50);
// get velocity
assert(v.velocity).equals(20);
// apply drag
v.drag = 0.9 // => default
v.decelerate()
assert(v.velocity).equals(18);
```

### Chaining
```javascript
var v = new Velocitr();
v.move(30, true)
 .move(60)
 .decelerate();
assert(v.velocity).equals(27);
```

Tests
-----
Run grunt from the root of the project

	$ grunt

Tests are written with the help of [QUnit](http://qunitjs.com) and [Pavlov](https://github.com/mmonteleone/pavlov) and can be found in the `test/` folder.