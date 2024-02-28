let btns = document.querySelectorAll(".btn");
let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");
let screen = document.querySelector(".output");
let result = document.querySelector(".res");
var ans;
var lastChar;
var count = false;
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(btn.innerText === "C"){
            screen.innerText = "";
            result.innerText = "Output is : " + "";
            result.classList.add("hide");
            count=false;
        }
        else if(btn.innerText === "="){
            try {
                ans = eval(screen.innerText);
            } catch (error) {
                ans = "Error";
            }
            result.innerText = "Output is : " + "";
            result_calc(ans);
        }
        else if(btn.innerText === "D"){
            if (screen.innerText !== "") {
                const charBeforeDeletion = screen.innerText.slice(-1); 
                screen.innerText = screen.innerText.slice(0, -1); 
                lastChar = screen.innerText.slice(-1); 
                if (screen.innerText === "") {
                    count = false; // 
                } else if ("*%/+-".includes(lastChar)) {
                    count = false; 
                } 
                else if("*%/+-".includes(charBeforeDeletion)){
                    count = true;
                }
            }  
        }
        
    });
});
    
numbers.forEach((number)=>{
    number.addEventListener("click",()=>{
        if(number.innerText !== "."){
            count = true;
        }
        else{
            count = false;
        }
        screen.innerText += number.innerText;
        result.innerText = "Output is : " + "";
        result.classList.add("hide");
        
    });
        
});
operators.forEach((op)=>{
    op.addEventListener("click",()=>{
        if(count === true){
            screen.innerText += op.innerText;
            result.innerText = "Output is : " + "";
            result.classList.add("hide");
        }
        count=false;
    });
        
});

function result_calc(val){
    result.innerText += val;
    result.classList.remove("hide");
    screen.innerText = "";
    count = false;
}