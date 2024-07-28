// ----------------------------------declaration of question--------------------
const myQuiz = [
    {
        question: "What does MERN stand for?",
        a: "MySQL, Express, Ruby, Node.js",
        b: " MongoDB, Express.js, React, Node.js",
        c: "MariaDB, EJS, Redux, Nginx",
        d: " MongoDB, Ember.js, React, Node.js",
        correct: "b",



    },
    {
        question: "Which database is used in the MERN stack?",
        a: "PostgreSQL",
        b: " MongoDB",
        c: "SQLite",
        d: " MySQL",
        correct: "b",



    }, {
        question: "What library is used for the client-side in the MERN stack?",
        a: "Vue.js",
        b: "jQuery",
        c: "Angular",
        d: "React",
        correct: "d",



    }, {
        question: "What framework is used for the server-side in the MERN stack?",
        a: "Angular",
        b: " Django",
        c: " Express.js",
        d: "Laravel",
        correct: "c",



    }, {
        question: "Which runtime environment does the MERN stack use for server-side JavaScript execution?",
        a: "Python",
        b: "Node.js",
        c: "PHP",
        d: "Java",
        correct: "b",



    },

]

// ------------------------------------------------------show the question in the quiz div------------------
const quizContainer = document.querySelector("quiz-container")
const quiz = document.getElementById("quiz")
const submit = document.getElementById("submit")
const result = document.getElementById("result")
var currentQuiz = 0
var score = 0
selectQuiz()
function selectQuiz() {
    const currentQues = myQuiz[currentQuiz]
    quiz.innerHTML = ` <p>${currentQues.question}</p>
            <div class="inputs">
                <input type="radio"  name="option" value="a" class="input1">${currentQues.a} <br>
                <input type="radio" name="option" value="b" class="input2">${currentQues.b}<br>
                <input type="radio" name="option" value="c" class="input3">${currentQues.c}<br>
                <input type="radio" name="option" value="d" class="input4">${currentQues.d}<br>


            </div>`





}
// ---------------------------------take the value of input radio-------------------------------
function getting() {
    const btnValue = document.querySelectorAll('input[name="option"]')
    let inputValue;
    btnValue.forEach(el => {
        if (el.checked) {
            inputValue = el.value

        }

    })


    return inputValue


}
// ---------------------------------clicking submit and see if it is match to answer or not-----------------------------
    // console.log(answer);
    submit.addEventListener("click", () => {
    const answer = getting()

            if (answer === myQuiz[currentQuiz].correct) {
                score++

            }
            currentQuiz++;

            if (currentQuiz < myQuiz.length) {
                selectQuiz()
            }
            else{
                quiz.style.display = "none"
                submit.style.display = "none"
                displayResult()
            }









    })
    function displayResult(){
        if(score===0){
            result.innerHTML=`<h2>You didn't get any questions right. Don't give up!</h2>`
        }
         else if(score===1){
            result.innerHTML=`<h2>You got one question right. Keep practicing!<h2>`
        }
        else if(score===2){
            result.innerHTML=`<h2>Not bad, but you can do better.<h2>`
        } else if(score===3){
            result.innerHTML=`<h2>Good effort! You got three questions right."<h2>`
        } else if(score===4){
            result.innerHTML=`<h2>Great job! You missed only one question.<h2>`
        } else if(score===5){
            result.innerHTML=`<h2>Excellent! You got all questions right!<h2>`
        }   
    }











