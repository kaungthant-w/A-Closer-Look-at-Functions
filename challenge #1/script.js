const poll = {
    question : "What is your favourite programming Language?",
    options : ['0:javascript', '1:Python', '2:Rust', '3:C++'],

    answers : new Array(4).fill(0),
    registerNewAnswer() {
        //get answer
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join("\n")}\n(Write option number)`
            )

            )
            // console.log(answer);

            typeof answer ==="number" && answer < this.answers.length && answer < this.answers[answer]++;

            console.log(this.answers);
            this.displayResults();
            this.displayResults("string");
    } ,

    displayResults(type = "array") {
        if(type === "array") {
            console.log(this.answers);
        } else if (type === "string") {
            console.log(`poll results are ${this.answers.join(", ")}`);
        }
    }
}

// poll.registerNewAnswer();

document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers : [5, 2, 3]}, "string");

poll.displayResults.call({answers: [1, 4, 3, 9, 6, 1]});
poll.displayResults.call({answer: [323232313441312]});