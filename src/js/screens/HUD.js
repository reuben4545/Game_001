/**
 * a HUD container and child items
 */
 
game.HUD = game.HUD || {};
  
game.HUD.Container = me.ObjectContainer.extend({
 
    init: function() {
        // call the constructor
        this.parent();
         
        // persistent across level change
        this.isPersistent = true;
         
        // non collidable
        this.collidable = false;
         
        // make sure our object is always draw first
        this.z = Infinity;
 
        // give a name
        this.name = "HUD";
         
        // add our child score object at the right-bottom position
        this.addChild(new game.HUD.ScoreItem(game.width / 2, game.height / 1.2));
    }
});
 
 
/** 
 * a basic HUD item to display score
 */
game.HUD.ScoreItem = me.Renderable.extend( {    
    /** 
     * constructor
     */
    init: function(x, y) {
         
        // call the parent constructor 
        // (size does not matter here)
        this.parent(new me.Vector2d(x, y), 10, 10); 
         
        // create a font
        this.font = new me.BitmapFont("32x32_font", 32);
        this.font.set("right");
         
        // local copy of the global score
        this.score = 2929;
 
        // make sure we use screen coordinates
        this.floating = true;

    },
     
    /**
     * update function
     */
    update : function (dt) {
        // we don't draw anything fancy here, so just
        // return true if the score has been updated
        //this.score = 2929;
        return false;
    },
 
    /**
     * draw the score
     */
    draw : function (context) {
        
        healthPercent = me.game.world.getChildByName("player")[0].health / me.game.world.getChildByName("player")[0].maxHealth;
        staminaPercent = me.game.world.getChildByName("player")[0].stamina / me.game.world.getChildByName("player")[0].maxStamina;

        context.fillStyle = 'black';
        context.fillRect((game.width / 6.70) - (500 / 2), (game.height / 1.09) - (30 / 2), 500, 100);
        
        context.fillStyle = 'red';
        context.fillRect((game.width / 7) - (500 / 2), (game.height / 1.02) - (30 / 2), 500 * healthPercent, 30);
        
        context.fillStyle = 'limegreen';
        context.fillRect((game.width / 7) - (500 / 2), (game.height / 1.07) - (30 / 2), 500 * staminaPercent, 30);
        
    }
});