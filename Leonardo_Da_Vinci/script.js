const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: 'Qual a obra mais famosa de Leonardo da Vinci, além de Monalisa?',
        choice1: 'Monalisa',
        choice2: 'A ultima ceia',
        choice3: 'Pietá',
        choice4: 'Homem Vitruviano',
        answer: 2,
    },
    {
        question:
            "Quais as outras áreas além das belas artes que Da Vinci estudava?",
        choice1: "Mecânica",
        choice2: "Anatomia",
        choice3: "Natureza",
        choice4: "Todas as anteriores",
        answer: 4,
    },
    {
        question: " Aonde Leonardo Da Vinci nasceu?",
        choice1: "Milão, Itália",
        choice2: "Paris, França",
        choice3: "Ruanda, Angola",
        choice4: "Anchiano, Itália",
        answer: 4,
    },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});

startGame();