document.getElementById("sumForm").addEventListener("submit", function (event)
 {
    event.preventDefault();

    let input = document.getElementById("numberInput").value;
    let sum = 0;

    while (input > 0) {
        let digit = input % 10;
        sum += digit;
        input = Math.floor(input / 10);
    }

    document.getElementById("result").innerText = "Sum of digits: " + sum;
});