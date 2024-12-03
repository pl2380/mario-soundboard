let day = new Date().getDay();
let title = document.getElementById("title");
let bg = document.querySelector('body');


//day of the week
if (day==1 || day == 3 || day == 5){
    title.textContent="Welcome to Studio Ghibli";
}
else {
    bg.style.backgroundColor="lightblue";
}


//dom events
function changeContent(){
    let flip = Math.round(Math.random());
    let image; 
    if (flip == 0) {
        image = "totoro.png"; 
    } else {
        image = "https://images.gr-assets.com/hostedimages/1489104577ra/22185966.gif";
    }
    picture = document.querySelector('#totoro img');
    picture.src = image; 
    
}

function changeCSS(){
    const background = document.querySelector('body');
    let randomHue = Math.floor(Math.random() * 360);
    background.style.backgroundColor = 'hsl(' + randomHue + ', 35%, 20%)';

}
let button = document.getElementById('button');
button.addEventListener("click", changeContent);
button.addEventListener("click", changeCSS);