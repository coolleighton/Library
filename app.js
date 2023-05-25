let myLibrary = [

    {
        title: "leightons adventure",
        author: "garry donavan",
        pages: 300,
        isRead: true,
    },

    {
        title: "barrys adventure",
        author: "garry donavan",
        pages: 300,
        isRead: true,
    },

    {
        title: "lee's adventure",
        author: "garry donavan",
        pages: 300,
        isRead: false,
    }
]

// Selectors //

const grid = document.querySelector("#book-grid")
const addBookBtn = document.querySelector("#add-book")
const bookForm = document.querySelector("#book-form")

// Function to loop through array and display Books on page //

function displayBooks() {

    grid.innerHTML = ""

    for (var i = 0; i < myLibrary.length; i++) {

        const bookCard = document.createElement("div")
        bookCard.classList.add("card")

        const bookTitle = document.createElement("p")
        bookTitle.textContent = myLibrary[i].title

        const bookAuthor = document.createElement("p")
        bookAuthor.textContent = myLibrary[i].author

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

// function to display and hide and add book form //



displayBooks()

addBookBtn.addEventListener("click", function() {
    bookForm.style.display = "flex"
    bookForm.style.flexDirection = "column"
})


