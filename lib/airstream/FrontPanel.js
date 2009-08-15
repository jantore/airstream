FrontPanel = function(config) {
  Ext.apply(this, config);

  FrontPanel.superclass.constructor.call(this, {
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

};

Ext.extend(FrontPanel, Ext.Panel, {

});
