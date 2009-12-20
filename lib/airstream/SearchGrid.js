SearchGrid = Ext.extend(SongGrid, {
    initComponent : function() {
        var config = {
            title    : this.term,
            closable : true,
	    loadMask : {
		msg : 'Searching...',
	    },
            store    : new Ext.data.JsonStore({
                autoLoad   : true,
                url        : Airstream.config.apiRoot + '/search',
                root       : 'results',
                fields     : [ 'id', 'title', 'artist', 'album' , 'duration', 'url' ],
                baseParams : {
                    query : this.term,
                },
                viewConfig : {
                    emptyText : '<div class="empty">The search returned no results</div>',
                },
            }),
        }
        Ext.apply(this, config);
        SearchGrid.superclass.initComponent.apply(this, arguments);

        this.on('rowdblclick', function(f, row, e) {
            var queuePanel = Ext.ComponentMgr.get('queue-grid');

            queuePanel.purge();
            queuePanel.queueSong(this.store.getAt(row).data, this.term, row, true);
            for(i = row + 1; i < this.store.getCount(); i++) {
                queuePanel.queueSong(this.store.getAt(i).data, this.term, row, false);
            }
            queuePanel.highlightTab();
        })

    },

    updateSearch : function(term) {
      this.store.baseParams.query = term;
      this.setTitle(term);
      this.store.load();
    },

    playSong : function(song) {
        var player = Ext.ComponentMgr.get('player-panel');
        player.playSong(song);
    }

});

/*
// Map C-w to close window.
  keys : {
    key     : 'w',
    ctrl    : true,
    handler : function(f, e) {
      f.destroy();
    }
  },
*/

