FrontPanel = Ext.extend(Ext.Panel, {
    initComponent : function() {
        Ext.apply(this, {
            title          : 'Queue',
            enableDragDrop : true,
            id             : 'front-panel',
            viewConfig : {
                forceFit       : true,
                scrollOffset   : 0,
                emptyText      : '<div class="empty">Queue is empty</div>',
                deferEmptyText : false,
            }
        });
        FrontPanel.superclass.initComponent.apply(this, arguments);
    }
});
