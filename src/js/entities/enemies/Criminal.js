game.Criminal = me.ObjectEntity.extend({
	"init": function(x, y, settings) {

  	this.parent(x, y, settings);

  	this.type = "Criminal"

    this.maxHealth = 10;

    this.health = 10;

  	this.collidable = true;

    this.canHit = true;

    this.hitCooldown = 1000;

    this.following = true;

    this.followRadius = 7.5;

    this.z = 1;

    this.gravity = 0;

    this.speed = 3;

    this.renderable.addAnimation("debug_die_anim", [0, 1, 2, 3, 4], 200);

    this.renderable.addAnimation("idle", [0], 100);

    this.renderable.setCurrentAnimation("idle");


  },

  update: function(dt) {

    this.parent(dt);

    // check & update player movement
    this.updateMovement();

    player = me.game.world.getChildByName("player")[0];

    // Use pythag to check how far away the enemy is
    playerDistance = Math.sqrt(Math.abs(Math.pow(this.pos.x - player.pos.x, 2)) + Math.abs(Math.pow(this.pos.y - player.pos.y, 2)));

    // Check if can follow
    if(playerDistance < 64 * this.followRadius){

      this.follow(player);

      this.following = true;

    } else{

      this.following = false;

      this.vel.x = 0;
      this.vel.y = 0;

    }

    // Check if can hit
    if(playerDistance < 64 * 1.5){

      if(this.canHit){    
        player.hit(1);

        this.canHit = false;

        _this = this;
        setTimeout(function(){
          _this.canHit = true;
        }, this.hitCooldown);
      }

    }



  },

  follow: function(player){

    if(player.pos.x > this.pos.x){
      this.vel.x = this.speed;
    }else if(player.pos.x < this.pos.x){
      this.vel.x = -this.speed;
    }else{
      this.vel.x = 0;
    }

    if(player.pos.y > this.pos.y){
      this.vel.y = this.speed;
    }else if(player.pos.y < this.pos.y){
      this.vel.y = -this.speed;
    }else{
      this.vel.y = 0;
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
      console.log("HIT! Health: " + this.health);
    }
  }


});