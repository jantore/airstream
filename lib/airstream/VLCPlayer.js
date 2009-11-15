VLCPlayer = Ext.extend(Player, {
    initComponent : function() {
	var vlc = document.createElement('embed');
	vlc.setAttribute('type', 'application/x-vlc-plugin');
	vlc.setAttribute('pluginspage', 'http://www.videolan.org');
	vlc.setAttribute('version', 'VideoLAN.VLCPlugin.2');
	vlc.setAttribute('hidden', 'true');

	var playerElement = new Ext.Element(vlc); //DomHelper.createDom('<embed type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" version="VideoLAN.VLCPlugin.2" id="vlc" hidden="true"></embed>');
	//playerElement.unselectable();
	//air.trace("player element: " + playerElement.dom);
	//playerElement.appendTo(panel.contentEl);
	Ext.apply(this, {
	    player : vlc //playerElement.dom
	});
	VLCPlayer.superclass.initComponent.apply(this, arguments);
	document.body.appendChild(playerElement.dom);

	var me = this;
	this.interval = setInterval(function() {
	    me.pollState();
	}, 50);
    },

    play : function(song) {
	Airstream.util.log("VLCPlayer.play");
	var item = this.player.playlist.add(song.url);
	this.player.playlist.playItem(item);
	this.slider.setDisabled(false);
    },

    togglePlayPause : function() {
	Airstream.util.log("togglePlayPause");
	this.player.playlist.togglePause();
    },

    handleSeek : function(progress) {
	this.player.input.position = progress;
    },

    pollState : function() {
	//Airstream.util.log("VLCPlayer.pollState: " + this);
	var i = this.player.input;
	if(i.state == 3) { // playing
	    this.slider.updateProgress(i.position);
	    this.timer.body.update(Airstream.util.formatTime(i.time / 1000));
	    this.totalTime.body.update(Airstream.util.formatTime(i.length / 1000));
	}
    }
});