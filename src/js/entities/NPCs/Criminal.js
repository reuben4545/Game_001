
game.Criminal = me.ObjectEntity.extend({
	"init": function(x, y, settings) {

  	console.log("Criminal init called"); // called

  	this.parent(x, y, settings);

  	this.type = "Criminal"

    this.health = 10;

  	this.collidable = true;

  },

  update: function(dt) {

    console.log("dun");

    game.player = me.game.world.getChildByName("player")[0];

    var player_pos = game.player.pos;

    //me.game.getEntityByName("player")

    //console.log("HEY THERE, game.PlayerEntity.pos.x is: " + Math.pow(Math.abs(player_pos.x - this.pos.x), 2));

  },

  onCollision: function(res, obj){

  	if (obj.type === 'player'){
  		// Do something?
  	}

  },

  hit: function(damage){

    this.health -= damage;

    if(this.health <= 0){
      console.log("deaded");
      //dead!
      //this.destroy();


      //me.game.world.removeChild(this);

      me.game.world.addChild(this, 3);

      //me.game.update();






    }else{
      console.log("HIT!");
    }
  }


});