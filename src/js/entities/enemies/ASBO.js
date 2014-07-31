game.ASBO = game.Criminal.extend({
	"init": function(x, y, settings) {

  	this.parent(x, y, settings);

  	this.type = "ASBO"

    this.health = 10;

    this.renderable.addAnimation("debug_die_anim", [0, 1, 2, 3, 4], 200);

    this.renderable.addAnimation("idle", [0], 100);

    this.renderable.setCurrentAnimation("idle");

    console.log(this.type);


  }

});