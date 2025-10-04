function setting(data,success,failure){
    let internetspeed=Math.floor(Math.random()*10)+1;
    if (internetspeed>4){
    success();
    }else{
    failure();
    }
}
setting(
    "apna college",
    ()=>{
        console.log("Success : Your data is saved");
    },
    ()=>{
        console.log("Failure: Your data is not saved");
    }
);
