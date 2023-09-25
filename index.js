    const h2Ele = document.getElementById('heading');
    const inpEle = document.getElementById('inp');
    const btnEle = document.getElementById('submit');
    let result = 0;
    let counter = 0;
    function mathsQues() {
    const operator = ["+","-","*"];
    op1 = Math.floor(Math.random()*11);
    op2 = Math.floor(Math.random()*11);
    oprnd = operator[Math.floor(Math.random()*3)];
    switch (oprnd) {
        case "+":
            result = op1+op2;
            h2Ele.innerHTML = "What is "+op1+" plus "+op2+" ?";
            break;
        case "-":
            result = op2-op1;
            h2Ele.innerHTML = "What will be "+op1+" subtracted by "+op2+" ?";
            break;
        case "*":
            result =op1*op2;
            h2Ele.innerHTML = "What will be "+op1+" multiplied by "+op2+" ?";
            break;
        }
    }
    mathsQues();
    function check() {
        if (result == inpEle.value) {
            counter++;
        }
        else{
            counter--;
        }
        document.getElementById('count').innerText = counter;
        inpEle.value = null;
        mathsQues();
    }
    btnEle.addEventListener('click',check);



