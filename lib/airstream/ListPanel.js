ListPanel = Ext.extend(Ext.TabPanel, {
    initComponent : function() {
        var config = {
            activeTab       : 0,
            region          : 'center',
            resizeTabs      : true,
            minTabWidth     : 100,
            enableTabScroll : true,
            defaults        : {
                autoScroll : true
            }
        };
        Ext.apply(this, config);
        ListPanel.superclass.initComponent.apply(this, arguments);
    },

    addSearch : function(term) {
        var grid = this.add(new SearchGrid({
            term : term
        }));
        grid.show();
        return grid;
    }
});
