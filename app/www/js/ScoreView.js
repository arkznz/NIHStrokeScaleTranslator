var ScoreView = function(id,lookup) {
    var scoreListView;
    var titleLookup;
    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '#score',this.score);
        scoreListView = new ScoreListView(id,lookup);
        titleLookup = lookup.getTitleLookup();
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template({"id":id,"title":titleLookup[id].title}));
        $('.content', this.$el).html(scoreListView.$el);
        return this;
    };

    this.score = function() {
        var points = $(this).attr("title");
        window.sessionStorage[id + "score"] = points;
    };
    this.initialize();
}