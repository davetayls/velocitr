/**
 * Velocitr
 * Simple way of managing somethings velocity and drag
 */
/*global module,define */
(function(global){

	function Velocitr(){
		this.set(0);
	}
	Velocitr.prototype = {
		value: 0,
		drag: 0.9, // between 0 and 1 where 1 is no drag
		max: 40,

		/**
		 * Set a velocity directly
		 * @param {number} velocity new velocity (will be capped)
		 */
		set: function(velocity){
			this.velocity = this.cap(velocity);
			return this;
		},
		/**
		 * Move the value to new position
		 * @param  {number} value  new position
		 * @param  {bool}   jumpTo skip velocity calculation
		 */
		move: function(value, jumpTo){
			if (!jumpTo) this.set(value - this.value);
			this.value = value;
			return this;
		},
		/**
		 * Return a capped velocity
		 * @param  {number} velocity
		 */
		cap: function(velocity){
			if (Math.abs(velocity) > this.max){
				return velocity > 0 ? this.max : -this.max;
			} else {
				return velocity;
			}
			return this;
		},
		/**
		 * Calculate a new velocity after drag
		 */
		decelerate: function(){
			this.velocity = Math.floor(Math.abs(this.velocity)) === 0 ? 0 // is velocity less than 1?
				: this.velocity * this.drag; // apply drag to velocity
			return this;
		}
	};

	if (typeof exports !== 'undefined') {
		module.exports = Velocitr;
	} else if (global.define && global.define.amd) {
		define(function(){ return Velocitr; });
	} else {
		global.Velocitr = Velocitr;
	}

})(this);
