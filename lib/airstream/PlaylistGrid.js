PlaylistGrid = function(config) {
  Ext.apply(this, config);

  this.store = new Ext.data.JsonStore({
    url    : 'http://localhost:3000/playlists',
    root   : 'playlists',
    fields : [ 'id', 'name' ],
  });

  this.columns = [
    {
      id        : 'title',
      dataIndex : 'name',
    }
  ];

  PlaylistGrid.superclass.constructor.call(this, {
    title            : '<img src="images/playlist.png" />',
    enableDragDrop   : true,
    hideHeaders      : true,
    columns          : [
      {
        id        : 'title',
        dataIndex : 'name',
      }
    ],
    autoExpandColumn : 'title',
    viewConfig       : {
      headersDisabled  : true,
      forceFit         : true,
      scrollOffset     : 0,
      emptyText        : '<div class="empty">No playlists created</div><div class="empty"><a href="#">Create new playlist...</a></div>',
      deferEmptyText   : false,
    },
  });
};

Ext.extend(PlaylistGrid, Ext.grid.GridPanel, {

});

Ext.reg('playlist-grid', PlaylistGrid);
