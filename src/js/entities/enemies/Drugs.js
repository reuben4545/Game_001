game.arson = game.Criminal.extend({
	"init": function(x, y, settings) {

		settings.image = "drugsSpriteSheet";

	  	this.parent(x, y, settings);

	  	this.type = "Drugs"

	    this.health = 10;

	    console.log(this.type);

  }

});