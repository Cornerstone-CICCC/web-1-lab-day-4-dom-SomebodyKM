const firstNameInput = document.querySelector("#firstname")
const lastNameInput = document.querySelector("#lastname")
const emailInput = document.querySelector("#email")
const hireDateInput = document.querySelector("#hire_date")
const fileInput = document.querySelector('input[name="photo"]')
const employeeList = document.querySelector("#employeeList")
const form = document.querySelector("form")




form.addEventListener("submit", (event) => {
    event.preventDefault()

    const firstName = firstNameInput.value
    const lastName = lastNameInput.value
    const email = emailInput.value
    const hireDate = hireDateInput.value
    const filename = fileInput.files[0].name


    const tr = document.createElement("tr")

    const tdImage = document.createElement("td")
    tdImage.innerHTML = `<img class="photo" src="../images/${filename}" />`
    tr.appendChild(tdImage)
    const addFirstName = document.createElement("td")
    addFirstName.textContent = firstName
    tr.appendChild(addFirstName)
    const addLastName = document.createElement("td")
    addLastName.textContent = lastName
    tr.appendChild(addLastName)
    const addEmail = document.createElement("td")
    addEmail.textContent = email
    tr.appendChild(addEmail)
    const addHireDate = document.createElement("td")
    addHireDate.textContent = hireDate
    tr.appendChild(addHireDate)
    const addBtn = document.createElement("td")
    addBtn.innerHTML = `<button>Delete</button>`
    addBtn.addEventListener("click", () => {
        const isDeleting = confirm("Are you sure you want to delete this employee?")

        if (isDeleting) {
            tr.remove()
        }
    })
    tr.appendChild(addBtn)


    employeeList.appendChild(tr)
    form.reset()
})



