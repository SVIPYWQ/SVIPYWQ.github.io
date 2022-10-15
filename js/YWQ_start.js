document.body.insertAdjacentHTML("beforeend", `<div id=particles-js></div>`)

function addelement() {
    const aar = ["../js/particles.js", "../js/app.js"]
    const temp = []
    for (let i = 0; i < aar.length; i++) {
        temp[i] = document.createElement("script")
        temp[i].src = aar[i]
        document.body.appendChild(temp[i])
    }

}
addelement()



