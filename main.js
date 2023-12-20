const questions =[
    {
    question:"What does CPU stand for?",
    answers:[
        {text:" Central Processing Unit", correct:true},
        {text:" Computer Processing Unit", correct:false},
        {text:" Central Processor Unit", correct:false},
        {text:" Central Peripheral Unit", correct:false}

        
    ]
    },{
    question:"Which programming language is often used for web development?",
    answers:[
        {text:"Java", correct:false},
        {text:"Python", correct:false},
        {text:"HTML", correct:true},
        {text:"C++", correct:false}

        
    ]
    },
    
    {
        question:"What does HTML stand for in the context of web development?",
        answers:[
            {text:"HyperText Markup Language", correct:true},
            {text:"HyperTransfer Markup Language", correct:false},
            {text:"High-Level Text Markup Language", correct:false},
            {text:"HyperText Modeling Language", correct:false}
    
            
        ]
        },
        {
            question:"Which company developed the Windows operating system?",
            answers:[
                {text:"Apple", correct:false},
                {text:"Microsoft", correct:true},
                {text:"Google", correct:false},
                {text:"Linux", correct:false}
        
                
            ]
            },
            {
                question:"What is the purpose of a firewall in computer security?",
                answers:[
                    {text:" To protect against viruses", correct:false},
                    {text:" To filter network traffic", correct:true},
                    {text:"To enhance computer speed", correct:false},
                    {text:"To store data securely", correct:false}
            
                    
                ]
                },
                {
                    question:"What is the primary function of RAM in a computer?",
                    answers:[
                        {text:" Long-term storage", correct:false},
                        {text:"Temporary storage for running programs", correct:true},
                        {text:"Processing graphics", correct:false},
                        {text:"External device connection", correct:false}
                
                        
                    ]
                    },
                    {
                        question:"Which of the following is a commonly used programming language for building mobile apps?",
                        answers:[
                            {text:"C#", correct:false},
                            {text:"Java", correct:false},
                            {text:"Swift", correct:false},
                            {text:"All of the above", correct:true}
                    
                            
                        ]
                        },
                        {
                            question:"What does the acronym 'URL' stand for?",
                            answers:[
                                {text:" Universal Resource Locator", correct:false},
                                {text:" Uniform Resource Locator", correct:true},
                                {text:"Universal Resource Link", correct:false},
                                {text:" Uniform Resource Link", correct:false}
                        
                                
                            ]
                            },

                            {
                                question:"Which type of storage is known for its speed and is often used as temporary storage by the CPU?",
                                answers:[
                                    {text:"Hard Disk Drive (HDD)", correct:false},
                                    {text:"Solid State Drive (SSD)", correct:true},
                                    {text:"USB Flash Drive", correct:false},
                                    {text:"CD-ROM", correct:false}
                            
                                    
                                ]
                                },
                                {
                                    question:"What is the purpose of an IP address?",
                                    answers:[
                                        {text:"To identify a person online", correct:false},
                                        {text:"To identify a device on a network", correct:true},
                                        {text:" To encrypt internet traffic", correct:false},
                                        {text:"To track website visits", correct:false}
                                
                                        
                                    ]
                                    },

]

const mainQuestion = document.getElementById('question');
const theAnswers = document.getElementById('answerButtons');
const nextButton= document.getElementById('nextBtn');

let questionOne =0;
let score = 0;
function myQuiz(){
    questionOne =0;
    score = 0;
    nextButton.innerHTML="NEXT"
    displayQuestion()
}
function displayQuestion(){
resetPrevious();
let currentQuestion=questions[questionOne];
let questionNumber =questionOne + 1;
mainQuestion.innerHTML=questionNumber +  ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer =>{
    const button=document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    theAnswers.appendChild(button)
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener('click', chooseAnswer)
})
}

function resetPrevious(){
    nextButton.style.display="none"
    while(theAnswers.firstChild){
        theAnswers.removeChild(theAnswers.firstChild);
    }
}

function chooseAnswer(e){
    const selectBtn=e.target;
    const veryCorrect=selectBtn.dataset.correct==="true";
    if(veryCorrect){
        selectBtn.classList.add('correct');
        score++;
    }else{
        selectBtn.classList.add('incorrect')
    }
    Array.from(theAnswers.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function displayScore(){
    resetPrevious();
    mainQuestion.innerHTML=`Your score is ${score} out of ${questions.length}`;
    nextButton.innerHTML="Take Quiz Again";
    nextButton.style.display="block";
};
function goToNextButton(){
    questionOne++
    if(questionOne<questions.length){
        displayQuestion();
    }else{
        displayScore();
    }
};
nextButton.addEventListener('click',()=>{
    if( questionOne < questions.length){
goToNextButton()
    }else{
        myQuiz();
    }
})

myQuiz()
