/*------------------- 
a player entity
-------------------------------- */
game.PlayerEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
 
    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);

        // This variable allows us to set a type for the player so we can compare it later.
        // This is useful for collisions, we can check to see if an NPC has collided with the player.
        this.type = "player"
 
        // set the default horizontal & vertical speed (accel vector)
        this.setVelocity(5, 5);

        // ptthh. Who needs gravity?
        this.gravity = 0

        this.collidable = true;
        
        this.health = 10;

        this.maxHealth = 10;

        this.minHealth = 0;

        this.canHit = true;
 
        // set the display to follow our position on both axis
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
    },

    fire: function(){


        if(this.canHit){

            criminals = me.game.world.getChildByName("Criminal");

            console.log("Criminal Length: " + me.game.world.getChildByName("Criminal").length);
            console.log("Nothing Length: " + me.game.world.getChildByName("").length);


            for(var i = 0; i < criminals.length; i++){

                // Use pythag to check if the enemy is closer than 96 units
                if(Math.sqrt(Math.abs(Math.pow(this.pos.x - criminals[i].pos.x, 2)) + Math.abs(Math.pow(this.pos.y - criminals[i].pos.y, 2))) < 96){

                    criminals[i].hit(1);

                    this.canHit = false;

                    _this = this;
                    setTimeout(function(){
                        _this.canHit = true
                    }, 500);

                }
            }
        }
    },

    hit: function(damage){

        this.health -= damage;

        if(this.health <= this.minHealth){
          console.log("player deaded");
          //dead!

          me.game.world.removeChild(this);

          me.game.world.addChild(this, 3);



        }
    },
 
    /* -----
 
    update the player pos
 
    ------ */
    update: function(dt) {

        this.parent(dt);

        //console.log(this.pos.x);

        // check & update player movement
        // Must go before me.game.world.collide(this)!
        this.updateMovement();
 

        // Check for collision
        // NOTE THIS LINE IS VERY VERY VERY IMPORTANT IF YOU WANT TO HAVE ANY KIND OF OBJECT WHICH WILL BE ACTIVATED ON COLLISION FOR EXAMPLE A DOOR!
        // This isn't something I could find online and the tutorial does NOT make this clear!
        var res = me.game.world.collide(this);

        if (res)
        {
            // There's been a collision between this and another object...

            // Unless otherwise proved, assume there has not been a collision between another object that we want to be collideable(create this variable inside the if res for efficiency)
            var collided = false;
            

            // Check to see if the collision was a NPC (with a value of "NPC")
            //TODO: Convert this bit from a static set of strings to a list

        }

        // If the player is not collided (set above)
        if(!collided){

            // Player movement and looks...
            if (me.input.isKeyPressed('left')) {
                // flip the sprite on horizontal axis
                this.flipX(true);
                // update the entity velocity
                this.vel.x -= this.accel.x * me.timer.tick;
            } else if (me.input.isKeyPressed('right')) {
                // unflip the sprite
                this.flipX(false);
                // update the entity velocity
                this.vel.x += this.accel.x * me.timer.tick;
            } else {
                this.vel.x = 0;
            }
     
            if(me.input.isKeyPressed("up")){
                this.vel.y -= this.accel.y * me.timer.tick;
            } else if (me.input.isKeyPressed("down")){
                this.vel.y += this.accel.y * me.timer.tick;
            } else {
                this.vel.y = 0;
            }

            if(me.input.isKeyPressed("fire")){
                //console.log("Hello there, it appears the fire key was pressed!");

                this.fire();
            }

            if(me.input.isKeyPressed("shift")){

                //DEBUG! REMOVE!

                this.setVelocity(15, 15);

            }else{

                this.setVelocity(5, 5);

            }
        }

 

        // update animation if necessary
        if (this.vel.x!=0 || this.vel.y!=0) {
            // update object animation
            this.parent(dt);
            return true;
        }
         
        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        //return false;

        // Potential efficiency problem - redraws screen EVERY update...
        return true;
    }
 
});