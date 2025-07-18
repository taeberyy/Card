const btn = document.getElementById('btn');
const music = document.getElementById('music');

btn.addEventListener("click", func, {once:true});

function func() {
    alert ("HAPPY 19TH BIRTHDAY, AYRUND!");
    music.play();
}