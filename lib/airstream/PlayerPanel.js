PlayerPanel = function(config) {
  Ext.apply(this, config);

  PlayerPanel.superclass.constructor.call(this, {
    region  : 'south',
    layout  : 'hbox',
    id      : 'player-panel',
    height  : 50,
    bodyCssClass     : 'player',
    bodyBorder : false,

    layoutConfig : {
      align : 'stretch',
      pack  : 'start',
    },

    items   : [
      {
        //html    : 'panel1',
        width   : 150,
      },
      {
        //html    : 'panel2',
        flex    : 1,
      },
      {
        //html    : 'panel3',
        flex    : 1,
      },
  
    ],
  });
}

Ext.extend(PlayerPanel, Ext.Panel, {});
