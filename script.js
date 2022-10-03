let Son = document.querySelector(".son");
let Father = document.querySelector(".father");

let Little = document.createElement("input");

function get(e) {
    Son.append(Little)
    // e.target.innerHTML = "<input/><strong>yosef</strong>"
}
Father.addEventListener("click", get)
Son.addEventListener("click", (e) => { console.log("onClick =>") })

Father.removeEventListener("click", get)
// console.dir(Grandpa)

// Grandpa.innerHTML = "<input/><strong>yosef</strong>"// אפשרות להוסיף אלמנט פחות נפוצה


