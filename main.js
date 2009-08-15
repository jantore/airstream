Ext.onReady(function() {
  Ext.QuickTips.init();

  var search = new SearchPanel();

  var playlist = new PlaylistGrid();
  var searchlist = new SearchlistGrid();
  var west = new WestPanel({
    items: [
      playlist,
      searchlist
    ],
  });

  var viewport = new Ext.Viewport({
    layout : 'border',
    items  : [
      new SearchPanel(),
      new ListPanel({
        items : [
          new FrontPanel()
        ]
      }),
      new WestPanel({
        items : [
          new PlaylistGrid(),
          new SearchlistGrid(),
        ]
      }),
      new PlayerPanel(),
    ],
  });

  playlist.store.load();

});
