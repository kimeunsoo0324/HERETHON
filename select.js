// 이미지 드래그 이동 기능 추가
var map = document.getElementById('map');
var isDragging = false;
var startX, startY, offsetX = 0, offsetY = 0;

map.addEventListener('mousedown', function(event) {
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
});

map.addEventListener('mousemove', function(event) {
    if (isDragging) {
        var deltaX = event.clientX - startX;
        var deltaY = event.clientY - startY;
        map.style.left = offsetX + deltaX + 'px';
        map.style.top = offsetY + deltaY + 'px';
    }
});

map.addEventListener('mouseup', function() {
    isDragging = false;
    offsetX += map.offsetLeft;
    offsetY += map.offsetTop;
});