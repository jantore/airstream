Ext.onReady(function() {
    Ext.QuickTips.init();

    var viewport = new Ext.Viewport({
        layout : 'border',
        items  : [
            new SearchPanel(),
            new ListPanel({
                id : 'list-panel',
                items : [
                    new QueueGrid({ id : 'queue-grid' })
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
