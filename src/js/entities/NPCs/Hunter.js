game.Hunter = me.ObjectEntity.extend({
    
        /* -----
 
    constructor
 
    ------ */
 
    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);

        // This variable allows us to set a type for the player so we can compare it later.
        // This is useful for collisions, we can check to see if an NPC has collided with the player.
        this.type = "hunter"
 
        // set the default horizontal & vertical speed (accel vector)
        this.setVelocity(5, 5);

        // ptthh. Who needs gravity?
        this.gravity = 0

        this.collidable = true;
        
        this.health = 10;

        this.maxHealth = 10;

        this.minHealth = 0;


    },
    
//get player entity
        var player = me.game.getEntityByName("mainPlayer")[0];

        //create vector based on player's postion
        var xDir = player.pos.x - this.pos.x;
        var yDir = player.pos.y - this.pos.y;
        console.log(xDir);

        //Decide distance

        xDir = (Math.abs(xDir) < 8) ? 0 : xDir.clamp(-1,1);
        yDir = (Math.abs(yDir) < 8) ? 0 : yDir.clamp(-1,1);

        //console.log(xDir);

        this.vel.x += this.accel.x * xDir;
        this.vel.y += this.accel.y * yDir;

        this.updateMovement();


});