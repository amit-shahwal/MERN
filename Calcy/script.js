var buttons = document.querySelectorAll(".opera");
buttons.forEach(item=>{
item.addEventListener("click",(e)=>{

e.preventDefault();
var op1 = parseInt(document.getElementsByName("op1")[0].value);
var op2 = parseInt(document.getElementsByName("op2")[0].value);
var res=0;
document.getElementsByClassName("disop")[0].textContent = item.name;
switch(item.name)
{
    case "add": {
        res=op1+op2; console.log(res);
        document.getElementsByClassName("screen")[0].textContent = res.toString();
        break;
    }
    case "sub": {
        res=op1-op2; console.log(res);
        document.getElementsByClassName("screen")[0].textContent = res.toString();
        break;
    }
    case "mul": {
        res=op1*op2; console.log(res);
        document.getElementsByClassName("screen")[0].textContent = res.toString();
        break;
    }
    case "div": {
        if(op2!=0)
        res=op1/op2; 
        else
        res = "Infinity";
        console.log(res); console.log(res);
        document.getElementsByClassName("screen")[0].textContent = res.toString();
        break;
    }
    case "rem": {
        if(op2!=0)
        res=op1%op2; 
        else
        res = "Infinity";
        console.log(res);
        document.getElementsByClassName("screen")[0].textContent = res.toString();
        break;
    }
    case "pow": {
        res=Math.pow(op1,op2); console.log(res);
        document.getElementsByClassName("screen")[0].textContent = res.toString();
        break;
    }
    case "oor": {
        res=op1|op2; console.log(res);
        document.getElementsByClassName("screen")[0].textContent = res.toString();
        break;
    }
    case "and": {
        res=op1&op2; console.log(res);
        document.getElementsByClassName("screen")[0].textContent = res.toString();
        break;
    }
    case "xor": {
        res=op1^op2; console.log(res);
        document.getElementsByClassName("screen")[0].textContent = res.toString();
        break;
    }

}



})


})