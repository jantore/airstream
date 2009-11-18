SongGrid = Ext.extend(Ext.grid.GridPanel, {
    initComponent : function() {
        Ext.apply(this, {
            columns : [
                {
                    header    : 'Title',
                    width     : 250,
                    id        : 'title',
                    dataIndex : 'title',
                },
                {
                    header    : 'Artist',
                    width     : 175,
                    id        : 'artist',
                    dataIndex : 'artist',
                },
                {
                    header    : 'Time',
                    width     : 50,
                    id        : 'duration',
                    dataIndex : 'duration',
                    align     : 'right',
                    renderer  : function(value) {
                        return Airstream.util.formatTime(value);
                    }
                },
                {
                    header    : 'Album',
                    id        : 'album',
                    dataIndex : 'album',
                },
            ],
            enableDragDrop   : false,
            enableHdMenu     : false,
            autoExpandColumn : 'album',
            stripeRows       : true,
            viewConfig       : {
                //forceFit : true,
            },
        });
        SongGrid.superclass.initComponent.apply(this, arguments);
    },
});
