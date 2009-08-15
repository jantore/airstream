WestPanel = function(config) {
  Ext.apply(this, config);

  WestPanel.superclass.constructor.call(this, {
    activeTab   : 0,
    id          : 'west-panel',
    region      : 'west',
    split       : true,
    minWidth    : 125,
    width       : 160,
    maxWidth    : 200,
    collapsible : false,
    title       : 'West region',
  });

};

Ext.extend(WestPanel, Ext.TabPanel, {
  
});
