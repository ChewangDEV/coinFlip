const btn =  document.querySelector('#flipBtn');
const img = document.querySelector('img');
const h1 = document.querySelector('h1');
const counters = document.querySelectorAll('.counters p');


let headCount = 0;
let tailCount = 0;
let userChoice = '';

document.querySelector('#headBtn').addEventListener('click', () => {
    userChoice = 'head';
    document.querySelector('#choice').innerHTML = 'You chose Head';
});

document.querySelector('#tailBtn').addEventListener('click', () => {
    userChoice = 'tail';
    document.querySelector('#choice').innerHTML = 'You chose Tail';
});



btn.addEventListener('click', () => {
    if (!userChoice) {
        document.querySelector('#result').innerHTML = 'Please select head or tail!';
        return;
    }
img.classList.remove('animation');
img.offsetWidth; // reset
img.classList.add('animation');
    const random = Math.floor(Math.random() * 2) + 1;
    let coinResult = '';
    h1.innerHTML = 'Flipping...';
    img.src = './dollar.png';
    btn.disabled = true;
    setTimeout(() => {
        if(random === 1){
        img.src = './head.png';
        coinResult  = 'head';
        h1.innerHTML = 'It\'s a Head!';
        headCount++;
        counters[0].innerHTML = `Head: ${headCount}`;
    }else{
        img.src = './tail.png';
        coinResult = 'tail';
        h1.innerHTML = 'It\'s a Tail!';
        tailCount++;
        counters[1].innerHTML = `Tail: ${tailCount}`;
    }

    if(userChoice === coinResult){
        document.querySelector('#result').innerHTML = `You chose ${userChoice} and coin landed on ${coinResult}. <span>You win!</span>`;
    }else{  
        document.querySelector('#result').innerHTML = `You chose ${userChoice} and coin landed on ${coinResult}. <span id='lose'>You lose!</span>`;
    }
    btn.disabled = false;
}, 1000);



});