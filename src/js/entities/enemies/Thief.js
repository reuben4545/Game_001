// NOTE: Thiefs are people who steal on the street, burglars are people who go on somebodies property and steal.

game.theif = game.Criminal.extend({
	"init": function(x, y, settings) {

		settings.image = "theifSpriteSheet";

  	this.parent(x, y, settings);

  	this.type = "Thief"

  	this.maxHealth = 15;

    this.health = 15;


  }


});