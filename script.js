document.addEventListener('DOMContentLoaded', function() {
    console.log('網站已載入');

    document.addEventListener('click', function(event) {
        var img = document.createElement('img');
        img.src = 'images/1010.gif';
        img.classList.add('click-effect');
        img.style.left = event.pageX + 'px';
        img.style.top = event.pageY + 'px';
        img.style.width = '50px'; // 根據需要調整圖片寬度
        img.style.height = '50px'; // 根據需要調整圖片高度
        document.body.appendChild(img);

        setTimeout(function() {
            img.style.opacity = '0';
            img.style.transform = 'translateY(-100px)';
        }, 500); // 0.5秒後開始淡出

        setTimeout(function() {
            img.remove();
        }, 1000); // 1秒後完全隱藏並移除
    });
});
