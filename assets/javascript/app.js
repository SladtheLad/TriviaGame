//You'll create a trivia game that shows only one question until the player answers it or their time runs out.

//If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, 
//display the next question -- do this without user input.

//The scenario is similar for wrong answers and time- outs.

//If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.

//If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer.
//Wait a few seconds, then show the next question.

//On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).


//My array of objects containing my question and answer pairs
var quizQuestions = [
    {
        question: "WHAT IS THE PRINCIPLE OF STARFLEET’S \"PRIME DIRECTIVE\"?",
        answers: {
            a: "Diplomacy and nonviolence",
            b: "Non-intervention",
            c: "Providing assistance to those in need",
            d: "Exploration and scientific study"
        }
    },
    {
        question: "USS ENTERPRISE (NCC-1701-D) BARTENDER GUINAN (PLAYED BY WHOOPI GOLDBERG, WHO REQUESTED A PART ON THE SERIES) IS A MEMBER OF WHAT LONG-LIVED SPECIES?",
        answers: {
            a: "Haakonian",
            b: "Denobulan",
            c: "El- Aurian",
            d: "Human/Terran"
        }
    },
    {
        question: "WHAT IS THE NAME OF THE KLINGON HOME WORLD?",
        answers: {
            a: "Qo'noS",
            b: "Klingonia",
            c: "Anacreon",
            d: "Gorkon"
        }
    },
    {
        question: "HIKARU SULU HELD WHICH POSITION FOR THE LONGEST PERIOD OF TIME ABOARD THE USS ENTERPRISE (NCC-1701-A)?",
        answers: {
            a: "Helmsman",
            b: "Chief Engineer",
            c: "Science Officer",
            d: "Communications Officer"
        }
    },
    {
        question: "WHAT IS THE PURPOSE OF THE VULCAN RITUAL OF KOLINAHR?",
        answers: {
            a: "A purging of emotion",
            b: "The temporary union of two minds",
            c: "Sexual release and mating",
            d: "The transfer of one’s consciousness into the body of another"
        }
    }
];


//function for displaying the quiz
function quizShow(){
     var htmlOutput = [];

    quizQuestions.forEach((currentQuestion, questionNumber) => {

       var answers = [];

       for(letter in currentQuestion.answers) {

        answers.push(
            `<label>
                <input type="radio" name="question${questionNumber}" value = "${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
            </label>`

        );
       }

       htmlOutput.push(
           `<div class="question"> ${currentQuestion.question} </div>
           <div class="answers">   
           `
       )


    })


}

//function for displaying the quiz on interval

//function for taking the users submition

//function for showing the result