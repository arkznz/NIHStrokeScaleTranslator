var QuestionListView = function(id) {
    var phrases;

    this.initialize = function() {
        this.$el = $('<div/>');
        phrases = JSON.parse(window.sessionStorage[id]);
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template(phrases));
        return this;
    };

    this.initialize();
}