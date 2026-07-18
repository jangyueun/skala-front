function startUpDownGame() {
    var computerNum = Math.floor(Math.random() * 50) + 1;
    var count = 0;

    console.log("이번 게임의 정답 숫자: " + computerNum);

    while (true) {
        var answer = prompt("1부터 50 사이의 숫자 중 컴퓨터가 생각한 숫자는 무엇일까요?");

        if (answer === null) {
            alert("게임이 취소되었습니다.");
            break;
        }

        var userGuess = Number(answer);

        if (answer.trim() === "" || isNaN(userGuess)) {
            alert("올바른 숫자를 입력하지 않았습니다. 다시 시도해 주세요.");
            continue;
        }

        count = count + 1;

        if (userGuess === computerNum) {
            alert("🎉 정답입니다! 축하합니다!\n도전 횟수: " + count + "번 만에 맞췄습니다.");
            break;
        } else if (userGuess > computerNum) {
            alert("Down! 더 작은 숫자를 입력해 보세요. (현재 " + count + "회 도전 중)");
        } else {
            alert("Up! 더 큰 숫자를 입력해 보세요. (현재 " + count + "회 도전 중)");
        }
    }
}

function startGame() {
    startUpDownGame();
}
