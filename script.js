console.log("Hello World")

var btn = document.querySelector("button")
var main = document.querySelector("main")

btn.addEventListener('click', function()
{
    console.log("Hello")

    var ele=document.createElement('div')

    var x=Math.random()*100;
    var y=Math.random()*100;

    var c1=Math.floor(Math.random()*256)
    var c2=Math.floor(Math.random()*256)
    var c3=Math.floor(Math.random()*256)

    ele.style.height='100px';
    ele.style.width='100px';
    ele.style.backgroundColor='red';
    ele.style.position='absolute';
    ele.style.left=x+'%';
    ele.style.top=y+'%';
    ele.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`
    console.log(ele)

    main.appendChild(ele)
})