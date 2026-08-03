var allbtn= document.querySelectorAll('button')

allbtn.forEach((ele)=>{
    console.log('Hi')

    ele.addEventListener('click',()=>{
        if(ele.innerHTML==='Follow')
            ele.innerHTML='UnFollow'
        else
            ele.innerHTML='Follow'
    })
})