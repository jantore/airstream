SearchPanel = function(config) {
  Ext.apply(this, config);
  
  SearchPanel.superclass.constructor.call(this, {
    margins : '1',
    region  : 'north',
    layout  : 'anchor',
    split   : false,
    height  : 24,
    id      : 'search-panel',
    items   : new SearchField(),
  });

};

Ext.extend(SearchPanel, Ext.Panel, {
  
});
