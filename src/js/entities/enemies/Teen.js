game.teen = game.Criminal.extend({
	"init": function(x, y, settings) {

		settings.image = "teenSpriteSheet";

  	this.parent(x, y, settings);

  	this.type = "ShopliftingTeen"

    this.health = 10;

  }

});