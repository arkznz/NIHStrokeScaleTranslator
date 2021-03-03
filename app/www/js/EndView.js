var EndView = function(lookup) {
    var questionListView;
    var resultLookup;
    var order;

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '#playAudio',this.playAudio);
        questionListView = new QuestionListView("end");
        resultLookup = lookup.getResultLookup();
        order = lookup.getOrder();
        this.render();
    };

    this.render = function() {
        var points_total = 0;
        var resultsList = [];
        for (var i=0;i<order.length;i++) {
            var id = order[i];
            var scoresList = resultLookup[id];
            var score_key = id + "score";
            var points_str = window.sessionStorage[score_key];
            var points_int = 0;
            var description = "";
            if (points_str === "UN") {
                points_int = 0;
                description = scoresList[scoresList.length - 1].description;
            }
            else {
                points_int = parseInt(points_str);
                description = scoresList[points_int].description;
            }
            resultsList.push({"id":id,"score":points_str,"description":description});
            points_total = points_total + points_int;
        }
        var results = {"points_total":points_total,"results":resultsList};
        this.$el.html(this.template(results));
        $('.content-padded', this.$el).html(questionListView.$el);
        return this;
    };

    this.playAudio = function () {
        var filename = $(this).attr("title");
        var url = "assets/sounds/" + filename + ".wav";
        var media = new Media(url,
            // success callback
            function () { console.log("playAudio():Audio Success"); },
            // error callback
            function (err) { console.log("playAudio():Audio Error: " + err); }
        );
        media.setVolume(1.0);
        media.play();
    };

    this.initialize();
}