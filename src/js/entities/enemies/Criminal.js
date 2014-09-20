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

    this.renderable.addAnimation("dead", [0], 400);

    this.renderable.addAnimation("attack", [1], 400);

    this.renderable.addAnimation("damaged", [2], 100);

    this.renderable.addAnimation("idle", [3], 100);

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

        console.log("HITTING");

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

      // do something funny...
      /*var _this = this;
      this.renderable.setCurrentAnimation("dead", function () {
        console.log("Now I'm really dead...");
        _this.die();
      });*/

      this.die();

    }else{
      var _this = this;
      this.renderable.setCurrentAnimation("damaged", function () {
        _this.renderable.setCurrentAnimation("idle");
      });
    }
  },
    
    
 draw : function (context) {
      
      this.parent(context);
          
      healthPercent = this.health / this.maxHealth;
     
      if(this.health <= 0){
          healthPercent = 0;
      }
          
      context.fillStyle = 'red';
      context.fillRect(this.pos.x, this.pos.y -30, 64 , 10);
      
      context.fillStyle = 'limegreen';
      context.fillRect(this.pos.x, this.pos.y -30, 64 * healthPercent, 10);

      console.log(this.reference + " ************************************");
          

      
  },

  die: function(){

    console.log("died!");

    console.log(this.image);

    this.reference = me.loader.getImage("deathExplosion");

    this.getShape().resize(256, 128);
    this.getShape().translate(64, 128);

    /*var animationSheet = new me.AnimationSheet(0, 0, {
      image: me.loader.getImage('deathExplosion'),
      spritewidth: 64,
      spriteheight: 64
    });*/



    //this.renderable.addAnimation("dead", [0], 400);


    //this.renderable.setCurrentAnimation("dead");

    /*//This line was removed. I unremoved it. I think something bad will happen.
    me.game.world.removeChild(this);

    game.updateRound();

    console.log("OFFICIALY DEAD...");*/

    var _this = this;

    this.renderable.setCurrentAnimation("dead", function () {
      //This line was removed. I unremoved it. I think something bad will happen.
      me.game.world.removeChild(_this);

      game.updateRound();

      console.log("OFFICIALY DEAD...");
    });

  }


});