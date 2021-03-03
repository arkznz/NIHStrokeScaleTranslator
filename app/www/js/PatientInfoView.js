var PatientInfoView = function(service) {

    var language_id;
    var patient_age;
    var paretic_hand;
    var saved_settings;

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '.btn-block',this.saveValues);
        language_id = window.sessionStorage['language_id'];
        patient_age = window.sessionStorage['patient_age'];
        paretic_hand = window.sessionStorage['paretic_hand'];
        service.findById(language_id).done(function(language) {
            saved_settings = language;
        });
        this.render();
    };

    this.render = function() {
        if (paretic_hand != null && patient_age !=null) {
            saved_settings.hand = paretic_hand;
            if (paretic_hand === "Right") {
                saved_settings.otherHand = "Left";
            }
            else {
                saved_settings.otherHand= "Right";
            }
            for (i=1; i<=125; i++) {
                if (i==patient_age) {
                    var age_key = "selected" + i;
                    saved_settings[age_key] = "selected";
                }
                else {
                    var age_key = "selected" + i;
                    saved_settings[age_key] = "";
                }
            }
        }
        else {
            saved_settings.hand = "Right";
            saved_settings.otherHand = "Left"
            saved_settings.selected50 = "selected";
        }
        this.$el.html(this.template(saved_settings));
        return this;
    };


    this.saveValues = function () {
        var d = new Date();
        var month = d.getMonth() + 1;
        var age = $('.patient_age').val();
        var hand = $('.paretic_hand').val();
        if (hand == "Left") {
            window.sessionStorage['paretic_hand'] = hand;
        } else {
            hand = "Right";
            window.sessionStorage['paretic_hand'] = "Right";
        }
        if (hand == "Right") {
            window.sessionStorage['non_paretic_hand'] = "Left";
        }
        else {
            window.sessionStorage['non_paretic_hand'] = "Right";
        }
        window.sessionStorage['patient_age'] = age;
        window.sessionStorage['month'] = month;
        var allPhrases = service.returnAllPhrases();
        var allTranslations = service.returnAllTranslations(language_id);
        for (var key in allPhrases) {
            var translations = [];
            var phrasesInPage = allPhrases[key];
            var translationsInPage = allTranslations[key];
            for (var i = 0; i < phrasesInPage.length; i++) {
                var solutions = [];
                var sol_phrase;
                var sol_translation;
                var sol_transliteration;
                var sol_audioFile;
                if ("solution" in phrasesInPage[i]) {
                    var solution_dict = phrasesInPage[i].solution;
                    var translation_dict = translationsInPage[i].solution;
                    var param = Object.keys(solution_dict)[0];
                    var answer = window.sessionStorage[param];
                    var solution_list = solution_dict[param];
                    var translation_list = translation_dict[param];
                    if (typeof answer !== 'undefined') {
                        sol_phrase = solution_list[answer - 1];
                        sol_translation = translation_list[answer - 1].translat;
                        sol_transliteration = translation_list[answer - 1].translit;
                        sol_audioFile = language_id + "_" + key + "_" + (i + 1) + "sol" + answer;
                        solutions[0] = {"sol_phrase": sol_phrase,"sol_translation": sol_translation,
                            "sol_transliteration":sol_transliteration,"sol_sound": sol_audioFile};
                    }
                    else {
                        for (var j = 0;j < translation_list.length;j++) {
                            sol_phrase = solution_list[j];
                            sol_translation = translation_list[j].translat;
                            sol_transliteration = translation_list[j].translit;
                            sol_audioFile = language_id + "_" + key + "_" + (i+1) + "sol" + (j+1);
                            solutions[j] = {"sol_phrase": sol_phrase,"sol_translation": sol_translation,
                                "sol_transliteration":sol_transliteration,"sol_sound": sol_audioFile};
                        }
                    }
                }
                var audioFileName = language_id + "_" + key + "_" + (i+1);
                var phrase = phrasesInPage[i].phrase;
                var translated = translationsInPage[i].phrase;
                if (typeof phrase === "string") {
                    translations[i] = {"phrase": phrase, "translation": translated.translat,
                        "transliteration": translated.translit, "sound": audioFileName, "solutions":solutions};
                }
                else {
                    var option = Object.keys(phrase)[0];
                    var selection = window.sessionStorage[option];
                    audioFileName = language_id + "_" + key + "_" + (i+1) + selection;
                    translations[i] = {"phrase": phrase[option][selection], "translation": translated[option][selection].translat,
                        "transliteration": translated[option][selection].translit, "sound": audioFileName,"solutions":solutions};
                }
            }
            window.sessionStorage[key] = JSON.stringify(translations);
        }

    };

    this.initialize();

}