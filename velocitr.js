
function Velocitr(){
	this.set(0);
}
Velocitr.prototype = {
	value: 0,
	drag: 0.9, // between 0 and 1 where 1 is no drag
	max: 40,

	set: function(velocity){
		this.velocity = this.cap(velocity);
	},
	move: function(value, jumpTo){
		if (!jumpTo) this.set(value - this.value);
		this.value = value;
	},
	cap: function(velocity){
		if (Math.abs(velocity) > this.max){
			return velocity > 0 ? this.max : -this.max;
		} else {
			return velocity;
		}
	},
	decelerate: function(){
		this.velocity = Math.floor(Math.abs(this.velocity)) === 0 ? 0 // is velocity less than 1?
			: this.velocity * this.drag; // apply drag to velocity
	}
};

