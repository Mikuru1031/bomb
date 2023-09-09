// センサーの許可
const permissionBtn = document.querySelector("#permissionBtn");
permissionBtn.addEventListener("click", () => {
    DeviceOrientationEvent.requestPermission().then( function( response ){
        if( response === 'granted' ){
            window.addEventListener("deviceorientation", deviceOrientation);
        }
    })
})
window.addEventListener("devicemotion", deviceOrientation);

const bakudan = document.querySelector("img");

function deviceOrientation() {
    if(event.accelerationIncludingGravity.x >= 25 || event.accelerationIncludingGravity.y >= 25) {
        bakudan.setAttribute("src", "./images/bakuhatsu4.png");
        setTimeout(() => {
            bakudan.setAttribute("src", "./images/bakudan.png");  
        }, 1500);
    }
}