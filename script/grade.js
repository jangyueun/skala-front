function calculateGrade() {
    var subjects = ["HTML", "CSS", "JavaScript"];
    var total = 0;

    for (var i = 0; i < subjects.length; i++) {
        var scoreText = prompt(subjects[i] + " 점수를 입력해 주세요. (0 ~ 100)");

        if (scoreText === null) {
            alert("성적 계산을 취소했습니다.");
            return;
        }

        var score = Number(scoreText);

        if (scoreText.trim() === "" || isNaN(score)) {
            alert("올바른 숫자가 입력되지 않아 계산을 취소합니다.");
            return;
        }

        total = total + score;
    }

    var average = total / subjects.length;
    var result = "";

    if (average >= 60) {
        result = "합격입니다. 기준 점수 이상입니다.";
    } else {
        result = "불합격입니다. 다음 기회에 다시 도전해 봐요.";
    }

    alert(
        "====== 📊 성적 결과 ======\n" +
        "총점: " + total + "점\n" +
        "평균: " + average.toFixed(1) + "점\n" +
        "---------------------------\n" +
        "결과: " + result
    );
}

function checkGrade() {
    calculateGrade();
}
