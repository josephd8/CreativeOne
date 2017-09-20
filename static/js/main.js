const questions = [
    {
        "question": "Which of these memes best describe how you feel watching BYU Football this year?",
        "choices": {
            "a": "https://media.giphy.com/media/do8MAY6CkoXsc/giphy.gif",
	        "b": "https://media.giphy.com/media/3t7RAFhu75Wwg/giphy.gif",
	        "c": "https://media.giphy.com/media/NWg7M1VlT101W/giphy.gif"
        }
    },
    {
        "question": "Which of these memes best describe how you felt when Donald Trump was elected as P.O.T.U.S.?",
        "choices": {
            "a": "https://media.giphy.com/media/FEikw3bXVHdMk/giphy.gif",
            "b": "https://media.giphy.com/media/3oz8xPPAvH1k8N6ZYA/giphy.gif",
            "c": "https://media.giphy.com/media/l46Cv7xLYTFTYQza8/giphy.gif"
        }
    },
    {
        "question": "Which of these memes best describes how you are currently feeling about web programming?",
        "choices": {
            "a": "https://media.giphy.com/media/d31vNo8crBC91xF6/giphy.gif",
            "b": "https://media.giphy.com/media/CPskAi4C6WLHa/giphy.gif",
            "c": "https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif"
        }
    }
];

function submitTheAnswers() {
	var stringArray = [
		"You are quite an emotional individual.",
		"Interesting...",
		"Finding perfect love match now......."
	];
	var randNum = Math.floor(Math.random()*stringArray.length);
	var theString = stringArray[randNum];

	document.getElementById("textback").innerHTML = theString;
}

// Just messing around
const questionsV2 = [
    "Which of these memes best describe how you feel watching BYU Football this year?",
    "Which of these memes best describe how you felt when Donald Trump was elected as P.O.T.U.S.?",
    "Which of these memes best describes how you are currently feeling about web programming?"
];

const images = [
    "https://media.giphy.com/media/do8MAY6CkoXsc/giphy.gif", "https://media.giphy.com/media/3t7RAFhu75Wwg/giphy.gif", "https://media.giphy.com/media/NWg7M1VlT101W/giphy.gif",
    "https://media.giphy.com/media/FEikw3bXVHdMk/giphy.gif", "https://media.giphy.com/media/3oz8xPPAvH1k8N6ZYA/giphy.gif", "https://media.giphy.com/media/l46Cv7xLYTFTYQza8/giphy.gif",
    "https://media.giphy.com/media/d31vNo8crBC91xF6/giphy.gif", "https://media.giphy.com/media/CPskAi4C6WLHa/giphy.gif", "https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif"
];

function randIdx(someList) {
    return Math.floor(Math.random() * someList.length);
}

function newImages() {

    var imgElements = document.getElementsByClassName("img-choice");
    var imgElementSrc = [];
    for (var i = 0; i < imgElements; i++) {
        var result = imgElements[i];
        console.log("img " + result);
        imgElementSrc.push(imgElements[i].src);
    }
    console.log(imgElementSrc);

    // get the src for the current images
    // var oldSrc = [];
    for (var c = 0; c < imgElements.length; c++) {
        var oldSrc = imgElements[c].src;
        do {
            var newSrc = images[randIdx(images)];
        } while(oldSrc == newSrc);
        imgElements[c].src = newSrc;
    }
}

function populateQuiz() {

    // get a random question
    var question = questionsV2[randIdx(questionsV2)];
    document.getElementById("question").innerHTML = '<p class="text-center">' + question + '</p>';

    // get three random images to use
    // as the choices for above question.
    var imgList = images.slice();
    var ltrOptions = "ABC";
    var numOptions = 3;

    // we need to build up the string we will insert as innerHtml,
    // otherwise we end up overwriting during the for loop.  not sure
    // if this is actually cleaner or not.
    var imgHtml = "";
    var radioHtml = "";

    for(var c = 0; c < numOptions; c++) {

        // create a new image div
        var idx = randIdx(imgList);
        var imgSrc = imgList.splice(idx, 1);
        imgHtml += '<div class="col-xs-4 col-md-4"><a href="#" class="thumbnail">' +
            '<img src="' + imgSrc + '" class="img-choice"><div class="caption"><h3 class="text-center">' + ltrOptions[c] + '</h3></div></a></div>';

        // create the answer radio buttons
        radioHtml += '<div class="radio"><label class="radio"><input type="radio" name="optradio">Option ' + ltrOptions[c] +
            '</label></div>';
    }
    document.getElementById("choice-images").innerHTML = imgHtml;
    document.getElementById("choices").innerHTML = radioHtml;

}


