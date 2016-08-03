function move()
{
	var elem = document.getElementById("myBar");
	var lb=document.getElementById("label");
	var val=document.getElementById("inp").value;
		var width = 0;
  if(val >100)
    {
 document.getElementById("error").innerHTML="Incorrect, Your value is greater than 100";
    }
  else
    {
     if(val==0)
     elem.style.width = width + '%'; document.getElementById("error").innerHTML="";
  var id = setInterval(frame, 10);
  function frame() {
    if (width == val) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 

    }
  }

		lb.innerHTML=val*1+'%';
}
}