// NOTE: Thiefs are people who steal on the street, burglars are people who go on somebodies property and steal.

game.burglar = game.Criminal.extend({
	"init": function(x, y, settings) {

		settings.image = "burglarSpriteSheet";

  	this.parent(x, y, settings);

  	this.type = "Burglar"

  	this.maxHealth = 15;

    this.health = 15;


  }


});