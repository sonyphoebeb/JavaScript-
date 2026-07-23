function reverseNumber() {
    let input = Number(document.getElementById("numberInput").value);
    let rev = 0;
    while (input > 0) {
        let digit = input % 10;
        rev = rev * 10 + digit;
        input = Math.floor(input / 10);
    }
    document.getElementById("result").innerHTML = "Reversed Number: " + rev;
}