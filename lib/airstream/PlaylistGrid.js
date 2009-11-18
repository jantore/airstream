PlaylistGrid = Ext.extend(Ext.grid.GridPanel, {
    initComponent : function() {
        var config = {
            title            : '<img src="images/playlist.png" />',
            enableDragDrop   : true,
            hideHeaders      : true,
            autoExpandColumn : 'title',
            store            : new Ext.data.JsonStore({
                url    : '/playlists',
                root   : 'playlists',
                fields : [ 'id', 'name' ],
            }),
            columns          : [
                {
                    id        : 'title',
                    dataIndex : 'name',
                }
            ],
            viewConfig       : {
                headersDisabled  : true,
                forceFit         : true,
                scrollOffset     : 0,
                emptyText        : '<div class="empty">No playlists created</div><div class="empty"><a href="#">Create new playlist...</a></div>',
                deferEmptyText   : false,
            },

        }
        Ext.apply(this, config);
        PlaylistGrid.superclass.initComponent.apply(this, arguments);
    }
});
