var LookupService = function() {
    var order = ["1a","1b","1c","2","3","4","5a","5b","6a","6b","7","8","9","10","11"];
    var lookup = {"1a":{'prev_page':'patientinfo','title':'Level of Consciousness','solution':false, "next_page":"question/1b",
            "scores":[{"score":"0", "description":"Alert; keenly responsive."},
            {"score":"1", "description":"Not alert; but arousable by minor stimulation to obey, answer, or respond."},
            {"score":"2","description":"Not alert; requires repeated stimulation to attend, or is obtunded and requires strong or painful stimulation to make movements (not stereotyped)."},
            {"score":"3","description":"Responds only with reflex motor or autonomic effects or totally unresponsive, flaccid, and areflexic."}
        ]}, "1b":{'prev_page':'score/1a','title':'LOC Questions','solution':true,"next_page":"question/1c",
            "scores":[{"score":"0","description":"Answers both questions correctly."},
            {"score":"1","description":"Answers one question correctly."},
            {"score":"2","description":"Answers neither question correctly."},
        ]}, "1c":{'prev_page':'score/1b','title':'LOC Commands','solution':false,"next_page":"question/2",
            "scores":[{"score":"0","description":"Performs both tasks correctly."},
            {"score":"1","description":"Performs one task correctly."},
            {"score":"2","description":"Performs neither task correctly."}
        ]},"2":{'prev_page':'score/1c','title':'Best Gaze','solution':false,"next_page":"question/3",
            "scores":[{"score":"0","description":"Normal."},
            {"score":"1","description":"Partial gaze palsy; gaze is abnormal in one or both eyes, but forced deviation or total gaze paresis is not present."},
            {"score":"2","description":"Forced deviation, or total gaze paresis not overcome by the oculocephalic maneuver."}
        ]},"3":{'prev_page':'score/2','title':'Visual','solution':true,"next_page":"question/4",
            "scores": [{"score":"0","description":"No visual loss."},
            {"score":"1","description":"Partial hemianopia."},
            {"score":"2","description":"Complete  hemianopia."},
            {"score":"3","description":"Bilateral hemianopia (blind including cortical blindness)."}
        ]},"4":{'prev_page':'score/3','title':'Facial Palsy','solution':false,"next_page":"question/5a",
            "scores":[{"score":"0","description":"Normal symmetrical movements."},
            {"score":"1","description":"Minor paralysis (flattened nasolabial fold, asymmetry on smiling)."},
            {"score":"2","description":"Partial paralysis (total or near-total paralysis of lower face)."},
            {"score":"3","description":"Complete paralysis of one or both sides (absence of facial movement in the upper and lower face)."}
        ]},"5a":{'prev_page':'score/4','title':'Motor Arm (Non-Paretic)','solution':false,"next_page":"question/5b",
            "scores":[{"score":"0","description":"No drift; limb holds 90 (or 45) degrees for full 10 seconds."},
            {"score":"1","description":"Drift; limb holds 90 (or 45) degrees, but drifts down before full 10 seconds; does not hit bed or other support."},
            {"score":"2","description":"Some effort against gravity; limb cannot get to or maintain (if cued) 90 (or 45) degrees, drifts down to bed, but has some effort against gravity."},
            {"score":"3","description":"No effort against gravity; limb falls."},
            {"score":"4","description":"No movement."},
            {"score":"UN","description":"Amputation or joint fusion. Please document an explanation."}
        ]},"5b":{'prev_page':'score/5a','title':'Motor Arm (Paretic)','solution':false,"next_page":"question/6a",
            "scores":[{"score":"0","description":"No drift; limb holds 90 (or 45) degrees for full 10 seconds."},
            {"score":"1","description":"Drift; limb holds 90 (or 45) degrees, but drifts down before full 10 seconds; does not hit bed or other support."},
            {"score":"2","description":"Some effort against gravity; limb cannot get to or maintain (if cued) 90 (or 45) degrees, drifts down to bed, but has some effort against gravity."},
            {"score":"3","description":"No effort against gravity; limb falls."},
            {"score":"4","description":"No movement."},
            {"score":"UN","description":"Amputation or joint fusion. Please document an explanation."}
        ]},"6a":{'prev_page':'score/5b','title':'Motor Leg (Non-Paretic)','solution':false,"next_page":"question/6b",
            "scores":[{"score":"0","description":"No drift; leg holds 30-degree position for full 5 seconds."},
            {"score":"1","description":"Drift; leg falls by the end of the 5-second period but does not hit bed."},
            {"score":"2","description":"Some effort against gravity; leg falls to bed by 5 seconds, but has some effort against gravity."},
            {"score":"3","description":"No effort against gravity; leg falls to bed immediately."},
            {"score":"4","description":"No movement."},
            {"score":"UN","description":"Amputation or joint fusion. Please document an explanation."}
        ]}, "6b":{'prev_page':'score/6a','title':'Motor Leg (Paretic)','solution':false,"next_page":"question/7",
            "scores":[{"score":"0","description":"No drift; leg holds 30-degree position for full 5 seconds."},
            {"score":"1","description":"Drift; leg falls by the end of the 5-second period but does not hit bed."},
            {"score":"2","description":"Some effort against gravity; leg falls to bed by 5 seconds, but has some effort against gravity."},
            {"score":"3","description":"No effort against gravity; leg falls to bed immediately."},
            {"score":"4","description":"No movement."},
            {"score":"UN","description":"Amputation or joint fusion. Please document an explanation."}
        ]},"7":{'prev_page':'score/6b','title':'Limb Ataxia','solution':false,"next_page":"question/8",
            "scores":[{"score":"0","description":"Absent."},
            {"score":"1","description":"Present in one limb."},
            {"score":"2","description":"Present in two limbs."},
            {"score":"UN","description":"Amputation or joint fusion. Please document an explanation."}
        ]}, "8":{'prev_page':'score/7','title':'Sensory','solution':false,"next_page":"question/9",
            "scores":[{"score":"0", "description":"Normal; no sensory loss."},
            {"score":"1","description":"Mild-to-moderate sensory loss; patient feels pinprick is less sharp or is dull on the affected side; or there is a loss of superficial pain with pinprick, but patient is aware of being touched."},
            {"score":"2","description":"Severe to total sensory loss; patient is not aware of being touched in the face, arm, and leg."}
        ]},"9":{'prev_page':'score/8','title':'Best Language','solution':true,"next_page":"question/10",
            "scores":[{"score":"0","description":"No aphasia; normal."},
            {"score":"1","description":"Mild-to-moderate aphasia; some obvious loss of fluency or facility of comprehension, without significant limitation on ideas expressed or form of expression.  Reduction of speech and/or comprehension, however, makes conversation about provided materials difficult or impossible.  For example, in conversation about provided materials, examiner can identify picture or naming card content from patient’s response."},
            {"score":"2","description":"Severe aphasia; all communication is through fragmentary expression; great need for inference, questioning, and guessing by the listener.  Range of information that can be exchanged is limited; listener carries burden of communication.  Examiner cannot identify materials provided from patient response."},
            {"score":"3","description":"Mute, global aphasia; no usable speech or auditory comprehension."}
        ]},"10":{'prev_page':'score/9','title':'Dysarthria','solution':false,"next_page":"question/11",
            "scores":[{"score":"0","description":"Normal."},
            {"score":"1","description":"Mild-to-moderate dysarthria; patient slurs at least some words and, at worst, can be understood with some difficulty."},
            {"score":"2","description":"Severe dysarthria; patient's speech is so slurred as to be unintelligible in the absence of or out of proportion to any dysphasia, or is mute/anarthric."},
            {"score":"UN","description":"Intubated or other physical barrier. Please document an explanation."}
        ]},"11":{'prev_page':'score/10','title':'Extinction and Inattention','solution':false,"next_page":"end",
            "scores":[{"score":"0","description":"No abnormality."},
            {"score":"1","description":"Visual, tactile, auditory, spatial, or personal inattention or extinction to bilateral simultaneous stimulation in one of the sensory modalities."},
            {"score":"2","description":"Profound hemi-inattention or extinction to more than one modality; does not recognize own hand or orients to only one side of space."},
        ]}
    };

    this.initialize = function () {
        // No Initialization required
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    };
    this.getTitleLookup = function () {
        var titleLookup = {};
        for (var id in lookup) {
            var dict = lookup[id];
            var filtered = Object.keys(dict).reduce(function (filtered, key) {
                if (key === "title") filtered[key] = dict[key];
                return filtered;
            }, {});
            titleLookup[id] = filtered;
        }
        return questionLookup;
    };
    this.getQuestionLookup = function () {
        var questionLookup = {};
        for (var id in lookup) {
            var dict = lookup[id];
            var filtered = Object.keys(dict).reduce(function (filtered, key) {
                if (key !== "scores" && key != "next_page") filtered[key] = dict[key];
                return filtered;
            }, {});
            questionLookup[id] = filtered;
        }
        return questionLookup;
    };

    this.getScoreLookup = function () {
        var scoreLookup = {};
        for (var id in lookup) {
            var dict = lookup[id];
            var next_page = dict.next_page;
            var scoreList = dict.scores;
            for (var i = 0; i < scoreList.length; i++) {
                scoreList[i].next_page = next_page;
            }
            scoreLookup[id] = scoreList;
        }
        return scoreLookup;
    };

    this.getResultLookup = function () {
        var resultLookup = {};
        for (var id in lookup) {
            var dict = lookup[id];
            var scoreList = dict.scores;
            resultLookup[id] = scoreList;
        }
        return resultLookup;
    };

    this.getOrder = function() {
        return order;
    };
};