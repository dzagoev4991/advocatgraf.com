var butten1 =document.getElementById('btn1');
var butten2 =document.getElementById('btn2');
var s
var n=1;
var i=1;
var arry= ["ПРОФЕССИОНАЛИЗМ","КОНФИДЕНЦИАЛЬНОСТЬ","КОМПЕТЕНТНОСТЬ", "ОТВЕТСТВЕННОСТЬ" ];

setInterval(changeWord ,4000);

    function changeWord()
    {
      /*  if(i>3){i=0;}
        var pc = document.getElementById('chang');
        pc.innerHTML=arry[i];
        pc.style.opacity=1
        i=i+1;*/
       setTimeout(opa ,1000);
    }

    function opa(){
        
        var pc1 = document.getElementById('chang');
        
        
        if(i>3){i=0;}
        pc1.innerHTML=arry[i];
        if(pc1.style.opacity==1&i==n)
        {pc1.style.opacity=0;
            i=i+1;}
        else
        {if(i>3){i=0; pc1.innerHTML=arry[i];} n=i; pc1.style.opacity=1;}
        
        
    }


    function highdIt(s)
    {
        var highden = document.getElementById(s);
        if(highden.style.maxHeight==0)
        {
            highden.style.maxHeight= highden.scrollHeight +'px';
        }
        else
        {
            highden.style.maxHeight=null;
        }
    }

    function numberOnli()
    {
        
        var charIt = document.getElementById('telNum');
        if (isNaN(charIt.value))
        {alert("Тлько номет телефона ")
            charIt.value='';
        }
    }
    

    function emailS()
    {
        
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "dzagoev4991@yandex.com",
            Password : "E7EAE4B930BAAEA35D2072F9BC0316191254",

            To : "dzagoev4991@gmail.com",
            From : "dzagoev4991@gmail.com",
            
            Subject : "This is the subject",
            Body : "And this is the body"
           
        }).then(
        message => alert(message)
        ); alert('hi');
    }
