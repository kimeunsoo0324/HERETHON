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

document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.querySelector('.toggle-button');
    var slideContainer = document.querySelector('.slide-container');

    toggleButton.addEventListener('click', function() {
        slideContainer.classList.toggle('active');

        if (slideContainer.classList.contains('active')) {
            toggleButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none">
                <circle cx="33" cy="33" r="33" fill="#F0E0FF"/>
                <path d="M41.8111 25.0007L25 41.8118" stroke="#C592F9" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M41.8111 41.811L25 25" stroke="#C592F9" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
        } else {
            toggleButton.innerHTML = `<svg class="up" xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none">
                <circle cx="33" cy="33" r="33" fill="#F0E0FF"/>
                <path d="M33.5001 45L33.5001 21.1221" stroke="#C592F9" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M33.5 21.0288L22 32.4791" stroke="#C592F9" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M33.5001 21.0288L45.0001 32.4791" stroke="#C592F9" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
        }
    });
});

// 검색창을 누르면 search.html로 이동하는 코드

// var inputElement = document.querySelector('.search-bar');

// inputElement.addEventListener('click', function() {
//   window.location.href = 'search.html';
// });