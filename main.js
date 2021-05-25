
canvas = document.getElementById("canvas");
ctx= canvas.getContext("2d");

color = "red"; 
radius = 2*Math.PI; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , radius);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);
    radius = document.getElementById("radius").value;
    console.log(radius);
    
     mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);    
}

function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , radius);
ctx.stroke();
}


function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
