const wordsection = document.querySelector('.word')
const boardsection = document.querySelector('.board')
const figure = document.querySelector('.figure')
const btn = document.querySelector('.next')

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","X","V", "Y","Z"]
const human = ["head","body","rightarm","leftarm","rightleg","leftleg"]

let randomWord = "" //qlobal deyiskesn yaradiriq bashlang deyeri 0 yeni bos  string olsun

const creatkeyBoard = () =>{
    boardsection.innerHTML= "";
    for(let a = 0; a < letters.length;a++){
        let square = document.createElement("div")
        square.classList.add("lettersquare")
        square.textContent=letters[a]
        boardsection.appendChild(square)
    }
}

const createWord = ()=>{
wordsection.innerHTML=""
randomWord=selectWord()
for (let a=0; a < randomWord.length; a++){
    let square = document.createElement("div")
    square.classList.add("square")
    square.setAttribute("data-value", randomWord[a])
    wordsection.appendChild(square)
}
};

const selectWord=()=>{
    const word=[
        'BEAR','FOX','FISH','COW',"GOAT",'PIG','CHEETAH','WOLF','MONKEY','FLAMINGO','BOAR','DOG','CAT','PANTHER'
    ];
    const randomWord=Math.floor(Math.random()*word.length)
    console.log(word[randomWord]);
    return keyWord = Array.from(word[randomWord])
}

const generateBody= (value)=>{
    let bodypart = document.createElement("div")
    bodypart.classList.add(human[value])
    figure.appendChild(bodypart)
}
// creatkeyBoard();
// createWord();

var  wrongcount=0;
var correctcount = 0;

const startGame = ()=> {
     creatkeyBoard();
    createWord();
    let buttons = document.querySelectorAll(".lettersquare")
    let square = document.querySelectorAll(".square")
    let figureSection= document.querySelectorAll(".figure div")
    
    figureSection.forEach(item=> {
        if (!item.getAttribute("data-value"))item.remove
    })
    buttons.forEach((item) =>{
        item.addEventListener("click",(e)=> {
            let chosenletter= e.target.textContent
            if(randomWord.includes(chosenletter)){
                e.target.classList.add("correct")
                square.forEach((item) =>{
                    if (item.getAttribute("data-value") === chosenletter){
                        item.textContent = item.getAttribute("data-value")
                        item.classList.add("show")
                        correctcount++
                    }
                })
                
                if(correctcount === randomWord ){
                
                    buttons.forEach(item=>{
                        item.classList.add("close")
                    })
                    square.forEach(item=>{
                        item.style.backround ="green"
                    })
                    
                }

            }else{
                e.target.classList.add("wrong")
                wrongcount++
                generateBody(wrongcount-1)
                if(wrongcount===5){
                    alert("Your limit for wrong answers is over.If you want to continue playing, please refresh the page")
                    buttons.forEach(item=>{
                        item.classList.add("close")
                    })

                    square.forEach.apply(item => {
                        item.classList.add("show")
                        item.style.backround="red"
                    })

                }
            }
        })
    })
}
startGame()


