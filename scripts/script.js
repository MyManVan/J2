const loadingSection = document.getElementById('loading');
const loadStop = document.getElementById('loadstop');
const loadCircle = document.querySelector('div.circle');
const j2logo = document.querySelector('#loading img');
const circleMenuLeft = document.getElementById('circleLeft');
const circleMenuRight = document.getElementById('circleRight');
const homeSectionText = document.querySelector('#homeSection p');
const workSectionSlideText = document.querySelector('#workSection #slide1 p');
var circleMenuLeftRotation = 0;
var circleMenuRightRotation = 0;
function contentChange () {
    if (window.innerWidth > 600) {
        homeSectionText.textContent = "Scroll down to get started";
        workSectionSlideText.textContent = "Click an arrow to view our work";
    } else {
        homeSectionText.textContent = "Swipe up to get started";
        workSectionSlideText.textContent = "Swipe left to view our work";
    }
}

document.addEventListener('load', function() {
    contentChange();
});

var myFullpage = new fullpage('#fullpage', {
        licenseKey: '32FDC319-24F94392-ABCB0861-ECB0F5E9',
        anchors: ['home', 'about', 'work', 'talk'],
        navigation: true,
        navigationPosition: 'left',
        scrollingSpeed: 400,
        onLeave: function(origin, destination, direction){
            circleMenuLeftRotation+=90;
            circleMenuLeft.style.transform = `translateY(-50%) rotate(${circleMenuLeftRotation}deg)`;
            circleMenuRightRotation-=90;
            circleMenuRight.style.transform = `translateY(-50%) rotate(${circleMenuRightRotation}deg)`;
        },
        onSlideLeave: function(section, origin, destination, direction){
            circleMenuLeftRotation+=90;
            circleMenuLeft.style.transform = `translateY(-50%) rotate(${circleMenuLeftRotation}deg)`;
            circleMenuRightRotation-=90;
            circleMenuRight.style.transform = `translateY(-50%) rotate(${circleMenuRightRotation}deg)`;
        },
        loopBottom: true,
        loopTop: true
});

window.addEventListener("resize", () => {
    contentChange();
});