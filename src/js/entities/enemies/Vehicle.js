game.vehicle = game.Criminal.extend({
	"init": function(x, y, settings) {

		settings.image = "vehicleSpriteSheet";

  	this.parent(x, y, settings);

  	this.type = "Vehicle"

    this.health = 10;

    console.log(this.type);


  }

});