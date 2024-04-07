let target = document.querySelector("#dynamic");

//커서 깜박임 효과를 줌
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);


function randomString(){
    let stringArr = [
        "Learn to HTML",
        "Learn to CSS",
        "Learn to Javascript",
        "Learn to Python",
        "Learn to Ruby"
    ]
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");   // 문자열(selectString)을 배열로 만듬

    return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

//한글자씩 텍스트 출력함수
function dynamic (randomArr){
    console.log(randomArr);

    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else{
        setTimeout(resetTyping, 3000);
    }
    
}
dynamic(randomString());

console.log(selectString);
console.log(selectStringArr);


