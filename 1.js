let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let h1=document.querySelector("h1");
    let colour=getrandomcolour();
    h1.innerText=colour;

    let div=document.querySelector("div");
    div.style.backgroundColor=colour; 

    console.log("colour updated");

});

function getrandomcolour(){
    let red=Math.floor(Math.random() *255);
    let green=Math.floor(Math.random() *255);
    let blue=Math.floor(Math.random() * 255);

let colour=`rgb(${red},${green},${blue})`;
return colour;
}