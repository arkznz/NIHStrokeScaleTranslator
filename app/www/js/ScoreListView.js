var ScoreListView = function(id,lookup) {
    var scoreLists;
    var scores;
    this.initialize = function() {
        this.$el = $('<div/>');
        scoreLists = lookup.getScoreLookup();
        scores = scoreLists[id];
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template(scores));
        return this;
    };

    this.initialize();
}