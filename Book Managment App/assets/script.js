let kitablar = []

let createInputForm = document.getElementById(inputForm)
createForm.addEventListener("submit", function (event) {
    event.preventDefault()});

let nameInp = document.getElementById(bookName)
let authorInp = document.getElementById(author)
let pubDateInp = document.getElementById(pubDate)

let bookInfo = {
name: nameInp.value,
author: authorInp.value,
pubDate: pubDateInp.value,
}

kitablar.push(bookInfo)
