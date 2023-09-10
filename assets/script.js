const bakudan = document.querySelector("img");
const bakuhatsu = new Audio("./sounds/bakuhatsu.mp3");
let isExplosion = false;

// センサーの許可
const permissionBtn = document.querySelector("#permissionBtn");
permissionBtn.addEventListener("click", () => {
    DeviceOrientationEvent.requestPermission().then( function( response ){
        if( response === 'granted' ){
            window.addEventListener("deviceorientation", deviceOrientation);
        }
    })
    bakuhatsu.muted = true;
    explosion();
})
window.addEventListener("devicemotion", deviceOrientation);

//音を鳴らす
function playSound() {
    bakuhatsu.pause();
    bakuhatsu.currentTime = 0;
    bakuhatsu.play();
}

//起爆の処理
function explosion() {
    if(!isExplosion) {
        isExplosion = true;
        bakudan.setAttribute("src", "./images/bakuhatsu4.png");
        playSound();
        setTimeout(() => {
            bakudan.setAttribute("src", "./images/bakudan.png");
            isExplosion = false;
        }, 1000);
    }
}

//デバイスを振った時の処理
function deviceOrientation() {
    bakuhatsu.muted = false;
    if(event.accelerationIncludingGravity.x >= 25 || event.accelerationIncludingGravity.y >= 25) {
        explosion();
}}

//爆弾を押した時の処理
bakudan.addEventListener("click", () => {
    bakuhatsu.muted = false;
    explosion();
})