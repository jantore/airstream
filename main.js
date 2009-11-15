Ext.onReady(function() {
    Ext.QuickTips.init();

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
	    new PlayerPanel({ id : 'player-panel' }),
	],
    });
});
