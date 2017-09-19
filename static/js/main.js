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

function populateQuizForm() {

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


