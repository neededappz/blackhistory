// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<p>Think you're smart enough to be on Jeopardy? Find out with this Black History Month knowledge quiz!</p>",
        "results": "Care for another Go?  If not just click the back arrow up top to go back to the main screen!",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What was John Brown's Raid on Harper's Ferry?",
            "a": [
                {"option": "event that hastened the start of the Civil War",      "correct": false},
                {"option": "1859 attempt to seize a federal arsenal",     "correct": false},
                {"option": "statement against slavery",      "correct": false},
                {"option": "all of the answers are correct",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Where did Martin Luther King, Jr., deliver his famous I have a dream speech?",
            "a": [
                {"option": "Selma, Alabama",               "correct": false},
                {"option": "Washington D.C",   "correct": true},
                {"option": "Birmingham, Alabama",               "correct": false},
                {"option": "Montgomery, Alabama", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What was the informal system that helped slaves escape to the North during the mid-1800s?",
            "a": [
                {"option": "Underground Railroad",           "correct": true},
                {"option": "Northern Roads",                  "correct": false},
                {"option": "Highway to Heaven",  "correct": false},
                {"option": "Midnight Express",          "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },
        { // Question 4
            "q": "Who was the first African American to make a space flight?",
            "a": [
                {"option": "Robert Curbeam",    "correct": false},
                {"option": "Guion Guy S. Bluford, Jr",     "correct": true},
                {"option": "Frederick Drew Gregory",      "correct": false},
                {"option": "Michael Anderson",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },

        { // Question 5
            "q": "Michael Luther King Jr., Later renamed Martin, was born January 15, 1929 in which southern city?",
            "a": [
                {"option": "Dallas",    "correct": false},
                {"option": "Atlanta",     "correct": true},
                {"option": "New Orleans",      "correct": false},
                {"option": "Savannah",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },

        { // Question 6
            "q": "What year did Martin Luther King Jr. win the Nobel Peace Prize on December 10th?",
            "a": [
                {"option": "1975",    "correct": false},
                {"option": "1964",     "correct": true},
                {"option": "1959",      "correct": false},
                {"option": "1971",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },

        { // Question 7
            "q": "On December 1, 1955, what was Rosa Parks arrested for?",
            "a": [
                {"option": "Refusing to give her seat to a white passanger",    "correct": true},
                {"option": "drinking from a white only water fountain",     "correct": false},
                {"option": "rioting",      "correct": false},
                {"option": "marching in Selma",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },

        { // Question 8
            "q": "In 1989, Douglas Wilder became the first black governor of which state?",
            "a": [
                {"option": "Ohio",    "correct": false},
                {"option": "Pennsylvania",     "correct": false},
                {"option": "Nevada",      "correct": false},
                {"option": "Virginia",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },

        { // Question 9
            "q": "When did Harriet Tubman first escape from slavery?",
            "a": [
                {"option": "1889",    "correct": false},
                {"option": "1810",     "correct": true},
                {"option": "1875",      "correct": false},
                {"option": "1849",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },

        { // Question 10
            "q": "Frederick Douglas was a leader of which movement during the Civil War?",
            "a": [
                {"option": "Abolitionist",    "correct": true},
                {"option": "Suffrage",     "correct": false},
                {"option": "Confederate",      "correct": false},
                {"option": "Slavery",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },

        { // Question 11
            "q": "In which year did historian Carter G. Woodson propose a Negro History Week?",
            "a": [
                {"option": "1915",    "correct": true},
                {"option": "1900",     "correct": false},
                {"option": "1965",      "correct": false},
                {"option": "1975",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },

        { // Question 12
            "q": "Emmett Till was born on July 25, 1941 in Chicago.  At the time of his murder he had a stocky build but as a child suffered from a serious illness, what was it called?",
            "a": [
                {"option": "Polio",    "correct": true},
                {"option": "Tuberculosis",     "correct": false},
                {"option": "Leukemia",      "correct": false},
                {"option": "Meningitis",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },

        { // Question 13
            "q": "Who was the first African-American to appear on a U.S. postage stamp?",
            "a": [
                {"option": "Harriet Tubman",    "correct": false},
                {"option": "Booker T. Washington",     "correct": true},
                {"option": "Jackie Robinson",      "correct": false},
                {"option": "Martin Luther King Jr.",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },

        { // Question 14
            "q": "What state was the first to elect a black governor, doing so in 1989?",
            "a": [
                {"option": "Mississippi",    "correct": false},
                {"option": "Delaware",     "correct": false},
                {"option": "Virginia",      "correct": true},
                {"option": "Washington",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },

        { // Question 15
            "q": "Which of these honors was Martin Luther King Jr. not awarded?",
            "a": [
                {"option": "Nobel Peace Prize",    "correct": false},
                {"option": "Congressional Gold Medal",     "correct": false},
                {"option": "Presidential Medal of Freedom",      "correct": false},
                {"option": "Freedom Award",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },

        { // Question 16
            "q": "Who was the first African-American head coach in the NFL?",
            "a": [
                {"option": "Fritz Pollard",    "correct": true},
                {"option": "Tony Dungy",     "correct": false},
                {"option": "Ray Rhodes",      "correct": false},
                {"option": "Art Shell",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },

        { // Question 17
            "q": "True or false: The first president of the National Association for the Advancement of Colored People was white.",
            "a": [
                {"option": "True",    "correct": true},
                {"option": "False",     "correct": false}// no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },

        { // Question 18
            "q": "Who was the plaintiff in the Supreme Court decision that upheld the legal doctrine of separate but equal?",
            "a": [
                {"option": "Theodore S. Wright",    "correct": false},
                {"option": "Dred Scott",     "correct": false},
                {"option": "Oliver Brown",      "correct": false},
                {"option": "Homer Plessy",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },

        { // Question 19
            "q": "Who was the first African-American to win a gold medal at the Olympics?",
            "a": [
                {"option": "William DeHart Hubbard",    "correct": false},
                {"option": "Jesse Owens",     "correct": false},
                {"option": "George Poage",      "correct": false},
                {"option": "John Taylor",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        },

        { // Question 20
            "q": "In what city did the National Guard try to prevent nine black students from attending a segregated school in 1957?",
            "a": [
                {"option": "Little Rock, Ark.",    "correct": true},
                {"option": "Tuscaloosa, Ala.",     "correct": false},
                {"option": "Columbia, S.C.",      "correct": false},
                {"option": "Oxford, Miss.",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> You're Amazing!</p>",
            "incorrect": "<p><span>Uhh no.</span>  <em></em> it was a tough one though</p>" // no comma here
        }
       
    ]
};
