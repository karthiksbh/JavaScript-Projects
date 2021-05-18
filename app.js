const button_div=document.getElementById("buttons")
let answerval=0;
let output_span=document.getElementById("outputdis")
const op1=document.getElementById("1");
const op2=document.getElementById("2");
const op3=document.getElementById("3");
const op4=document.getElementById("4");
const op5=document.getElementById("5");
const op6=document.getElementById("6");


function getValue()
{
    const values=['1','2','3','4','5','6']
    returnValue=(Math.floor(Math.random()*6));
    return values[returnValue];
}



function dispValue(op)
{
    answerval=op;
    output_span.innerHTML="The die shows " + answerval + "!!!!";
    if(op==1)
    {
        document.getElementById("1").classList.add('greenglow');
        setTimeout(function() { document.getElementById("1").classList.remove('greenglow')},500);
    }
    else if(op==2)
    {
        document.getElementById("2").classList.add('greenglow');
        setTimeout(function() { document.getElementById("2").classList.remove('greenglow')},500);
    }
    else if(op==3)
    {
        document.getElementById("3").classList.add('greenglow');
        setTimeout(function() { document.getElementById("3").classList.remove('greenglow')},500);
    }
    else if(op==4)
    {
        document.getElementById("4").classList.add('greenglow');
        setTimeout(function() { document.getElementById("4").classList.remove('greenglow')},500);
    }
    else if(op==5)
    {
        document.getElementById("5").classList.add('greenglow');
        setTimeout(function() { document.getElementById("5").classList.remove('greenglow')},500);
    }
    else
    {
        document.getElementById("6").classList.add('greenglow');
        setTimeout(function() { document.getElementById("6").classList.remove('greenglow')},500);
    }
}


function main()
{
    button_div.addEventListener('click',function(){
        var op=getValue();
        dispValue(op);
    })
}

main();
