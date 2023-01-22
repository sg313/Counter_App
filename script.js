let countEl = document.getElementById("count-El");
let preEn = document.getElementById("pre-entry");
let count = 0;

function increase(){
    count++;
    countEl.innerText = count;
}    
function decrease(){
    count--;
    if(count<0){
        count = 0
        countEl.innerText = count;
    }
    else{
        countEl.innerText = count;
    }
    
}
function save(){
    let preCount = " "+count + " - ";
    
    preEn.innerText = preEn.innerText + preCount;
}
function reset(){
    count=0;
    countEl.innerText = count;
}

