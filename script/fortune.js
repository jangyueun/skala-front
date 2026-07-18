function showTodayFortune() {
    var fortunes = [
        "HTML 태그가 착착 정리되는 날이에요.",
        "CSS 색감이 마카롱처럼 부드럽게 맞아떨어질 운세예요.",
        "JavaScript 함수가 평소보다 잘 이해되는 하루예요.",
        "작은 오류도 차분히 보면 금방 해결될 운세예요.",
        "오늘은 console.log가 든든한 친구가 되어줄 거예요.",
        "새로 배운 내용을 내 스타일로 응용하기 좋은 날이에요."
    ];

    var randomIndex = Math.floor(Math.random() * fortunes.length);

    alert("🍀 오늘의 개발 운세\n\n" + fortunes[randomIndex]);
}
