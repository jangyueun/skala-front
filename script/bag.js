function showMyBag() {
    var myBag = [
        { name: "안경 👓", count: 1 },
        { name: "에어팟 🎧", count: 1 },
        { name: "지갑 👛", count: 1 },
        { name: "틴트 💄", count: 1 }
    ];

    var resultText = "🎒 [내 가방 속 물품 목록]\n";
    resultText = resultText + "-----------------------\n";

    for (var i in myBag) {
        resultText = resultText + "- " + myBag[i].name + " : " + myBag[i].count + "개\n";
    }

    resultText = resultText + "-----------------------\n";
    resultText = resultText + "총 물품 종류: " + myBag.length + "가지";

    alert(resultText);
}