
function ask(question, yes, no) {
    if (confirm(question)) {
        yes()
    }
    else {
        no()
    }
}

let noSea = function () {
    console.log("bhaaaaaaa");
    console.log("??!?!?!?!?!");
}

ask("do you like sea?!?!?!",
    () => {
        console.log("woowwww");
        console.log("🌊🌊🌊🌊🌊🌊🌊");
    }
    , noSea)

ask("do you like pizza?!?!?!",
    () => {
        alert("🍕🍕🍕🍕🍕");
    }
    , () => {
        console.log("??!?!?!?🧨🎆🧨🎇✨🧨!?!");
    })