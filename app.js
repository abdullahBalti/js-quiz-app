
const quizDb = [
    {
        ques : "(1) What does HTML stand for?",
        a: "hyperlinks and text markup language",
        b: "home tool markup language",
        c: "hyper text markup language",
        ans: "anse1"
    },
    {
        ques : "(2) Who is making the Web standards?",
        a: "google",
        b: "the world wide web consortium",
        c: "Micorsoft",
        ans: "ans2"
    },
    {
        ques : "(3) Choose the correct HTML element for the largest heading",
        a: "<h6>",
        b: "<heading>",
        c: "h1",
        ans: "anse3"
    },
    {
        ques : "(4) What is the correct HTML element for inserting a line break?",
        a: "<br>",
        b: "<breack>",
        c: "<lb>",
        ans: "ans4"
    },    
    {
        ques : "(5) What is the correct HTML for adding a background color?",
        a: "<body bg='yellow'>",
        b: "home tool markup language",
        c: "hyper text markup language",
        ans: "anse5"
    },
    {
        ques : "(6) Who is making the Web standards?",
        a: "google",
        b: "facebook",
        c: "Micorsoft",
        ans: "ans6"
    }
];

const qsHeader = document.querySelector('.qs-header');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
// const option3 = document.querySelector('#option3');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.qs');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{
    // console.log(quizDb[0]);
    const questionlist = quizDb[questionCount];
    // console.log(questionlist.ques);
    qsHeader.innerText = questionlist.ques;

    option1.innerText = questionlist.a;
    option2.innerText = questionlist.b;
    option3.innerText = questionlist.c;
}
loadQuestion();

const getCheckAn = () =>{
    let answer;
    answers.forEach((curAn) =>{
        if(curAn.checked){
            answer = curAn.id; 
        }
    });
    return answer;
}
const deselectAll = () => {
    answers.forEach((curAn) => curAn.checked = false);
};
submit.addEventListener('click', ()=>{
    const checkedAn = getCheckAn();
   console.log(checkedAn);
   if(checkedAn === quizDb[questionCount].ans){
       score ++;
   }
   questionCount ++;
   deselectAll()
   if(questionCount < quizDb.length){
       loadQuestion();
   }

});