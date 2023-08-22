let kitablar = []

let kitabinAdi = document.getElementById('bookName')
let kitabinMuellifi = document.getElementById("author")
let kitabinIli = document.getElementById("pubDate")

let form = document.getElementById("inputForm")
form.addEventListener('submit', function(event){
    event.preventDefault()

    let kitab = {
        name: kitabinAdi.value,
        author: kitabinMuellifi.value,
        year: kitabinIli.value
    }

    kitablar.push(kitab)

    let tableBody = document.getElementById("tbody")
    tableBody.innerHTML +=  `
     <tr>
        <td>${kitab.name}</td>
        <td>${kitab.author}</td>
        <td>${kitab.year}</td>
        <td> <button class="delete">delete</button> </td>
     </tr>
     
    ` 
    let deleteBtns = document.querySelectorAll('.delete')

    deleteBtns.forEach(function(deleteBtn){
        deleteBtn.addEventListener('click', function() {
            // tableBody.innerHTML = 
            deleteBtn.parentElement.parentElement.remove()
        })
        
    })
    
   

})





