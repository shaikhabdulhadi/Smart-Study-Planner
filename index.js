function makePlan() {
    let task = document.querySelector("#input input[type='text']").value;
    let date = new Date(document.querySelector("#input input[type='date']").value);
    let difficulty = document.querySelector("#difficulty").value;
    let today = new Date();

    let diffTime = date - today;
    let days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let result = "";
    let time = 0
    if (difficulty === "hard"){
        time = 240;
    } else if (difficulty === "medium"){
        time = 120;
    } else {
        time = 60
    };
    if (!task || !date || difficulty === "Choose difficulty") {
        result = "Please fill in all fields!";
    } else if (days === 0) {
        result = "It's due today — no time to plan! 💀";
    } else if (days < 0) {
        result = `That date was ${Math.abs(days)} day(s) ago. It's already overdue!`;
    } else {
        let minutesPerDay = Math.ceil(time / days);
        for (let i=1; i<= days; i++){
            result += `day ${i}: Work on ${task} for ${minutesPerDay} minutes<br>`;
        }
    }

    const output = document.getElementById("Output");
    output.innerHTML = result;
    output.style.animation = "none";
    output.offsetHeight;
    output.style.animation = "fadeSlideIn 0.4s ease";
}