let count = 0;

// let btn1 = document.querySelector('.Increse');
// console.log(btn1);

let span = document.getElementById('span')
console.log(span);

let Incresebtn = document.querySelector('.Increse');

let Decresebtn = document.querySelector('.Decrese');

let resetbtn = document.querySelector('.reset');


// console.log(Incresebtn);
// console.log(Decresebtn);
// console.log(resetbtn);

Incresebtn.addEventListener('click' , function(){
    count++;
    span.textContent = count
})

Decresebtn.addEventListener('click' , function(){
    count--;
    span.textContent = count;
})


resetbtn.addEventListener('click' , function(){
    count = 0;
    span.textContent = count;
})











// let buttons  = document.querySelectorAll(".btn_container")
// console.log(buttons);

// buttons.forEach(function (item) {
//     // console.log(item);


//     item.addEventListener('click' , function(e){
// const style = e.currentTarget.classList;

// if(style.contains("Increse")){
//     count--;
// }
// span.textContent = count ;
//     });
// });
