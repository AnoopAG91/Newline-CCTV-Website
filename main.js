// counter js 

let valueDisplays = document.querySelectorAll('.counter');
let completionTime = 4000; // Completion time in milliseconds

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'));
    let duration = Math.floor(completionTime / Math.sqrt(endValue)); // Adjusted duration
    let counter = setInterval(function(){
        startValue += Math.ceil(endValue / (completionTime / duration));
        if (startValue >= endValue) {
            startValue = endValue; // Ensure exact end value is displayed
            clearInterval(counter);
        }
        valueDisplay.textContent = startValue;
    }, duration);
});


