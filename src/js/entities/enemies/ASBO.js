game.ASBO = game.Criminal.extend({
	"init": function(x, y, settings) {

	settings.image = "asboSpriteSheet";

	this.parent(x, y, settings);

	this.type = "ASBO"

  this.health = 10;

  console.log(this.type);


  }

});