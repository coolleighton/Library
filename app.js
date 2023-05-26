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
    displayBooks()
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
    this.read = read
}

// take data from form and pus to array //

function createAndPushBookToArray() {

    let book = new createBookObject(titleInput.value, authorInput.value, pagesInput.value, readInput.value)

    myLibrary.push(book)
}

// Function to loop through array and display Books on page //

function displayBooks() {

    grid.innerHTML = ""

    for (var i = 0; i < myLibrary.length; i++) {

        const bookCard = document.createElement("div")
        bookCard.classList.add("card")

        const bookTitle = document.createElement("p")
        bookTitle.textContent = '"' + myLibrary[i].title + '"'

        const bookAuthor = document.createElement("p")
        bookAuthor.textContent = "by " + myLibrary[i].author

        const bookPages = document.createElement("p")
        bookPages.textContent = myLibrary[i].pages + " pages"

        const readButton = document.createElement("button")
        readButton.classList.add("read-btn")
        readButton.textContent = "Read"

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
