let myLibrary = []

// Selectors //

const grid = document.querySelector("#book-grid")
const addBookBtn = document.querySelector("#add-book")
const bookFormContainer = document.querySelector("#book-form-container")
const greyTint = document.querySelector("#grey-tint")

const titleInput = document.querySelector("#title-input")
const authorInput = document.querySelector("#author-input")
const pagesInput = document.querySelector("#pages-input")
const readInput = document.querySelector("#read-input")
const submitBtn = document.querySelector("#submitBtn")
const bookForm = document.querySelector("#book-form")

// Event listeners // 
// Remove book and read status event listener is added whithin displayBooks() //

addBookBtn.addEventListener("click", function() {
    displayBookForm()
})

greyTint.addEventListener("click", function() {
    hideBookForm()
})

bookForm.addEventListener("submit", function(e) {
    hideBookForm()
    e.preventDefault()
    createAndPushBookToArray()
    createAndDisplayBooks()
    AddremoveBtnEventListener()
})

// Function to display add book form //

function displayBookForm() {
    bookFormContainer.style.display = "block"
    greyTint.style.display = "block"
}

// Function to hide add book form //

function hideBookForm() {
    bookFormContainer.style.display = "none"
    greyTint.style.display = "none"
}

// Function to construct book object //
 
function createBookObject(title, author, pages, read) {

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read;
}

// Function to take data from form and push to array //

function createAndPushBookToArray() {

    let book = new createBookObject(titleInput.value, authorInput.value, pagesInput.value, readInput.checked)

    myLibrary.push(book)

    titleInput.value = ""
    authorInput.value = ""
    pagesInput.value = ""
    readInput.checked = false
}

// Add remove button event listeners // 

function AddremoveBtnEventListener() {
    let remover = document.querySelectorAll(".remove-btn")

    for (var i = 0; i < myLibrary.length; i++) {

        remover[i].addEventListener("click", function(e) {

            myLibrary.splice(e.target.dataset.id, 1)
            e.target.parentNode.remove()
        })
    }
}

// Function to loop through array, create book cards and then display them on the page //

function createAndDisplayBooks() {

    grid.innerHTML = ""

    for (var i = 0; i < myLibrary.length; i++) {

        const bookCard = document.createElement("div")
        bookCard.classList.add("card")
        bookCard.setAttribute("data-id", [i])

        const bookTitle = document.createElement("p")
        bookTitle.textContent = '"' + myLibrary[i].title + '"'

        const bookAuthor = document.createElement("p")
        bookAuthor.textContent = "by " + myLibrary[i].author

        const bookPages = document.createElement("p")
        bookPages.textContent = myLibrary[i].pages + " pages"

        const readButton = document.createElement("button")

        if (myLibrary[i].read) {
            readButton.classList.add("read-btn")
            readButton.textContent = "Read"
        }

        else {
            readButton.classList.add("not-read-btn")
            readButton.textContent = "Not read"
        }

        const removeButton = document.createElement("button")
        removeButton.classList.add("remove-btn")
        removeButton.textContent = "Remove"

        bookCard.appendChild(bookTitle)
        bookCard.appendChild(bookAuthor)
        bookCard.appendChild(bookPages)
        bookCard.appendChild(readButton)
        bookCard.appendChild(removeButton)

        grid.append(bookCard)
    }
}





