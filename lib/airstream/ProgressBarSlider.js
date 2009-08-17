ProgressBarSlider = function(config) {
	Ext.apply(this, config);
	ProgressBarSlider.superclass.constructor.call(this, {});
}

Ext.extend(ProgressBarSlider, Ext.ProgressBar, {
	initComponent : function() {
    ProgressBarSlider.superclass.initComponent.call(this);
    this.updateProgress(0.8);
    this.on('afterrender', this.onElement, this);
  },
	
	onElement : function(e) {
		this.getEl().on('mousedown', this.handleClick, this);
		this.getEl().on('mousemove', this.handleMove,  this);
		this.getEl().on('mouseup',   this.finishMove,  this);
	},
	
	handleClick : function(e) {
		this.handleMove(e);
		this.lastX = e.getPageX()

    var me = this;
		this.interval = setInterval(function() {
      var box = me.getBox();
      var progress = (me.lastX - box.x) / box.width;
      me.updateProgress(progress); //, x + " " + box.x + " " + box.width + " " + progress);
		}, 50);
	},
	
	handleMove : function(e) {
		this.lastX = e.getPageX();
	},

	finishMove : function(e) {
		clearInterval(this.interval);
		if(e.getPageX() < this.getBox().x) this.reset;
	},
});
