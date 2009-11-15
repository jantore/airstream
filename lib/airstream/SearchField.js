SearchField = function(config) {
  Ext.apply(this, config);
  
  SearchField.superclass.constructor.call(this, {
    doSearch     : function() {
      if(!this.getValue()) return

      if(this.useSameTab) {
        this.lastSearchGrid.updateSearch(this.getValue());
      } else {
        this.lastSearchGrid = Ext.ComponentMgr.get('list-panel').addSearch(this.getValue());
        this.useSameTab = true;
      }
    },

  });
}

Ext.extend(SearchField, Ext.form.TriggerField, {
  anchor        : '100%',
  triggerClass  : 'x-form-search-trigger',
  emptyText     : 'Search for an artist, album or song...',
	selectOnFocus : true,

  initComponent : function() {
    SearchField.superclass.initComponent.call(this);

    this.on('specialkey', function(f, e) {
      if(e.getKey() == e.ENTER){
        this.doSearch();
      }
    }, this);

    this.on('blur', function(f, e) {
      this.useSameTab = false;
    }, this);
  },

  onTriggerClick : function() {
    this.doSearch();
  },
});
