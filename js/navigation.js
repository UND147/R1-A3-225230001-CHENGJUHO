document.addEventListener('DOMContentLoaded', function() {
    
    // 1. URL에서 쿼리 문자열 제거
    var urlPath = window.location.pathname.split('?')[0];

    // 2. 파일 이름만 추출 및 정리 (루트 경로 '/'일 때 'index.html'로 설정)
    var currentFile = urlPath.split("/").pop(); 
    if (currentFile === "") { 
        currentFile = "index.html"; 
    }
    
    // 3. 네비게이션 내 모든 <a> 태그를 찾습니다.
    var navLinks = document.querySelectorAll('nav a');
    
    // 4. 각 링크를 반복하며 현재 파일과 일치하는지 확인하여 클래스를 설정합니다.
    navLinks.forEach(function(link) {
        var linkHref = link.getAttribute('href').split('?')[0];

        // 페이지가 새로 로드되므로, 기존 active 클래스를 제거합니다.
        link.classList.remove('active'); 

        // 일치하는 링크에 'active' 클래스를 추가합니다.
        if (linkHref === currentFile) {
            link.classList.add('active');
        }
    });
});