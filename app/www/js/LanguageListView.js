var LanguageListView = function () {

    var languages;

    this.initialize = function() {
        this.$el = $('<div/>');
        this.render();
    };

    this.setLanguages = function(list) {
        languages = list;
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template(languages));
        return this;
    };

    this.initialize();

}