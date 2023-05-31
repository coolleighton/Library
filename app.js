let myLibrary = [
]

// Selectors //

const grid = document.querySelector("#book-grid")
const addBookBtn = document.querySelector("#add-book")
const bookFormContainer = document.querySelector("#book-form-container")
const greyTint = document.querySelector("#grey-tint")
const totalBooks = document.querySelector("#total-books")
const totalBooksRead = document.querySelector("#total-books-read")
const totalPages = document.querySelector("#total-pages")
const totalPagesRead = document.querySelector("#total-pages-read")

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
    createAndDisplayBook()
    updateStats()
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
 
function createBookObject(title, author, pages, read, dataId) {

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read;
    this.dataId = dataId
}

// Function to create book cards and then display them on the page //

function createAndDisplayBook() {

    let book = new createBookObject(titleInput.value, authorInput.value, pagesInput.value, readInput.checked, Date.now())

    myLibrary.push(book)

    const bookCard = document.createElement("div")
    bookCard.classList.add("card")
    bookCard.setAttribute("data-id", Date.now())
    
    const bookTitle = document.createElement("h3")
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
            readButton.classList.remove("not-read-btn")
            readButton.textContent = "Read"
            }
    
        else {
            readButton.classList.add("not-read-btn")
            readButton.classList.remove("read-btn")
            readButton.textContent = "Not read"
            }

        updateStats()
        })

       
    // Remove book button //

    const removeButton = document.createElement("button")
    removeButton.classList.add("remove-btn")
    removeButton.textContent = "Remove"

    removeButton.addEventListener("click", function(e) {
        
        let index = myLibrary.findIndex(x => x.dataId === parseInt(e.target.parentNode.dataset.id)
        )
        
        myLibrary.splice(index, 1)

        e.target.parentNode.remove()

        updateStats()
    })

    bookCard.appendChild(bookTitle)
    bookCard.appendChild(bookAuthor)
    bookCard.appendChild(bookPages)
    bookCard.appendChild(readButton)
    bookCard.appendChild(removeButton)

    grid.append(bookCard)

    }


// function to update book statistics // 

function updateStats() {

    function getBooksRead() {
        let totalBooksReadArray = myLibrary.filter(readBook => readBook.read === true)
        return totalBooksReadArray
    }
    
    function getPages() {

        let total = 0;
        myLibrary.forEach(element => {

            total += parseInt(element.pages)
        });

        return total
    } 

    function getPagesRead() {

        let total = 0;
        getBooksRead().forEach(element => {

            total += parseInt(element.pages)
        });

        return total
    } 

    totalBooks.textContent = myLibrary.length
    totalBooksRead.textContent = getBooksRead().length
    totalPages.textContent = getPages()
    totalPagesRead.textContent = getPagesRead()
}