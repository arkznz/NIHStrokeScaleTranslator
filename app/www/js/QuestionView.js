var QuestionView = function(id,lookup) {
    var questionListView;

    var question_id;

    this.initialize = function() {
        question_id = id;
        this.$el = $('<div/>');
        this.$el.on('click', '#playAudio',this.playAudio);
        this.$el.on('click', '#toggleHide',this.toggleHide);
        questionListView = new QuestionListView(id);
        questionLookup = lookup.getQuestionLookup();
        this.render();
    };

    this.render = function() {
        var values = questionLookup[question_id];
        values.id = id;
        this.$el.html(this.template(values));
        $('.content', this.$el).html(questionListView.$el);
        if (values.solution) {
            $('.bar-footer-secondary', this.$el).show();
            $('.bar-footer-secondary', this.$el).html('<button id="toggleHide" class="btn btn-negative btn-block">Show/Hide Answers</button>');
        }
        return this;
    };

    this.playAudio = function () {
        var filename = $(this).attr("title");
        var url = "assets/sounds/" + filename + ".wav";
        //alert(url);
        var media = new Media(url,
            // success callback
            function () { console.log("playAudio():Audio Success"); },
            // error callback
            function (err) { console.log("playAudio():Audio Error: " + err); }
        );
        media.setVolume(1.0);
        media.play();
    };

    this.toggleHide = function() {
        if ($('.media').is(":hidden")) {
            $('.media').show();
        }
        else {
            $('.media').hide();
        }
    };

    this.initialize();
}