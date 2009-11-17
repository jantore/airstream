QueueGrid = Ext.extend(SongGrid, {
    initComponent : function() {
        /*
        var QueueSong = Ext.data.Record.create([

        ]);
        */


        var queueStore = new Ext.data.ArrayStore({
            fields : [
                'id',
                'title',
                'artist',
                'album' ,
                'duration',
                'url',
                'search',
                'searchpos'
            ],
            currentPosition : null,
        });

        var view = new Ext.grid.GridView({
            emptyText      : '<div class="empty">Queue is empty</div>',
            deferEmptyText : false,
            getRowClass    : function(record, index, rp, store) {
                var cp = store.currentPosition;
                if(cp == null || index == cp) {
                    return 'song-grid-current';
                } else if(index < cp) {
                    return 'queue-grid-old';
                } else {
                    return '';
                }
            },
        });

        Ext.apply(this, {
            title          : 'Queue',
            store          : queueStore,
            enableDragDrop : true,
            viewConfig     : {
                emptyText      : '<div class="empty">Queue is empty</div>',
                deferEmptyText : false,
            },
            view : view,
        });
        QueueGrid.superclass.initComponent.apply(this, arguments);

        this.on('rowdblclick', function(f, row, e) {
            this.playEntry(row);
        })
    },

    purge : function() {
        for(i = this.store.getCount() - 1; i >= this.store.currentPosition; i--) {
            this.store.removeAt(i);
        }
    },

    queueSong : function(song, searchTerm, searchPos, play) {
        var o = {
            search : searchTerm,
            searchpos : searchPos,
        };
        Ext.apply(o, song);
        var p = new this.store.recordType(o);
        this.store.add(p);

        if(play) {
            this.playEntry(this.store.indexOf(p));
        }
    },

    playEntry : function(index) {
        if(this.store.currentPosition != null) {
            var previousRecord = this.store.getAt(this.store.currentPosition);
        }

        var r = this.store.getAt(index);
        if(!r) return null;

        this.store.currentPosition = index;
        var player = Ext.ComponentMgr.get('player-panel');
        player.playSong(r.data);

        this.view.refresh();

        /*
         * Use if refreshing entire grid is inefficient.
         */
        // if(previousRecord) {
        //     this.view.refreshRow(previousRecord);
        // }
        // this.view.refreshRow(r);
        return r;
    },

    next : function() {
        if(this.store.currentPosition < this.store.getCount() - 1) {
            return this.playEntry(this.store.currentPosition + 1);
        } else {
            this.store.currentPosition = null;
            return null;
        }
    },

    previous : function() {

    },

    highlightTab : function() {
        var tab = Ext.get(this.ownerCt.getTabEl(this));
        tab.frame("cccc22", 1, { duration: 0.4 });
    }
});
