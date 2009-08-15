SearchGrid = function(term, config) {
  Ext.apply(this, config);
  

  SearchGrid.superclass.constructor.call(this, {
    title : term,
    store : new Ext.data.JsonStore({
      autoLoad   : true,
      url        : 'http://localhost:3000/search',
      root       : 'results',
      fields     : [ 'id', 'title', 'artist', 'album' ],
      baseParams : {
        query : term,
      }
    }),

    updateSearch : function(term) {
      this.store.baseParams.query = term;
      this.setTitle(term);
      this.store.load();
    },
  });
}


Ext.extend(SearchGrid, SongGrid, {
/*
  keys : {
    key     : 'w',
    ctrl    : true,
    handler : function(f, e) {
      f.destroy();
    }
  },
*/

  viewConfig : {
    emptyText : '<div class="empty">The search returned no results</div>',
  },
});
