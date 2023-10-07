const form = document.querySelector("form")
const input = document.querySelector("form input")
const ul = document.querySelector("#collect")
const addedmusic = document.querySelector(".added")
const boom = document.querySelector(".boom")
form.addEventListener("submit", taskAdder)

function taskAdder(e) {
    e.preventDefault()
    let box = []
    box.push(input.value)
    console.log(box)
    // added music
    addedmusic.play()
    // -------
    box.map(item => {
        let li = document.createElement("li")
        li.classList = "task"
        ul.appendChild(li)

        let p = document.createElement("p")
        p.innerHTML = item
        li.appendChild(p)

        const a = document.createElement("a")
        li.appendChild(a)
        let i = document.createElement('i')
        i.className = "fa-solid fa-trash"
        a.appendChild(i)




        a.addEventListener("click", function (e) {

            let span = document.createElement("span")
            li.appendChild(span)
            span.className = "timer"
            let secund = 4
            let timer = setInterval(() => {
                if (secund === 0) {
                    clearInterval(timer)
                } else {
                    secund--
                }
                span.innerHTML = secund
            }, 1000);
            setTimeout(() => {
                boom.play()
                e.target.parentElement.parentElement.remove()
            }, 4000);


        })
    })

    input.value = ""
}




function deleteAll() {
    let listItems = ul.querySelectorAll(".task")
    listItems.forEach(item => {
        item.remove()
    })

}




const select = document.querySelector("select")

select.addEventListener("change", sortlash)

