let gameseq=[];
let userseq=[];
let btns=['yellow','red','purple','green'];

let started=false;
let level=0;
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if (started==false){
        console.log("Game Started");
        started=true;

        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);

}
function levelup(){
    level++;
    h3.innerText=`Level ${level}`;
    let randomidx=Math.floor(Math.random()*3);
    let randcolor=btns[randomidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    console.log(randbtn);
    console.log(randcolor);
    console.log(randomidx);
    btnflash(randbtn);
}