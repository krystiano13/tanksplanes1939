const TankImg = document.querySelector('#tankImg');
const PlaneImg = document.querySelector('#planeImg');
const HomeBtn = document.querySelector('#HomeBtn')

TankImg.addEventListener('click',function(){
    window.location.href = "ChooseTanks.html";
});
PlaneImg.addEventListener('click',function(){
    window.location.href = "ChoosePlanes.html";
});
HomeBtn.addEventListener('click',function(){
    window.location.href = "index.html";
});