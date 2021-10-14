const form = document.querySelector('#form')
const searchInput = document.querySelector('#search')
const songsContainer = document.querySelector('#songs-container')
const prevAndNextContainer = document.querySelector('#prev-and-next-container')

const apiURL = `https://api.lyrics.ovh`

form.addEventListener('submit', event =>{
    //não disparar evento
    event.preventDefault()

    //pegar os dados inseridos na pagina / trim(pega variavel do inicio e fim e tira)
    const searchTerm = searchInput.value.trim() 
    //9:10 teste  
    if (!searchInput){
        
    }

    console.log(searchTerm)

})