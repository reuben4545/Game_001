game.weapons = game.Criminal.extend({
	"init": function(x, y, settings) {

		settings.image = "weaponSpriteSheet";

  	this.parent(x, y, settings);

  	this.type = "Weapons"

    this.health = 10;

    console.log(this.type);


  }

});