var nowIndex = 0;
var leftBtn = document.querySelector('.left');
var rightBtn = document.querySelector('.right');
var oLi = document.querySelectorAll('.list li');
var wrapper = document.querySelector('.wrapper');
var picBox = document.querySelector('.picBox');
var len = $('.picBox li').length;
var timer;
function init() {
    bindEvent();
    sliderAuto();
}
init();
function bindEvent() {
    rightBtn.onclick = leftBtn.onclick = function (e) {
        var tar = this.className;
        move(tar);
    }
    for(let i = 0; i < oLi.length; i ++){
        oLi[i].onclick = function (e) {
            move(i);
        }
    }
    wrapper.onmouseenter = function (){
        clearInterval(timer);
    }
    wrapper.onmouseleave = function () {
        sliderAuto();
    }
}

function sliderAuto() {
    clearTimeout(timer);
    timer = setTimeout(function () {
        move('right');
    }, 2000);
}

function move(dir) {
    if (dir == 'right' || dir == 'left') {
        if (dir == 'right') {
            nowIndex++;
            nowIndex = nowIndex > len - 1 ? 0 : nowIndex;
            sliderAuto();
        } else {
            nowIndex--;
            nowIndex = nowIndex < 0 ? len - 1 : nowIndex;
        }
    } else {
        nowIndex = dir;
    }
    picBox.style.left = -nowIndex * 700 + 'px';
    $('.picBox li').eq(nowIndex).animate({
        'opacity': 1
    }, 800);
    $('.picBox li').not(nowIndex).css('opacity', 0);
    changeStyle();
}

function changeStyle() {
    $('.active').removeClass('active');
    $('.list li').eq(nowIndex).addClass('active');
}