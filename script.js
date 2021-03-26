let number = [0, 0, 0, 0];
let counterVerify = [false, false, false, false];

if(localStorage.numb){
    number = localStorage.numb.split(",")

    for(let i=0; i<=3; i++){
        document.getElementById(i).innerHTML = "contagem de plays: " + number[i];
    }
}

const counter = num => {
    if(!counterVerify[num]){
        number[num]++;
        document.getElementById(num).innerHTML = "contagem de plays: " + number[num];
        counterVerify[num] = true;
    }
    localStorage.numb = number;
}

const reset = num => counterVerify[num] = false;