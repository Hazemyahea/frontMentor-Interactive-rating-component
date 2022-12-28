const submit_btn = document.querySelector('.btn_submit');
const btns_box = document.querySelector('ul');
const box1 = document.querySelector('#box_1');
const box2 = document.querySelector('#box_2');
const h4 = document.querySelector('h4');
let score;
btns_box.addEventListener('click',(e)=>{
    if (e.target.getAttribute('data-number')) {
        e.target.style.backgroundColor = 'hsl(25, 97%, 53%)';
        e.target.style.color = '#fff';
        score = e.target.getAttribute('data-number');
    }
    
})

submit_btn.addEventListener('click',(e)=>{
    if (score) {
        box1.classList.add('none');
    box2.classList.remove('none');
    h4.textContent = `You selected ${score} out of 5`;
}else{
    alert('Please Chosse Number :)');
}
    
});