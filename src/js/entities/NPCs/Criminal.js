
game.Criminal = me.ObjectEntity.extend({
	"init": function(x, y, settings) {

    console.log(settings);


  	console.log("Criminal init called"); // called

  	this.parent(x, y, settings);

  	this.type = "Criminal"

    this.health = 10;

  	this.collidable = true;

    this.canHit = true;

    this.z = 1;

    this.renderable.addAnimation("debug_die_anim", [0, 1, 2, 3, 4], 200);

    this.renderable.addAnimation("idle", [0], 100);

    this.renderable.setCurrentAnimation("idle");

    //this.renderable.setCurrentAnimation("debug_die");


    //this.renderable.setCurrentAnimation("debug_die");

    console.log("Criminal Length: " + me.game.world.getChildByName("Criminal").length);

  },

  update: function(dt) {


    this.parent(dt);


    player = me.game.world.getChildByName("player")[0];


    // Use pythag to check if the enemy is closer than 96 units
    if(Math.sqrt(Math.abs(Math.pow(this.pos.x - player.pos.x, 2)) + Math.abs(Math.pow(this.pos.y - player.pos.y, 2))) < 96){

      if(this.canHit){    
        player.hit(1);

        this.canHit = false;
      }

    }else{
      this.canHit = true;
    }


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



      if (!this.renderable.isCurrentAnimation("debug_die_anim")) {

        console.log("not debug_die_anim")
        // do something funny...
        var _this = this;
        this.renderable.setCurrentAnimation("debug_die_anim", function () {
          console.log("Finished! - bye bye!");
          me.game.world.removeChild(_this);
        });
      }




    }else{
      console.log("HIT!");
    }
  }


});