/*
  this.previousButton = new Ext.Button({
		//height : 32,
		//width  : 32,
		icon   : 'images/previous.png',
		cls    : 'x-btn-icon',
		//template : new Ext.Template('<div></div>'),
	});
*/

PlayerPanel = Ext.extend(Ext.Panel, {
	initComponent : function(config) {
    this.player = new AirPlayer();

    this.trackPanel = new Ext.Panel({
      tpl : new Ext.Template(
        '<div class="player-current-album" title="hei"><a href="#" title="hei"></a></div>',
        '<div class="player-current-track">',
          '<div class="player-current-artist"><a href="#">{artist}</a></div>',
          '<div class="player-current-title">{title}</div>',
        '</div>'
      ),
      border       : false,
      html         : '<div class="player-current-album"></div>',
      bodyCssClass : 'player',
      width        : 220,
    });

		Ext.apply(this, {
      region  : 'south',
      layout  : 'hbox',
      height  : 40,
      border  : false,
      layoutConfig : {
        align : 'stretch',
        pack  : 'start',
      },
			items   : [
        this.trackPanel,
        new Ext.ButtonGroup({
          xtype        : 'buttongroup',
          width        : 300,
          border       : false,
          hideBorders  : true,
          html         : '',
          bodyCssClass : 'player',
          items: [
            new Ext.Button({
							text    : 'Previous',
							handler : this.previousSong,
							scope   : this,
						}),
            new Ext.Button({
              text    : 'Play/pause',
              handler : this.togglePlayPause,
              scope   : this,
            }),
            new Ext.Button({
							text    : 'Next',
							handler : this.nextSong,
							scope   : this,
					  }),
          ],
        }),
        this.player,
      ],
		});
		
		PlayerPanel.superclass.initComponent.call(this);
	},

  playSong : function(song) {
    //var el = trackPanel.getEl();
    //Ext.get('current-artist').update(song.artist);
    //Ext.get('current-song').update(song.title);
    this.trackPanel.tpl.overwrite(this.trackPanel.body, song);
    this.player.play(song);
  },

  previousSong : function() {
		
	},

  togglePlayPause : function() {
    this.player.togglePlayPause();
  },
	
	nextSong : function() {
		
	}
});
