game.weirdal = game.Criminal.extend({
	"init": function(x, y, settings) {

		settings.image = "weaponSpriteSheet";

  	this.parent(x, y, settings);

  	this.type = "WeirdAl"

    this.health = 10;

    console.log(this.type);


  }

});