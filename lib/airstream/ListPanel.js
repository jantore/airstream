ListPanel = function(config) {
  Ext.apply(this, config);

  ListPanel.superclass.constructor.call(this, {
    activeTab       : 0,
    id              : 'list-panel',
    region          : 'center',
    resizeTabs      : true,
    minTabWidth     : 100,
    enableTabScroll : true,
    defaults        : {
      autoScroll      : true
    },
  });

  this.addSearch = function(term) {
    var grid = this.add(new SearchGrid(term, {
      closable : true,
    }));
    grid.show();
    return grid;
  }
}

Ext.extend(ListPanel, Ext.TabPanel, {

});
