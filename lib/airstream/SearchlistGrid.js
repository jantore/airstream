SearchlistGrid = function(config) {
  Ext.apply(this, config);

  this.store = new Ext.data.JsonStore({
    url    : '/playlists',
    root   : 'playlists',
    fields : [ 'id', 'name' ],
  });

  this.columns = [
    {
      id        : 'title',
      dataIndex : 'name',
    }
  ];
  this.autoExpandColumn = 'title';

  SearchlistGrid.superclass.constructor.call(this, {
    title            : '<img src="images/search.png" />',
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
      emptyText        : '<div class="empty">No searches done</div>',
      deferEmptyText   : false,
    },
  });
};

Ext.extend(SearchlistGrid, Ext.grid.GridPanel, {

});

Ext.reg('searchlist-grid', SearchlistGrid);
