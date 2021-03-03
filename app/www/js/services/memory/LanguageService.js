var LanguageService = function() {
    var languages = [
        {"id": "ar", "english": "Arabic", "native": "العربية"},
        {"id": "zh-Hant", "english": "Chinese (Mandarin/Traditional)", "native": "繁體中文"},
        {"id": "yue", "english": "Chinese (Cantonese/Traditional)", "native": "粵語"},
        {"id": "fil", "english": "Filipino", "native": "Filipino"},
        {"id": "de", "english": "German", "native": "Deutsch"},
        {"id": "hi", "english": "Hindi", "native": "हिंदी"},
        {"id": "id", "english": "Indonesian", "native": "Indonesia"},
        {"id": "it", "english": "Italian", "native": "Italiano"},
        {"id": "ja", "english": "Japanese", "native": "日本語"},
        {"id": "ko", "english": "Korean", "native": "한국어"},
        {"id": "es", "english": "Spanish", "native": "Español"},
        {"id": "vi", "english": "Vietnamese", "native": "Tiếng Việt"},
        {"id": "th", "english": "Thai", "native": "ไทย"},
        {"id": "tr", "english": "Turkish", "native": "Türkçe"},
    ];

    var en = {
        "1a": [
            {"id": "1", "phrase": "Hello",},
            {"id": "2", "phrase": "How are you?",},
            {"id": "3", "phrase": "Are you in pain?"},
        ],
        "1b": [
            {"id": "1", "phrase": "How old are you?","solution": {"patient_age":["I'm one", "I'm two", "I'm three", "I'm four", "I'm five", "I'm six", "I'm seven", "I'm eight", "I'm nine", "I'm ten", "I'm eleven", "I'm twelve", "I'm thirteen", "I'm fourteen", "I'm fifteen", "I'm sixteen", "I'm seventeen", "I'm eighteen", "I'm nineteen", "I'm twenty", "I'm twenty-one", "I'm twenty-two", "I'm twenty-three", "I'm twenty-four", "I'm twenty-five", "I'm twenty-six", "I'm twenty-seven", "I'm twenty-eight", "I'm twenty-nine", "I'm thirty", "I'm thirty-one", "I'm thirty-two", "I'm thirty-three", "I'm thirty-four", "I'm thirty-five", "I'm thirty-six", "I'm thirty-seven", "I'm thirty-eight", "I'm thirty-nine", "I'm forty", "I'm forty-one", "I'm forty-two", "I'm forty-three", "I'm forty-four", "I'm forty-five", "I'm forty-six", "I'm forty-seven", "I'm forty-eight", "I'm forty-nine", "I'm fifty", "I'm fifty-one", "I'm fifty-two", "I'm fifty-three", "I'm fifty-four", "I'm fifty-five", "I'm fifty-six", "I'm fifty-seven", "I'm fifty-eight", "I'm fifty-nine", "I'm sixty", "I'm sixty-one", "I'm sixty-two", "I'm sixty-three", "I'm sixty-four", "I'm sixty-five", "I'm sixty-six", "I'm sixty-seven", "I'm sixty-eight", "I'm sixty-nine", "I'm seventy", "I'm seventy-one", "I'm seventy-two", "I'm seventy-three", "I'm seventy-four", "I'm seventy-five", "I'm seventy-six", "I'm seventy-seven", "I'm seventy-eight", "I'm seventy-nine", "I'm eighty", "I'm eighty-one", "I'm eighty-two", "I'm eighty-three", "I'm eighty-four", "I'm eighty-five", "I'm eighty-six", "I'm eighty-seven", "I'm eighty-eight", "I'm eighty-nine", "I'm ninety", "I'm ninety-one", "I'm ninety-two", "I'm ninety-three", "I'm ninety-four", "I'm ninety-five", "I'm ninety-six", "I'm ninety-seven", "I'm ninety-eight", "I'm ninety-nine", "I'm one hundred", "I'm one hundred and one", "I'm one hundred and two", "I'm one hundred and three", "I'm one hundred and four", "I'm one hundred and five", "I'm one hundred and six", "I'm one hundred and seven", "I'm one hundred and eight", "I'm one hundred and nine", "I'm one hundred and ten", "I'm one hundred and eleven", "I'm one hundred and twelve", "I'm one hundred and thirteen", "I'm one hundred and fourteen", "I'm one hundred and fifteen", "I'm one hundred and sixteen", "I'm one hundred and seventeen", "I'm one hundred and eighteen", "I'm one hundred and nineteen", "I'm one hundred and twenty", "I'm one hundred and twenty-one", "I'm one hundred and twenty-two", "I'm one hundred and twenty-three", "I'm one hundred and twenty-four", "I'm one hundred and twenty-five"]}},
            {"id": "2", "phrase": "What month is it?","solution": {"month":["January","February","March","April","May","June","July","August","September","October","November","December"]}},
            {"id": "3", "phrase": "Please slowly say one more time",},
        ],
        "1c": [
            {"id": "1", "phrase": "Close your eyes, open your eyes",},
            {"id": "2",
                "phrase": {
                    "non_paretic_hand":{
                        "Right": "Close your right hand, open your right hand",
                        "Left": "Close your left hand, open your left hand"
                    },
                }
            }
        ],
        "2": [
            {"id": "1", "phrase": "Follow my finger",},
            {"id": "2", "phrase": "Look at me",},
        ],
        "3": [
            {"id": "1", "phrase": "Look at my nose",},
            {"id": "2", "phrase": "How many fingers do you see?","solution": {"fingers":["one", "two", "three"]}},
            {"id": "3", "phrase": "Please slowly say one more time",},
        ],
        "4": [
            {"id": "1", "phrase": "Show me your teeth",},
            {"id": "2", "phrase": "Lift your eyebrows",},
        ],
        "5a": [
            {"id": "1",
                "phrase": {
                    "non_paretic_hand":{
                        "Right": "Lift your right arm for ten seconds",
                        "Left": "Lift your left arm for ten seconds"
                    },
                }
            },
            {"id": "2",
                "phrase": {
                    "non_paretic_hand":{
                        "Right": "Can you move your right arm at all?",
                        "Left": "Can you move your left arm at all?"
                    },
                }
            }
        ],
        "5b": [
            {"id": "1",
                "phrase": {
                    "paretic_hand":{
                        "Right": "Lift your right arm for ten seconds",
                        "Left": "Lift your left arm for ten seconds"
                    },
                }
            },
            {"id": "2",
                "phrase": {
                    "paretic_hand":{
                        "Right": "Can you move your right arm at all?",
                        "Left": "Can you move your left arm at all?"
                    },
                }
            }
        ],
        "6a": [
            {"id": "1",
                "phrase": {
                    "non_paretic_hand":{
                        "Right": "Lift your right leg for five seconds",
                        "Left": "Lift your left leg for five seconds"
                    },
                }
            },
            {"id": "2",
                "phrase": {
                    "non_paretic_hand":{
                        "Right": "Can you move your right leg at all?",
                        "Left": "Can you move your left leg at all?"
                    },
                }
            }
        ],
        "6b": [
            {"id": "1",
                "phrase": {
                    "paretic_hand":{
                        "Right": "Lift your right leg for five seconds",
                        "Left": "Lift your left leg for five seconds"
                    },
                }
            },
            {"id": "2",
                "phrase": {
                    "paretic_hand":{
                        "Right": "Can you move your right leg at all?",
                        "Left": "Can you move your left leg at all?"
                    },
                }
            }
        ],
        "7": [
            {"id": "1", "phrase": "Touch your nose, touch my finger"},
            {"id": "2", "phrase": "Other hand, touch your nose, touch my finger"},
            {"id": "3", "phrase": "Put your heel to your shin then slide up and down"},
            {"id": "4", "phrase": "Go up and down"},
            {"id": "5", "phrase": "Other leg, put your heel to your shin then slide up and down"},
        ],
        "8": [
            {"id": "1", "phrase": "Do you you feel this?","solution": {"affirm":["yes","no"]}},
            {"id": "2", "phrase": "Does it feel the same on both sides?","solution": {"affirm":["yes","no"]}},
            {"id": "3", "phrase": "The side with more feeling, can you point at it?","solution": {"affirm":["right","left"]}},
        ],
        "9": [
            {"id": "1", "phrase": "Describe this picture", "solution": {"description":["A woman is washing the dishes, a woman is drying a plate with a towel, the sink is flooding, a boy is taking a cookie, the boy is about to fall, the girl is reaching for the cookie, the girl is laughing"]}},
            {"id": "2", "phrase": "What do you see?","solution": {"objects":["cactus","glove","chair","door key","hammock","feather"]}},
            {"id": "3", "phrase": "Read these words"},
        ],
        "10": [
            {"id": "1", "phrase": "Repeat these words"},
            {"id": "2", "phrase": "Repeat after me"},
        ],
        "11": [
            {"id": "1", "phrase": "Close your eyes"},
            {"id": "2", "phrase": "I will touch your face, am I touching your right side, your left side, or both sides?","solution": {"side":["right","left", "both"]}},
            {"id": "3", "phrase": "Point to the side I'm touching"},
            {"id": "4", "phrase": "Which arm am I touching? Right arm, left arm, or both arms?"},
            {"id": "5", "phrase": "Which leg am I touching? Right leg, left leg, or both legs?"},
            {"id": "6", "phrase": "Open your eyes"},
            {"id": "7", "phrase": "Which finger am I wiggling? Right finger, left finger, or both fingers?","solution": {"side":["right","left", "both"]}},
            {"id": "8", "phrase": "Point to the side I'm wiggling"},
        ],
        "end": [
            {"id": "1", "phrase": "Thank you"},
            {"id": "2", "phrase": "Goodbye"}]
    };

    var translations = {
        'yue' : {
            "1a": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "你好.",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "你好嗎?",
                        "translit": null
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "你痛嗎？",
                        "translit": null
                    }
                }
            ],
            "1b": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "你幾歲了？",
                        "translit": null
                    },
                    "solution": {
                        "patient_age": [
                            {
                                "translat": "我係其中之一",
                                "translit": null
                            },
                            {
                                "translat": "我兩個",
                                "translit": null
                            },
                            {
                                "translat": "我三歲",
                                "translit": null
                            },
                            {
                                "translat": "我四歲",
                                "translit": null
                            },
                            {
                                "translat": "我五歲",
                                "translit": null
                            },
                            {
                                "translat": "我六歲",
                                "translit": null
                            },
                            {
                                "translat": "我七歲",
                                "translit": null
                            },
                            {
                                "translat": "我八歲",
                                "translit": null
                            },
                            {
                                "translat": "我九歲",
                                "translit": null
                            },
                            {
                                "translat": "我只有呢個",
                                "translit": null
                            },
                            {
                                "translat": "我十一歲",
                                "translit": null
                            },
                            {
                                "translat": "我十二歲",
                                "translit": null
                            },
                            {
                                "translat": "我十三岁了",
                                "translit": null
                            },
                            {
                                "translat": "我十四歲",
                                "translit": null
                            },
                            {
                                "translat": "我十五歲",
                                "translit": null
                            },
                            {
                                "translat": "我十六歲",
                                "translit": null
                            },
                            {
                                "translat": "我十七歲",
                                "translit": null
                            },
                            {
                                "translat": "我十八歲了",
                                "translit": null
                            },
                            {
                                "translat": "我十九歲",
                                "translit": null
                            },
                            {
                                "translat": "我二十歲",
                                "translit": null
                            },
                            {
                                "translat": "我二十一歲",
                                "translit": null
                            },
                            {
                                "translat": "我二十二歲",
                                "translit": null
                            },
                            {
                                "translat": "我二十三歲",
                                "translit": null
                            },
                            {
                                "translat": "我二十四歲",
                                "translit": null
                            },
                            {
                                "translat": "我二十五歲",
                                "translit": null
                            },
                            {
                                "translat": "我二十六歲",
                                "translit": null
                            },
                            {
                                "translat": "我二十七岁",
                                "translit": null
                            },
                            {
                                "translat": "我二十八歲",
                                "translit": null
                            },
                            {
                                "translat": "我二十九歲",
                                "translit": null
                            },
                            {
                                "translat": "我三十歲了",
                                "translit": null
                            },
                            {
                                "translat": "我三十一歲了",
                                "translit": null
                            },
                            {
                                "translat": "我三十二歲",
                                "translit": null
                            },
                            {
                                "translat": "我三十三歲",
                                "translit": null
                            },
                            {
                                "translat": "我三十四岁了",
                                "translit": null
                            },
                            {
                                "translat": "我三十五歲",
                                "translit": null
                            },
                            {
                                "translat": "我三十六歲",
                                "translit": null
                            },
                            {
                                "translat": "我三十七岁",
                                "translit": null
                            },
                            {
                                "translat": "我三十八歲",
                                "translit": null
                            },
                            {
                                "translat": "我三十九歲",
                                "translit": null
                            },
                            {
                                "translat": "我四十歲了",
                                "translit": null
                            },
                            {
                                "translat": "我四十一歲了",
                                "translit": null
                            },
                            {
                                "translat": "我四十二岁了",
                                "translit": null
                            },
                            {
                                "translat": "我四十三岁了",
                                "translit": null
                            },
                            {
                                "translat": "我四十四岁了",
                                "translit": null
                            },
                            {
                                "translat": "我四十五岁了",
                                "translit": null
                            },
                            {
                                "translat": "我四十六岁了",
                                "translit": null
                            },
                            {
                                "translat": "我四十七岁了",
                                "translit": null
                            },
                            {
                                "translat": "我四十八岁了",
                                "translit": null
                            },
                            {
                                "translat": "我四十九岁了",
                                "translit": null
                            },
                            {
                                "translat": "我五十歲了",
                                "translit": null
                            },
                            {
                                "translat": "我五十一歲了",
                                "translit": null
                            },
                            {
                                "translat": "我五十二岁了",
                                "translit": null
                            },
                            {
                                "translat": "我五十三岁了",
                                "translit": null
                            },
                            {
                                "translat": "我五十四岁了",
                                "translit": null
                            },
                            {
                                "translat": "我五十五歲了",
                                "translit": null
                            },
                            {
                                "translat": "我五十六岁了",
                                "translit": null
                            },
                            {
                                "translat": "我五十七岁了",
                                "translit": null
                            },
                            {
                                "translat": "我五十八歲了",
                                "translit": null
                            },
                            {
                                "translat": "我五十九岁了",
                                "translit": null
                            },
                            {
                                "translat": "我六十岁了",
                                "translit": null
                            },
                            {
                                "translat": "我六十一歲了",
                                "translit": null
                            },
                            {
                                "translat": "我六十二岁了",
                                "translit": null
                            },
                            {
                                "translat": "我六十三岁了",
                                "translit": null
                            },
                            {
                                "translat": "我六十四岁了",
                                "translit": null
                            },
                            {
                                "translat": "我六十五岁了",
                                "translit": null
                            },
                            {
                                "translat": "我六十六岁了",
                                "translit": null
                            },
                            {
                                "translat": "我六十七岁了",
                                "translit": null
                            },
                            {
                                "translat": "我六十八岁了",
                                "translit": null
                            },
                            {
                                "translat": "我六十九岁了",
                                "translit": null
                            },
                            {
                                "translat": "我七十岁了",
                                "translit": null
                            },
                            {
                                "translat": "我七十一岁了",
                                "translit": null
                            },
                            {
                                "translat": "我七十二岁了",
                                "translit": null
                            },
                            {
                                "translat": "我七十三岁了",
                                "translit": null
                            },
                            {
                                "translat": "我七十四岁了",
                                "translit": null
                            },
                            {
                                "translat": "我七十五岁了",
                                "translit": null
                            },
                            {
                                "translat": "我七十六岁了",
                                "translit": null
                            },
                            {
                                "translat": "我七十七岁了",
                                "translit": null
                            },
                            {
                                "translat": "我七十八岁了",
                                "translit": null
                            },
                            {
                                "translat": "我七十九岁了",
                                "translit": null
                            },
                            {
                                "translat": "我八十岁了",
                                "translit": null
                            },
                            {
                                "translat": "我八十一岁了",
                                "translit": null
                            },
                            {
                                "translat": "我八十二岁了",
                                "translit": null
                            },
                            {
                                "translat": "我八十三岁了",
                                "translit": null
                            },
                            {
                                "translat": "我八十四岁了",
                                "translit": null
                            },
                            {
                                "translat": "我八十五岁了",
                                "translit": null
                            },
                            {
                                "translat": "我八十六岁了",
                                "translit": null
                            },
                            {
                                "translat": "我八十七岁了",
                                "translit": null
                            },
                            {
                                "translat": "我八十八岁了",
                                "translit": null
                            },
                            {
                                "translat": "我八十九岁了",
                                "translit": null
                            },
                            {
                                "translat": "我九十岁了",
                                "translit": null
                            },
                            {
                                "translat": "我九十一岁了",
                                "translit": null
                            },
                            {
                                "translat": "我九十二岁了",
                                "translit": null
                            },
                            {
                                "translat": "我九十三岁了",
                                "translit": null
                            },
                            {
                                "translat": "我九十四岁了",
                                "translit": null
                            },
                            {
                                "translat": "我九十五岁了",
                                "translit": null
                            },
                            {
                                "translat": "我九十六岁了",
                                "translit": null
                            },
                            {
                                "translat": "我九十七岁了",
                                "translit": null
                            },
                            {
                                "translat": "我九十八岁了",
                                "translit": null
                            },
                            {
                                "translat": "我九十九岁了",
                                "translit": null
                            },
                            {
                                "translat": "我係一百歲",
                                "translit": null
                            },
                            {
                                "translat": "我係一百零一",
                                "translit": null
                            },
                            {
                                "translat": "我係一百零二",
                                "translit": null
                            },
                            {
                                "translat": "我係一百零三",
                                "translit": null
                            },
                            {
                                "translat": "我係一百零四岁",
                                "translit": null
                            },
                            {
                                "translat": "我係一百零五岁",
                                "translit": null
                            },
                            {
                                "translat": "我係一百六十六岁",
                                "translit": null
                            },
                            {
                                "translat": "我係一百七十七岁",
                                "translit": null
                            },
                            {
                                "translat": "我係一百八十八岁",
                                "translit": null
                            },
                            {
                                "translat": "我係一百零九岁",
                                "translit": null
                            },
                            {
                                "translat": "我係一百一十",
                                "translit": null
                            },
                            {
                                "translat": "我係一百一十一歲",
                                "translit": null
                            },
                            {
                                "translat": "我係一百一十二岁",
                                "translit": null
                            },
                            {
                                "translat": "我係一百一十三岁",
                                "translit": null
                            },
                            {
                                "translat": "我係一百一十四岁",
                                "translit": null
                            },
                            {
                                "translat": "我係一百一十五岁",
                                "translit": null
                            },
                            {
                                "translat": "我係一百一十六岁",
                                "translit": null
                            },
                            {
                                "translat": "我係一百一十七岁",
                                "translit": null
                            },
                            {
                                "translat": "我係一百一十八岁",
                                "translit": null
                            },
                            {
                                "translat": "我係一百一十九岁",
                                "translit": null
                            },
                            {
                                "translat": "我係一百二十",
                                "translit": null
                            },
                            {
                                "translat": "我係一百二十一歲",
                                "translit": null
                            },
                            {
                                "translat": "我係一百二十二岁",
                                "translit": null
                            },
                            {
                                "translat": "我係一百二十三岁",
                                "translit": null
                            },
                            {
                                "translat": "我係一百二十四岁",
                                "translit": null
                            },
                            {
                                "translat": "我係一百二十五岁",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "係乜嘢月？",
                        "translit": null
                    },
                    "solution": {
                        "month": [
                            {
                                "translat": "一月",
                                "translit": null
                            },
                            {
                                "translat": "二月.",
                                "translit": null
                            },
                            {
                                "translat": "三月",
                                "translit": null
                            },
                            {
                                "translat": "四月",
                                "translit": null
                            },
                            {
                                "translat": "五月",
                                "translit": null
                            },
                            {
                                "translat": "六月",
                                "translit": null
                            },
                            {
                                "translat": "七月",
                                "translit": null
                            },
                            {
                                "translat": "八月",
                                "translit": null
                            },
                            {
                                "translat": "九月",
                                "translit": null
                            },
                            {
                                "translat": "十月",
                                "translit": null
                            },
                            {
                                "translat": "十一月",
                                "translit": null
                            },
                            {
                                "translat": "十二月",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "請慢慢再說一次",
                        "translit": null
                    }
                }
            ],
            "1c": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "閉上眼，睜開眼睛",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "合上右手，張開右手",
                                "translit": null
                            },
                            "Left": {
                                "translat": "閉上左手，張開左手",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "2": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "跟埋我嘅手指",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "望住我.",
                        "translit": null
                    }
                }
            ],
            "3": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "睇下我嘅鼻子",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "你睇到幾多根手指？",
                        "translit": null
                    },
                    "solution": {
                        "fingers": [
                            {
                                "translat": "一.",
                                "translit": null
                            },
                            {
                                "translat": "二.",
                                "translit": null
                            },
                            {
                                "translat": "三.",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "請慢慢再說一次",
                        "translit": null
                    }
                }
            ],
            "4": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "讓我看看你的牙齒",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "抬起眉毛",
                        "translit": null
                    }
                }
            ],
            "5a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "抬起右臂十秒钟",
                                "translit": null
                            },
                            "Left": {
                                "translat": "抬起左臂十秒钟",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "你可唔可以移動你嘅右臂啊？",
                                "translit": null
                            },
                            "Left": {
                                "translat": "你可唔可以移動你嘅左臂啊？",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "5b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "抬起右臂十秒钟",
                                "translit": null
                            },
                            "Left": {
                                "translat": "抬起左臂十秒钟",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "你可唔可以移動你嘅右臂啊？",
                                "translit": null
                            },
                            "Left": {
                                "translat": "你可唔可以移動你嘅左臂啊？",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "6a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "抬起右腿五秒钟",
                                "translit": null
                            },
                            "Left": {
                                "translat": "抬起左腿五秒钟",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "你可唔可以移動你嘅右腿啊？",
                                "translit": null
                            },
                            "Left": {
                                "translat": "你可唔可以移動你嘅左腿啊？",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "6b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "抬起右腿五秒钟",
                                "translit": null
                            },
                            "Left": {
                                "translat": "抬起左腿五秒钟",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "你可唔可以移動你嘅右腿啊？",
                                "translit": null
                            },
                            "Left": {
                                "translat": "你可唔可以移動你嘅左腿啊？",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "7": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "摸摸你的鼻子，摸摸我的手指",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "另一隻手，摸摸你的鼻子，摸摸我的手指",
                        "translit": null
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "将你嘅腳跟放在你的小腿上，然後上下滑動",
                        "translit": null
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "上下",
                        "translit": null
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "其他腳，將你嘅腳跟到你嘅小腿，然後上下滑動",
                        "translit": null
                    }
                }
            ],
            "8": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "你感覺到了嗎？",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "係.",
                                "translit": null
                            },
                            {
                                "translat": "唔係.",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "兩邊都有同感嗎？",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "係.",
                                "translit": null
                            },
                            {
                                "translat": "唔係.",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "感情比較有感嘅一面，可唔可以指住啊？",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "右",
                                "translit": null
                            },
                            {
                                "translat": "左",
                                "translit": null
                            }
                        ]
                    }
                }
            ],
            "9": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "描述此圖片",
                        "translit": null
                    },
                    "solution": {
                        "description": [
                            {
                                "translat": "一個女人正在洗碗，一個女人正在用毛巾抹碟，水槽里水淹，一個男孩正在吃餅乾，男孩快要倒下了，女孩伸手去拿餅乾，女孩在笑",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "你睇到乜嘢了？",
                        "translit": null
                    },
                    "solution": {
                        "objects": [
                            {
                                "translat": "仙人掌",
                                "translit": null
                            },
                            {
                                "translat": "手套",
                                "translit": null
                            },
                            {
                                "translat": "椅子",
                                "translit": null
                            },
                            {
                                "translat": "門匙",
                                "translit": null
                            },
                            {
                                "translat": "吊床",
                                "translit": null
                            },
                            {
                                "translat": "羽毛",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "閱讀呢啲單詞",
                        "translit": null
                    }
                }
            ],
            "10": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "重複呢啲單詞",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "跟著我重複",
                        "translit": null
                    }
                }
            ],
            "11": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "瞇埋眼.",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "我會摸你嘅面，我係摸你嘅右邊，你嘅左邊，仲係兩邊？",
                        "translit": null
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "右",
                                "translit": null
                            },
                            {
                                "translat": "左",
                                "translit": null
                            },
                            {
                                "translat": "兩者",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "指向我觸摸嘅一側",
                        "translit": null
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "我摸邊隻胳膊？ 右臂，左臂，仲係雙臂？",
                        "translit": null
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "我摸哪條腿？ 右腿，左腿，仲係兩條腿？",
                        "translit": null
                    }
                },
                {
                    "id": "6",
                    "phrase": {
                        "translat": "睜開你的眼",
                        "translit": null
                    }
                },
                {
                    "id": "7",
                    "phrase": {
                        "translat": "我在晃動哪個手指？ 右指，左指，仲係兩根手指？",
                        "translit": null
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "右",
                                "translit": null
                            },
                            {
                                "translat": "左",
                                "translit": null
                            },
                            {
                                "translat": "兩者",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "8",
                    "phrase": {
                        "translat": "指向我擺動嘅一側",
                        "translit": null
                    }
                }
            ],
            "end": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "多謝.",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "再見.",
                        "translit": null
                    }
                }
            ]
        },
        'ko' : {
            "1a": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "안녕하세요",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "어떻게 지내세요?",
                        "translit": null
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "당신은 고통에 있습니까?",
                        "translit": null
                    }
                }
            ],
            "1b": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "나이가 어떻게 되세요?",
                        "translit": null
                    },
                    "solution": {
                        "patient_age": [
                            {
                                "translat": "나는 하나야",
                                "translit": null
                            },
                            {
                                "translat": "나는 두 있어",
                                "translit": null
                            },
                            {
                                "translat": "저는 세 명입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 네 명입니다.",
                                "translit": null
                            },
                            {
                                "translat": "나는 다섯입니다",
                                "translit": null
                            },
                            {
                                "translat": "저는 여섯 명입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 일곱 명입니다.",
                                "translit": null
                            },
                            {
                                "translat": "나는 여덟입니다",
                                "translit": null
                            },
                            {
                                "translat": "저는 아홉 명입니다.",
                                "translit": null
                            },
                            {
                                "translat": "나는 하나야",
                                "translit": null
                            },
                            {
                                "translat": "나는 열한",
                                "translit": null
                            },
                            {
                                "translat": "저는 열두 살이에요.",
                                "translit": null
                            },
                            {
                                "translat": "저는 13살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 14살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "나는 열다섯입니다",
                                "translit": null
                            },
                            {
                                "translat": "저는 열여섯 살이에요.",
                                "translit": null
                            },
                            {
                                "translat": "저는 열일곱 살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 18살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 19세입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 스무 살이에요.",
                                "translit": null
                            },
                            {
                                "translat": "나는 스물 한",
                                "translit": null
                            },
                            {
                                "translat": "저는 스물두 살이에요.",
                                "translit": null
                            },
                            {
                                "translat": "저는 스물셋입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 스물네 살이에요.",
                                "translit": null
                            },
                            {
                                "translat": "저는 스물다섯 살이에요.",
                                "translit": null
                            },
                            {
                                "translat": "저는 스물여섯 살이에요.",
                                "translit": null
                            },
                            {
                                "translat": "저는 스물일곱 살이에요.",
                                "translit": null
                            },
                            {
                                "translat": "저는 스물여덟 살이에요.",
                                "translit": null
                            },
                            {
                                "translat": "저는 스물아홉입니다.",
                                "translit": null
                            },
                            {
                                "translat": "난 서른이야",
                                "translit": null
                            },
                            {
                                "translat": "나는 서른 하나입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 서른두해요",
                                "translit": null
                            },
                            {
                                "translat": "나는 서른세예요",
                                "translit": null
                            },
                            {
                                "translat": "저는 서른네 살이에요.",
                                "translit": null
                            },
                            {
                                "translat": "저는 서른다섯입니다.",
                                "translit": null
                            },
                            {
                                "translat": "나는 서른여섯입니다",
                                "translit": null
                            },
                            {
                                "translat": "저는 서른일곱 살이에요.",
                                "translit": null
                            },
                            {
                                "translat": "나는 서른여덟입니다",
                                "translit": null
                            },
                            {
                                "translat": "저는 서른아홉입니다.",
                                "translit": null
                            },
                            {
                                "translat": "나는 마흔",
                                "translit": null
                            },
                            {
                                "translat": "나는 마흔 하나예요",
                                "translit": null
                            },
                            {
                                "translat": "나는 마흔두해요",
                                "translit": null
                            },
                            {
                                "translat": "저는 마흔세 예입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 마흔네 살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 마흔다섯입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 마흔여섯입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 마흔일곱 살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 마흔여덟 입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 마흔아홉입니다.",
                                "translit": null
                            },
                            {
                                "translat": "나는 50입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 51입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 52입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 53입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 54입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 55입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 56입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 57입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 58입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 59입니다",
                                "translit": null
                            },
                            {
                                "translat": "저는 60세입니다.",
                                "translit": null
                            },
                            {
                                "translat": "나는 61입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 62입니다",
                                "translit": null
                            },
                            {
                                "translat": "저는 63살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 64살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 65세입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 66세입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 67세입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 68세입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 69세입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 칠십인입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 71살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 72살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 73살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 74살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 75세입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 76살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 77살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 78살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 79살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "나는 80세입니다.",
                                "translit": null
                            },
                            {
                                "translat": "나는 81입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 82입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 83세입니다.",
                                "translit": null
                            },
                            {
                                "translat": "나는 84입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 85입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 86입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 87입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 88입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 89입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 구십이야",
                                "translit": null
                            },
                            {
                                "translat": "나는 구십하나입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 구십두해요",
                                "translit": null
                            },
                            {
                                "translat": "저는 93살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 94살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 95세입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 96살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 97살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 98살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "저는 99살입니다.",
                                "translit": null
                            },
                            {
                                "translat": "나는 백이야",
                                "translit": null
                            },
                            {
                                "translat": "나는 백 백 이고 하나",
                                "translit": null
                            },
                            {
                                "translat": "나는 백두해요",
                                "translit": null
                            },
                            {
                                "translat": "나는 백삼이고",
                                "translit": null
                            },
                            {
                                "translat": "나는 백네",
                                "translit": null
                            },
                            {
                                "translat": "나는 백다섯이야",
                                "translit": null
                            },
                            {
                                "translat": "나는 백여섯입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 백일곱입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 백여덟이야",
                                "translit": null
                            },
                            {
                                "translat": "나는 백아홉이야",
                                "translit": null
                            },
                            {
                                "translat": "나는 백백이고 열십이야",
                                "translit": null
                            },
                            {
                                "translat": "나는 백열한이야",
                                "translit": null
                            },
                            {
                                "translat": "나는 백십이야",
                                "translit": null
                            },
                            {
                                "translat": "나는 백열세야",
                                "translit": null
                            },
                            {
                                "translat": "나는 백14입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 백오다섯입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 백열여섯",
                                "translit": null
                            },
                            {
                                "translat": "나는 백열일곱입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 백백18입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 백아홉입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 백이십이야",
                                "translit": null
                            },
                            {
                                "translat": "나는 백이십이야",
                                "translit": null
                            },
                            {
                                "translat": "나는 백스물두 해요",
                                "translit": null
                            },
                            {
                                "translat": "나는 백이십삼이고",
                                "translit": null
                            },
                            {
                                "translat": "나는 백이십사입니다",
                                "translit": null
                            },
                            {
                                "translat": "나는 백이십오입니다",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "몇 달인가요?",
                        "translit": null
                    },
                    "solution": {
                        "month": [
                            {
                                "translat": "1월",
                                "translit": null
                            },
                            {
                                "translat": "2월",
                                "translit": null
                            },
                            {
                                "translat": "3월",
                                "translit": null
                            },
                            {
                                "translat": "4월",
                                "translit": null
                            },
                            {
                                "translat": "5월",
                                "translit": null
                            },
                            {
                                "translat": "6월",
                                "translit": null
                            },
                            {
                                "translat": "7월",
                                "translit": null
                            },
                            {
                                "translat": "8월",
                                "translit": null
                            },
                            {
                                "translat": "9월",
                                "translit": null
                            },
                            {
                                "translat": "10월",
                                "translit": null
                            },
                            {
                                "translat": "11월",
                                "translit": null
                            },
                            {
                                "translat": "12월",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "한 번 더 천천히 말하십시오.",
                        "translit": null
                    }
                }
            ],
            "1c": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "눈을 감고 눈을 뜨십시오.",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "오른손을 닫고 오른손을 엽니다.",
                                "translit": null
                            },
                            "Left": {
                                "translat": "왼손을 닫고 왼손을 엽니다.",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "2": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "내 손가락을 따라",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "나를 보세요",
                        "translit": null
                    }
                }
            ],
            "3": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "내 코를 봐",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "얼마나 많은 손가락을 볼 수 있습니까?",
                        "translit": null
                    },
                    "solution": {
                        "fingers": [
                            {
                                "translat": "1",
                                "translit": null
                            },
                            {
                                "translat": "2",
                                "translit": null
                            },
                            {
                                "translat": "3",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "한 번 더 천천히 말하십시오.",
                        "translit": null
                    }
                }
            ],
            "4": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "나에게 당신의 이빨을 보여",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "눈썹을 들어 올리기",
                        "translit": null
                    }
                }
            ],
            "5a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "오른팔을 10초 동안 들어 올리세요.",
                                "translit": null
                            },
                            "Left": {
                                "translat": "왼쪽 팔을 10초 동안 들어 올립니다.",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "오른팔을 전혀 움직일 수 있습니까?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "당신은 전혀 왼쪽 팔을 이동할 수 있습니까?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "5b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "오른팔을 10초 동안 들어 올리세요.",
                                "translit": null
                            },
                            "Left": {
                                "translat": "왼쪽 팔을 10초 동안 들어 올립니다.",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "오른팔을 전혀 움직일 수 있습니까?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "당신은 전혀 왼쪽 팔을 이동할 수 있습니까?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "6a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "오른쪽 다리를 5초 동안 들어 올립니다.",
                                "translit": null
                            },
                            "Left": {
                                "translat": "왼쪽 다리를 5초 동안 들어 올립니다.",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "오른쪽 다리를 전혀 움직일 수 있습니까?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "왼쪽 다리를 전혀 움직일 수 있습니까?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "6b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "오른쪽 다리를 5초 동안 들어 올립니다.",
                                "translit": null
                            },
                            "Left": {
                                "translat": "왼쪽 다리를 5초 동안 들어 올립니다.",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "오른쪽 다리를 전혀 움직일 수 있습니까?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "왼쪽 다리를 전혀 움직일 수 있습니까?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "7": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "코를 만지시고 손가락을 만지십시오.",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "다른 한편, 코를 터치, 내 손가락을 터치",
                        "translit": null
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "발뒤꿈치를 정강이에 올려 놓은 다음 위아래로 미끄러진 다음",
                        "translit": null
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "위아래로 이동",
                        "translit": null
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "다른 다리, 당신의 정강이에 발 뒤꿈치를 넣어 다음 위아래로 슬라이드",
                        "translit": null
                    }
                }
            ],
            "8": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "당신은 이것을 생각하십니까?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "예",
                                "translit": null
                            },
                            {
                                "translat": "아니요",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "양측에서 똑같이 느껴지나요?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "예",
                                "translit": null
                            },
                            {
                                "translat": "아니요",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "더 많은 느낌의 측면, 당신은 그것을 가리 킬 수 있습니까?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "오른쪽",
                                "translit": null
                            },
                            {
                                "translat": "왼쪽",
                                "translit": null
                            }
                        ]
                    }
                }
            ],
            "9": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "이 그림 설명",
                        "translit": null
                    },
                    "solution": {
                        "description": [
                            {
                                "translat": "여자는 설거지, 여자가 수건으로 접시를 건조하고, 싱크대가 홍수, 소년이 쿠키를 복용하고, 소년은 가을하려고, 소녀는 쿠키에 도달하고, 소녀는 웃고있다",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "뭐 보나요?",
                        "translit": null
                    },
                    "solution": {
                        "objects": [
                            {
                                "translat": "선인장",
                                "translit": null
                            },
                            {
                                "translat": "장갑",
                                "translit": null
                            },
                            {
                                "translat": "자",
                                "translit": null
                            },
                            {
                                "translat": "도어 키",
                                "translit": null
                            },
                            {
                                "translat": "해먹",
                                "translit": null
                            },
                            {
                                "translat": "깃털",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "이 단어 읽기",
                        "translit": null
                    }
                }
            ],
            "10": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "이 단어 반복",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "내 후 반복",
                        "translit": null
                    }
                }
            ],
            "11": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "눈을 감으세요",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "나는 당신의 얼굴을 만질 것이다, 나는 당신의 오른쪽, 왼쪽, 또는 양쪽을 만지고 있다?",
                        "translit": null
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "오른쪽",
                                "translit": null
                            },
                            {
                                "translat": "왼쪽",
                                "translit": null
                            },
                            {
                                "translat": "모두",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "내가 만지고있는 측면을 가리킵니다.",
                        "translit": null
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "어떤 팔을 만지고 있나요? 오른팔, 왼팔 또는 두 팔?",
                        "translit": null
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "어떤 다리를 만지고 있나요? 오른쪽 다리, 왼쪽 다리 또는 두 다리?",
                        "translit": null
                    }
                },
                {
                    "id": "6",
                    "phrase": {
                        "translat": "눈을 뜨세요",
                        "translit": null
                    }
                },
                {
                    "id": "7",
                    "phrase": {
                        "translat": "어떤 손가락이 흔들리고 있습니까? 오른쪽 손가락, 왼쪽 손가락 또는 두 손가락?",
                        "translit": null
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "오른쪽",
                                "translit": null
                            },
                            {
                                "translat": "왼쪽",
                                "translit": null
                            },
                            {
                                "translat": "모두",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "8",
                    "phrase": {
                        "translat": "내가 흔들리고있는 측면을 가리킵니다.",
                        "translit": null
                    }
                }
            ],
            "end": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "감사합니다",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "안녕히",
                        "translit": null
                    }
                }
            ]
        },
        'de' : {
            "1a": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Hallo",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Wie geht es dir?",
                        "translit": null
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Haben Sie Schmerzen?",
                        "translit": null
                    }
                }
            ],
            "1b": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Wie alt bist du?",
                        "translit": null
                    },
                    "solution": {
                        "patient_age": [
                            {
                                "translat": "Ich bin eins",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin zwei",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin drei",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin vier",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin fünf",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin sechs",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin sieben",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin acht",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin neun",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin derjenige, der",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin elf",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin zwölf",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin dreizehn",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin vierzehn",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin fünfzehn",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin sechzehn",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin siebzehn",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin achtzehn",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin neunzehn",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin zwanzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einundzwanzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin zweiundzwanzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin dreiundzwanzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin vierundzwanzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin fünfundzwanzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin sechsundzwanzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin siebenundzwanzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin achtundzwanzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin neunundzwanzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin dreißig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einunddreißig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin zweiunddreißig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin dreiunddreißig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin vierunddreißig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin fünfunddreißig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin sechsunddreißig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin siebenunddreißig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin achtunddreißig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin neununddreißig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin vierzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einundvierzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin zweiundvierzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin dreiundvierzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin vierundvierzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin fünfundvierzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin sechsundvierzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin siebenundvierzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin achtundvierzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin neunundvierzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin fünfzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einundfünfzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin zweiundfünfzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin dreiundfünfzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin vierundfünfzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin fünfundfünfzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin sechsundfünfzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin siebenundfünfzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin achtundfünfzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin neunundfünfzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin sechzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einundsechzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin zweiundsechzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin dreiundsechzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin vierundsechzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin fünfundsechzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin sechsundsechzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin siebenundsechzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin achtundsechzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin neunundsechzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin siebzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einundsiebzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin zweiundsiebzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin dreiundsiebzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin vierundsiebzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin fünfundsiebzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin sechsundsiebzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin siebenundsiebzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin achtundsiebzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin neunundsiebzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin achtzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einundachtzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin zweiundachtzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin dreiundachtzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin vierundachtzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin fünfundachtzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin achtundachtzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin achtundachtzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin achtundachtzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin neunundachtzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin neunzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einundneunzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin zweiundneunzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin dreiundneunzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin vierundneunzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin fünfundneunzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin sechsundneunzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin siebenundneunzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin achtundneunzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin neunundneunzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin hundert",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einhunderteins",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einhundertzwei",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einhundert drei",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einhundertvier",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einhundertfünf",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einhundertsechs",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin hundertsieben",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einhundertacht",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin hundertneun",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin hundertzehn",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einhundertelf",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einhundertzwölf",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einhundertdreizehn",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin hundertvierzehn",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einhundertfünfzehn",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einhundertsechzehn",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin hundertsiebzehn",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin hundertachtzehn",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin hundertneunzehn",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einhundertzwanzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einhunderteinundzwanzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einhundertzweiundzwanzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einhundertdreiundzwanzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einhundertvierundzwanzig",
                                "translit": null
                            },
                            {
                                "translat": "Ich bin einhundertfünfundzwanzig",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Welcher Monat ist es?",
                        "translit": null
                    },
                    "solution": {
                        "month": [
                            {
                                "translat": "Januar",
                                "translit": null
                            },
                            {
                                "translat": "Februar",
                                "translit": null
                            },
                            {
                                "translat": "März",
                                "translit": null
                            },
                            {
                                "translat": "April",
                                "translit": null
                            },
                            {
                                "translat": "Mai",
                                "translit": null
                            },
                            {
                                "translat": "Juni",
                                "translit": null
                            },
                            {
                                "translat": "Juli",
                                "translit": null
                            },
                            {
                                "translat": "August",
                                "translit": null
                            },
                            {
                                "translat": "September",
                                "translit": null
                            },
                            {
                                "translat": "Oktober",
                                "translit": null
                            },
                            {
                                "translat": "November",
                                "translit": null
                            },
                            {
                                "translat": "Dezember",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Bitte sagen Sie langsam noch einmal",
                        "translit": null
                    }
                }
            ],
            "1c": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Schließen Sie die Augen, öffnen Sie Ihre Augen",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Schließen Sie Ihre rechte Hand, öffnen Sie Ihre rechte Hand",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Schließen Sie Ihre linke Hand, öffnen Sie Ihre linke Hand",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "2": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Folgen Sie meinem Finger",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Schau mich an",
                        "translit": null
                    }
                }
            ],
            "3": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Schauen Sie auf meine Nase",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Wie viele Finger sehen Sie?",
                        "translit": null
                    },
                    "solution": {
                        "fingers": [
                            {
                                "translat": "Eins",
                                "translit": null
                            },
                            {
                                "translat": "Zwei",
                                "translit": null
                            },
                            {
                                "translat": "Drei",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Bitte sagen Sie langsam noch einmal",
                        "translit": null
                    }
                }
            ],
            "4": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Zeigen Sie mir Ihre Zähne",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Heben Sie Ihre Augenbrauen",
                        "translit": null
                    }
                }
            ],
            "5a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Heben Sie Ihren rechten Arm für zehn Sekunden",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Heben Sie Ihren linken Arm für zehn Sekunden",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Können Sie Ihren rechten Arm überhaupt bewegen?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Können Sie Ihren linken Arm überhaupt bewegen?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "5b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Heben Sie Ihren rechten Arm für zehn Sekunden",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Heben Sie Ihren linken Arm für zehn Sekunden",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Können Sie Ihren rechten Arm überhaupt bewegen?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Können Sie Ihren linken Arm überhaupt bewegen?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "6a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Heben Sie Ihr rechtes Bein für fünf Sekunden",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Heben Sie Ihr linkes Bein für fünf Sekunden",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Können Sie Ihr rechtes Bein überhaupt bewegen?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Können Sie Ihr linkes Bein überhaupt bewegen?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "6b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Heben Sie Ihr rechtes Bein für fünf Sekunden",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Heben Sie Ihr linkes Bein für fünf Sekunden",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Können Sie Ihr rechtes Bein überhaupt bewegen?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Können Sie Ihr linkes Bein überhaupt bewegen?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "7": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Berühren Sie Ihre Nase, berühren Sie meinen Finger",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Andere Hand, berühren Sie Ihre Nase, berühren Sie meinen Finger",
                        "translit": null
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Legen Sie Ihre Ferse auf Ihr Schienbein und gleiten Sie dann nach oben und unten",
                        "translit": null
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "Gehen Sie rauf und runter",
                        "translit": null
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "Anderes Bein, legen Sie Ihre Ferse auf Ihr Schienbein dann nach oben und unten gleiten",
                        "translit": null
                    }
                }
            ],
            "8": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Spüren Sie das?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "Ja",
                                "translit": null
                            },
                            {
                                "translat": "Nein",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Fühlt es sich auf beiden Seiten gleich an?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "Ja",
                                "translit": null
                            },
                            {
                                "translat": "Nein",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Die Seite mit mehr Gefühl, können Sie darauf zeigen?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "Rechts",
                                "translit": null
                            },
                            {
                                "translat": "Links",
                                "translit": null
                            }
                        ]
                    }
                }
            ],
            "9": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Beschreiben dieses Bildes",
                        "translit": null
                    },
                    "solution": {
                        "description": [
                            {
                                "translat": "Eine Frau wäscht das Geschirr, eine Frau trocknet einen Teller mit einem Handtuch, das Waschbecken überflutet, ein Junge nimmt einen Keks, der Junge ist im Begriff zu fallen, das Mädchen greift nach dem Keks, das Mädchen lacht",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Was siehst du?",
                        "translit": null
                    },
                    "solution": {
                        "objects": [
                            {
                                "translat": "Kaktus",
                                "translit": null
                            },
                            {
                                "translat": "Handschuh",
                                "translit": null
                            },
                            {
                                "translat": "Stuhl",
                                "translit": null
                            },
                            {
                                "translat": "Türschlüssel",
                                "translit": null
                            },
                            {
                                "translat": "Hängematte",
                                "translit": null
                            },
                            {
                                "translat": "Feder",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Lesen Sie diese Worte",
                        "translit": null
                    }
                }
            ],
            "10": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Wiederholen Sie diese Worte",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Wiederholen Sie nach mir",
                        "translit": null
                    }
                }
            ],
            "11": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Schließen Sie die Augen",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Ich werde dein Gesicht berühren, berühre ich deine rechte, deine linke Seite oder beide Seiten?",
                        "translit": null
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "Rechts",
                                "translit": null
                            },
                            {
                                "translat": "Links",
                                "translit": null
                            },
                            {
                                "translat": "Beide",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Zeigen Sie auf die Seite, die ich berühre",
                        "translit": null
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "Welchen Arm berühre ich? Rechter Arm, linker Arm oder beide Arme?",
                        "translit": null
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "Welches Bein berühre ich? Rechtes Bein, linkes Bein oder beide Beine?",
                        "translit": null
                    }
                },
                {
                    "id": "6",
                    "phrase": {
                        "translat": "Öffnet die Augen",
                        "translit": null
                    }
                },
                {
                    "id": "7",
                    "phrase": {
                        "translat": "Welcher Finger wackeich ich? Rechter Finger, linker Finger oder beide Finger?",
                        "translit": null
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "Rechts",
                                "translit": null
                            },
                            {
                                "translat": "Links",
                                "translit": null
                            },
                            {
                                "translat": "Beide",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "8",
                    "phrase": {
                        "translat": "Zeigen Sie auf die Seite, die ich wackebe",
                        "translit": null
                    }
                }
            ],
            "end": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Vielen Dank",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Auf Wiedersehen",
                        "translit": null
                    }
                }
            ]
        },
        'hi' : {
            "1a": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "नमस्कार",
                        "translit": "namaskar"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "तुम कैसे हो?",
                        "translit": "tum kaise ho?"
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "क्या आप दर्द में हैं?",
                        "translit": "kya aap dard mein hain?"
                    }
                }
            ],
            "1b": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "आप की उम्र क्या है?",
                        "translit": "aap key umra kya hai?"
                    },
                    "solution": {
                        "patient_age": [
                            {
                                "translat": "मैं एक हूँ",
                                "translit": "main ek hoon"
                            },
                            {
                                "translat": "मैं दो हूँ",
                                "translit": "main do hoon"
                            },
                            {
                                "translat": "मैं तीन हूँ",
                                "translit": "main tin hoon"
                            },
                            {
                                "translat": "मैं चार हूँ",
                                "translit": "main char hoon"
                            },
                            {
                                "translat": "मैं पांच हूँ",
                                "translit": "main panch hoon"
                            },
                            {
                                "translat": "मैं छह हूँ",
                                "translit": "main che hoon"
                            },
                            {
                                "translat": "मैं सात हूँ",
                                "translit": "main saat hoon"
                            },
                            {
                                "translat": "मैं आठ हूँ",
                                "translit": "main ath hoon"
                            },
                            {
                                "translat": "मैं नौ हूँ",
                                "translit": "main nau hoon"
                            },
                            {
                                "translat": "मैं एक हूँ",
                                "translit": "main ek hoon"
                            },
                            {
                                "translat": "मैं ग्यारह हूँ",
                                "translit": "main gyarah hoon"
                            },
                            {
                                "translat": "मैं बारह हूँ",
                                "translit": "main barah hoon"
                            },
                            {
                                "translat": "मैं तेरह हूँ",
                                "translit": "main terah hoon"
                            },
                            {
                                "translat": "मैं चौदह हूँ",
                                "translit": "main chaudah hoon"
                            },
                            {
                                "translat": "मैं पंद्रह हूँ",
                                "translit": "main pandrah hoon"
                            },
                            {
                                "translat": "मैं सोलह हूँ",
                                "translit": "main solah hoon"
                            },
                            {
                                "translat": "मैं सत्रह हूँ",
                                "translit": "main satrah hoon"
                            },
                            {
                                "translat": "मैं अठारह हूँ",
                                "translit": "main atharah hoon"
                            },
                            {
                                "translat": "मैं उन्नीस हूँ",
                                "translit": "main unnis hoon"
                            },
                            {
                                "translat": "मैं बीस हूँ",
                                "translit": "main bees hoon"
                            },
                            {
                                "translat": "मैं इक्कीस हूँ",
                                "translit": "main ikkis hoon"
                            },
                            {
                                "translat": "मैं बाईस हूं",
                                "translit": "main bice hoon"
                            },
                            {
                                "translat": "मैं तेईस हूं",
                                "translit": "main teis hoon"
                            },
                            {
                                "translat": "मैं चौबीस हूँ",
                                "translit": "main choubis hoon"
                            },
                            {
                                "translat": "मैं पच्चीस हूँ",
                                "translit": "main pacchis hoon"
                            },
                            {
                                "translat": "मैं छब्बीस हूँ",
                                "translit": "main chabbis hoon"
                            },
                            {
                                "translat": "मैं सत्ताईस हूं",
                                "translit": "main sattais hoon"
                            },
                            {
                                "translat": "मैं अट्ठाईस हूं",
                                "translit": "main atthais hoon"
                            },
                            {
                                "translat": "मैं उनतीस हूं",
                                "translit": "main unties hoon"
                            },
                            {
                                "translat": "मैं तीस हूँ",
                                "translit": "main tees hoon"
                            },
                            {
                                "translat": "मैं तीस एक हूं",
                                "translit": "main tees ek hoon"
                            },
                            {
                                "translat": "मैं बत्तीस हूं",
                                "translit": "main battis hoon"
                            },
                            {
                                "translat": "मैं तैंतीस हूँ",
                                "translit": "main taintis hoon"
                            },
                            {
                                "translat": "मैं चौंतीस हूँ",
                                "translit": "main chaunties hoon"
                            },
                            {
                                "translat": "मैं पैंतीस हूँ",
                                "translit": "main paintis hoon"
                            },
                            {
                                "translat": "मैं छत्तीस हूँ",
                                "translit": "main chattis hoon"
                            },
                            {
                                "translat": "मैं छत्तीस हूँ",
                                "translit": "main chattis hoon"
                            },
                            {
                                "translat": "मैं अड़तीस हूं",
                                "translit": "main adtis hoon"
                            },
                            {
                                "translat": "मैं छत्तीस हूँ",
                                "translit": "main chattis hoon"
                            },
                            {
                                "translat": "मैं चालीस हूँ",
                                "translit": "main chalis hoon"
                            },
                            {
                                "translat": "मैं ४१ हूं",
                                "translit": "main 41 hoon"
                            },
                            {
                                "translat": "मैं ४२ हूं",
                                "translit": "main 42 hoon"
                            },
                            {
                                "translat": "मैं ४३ हूं",
                                "translit": "main 43 hoon"
                            },
                            {
                                "translat": "मैं ४४ हूं",
                                "translit": "main 44 hoon"
                            },
                            {
                                "translat": "मैं पैंतालीस हूँ",
                                "translit": "main pantalis hoon"
                            },
                            {
                                "translat": "मैं ४६ हूं",
                                "translit": "main 46 hoon"
                            },
                            {
                                "translat": "मैं ४७ हूं",
                                "translit": "main 47 hoon"
                            },
                            {
                                "translat": "मैं अड़तालीस हूँ",
                                "translit": "main adtalis hoon"
                            },
                            {
                                "translat": "मैं ४९ हूं",
                                "translit": "main 49 hoon"
                            },
                            {
                                "translat": "मैं पचास हूँ",
                                "translit": "main pachas hoon"
                            },
                            {
                                "translat": "मैं ५१ हूं",
                                "translit": "main 51 hoon"
                            },
                            {
                                "translat": "मैं ५२ हूं",
                                "translit": "main 52 hoon"
                            },
                            {
                                "translat": "मैं ५३ हूं",
                                "translit": "main 53 hoon"
                            },
                            {
                                "translat": "मैं ५४ हूं",
                                "translit": "main 54 hoon"
                            },
                            {
                                "translat": "मैं पचपन हूं",
                                "translit": "main pachpan hoon"
                            },
                            {
                                "translat": "मैं ५६ हूं",
                                "translit": "main 56 hoon"
                            },
                            {
                                "translat": "मैं ५७ हूं",
                                "translit": "main 57 hoon"
                            },
                            {
                                "translat": "मैं ५८ हूं",
                                "translit": "main 58 hoon"
                            },
                            {
                                "translat": "मैं ५९ हूं",
                                "translit": "main 59 hoon"
                            },
                            {
                                "translat": "मैं साठ हूँ",
                                "translit": "main sath hoon"
                            },
                            {
                                "translat": "मैं साठ-एक हूं",
                                "translit": "main sath-ek hoon"
                            },
                            {
                                "translat": "मैं ६२ हूं",
                                "translit": "main 62 hoon"
                            },
                            {
                                "translat": "मैं ६३ हूं",
                                "translit": "main 63 hoon"
                            },
                            {
                                "translat": "मैं चौंसठ हूं",
                                "translit": "main chaunsath hoon"
                            },
                            {
                                "translat": "मैं पैंसठ हूं",
                                "translit": "main painsath hoon"
                            },
                            {
                                "translat": "मैं साठ-छह हूँ",
                                "translit": "main sath-che hoon"
                            },
                            {
                                "translat": "मैं ६७ हूं",
                                "translit": "main 67 hoon"
                            },
                            {
                                "translat": "मैं अड़सठ हूं",
                                "translit": "main adsath hoon"
                            },
                            {
                                "translat": "मैं ६९ हूं",
                                "translit": "main 69 hoon"
                            },
                            {
                                "translat": "मैं सत्तर हूँ",
                                "translit": "main sattar hoon"
                            },
                            {
                                "translat": "मैं सत्तर-एक हूँ",
                                "translit": "main sattar-ek hoon"
                            },
                            {
                                "translat": "मैं सत्तर-दो हूँ",
                                "translit": "main sattar-do hoon"
                            },
                            {
                                "translat": "मैं सत्तर-तीन हूँ",
                                "translit": "main sattar-tin hoon"
                            },
                            {
                                "translat": "मैं 74 हूँ",
                                "translit": "main 74 hoon"
                            },
                            {
                                "translat": "मैं पचहत्तर हूं",
                                "translit": "main pachahattar hoon"
                            },
                            {
                                "translat": "मैं सत्तर-छह हूँ",
                                "translit": "main sattar-che hoon"
                            },
                            {
                                "translat": "मैं सत्तर हूँ",
                                "translit": "main sattar hoon"
                            },
                            {
                                "translat": "मैं 78 हूँ",
                                "translit": "main 78 hoon"
                            },
                            {
                                "translat": "मैं सत्तर-नौ हूँ",
                                "translit": "main sattar-nau hoon"
                            },
                            {
                                "translat": "मैं अस्सी हूँ",
                                "translit": "main assi hoon"
                            },
                            {
                                "translat": "मैं अस्सी-एक हूँ",
                                "translit": "main assi-ek hoon"
                            },
                            {
                                "translat": "मैं अस्सी-दो हूँ",
                                "translit": "main assi-do hoon"
                            },
                            {
                                "translat": "मैं अस्सी-तीन हूँ",
                                "translit": "main assi-tin hoon"
                            },
                            {
                                "translat": "मैं चौरासी हूँ",
                                "translit": "main chaurasi hoon"
                            },
                            {
                                "translat": "मैं चौरासी हूं",
                                "translit": "main chaurasi hoon"
                            },
                            {
                                "translat": "मैं अस्सी-छह हूँ",
                                "translit": "main assi-che hoon"
                            },
                            {
                                "translat": "मैं अस्सी-सात हूँ",
                                "translit": "main assi-saat hoon"
                            },
                            {
                                "translat": "मैं अस्सी-आठ हूँ",
                                "translit": "main assi-ath hoon"
                            },
                            {
                                "translat": "मैं अस्सी-नौ हूँ",
                                "translit": "main assi-nau hoon"
                            },
                            {
                                "translat": "मैं नब्बे हूँ",
                                "translit": "main nabbe hoon"
                            },
                            {
                                "translat": "मैं नब्बे-एक हूं",
                                "translit": "main nabbe-ek hoon"
                            },
                            {
                                "translat": "मैं नब्बे-दो हूं",
                                "translit": "main nabbe-do hoon"
                            },
                            {
                                "translat": "मैं नब्बे हूं",
                                "translit": "main nabbe hoon"
                            },
                            {
                                "translat": "मैं नब्बे-चार हूं",
                                "translit": "main nabbe-char hoon"
                            },
                            {
                                "translat": "मैं नब्बे साल का हूं",
                                "translit": "main nabbe saal kaa hoon"
                            },
                            {
                                "translat": "मैं नब्बे-छह हूं",
                                "translit": "main nabbe-che hoon"
                            },
                            {
                                "translat": "मैं नब्बे हूँ",
                                "translit": "main nabbe hoon"
                            },
                            {
                                "translat": "मैं नब्बे हूँ",
                                "translit": "main nabbe hoon"
                            },
                            {
                                "translat": "मैं नब्बे हूं",
                                "translit": "main nabbe hoon"
                            },
                            {
                                "translat": "मैं एक सौ हूँ",
                                "translit": "main ek sou hoon"
                            },
                            {
                                "translat": "मैं एक सौ और एक हूँ",
                                "translit": "main ek sou aur ek hoon"
                            },
                            {
                                "translat": "मैं एक सौ दो हूँ",
                                "translit": "main ek sou do hoon"
                            },
                            {
                                "translat": "मैं एक सौ तीन हूँ",
                                "translit": "main ek sou tin hoon"
                            },
                            {
                                "translat": "मैं एक सौ चार हूँ",
                                "translit": "main ek sou char hoon"
                            },
                            {
                                "translat": "मैं एक सौ पांच हूँ",
                                "translit": "main ek sou panch hoon"
                            },
                            {
                                "translat": "मैं एक सौ छह हूँ",
                                "translit": "main ek sou che hoon"
                            },
                            {
                                "translat": "मैं एक सौ सात हूँ",
                                "translit": "main ek sou saat hoon"
                            },
                            {
                                "translat": "मैं एक सौ आठ हूँ",
                                "translit": "main ek sou ath hoon"
                            },
                            {
                                "translat": "मैं एक सौ नौ हूँ",
                                "translit": "main ek sou nau hoon"
                            },
                            {
                                "translat": "मैं एक सौ दस हूँ",
                                "translit": "main ek sou das hoon"
                            },
                            {
                                "translat": "मैं एक सौ ग्यारह हूँ",
                                "translit": "main ek sou gyarah hoon"
                            },
                            {
                                "translat": "मैं एक सौ बारह हूँ",
                                "translit": "main ek sou barah hoon"
                            },
                            {
                                "translat": "मैं एक सौ तेरह हूँ",
                                "translit": "main ek sou terah hoon"
                            },
                            {
                                "translat": "मैं एक सौ चौदह हूँ",
                                "translit": "main ek sou chaudah hoon"
                            },
                            {
                                "translat": "मैं एक सौ पंद्रह हूँ",
                                "translit": "main ek sou pandrah hoon"
                            },
                            {
                                "translat": "मैं एक सौ सोलह हूँ",
                                "translit": "main ek sou solah hoon"
                            },
                            {
                                "translat": "मैं एक सौ सत्रह हूँ",
                                "translit": "main ek sou satrah hoon"
                            },
                            {
                                "translat": "मैं एक सौ अठारह हूँ",
                                "translit": "main ek sou atharah hoon"
                            },
                            {
                                "translat": "मैं एक सौ उन्नीस हूँ",
                                "translit": "main ek sou unnis hoon"
                            },
                            {
                                "translat": "मैं एक सौ बीस हूँ",
                                "translit": "main ek sou bees hoon"
                            },
                            {
                                "translat": "मैं एक सौ इक्कीस हूँ",
                                "translit": "main ek sou ikkis hoon"
                            },
                            {
                                "translat": "मैं एक सौ बाईस हूं",
                                "translit": "main ek sou bice hoon"
                            },
                            {
                                "translat": "मैं एक सौ तेईस हूं",
                                "translit": "main ek sou teis hoon"
                            },
                            {
                                "translat": "मैं एक सौ चौबीस हूँ",
                                "translit": "main ek sou choubis hoon"
                            },
                            {
                                "translat": "मैं एक सौ पच्चीस हूं",
                                "translit": "main ek sou pacchis hoon"
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "यह किस महीने है?",
                        "translit": "yeh kiss mahine hai?"
                    },
                    "solution": {
                        "month": [
                            {
                                "translat": "जनवरी",
                                "translit": "janavari"
                            },
                            {
                                "translat": "फ़रवरी",
                                "translit": "farvari"
                            },
                            {
                                "translat": "मार्च",
                                "translit": "march"
                            },
                            {
                                "translat": "अप्रैल",
                                "translit": "april"
                            },
                            {
                                "translat": "मई",
                                "translit": "mayi"
                            },
                            {
                                "translat": "जून",
                                "translit": "june"
                            },
                            {
                                "translat": "जुलाई",
                                "translit": "julai"
                            },
                            {
                                "translat": "अगस्त",
                                "translit": "august"
                            },
                            {
                                "translat": "सितंबर",
                                "translit": "sitambar"
                            },
                            {
                                "translat": "अक्टूबर",
                                "translit": "aktubar"
                            },
                            {
                                "translat": "नवंबर",
                                "translit": "november"
                            },
                            {
                                "translat": "दिसंबर",
                                "translit": "disamber"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "कृपया धीरे-धीरे एक बार और कहें",
                        "translit": "kripaya dhire-dhire ek bar aur kahen"
                    }
                }
            ],
            "1c": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "अपनी आँखें बंद करो, अपनी आँखें खोलो",
                        "translit": "apni ankhen band caro, apni ankhen kholo"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "अपना दाहिना हाथ बंद करें, अपना दाहिना हाथ खोलें",
                                "translit": "apna dahina hath band karen, apna dahina hath kholen"
                            },
                            "Left": {
                                "translat": "अपने बाएं हाथ को बंद करें, अपना बायां हाथ खोलें",
                                "translit": "apne bayen hath ko band karen, apna bayan hath kholen"
                            }
                        }
                    }
                }
            ],
            "2": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "मेरी उंगली का पालन करें",
                        "translit": "mary ungli kaa palan karen"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "मुझे देखो",
                        "translit": "mujhe dekho"
                    }
                }
            ],
            "3": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "मेरी नाक को देखो",
                        "translit": "mary naak ko dekho"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "आप कितनी उंगलियां देखते हैं?",
                        "translit": "aap kitani ungaliyan dekhte hain?"
                    },
                    "solution": {
                        "fingers": [
                            {
                                "translat": "एक",
                                "translit": "ek"
                            },
                            {
                                "translat": "दो",
                                "translit": "do"
                            },
                            {
                                "translat": "तीन",
                                "translit": "tin"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "कृपया धीरे-धीरे एक बार और कहें",
                        "translit": "kripaya dhire-dhire ek bar aur kahen"
                    }
                }
            ],
            "4": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "मुझे अपने दांत दिखाओ",
                        "translit": "mujhe apne dant dikhao"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "अपनी भौहें उठाएं",
                        "translit": "apni bhauhen uthaen"
                    }
                }
            ],
            "5a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "दस सेकंड के लिए अपने दाहिने हाथ लिफ्ट",
                                "translit": "das sekand kay liye apne dahine hath lift"
                            },
                            "Left": {
                                "translat": "दस सेकंड के लिए अपने बाएं हाथ लिफ्ट",
                                "translit": "das sekand kay liye apne bayen hath lift"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "आप सब पर अपने दाहिने हाथ ले जा सकते हैं?",
                                "translit": "aap sub par apne dahine hath ley jaa sakte hain?"
                            },
                            "Left": {
                                "translat": "आप सब पर अपने बाएं हाथ ले जा सकते हैं?",
                                "translit": "aap sub par apne bayen hath ley jaa sakte hain?"
                            }
                        }
                    }
                }
            ],
            "5b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "दस सेकंड के लिए अपने दाहिने हाथ लिफ्ट",
                                "translit": "das sekand kay liye apne dahine hath lift"
                            },
                            "Left": {
                                "translat": "दस सेकंड के लिए अपने बाएं हाथ लिफ्ट",
                                "translit": "das sekand kay liye apne bayen hath lift"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "आप सब पर अपने दाहिने हाथ ले जा सकते हैं?",
                                "translit": "aap sub par apne dahine hath ley jaa sakte hain?"
                            },
                            "Left": {
                                "translat": "आप सब पर अपने बाएं हाथ ले जा सकते हैं?",
                                "translit": "aap sub par apne bayen hath ley jaa sakte hain?"
                            }
                        }
                    }
                }
            ],
            "6a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "पांच सेकंड के लिए अपने दाहिने पैर लिफ्ट",
                                "translit": "panch sekand kay liye apne dahine pair lift"
                            },
                            "Left": {
                                "translat": "पांच सेकंड के लिए अपने बाएं पैर लिफ्ट",
                                "translit": "panch sekand kay liye apne bayen pair lift"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "आप सब पर अपने दाहिने पैर ले जा सकते हैं?",
                                "translit": "aap sub par apne dahine pair ley jaa sakte hain?"
                            },
                            "Left": {
                                "translat": "आप सब पर अपने बाएं पैर ले जा सकते हैं?",
                                "translit": "aap sub par apne bayen pair ley jaa sakte hain?"
                            }
                        }
                    }
                }
            ],
            "6b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "पांच सेकंड के लिए अपने दाहिने पैर लिफ्ट",
                                "translit": "panch sekand kay liye apne dahine pair lift"
                            },
                            "Left": {
                                "translat": "पांच सेकंड के लिए अपने बाएं पैर लिफ्ट",
                                "translit": "panch sekand kay liye apne bayen pair lift"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "आप सब पर अपने दाहिने पैर ले जा सकते हैं?",
                                "translit": "aap sub par apne dahine pair ley jaa sakte hain?"
                            },
                            "Left": {
                                "translat": "आप सब पर अपने बाएं पैर ले जा सकते हैं?",
                                "translit": "aap sub par apne bayen pair ley jaa sakte hain?"
                            }
                        }
                    }
                }
            ],
            "7": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "अपनी नाक को स्पर्श करें, मेरी उंगली को स्पर्श करें",
                        "translit": "apni naak ko sparsh karen, mary ungli ko sparsh karen"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "दूसरे हाथ, अपनी नाक को छूने, मेरी उंगली को छूने",
                        "translit": "doosare hath, apni naak ko choone, mary ungli ko choone"
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "अपनी एड़ी को अपनी पिंडली में रखें फिर ऊपर और नीचे स्लाइड करें",
                        "translit": "apni edi ko apni pindli mein rakhen fir oopar aur nichey slide karen"
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "ऊपर और नीचे जाओ",
                        "translit": "oopar aur nichey jao"
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "दूसरे पैर, अपनी एड़ी को अपनी पिंडली में रखें फिर ऊपर और नीचे स्लाइड करें",
                        "translit": "doosare pair, apni edi ko apni pindli mein rakhen fir oopar aur nichey slide karen"
                    }
                }
            ],
            "8": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "क्या आपको यह महसूस होता है?",
                        "translit": "kya apako yeh mahsus hota hai?"
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "हाँ",
                                "translit": "han"
                            },
                            {
                                "translat": "नहीं",
                                "translit": "nahin"
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "क्या यह दोनों पक्षों पर एक ही लग रहा है?",
                        "translit": "kya yeh donon pakshon par ek hee lag raha hai?"
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "हाँ",
                                "translit": "han"
                            },
                            {
                                "translat": "नहीं",
                                "translit": "nahin"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "अधिक भावना के साथ पक्ष, आप इसे इंगित कर सकते हैं?",
                        "translit": "adhik bhavna kay saath paksh, aap ise ingit kr sakte hain?"
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "दाएँ",
                                "translit": "daen"
                            },
                            {
                                "translat": "बाएँ",
                                "translit": "bayen"
                            }
                        ]
                    }
                }
            ],
            "9": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "इस तस्वीर का वर्णन करें",
                        "translit": "is tasveer kaa varnan karen"
                    },
                    "solution": {
                        "description": [
                            {
                                "translat": "एक औरत बर्तन धो रही है, एक औरत एक तौलिया के साथ एक थाली सूख रहा है, सिंक बाढ़ है, एक लड़का एक कुकी ले जा रहा है, लड़का गिरने के बारे में है, लड़की कुकी के लिए पहुंच रहा है, लड़की हंस रहा है",
                                "translit": "ek aurat bartan dho rahi hai, ek aurat ek tauliya kay saath ek thali sookh raha hai, sync badha hai, ek ladka ek kuki ley jaa raha hai, ladka girney kay bare mein hai, ladki kuki kay liye pahunch raha hai, ladki hans raha hai"
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "आप क्या देखते हैं?",
                        "translit": "aap kya dekhte hain?"
                    },
                    "solution": {
                        "objects": [
                            {
                                "translat": "सेहुँड़",
                                "translit": "sehund"
                            },
                            {
                                "translat": "दस्‍ताना",
                                "translit": "dasa1tana"
                            },
                            {
                                "translat": "कुर्सी",
                                "translit": "kursi"
                            },
                            {
                                "translat": "दरवाजे की",
                                "translit": "darvaje key"
                            },
                            {
                                "translat": "दोला",
                                "translit": "dola"
                            },
                            {
                                "translat": "पर",
                                "translit": "par"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "इन शब्दों को पढ़ें",
                        "translit": "in shabdon ko padhaen"
                    }
                }
            ],
            "10": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "इन शब्दों को दोहराएं",
                        "translit": "in shabdon ko doharaen"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "मेरे बाद दोहराएं",
                        "translit": "mere baad doharaen"
                    }
                }
            ],
            "11": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "अपनी आँखें बंद करें",
                        "translit": "apni ankhen band karen"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "मैं आपका चेहरा छू जाऊंगा, क्या मैं आपकी दाईं ओर, आपकी बाईं ओर या दोनों तरफ छू रहा हूं?",
                        "translit": "main aapka chehra choo jaunga, kya main aapki dain ore, aapki bain ore yaa donon taraf choo raha hoon?"
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "दाएँ",
                                "translit": "daen"
                            },
                            {
                                "translat": "बाएँ",
                                "translit": "bayen"
                            },
                            {
                                "translat": "दोनों",
                                "translit": "donon"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "मैं छू रहा हूं पक्ष को बिंदु",
                        "translit": "main choo raha hoon paksh ko bindu"
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "मैं कौन सा हाथ छू रहा हूं? दाहिना हाथ, बाएं हाथ, या दोनों हथियार?",
                        "translit": "main kaun saa hath choo raha hoon? dahina hath, bayen hath, yaa donon hathiyar?"
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "मैं कौन सा पैर छू रहा हूं? दाहिना पैर, बायां पैर, या दोनों पैर?",
                        "translit": "main kaun saa pair choo raha hoon? dahina pair, bayan pair, yaa donon pair?"
                    }
                },
                {
                    "id": "6",
                    "phrase": {
                        "translat": "अपनी आँखें खोलो",
                        "translit": "apni ankhen kholo"
                    }
                },
                {
                    "id": "7",
                    "phrase": {
                        "translat": "मैं कौन सी उंगली wiggling हूं? दाईं उंगली, बाईं उंगली, या दोनों उंगलियां?",
                        "translit": "main kaun see ungli wiggling hoon? dain ungli, bain ungli, yaa donon ungaliyan?"
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "दाएँ",
                                "translit": "daen"
                            },
                            {
                                "translat": "बाएँ",
                                "translit": "bayen"
                            },
                            {
                                "translat": "दोनों",
                                "translit": "donon"
                            }
                        ]
                    }
                },
                {
                    "id": "8",
                    "phrase": {
                        "translat": "उस तरफ की ओर इशारा करते हुए मैं विग्लिंग कर रहा हूं",
                        "translit": "us taraf key ore ishara karte huye main wigling kr raha hoon"
                    }
                }
            ],
            "end": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "धन्यवाद",
                        "translit": "dhanyavad"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "गुड बाय",
                        "translit": "good bye"
                    }
                }
            ]
        },
        'id' : {
            "1a": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Halo",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Bagaimana keadaanmu?",
                        "translit": null
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Apakah Anda kesakitan?",
                        "translit": null
                    }
                }
            ],
            "1b": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Berapa umurmu?",
                        "translit": null
                    },
                    "solution": {
                        "patient_age": [
                            {
                                "translat": "Saya salah satu",
                                "translit": null
                            },
                            {
                                "translat": "Saya dua",
                                "translit": null
                            },
                            {
                                "translat": "Saya tiga",
                                "translit": null
                            },
                            {
                                "translat": "Saya empat",
                                "translit": null
                            },
                            {
                                "translat": "Saya lima",
                                "translit": null
                            },
                            {
                                "translat": "Saya enam",
                                "translit": null
                            },
                            {
                                "translat": "Saya tujuh",
                                "translit": null
                            },
                            {
                                "translat": "Saya delapan",
                                "translit": null
                            },
                            {
                                "translat": "Saya sembilan",
                                "translit": null
                            },
                            {
                                "translat": "Akulah orangnya.",
                                "translit": null
                            },
                            {
                                "translat": "Saya sebelas",
                                "translit": null
                            },
                            {
                                "translat": "Saya dua belas",
                                "translit": null
                            },
                            {
                                "translat": "Saya tiga belas",
                                "translit": null
                            },
                            {
                                "translat": "Saya empat belas",
                                "translit": null
                            },
                            {
                                "translat": "Aku lima belas tahun",
                                "translit": null
                            },
                            {
                                "translat": "Saya enam belas",
                                "translit": null
                            },
                            {
                                "translat": "Saya tujuh belas",
                                "translit": null
                            },
                            {
                                "translat": "Saya delapan belas",
                                "translit": null
                            },
                            {
                                "translat": "Saya sembilan belas",
                                "translit": null
                            },
                            {
                                "translat": "Saya dua puluh",
                                "translit": null
                            },
                            {
                                "translat": "Saya dua puluh satu",
                                "translit": null
                            },
                            {
                                "translat": "Saya dua puluh dua",
                                "translit": null
                            },
                            {
                                "translat": "Saya dua puluh tiga",
                                "translit": null
                            },
                            {
                                "translat": "Saya dua puluh empat",
                                "translit": null
                            },
                            {
                                "translat": "Saya dua puluh lima",
                                "translit": null
                            },
                            {
                                "translat": "Saya dua puluh enam",
                                "translit": null
                            },
                            {
                                "translat": "Saya dua puluh tujuh",
                                "translit": null
                            },
                            {
                                "translat": "Saya dua puluh delapan",
                                "translit": null
                            },
                            {
                                "translat": "Saya dua puluh sembilan",
                                "translit": null
                            },
                            {
                                "translat": "Saya tiga puluh",
                                "translit": null
                            },
                            {
                                "translat": "Saya tiga puluh satu",
                                "translit": null
                            },
                            {
                                "translat": "Aku tiga puluh dua",
                                "translit": null
                            },
                            {
                                "translat": "Aku tiga puluh tiga",
                                "translit": null
                            },
                            {
                                "translat": "Saya tiga puluh empat",
                                "translit": null
                            },
                            {
                                "translat": "Aku tiga puluh lima",
                                "translit": null
                            },
                            {
                                "translat": "Aku tiga puluh enam",
                                "translit": null
                            },
                            {
                                "translat": "Aku tiga puluh tujuh",
                                "translit": null
                            },
                            {
                                "translat": "Aku tiga puluh delapan",
                                "translit": null
                            },
                            {
                                "translat": "Aku tiga puluh sembilan",
                                "translit": null
                            },
                            {
                                "translat": "Aku empat puluh",
                                "translit": null
                            },
                            {
                                "translat": "Aku empat puluh satu",
                                "translit": null
                            },
                            {
                                "translat": "Aku empat puluh dua",
                                "translit": null
                            },
                            {
                                "translat": "Aku empat puluh tiga",
                                "translit": null
                            },
                            {
                                "translat": "Aku empat puluh empat",
                                "translit": null
                            },
                            {
                                "translat": "Aku empat puluh lima",
                                "translit": null
                            },
                            {
                                "translat": "Aku empat puluh enam",
                                "translit": null
                            },
                            {
                                "translat": "Aku empat puluh tujuh",
                                "translit": null
                            },
                            {
                                "translat": "Aku empat puluh delapan",
                                "translit": null
                            },
                            {
                                "translat": "Aku empat puluh sembilan",
                                "translit": null
                            },
                            {
                                "translat": "Aku lima puluh",
                                "translit": null
                            },
                            {
                                "translat": "Aku lima puluh satu",
                                "translit": null
                            },
                            {
                                "translat": "Aku lima puluh dua",
                                "translit": null
                            },
                            {
                                "translat": "Aku lima puluh tiga",
                                "translit": null
                            },
                            {
                                "translat": "Aku lima puluh empat",
                                "translit": null
                            },
                            {
                                "translat": "Aku lima puluh lima",
                                "translit": null
                            },
                            {
                                "translat": "Aku lima puluh enam",
                                "translit": null
                            },
                            {
                                "translat": "Aku lima puluh tujuh",
                                "translit": null
                            },
                            {
                                "translat": "Aku lima puluh delapan",
                                "translit": null
                            },
                            {
                                "translat": "Aku lima puluh sembilan",
                                "translit": null
                            },
                            {
                                "translat": "Saya enam puluh",
                                "translit": null
                            },
                            {
                                "translat": "Saya enam puluh satu",
                                "translit": null
                            },
                            {
                                "translat": "Aku enam puluh dua",
                                "translit": null
                            },
                            {
                                "translat": "Aku enam puluh tiga",
                                "translit": null
                            },
                            {
                                "translat": "Aku enam puluh empat",
                                "translit": null
                            },
                            {
                                "translat": "Aku enam puluh lima",
                                "translit": null
                            },
                            {
                                "translat": "Aku enam puluh enam",
                                "translit": null
                            },
                            {
                                "translat": "Aku enam puluh tujuh",
                                "translit": null
                            },
                            {
                                "translat": "Aku enam puluh delapan",
                                "translit": null
                            },
                            {
                                "translat": "Saya enam puluh sembilan",
                                "translit": null
                            },
                            {
                                "translat": "Saya tujuh puluh",
                                "translit": null
                            },
                            {
                                "translat": "Saya tujuh puluh satu",
                                "translit": null
                            },
                            {
                                "translat": "Saya tujuh puluh dua",
                                "translit": null
                            },
                            {
                                "translat": "Saya tujuh puluh tiga",
                                "translit": null
                            },
                            {
                                "translat": "Saya tujuh puluh empat",
                                "translit": null
                            },
                            {
                                "translat": "Saya tujuh puluh lima",
                                "translit": null
                            },
                            {
                                "translat": "Aku tujuh puluh enam",
                                "translit": null
                            },
                            {
                                "translat": "Aku tujuh puluh tujuh",
                                "translit": null
                            },
                            {
                                "translat": "Aku tujuh puluh delapan",
                                "translit": null
                            },
                            {
                                "translat": "Saya tujuh puluh sembilan",
                                "translit": null
                            },
                            {
                                "translat": "Saya delapan puluh",
                                "translit": null
                            },
                            {
                                "translat": "Aku delapan puluh satu",
                                "translit": null
                            },
                            {
                                "translat": "Aku delapan puluh dua",
                                "translit": null
                            },
                            {
                                "translat": "Aku delapan puluh tiga",
                                "translit": null
                            },
                            {
                                "translat": "Aku delapan puluh empat",
                                "translit": null
                            },
                            {
                                "translat": "Aku delapan puluh lima",
                                "translit": null
                            },
                            {
                                "translat": "Aku delapan puluh enam",
                                "translit": null
                            },
                            {
                                "translat": "Aku delapan puluh tujuh",
                                "translit": null
                            },
                            {
                                "translat": "Aku delapan puluh delapan",
                                "translit": null
                            },
                            {
                                "translat": "Aku delapan puluh sembilan",
                                "translit": null
                            },
                            {
                                "translat": "Saya sembilan puluh",
                                "translit": null
                            },
                            {
                                "translat": "Saya sembilan puluh satu",
                                "translit": null
                            },
                            {
                                "translat": "Saya sembilan puluh dua",
                                "translit": null
                            },
                            {
                                "translat": "Saya sembilan puluh tiga",
                                "translit": null
                            },
                            {
                                "translat": "Saya sembilan puluh empat",
                                "translit": null
                            },
                            {
                                "translat": "Aku sembilan puluh lima",
                                "translit": null
                            },
                            {
                                "translat": "Aku sembilan puluh enam",
                                "translit": null
                            },
                            {
                                "translat": "Aku sembilan puluh tujuh",
                                "translit": null
                            },
                            {
                                "translat": "Aku sembilan puluh delapan",
                                "translit": null
                            },
                            {
                                "translat": "Aku sembilan puluh sembilan",
                                "translit": null
                            },
                            {
                                "translat": "Saya seratus",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus satu",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus dua",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus tiga",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus empat",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus lima",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus enam",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus tujuh",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus delapan",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus sembilan",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus sepuluh",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus sebelas",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus dua belas",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus tiga belas",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus empat belas",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus lima belas",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus enam belas",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus tujuh belas",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus delapan belas",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus sembilan belas",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus dua puluh",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus dua puluh satu",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus dua puluh dua",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus dua puluh tiga",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus dua puluh empat",
                                "translit": null
                            },
                            {
                                "translat": "Aku seratus dua puluh lima",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Bulan apa ini?",
                        "translit": null
                    },
                    "solution": {
                        "month": [
                            {
                                "translat": "Januari",
                                "translit": null
                            },
                            {
                                "translat": "Februari",
                                "translit": null
                            },
                            {
                                "translat": "Maret",
                                "translit": null
                            },
                            {
                                "translat": "April",
                                "translit": null
                            },
                            {
                                "translat": "Mei",
                                "translit": null
                            },
                            {
                                "translat": "Juni",
                                "translit": null
                            },
                            {
                                "translat": "Juli",
                                "translit": null
                            },
                            {
                                "translat": "Agustus",
                                "translit": null
                            },
                            {
                                "translat": "September",
                                "translit": null
                            },
                            {
                                "translat": "Oktober",
                                "translit": null
                            },
                            {
                                "translat": "November",
                                "translit": null
                            },
                            {
                                "translat": "Desember",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Tolong perlahan-lahan mengatakan sekali lagi",
                        "translit": null
                    }
                }
            ],
            "1c": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Tutup matamu, buka matamu.",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Tutup tangan kananmu, buka tangan kananmu.",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Tutup tangan kirimu, buka tangan kirimu.",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "2": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Ikuti jariku",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Lihat aku.",
                        "translit": null
                    }
                }
            ],
            "3": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Lihat hidungku.",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Berapa banyak jari yang Anda lihat?",
                        "translit": null
                    },
                    "solution": {
                        "fingers": [
                            {
                                "translat": "Satu",
                                "translit": null
                            },
                            {
                                "translat": "Dua",
                                "translit": null
                            },
                            {
                                "translat": "Tiga",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Tolong perlahan-lahan mengatakan sekali lagi",
                        "translit": null
                    }
                }
            ],
            "4": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Tunjukkan gigimu.",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Angkat alis Anda",
                        "translit": null
                    }
                }
            ],
            "5a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Angkat lengan kanan anda selama sepuluh detik",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Angkat lengan kiri selama sepuluh detik",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Dapatkah Anda menggerakkan lengan kanan Anda sama sekali?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Dapatkah Anda menggerakkan lengan kiri Anda sama sekali?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "5b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Angkat lengan kanan anda selama sepuluh detik",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Angkat lengan kiri selama sepuluh detik",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Dapatkah Anda menggerakkan lengan kanan Anda sama sekali?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Dapatkah Anda menggerakkan lengan kiri Anda sama sekali?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "6a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Angkat kaki kanan anda selama lima detik",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Angkat kaki kiri selama lima detik",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Dapatkah Anda menggerakkan kaki kanan Anda sama sekali?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Dapatkah Anda menggerakkan kaki kiri Anda sama sekali?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "6b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Angkat kaki kanan anda selama lima detik",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Angkat kaki kiri selama lima detik",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Dapatkah Anda menggerakkan kaki kanan Anda sama sekali?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Dapatkah Anda menggerakkan kaki kiri Anda sama sekali?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "7": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Sentuh hidungmu, sentuh jariku",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Tangan lain, sentuh hidungmu, sentuh jariku",
                        "translit": null
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Letakkan tumit Anda ke tulang kering Anda kemudian geser ke atas dan ke bawah",
                        "translit": null
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "Naik dan turun",
                        "translit": null
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "Kaki lain, letakkan tumit Anda ke tulang kering Anda kemudian geser ke atas dan ke bawah",
                        "translit": null
                    }
                }
            ],
            "8": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Apakah Anda merasa ini?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "Ya",
                                "translit": null
                            },
                            {
                                "translat": "Tidak",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Apakah rasanya sama di kedua sisi?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "Ya",
                                "translit": null
                            },
                            {
                                "translat": "Tidak",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Sisi dengan perasaan yang lebih, dapat Anda arahkan padanya?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "Kanan",
                                "translit": null
                            },
                            {
                                "translat": "Kiri",
                                "translit": null
                            }
                        ]
                    }
                }
            ],
            "9": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Jelaskan gambar ini",
                        "translit": null
                    },
                    "solution": {
                        "description": [
                            {
                                "translat": "Seorang wanita mencuci piring, seorang wanita mengeringkan piring dengan handuk, wastafel banjir, seorang anak laki-laki mengambil kue, anak laki-laki akan jatuh, gadis itu meraih kue, gadis itu tertawa",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Apa yang Anda lihat?",
                        "translit": null
                    },
                    "solution": {
                        "objects": [
                            {
                                "translat": "Kaktus",
                                "translit": null
                            },
                            {
                                "translat": "Sarung tangan",
                                "translit": null
                            },
                            {
                                "translat": "Kursi",
                                "translit": null
                            },
                            {
                                "translat": "tombol pintu",
                                "translit": null
                            },
                            {
                                "translat": "tempat tidur gantung",
                                "translit": null
                            },
                            {
                                "translat": "Bulu",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Baca kata-kata ini",
                        "translit": null
                    }
                }
            ],
            "10": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Ulangi kata-kata ini",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Ulangi setelah saya",
                        "translit": null
                    }
                }
            ],
            "11": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Tutup mata Anda",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Aku akan menyentuh wajahmu, apa aku menyentuh sisi kananmu, sisi kirimu, atau kedua belah pihak?",
                        "translit": null
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "Kanan",
                                "translit": null
                            },
                            {
                                "translat": "Kiri",
                                "translit": null
                            },
                            {
                                "translat": "Kedua",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Arahkan ke samping yang saya menyentuh",
                        "translit": null
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "Lengan mana yang kuent menyentuh? Lengan kanan, lengan kiri, atau kedua lengan?",
                        "translit": null
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "Kaki mana yang kuent menyentuh? Kaki kanan, kaki kiri, atau kedua kaki?",
                        "translit": null
                    }
                },
                {
                    "id": "6",
                    "phrase": {
                        "translat": "Buka mata Anda",
                        "translit": null
                    }
                },
                {
                    "id": "7",
                    "phrase": {
                        "translat": "Jari mana yang kugoyangkan? Jari kanan, jari kiri, atau kedua jari?",
                        "translit": null
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "Kanan",
                                "translit": null
                            },
                            {
                                "translat": "Kiri",
                                "translit": null
                            },
                            {
                                "translat": "Kedua",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "8",
                    "phrase": {
                        "translat": "Arahkan ke samping aku menggoyang-goyangkan",
                        "translit": null
                    }
                }
            ],
            "end": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Terima kasih",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Selamat tinggal",
                        "translit": null
                    }
                }
            ]
        },
        'es' : {
            "1a": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Hola",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "¿Cómo estás?",
                        "translit": null
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "¿Tienes dolor?",
                        "translit": null
                    }
                }
            ],
            "1b": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "¿Cuántos años tienes?",
                        "translit": null
                    },
                    "solution": {
                        "patient_age": [
                            {
                                "translat": "Soy uno",
                                "translit": null
                            },
                            {
                                "translat": "Tengo dos años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo tres años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cuatro años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cinco años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo seis años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo siete años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ocho años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo nueve años.",
                                "translit": null
                            },
                            {
                                "translat": "Yo soy el único",
                                "translit": null
                            },
                            {
                                "translat": "Tengo once años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo doce años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo trece años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo catorce años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo quince años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo dieciséis años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo diecisiete años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo dieciocho años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo diecinueve años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo veinte años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo veintiún años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo veintidós años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo veintitrés años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo veinticuatro años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo veinticinco años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo veintiséis años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo veintisiete años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo veintiocho años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo veintinueve años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo treinta años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo treinta y un años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo treinta y dos años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo treinta y tres años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo treinta y cuatro años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo treinta y cinco años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo treinta y seis años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo treinta y siete años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo treinta y ocho años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo treinta y nueve años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cuarenta años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cuarenta y uno",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cuarenta y dos años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cuarenta y tres años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cuarenta y cuatro años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cuarenta y cinco años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cuarenta y seis años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cuarenta y siete años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cuarenta y ocho años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cuarenta y nueve años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cincuenta años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cincuenta y uno",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cincuenta y dos años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cincuenta y tres años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cincuenta y cuatro años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cincuenta y cinco años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cincuenta y seis años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cincuenta y siete años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cincuenta y ocho años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cincuenta y nueve años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo sesenta años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo sesenta y uno",
                                "translit": null
                            },
                            {
                                "translat": "Tengo sesenta y dos años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo sesenta y tres años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo sesenta y cuatro años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo sesenta y cinco años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo sesenta y seis años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo sesenta y siete años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo sesenta y ocho años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo sesenta y nueve años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo setenta años.",
                                "translit": null
                            },
                            {
                                "translat": "Tengo setenta y uno",
                                "translit": null
                            },
                            {
                                "translat": "Tengo setenta y dos años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo setenta y tres años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo setenta y cuatro años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo setenta y cinco años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo setenta y seis años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo setenta y siete años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo setenta y ocho años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo setenta y nueve años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ochenta años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ochenta y un años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ochenta y dos años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ochenta y tres años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ochenta y cuatro años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ochenta y cinco años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ochenta y seis años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ochenta y siete años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ochenta y ocho años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ochenta y nueve años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo noventa años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo noventa y un años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo noventa y dos años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo noventa y tres años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo noventa y cuatro años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo noventa y cinco años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo noventa y seis años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo noventa y siete años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo noventa y ocho años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo noventa y nueve años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cien años.",
                                "translit": null
                            },
                            {
                                "translat": "Soy cien y uno",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cien y dos años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo cien y tres años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento y cuatro años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento cinco años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento seis años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento siete años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento ocho años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento nueve años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento diez años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento once años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento doce años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento trece años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento catorce años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento quince años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento dieciséis años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento diecisiete años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento dieciocho años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento diecinueve años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento veinte años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento veintiuno",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento veintidós años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento veintitrés años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento veinticuatro años",
                                "translit": null
                            },
                            {
                                "translat": "Tengo ciento veinticinco años",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "¿Qué mes es?",
                        "translit": null
                    },
                    "solution": {
                        "month": [
                            {
                                "translat": "Enero",
                                "translit": null
                            },
                            {
                                "translat": "Febrero",
                                "translit": null
                            },
                            {
                                "translat": "Marzo",
                                "translit": null
                            },
                            {
                                "translat": "Abril",
                                "translit": null
                            },
                            {
                                "translat": "Mayo",
                                "translit": null
                            },
                            {
                                "translat": "Junio",
                                "translit": null
                            },
                            {
                                "translat": "Julio",
                                "translit": null
                            },
                            {
                                "translat": "Agosto",
                                "translit": null
                            },
                            {
                                "translat": "Septiembre",
                                "translit": null
                            },
                            {
                                "translat": "Octubre",
                                "translit": null
                            },
                            {
                                "translat": "Noviembre",
                                "translit": null
                            },
                            {
                                "translat": "Diciembre",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Por favor, diga lentamente una vez más",
                        "translit": null
                    }
                }
            ],
            "1c": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Cierra los ojos, abre los ojos",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Cierra la mano derecha, abre la mano derecha",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Cierra la mano izquierda, abre la mano izquierda",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "2": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Sigue mi dedo",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Mírame",
                        "translit": null
                    }
                }
            ],
            "3": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Mira mi nariz",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "¿Cuántos dedos ves?",
                        "translit": null
                    },
                    "solution": {
                        "fingers": [
                            {
                                "translat": "Uno",
                                "translit": null
                            },
                            {
                                "translat": "Dos",
                                "translit": null
                            },
                            {
                                "translat": "Tres",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Por favor, diga lentamente una vez más",
                        "translit": null
                    }
                }
            ],
            "4": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Muéstrame tus dientes",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Levanta las cejas",
                        "translit": null
                    }
                }
            ],
            "5a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Levanta el brazo derecho durante diez segundos",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Levante el brazo izquierdo durante diez segundos",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "¿Puedes mover el brazo derecho?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "¿Puedes mover el brazo izquierdo?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "5b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Levanta el brazo derecho durante diez segundos",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Levante el brazo izquierdo durante diez segundos",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "¿Puedes mover el brazo derecho?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "¿Puedes mover el brazo izquierdo?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "6a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Levanta la pierna derecha durante cinco segundos",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Levanta la pierna izquierda durante cinco segundos",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "¿Puedes mover la pierna derecha?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "¿Puedes mover la pierna izquierda?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "6b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Levanta la pierna derecha durante cinco segundos",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Levanta la pierna izquierda durante cinco segundos",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "¿Puedes mover la pierna derecha?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "¿Puedes mover la pierna izquierda?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "7": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Toca tu nariz, toca mi dedo",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Otra mano, toca tu nariz, toca mi dedo",
                        "translit": null
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Pon el talón en la espinilla y deslízate hacia arriba y hacia abajo",
                        "translit": null
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "Sube y baja",
                        "translit": null
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "Otra pierna, pon el talón en la espinilla y luego deslízate hacia arriba y hacia abajo",
                        "translit": null
                    }
                }
            ],
            "8": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "¿Sientes esto?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "Sí",
                                "translit": null
                            },
                            {
                                "translat": "no",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "¿Se siente igual en ambos lados?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "Sí",
                                "translit": null
                            },
                            {
                                "translat": "no",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "El lado con más sentimiento, ¿puedes apuntarlo?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "Correcto",
                                "translit": null
                            },
                            {
                                "translat": "Izquierda",
                                "translit": null
                            }
                        ]
                    }
                }
            ],
            "9": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Describa esta imagen",
                        "translit": null
                    },
                    "solution": {
                        "description": [
                            {
                                "translat": "Una mujer está lavando los platos, una mujer está secando un plato con una toalla, el fregadero se está inundando, un niño está tomando una galleta, el niño está a punto de caer, la chica está buscando la galleta, la chica se ríe",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "¿Qué ves?",
                        "translit": null
                    },
                    "solution": {
                        "objects": [
                            {
                                "translat": "Cactus",
                                "translit": null
                            },
                            {
                                "translat": "Guante",
                                "translit": null
                            },
                            {
                                "translat": "Silla",
                                "translit": null
                            },
                            {
                                "translat": "llave de la puerta",
                                "translit": null
                            },
                            {
                                "translat": "Hamaca",
                                "translit": null
                            },
                            {
                                "translat": "Pluma",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Lea estas palabras",
                        "translit": null
                    }
                }
            ],
            "10": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Repite estas palabras",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Repite después de mí",
                        "translit": null
                    }
                }
            ],
            "11": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Cierra los ojos",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Te tocaré la cara, ¿estoy tocando tu lado derecho, tu lado izquierdo o ambos lados?",
                        "translit": null
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "Correcto",
                                "translit": null
                            },
                            {
                                "translat": "Izquierda",
                                "translit": null
                            },
                            {
                                "translat": "Ambos",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Apunta al lado que estoy tocando",
                        "translit": null
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "¿Qué brazo estoy tocando? ¿Brazo derecho, brazo izquierdo o ambos brazos?",
                        "translit": null
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "¿Qué pierna estoy tocando? ¿La pierna derecha, la pierna izquierda o ambas piernas?",
                        "translit": null
                    }
                },
                {
                    "id": "6",
                    "phrase": {
                        "translat": "Abre los ojos",
                        "translit": null
                    }
                },
                {
                    "id": "7",
                    "phrase": {
                        "translat": "¿Qué dedo estoy moviendo? ¿Dedo derecho, dedo izquierdo o ambos dedos?",
                        "translit": null
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "Correcto",
                                "translit": null
                            },
                            {
                                "translat": "Izquierda",
                                "translit": null
                            },
                            {
                                "translat": "Ambos",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "8",
                    "phrase": {
                        "translat": "Apunta al lado que estoy moviendo",
                        "translit": null
                    }
                }
            ],
            "end": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Gracias",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Adiós",
                        "translit": null
                    }
                }
            ]
        },
        'th' : {
            "1a": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "สวัสดี",
                        "translit": "sawatdi"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "สบายดีหรือ",
                        "translit": "sabaidirue"
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "คุณเจ็บปวดเหรอ?",
                        "translit": "khuncheppuatroe?"
                    }
                }
            ],
            "1b": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "คุณอายุเท่าไร",
                        "translit": "khunayuthaorai"
                    },
                    "solution": {
                        "patient_age": [
                            {
                                "translat": "ฉันเป็นหนึ่งเดียว",
                                "translit": "chanpennuengdiao"
                            },
                            {
                                "translat": "ฉันสอง",
                                "translit": "chansong"
                            },
                            {
                                "translat": "ฉันสาม",
                                "translit": "chansam"
                            },
                            {
                                "translat": "ฉันอายุ 4 ขวบ",
                                "translit": "chanayu 4 khuap"
                            },
                            {
                                "translat": "ฉันอายุ 5 ขวบ",
                                "translit": "chanayu 5 khuap"
                            },
                            {
                                "translat": "ฉันอายุ 6 ขวบ",
                                "translit": "chanayu 6 khuap"
                            },
                            {
                                "translat": "ฉันอายุ 7 ขวบ",
                                "translit": "chanayu 7 khuap"
                            },
                            {
                                "translat": "ฉันอายุแปดขวบ",
                                "translit": "chanayupaetkhuap"
                            },
                            {
                                "translat": "ฉันเก้าขวบ",
                                "translit": "chankaokhuap"
                            },
                            {
                                "translat": "ฉันคือคนนั้น",
                                "translit": "chankhuekhonnan"
                            },
                            {
                                "translat": "ฉันสิบเอ็ดคน",
                                "translit": "chansipetkhon"
                            },
                            {
                                "translat": "ฉัน 12",
                                "translit": "chan 12"
                            },
                            {
                                "translat": "ฉันอายุสิบสาม",
                                "translit": "chanayusipsam"
                            },
                            {
                                "translat": "ฉันอายุสิบสี่",
                                "translit": "chanayusipsi"
                            },
                            {
                                "translat": "ฉันอายุสิบห้า",
                                "translit": "chanayusipha"
                            },
                            {
                                "translat": "ฉันอายุสิบหก",
                                "translit": "chanayusiphok"
                            },
                            {
                                "translat": "ฉันสิบเจ็ด",
                                "translit": "chansipchet"
                            },
                            {
                                "translat": "ฉันอายุสิบแปด",
                                "translit": "chanayusippaet"
                            },
                            {
                                "translat": "ฉันอายุสิบเก้า",
                                "translit": "chanayusipkao"
                            },
                            {
                                "translat": "ฉันยี่สิบ",
                                "translit": "chanyisip"
                            },
                            {
                                "translat": "ฉันยี่สิบหนึ่ง",
                                "translit": "chanyisipnueng"
                            },
                            {
                                "translat": "ฉันยี่สิบสอง",
                                "translit": "chanyisipsong"
                            },
                            {
                                "translat": "ฉันยี่สิบสาม",
                                "translit": "chanyisipsam"
                            },
                            {
                                "translat": "ฉันยี่สิบสี่",
                                "translit": "chanyisipsi"
                            },
                            {
                                "translat": "ฉันยี่สิบห้า",
                                "translit": "chanyisipha"
                            },
                            {
                                "translat": "ฉันยี่สิบหก",
                                "translit": "chanyisiphok"
                            },
                            {
                                "translat": "ฉันยี่สิบเจ็ด",
                                "translit": "chanyisipchet"
                            },
                            {
                                "translat": "ฉันยี่สิบแปด",
                                "translit": "chanyisippaet"
                            },
                            {
                                "translat": "ฉันยี่สิบเก้า",
                                "translit": "chanyisipkao"
                            },
                            {
                                "translat": "ฉันสามสิบ",
                                "translit": "chansamsip"
                            },
                            {
                                "translat": "ฉันสามสิบเอ็ด",
                                "translit": "chansamsipet"
                            },
                            {
                                "translat": "ฉันสามสิบสอง",
                                "translit": "chansamsipsong"
                            },
                            {
                                "translat": "ฉันสามสิบสาม",
                                "translit": "chansamsipsam"
                            },
                            {
                                "translat": "ฉันสามสิบสี่",
                                "translit": "chansamsipsi"
                            },
                            {
                                "translat": "ฉันสามสิบห้า",
                                "translit": "chansamsipha"
                            },
                            {
                                "translat": "ฉันสามสิบหก",
                                "translit": "chansamsiphok"
                            },
                            {
                                "translat": "ฉันสามสิบเจ็ด",
                                "translit": "chansamsipchet"
                            },
                            {
                                "translat": "ฉันสามสิบแปด",
                                "translit": "chansamsippaet"
                            },
                            {
                                "translat": "ฉันสามสิบเก้า",
                                "translit": "chansamsipkao"
                            },
                            {
                                "translat": "ฉันสี่สิบ",
                                "translit": "chansisip"
                            },
                            {
                                "translat": "ฉันสี่สิบหนึ่ง",
                                "translit": "chansisipnueng"
                            },
                            {
                                "translat": "ฉันสี่สิบสอง",
                                "translit": "chansisipsong"
                            },
                            {
                                "translat": "ฉันสี่สิบสาม",
                                "translit": "chansisipsam"
                            },
                            {
                                "translat": "ฉันสี่สิบสี่",
                                "translit": "chansisipsi"
                            },
                            {
                                "translat": "ฉันสี่สิบห้า",
                                "translit": "chansisipha"
                            },
                            {
                                "translat": "ฉันสี่สิบหก",
                                "translit": "chansisiphok"
                            },
                            {
                                "translat": "ฉันสี่สิบเจ็ด",
                                "translit": "chansisipchet"
                            },
                            {
                                "translat": "ฉันสี่สิบแปด",
                                "translit": "chansisippaet"
                            },
                            {
                                "translat": "ฉันสี่สิบเก้า",
                                "translit": "chansisipkao"
                            },
                            {
                                "translat": "ฉันห้าสิบ",
                                "translit": "chanhasip"
                            },
                            {
                                "translat": "ฉันห้าสิบหนึ่ง",
                                "translit": "chanhasipnueng"
                            },
                            {
                                "translat": "ฉันห้าสิบสอง",
                                "translit": "chanhasipsong"
                            },
                            {
                                "translat": "ฉันห้าสิบสาม",
                                "translit": "chanhasipsam"
                            },
                            {
                                "translat": "ฉันห้าสิบสี่",
                                "translit": "chanhasipsi"
                            },
                            {
                                "translat": "ฉันห้าสิบห้า",
                                "translit": "chanhasipha"
                            },
                            {
                                "translat": "ฉันห้าสิบหก",
                                "translit": "chanhasiphok"
                            },
                            {
                                "translat": "ฉันห้าสิบเจ็ด",
                                "translit": "chanhasipchet"
                            },
                            {
                                "translat": "ฉันห้าสิบแปด",
                                "translit": "chanhasippaet"
                            },
                            {
                                "translat": "ฉันห้าสิบเก้า",
                                "translit": "chanhasipkao"
                            },
                            {
                                "translat": "ฉันหกสิบ",
                                "translit": "chanhoksip"
                            },
                            {
                                "translat": "ฉันหกสิบหนึ่ง",
                                "translit": "chanhoksipnueng"
                            },
                            {
                                "translat": "ฉันหกสิบสอง",
                                "translit": "chanhoksipsong"
                            },
                            {
                                "translat": "ฉันหกสิบสาม",
                                "translit": "chanhoksipsam"
                            },
                            {
                                "translat": "ฉันหกสิบสี่",
                                "translit": "chanhoksipsi"
                            },
                            {
                                "translat": "ฉันหกสิบห้า",
                                "translit": "chanhoksipha"
                            },
                            {
                                "translat": "ฉันหกสิบหก",
                                "translit": "chanhoksiphok"
                            },
                            {
                                "translat": "ฉันหกสิบเจ็ด",
                                "translit": "chanhoksipchet"
                            },
                            {
                                "translat": "ฉันหกสิบแปด",
                                "translit": "chanhoksippaet"
                            },
                            {
                                "translat": "ฉันหกสิบเก้า",
                                "translit": "chanhoksipkao"
                            },
                            {
                                "translat": "ฉันเจ็ดสิบ",
                                "translit": "chanchetsip"
                            },
                            {
                                "translat": "ฉันเจ็ดสิบหนึ่ง",
                                "translit": "chanchetsipnueng"
                            },
                            {
                                "translat": "ฉันเจ็ดสิบสอง",
                                "translit": "chanchetsipsong"
                            },
                            {
                                "translat": "ฉันเจ็ดสิบสาม",
                                "translit": "chanchetsipsam"
                            },
                            {
                                "translat": "ฉันเจ็ดสิบสี่",
                                "translit": "chanchetsipsi"
                            },
                            {
                                "translat": "ฉันเจ็ดสิบห้า",
                                "translit": "chanchetsipha"
                            },
                            {
                                "translat": "ฉันเจ็ดสิบหก",
                                "translit": "chanchetsiphok"
                            },
                            {
                                "translat": "ฉันเจ็ดสิบเจ็ด",
                                "translit": "chanchetsipchet"
                            },
                            {
                                "translat": "ฉันเจ็ดสิบแปด",
                                "translit": "chanchetsippaet"
                            },
                            {
                                "translat": "ฉันเจ็ดสิบเก้า",
                                "translit": "chanchetsipkao"
                            },
                            {
                                "translat": "ฉันอายุแปดสิบ",
                                "translit": "chanayupaetsip"
                            },
                            {
                                "translat": "ฉันแปดสิบหนึ่ง",
                                "translit": "chanpaetsipnueng"
                            },
                            {
                                "translat": "ฉันอายุแปดสิบสอง",
                                "translit": "chanayupaetsipsong"
                            },
                            {
                                "translat": "ฉันอายุแปดสิบสาม",
                                "translit": "chanayupaetsipsam"
                            },
                            {
                                "translat": "ฉันอายุแปดสิบสี่",
                                "translit": "chanayupaetsipsi"
                            },
                            {
                                "translat": "ฉันอายุแปดสิบห้า",
                                "translit": "chanayupaetsipha"
                            },
                            {
                                "translat": "ฉันอายุแปดสิบหก",
                                "translit": "chanayupaetsiphok"
                            },
                            {
                                "translat": "ฉันอายุแปดสิบเจ็ด",
                                "translit": "chanayupaetsipchet"
                            },
                            {
                                "translat": "ฉันอายุแปดสิบแปด",
                                "translit": "chanayupaetsippaet"
                            },
                            {
                                "translat": "ฉันอายุแปดสิบเก้า",
                                "translit": "chanayupaetsipkao"
                            },
                            {
                                "translat": "ฉันเก้าสิบ",
                                "translit": "chankaosip"
                            },
                            {
                                "translat": "ฉันเก้าสิบหนึ่ง",
                                "translit": "chankaosipnueng"
                            },
                            {
                                "translat": "ฉันเก้าสิบสอง",
                                "translit": "chankaosipsong"
                            },
                            {
                                "translat": "ฉันเก้าสิบสาม",
                                "translit": "chankaosipsam"
                            },
                            {
                                "translat": "ฉันเก้าสิบสี่",
                                "translit": "chankaosipsi"
                            },
                            {
                                "translat": "ฉันเก้าสิบห้า",
                                "translit": "chankaosipha"
                            },
                            {
                                "translat": "ฉันเก้าสิบหก",
                                "translit": "chankaosiphok"
                            },
                            {
                                "translat": "ฉันเก้าสิบเจ็ด",
                                "translit": "chankaosipchet"
                            },
                            {
                                "translat": "ฉันเก้าสิบแปด",
                                "translit": "chankaosippaet"
                            },
                            {
                                "translat": "ฉันเก้าสิบเก้า",
                                "translit": "chankaosipkao"
                            },
                            {
                                "translat": "ฉันเป็นร้อย",
                                "translit": "chanpenroi"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยหนึ่ง",
                                "translit": "chanpennuengroinuenga"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยสอง",
                                "translit": "chanpennuengroisong"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยสาม",
                                "translit": "chanpennuengroisam"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยสี่",
                                "translit": "chanpennuengroisi"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยห้า",
                                "translit": "chanpennuengroiha"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยหก",
                                "translit": "chanpennuengroihok"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยเจ็ด",
                                "translit": "chanpennuengroicheda"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยแปด",
                                "translit": "chanpennuengroipaet"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยเก้า",
                                "translit": "chanpennuengroikea"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยสิบ",
                                "translit": "chanpennuengroisip"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยและสิบเอ็ด",
                                "translit": "chanpennuengroilaesipet"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยสิบสอง",
                                "translit": "chanpennuengroisipsong"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยสิบสาม",
                                "translit": "chanpennuengroisipsam"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยสิบสี่",
                                "translit": "chanpennuengroisipsi"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยสิบห้า",
                                "translit": "chanpennuengroisipha"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยสิบหก",
                                "translit": "chanpennuengroisiphok"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยสิบเจ็ด",
                                "translit": "chanpennuengroisipchet"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยสิบแปด",
                                "translit": "chanpennuengroisippaet"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยสิบเก้า",
                                "translit": "chanpennuengroisipkao"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยยี่สิบ",
                                "translit": "chanpennuengroiyisip"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยยี่สิบหนึ่ง",
                                "translit": "chanpennuengroiyisipnueng"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยยี่สิบสอง",
                                "translit": "chanpennuengroiyisipsong"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยยี่สิบสาม",
                                "translit": "chanpennuengroiyisipsam"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยยี่สิบสี่",
                                "translit": "chanpennuengroiyisipsi"
                            },
                            {
                                "translat": "ฉันเป็นหนึ่งร้อยยี่สิบห้า",
                                "translit": "chanpennuengroiyisipha"
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "เดือนไหนล่ะ?",
                        "translit": "dueannaila?"
                    },
                    "solution": {
                        "month": [
                            {
                                "translat": "มกราคม",
                                "translit": "mokrakhom"
                            },
                            {
                                "translat": "กุมภาพันธ์",
                                "translit": "kumphaphan"
                            },
                            {
                                "translat": "มีนาคม",
                                "translit": "minakhom"
                            },
                            {
                                "translat": "เมษายน",
                                "translit": "mesayon"
                            },
                            {
                                "translat": "พค",
                                "translit": "phok"
                            },
                            {
                                "translat": "มิถุนายน",
                                "translit": "mithunayon"
                            },
                            {
                                "translat": "กรกฎาคม",
                                "translit": "krokdakhom"
                            },
                            {
                                "translat": "สิงหาคม",
                                "translit": "singhakhom"
                            },
                            {
                                "translat": "กันยายน",
                                "translit": "kanyayon"
                            },
                            {
                                "translat": "ตุลาคม",
                                "translit": "tulakhom"
                            },
                            {
                                "translat": "พฤศจิกายน",
                                "translit": "phritchikayon"
                            },
                            {
                                "translat": "ธันวาคม",
                                "translit": "thanwakhom"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "กรุณาพูดช้า ๆ อีกหนึ่งครั้ง",
                        "translit": "krunaphutcha s iknuengkhrang"
                    }
                }
            ],
            "1c": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "หลับตา แล้วลืมตา",
                        "translit": "lapta laeoluemta"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "ปิดมือขวาเปิดมือขวาของคุณ",
                                "translit": "pitmuekhwapoetmuekhwakhongkhun"
                            },
                            "Left": {
                                "translat": "ปิดมือซ้ายเปิดมือซ้าย",
                                "translit": "pitmuesaipoetmuesai"
                            }
                        }
                    }
                }
            ],
            "2": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "ทําตามนิ้วของฉัน",
                        "translit": "thamatamniokhongchan"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "มองมาที่ฉัน",
                        "translit": "mongmathichan"
                    }
                }
            ],
            "3": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "ดูจมูกฉันด้วย",
                        "translit": "dutmukchanduai"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "คุณเห็นนิ้วกี่นิ้ว?",
                        "translit": "khunhenniokinio?"
                    },
                    "solution": {
                        "fingers": [
                            {
                                "translat": "หนึ่ง",
                                "translit": "nueng"
                            },
                            {
                                "translat": "สอง",
                                "translit": "song"
                            },
                            {
                                "translat": "สาม",
                                "translit": "sam"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "กรุณาพูดช้า ๆ อีกหนึ่งครั้ง",
                        "translit": "krunaphutcha s iknuengkhrang"
                    }
                }
            ],
            "4": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "แสดงฟันของคุณให้ฉันดู",
                        "translit": "saedongfankhodu"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "ยกคิ้วขึ้น",
                        "translit": "yokkhiokhuen"
                    }
                }
            ],
            "5a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "ยกแขนขวาของคุณเป็นเวลาสิบวินาที",
                                "translit": "yokkhaenkhwakhongkhunwalasibawinathi"
                            },
                            "Left": {
                                "translat": "ยกแขนซ้ายของคุณเป็นเวลาสิบวินาที",
                                "translit": "yokkhaensaikhongkhunwelasipwinathi"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "คุณสามารถย้ายแขนขวาของคุณเลย?",
                                "translit": "khunsamarotyaikhaenkkhongkhunloei?"
                            },
                            "Left": {
                                "translat": "คุณสามารถย้ายแขนซ้ายของคุณเลย?",
                                "translit": "khunsamarotyaikhaensayokongkhunloei?"
                            }
                        }
                    }
                }
            ],
            "5b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "ยกแขนขวาของคุณเป็นเวลาสิบวินาที",
                                "translit": "yokkhaenkhwakhongkhunwalasibawinathi"
                            },
                            "Left": {
                                "translat": "ยกแขนซ้ายของคุณเป็นเวลาสิบวินาที",
                                "translit": "yokkhaensaikhongkhunwelasipwinathi"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "คุณสามารถย้ายแขนขวาของคุณเลย?",
                                "translit": "khunsamarotyaikhaenkkhongkhunloei?"
                            },
                            "Left": {
                                "translat": "คุณสามารถย้ายแขนซ้ายของคุณเลย?",
                                "translit": "khunsamarotyaikhaensayokongkhunloei?"
                            }
                        }
                    }
                }
            ],
            "6a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "ยกขาขวาของคุณเป็นเวลาห้าวินาที",
                                "translit": "yokkhakhwaklahawinathi"
                            },
                            "Left": {
                                "translat": "ยกขาซ้ายขึ้นเป็นเวลาห้าวินาที",
                                "translit": "yokkhasaikhuenpenwenhahawinathi"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "คุณสามารถย้ายขาขวาของคุณเลย?",
                                "translit": "khunsamarotyaikhakongkhunloei?"
                            },
                            "Left": {
                                "translat": "คุณสามารถย้ายขาซ้ายของคุณเลย?",
                                "translit": "khunsamarotyaikhasaikhongkhunloei?"
                            }
                        }
                    }
                }
            ],
            "6b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "ยกขาขวาของคุณเป็นเวลาห้าวินาที",
                                "translit": "yokkhakhwaklahawinathi"
                            },
                            "Left": {
                                "translat": "ยกขาซ้ายขึ้นเป็นเวลาห้าวินาที",
                                "translit": "yokkhasaikhuenpenwenhahawinathi"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "คุณสามารถย้ายขาขวาของคุณเลย?",
                                "translit": "khunsamarotyaikhakongkhunloei?"
                            },
                            "Left": {
                                "translat": "คุณสามารถย้ายขาซ้ายของคุณเลย?",
                                "translit": "khunsamarotyaikhasaikhongkhunloei?"
                            }
                        }
                    }
                }
            ],
            "7": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "สัมผัสจมูกของคุณสัมผัสนิ้วของฉัน",
                        "translit": "samphatchamukkhongphatniokhongchan"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "ในทางกลับกันสัมผัสจมูกของคุณสัมผัสนิ้วของฉัน",
                        "translit": "naithangklapkansamphamukkhongkhunsamphatnikhongchan"
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "วางส้นเท้าของคุณไปที่หน้าแข้งของคุณแล้วเลื่อนขึ้นและลง",
                        "translit": "wangsonthaokhongkhunnakhaengkhongkhonlaewalueankhuenlaelong"
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "ขึ้นและลง",
                        "translit": "khuenlaelong"
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "ขาอื่นๆ, วางส้นเท้าของคุณไปที่แข้งของคุณแล้วเลื่อนขึ้นและลง",
                        "translit": "khauen, wangsonthaokhongkhunkhaengkhongkhunlaeoonkhuenlaelong"
                    }
                }
            ],
            "8": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "คุณรู้สึกไหม?",
                        "translit": "khunrusuekmai?"
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "ใช่",
                                "translit": "chai"
                            },
                            {
                                "translat": "ไม่ใช่",
                                "translit": "maichai"
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "มันรู้สึกเหมือนกันทั้งสองด้านหรือไม่?",
                        "translit": "manrusuekmueankanthangsongdanruemai?"
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "ใช่",
                                "translit": "chai"
                            },
                            {
                                "translat": "ไม่ใช่",
                                "translit": "maichai"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "ด้านข้างที่มีความรู้สึกมากขึ้นคุณสามารถชี้ไปที่มันได้หรือไม่",
                        "translit": "dankhangthimikhwamrusuekmakkhuenkhunsamanthachipaithimandairuemai"
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "ขวา",
                                "translit": "khwa"
                            },
                            {
                                "translat": "ซ้าย",
                                "translit": "sai"
                            }
                        ]
                    }
                }
            ],
            "9": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "อธิบายรูปภาพนี้",
                        "translit": "athibairupphapni"
                    },
                    "solution": {
                        "description": [
                            {
                                "translat": "ผู้หญิงคนหนึ่งกําลังล้างจานผู้หญิงกําลังอบแห้งจานด้วยผ้าขนหนูอ่างล้างจานกําลังท่วมเด็กผู้ชายกําลังใช้คุกกี้เด็กกําลังจะล้มลงหญิงสาวกําลังมาถึงคุกกี้หญิงสาวกําลังหัวเราะ",
                                "translit": "phuyingkhonnuengkalangalangchanphuyingokngophaengchanduaiphaknanuanglangchankamngathuamdekphuchaikamlangchaikhukkidekkamlangchalomlongyingsaolangmathuengkhukkiyisaokamalanghuaro"
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "คุณเห็นอะไร?",
                        "translit": "khunhenarai?"
                    },
                    "solution": {
                        "objects": [
                            {
                                "translat": "แค คตัส",
                                "translit": "khae khatat"
                            },
                            {
                                "translat": "ถุง มือ",
                                "translit": "thung mue"
                            },
                            {
                                "translat": "เก้าอี้",
                                "translit": "kaoi"
                            },
                            {
                                "translat": "กุญแจประตู",
                                "translit": "kunchaepratu"
                            },
                            {
                                "translat": "เปลญวน",
                                "translit": "plenwon"
                            },
                            {
                                "translat": "ขน นก",
                                "translit": "khon nok"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "อ่านคําเหล่านี้",
                        "translit": "anokmalaoni"
                    }
                }
            ],
            "10": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "ทําซ้ําคําเหล่านี้",
                        "translit": "thamhasamakhalani"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "ทําซ้ําหลังจากที่ฉัน",
                        "translit": "thamasalangchakthicna"
                    }
                }
            ],
            "11": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "หลับตา",
                        "translit": "lapta"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "ฉันจะสัมผัสใบหน้าของคุณฉันสัมผัสด้านขวาของคุณด้านซ้ายของคุณหรือทั้งสองด้าน?",
                        "translit": "chanchasamphatbaingakhunchansamphatdankhokongkhundansaikhofunaruethangsongdan?"
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "ขวา",
                                "translit": "khwa"
                            },
                            {
                                "translat": "ซ้าย",
                                "translit": "sai"
                            },
                            {
                                "translat": "ทั้ง",
                                "translit": "thang"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "ชี้ไปที่ด้านข้างที่ฉันสัมผัส",
                        "translit": "chipaithidankhangthichansamphat"
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "แขนไหนที่ฉันสัมผัส? แขนขวา แขนซ้าย หรือแขนทั้งสองข้าง?",
                        "translit": "khaennaithichansamp? khaenkhwa khaensai ruekhaenthangsong?"
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "ขาไหนที่ฉันสัมผัส? ขาขวา ขาซ้าย หรือขาทั้งสองข้าง?",
                        "translit": "khanaithichansamphat? khakhwa khasai ruekhathangsongkhang?"
                    }
                },
                {
                    "id": "6",
                    "phrase": {
                        "translat": "ลืมตาสิ",
                        "translit": "luemtasi"
                    }
                },
                {
                    "id": "7",
                    "phrase": {
                        "translat": "ฉันใช้นิ้วไหนอยู่? นิ้วขวา นิ้วซ้าย หรือทั้งสองนิ้ว?",
                        "translit": "chanchainionaiyu? niokhwa niosai ruethangsongnio?"
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "ขวา",
                                "translit": "khwa"
                            },
                            {
                                "translat": "ซ้าย",
                                "translit": "sai"
                            },
                            {
                                "translat": "ทั้ง",
                                "translit": "thang"
                            }
                        ]
                    }
                },
                {
                    "id": "8",
                    "phrase": {
                        "translat": "ชี้ไปที่ด้านข้างที่ฉันวิกผม",
                        "translit": "chipaithidankhangthichanwikphom"
                    }
                }
            ],
            "end": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "ขอบคุณ",
                        "translit": "khopkhun"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "ลาก่อน",
                        "translit": "lakon"
                    }
                }
            ]
        },
        'ja' : {
            "1a": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "こんにちは",
                        "translit": "Kon'nichiwa"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "お元気ですか。",
                        "translit": "omoto kidesuka。"
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "あなたは痛みを感じていますか?",
                        "translit": "anatahatsumiokanitei?"
                    }
                }
            ],
            "1b": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "何歳ですか。",
                        "translit": "sansa deska。"
                    },
                    "solution": {
                        "patient_age": [
                            {
                                "translat": "私は一人です",
                                "translit": "shiha itindes"
                            },
                            {
                                "translat": "私は2人です",
                                "translit": "sha2nindes"
                            },
                            {
                                "translat": "私は3人です",
                                "translit": "sha3nindes"
                            },
                            {
                                "translat": "私は4人です",
                                "translit": "sha4nindes"
                            },
                            {
                                "translat": "私は5です",
                                "translit": "sha5death"
                            },
                            {
                                "translat": "私は6です",
                                "translit": "sha6death"
                            },
                            {
                                "translat": "私は7歳です",
                                "translit": "sha7sides"
                            },
                            {
                                "translat": "私は8です",
                                "translit": "sha8death"
                            },
                            {
                                "translat": "私は9です",
                                "translit": "sha9death"
                            },
                            {
                                "translat": "私は一人です",
                                "translit": "shiha itindes"
                            },
                            {
                                "translat": "私は11です",
                                "translit": "sha11death"
                            },
                            {
                                "translat": "私は12です",
                                "translit": "sha12death"
                            },
                            {
                                "translat": "私は13です",
                                "translit": "sha13death"
                            },
                            {
                                "translat": "私は14歳です",
                                "translit": "sha14sides"
                            },
                            {
                                "translat": "私は15歳です",
                                "translit": "sha15sides"
                            },
                            {
                                "translat": "私は16歳です",
                                "translit": "sha16sides"
                            },
                            {
                                "translat": "私は17歳です",
                                "translit": "sha17sides"
                            },
                            {
                                "translat": "私は18歳です",
                                "translit": "sha18sides"
                            },
                            {
                                "translat": "私は19歳です",
                                "translit": "sha19sides"
                            },
                            {
                                "translat": "私は20歳です",
                                "translit": "sha20sides"
                            },
                            {
                                "translat": "私は21人です",
                                "translit": "sha21nindes"
                            },
                            {
                                "translat": "私は22歳です",
                                "translit": "sha22sides"
                            },
                            {
                                "translat": "私は23歳です",
                                "translit": "sha23sides"
                            },
                            {
                                "translat": "私は24歳です",
                                "translit": "sha24sides"
                            },
                            {
                                "translat": "私は25歳です",
                                "translit": "sha25sides"
                            },
                            {
                                "translat": "私は26歳です",
                                "translit": "sha26sides"
                            },
                            {
                                "translat": "私は27歳です",
                                "translit": "sha27sides"
                            },
                            {
                                "translat": "私は28歳です",
                                "translit": "sha28sides"
                            },
                            {
                                "translat": "私は29歳です",
                                "translit": "sha29sides"
                            },
                            {
                                "translat": "私は30歳です",
                                "translit": "sha30sides"
                            },
                            {
                                "translat": "私は31です",
                                "translit": "sha31death"
                            },
                            {
                                "translat": "私は32歳です",
                                "translit": "sha32sides"
                            },
                            {
                                "translat": "私は33歳です",
                                "translit": "sha33sides"
                            },
                            {
                                "translat": "私は34歳です",
                                "translit": "sha34sides"
                            },
                            {
                                "translat": "私は35歳です",
                                "translit": "sha35sides"
                            },
                            {
                                "translat": "私は36歳です",
                                "translit": "sha36sides"
                            },
                            {
                                "translat": "私は37歳です",
                                "translit": "sha37sides"
                            },
                            {
                                "translat": "私は38歳です",
                                "translit": "sha38sides"
                            },
                            {
                                "translat": "私は39歳です",
                                "translit": "sha39sides"
                            },
                            {
                                "translat": "私は40歳です",
                                "translit": "sha40sides"
                            },
                            {
                                "translat": "私は41歳です",
                                "translit": "sha41sides"
                            },
                            {
                                "translat": "私は42歳です",
                                "translit": "sha42sides"
                            },
                            {
                                "translat": "私は43歳です",
                                "translit": "sha43sides"
                            },
                            {
                                "translat": "私は44歳です",
                                "translit": "sha44sides"
                            },
                            {
                                "translat": "私は45歳です",
                                "translit": "sha45sides"
                            },
                            {
                                "translat": "私は46歳です",
                                "translit": "sha46sides"
                            },
                            {
                                "translat": "私は47歳です",
                                "translit": "sha47sides"
                            },
                            {
                                "translat": "私は48歳です",
                                "translit": "sha48sides"
                            },
                            {
                                "translat": "私は49歳です",
                                "translit": "sha49sides"
                            },
                            {
                                "translat": "私は50歳です",
                                "translit": "sha50sides"
                            },
                            {
                                "translat": "私は51です",
                                "translit": "sha51death"
                            },
                            {
                                "translat": "私は52です",
                                "translit": "sha52death"
                            },
                            {
                                "translat": "私は53歳です",
                                "translit": "sha53sides"
                            },
                            {
                                "translat": "私は54歳です",
                                "translit": "sha54sides"
                            },
                            {
                                "translat": "私は55歳です",
                                "translit": "sha55sides"
                            },
                            {
                                "translat": "私は56歳です",
                                "translit": "sha56sides"
                            },
                            {
                                "translat": "私は57歳です",
                                "translit": "sha57sides"
                            },
                            {
                                "translat": "私は58歳です",
                                "translit": "sha58sides"
                            },
                            {
                                "translat": "私は59歳です",
                                "translit": "sha59sides"
                            },
                            {
                                "translat": "私は60歳です",
                                "translit": "sha60sides"
                            },
                            {
                                "translat": "私は61歳です",
                                "translit": "sha61sides"
                            },
                            {
                                "translat": "私は62歳です",
                                "translit": "sha62sides"
                            },
                            {
                                "translat": "私は63歳です",
                                "translit": "sha63sides"
                            },
                            {
                                "translat": "私は64歳です",
                                "translit": "sha64sides"
                            },
                            {
                                "translat": "私は65歳です",
                                "translit": "sha65sides"
                            },
                            {
                                "translat": "私は66歳です",
                                "translit": "sha66sides"
                            },
                            {
                                "translat": "私は67歳です",
                                "translit": "sha67sides"
                            },
                            {
                                "translat": "私は68歳です",
                                "translit": "sha68sides"
                            },
                            {
                                "translat": "私は69歳です",
                                "translit": "sha69sides"
                            },
                            {
                                "translat": "私は70歳です",
                                "translit": "sha70sides"
                            },
                            {
                                "translat": "私は71歳です",
                                "translit": "sha71sides"
                            },
                            {
                                "translat": "私は72歳です",
                                "translit": "sha72sides"
                            },
                            {
                                "translat": "私は73歳です",
                                "translit": "sha73sides"
                            },
                            {
                                "translat": "私は74歳です",
                                "translit": "sha74sides"
                            },
                            {
                                "translat": "私は75歳です",
                                "translit": "sha75sides"
                            },
                            {
                                "translat": "私は76歳です",
                                "translit": "sha76sides"
                            },
                            {
                                "translat": "私は77歳です",
                                "translit": "sha77sides"
                            },
                            {
                                "translat": "私は78歳です",
                                "translit": "sha78sides"
                            },
                            {
                                "translat": "私は79歳です",
                                "translit": "sha79sides"
                            },
                            {
                                "translat": "私は80歳です",
                                "translit": "sha80sides"
                            },
                            {
                                "translat": "私は801です",
                                "translit": "sha801death"
                            },
                            {
                                "translat": "私は82歳です",
                                "translit": "sha82sides"
                            },
                            {
                                "translat": "私は83歳です",
                                "translit": "sha83sides"
                            },
                            {
                                "translat": "私は84歳です",
                                "translit": "sha84sides"
                            },
                            {
                                "translat": "私は85歳です",
                                "translit": "sha85sides"
                            },
                            {
                                "translat": "私は86歳です",
                                "translit": "sha86sides"
                            },
                            {
                                "translat": "私は87歳です",
                                "translit": "sha87sides"
                            },
                            {
                                "translat": "私は88歳です",
                                "translit": "sha88sides"
                            },
                            {
                                "translat": "私は89歳です",
                                "translit": "sha89sides"
                            },
                            {
                                "translat": "私は90歳です",
                                "translit": "sha90sides"
                            },
                            {
                                "translat": "私は91歳です",
                                "translit": "sha91sides"
                            },
                            {
                                "translat": "私は92歳です",
                                "translit": "sha92sides"
                            },
                            {
                                "translat": "私は93歳です",
                                "translit": "sha93sides"
                            },
                            {
                                "translat": "私は94歳です",
                                "translit": "sha94sides"
                            },
                            {
                                "translat": "私は95歳です",
                                "translit": "sha95sides"
                            },
                            {
                                "translat": "私は96歳です",
                                "translit": "sha96sides"
                            },
                            {
                                "translat": "私は97歳です",
                                "translit": "sha97sides"
                            },
                            {
                                "translat": "私は98歳です",
                                "translit": "sha98sides"
                            },
                            {
                                "translat": "私は99歳です",
                                "translit": "sha99sides"
                            },
                            {
                                "translat": "私は100人です",
                                "translit": "sha100nindes"
                            },
                            {
                                "translat": "私は100と1です",
                                "translit": "sha100to1death"
                            },
                            {
                                "translat": "私は100と2です",
                                "translit": "sha100to2death"
                            },
                            {
                                "translat": "私は100と3です",
                                "translit": "sha100to3death"
                            },
                            {
                                "translat": "私は100と4です",
                                "translit": "sha100to4death"
                            },
                            {
                                "translat": "私は1005です",
                                "translit": "sha1005death"
                            },
                            {
                                "translat": "私は100と6です",
                                "translit": "sha100to6death"
                            },
                            {
                                "translat": "私は107です",
                                "translit": "sha107death"
                            },
                            {
                                "translat": "私は18歳です",
                                "translit": "sha18sides"
                            },
                            {
                                "translat": "私は100と9です",
                                "translit": "sha100to9death"
                            },
                            {
                                "translat": "私は100歳です",
                                "translit": "sha100sides"
                            },
                            {
                                "translat": "私は111です",
                                "translit": "sha111death"
                            },
                            {
                                "translat": "私は12歳です",
                                "translit": "sha12sides"
                            },
                            {
                                "translat": "私は13歳です",
                                "translit": "sha13sides"
                            },
                            {
                                "translat": "私は14歳です",
                                "translit": "sha14sides"
                            },
                            {
                                "translat": "私は150歳です",
                                "translit": "sha150sides"
                            },
                            {
                                "translat": "私は111歳です",
                                "translit": "sha111sides"
                            },
                            {
                                "translat": "私は177歳です",
                                "translit": "sha177sides"
                            },
                            {
                                "translat": "私は18歳です",
                                "translit": "sha18sides"
                            },
                            {
                                "translat": "私は111歳です",
                                "translit": "sha111sides"
                            },
                            {
                                "translat": "私は120歳です",
                                "translit": "sha120sides"
                            },
                            {
                                "translat": "私は121人です",
                                "translit": "sha121nindes"
                            },
                            {
                                "translat": "私は122人です",
                                "translit": "sha122nindes"
                            },
                            {
                                "translat": "私は123歳です",
                                "translit": "sha123sides"
                            },
                            {
                                "translat": "私は124歳です",
                                "translit": "sha124sides"
                            },
                            {
                                "translat": "私は125歳です",
                                "translit": "sha125sides"
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "何月ですか?",
                        "translit": "deska?"
                    },
                    "solution": {
                        "month": [
                            {
                                "translat": "1 月",
                                "translit": "1 gatsu"
                            },
                            {
                                "translat": "2 月",
                                "translit": "2 gatsu"
                            },
                            {
                                "translat": "3 月",
                                "translit": "3 gatsu"
                            },
                            {
                                "translat": "4 月",
                                "translit": "4 gatsu"
                            },
                            {
                                "translat": "5 月",
                                "translit": "5 gatsu"
                            },
                            {
                                "translat": "6 月",
                                "translit": "6 gatsu"
                            },
                            {
                                "translat": "7 月",
                                "translit": "7 gatsu"
                            },
                            {
                                "translat": "8 月",
                                "translit": "8 gatsu"
                            },
                            {
                                "translat": "9 月",
                                "translit": "9 gatsu"
                            },
                            {
                                "translat": "10 月",
                                "translit": "10 gatsu"
                            },
                            {
                                "translat": "11 月",
                                "translit": "11 gatsu"
                            },
                            {
                                "translat": "12 月",
                                "translit": "12 gatsu"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "もう一度ゆっくり言ってください",
                        "translit": "mouid yuckligettects"
                    }
                }
            ],
            "1c": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "目を閉じて、目を開けろ",
                        "translit": "mohajite、kero momeoto"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "右手を閉じ、右手を開く",
                                "translit": "ohaji yushi、okaku igite"
                            },
                            "Left": {
                                "translat": "左手を閉じ、左手を開く",
                                "translit": "ohaji sate、okaku hasate"
                            }
                        }
                    }
                }
            ],
            "2": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "私の指に従ってください",
                        "translit": "shinoshini"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "私を見て下さい",
                        "translit": "shioki shiomite"
                    }
                }
            ],
            "3": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "私の鼻を見て",
                        "translit": "shino hanoba"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "あなたは何本の指を見ますか?",
                        "translit": "anatahan?"
                    },
                    "solution": {
                        "fingers": [
                            {
                                "translat": "1",
                                "translit": "1"
                            },
                            {
                                "translat": "2",
                                "translit": "2"
                            },
                            {
                                "translat": "3",
                                "translit": "3"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "もう一度ゆっくり言ってください",
                        "translit": "mouid yuckligettects"
                    }
                }
            ],
            "4": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "歯を見せて",
                        "translit": "sete shiomi"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "眉毛を持ち上げる",
                        "translit": "motioge genger"
                    }
                }
            ],
            "5a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "右腕を10秒間持ち上げる",
                                "translit": "migio10youkamotichi gel"
                            },
                            "Left": {
                                "translat": "左腕を10秒間持ち上げる",
                                "translit": "sano10youkamotichi gel"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "右腕を動かしていけますか?",
                                "translit": "giudowadokashiteimas?"
                            },
                            "Left": {
                                "translat": "左腕を動かしていけますか?",
                                "translit": "sadoodokashiteiteimas?"
                            }
                        }
                    }
                }
            ],
            "5b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "右腕を10秒間持ち上げる",
                                "translit": "migio10youkamotichi gel"
                            },
                            "Left": {
                                "translat": "左腕を10秒間持ち上げる",
                                "translit": "sano10youkamotichi gel"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "右腕を動かしていけますか?",
                                "translit": "giudowadokashiteimas?"
                            },
                            "Left": {
                                "translat": "左腕を動かしていけますか?",
                                "translit": "sadoodokashiteiteimas?"
                            }
                        }
                    }
                }
            ],
            "6a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "右足を5秒間持ち上げる",
                                "translit": "migio5youkamotichi gel"
                            },
                            "Left": {
                                "translat": "左足を5秒間持ち上げる",
                                "translit": "sasao5youkamotichi gel"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "右足を動かしていらっしゃいますか?",
                                "translit": "usaodo dokashiteimas?"
                            },
                            "Left": {
                                "translat": "左足を動かしていらっといっしりと動かしていらっといいの?",
                                "translit": "cise odocasitilatodirat ino?"
                            }
                        }
                    }
                }
            ],
            "6b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "右足を5秒間持ち上げる",
                                "translit": "migio5youkamotichi gel"
                            },
                            "Left": {
                                "translat": "左足を5秒間持ち上げる",
                                "translit": "sasao5youkamotichi gel"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "右足を動かしていらっしゃいますか?",
                                "translit": "usaodo dokashiteimas?"
                            },
                            "Left": {
                                "translat": "左足を動かしていらっといっしりと動かしていらっといいの?",
                                "translit": "cise odocasitilatodirat ino?"
                            }
                        }
                    }
                }
            ],
            "7": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "鼻に触れ、指に触れ",
                        "translit": "hani cole、sini cole"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "もう一方の手は、あなたの鼻に触れ、私の指に触れる",
                        "translit": "mouchi hinoteha、anatanovani cole、sino sini coler"
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "あなたのすねにあなたのかかとを置き、上下にスライド",
                        "translit": "anatanosunenianatoka、jouconis ride"
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "上がり下がる",
                        "translit": "gamegari gagal"
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "他の脚は、あなたのすねにあなたのかかとを置き、上下にスライド",
                        "translit": "tano cach、anatanosunenianatoka、jouconis ride"
                    }
                }
            ],
            "8": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "あなたはこれを感じますか?",
                        "translit": "anatahakoreonjimaska?"
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "はい",
                                "translit": "high"
                            },
                            {
                                "translat": "いいえ",
                                "translit": "iie"
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "それは両側で同じことを感じますか?",
                        "translit": "sole harosode douca?"
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "はい",
                                "translit": "high"
                            },
                            {
                                "translat": "いいえ",
                                "translit": "iie"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "より多くの感情を持つ側は、あなたはそれを指すことができますか?",
                        "translit": "yoritakunoka joekha、anata hasoleo scotoga?"
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "右",
                                "translit": "mi"
                            },
                            {
                                "translat": "左",
                                "translit": "sa"
                            }
                        ]
                    }
                }
            ],
            "9": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "この画像を説明する",
                        "translit": "conogazouosetsul"
                    },
                    "solution": {
                        "description": [
                            {
                                "translat": "女性は皿を洗っている、女性はタオルで皿を乾燥している、流しが浸水している、男の子がクッキーを取っている、男の子が落ちようとしている、女の子はクッキーのために手を伸ばしている、女の子は笑っている",
                                "translit": "josahara sarao settil、josahata ordel、ryushigasin sitale、onoko gacookie ortal、onokokogarachiyoutos、menoco hackenotameni、noco corchottale"
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "何が見えますか。",
                        "translit": "nagamie masuka。"
                    },
                    "solution": {
                        "objects": [
                            {
                                "translat": "サボテン",
                                "translit": "saboten"
                            },
                            {
                                "translat": "手袋",
                                "translit": "tebori"
                            },
                            {
                                "translat": "椅子",
                                "translit": "ishi"
                            },
                            {
                                "translat": "ドアキー",
                                "translit": "doakey"
                            },
                            {
                                "translat": "ハンモック",
                                "translit": "hammock"
                            },
                            {
                                "translat": "羽",
                                "translit": "ha"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "これらの単語を読む",
                        "translit": "corellano tagoodum"
                    }
                }
            ],
            "10": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "これらの単語を繰り返す",
                        "translit": "corellano tango ocri"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "私の後に繰り返す",
                        "translit": "sinogoni crise"
                    }
                }
            ],
            "11": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "目を閉じて下さい",
                        "translit": "okamo haji tecosai"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "私はあなたの顔に触れます、私はあなたの右側、あなたの左側、または両側に触れていますか?",
                        "translit": "shihaanatano ganich、shihaanatano go、anatano sago、matahari?"
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "右",
                                "translit": "mi"
                            },
                            {
                                "translat": "左",
                                "translit": "sa"
                            },
                            {
                                "translat": "両方とも",
                                "translit": "rohatomo"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "私が触れている側を指す",
                        "translit": "siga colletal goys"
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "どの腕に触れていますか?右腕、左腕、または両腕?",
                        "translit": "dononnish?migion、sanen、matahariou?"
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "どの脚に触れていますか?右足、左脚、または両足?",
                        "translit": "dono canicoletimask?migioshi、sakasaki、matahario?"
                    }
                },
                {
                    "id": "6",
                    "phrase": {
                        "translat": "目を開けて下さい",
                        "translit": "meokikete tekasai"
                    }
                },
                {
                    "id": "7",
                    "phrase": {
                        "translat": "私はどの指を揺らしていますか?右指、左指、または両方の指?",
                        "translit": "shihadonoshiourashit?migi、sasi、matahari hounoshi?"
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "右",
                                "translit": "mi"
                            },
                            {
                                "translat": "左",
                                "translit": "sa"
                            },
                            {
                                "translat": "両方とも",
                                "translit": "rohatomo"
                            }
                        ]
                    }
                },
                {
                    "id": "8",
                    "phrase": {
                        "translat": "私が揺れる側を指す",
                        "translit": "siga rellogosis"
                    }
                }
            ],
            "end": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "ありがとうございました",
                        "translit": "arigatougozaimashita"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "さようなら",
                        "translit": "sayounara"
                    }
                }
            ]
        },
        'zh-Hant' : {
            "1a": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "你好",
                        "translit": "nǐ hǎo"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "你好嗎？",
                        "translit": "nǐ hǎo ma？"
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "你痛嗎？",
                        "translit": "nǐ tòng ma？"
                    }
                }
            ],
            "1b": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "你幾歲了？",
                        "translit": "nǐ jǐ suì le？"
                    },
                    "solution": {
                        "patient_age": [
                            {
                                "translat": "我是其中之一",
                                "translit": "wǒ shì qí zhōng zhī yī"
                            },
                            {
                                "translat": "我兩個",
                                "translit": "wǒ liǎng gè"
                            },
                            {
                                "translat": "我三歲",
                                "translit": "wǒ sān suì"
                            },
                            {
                                "translat": "我四歲",
                                "translit": "wǒ sì suì"
                            },
                            {
                                "translat": "我五歲",
                                "translit": "wǒ wǔ suì"
                            },
                            {
                                "translat": "我六歲",
                                "translit": "wǒ liù suì"
                            },
                            {
                                "translat": "我七歲",
                                "translit": "wǒ qī suì"
                            },
                            {
                                "translat": "我八歲",
                                "translit": "wǒ bā suì"
                            },
                            {
                                "translat": "我九歲",
                                "translit": "wǒ jiǔ suì"
                            },
                            {
                                "translat": "我只有這個",
                                "translit": "wǒ zhǐ yǒu zhè ge"
                            },
                            {
                                "translat": "我十一歲",
                                "translit": "wǒ shí yí suì"
                            },
                            {
                                "translat": "我十二歲",
                                "translit": "wǒ shí èr suì"
                            },
                            {
                                "translat": "我十三歲了",
                                "translit": "wǒ shí sān suì le"
                            },
                            {
                                "translat": "我十四歲",
                                "translit": "wǒ shí sì suì"
                            },
                            {
                                "translat": "我十五歲",
                                "translit": "wǒ shí wǔ suì"
                            },
                            {
                                "translat": "我十六歲",
                                "translit": "wǒ shí liù suì"
                            },
                            {
                                "translat": "我十七歲",
                                "translit": "wǒ shí qī suì"
                            },
                            {
                                "translat": "我十八歲了",
                                "translit": "wǒ shí bā suì le"
                            },
                            {
                                "translat": "我十九歲",
                                "translit": "wǒ shí jiǔ suì"
                            },
                            {
                                "translat": "我二十歲",
                                "translit": "wǒ èr shí suì"
                            },
                            {
                                "translat": "我二十一歲",
                                "translit": "wǒ èr shí yí suì"
                            },
                            {
                                "translat": "我二十二歲",
                                "translit": "wǒ èr shí èr suì"
                            },
                            {
                                "translat": "我二十三歲",
                                "translit": "wǒ èr shí sān suì"
                            },
                            {
                                "translat": "我二十四歲",
                                "translit": "wǒ èr shí sì suì"
                            },
                            {
                                "translat": "我二十五歲",
                                "translit": "wǒ èr shí wǔ suì"
                            },
                            {
                                "translat": "我二十六歲",
                                "translit": "wǒ èr shí liù suì"
                            },
                            {
                                "translat": "我二十七歲",
                                "translit": "wǒ èr shí qī suì"
                            },
                            {
                                "translat": "我二十八歲",
                                "translit": "wǒ èr shí bā suì"
                            },
                            {
                                "translat": "我二十九歲",
                                "translit": "wǒ èr shí jiǔ suì"
                            },
                            {
                                "translat": "我三十歲了",
                                "translit": "wǒ sān shí suì le"
                            },
                            {
                                "translat": "我三十一歲了",
                                "translit": "wǒ sān shí yí suì le"
                            },
                            {
                                "translat": "我三十二歲",
                                "translit": "wǒ sān shí èr suì"
                            },
                            {
                                "translat": "我三十三歲",
                                "translit": "wǒ sān shí sān suì"
                            },
                            {
                                "translat": "我三十四歲了",
                                "translit": "wǒ sān shí sì suì le"
                            },
                            {
                                "translat": "我三十五歲",
                                "translit": "wǒ sān shí wǔ suì"
                            },
                            {
                                "translat": "我三十六歲",
                                "translit": "wǒ sān shí liù suì"
                            },
                            {
                                "translat": "我三十七歲",
                                "translit": "wǒ sān shí qī suì"
                            },
                            {
                                "translat": "我三十八歲",
                                "translit": "wǒ sān shí bā suì"
                            },
                            {
                                "translat": "我三十九歲",
                                "translit": "wǒ sān shí jiǔ suì"
                            },
                            {
                                "translat": "我四十歲了",
                                "translit": "wǒ sì shí suì le"
                            },
                            {
                                "translat": "我四十一歲了",
                                "translit": "wǒ sì shí yí suì le"
                            },
                            {
                                "translat": "我四十二歲了",
                                "translit": "wǒ sì shí èr suì le"
                            },
                            {
                                "translat": "我四十三歲了",
                                "translit": "wǒ sì shí sān suì le"
                            },
                            {
                                "translat": "我四十四歲了",
                                "translit": "wǒ sì shí sì suì le"
                            },
                            {
                                "translat": "我四十五歲了",
                                "translit": "wǒ sì shí wǔ suì le"
                            },
                            {
                                "translat": "我四十六歲了",
                                "translit": "wǒ sì shí liù suì le"
                            },
                            {
                                "translat": "我四十七歲了",
                                "translit": "wǒ sì shí qī suì le"
                            },
                            {
                                "translat": "我四十八歲了",
                                "translit": "wǒ sì shí bā suì le"
                            },
                            {
                                "translat": "我四十九歲了",
                                "translit": "wǒ sì shí jiǔ suì le"
                            },
                            {
                                "translat": "我五十歲了",
                                "translit": "wǒ wǔ shí suì le"
                            },
                            {
                                "translat": "我五十一歲了",
                                "translit": "wǒ wǔ shí yí suì le"
                            },
                            {
                                "translat": "我五十二歲了",
                                "translit": "wǒ wǔ shí èr suì le"
                            },
                            {
                                "translat": "我五十三歲了",
                                "translit": "wǒ wǔ shí sān suì le"
                            },
                            {
                                "translat": "我五十四歲了",
                                "translit": "wǒ wǔ shí sì suì le"
                            },
                            {
                                "translat": "我五十五歲了",
                                "translit": "wǒ wǔ shí wǔ suì le"
                            },
                            {
                                "translat": "我五十六歲了",
                                "translit": "wǒ wǔ shí liù suì le"
                            },
                            {
                                "translat": "我五十七歲了",
                                "translit": "wǒ wǔ shí qī suì le"
                            },
                            {
                                "translat": "我五十八歲了",
                                "translit": "wǒ wǔ shí bā suì le"
                            },
                            {
                                "translat": "我五十九歲了",
                                "translit": "wǒ wǔ shí jiǔ suì le"
                            },
                            {
                                "translat": "我六十歲了",
                                "translit": "wǒ liù shí suì le"
                            },
                            {
                                "translat": "我六十一歲了",
                                "translit": "wǒ liù shí yí suì le"
                            },
                            {
                                "translat": "我六十二歲了",
                                "translit": "wǒ liù shí èr suì le"
                            },
                            {
                                "translat": "我六十三歲了",
                                "translit": "wǒ liù shí sān suì le"
                            },
                            {
                                "translat": "我六十四歲了",
                                "translit": "wǒ liù shí sì suì le"
                            },
                            {
                                "translat": "我六十五歲了",
                                "translit": "wǒ liù shí wǔ suì le"
                            },
                            {
                                "translat": "我六十六歲了",
                                "translit": "wǒ liù shí liù suì le"
                            },
                            {
                                "translat": "我六十七歲了",
                                "translit": "wǒ liù shí qī suì le"
                            },
                            {
                                "translat": "我六十八歲了",
                                "translit": "wǒ liù shí bā suì le"
                            },
                            {
                                "translat": "我六十九歲了",
                                "translit": "wǒ liù shí jiǔ suì le"
                            },
                            {
                                "translat": "我七十歲了",
                                "translit": "wǒ qī shí suì le"
                            },
                            {
                                "translat": "我七十一歲了",
                                "translit": "wǒ qī shí yí suì le"
                            },
                            {
                                "translat": "我七十二歲了",
                                "translit": "wǒ qī shí èr suì le"
                            },
                            {
                                "translat": "我七十三歲了",
                                "translit": "wǒ qī shí sān suì le"
                            },
                            {
                                "translat": "我七十四歲了",
                                "translit": "wǒ qī shí sì suì le"
                            },
                            {
                                "translat": "我七十五歲了",
                                "translit": "wǒ qī shí wǔ suì le"
                            },
                            {
                                "translat": "我七十六歲了",
                                "translit": "wǒ qī shí liù suì le"
                            },
                            {
                                "translat": "我七十七歲了",
                                "translit": "wǒ qī shí qī suì le"
                            },
                            {
                                "translat": "我七十八歲了",
                                "translit": "wǒ qī shí bā suì le"
                            },
                            {
                                "translat": "我七十九歲了",
                                "translit": "wǒ qī shí jiǔ suì le"
                            },
                            {
                                "translat": "我八十歲了",
                                "translit": "wǒ bā shí suì le"
                            },
                            {
                                "translat": "我八十一歲了",
                                "translit": "wǒ bā shí yí suì le"
                            },
                            {
                                "translat": "我八十二歲了",
                                "translit": "wǒ bā shí èr suì le"
                            },
                            {
                                "translat": "我八十三歲了",
                                "translit": "wǒ bā shí sān suì le"
                            },
                            {
                                "translat": "我八十四歲了",
                                "translit": "wǒ bā shí sì suì le"
                            },
                            {
                                "translat": "我八十五歲了",
                                "translit": "wǒ bā shí wǔ suì le"
                            },
                            {
                                "translat": "我八十六歲了",
                                "translit": "wǒ bā shí liù suì le"
                            },
                            {
                                "translat": "我八十七歲了",
                                "translit": "wǒ bā shí qī suì le"
                            },
                            {
                                "translat": "我八十八歲了",
                                "translit": "wǒ bā shí bā suì le"
                            },
                            {
                                "translat": "我八十九歲了",
                                "translit": "wǒ bā shí jiǔ suì le"
                            },
                            {
                                "translat": "我九十歲了",
                                "translit": "wǒ jiǔ shí suì le"
                            },
                            {
                                "translat": "我九十一歲了",
                                "translit": "wǒ jiǔ shí yí suì le"
                            },
                            {
                                "translat": "我九十二歲了",
                                "translit": "wǒ jiǔ shí èr suì le"
                            },
                            {
                                "translat": "我九十三歲了",
                                "translit": "wǒ jiǔ shí sān suì le"
                            },
                            {
                                "translat": "我九十四歲了",
                                "translit": "wǒ jiǔ shí sì suì le"
                            },
                            {
                                "translat": "我九十五歲了",
                                "translit": "wǒ jiǔ shí wǔ suì le"
                            },
                            {
                                "translat": "我九十六歲了",
                                "translit": "wǒ jiǔ shí liù suì le"
                            },
                            {
                                "translat": "我九十七歲了",
                                "translit": "wǒ jiǔ shí qī suì le"
                            },
                            {
                                "translat": "我九十八歲了",
                                "translit": "wǒ jiǔ shí bā suì le"
                            },
                            {
                                "translat": "我九十九歲了",
                                "translit": "wǒ jiǔ shí jiǔ suì le"
                            },
                            {
                                "translat": "我是一百歲",
                                "translit": "wǒ shì yì bǎi suì"
                            },
                            {
                                "translat": "我是一百零一",
                                "translit": "wǒ shì yì bǎi líng yì"
                            },
                            {
                                "translat": "我是一百零二",
                                "translit": "wǒ shì yì bǎi líng èr"
                            },
                            {
                                "translat": "我是一百零三",
                                "translit": "wǒ shì yì bǎi líng sān"
                            },
                            {
                                "translat": "我是一百零四歲",
                                "translit": "wǒ shì yì bǎi líng sì suì"
                            },
                            {
                                "translat": "我是一百零五歲",
                                "translit": "wǒ shì yì bǎi líng wǔ suì"
                            },
                            {
                                "translat": "我是一百六十六歲",
                                "translit": "wǒ shì yì bǎi liù shí liù suì"
                            },
                            {
                                "translat": "我是一百七十七歲",
                                "translit": "wǒ shì yì bǎi qī shí qī suì"
                            },
                            {
                                "translat": "我是一百八十八歲",
                                "translit": "wǒ shì yì bǎi bā shí bā suì"
                            },
                            {
                                "translat": "我是一百零九歲",
                                "translit": "wǒ shì yì bǎi líng jiǔ suì"
                            },
                            {
                                "translat": "我是一百一十",
                                "translit": "wǒ shì yì bǎi yī shí"
                            },
                            {
                                "translat": "我是一百一十一歲",
                                "translit": "wǒ shì yì bǎi yī shí yí suì"
                            },
                            {
                                "translat": "我是一百一十二歲",
                                "translit": "wǒ shì yì bǎi yī shí èr suì"
                            },
                            {
                                "translat": "我是一百一十三歲",
                                "translit": "wǒ shì yī bǎi yī shí sān suì"
                            },
                            {
                                "translat": "我是一百一十四歲",
                                "translit": "wǒ shì yì bǎi yī shí sì suì"
                            },
                            {
                                "translat": "我是一百一十五歲",
                                "translit": "wǒ shì yì bǎi yī shí wǔ suì"
                            },
                            {
                                "translat": "我是一百一十六歲",
                                "translit": "wǒ shì yì bǎi yī shí liù suì"
                            },
                            {
                                "translat": "我是一百一十七歲",
                                "translit": "wǒ shì yī bǎi yī shí qī suì"
                            },
                            {
                                "translat": "我是一百一十八歲",
                                "translit": "wǒ shì yī bǎi yī shí bā suì"
                            },
                            {
                                "translat": "我是一百一十九歲",
                                "translit": "wǒ shì yì bǎi yī shí jiǔ suì"
                            },
                            {
                                "translat": "我是一百二十",
                                "translit": "wǒ shì yì bǎi èr shí"
                            },
                            {
                                "translat": "我是一百二十一歲",
                                "translit": "wǒ shì yì bǎi èr shí yí suì"
                            },
                            {
                                "translat": "我是一百二十二歲",
                                "translit": "wǒ shì yì bǎi èr shí èr suì"
                            },
                            {
                                "translat": "我是一百二十三歲",
                                "translit": "wǒ shì yì bǎi èr shí sān suì"
                            },
                            {
                                "translat": "我是一百二十四歲",
                                "translit": "wǒ shì yì bǎi èr shí sì suì"
                            },
                            {
                                "translat": "我是一百二十五歲",
                                "translit": "wǒ shì yì bǎi èr shí wǔ suì"
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "是什麼月？",
                        "translit": "shì shén me yuè？"
                    },
                    "solution": {
                        "month": [
                            {
                                "translat": "一月",
                                "translit": "yī yuè"
                            },
                            {
                                "translat": "二月",
                                "translit": "èr yuè"
                            },
                            {
                                "translat": "三月",
                                "translit": "sān yuè"
                            },
                            {
                                "translat": "四月",
                                "translit": "sì yuè"
                            },
                            {
                                "translat": "五月",
                                "translit": "wǔ yuè"
                            },
                            {
                                "translat": "六月",
                                "translit": "liù yuè"
                            },
                            {
                                "translat": "七月",
                                "translit": "qī yuè"
                            },
                            {
                                "translat": "八月",
                                "translit": "bā yuè"
                            },
                            {
                                "translat": "九月",
                                "translit": "jiǔ yuè"
                            },
                            {
                                "translat": "十月",
                                "translit": "shí yuè"
                            },
                            {
                                "translat": "十一月",
                                "translit": "shí yí yuè"
                            },
                            {
                                "translat": "十二月",
                                "translit": "shí èr yuè"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "請慢慢再說一次",
                        "translit": "qǐng màn màn zài shuō yí cì"
                    }
                }
            ],
            "1c": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "閉上眼睛，睜開眼睛",
                        "translit": "bì shàng yǎn jīng ， zhēng kāi yǎn jīng"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "合上右手，張開右手",
                                "translit": "hé shàng yòu shǒu ， zhāng kāi yòu shǒu"
                            },
                            "Left": {
                                "translat": "閉上左手，張開左手",
                                "translit": "bì shàng zuǒ shǒu ， zhāng kāi zuǒ shǒu"
                            }
                        }
                    }
                }
            ],
            "2": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "跟著我的手指",
                        "translit": "gēn zhe wǒ de shǒu zhǐ"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "看著我",
                        "translit": "kàn zhe wǒ"
                    }
                }
            ],
            "3": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "看看我的鼻子",
                        "translit": "kàn kan wǒ de bí zi"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "你看到多少根手指？",
                        "translit": "nǐ kàn dào duō shǎo gēn shǒu zhǐ？"
                    },
                    "solution": {
                        "fingers": [
                            {
                                "translat": "一",
                                "translit": "yì"
                            },
                            {
                                "translat": "二",
                                "translit": "èr"
                            },
                            {
                                "translat": "三",
                                "translit": "sān"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "請慢慢再說一次",
                        "translit": "qǐng màn màn zài shuō yí cì"
                    }
                }
            ],
            "4": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "讓我看看你的牙齒",
                        "translit": "ràng wǒ kàn kàn nǐ de yá chǐ"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "抬起眉毛",
                        "translit": "tái qǐ méi mao"
                    }
                }
            ],
            "5a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "抬起右臂十秒鐘",
                                "translit": "tái qǐ yòu bì shí miǎo zhōng"
                            },
                            "Left": {
                                "translat": "抬起左臂十秒鐘",
                                "translit": "tái qǐ zuǒ bì shí miǎo zhōng"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "你能移動你的右臂嗎？",
                                "translit": "nǐ néng yí dòng nǐ de yòu bì ma？"
                            },
                            "Left": {
                                "translat": "你能移動你的左臂嗎？",
                                "translit": "nǐ néng yí dòng nǐ de zuǒ bì ma？"
                            }
                        }
                    }
                }
            ],
            "5b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "抬起右臂十秒鐘",
                                "translit": "tái qǐ yòu bì shí miǎo zhōng"
                            },
                            "Left": {
                                "translat": "抬起左臂十秒鐘",
                                "translit": "tái qǐ zuǒ bì shí miǎo zhōng"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "你能移動你的右臂嗎？",
                                "translit": "nǐ néng yí dòng nǐ de yòu bì ma？"
                            },
                            "Left": {
                                "translat": "你能移動你的左臂嗎？",
                                "translit": "nǐ néng yí dòng nǐ de zuǒ bì ma？"
                            }
                        }
                    }
                }
            ],
            "6a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "抬起右腿五秒鐘",
                                "translit": "tái qǐ yòu tuǐ wǔ miǎo zhōng"
                            },
                            "Left": {
                                "translat": "抬起左腿五秒鐘",
                                "translit": "tái qǐ zuǒ tuǐ wǔ miǎo zhōng"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "你能移動你的右腿嗎？",
                                "translit": "nǐ néng yí dòng nǐ de yòu tuǐ ma？"
                            },
                            "Left": {
                                "translat": "你能移動你的左腿嗎？",
                                "translit": "nǐ néng yí dòng nǐ de zuǒ tuǐ ma？"
                            }
                        }
                    }
                }
            ],
            "6b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "抬起右腿五秒鐘",
                                "translit": "tái qǐ yòu tuǐ wǔ miǎo zhōng"
                            },
                            "Left": {
                                "translat": "抬起左腿五秒鐘",
                                "translit": "tái qǐ zuǒ tuǐ wǔ miǎo zhōng"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "你能移動你的右腿嗎？",
                                "translit": "nǐ néng yí dòng nǐ de yòu tuǐ ma？"
                            },
                            "Left": {
                                "translat": "你能移動你的左腿嗎？",
                                "translit": "nǐ néng yí dòng nǐ de zuǒ tuǐ ma？"
                            }
                        }
                    }
                }
            ],
            "7": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "摸摸你的鼻子，摸摸我的手指",
                        "translit": "mō mō nǐ de bí zi ， mō mō wǒ de shǒu zhǐ"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "另一隻手，摸摸你的鼻子，摸摸我的手指",
                        "translit": "lìng yì zhī shǒu ， mō mō nǐ de bí zi ， mō mō wǒ de shǒu zhǐ"
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "把你的腳跟放在你的小腿上， 然後上下滑動",
                        "translit": "bǎ nǐ de jiǎo gēn fàng zài nǐ de xiǎo tuǐ shang ， rán hòu shàng xià huá dòng"
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "上下",
                        "translit": "shàng xià"
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "其他腿， 把你的腳跟到你的小腿， 然後上下滑動",
                        "translit": "qí tā tuǐ ， bǎ nǐ de jiǎo gēn dào nǐ de xiǎo tuǐ ， rán hòu shàng xià huá dòng"
                    }
                }
            ],
            "8": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "你感覺到了嗎？",
                        "translit": "nǐ gǎn jué dào le ma？"
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "是的",
                                "translit": "shì de"
                            },
                            {
                                "translat": "不",
                                "translit": "bù"
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "兩邊都有同感嗎？",
                        "translit": "liǎng biān dōu yǒu tóng gǎn ma？"
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "是的",
                                "translit": "shì de"
                            },
                            {
                                "translat": "不",
                                "translit": "bù"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "感情比較有感的一面，能指著嗎？",
                        "translit": "gǎn qíng bǐ jiào yǒu gǎn de yí miàn ， néng zhǐ zhe ma ？"
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "右",
                                "translit": "yòu"
                            },
                            {
                                "translat": "左",
                                "translit": "zuǒ"
                            }
                        ]
                    }
                }
            ],
            "9": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "描述此圖片",
                        "translit": "miáo shù cǐ tú piàn"
                    },
                    "solution": {
                        "description": [
                            {
                                "translat": "一個女人正在洗碗，一個女人正在用毛巾擦盤子，水槽裡水淹，一個男孩正在吃餅乾，男孩快要倒下了，女孩伸手去拿餅乾，女孩在笑",
                                "translit": "yí gè nǚ rén zhèng zài xǐ wǎn ， yí gè nǚ rén zhèng zài yòng máo jīn cā pán zi ， shuǐ cáo lǐ shuǐ yān ， yí gè nán hái zhèng zài chī bǐng gān ， nán hái kuài yào dǎo xià le ， nǚ hái shēn shǒu qù ná bǐng gān ， nǚ hái zài xiào"
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "你看到什麼了？",
                        "translit": "nǐ kàn dào shén me le？"
                    },
                    "solution": {
                        "objects": [
                            {
                                "translat": "仙人掌",
                                "translit": "xiān rén zhǎng"
                            },
                            {
                                "translat": "手套",
                                "translit": "shǒu tào"
                            },
                            {
                                "translat": "椅子",
                                "translit": "yǐ zi"
                            },
                            {
                                "translat": "門鑰匙",
                                "translit": "mén yào shi"
                            },
                            {
                                "translat": "吊床",
                                "translit": "diào chuáng"
                            },
                            {
                                "translat": "羽毛",
                                "translit": "yǔ máo"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "閱讀這些單詞",
                        "translit": "yuè dú zhè xiē dān cí"
                    }
                }
            ],
            "10": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "重複這些單詞",
                        "translit": "chóng fù zhè xiē dān cí"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "跟著我重複",
                        "translit": "gēn zhe wǒ chóng fù"
                    }
                }
            ],
            "11": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "閉上眼睛",
                        "translit": "bì shàng yǎn jīng"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "我會摸你的臉，我是摸你的右邊，你的左邊，還是兩邊？",
                        "translit": "wǒ huì mō nǐ de liǎn ， wǒ shì mō nǐ de yòu bian ， nǐ de zuǒ bian ， hái shì liǎng biān ？"
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "右",
                                "translit": "yòu"
                            },
                            {
                                "translat": "左",
                                "translit": "zuǒ"
                            },
                            {
                                "translat": "兩者",
                                "translit": "liǎng zhě"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "指向我觸摸的一側",
                        "translit": "zhǐ xiàng wǒ chù mō de yí cè"
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "我摸哪隻胳膊？右臂，左臂，還是雙臂？",
                        "translit": "wǒ mō nǎ zhī gē bo？yòu bì ， zuǒ bì ， hái shì shuāng bì ？"
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "我摸哪條腿？右腿，左腿，還是兩條腿？",
                        "translit": "wǒ mō nǎ tiáo tuǐ？yòu tuǐ ， zuǒ tuǐ ， hái shì liǎng tiáo tuǐ ？"
                    }
                },
                {
                    "id": "6",
                    "phrase": {
                        "translat": "睜開你的眼睛",
                        "translit": "zhēng kāi nǐ de yǎn jīng"
                    }
                },
                {
                    "id": "7",
                    "phrase": {
                        "translat": "我在晃動哪個手指？右指，左指，還是兩根手指？",
                        "translit": "wǒ zài huàng dòng nǎ gè shǒu zhǐ？yòu zhǐ ， zuǒ zhǐ ， hái shì liǎng gēn shǒu zhǐ ？"
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "右",
                                "translit": "yòu"
                            },
                            {
                                "translat": "左",
                                "translit": "zuǒ"
                            },
                            {
                                "translat": "兩者",
                                "translit": "liǎng zhě"
                            }
                        ]
                    }
                },
                {
                    "id": "8",
                    "phrase": {
                        "translat": "指向我擺動的一側",
                        "translit": "zhǐ xiàng wǒ bǎi dòng de yí cè"
                    }
                }
            ],
            "end": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "謝謝",
                        "translit": "xiè xiè"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "再見",
                        "translit": "zài jiàn"
                    }
                }
            ]
        },
        'ar' : {
            "1a": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "مرحبًا",
                        "translit": "marhaba"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "كيف حالك؟",
                        "translit": "keef halki"
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "هل أنت متألم؟",
                        "translit": "hill ant metelme"
                    }
                }
            ],
            "1b": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "كم عمرك؟؟",
                        "translit": "kim omrak"
                    },
                    "solution": {
                        "patient_age": [
                            {
                                "translat": "أنا واحد",
                                "translit": "anna wahid"
                            },
                            {
                                "translat": "أنا إثنان",
                                "translit": "anna ethnan"
                            },
                            {
                                "translat": "أنا في الثالثة",
                                "translit": "anna fe al-thaltha"
                            },
                            {
                                "translat": "أنا أربعة",
                                "translit": "anna arbaa"
                            },
                            {
                                "translat": "أنا في الخامسة من اليوم",
                                "translit": "anna fe al-khamsa minn elioum"
                            },
                            {
                                "translat": "أنا في السادسة من هذا",
                                "translit": "anna fe al-sadisah minn hudha"
                            },
                            {
                                "translat": "أنا في السابعة من أنّي",
                                "translit": "anna fe al-sabea minn annie"
                            },
                            {
                                "translat": "أنا في الثامنة من سني",
                                "translit": "anna fe al-thamana minn snie"
                            },
                            {
                                "translat": "أنا في التاسعة",
                                "translit": "anna fe al-tasaah"
                            },
                            {
                                "translat": "أنا الشخص الذي",
                                "translit": "anna shakhes al-dhay"
                            },
                            {
                                "translat": "أنا في الحادية عشر",
                                "translit": "anna fe al-hadiya ashr"
                            },
                            {
                                "translat": "أنا في الثانية عشر",
                                "translit": "anna fe al-thania ashr"
                            },
                            {
                                "translat": "أنا في الثالثة عشر",
                                "translit": "anna fe al-thaltha ashr"
                            },
                            {
                                "translat": "أنا في الرابعة عشر",
                                "translit": "anna fe al-rabia ashr"
                            },
                            {
                                "translat": "أنا خمسة عشر",
                                "translit": "anna khamsa ashr"
                            },
                            {
                                "translat": "أنا في السادسة عشر",
                                "translit": "anna fe al-sadisah ashr"
                            },
                            {
                                "translat": "أنا في السابعة عشرة",
                                "translit": "anna fe al-sabea ashra"
                            },
                            {
                                "translat": "أنا في الثامنة عشرة",
                                "translit": "anna fe al-thamana ashra"
                            },
                            {
                                "translat": "أنا في التاسعة عشر من عمري",
                                "translit": "anna fe al-tasaah ashr minn omari"
                            },
                            {
                                "translat": "أنا في العشرين من هذا",
                                "translit": "anna fe al-ashrin minn hudha"
                            },
                            {
                                "translat": "أنا في الحادية والعشرين",
                                "translit": "anna fe al-hadiya ouachrin"
                            },
                            {
                                "translat": "أنا في الثانية والعشرين",
                                "translit": "anna fe al-thania ouachrin"
                            },
                            {
                                "translat": "أنا في الثالثة والعشرين",
                                "translit": "anna fe al-thaltha ouachrin"
                            },
                            {
                                "translat": "أنا أربعة وعشرون",
                                "translit": "anna arbaa oashron"
                            },
                            {
                                "translat": "أنا في الخامسة والعشرين",
                                "translit": "anna fe al-khamsa ouachrin"
                            },
                            {
                                "translat": "أنا في السادسة والعشرين",
                                "translit": "anna fe al-sadisah ouachrin"
                            },
                            {
                                "translat": "أنا في السابعة والعشرين",
                                "translit": "anna fe al-sabea ouachrin"
                            },
                            {
                                "translat": "أنا في الثامنة والعشرين",
                                "translit": "anna fe al-thamana ouachrin"
                            },
                            {
                                "translat": "أنا في التاسعة والعشرين",
                                "translit": "anna fe al-tasaah ouachrin"
                            },
                            {
                                "translat": "أنا الثلاثين",
                                "translit": "anna al-thalathin"
                            },
                            {
                                "translat": "أنا واحد وثلاثون",
                                "translit": "anna wahid othlathon"
                            },
                            {
                                "translat": "أنا في الثانية والثلاثين",
                                "translit": "anna fe al-thania walthlathen"
                            },
                            {
                                "translat": "أنا في الثالثة والثلاثين",
                                "translit": "anna fe al-thaltha walthlathen"
                            },
                            {
                                "translat": "أنا أربعة وثلاثون",
                                "translit": "anna arbaa othlathon"
                            },
                            {
                                "translat": "أنا في الخامسة والثلاثين",
                                "translit": "anna fe al-khamsa walthlathen"
                            },
                            {
                                "translat": "أنا في السادسة والثلاثين",
                                "translit": "anna fe al-sadisah walthlathen"
                            },
                            {
                                "translat": "أنا في السابعة والثلاثين",
                                "translit": "anna fe al-sabea walthlathen"
                            },
                            {
                                "translat": "أنا في الثامنة والثلاثين",
                                "translit": "anna fe al-thamana walthlathen"
                            },
                            {
                                "translat": "أنا في التاسعة والثلاثين",
                                "translit": "anna fe al-tasaah walthlathen"
                            },
                            {
                                "translat": "أنا في الأربعين",
                                "translit": "anna fe al-arbain"
                            },
                            {
                                "translat": "أنا واحد وأربعون",
                                "translit": "anna wahid aneban"
                            },
                            {
                                "translat": "أنا في الثانية والأربعين",
                                "translit": "anna fe al-thania al-arbain"
                            },
                            {
                                "translat": "أنا في الثالثة والأربعين",
                                "translit": "anna fe al-thaltha al-arbain"
                            },
                            {
                                "translat": "أنا أربعة وأربعون",
                                "translit": "anna arbaa aneban"
                            },
                            {
                                "translat": "أنا خمسة وأربعون",
                                "translit": "anna khamsa aneban"
                            },
                            {
                                "translat": "أنا ستة وأربعون",
                                "translit": "anna sta aneban"
                            },
                            {
                                "translat": "أنا في السابعة والأربعين",
                                "translit": "anna fe al-sabea al-arbain"
                            },
                            {
                                "translat": "أنا في الثامنة والأربعين",
                                "translit": "anna fe al-thamana al-arbain"
                            },
                            {
                                "translat": "أنا في التاسعة والأربعين",
                                "translit": "anna fe al-tasaah al-arbain"
                            },
                            {
                                "translat": "أنا في الخمسين من الوقت",
                                "translit": "anna fe al-khamsin minn al-waqqat"
                            },
                            {
                                "translat": "أنا في الحادية والخمسين",
                                "translit": "anna fe al-hadiya walkhamsin"
                            },
                            {
                                "translat": "أنا في الثانية والخمسين",
                                "translit": "anna fe al-thania walkhamsin"
                            },
                            {
                                "translat": "أنا في الثالثة والخمسين",
                                "translit": "anna fe al-thaltha walkhamsin"
                            },
                            {
                                "translat": "أنا في الرابعة والخمسين",
                                "translit": "anna fe al-rabia walkhamsin"
                            },
                            {
                                "translat": "أنا في الخامسة والخمسين",
                                "translit": "anna fe al-khamsa walkhamsin"
                            },
                            {
                                "translat": "أنا في السادسة والخمسين",
                                "translit": "anna fe al-sadisah walkhamsin"
                            },
                            {
                                "translat": "أنا في السابعة والخمسين من العمر",
                                "translit": "anna fe al-sabea walkhamsin minn al-amar"
                            },
                            {
                                "translat": "أنا في الثامنة والخمسين",
                                "translit": "anna fe al-thamana walkhamsin"
                            },
                            {
                                "translat": "أنا في التاسعة والخمسين",
                                "translit": "anna fe al-tasaah walkhamsin"
                            },
                            {
                                "translat": "أنا ستون",
                                "translit": "anna stone"
                            },
                            {
                                "translat": "أنا في الحادية والستين",
                                "translit": "anna fe al-hadiya walstein"
                            },
                            {
                                "translat": "أنا إثنان وستون",
                                "translit": "anna ethnan weston"
                            },
                            {
                                "translat": "أنا في الثالثة والستين",
                                "translit": "anna fe al-thaltha walstein"
                            },
                            {
                                "translat": "أنا أربعة وستين",
                                "translit": "anna arbaa westin"
                            },
                            {
                                "translat": "أنا في الخامسة والستين",
                                "translit": "anna fe al-khamsa walstein"
                            },
                            {
                                "translat": "أنا ستة وستين",
                                "translit": "anna sta westin"
                            },
                            {
                                "translat": "أنا في السابعة والستين",
                                "translit": "anna fe al-sabea walstein"
                            },
                            {
                                "translat": "أنا في الثامنة والستين",
                                "translit": "anna fe al-thamana walstein"
                            },
                            {
                                "translat": "أنا في التاسعة والستين",
                                "translit": "anna fe al-tasaah walstein"
                            },
                            {
                                "translat": "أنا سبعين",
                                "translit": "anna sabin"
                            },
                            {
                                "translat": "أنا في الحادية والسبعين",
                                "translit": "anna fe al-hadiya walsben"
                            },
                            {
                                "translat": "أنا في الثانية والسبعين",
                                "translit": "anna fe al-thania walsben"
                            },
                            {
                                "translat": "أنا في الثالثة والسبعين",
                                "translit": "anna fe al-thaltha walsben"
                            },
                            {
                                "translat": "أنا أربعة وسبعون",
                                "translit": "anna arbaa wespon"
                            },
                            {
                                "translat": "أنا في الخامسة والسبعين",
                                "translit": "anna fe al-khamsa walsben"
                            },
                            {
                                "translat": "أنا في السادسة والسبعين من العمر",
                                "translit": "anna fe al-sadisah walsben minn al-amar"
                            },
                            {
                                "translat": "أنا في السابعة والسبعين من العمر",
                                "translit": "anna fe al-sabea walsben minn al-amar"
                            },
                            {
                                "translat": "أنا في الثامنة والسبعين",
                                "translit": "anna fe al-thamana walsben"
                            },
                            {
                                "translat": "أنا في التاسعة والسبعين",
                                "translit": "anna fe al-tasaah walsben"
                            },
                            {
                                "translat": "أنا في الثمانين من عمره",
                                "translit": "anna fe al-thamanin minn amra"
                            },
                            {
                                "translat": "أنا واحد وثمانون",
                                "translit": "anna wahid wothmanon"
                            },
                            {
                                "translat": "أنا في الثانية والثمانين",
                                "translit": "anna fe al-thania walthmanin"
                            },
                            {
                                "translat": "أنا في الثالثة والثمانين",
                                "translit": "anna fe al-thaltha walthmanin"
                            },
                            {
                                "translat": "أنا أربعة وثمانون",
                                "translit": "anna arbaa wothmanon"
                            },
                            {
                                "translat": "أنا في الخامسة والثمانين",
                                "translit": "anna fe al-khamsa walthmanin"
                            },
                            {
                                "translat": "أنا في السادسة والثمانين",
                                "translit": "anna fe al-sadisah walthmanin"
                            },
                            {
                                "translat": "أنا في السابعة والثمانين",
                                "translit": "anna fe al-sabea walthmanin"
                            },
                            {
                                "translat": "أنا ثمانية وثمانون",
                                "translit": "anna thumania wothmanon"
                            },
                            {
                                "translat": "أنا في التاسعة والثمانين",
                                "translit": "anna fe al-tasaah walthmanin"
                            },
                            {
                                "translat": "أنا تسعين",
                                "translit": "anna tasain"
                            },
                            {
                                "translat": "أنا في الحادية والتسعين",
                                "translit": "anna fe al-hadiya waltsain"
                            },
                            {
                                "translat": "أنا اثنان وتسعون",
                                "translit": "anna athnan watson"
                            },
                            {
                                "translat": "أنا في الثالثة والتسعين من العمر",
                                "translit": "anna fe al-thaltha waltsain minn al-amar"
                            },
                            {
                                "translat": "أنا أربعة وتسعون",
                                "translit": "anna arbaa watson"
                            },
                            {
                                "translat": "أنا في الخامسة والتسعين",
                                "translit": "anna fe al-khamsa waltsain"
                            },
                            {
                                "translat": "أنا في السادسة والتسعين من العمر",
                                "translit": "anna fe al-sadisah waltsain minn al-amar"
                            },
                            {
                                "translat": "أنا في السابعة والتسعين من العمر",
                                "translit": "anna fe al-sabea waltsain minn al-amar"
                            },
                            {
                                "translat": "أنا في الثامنة والتسعين من العمر",
                                "translit": "anna fe al-thamana waltsain minn al-amar"
                            },
                            {
                                "translat": "أنا في التاسعة والتسعين",
                                "translit": "anna fe al-tasaah waltsain"
                            },
                            {
                                "translat": "أنا مائة",
                                "translit": "anna maea"
                            },
                            {
                                "translat": "أنا مائة و واحد",
                                "translit": "anna maea wa wahid"
                            },
                            {
                                "translat": "أنا مائة واثنان",
                                "translit": "anna maea wathnane"
                            },
                            {
                                "translat": "أنا مائة وثلاثة",
                                "translit": "anna maea wathlatha"
                            },
                            {
                                "translat": "أنا مائة وأربعة",
                                "translit": "anna maea avarbaa"
                            },
                            {
                                "translat": "أنا مائة وخمسة",
                                "translit": "anna maea wikhmsa"
                            },
                            {
                                "translat": "أنا مائة وستة",
                                "translit": "anna maea westa"
                            },
                            {
                                "translat": "أنا مائة وسبعة",
                                "translit": "anna maea sabaa"
                            },
                            {
                                "translat": "أنا مائة وثمانية",
                                "translit": "anna maea wothmania"
                            },
                            {
                                "translat": "أنا مائة وتسعة",
                                "translit": "anna maea watesha"
                            },
                            {
                                "translat": "أنا مائة وعشرة",
                                "translit": "anna maea ouachra"
                            },
                            {
                                "translat": "أنا مائة و11",
                                "translit": "anna maea wa11"
                            },
                            {
                                "translat": "أنا مائة و 12",
                                "translit": "anna maea wa 12"
                            },
                            {
                                "translat": "أنا مائة وثلاثة عشر",
                                "translit": "anna maea wathlatha ashr"
                            },
                            {
                                "translat": "أنا مائة وأربعة عشر",
                                "translit": "anna maea avarbaa ashr"
                            },
                            {
                                "translat": "أنا مائة وخمسة عشر",
                                "translit": "anna maea wikhmsa ashr"
                            },
                            {
                                "translat": "أنا مائة وستة عشر",
                                "translit": "anna maea westa ashr"
                            },
                            {
                                "translat": "أنا مائة وسبعة عشر",
                                "translit": "anna maea sabaa ashr"
                            },
                            {
                                "translat": "أنا مائة وثمانية عشر",
                                "translit": "anna maea wothmania ashr"
                            },
                            {
                                "translat": "أنا مائة وتسعة عشر",
                                "translit": "anna maea watesha ashr"
                            },
                            {
                                "translat": "أنا مائة وعشرين",
                                "translit": "anna maea oasharin"
                            },
                            {
                                "translat": "أنا مائة وواحد وعشرون",
                                "translit": "anna maea wahed oashron"
                            },
                            {
                                "translat": "أنا مائة و 22",
                                "translit": "anna maea wa 22"
                            },
                            {
                                "translat": "أنا مائة وثلاث وعشرون",
                                "translit": "anna maea wathlath oashron"
                            },
                            {
                                "translat": "أنا مائة وأربعة وعشرون",
                                "translit": "anna maea avarbaa oashron"
                            },
                            {
                                "translat": "أنا مائة وخمسة وعشرون",
                                "translit": "anna maea wikhmsa oashron"
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "أي شهر هو؟",
                        "translit": "ei shahr howel"
                    },
                    "solution": {
                        "month": [
                            {
                                "translat": "يناير",
                                "translit": "yenayer"
                            },
                            {
                                "translat": "فبراير",
                                "translit": "fbrier"
                            },
                            {
                                "translat": "مارس",
                                "translit": "mars"
                            },
                            {
                                "translat": "أبريل",
                                "translit": "abril"
                            },
                            {
                                "translat": "مايو",
                                "translit": "maillot"
                            },
                            {
                                "translat": "يونيو",
                                "translit": "ioneo"
                            },
                            {
                                "translat": "يوليو",
                                "translit": "iuliu"
                            },
                            {
                                "translat": "أغسطس",
                                "translit": "agestis"
                            },
                            {
                                "translat": "سبتمبر",
                                "translit": "spetemper"
                            },
                            {
                                "translat": "أكتوبر",
                                "translit": "aktober"
                            },
                            {
                                "translat": "نوفمبر",
                                "translit": "november"
                            },
                            {
                                "translat": "ديسمبر",
                                "translit": "dismber"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "رجاءً قل ببطء مرة أخرى",
                        "translit": "rajaa gul babta morra akhra"
                    }
                }
            ],
            "1c": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "أغلق عينيك، افتح عينيك",
                        "translit": "aghlaq inike efteh inik"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "أغلق يدك اليمنى، افتح يدك اليمنى",
                                "translit": "aghlaq yedk alemnee efteh yedk alemna"
                            },
                            "Left": {
                                "translat": "أغلق يدك اليسرى، افتح يدك اليسرى",
                                "translit": "aghlaq yedk alysries efteh yedk al-isra"
                            }
                        }
                    }
                }
            ],
            "2": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "اتبع إصبعي",
                        "translit": "atbah esbei"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "انظر إلي",
                        "translit": "andher elli"
                    }
                }
            ],
            "3": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "انظر إلى أنفي",
                        "translit": "andher elly anfi"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "كم عدد الأصابع التي تراها؟",
                        "translit": "kim aded al-asabea alti traha"
                    },
                    "solution": {
                        "fingers": [
                            {
                                "translat": "واحد",
                                "translit": "wahid"
                            },
                            {
                                "translat": "اثنان",
                                "translit": "athnan"
                            },
                            {
                                "translat": "تلاتة",
                                "translit": "talata"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "رجاءً قل ببطء مرة أخرى",
                        "translit": "rajaa gul babta morra akhra"
                    }
                }
            ],
            "4": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "أرني أسنانك",
                        "translit": "arney asnank"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "ارفع حاجبيك",
                        "translit": "arfa hajbik"
                    }
                }
            ],
            "5a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "ارفع ذراعك الأيمن لمدة عشر ثوان",
                                "translit": "arfa draak al-aiman lamda ashr thuan"
                            },
                            "Left": {
                                "translat": "ارفع ذراعك اليسرى لمدة عشر ثوان",
                                "translit": "arfa draak al-isra lamda ashr thuan"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "هل يمكنك تحريك ذراعك اليمنى على الإطلاق؟",
                                "translit": "hill yemkenk tahrik draak alemna ola al-etlaque"
                            },
                            "Left": {
                                "translat": "هل يمكنك تحريك ذراعك اليسرى على الإطلاق؟",
                                "translit": "hill yemkenk tahrik draak al-isra ola al-etlaque"
                            }
                        }
                    }
                }
            ],
            "5b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "ارفع ذراعك الأيمن لمدة عشر ثوان",
                                "translit": "arfa draak al-aiman lamda ashr thuan"
                            },
                            "Left": {
                                "translat": "ارفع ذراعك اليسرى لمدة عشر ثوان",
                                "translit": "arfa draak al-isra lamda ashr thuan"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "هل يمكنك تحريك ذراعك اليمنى على الإطلاق؟",
                                "translit": "hill yemkenk tahrik draak alemna ola al-etlaque"
                            },
                            "Left": {
                                "translat": "هل يمكنك تحريك ذراعك اليسرى على الإطلاق؟",
                                "translit": "hill yemkenk tahrik draak al-isra ola al-etlaque"
                            }
                        }
                    }
                }
            ],
            "6a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "ارفع ساقك اليمنى لمدة خمس ثوان",
                                "translit": "arfa saqik alemna lamda khams thuan"
                            },
                            "Left": {
                                "translat": "ارفع ساقك اليسرى لمدة خمس ثوان",
                                "translit": "arfa saqik al-isra lamda khams thuan"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "هل يمكنك تحريك ساقك اليمنى على الإطلاق؟",
                                "translit": "hill yemkenk tahrik saqik alemna ola al-etlaque"
                            },
                            "Left": {
                                "translat": "هل يمكنك تحريك ساقك اليسرى على الإطلاق؟",
                                "translit": "hill yemkenk tahrik saqik al-isra ola al-etlaque"
                            }
                        }
                    }
                }
            ],
            "6b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "ارفع ساقك اليمنى لمدة خمس ثوان",
                                "translit": "arfa saqik alemna lamda khams thuan"
                            },
                            "Left": {
                                "translat": "ارفع ساقك اليسرى لمدة خمس ثوان",
                                "translit": "arfa saqik al-isra lamda khams thuan"
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "هل يمكنك تحريك ساقك اليمنى على الإطلاق؟",
                                "translit": "hill yemkenk tahrik saqik alemna ola al-etlaque"
                            },
                            "Left": {
                                "translat": "هل يمكنك تحريك ساقك اليسرى على الإطلاق؟",
                                "translit": "hill yemkenk tahrik saqik al-isra ola al-etlaque"
                            }
                        }
                    }
                }
            ],
            "7": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "المس أنفك، المس إصبعي",
                        "translit": "al-mas anfaki al-mas esbei"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "من جهة أخرى، المس أنفك، المس إصبعي",
                        "translit": "minn jaha akhriel al-mas anfaki al-mas esbei"
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "ضع كعبك على الساق ثم انزلق لأعلى ولللأسفل",
                        "translit": "da kabek ola alsak tham anzalak laala wallasvel"
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "الذهاب صعودا وهبوطا",
                        "translit": "al-dhahab saouda ouhbouta"
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "ساق أخرى، ضع كعبك على الساق ثم تنزلق صعودا وهبوطا",
                        "translit": "sak akhriel da kabek ola alsak tham tenzlec saouda ouhbouta"
                    }
                }
            ],
            "8": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "هل تشعر بهذا؟",
                        "translit": "hill car bahzal"
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "نعم",
                                "translit": "nim"
                            },
                            {
                                "translat": "لا",
                                "translit": "la"
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "هل تشعر بنفس الشعور على كلا الجانبين؟",
                        "translit": "hill car benfs al-shaour ola cla al-janbine"
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "نعم",
                                "translit": "nim"
                            },
                            {
                                "translat": "لا",
                                "translit": "la"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "الجانب مع المزيد من الشعور، يمكنك أن تشير إلى ذلك؟",
                        "translit": "al-janeb ma al-mazid minn chaouri yemkenk an cheer elly zelke"
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "يمين",
                                "translit": "yemin"
                            },
                            {
                                "translat": "يسار",
                                "translit": "yasar"
                            }
                        ]
                    }
                }
            ],
            "9": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "وصف هذه الصورة",
                        "translit": "wasf huthe soura"
                    },
                    "solution": {
                        "description": [
                            {
                                "translat": "امرأة تغسل الأطباق، امرأة تجفف لوحة بمنشفة، البالوعة تغمر، صبي يأخذ كعكة، الصبي على وشك السقوط، الفتاة تصل إلى الكعكة، الفتاة تضحك",
                                "translit": "amra tegsel al-atbaqe amra tejfeff loha bemencheva al-balua taghamre sabby yached kaaka al-sabi ola washk al-saquth fattah tasl elly al-kakah fattah tadhak"
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "ماذا ترى؟",
                        "translit": "maza traes"
                    },
                    "solution": {
                        "objects": [
                            {
                                "translat": "الصبار",
                                "translit": "al-sabar"
                            },
                            {
                                "translat": "القفازات",
                                "translit": "al-qafazat"
                            },
                            {
                                "translat": "الرئيس",
                                "translit": "al-rais"
                            },
                            {
                                "translat": "مفتاح الباب",
                                "translit": "moftah al-bab"
                            },
                            {
                                "translat": "ارجوحه",
                                "translit": "arjohe"
                            },
                            {
                                "translat": "ريشه",
                                "translit": "riche"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "قراءة هذه الكلمات",
                        "translit": "karaa huthe kilmat"
                    }
                }
            ],
            "10": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "كرر هذه الكلمات",
                        "translit": "crer huthe kilmat"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "كرر بعدي",
                        "translit": "crer baadi"
                    }
                }
            ],
            "11": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "أغلق عينيك",
                        "translit": "aghlaq inik"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "سوف ألمس وجهك، هل ألمس جانبك الأيمن، جانبك الأيسر، أم كلا الجانبين؟",
                        "translit": "sov almes weghke hill almes jeanbk al-aimane jeanbk al-aisreb om cla al-janbine"
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "يمين",
                                "translit": "yemin"
                            },
                            {
                                "translat": "يسار",
                                "translit": "yasar"
                            },
                            {
                                "translat": "كل",
                                "translit": "kel"
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "أشر إلى الجانب الذي ألمسه",
                        "translit": "asher elly al-janeb al-dhay almse"
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "أيّ ذراع ألمس؟ الذراع اليمنى، الذراع اليسرى، أو كلتا الذراعين؟",
                        "translit": "ei dharra almsel al-dharaa alemnee al-dharaa alysries oa kilta al-dharaaine"
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "أي ساق ألمس؟ الساق اليمنى، الساق اليسرى، أو كلتا الساقين؟",
                        "translit": "ei sak almsel alsak alemnee alsak alysries oa kilta al-saqini"
                    }
                },
                {
                    "id": "6",
                    "phrase": {
                        "translat": "افتح عينيك",
                        "translit": "efteh inik"
                    }
                },
                {
                    "id": "7",
                    "phrase": {
                        "translat": "أي إصبع أتلوى؟ الإصبع الأيمن، الإصبع الأيسر، أو كلا الإصبعين؟",
                        "translit": "ei isba atloes al-isba al-aimane al-isba al-aisreb oa cla al-isbaine"
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "يمين",
                                "translit": "yemin"
                            },
                            {
                                "translat": "يسار",
                                "translit": "yasar"
                            },
                            {
                                "translat": "كل",
                                "translit": "kel"
                            }
                        ]
                    }
                },
                {
                    "id": "8",
                    "phrase": {
                        "translat": "أشر إلى الجانب الذي أتلوه",
                        "translit": "asher elly al-janeb al-dhay atloh"
                    }
                }
            ],
            "end": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "شكرًا لك",
                        "translit": "shukra lek"
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "وداعًا",
                        "translit": "wadaa"
                    }
                }
            ]
        },
        'it' : {
            "1a": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Ciao",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Come stai?",
                        "translit": null
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Stai soffrendo?",
                        "translit": null
                    }
                }
            ],
            "1b": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Quanti anni hai?",
                        "translit": null
                    },
                    "solution": {
                        "patient_age": [
                            {
                                "translat": "Io sono uno",
                                "translit": null
                            },
                            {
                                "translat": "Ho due anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho tre anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho quattro anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho cinque anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho sei anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho sette anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho otto anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho nove anni",
                                "translit": null
                            },
                            {
                                "translat": "Io sono io quello",
                                "translit": null
                            },
                            {
                                "translat": "Ho undici anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho dodici anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho tredici anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho quattordici anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho quindici anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho sedici anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho diciassette anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho diciotto anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho diciannove anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho vent'anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho ventuno anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 22 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 23 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 24 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho venticinque anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 26 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 27 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho ventotto anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 29 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho trent'anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho trentuno anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 32 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 33 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 34 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 35 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 36 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 37 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho trentotto anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 39 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho quarant'anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho quarantuno anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 42 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 43 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 44 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 45 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 46 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 47 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho quarantotto anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 49 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho cinquant'anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho cinquantuno anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 52 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 53 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 54 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 55 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 56 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 57 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho cinquantotto anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 59 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho sessant'anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho sessantuno anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 62 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 63 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 64 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 65 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 66 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 67 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho sessantotto anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 69 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho settant'anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho settant'anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho settantadue anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho settantatré anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho settantaquattro anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho settantacinque anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho settantasei anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho settantasette anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho settantotto anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho settantanove anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho ottant'anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 81 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho ottantasei anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho ottantasei anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho ottantaquattro anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho ottantacinque anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho ottantasei anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho ottantasette anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho ottantotto anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho ottantanove anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 90 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 91 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho novantanove anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 93 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 94 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 95 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 96 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 97 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 98 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho novantanove anni",
                                "translit": null
                            },
                            {
                                "translat": "Sono 100",
                                "translit": null
                            },
                            {
                                "translat": "Sono 111",
                                "translit": null
                            },
                            {
                                "translat": "Sono 12",
                                "translit": null
                            },
                            {
                                "translat": "Sono 13",
                                "translit": null
                            },
                            {
                                "translat": "Sono 14",
                                "translit": null
                            },
                            {
                                "translat": "Sono 15",
                                "translit": null
                            },
                            {
                                "translat": "Sono 16",
                                "translit": null
                            },
                            {
                                "translat": "Sono 17",
                                "translit": null
                            },
                            {
                                "translat": "Sono 18",
                                "translit": null
                            },
                            {
                                "translat": "Sono 19",
                                "translit": null
                            },
                            {
                                "translat": "Ho centodiecento anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 111 anni",
                                "translit": null
                            },
                            {
                                "translat": "Sono 122",
                                "translit": null
                            },
                            {
                                "translat": "Ho centodici anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho centoquattordici anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho centocinquanta anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 160 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho centosei diciassette anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 180 anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho centonove anni",
                                "translit": null
                            },
                            {
                                "translat": "Ho 120 anni",
                                "translit": null
                            },
                            {
                                "translat": "Sono 121",
                                "translit": null
                            },
                            {
                                "translat": "Sono 122",
                                "translit": null
                            },
                            {
                                "translat": "Sono 123",
                                "translit": null
                            },
                            {
                                "translat": "Sono 124",
                                "translit": null
                            },
                            {
                                "translat": "Sono 125",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Che mese è?",
                        "translit": null
                    },
                    "solution": {
                        "month": [
                            {
                                "translat": "Gennaio",
                                "translit": null
                            },
                            {
                                "translat": "Febbraio",
                                "translit": null
                            },
                            {
                                "translat": "Marzo",
                                "translit": null
                            },
                            {
                                "translat": "Aprile",
                                "translit": null
                            },
                            {
                                "translat": "Maggio",
                                "translit": null
                            },
                            {
                                "translat": "Giugno",
                                "translit": null
                            },
                            {
                                "translat": "Luglio",
                                "translit": null
                            },
                            {
                                "translat": "Agosto",
                                "translit": null
                            },
                            {
                                "translat": "Settembre",
                                "translit": null
                            },
                            {
                                "translat": "Ottobre",
                                "translit": null
                            },
                            {
                                "translat": "Novembre",
                                "translit": null
                            },
                            {
                                "translat": "Dicembre",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Si prega di dire lentamente un'altra volta",
                        "translit": null
                    }
                }
            ],
            "1c": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Chiudi gli occhi, apri gli occhi",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Chiudi la mano destra, apri la mano destra",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Chiudi la mano sinistra, apri la mano sinistra",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "2": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Segui il mio dito",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Guardami",
                        "translit": null
                    }
                }
            ],
            "3": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Guarda il mio naso",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Quante dita vedi?",
                        "translit": null
                    },
                    "solution": {
                        "fingers": [
                            {
                                "translat": "Uno",
                                "translit": null
                            },
                            {
                                "translat": "Due",
                                "translit": null
                            },
                            {
                                "translat": "Tre",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Si prega di dire lentamente un'altra volta",
                        "translit": null
                    }
                }
            ],
            "4": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Mostrami i tuoi denti",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Solleva le sopracciglia",
                        "translit": null
                    }
                }
            ],
            "5a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Solleva il braccio destro per dieci secondi",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Sollevare il braccio sinistro per dieci secondi",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Puoi muovere il braccio destro?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Puoi muovere il braccio sinistro?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "5b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Solleva il braccio destro per dieci secondi",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Sollevare il braccio sinistro per dieci secondi",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Puoi muovere il braccio destro?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Puoi muovere il braccio sinistro?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "6a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Solleva la gamba destra per cinque secondi",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Sollevare la gamba sinistra per cinque secondi",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Puoi muovere la gamba destra?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Puoi muovere la gamba sinistra?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "6b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Solleva la gamba destra per cinque secondi",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Sollevare la gamba sinistra per cinque secondi",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Puoi muovere la gamba destra?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Puoi muovere la gamba sinistra?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "7": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Tocca il naso, toccami il dito",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "D'altra parte, tocca il naso, toccami il dito",
                        "translit": null
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Metti il tallone allo stinco e poi scivola su e giù",
                        "translit": null
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "Vai su e giù",
                        "translit": null
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "Altra gamba, metti il tallone allo stinco e poi scivola su e giù",
                        "translit": null
                    }
                }
            ],
            "8": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Lo senti?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "Sì",
                                "translit": null
                            },
                            {
                                "translat": "No",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Si sente lo stesso da entrambe le parti?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "Sì",
                                "translit": null
                            },
                            {
                                "translat": "No",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Il lato con più sentimento, puoi puntare?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "A destra",
                                "translit": null
                            },
                            {
                                "translat": "A sinistra",
                                "translit": null
                            }
                        ]
                    }
                }
            ],
            "9": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Descrivere questa immagine",
                        "translit": null
                    },
                    "solution": {
                        "description": [
                            {
                                "translat": "Una donna sta lavando i piatti, una donna sta asciugando un piatto con un asciugamano, il lavandino si sta allagando, un ragazzo sta prendendo un biscotto, il ragazzo sta per cadere, la ragazza sta cercando il biscotto, la ragazza sta ridendo",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Cosa vedi?",
                        "translit": null
                    },
                    "solution": {
                        "objects": [
                            {
                                "translat": "Cactus",
                                "translit": null
                            },
                            {
                                "translat": "Guanto",
                                "translit": null
                            },
                            {
                                "translat": "Sedia",
                                "translit": null
                            },
                            {
                                "translat": "chiave porta",
                                "translit": null
                            },
                            {
                                "translat": "Amaca",
                                "translit": null
                            },
                            {
                                "translat": "Piuma",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Leggi queste parole",
                        "translit": null
                    }
                }
            ],
            "10": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Ripeti queste parole",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Ripeti dopo di me",
                        "translit": null
                    }
                }
            ],
            "11": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Chiudi gli occhi",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Ti toccherò la faccia, ti toccherò il lato destro, il lato sinistro o entrambi i lati?",
                        "translit": null
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "A destra",
                                "translit": null
                            },
                            {
                                "translat": "A sinistra",
                                "translit": null
                            },
                            {
                                "translat": "Entrambi",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Punta al lato che sto toccando",
                        "translit": null
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "Quale braccio sto toccando? Braccio destro, braccio sinistro o entrambe le braccia?",
                        "translit": null
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "Quale gamba sto toccando? Gamba destra, gamba sinistra o entrambe le gambe?",
                        "translit": null
                    }
                },
                {
                    "id": "6",
                    "phrase": {
                        "translat": "Apri gli occhi",
                        "translit": null
                    }
                },
                {
                    "id": "7",
                    "phrase": {
                        "translat": "Che dito sto dimenando? Dito destro, dito sinistro o entrambe le dita?",
                        "translit": null
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "A destra",
                                "translit": null
                            },
                            {
                                "translat": "A sinistra",
                                "translit": null
                            },
                            {
                                "translat": "Entrambi",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "8",
                    "phrase": {
                        "translat": "Punta al lato che sto dimenando",
                        "translit": null
                    }
                }
            ],
            "end": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Grazie",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Arrivederci",
                        "translit": null
                    }
                }
            ]
        },
        'vi' : {
            "1a": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Xin chào",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Bạn khoẻ không?",
                        "translit": null
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Anh có đau không?",
                        "translit": null
                    }
                }
            ],
            "1b": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Bạn bao nhiêu tuổi?",
                        "translit": null
                    },
                    "solution": {
                        "patient_age": [
                            {
                                "translat": "Tôi là một trong những",
                                "translit": null
                            },
                            {
                                "translat": "Tôi là hai",
                                "translit": null
                            },
                            {
                                "translat": "Tôi ba tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi bốn tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi năm tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 6 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 7 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi tám tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi chín tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi là người duy nhất",
                                "translit": null
                            },
                            {
                                "translat": "Tôi mười một tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi mười hai tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 13 tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 14 tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi mười lăm tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 16 tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 17 tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi mười tám tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 19 tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 20 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 21 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 22 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 23 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 24 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 25 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 26 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 27 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 28 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 29 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 30 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 31 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 32 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 33 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 34 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 35 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 36 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 37 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 38 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 39 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi bốn mươi tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 41 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 42 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 43 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 44 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 45 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 46 tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 47 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 48 tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 49 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi năm mươi tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 51 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi năm mươi hai tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi năm mươi ba tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi năm mươi bốn tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi năm mươi lăm tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi năm mươi sáu tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi năm mươi bảy tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi năm mươi tám tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi năm mươi chín tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 60 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 61 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 62 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 63 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 64 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 65 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 66 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 67 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 68 tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 69 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi bảy mươi tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 71 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 72 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 73 tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 74 tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 75 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 76 tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 77 tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 78 tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 79 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi tám mươi tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 81 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 82 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 83 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 84 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 85 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 86 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 87 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 88 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 89 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi chín mươi tuổi",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 91 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 92 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 93 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 94 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 95 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 96 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 97 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 98 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 99 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 100 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi là một trăm một",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 122 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 13 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 14 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 15 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 16 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 17 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 18 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 19 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 100 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 111 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 120 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 130 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 140 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 150 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 16 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 117 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 180 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 19 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 120 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 121 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 122 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 123 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 124 tuổi.",
                                "translit": null
                            },
                            {
                                "translat": "Tôi 125 tuổi.",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Tháng nào?",
                        "translit": null
                    },
                    "solution": {
                        "month": [
                            {
                                "translat": "Tháng 1",
                                "translit": null
                            },
                            {
                                "translat": "Tháng hai",
                                "translit": null
                            },
                            {
                                "translat": "Tháng 3",
                                "translit": null
                            },
                            {
                                "translat": "Tháng 4",
                                "translit": null
                            },
                            {
                                "translat": "Tháng 5",
                                "translit": null
                            },
                            {
                                "translat": "Tháng 6",
                                "translit": null
                            },
                            {
                                "translat": "Tháng 7",
                                "translit": null
                            },
                            {
                                "translat": "Tháng 8",
                                "translit": null
                            },
                            {
                                "translat": "Tháng 9",
                                "translit": null
                            },
                            {
                                "translat": "Tháng 10",
                                "translit": null
                            },
                            {
                                "translat": "Tháng 11",
                                "translit": null
                            },
                            {
                                "translat": "Tháng 12",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Xin vui lòng từ từ nói một lần nữa",
                        "translit": null
                    }
                }
            ],
            "1c": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Nhắm mắt lại, mở mắt ra",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Đóng tay phải, mở tay phải",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Đóng tay trái, mở tay trái",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "2": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Theo ngón tay của tôi",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Nhìn tôi này.",
                        "translit": null
                    }
                }
            ],
            "3": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Nhìn mũi tôi kìa.",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Anh thấy bao nhiêu ngón tay?",
                        "translit": null
                    },
                    "solution": {
                        "fingers": [
                            {
                                "translat": "Một",
                                "translit": null
                            },
                            {
                                "translat": "Hai",
                                "translit": null
                            },
                            {
                                "translat": "Ba",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Xin vui lòng từ từ nói một lần nữa",
                        "translit": null
                    }
                }
            ],
            "4": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Cho tôi xem răng của bạn",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Nâng lông mày của bạn",
                        "translit": null
                    }
                }
            ],
            "5a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Nâng cánh tay phải của bạn trong mười giây",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Nhấc cánh tay trái của bạn trong mười giây",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Bạn có thể di chuyển cánh tay phải của bạn ở tất cả?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Bạn có thể di chuyển cánh tay trái của bạn ở tất cả?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "5b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Nâng cánh tay phải của bạn trong mười giây",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Nhấc cánh tay trái của bạn trong mười giây",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Bạn có thể di chuyển cánh tay phải của bạn ở tất cả?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Bạn có thể di chuyển cánh tay trái của bạn ở tất cả?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "6a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Nhấc chân phải lên trong năm giây",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Nhấc chân trái lên trong năm giây",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Bạn có thể di chuyển chân phải của bạn ở tất cả?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Bạn có thể di chuyển chân trái của bạn ở tất cả?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "6b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Nhấc chân phải lên trong năm giây",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Nhấc chân trái lên trong năm giây",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Bạn có thể di chuyển chân phải của bạn ở tất cả?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Bạn có thể di chuyển chân trái của bạn ở tất cả?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "7": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Chạm vào mũi của bạn, chạm vào ngón tay của tôi",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Mặt khác, chạm vào mũi của bạn, chạm vào ngón tay của tôi",
                        "translit": null
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Đặt gót chân của bạn để cẳng chân của bạn sau đó trượt lên và xuống",
                        "translit": null
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "Lên xuống",
                        "translit": null
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "Chân khác, đặt gót chân của bạn để cẳng chân của bạn sau đó trượt lên và xuống",
                        "translit": null
                    }
                }
            ],
            "8": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Bạn có cảm thấy điều này?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "Có",
                                "translit": null
                            },
                            {
                                "translat": "Không",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Nó có cảm thấy giống nhau ở cả hai bên không?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "Có",
                                "translit": null
                            },
                            {
                                "translat": "Không",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Bên với cảm giác nhiều hơn, bạn có thể chỉ vào nó?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "Bên phải",
                                "translit": null
                            },
                            {
                                "translat": "Bên trái",
                                "translit": null
                            }
                        ]
                    }
                }
            ],
            "9": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Mô tả ảnh này",
                        "translit": null
                    },
                    "solution": {
                        "description": [
                            {
                                "translat": "Một người phụ nữ đang rửa bát, một người phụ nữ đang phơi một cái đĩa bằng khăn, bồn rửa bị ngập nước, một cậu bé đang lấy bánh quy, cậu bé sắp ngã, cô gái đang tìm bánh quy, cô gái đang cười",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Anh thấy gì?",
                        "translit": null
                    },
                    "solution": {
                        "objects": [
                            {
                                "translat": "Cactus",
                                "translit": null
                            },
                            {
                                "translat": "Găng tay",
                                "translit": null
                            },
                            {
                                "translat": "Ghế",
                                "translit": null
                            },
                            {
                                "translat": "chìa khóa cửa",
                                "translit": null
                            },
                            {
                                "translat": "Võng",
                                "translit": null
                            },
                            {
                                "translat": "Feather",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Đọc những từ này",
                        "translit": null
                    }
                }
            ],
            "10": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Lặp lại những từ này",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Lặp lại sau khi tôi",
                        "translit": null
                    }
                }
            ],
            "11": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Nhắm mắt lại",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Tôi sẽ chạm vào khuôn mặt của bạn, tôi chạm vào bên phải của bạn, phía bên trái của bạn, hoặc cả hai bên?",
                        "translit": null
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "Bên phải",
                                "translit": null
                            },
                            {
                                "translat": "Bên trái",
                                "translit": null
                            },
                            {
                                "translat": "Cả",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Trỏ sang một bên tôi đang chạm vào",
                        "translit": null
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "Tôi đang chạm vào cánh tay nào? Cánh tay phải, cánh tay trái, hoặc cả hai cánh tay?",
                        "translit": null
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "Tôi đang chạm vào chân nào? Chân phải, chân trái, hoặc cả hai chân?",
                        "translit": null
                    }
                },
                {
                    "id": "6",
                    "phrase": {
                        "translat": "Mở mắt ra",
                        "translit": null
                    }
                },
                {
                    "id": "7",
                    "phrase": {
                        "translat": "Tôi đang lắc lư ngón tay nào? Ngón tay phải, ngón trái hoặc cả hai ngón tay?",
                        "translit": null
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "Bên phải",
                                "translit": null
                            },
                            {
                                "translat": "Bên trái",
                                "translit": null
                            },
                            {
                                "translat": "Cả",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "8",
                    "phrase": {
                        "translat": "Chỉ sang một bên tôi đang lắc lư",
                        "translit": null
                    }
                }
            ],
            "end": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Cảm ơn bạn",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Tạm biệt",
                        "translit": null
                    }
                }
            ]
        },
        'tr' : {
            "1a": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Merhaba",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Nasılsın?",
                        "translit": null
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Acı çekiyor musun?",
                        "translit": null
                    }
                }
            ],
            "1b": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Kaç yaşındasınız?",
                        "translit": null
                    },
                    "solution": {
                        "patient_age": [
                            {
                                "translat": "Ben biriyim.",
                                "translit": null
                            },
                            {
                                "translat": "Ben iki yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Üç yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Dört yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Beş yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Altı yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Yedi yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Sekiz yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Dokuz yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben biriyim.",
                                "translit": null
                            },
                            {
                                "translat": "11 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "12 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "13 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "14 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "15 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "16 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "17 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "18 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "19 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "20 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "21 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "22 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "23 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "24 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "25 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "26 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "27 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "28 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "29 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Otuz yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Otuz bir yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Otuz iki yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Otuz üç yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Otuz dört yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Otuz beş yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Otuz altı yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Otuz yedi yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Otuz sekiz yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Otuz dokuz yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Kırk yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben kırk bir yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Kırk iki yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Kırk üç yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Kırk dört yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Kırk beş yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Kırk altı yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Kırk yedi yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Kırk sekiz yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Kırk dokuz yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "50 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben elli bir yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "52 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "53 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "54 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "55 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "56 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "57 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "58 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "59 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Altmış yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben altmış bir yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "62 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "63 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "64 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "65 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "66 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "67 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "68 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "69 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Yetmiş yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yetmiş birim.",
                                "translit": null
                            },
                            {
                                "translat": "Yetmiş iki yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Yetmiş üç yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Yetmiş dört yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Yetmiş beş yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Yetmiş altı yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Yetmiş yedi yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Yetmiş sekiz yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Yetmiş dokuz yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben seksen yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben seksen bir kişiyim.",
                                "translit": null
                            },
                            {
                                "translat": "Ben seksen iki yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben seksen üç yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben seksen dört yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben seksen beş yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben seksen altı yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben seksen yedi yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben seksen sekiz yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben seksen dokuz yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Doksan yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben doksan bir iyiyim.",
                                "translit": null
                            },
                            {
                                "translat": "Doksan iki yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben doksan üç yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Doksan dört yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Doksan beş yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Doksan altı yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Doksan yedi yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Doksan sekiz yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Doksan dokuz yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz biriyim.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz iki yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz üç yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz dört yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz beş yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz altı yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz yedi yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz sekiz yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz dokuz yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz on yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz on bir iyiyim.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz on iki yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben 131 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz on dört yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben 150 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben 160 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz on yedi yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben 180 yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz on dokuz um.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz yirmi yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz yirmi bir iyiyim.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz yirmi iki yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz yirmi üç yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz yirmi dört yaşındayım.",
                                "translit": null
                            },
                            {
                                "translat": "Ben yüz yirmi beş yaşındayım.",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Hangi ay?",
                        "translit": null
                    },
                    "solution": {
                        "month": [
                            {
                                "translat": "Ocak",
                                "translit": null
                            },
                            {
                                "translat": "Şubat",
                                "translit": null
                            },
                            {
                                "translat": "Mart",
                                "translit": null
                            },
                            {
                                "translat": "Nisan",
                                "translit": null
                            },
                            {
                                "translat": "Mayıs",
                                "translit": null
                            },
                            {
                                "translat": "Haziran",
                                "translit": null
                            },
                            {
                                "translat": "Temmuz",
                                "translit": null
                            },
                            {
                                "translat": "Ağustos",
                                "translit": null
                            },
                            {
                                "translat": "Eylül",
                                "translit": null
                            },
                            {
                                "translat": "Ekim",
                                "translit": null
                            },
                            {
                                "translat": "Kasım",
                                "translit": null
                            },
                            {
                                "translat": "Aralık",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Lütfen yavaşça bir kez daha söyle.",
                        "translit": null
                    }
                }
            ],
            "1c": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Gözlerini kapat, gözlerini aç.",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Sağ elini kapat, sağ elini aç.",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Sol elinizi kapatın, sol elinizi açın",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "2": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Parmağımı takip et.",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Bana bak.",
                        "translit": null
                    }
                }
            ],
            "3": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Burnuma bak.",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Kaç parmak görüyorsun?",
                        "translit": null
                    },
                    "solution": {
                        "fingers": [
                            {
                                "translat": "Bir",
                                "translit": null
                            },
                            {
                                "translat": "İki",
                                "translit": null
                            },
                            {
                                "translat": "Üç",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Lütfen yavaşça bir kez daha söyle.",
                        "translit": null
                    }
                }
            ],
            "4": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Bana dişlerini göster.",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Kaşlarınızı kaldırın",
                        "translit": null
                    }
                }
            ],
            "5a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Sağ kolunu 10 saniye kaldır.",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Sol kolunu 10 saniye kaldır.",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Sağ kolunu oynatabilir misin?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Sol kolunu oynatabilir misin?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "5b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Sağ kolunu 10 saniye kaldır.",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Sol kolunu 10 saniye kaldır.",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Sağ kolunu oynatabilir misin?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Sol kolunu oynatabilir misin?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "6a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Sağ bacağını beş saniye kaldır.",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Sol bacağını beş saniye kaldır.",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Sağ bacağını oynatabilir misin?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Sol bacağını oynatabilir misin?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "6b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Sağ bacağını beş saniye kaldır.",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Sol bacağını beş saniye kaldır.",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Sağ bacağını oynatabilir misin?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Sol bacağını oynatabilir misin?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "7": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Burnuna dokun, parmağıma dokun.",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Diğer elin, burnuna dokun, parmağıma dokun.",
                        "translit": null
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Topukunuzu kavrayın, sonra yukarı aşağı kaydırın.",
                        "translit": null
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "Yukarı ve aşağı git.",
                        "translit": null
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "Diğer bacak, senin shin topuk koymak sonra yukarı ve aşağı kaydırın",
                        "translit": null
                    }
                }
            ],
            "8": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Bunu hissediyor musun?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "Evet",
                                "translit": null
                            },
                            {
                                "translat": "Hayır",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Her iki tarafta da aynı şeyi hissediyor musunuz?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "Evet",
                                "translit": null
                            },
                            {
                                "translat": "Hayır",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Daha fazla duygu ile yan, bunu işaret edebilir?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "Sağ",
                                "translit": null
                            },
                            {
                                "translat": "Sol",
                                "translit": null
                            }
                        ]
                    }
                }
            ],
            "9": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Bu resmi açıklayın",
                        "translit": null
                    },
                    "solution": {
                        "description": [
                            {
                                "translat": "Bir kadın bulaşıkları yıkıyor, bir kadın havluyla tabak kuruyor, lavabo su basıyor, bir çocuk kurabiye alıyor, oğlan düşmek üzere, kız kurabiyeye uzanıyor, kız gülüyor.",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Ne görüyorsun?",
                        "translit": null
                    },
                    "solution": {
                        "objects": [
                            {
                                "translat": "Kaktüs",
                                "translit": null
                            },
                            {
                                "translat": "Eldiven",
                                "translit": null
                            },
                            {
                                "translat": "Sandalye",
                                "translit": null
                            },
                            {
                                "translat": "kapı anahtarı",
                                "translit": null
                            },
                            {
                                "translat": "Hamak",
                                "translit": null
                            },
                            {
                                "translat": "Tüy",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Bu kelimeleri okuyun",
                        "translit": null
                    }
                }
            ],
            "10": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Bu kelimeleri tekrarlayın",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Benden sonra tekrarlayın",
                        "translit": null
                    }
                }
            ],
            "11": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Gözlerinizi kapatın",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Yüzüne dokunacağım, sağ tarafına mı, sol tarafına mı, yoksa her iki tarafına mı dokunacağım?",
                        "translit": null
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "Sağ",
                                "translit": null
                            },
                            {
                                "translat": "Sol",
                                "translit": null
                            },
                            {
                                "translat": "Hem",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Dokunduğum tarafı işaret edin",
                        "translit": null
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "Hangi kola dokunuyorum? Sağ kol, sol kol mu, yoksa iki kol mu?",
                        "translit": null
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "Hangi bacağına dokunuyorum? Sağ bacak, sol bacak ya da iki bacak?",
                        "translit": null
                    }
                },
                {
                    "id": "6",
                    "phrase": {
                        "translat": "Gözlerini aç.",
                        "translit": null
                    }
                },
                {
                    "id": "7",
                    "phrase": {
                        "translat": "Hangi parmağımı kıpırdatıyorum? Sağ parmak mı, sol parmak mı, yoksa iki parmak mı?",
                        "translit": null
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "Sağ",
                                "translit": null
                            },
                            {
                                "translat": "Sol",
                                "translit": null
                            },
                            {
                                "translat": "Hem",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "8",
                    "phrase": {
                        "translat": "Kıpırdadığım tarafı işaret ediyorum.",
                        "translit": null
                    }
                }
            ],
            "end": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Teşekkürler",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Hoşçakal",
                        "translit": null
                    }
                }
            ]
        },
        'fil' : {
            "1a": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "hello",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Kumusta ka na?",
                        "translit": null
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Nasasaktan ka ba?",
                        "translit": null
                    }
                }
            ],
            "1b": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Ilang taon ka na?",
                        "translit": null
                    },
                    "solution": {
                        "patient_age": [
                            {
                                "translat": "Akó ay isa",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay dalawa",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay tatlo",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay apat na taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay limang taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay anim na taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay pitong taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay walong taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay siyam na taong akó",
                                "translit": null
                            },
                            {
                                "translat": "Ako ang isa",
                                "translit": null
                            },
                            {
                                "translat": "Labing-isang taong gulang na ako",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay labindalawang taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay ikinatlo",
                                "translit": null
                            },
                            {
                                "translat": "Labing-apat ako",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay labinlimang taong limang taong akó ay labinlimang taong",
                                "translit": null
                            },
                            {
                                "translat": "Labing-anim ako",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay labing-pitong taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay labingwalong taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Labingsiyam na taong akó ay labingsiyam",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay dalawampu't dalawampu",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y dalawampu't-isa",
                                "translit": null
                            },
                            {
                                "translat": "Dalawampu't dalawampu't-dalawang",
                                "translit": null
                            },
                            {
                                "translat": "Dalawampu't tatlong beses akong dalawampu't tatlo",
                                "translit": null
                            },
                            {
                                "translat": "Dalawampu't apat na taong gulang na ako",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay dalawampu't limang taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay dalawampu't anim",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay dalawampu't pito",
                                "translit": null
                            },
                            {
                                "translat": "Dalawampu't walong taong gulang na ako",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay dalawampu't siyam",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay tatlumpung",
                                "translit": null
                            },
                            {
                                "translat": "Tatlumpu't isa ako",
                                "translit": null
                            },
                            {
                                "translat": "Tatlumpu't dalawa ako",
                                "translit": null
                            },
                            {
                                "translat": "Tatlumpu't tatlo",
                                "translit": null
                            },
                            {
                                "translat": "Tatlumpu't apat na taong gulang na ako",
                                "translit": null
                            },
                            {
                                "translat": "Tatlumpu't limang taong gulang na ako",
                                "translit": null
                            },
                            {
                                "translat": "Tatlumpu't anim na taon na akong nauuhaw",
                                "translit": null
                            },
                            {
                                "translat": "Tatlumpu't pito",
                                "translit": null
                            },
                            {
                                "translat": "Tatlumpu't walong taong gulang na ako",
                                "translit": null
                            },
                            {
                                "translat": "Tatlumpu't siyam",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay apatnapu't apatnapu't apat na taon",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y apatnapu't isa",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay apatnapu't dalawa",
                                "translit": null
                            },
                            {
                                "translat": "Apatnapu't tatlo",
                                "translit": null
                            },
                            {
                                "translat": "Apatnapu't apat na taong gulang na ako",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay apatnapu't limang taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Apatnapu't anim na taon na ako",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay apatnapu't pitong taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Apatnapu't walong taong gulang na ako",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay apatnapu't siyam",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay limampung taong akó",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay limampu't-isa",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay limampu't-dalawang",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay limampu't tatlo",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay limampu't apat na",
                                "translit": null
                            },
                            {
                                "translat": "Limang taong gulang na ako",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay limampu't anim na taon",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay limampu't pito",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay limampu't walong taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay limampu't siyam",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay animnapu't animnapu't animnapu",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y animnapu't isa",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay animnapu't dalawa",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay animnapu't tatlo",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y animnapu't apat na taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay animnapu't limang taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Animnapu't animnapu't anim na taon na ako",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay animnapu't pito",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay animnapu't walong taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y animnapu't siyam",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay pitumpu",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y pitumpu't isa",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay pitumpu't dalawa",
                                "translit": null
                            },
                            {
                                "translat": "Pitumpu't tatlo",
                                "translit": null
                            },
                            {
                                "translat": "Pitumpu't apat na taong gulang ako",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay pitumpu't limang",
                                "translit": null
                            },
                            {
                                "translat": "Pitumpu't anim na taon na ako",
                                "translit": null
                            },
                            {
                                "translat": "Pitumpu't pito",
                                "translit": null
                            },
                            {
                                "translat": "Pitumpu't walong taong gulang na ako",
                                "translit": null
                            },
                            {
                                "translat": "Pitumpu't siyam",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay walong taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Walumpu't walong taong gulang na ako",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay walumpu't dalawa",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay walumpu't tatlo",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay walumpu't apat na taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay walumpu't limang taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Walumpu't anim na taong gulang na ako",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay walumpu't pitong taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Walumpu't walong taong gulang na ako",
                                "translit": null
                            },
                            {
                                "translat": "Walumpu't siyam",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay siyamnapu't siyam",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y siyamnapu't siyam na taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y siyamnapu't dalawa",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y siyamnapu't tatlo",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y siyamnapu't apat na taon",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y siyamnapu't limang taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y siyamnapu't anim na taon",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y siyamnapu't pito",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y siyamnapu't walong taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y siyamnapu't siyam",
                                "translit": null
                            },
                            {
                                "translat": "Akó ay isandaang taon",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at isa",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at dalawa",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at tatlo",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at apat",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at lima",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at anim na taon",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at pito",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at walong taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at siyam",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at sampung",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at labing-isang taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at labindalawa",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at ikinatatlo",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at labing-apat",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at labinlimang taong labing-apat",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at labing-anim",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at labing-pitong taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at labingwalong taong gulang",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at labingsiyam",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at dalawampu't dalawa",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at dalawampu't dalawampu't isa",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at dalawampu't dalawampu't dalawa",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at dalawampu't tatlo",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at dalawampu't apat",
                                "translit": null
                            },
                            {
                                "translat": "Ako'y isandaan at dalawampu't limang",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Anong buwan ito?",
                        "translit": null
                    },
                    "solution": {
                        "month": [
                            {
                                "translat": "Enero",
                                "translit": null
                            },
                            {
                                "translat": "Pebrero",
                                "translit": null
                            },
                            {
                                "translat": "Marso",
                                "translit": null
                            },
                            {
                                "translat": "Abril",
                                "translit": null
                            },
                            {
                                "translat": "Mayo",
                                "translit": null
                            },
                            {
                                "translat": "Hunyo",
                                "translit": null
                            },
                            {
                                "translat": "Hulyo",
                                "translit": null
                            },
                            {
                                "translat": "Agosto",
                                "translit": null
                            },
                            {
                                "translat": "Setyembre",
                                "translit": null
                            },
                            {
                                "translat": "Oktubre",
                                "translit": null
                            },
                            {
                                "translat": "Nobyembre",
                                "translit": null
                            },
                            {
                                "translat": "Disyembre",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Mangyaring dahan-dahang sabihin nang isa pang beses",
                        "translit": null
                    }
                }
            ],
            "1c": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Ipikit ang inyong mga mata, buksan ang inyong mga mata",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Isara ang iyong kanang kamay, buksan ang iyong kanang kamay",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Isara ang iyong kaliwang kamay, buksan ang iyong kaliwang kamay",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "2": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Sundan ang daliri ko",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Tingnan ninyo ako",
                        "translit": null
                    }
                }
            ],
            "3": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Tingnan ang ilong ko",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Gaano karaming mga daliri ang nakikita mo?",
                        "translit": null
                    },
                    "solution": {
                        "fingers": [
                            {
                                "translat": "isa",
                                "translit": null
                            },
                            {
                                "translat": "dalawa",
                                "translit": null
                            },
                            {
                                "translat": "tatlong",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Mangyaring dahan-dahang sabihin nang isa pang beses",
                        "translit": null
                    }
                }
            ],
            "4": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Ipakita mo sa akin ang iyong mga ngipin",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Itaas ang inyong mga mata",
                        "translit": null
                    }
                }
            ],
            "5a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Itaas ang iyong kanang braso para sa sampung segundo",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Itaas ang iyong kaliwang braso para sa sampung segundo",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Maaari mong ilipat ang iyong karapatan braso sa lahat?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Maaari mong ilipat ang iyong kaliwang braso sa lahat?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "5b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Itaas ang iyong kanang braso para sa sampung segundo",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Itaas ang iyong kaliwang braso para sa sampung segundo",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Maaari mong ilipat ang iyong karapatan braso sa lahat?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Maaari mong ilipat ang iyong kaliwang braso sa lahat?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "6a": [
                {
                    "id": "1",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Itaas ang iyong kanang binti para sa limang segundo",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Itaas ang iyong kaliwang binti para sa limang segundo",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "non_paretic_hand": {
                            "Right": {
                                "translat": "Maaari mong ilipat ang iyong karapatan binti sa lahat?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Maaari mong ilipat ang iyong kaliwang binti sa lahat?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "6b": [
                {
                    "id": "1",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Itaas ang iyong kanang binti para sa limang segundo",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Itaas ang iyong kaliwang binti para sa limang segundo",
                                "translit": null
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "paretic_hand": {
                            "Right": {
                                "translat": "Maaari mong ilipat ang iyong karapatan binti sa lahat?",
                                "translit": null
                            },
                            "Left": {
                                "translat": "Maaari mong ilipat ang iyong kaliwang binti sa lahat?",
                                "translit": null
                            }
                        }
                    }
                }
            ],
            "7": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Hipuin ang iyong ilong, hawakan ang aking daliri",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Iba pang mga kamay, hawakan ang iyong ilong, hawakan ang aking daliri",
                        "translit": null
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Ilagay ang iyong anghel sa iyong maningning pagkatapos slide up at pababa",
                        "translit": null
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "Pumunta pataas at pababa",
                        "translit": null
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "Iba pang mga binti, ilagay ang iyong heel sa iyong maningning na pagkatapos ay slide up at pababa",
                        "translit": null
                    }
                }
            ],
            "8": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Nadarama mo ba ito?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "oo",
                                "translit": null
                            },
                            {
                                "translat": "Hindi",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Pare-pareho ba ito sa magkabilang panig?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "oo",
                                "translit": null
                            },
                            {
                                "translat": "Hindi",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Ang panig na may higit na damdamin, maaari mong ituro ito?",
                        "translit": null
                    },
                    "solution": {
                        "affirm": [
                            {
                                "translat": "kanan",
                                "translit": null
                            },
                            {
                                "translat": "kaliwa",
                                "translit": null
                            }
                        ]
                    }
                }
            ],
            "9": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Ilarawan ang larawang ito",
                        "translit": null
                    },
                    "solution": {
                        "description": [
                            {
                                "translat": "Isang babae ang naghuhugas ng pinggan, isang babae ay pagpapatayo ng isang plato na may tuwalya, ang balat ay pagbaha, isang batang lalaki ay pagkuha ng isang cookie, ang bata ay tungkol sa upang mahulog, ang batang babae ay maabot para sa cookie, ang babae ay tumatawa",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Ano ang nakikita ninyo?",
                        "translit": null
                    },
                    "solution": {
                        "objects": [
                            {
                                "translat": "cactus",
                                "translit": null
                            },
                            {
                                "translat": "guwantes",
                                "translit": null
                            },
                            {
                                "translat": "upuan",
                                "translit": null
                            },
                            {
                                "translat": "pinto key",
                                "translit": null
                            },
                            {
                                "translat": "hammock",
                                "translit": null
                            },
                            {
                                "translat": "balahibo",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Basahin ang mga salitang ito",
                        "translit": null
                    }
                }
            ],
            "10": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Ulitin ang mga salitang ito",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Ulitin pagkatapos ko",
                        "translit": null
                    }
                }
            ],
            "11": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Ipikit ang inyong mga mata",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Hihipo ko ba ang inyong mukha, hawak ko ba ang inyong kanang bahagi, kaliwang bahagi, o magkabilang panig?",
                        "translit": null
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "kanan",
                                "translit": null
                            },
                            {
                                "translat": "kaliwa",
                                "translit": null
                            },
                            {
                                "translat": "parehong",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "3",
                    "phrase": {
                        "translat": "Ituro ang gilid na hawak ko",
                        "translit": null
                    }
                },
                {
                    "id": "4",
                    "phrase": {
                        "translat": "Aling braso ang nakaaantig sa akin? Kanang braso, kaliwang braso, o parehong mga braso?",
                        "translit": null
                    }
                },
                {
                    "id": "5",
                    "phrase": {
                        "translat": "Aling binti ang hawak ko? Kanang binti, kaliwang binti, o parehong binti?",
                        "translit": null
                    }
                },
                {
                    "id": "6",
                    "phrase": {
                        "translat": "Buksan ang iyong mga mata",
                        "translit": null
                    }
                },
                {
                    "id": "7",
                    "phrase": {
                        "translat": "Aling daliri ang aking pinanghihintulutan? Kanang daliri, kaliwang daliri, o parehong mga daliri?",
                        "translit": null
                    },
                    "solution": {
                        "side": [
                            {
                                "translat": "kanan",
                                "translit": null
                            },
                            {
                                "translat": "kaliwa",
                                "translit": null
                            },
                            {
                                "translat": "parehong",
                                "translit": null
                            }
                        ]
                    }
                },
                {
                    "id": "8",
                    "phrase": {
                        "translat": "Ituro ang gilid na ako wiggling",
                        "translit": null
                    }
                }
            ],
            "end": [
                {
                    "id": "1",
                    "phrase": {
                        "translat": "Salamat",
                        "translit": null
                    }
                },
                {
                    "id": "2",
                    "phrase": {
                        "translat": "Paalam",
                        "translit": null
                    }
                }
            ]
        },
    };
    this.initialize = function () {
        // No Initialization required
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    };

    this.returnAll = function () {
        return languages;
    };

    this.returnAllPhrases = function () {
        return en;
    };

    this.returnAllTranslations = function(language) {
        return translations[language];
    };

    this.findById = function (id) {
        var deferred = $.Deferred();
        var language = null;
        var l = languages.length;
        for (var i = 0; i < l; i++) {
            if (languages[i].id === id) {
                language = languages[i];
                break;
            }
        }
        deferred.resolve(language);
        return deferred.promise();
    };

    this.findByName = function (searchKey) {
        var deferred = $.Deferred();
        var results = languages.filter(function (element) {
            var name = element.english;
            return name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        deferred.resolve(results);
        return deferred.promise();
    };
}