Player = Ext.extend(Ext.Panel, {
    initComponent : function() {
	var timer = new Ext.Panel({
	    width        : 40,
	    bodyCssClass : 'player player-time',
	    border       : false,
	    html         : '<div id="current-time"></div>',
	});

	var totalTime = new Ext.Panel({
	    bodyCssClass : 'player player-time',
	    border       : false,
	    width        : 40,
	    html         : '', 
	});

	var slider = new ProgressBarSlider({
	    animate : false,
	    flex    : 1,
	    height  : 12,
	});

	var config = {
	    timer        : timer,
	    totalTime    : totalTime,
	    slider       : slider,
	    layout       : 'hbox',
	    layoutConfig : {
		align   : 'top',
		padding : '13 8 0 8',
	    },
	    bodyCssClass : 'player',
	    border       : false,
	    flex         : 1,
	    items        : [
		timer,
		slider,
		totalTime,
	    ],
	};

	Ext.apply(this, config),
	Player.superclass.initComponent.apply(this, arguments);

	this.slider.on('progresschanged', this.handleSeek, this);
    }
});