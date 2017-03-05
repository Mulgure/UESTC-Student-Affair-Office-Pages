(function() {
    var wrapper = document.getElementById('wrapper');
    var imgList = document.getElementById("imgList");
    var buttons = document.getElementById('indexList').getElementsByTagName('li');
    var index = 1;
    var timer;

    function animate(offset) {
        var newLeft = parseInt(imgList.style.left) + offset;
        imgList.style.left = newLeft + 'px';
                //无限滚动判断
        if (newLeft > 0) {
            imgList.style.left = -2620 + 'px';
        }
        if (newLeft < -2620) {
            imgList.style.left = 0 + 'px';
        }
    }

    function play() {
        timer = setInterval(function() {
            nextPic();
        }, 1000);
    }

    function stop() {
        clearInterval(timer);
    }

    function buttonClick() {
        for(var i = 0; i < buttons.length; i++) {
            if(buttons[i].className == 'on') {
                buttons[i].className = "";
            }

            buttons[index - 1].className = 'on';
        }
    }

    function nextPic() {
        index += 1;
        if (index > 5) {
            index = 1;
        }
        animate(-655);
        buttonClick();
    };

    for (var i = 0; i < buttons.length; i++) {
        (function(i) {
            buttons[i].onclick = function() {
                var clickIndex = parseInt(this.getAttribute('index'));
                var offset = 655 * (index - clickIndex);
                animate(offset);
                index = clickIndex;  // 存放鼠标点击后的位置，用于小圆点的正常显示
                buttonClick();
            };
        })(i);
    }

    wrapper.onmouseover = stop;
    wrapper.onmouseout = play;
    play();
})();
