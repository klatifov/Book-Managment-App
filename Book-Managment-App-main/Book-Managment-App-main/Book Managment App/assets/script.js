let kitablar = []

let kitabinAdi = document.getElementById('bookName')
let kitabinMuellifi = document.getElementById("author")
let kitabinIli = document.getElementById("pubDate")

let form = document.getElementById("inputForm")
let redLine = document.getElementById ("redLine")
form.addEventListener('submit', function(event){
    event.preventDefault()
    if (kitabinAdi.value == ""||  kitabinMuellifi.value == "" || kitabinIli.value == ""){
        redLine.style.display = "block"
        return
    }

    let kitab = {
        name: kitabinAdi.value,
        author: kitabinMuellifi.value,
        year: kitabinIli.value
    }

    kitablar.push(kitab)

    redLine.style.display = "none"

    let tableBody = document.getElementById("tbody")
    tableBody.innerHTML +=  `
     <tr>
        <td>${kitab.name}</td>
        <td>${kitab.author}</td>
        <td>${kitab.year}</td>
        <td> <button class="delete">delete</button> </td>
        <td> <button class="edit">edit</button> </td>
     </tr>
     
    ` 
    let deleteBtns = document.querySelectorAll('.delete')

    deleteBtns.forEach(function(deleteBtn){
        deleteBtn.addEventListener('click', function() {
            // tableBody.innerHTML = 
            deleteBtn.parentElement.parentElement.remove()
        })
    })
   
//     let editButtons = document.querySelectorAll(".edit")

//     editButtons.forEach(function(editBtn){
//         editBtn.addEventListener("click", function(){
//             let editFileName = kitablar.file.value
//             let editFileAutor = kitablar.author.value
//             let editFileYear = kitablar.year.value
           
//             console.log(kitablar)
//         })
//     })
// // console.log(kitablar)



})





