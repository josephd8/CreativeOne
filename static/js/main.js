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

function getRandomQuestion() {
    var randIdx = Math.floor(Math.random()*questions.length);
    return questions[randIdx];
}

function populateQuiz() {

    var answerDiv = document.getElementById("answers");
    var questionDiv = document.getElementById("question");
    var choicesDiv = document.getElementById("choices");

    // Get a 'random' question
    var q = getRandomQuestion();
    console.log(q.question);
    var question = document.createElement("p");
    question.className = "text-center";
    question.textContent = q.question;
    questionDiv.appendChild(question);

    // Iterate over the choices for the question.
    var choices = q.choices;
    for (var c in choices) {
        if (choices.hasOwnProperty(c)) {

            var newChoiceDiv = document.createElement("div");
            newChoiceDiv.className = "radio";

            var newChoiceLabel = document.createElement("label");
            //newChoiceLabel.textContent = "Option " + c.toUpperCase();

            newChoiceLabel.className = "radio";
            var newChoiceInput = document.createElement("input");
            newChoiceInput.type = "radio";
            newChoiceInput.name = "optradio";

            newChoiceLabel.appendChild(newChoiceInput);
            newChoiceLabel.append("Option " + c.toUpperCase());

            newChoiceDiv.appendChild(newChoiceLabel);
            choicesDiv.appendChild(newChoiceDiv);

            var newImg = document.createElement("img");
            newImg.src = choices[c];
            newImg.alt = c;

            var newLink = document.createElement("a");
            newLink.className = "thumbnail";
            newLink.href = "#";
            newLink.appendChild(newImg);

            var newCaption = document.createElement("div");
            var newH3 = document.createElement("h3");
            newCaption.className = "caption";
            newH3.className = "text-center";
            newH3.textContent = c.toUpperCase();
            newCaption.appendChild(newH3);
            newLink.appendChild(newCaption);

            var newDiv = document.createElement("div");
            newDiv.className = "col-xs-4 col-md-4";
            newDiv.appendChild(newLink);

            answerDiv.appendChild(newDiv);

            console.log(c + ":" + choices[c]);
        }
    }

}

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

function newQuestions() {

}


