// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {
    /* ---------------------------------- Local Variables ---------------------------------- */
    LanguageView.prototype.template = Handlebars.compile($("#language-tpl").html());
    LanguageListView.prototype.template = Handlebars.compile($("#language-list-tpl").html());
    PatientInfoView.prototype.template = Handlebars.compile($("#patient-info-tpl").html());
    QuestionView.prototype.template = Handlebars.compile($("#question-tpl").html());
    QuestionListView.prototype.template = Handlebars.compile($("#question-list-tpl").html());
    ScoreView.prototype.template = Handlebars.compile($("#score-tpl").html());
    ScoreListView.prototype.template = Handlebars.compile($("#score-list-tpl").html());
    EndView.prototype.template = Handlebars.compile($("#end-tpl").html());

    var service = new LanguageService();
    var lookup = new LookupService();
    var slider = new PageSlider($('body'));
    service.initialize().done(function () {
        router.addRoute('', function() {
            slider.slidePage(new LanguageView(service).render().$el);
        });
        router.addRoute('patientinfo', function() {
            slider.slidePage(new PatientInfoView(service).render().$el);
        });
        router.addRoute('question/:id', function(id) {
            slider.slidePage(new QuestionView(id,lookup).render().$el);
        });
        router.addRoute('score/:id', function(id) {
            slider.slidePage(new ScoreView(id,lookup).render().$el);
        });
        router.addRoute('end', function() {
            slider.slidePage(new EndView(lookup).render().$el);
        });
        router.start();
    });

    /* --------------------------------- Event Registration -------------------------------- */
    document.addEventListener('deviceready', function () {
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByHexString('#ffffff');
        StatusBar.styleDefault();
        FastClick.attach(document.body);
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Alert", // title
                    'OK'        // buttonName
                );
            };
        }
    }, false);
    /* ---------------------------------- Local Functions ---------------------------------- */


}());