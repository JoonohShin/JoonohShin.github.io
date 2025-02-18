// 📌 부드러운 스크롤 기능 추가
document.querySelectorAll('.bottom-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 📌 카카오맵 API 설정
function loadMap() {
    var container = document.getElementById('map'); // 지도를 표시할 div
    var options = {
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 서울 시청 좌표 (예제)
        level: 3 // 확대 레벨
    };

    var map = new kakao.maps.Map(container, options);
}

// 카카오맵 API 로드
window.onload = loadMap;
