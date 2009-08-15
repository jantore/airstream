SongGrid = function(config) {
  Ext.apply(this, config);
  
  
};

SongGrid = Ext.extend(Ext.grid.GridPanel, {
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
      header    : 'Length',
      width     : 50,
      id        : 'length',
      dataIndex : 'length',
    },
    {
      header    : 'Album',
      id        : 'album',
      dataIndex : 'album',
    },
  ],
  autoExpandColumn: 'album',
  viewConfig : {
    //forceFit : true,
  },
});
