var LanguageView = function(service) {

    var languageListView;
    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key', this.findByName);
        this.$el.on('click', '#setLang', this.setLang);
        languageListView = new LanguageListView();
        // ToDo Hacky workaround to display all languages in the beginning
        languageListView.setLanguages(service.returnAll());
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template());
        $('.content', this.$el).html(languageListView.$el);
        return this;
    };

    this.findByName = function() {
        service.findByName($('.search-key').val()).done(function(languages) {
            languageListView.setLanguages(languages);
        });
    };

    this.setLang = function () {
        var lang = $(this).attr("title");
        window.sessionStorage['language_id'] = lang;
    };
    this.initialize();
}

