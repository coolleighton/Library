let myLibrary = [
]

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
    createAndDisplayBooks()
    clearForm()
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

// Function to clear form //

function clearForm() {

    titleInput.value = ""
    authorInput.value = ""
    pagesInput.value = ""
    readInput.checked = false
}

// Function to construct book object //
 
function createBookObject(title, author, pages, read,) {

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read;
}

// Function to loop through array, create book cards and then display them on the page //

function createAndDisplayBooks(i) {

    let book = new createBookObject(titleInput.value, authorInput.value, pagesInput.value, readInput.checked)

    myLibrary.push(book)

    const bookCard = document.createElement("div")
        bookCard.classList.add("card")
        bookCard.setAttribute("data-id", [i])

    const bookTitle = document.createElement("p")
        bookTitle.textContent = '"' + book.title + '"'

    const bookAuthor = document.createElement("p")
    bookAuthor.textContent = "by " + book.author

    const bookPages = document.createElement("p")
    bookPages.textContent = book.pages + " pages"

    const readButton = document.createElement("button")
    readButton.classList.add("read-switch")

    // Update read status button //

    if (book.read) {
        readButton.classList.add("read-btn")
        readButton.textContent = "Read"
    }

    else {
        readButton.classList.add("not-read-btn")
        readButton.textContent = "Not read"
    }

    readButton.addEventListener("click", function() {
            
        book.read = !book.read
            
        if (book.read) {
            readButton.classList.add("read-btn")
            readButton.textContent = "Read"
            }
    
        else {
            readButton.classList.add("not-read-btn")
            readButton.textContent = "Not read"
            }
        })

    // Remove book button //

    const removeButton = document.createElement("button")
    removeButton.classList.add("remove-btn")
    removeButton.textContent = "Remove"

    removeButton.addEventListener("click", function(e) {

        myLibrary.splice(e.target.dataset.id, 1)
        e.target.parentNode.remove()
        console.log(myLibrary)
    })

    bookCard.appendChild(bookTitle)
    bookCard.appendChild(bookAuthor)
    bookCard.appendChild(bookPages)
    bookCard.appendChild(readButton)
    bookCard.appendChild(removeButton)

    grid.append(bookCard)

    }