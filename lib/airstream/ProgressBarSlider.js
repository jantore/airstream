ProgressBarSlider = Ext.extend(Ext.ProgressBar, {
    initComponent : function() {
        ProgressBarSlider.superclass.initComponent.call(this);
        this.setDisabled(true);
        this.addEvents('progresschanged');
        this.on('afterrender', this.onElement, this);
    },

    onElement : function(e) {
        this.getEl().on('mousedown', this.handleClick, this);
        this.getEl().on('mousemove', this.handleMove,  this);
        this.getEl().on('mouseup',   this.finishMove,  this);
    },

    handleClick : function(e) {
        if(e.button != 0 || this.disabled) return;
        this.handleMove(e);
        this.lastX = e.getPageX();

        var me = this;
        this.interval = setInterval(function() {
            var box = me.getBox();
            var progress = (me.lastX - box.x) / box.width;
            me.updateProgress(progress); //, x + " " + box.x + " " + box.width + " " + progress);
        }, 50);
    },

    handleMove : function(e) {
        if(e.button != 0 || this.disabled) return;
        this.lastX = e.getPageX();
    },

    finishMove : function(e) {
        if(e.button != 0 || this.disabled) return;
        clearInterval(this.interval);

        this.lastX = e.getPageX();
        var box = this.getBox();
        var progress = 0;

        if (this.lastX < box.x) {
            this.reset;
        } else {
	    progress = (this.lastX - box.x) / box.width;
	    this.updateProgress(progress);
        }

        this.fireEvent('progresschanged', progress);
    },
});
