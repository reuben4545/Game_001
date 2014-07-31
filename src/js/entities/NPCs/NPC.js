game.NPC = me.ObjectEntity.extend({
  
	"init": function(x, y, settings) {

	console.log("NPC init called"); // called

	this.parent(x, y, settings);

	this.type = "NPC"

	this.collidable = true;

	// Set the font for the NPC (Can be custom or HTML build in font (see browser compatible fonts)
  //this.font = new me.BitmapFont("32x32_font", 32);
  this.font = new me.Font("Arial", 15, "white");

  }


});