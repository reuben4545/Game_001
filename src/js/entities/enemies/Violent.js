game.violent = game.Criminal.extend({
	"init": function(x, y, settings) {

		settings.image = "violentSpriteSheet";

  	this.parent(x, y, settings);

  	this.type = "Violent"

    this.health = 10;

    console.log(this.type);


  }

});