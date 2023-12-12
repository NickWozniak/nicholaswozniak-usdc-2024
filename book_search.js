/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */
    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };

    // Search through texts
    for(const text of scannedTextObj){
        // Search through content
        for(const content of text.Content){
            if (content.Text.includes(searchTerm)){
                result.Results.push({
                    "ISBN": text.ISBN,
                    "Page": content.Page,
                    "Line": content.Line
                })
            }
        }
    }
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

const twoBooks = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    },
    {
        "Title": "The Road Not Taken",
        "ISBN": "9980000528531",
        "Content": [
            {
                "Page": 1,
                "Line": 1,
                "Text": "Two roads diverged in a yellow wood,"
            },
            {
                "Page": 1,
                "Line": 2,
                "Text": "And sorry I could not travel both"
            },
            {
                "Page": 1,
                "Line": 3,
                "Text": "And be one traveler, long I stood"
            },
            {
                "Page": 1,
                "Line": 7,
                "Text": "And having perhaps the better claim,"
            }
        ] 
    }
]
const noContent = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [] 
    }
]

const twoBooksNoContent = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [] 
    },
    {
        "Title": "The Road Not Taken",
        "ISBN": "9980000528531",
        "Content": [
            {
                "Page": 1,
                "Line": 1,
                "Text": "Two roads diverged in a yellow wood,"
            },
            {
                "Page": 1,
                "Line": 2,
                "Text": "And sorry I could not travel both"
            },
            {
                "Page": 1,
                "Line": 3,
                "Text": "And be one traveler, long I stood"
            },
            {
                "Page": 1,
                "Line": 7,
                "Text": "And having perhaps the better claim,"
            }
        ] 
    }
]

const twoBooksOutNoContent = {
    "SearchTerm": "I",
    "Results": [
        {
            "ISBN": "9980000528531",
            "Page": 1,
            "Line": 2
        },
        {
            "ISBN": "9980000528531",
            "Page": 1,
            "Line": 3
        }
    ]
}

const twoBooksOut = {
    "SearchTerm": "I",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        },
        {
            "ISBN": "9980000528531",
            "Page": 1,
            "Line": 2
        },
        {
            "ISBN": "9980000528531",
            "Page": 1,
            "Line": 3
        }
    ]
}

const twentyLeaguesOutCapital = {
    "SearchTerm": "The",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const emptyResponse = {
    "SearchTerm": "the",
    "Results": []
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** Find results from two separate books */
const test3result = findSearchTermInBooks("I", twoBooks);
if (JSON.stringify(twoBooksOut) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twoBooksOut);
    console.log("Received:", test3result);
}

/** Work on empty input */
const test4result = findSearchTermInBooks("the", []);
if (JSON.stringify(emptyResponse) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", emptyResponse);
    console.log("Received:", test4result);
}

/** Work when one book has no content */
const test5result = findSearchTermInBooks("the", noContent);
if (JSON.stringify(emptyResponse) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", emptyResponse);
    console.log("Received:", test5result);
}

/** Work when one book has no content */
const test6result = findSearchTermInBooks("I", twoBooksNoContent);
if (JSON.stringify(twoBooksOutNoContent) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", twoBooksOutNoContent);
    console.log("Received:", test6result);
}

/** Work with capitalization */
const test7result = findSearchTermInBooks("The", twentyLeaguesIn); 
if (JSON.stringify(twentyLeaguesOutCapital) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", twentyLeaguesOutCapital.Results.length);
    console.log("Received:", test7result.Results.length);
}