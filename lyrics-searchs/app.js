//finalizar depois
const form = document.querySelector('#form')
const searchInput = document.querySelector('#search')
const songsContainer = document.querySelector('#songs-container')
const prevAndNextContainer = document.querySelector('#prev-and-next-container')

const apiURL = `https://api.lyrics.ovh`

const fetchSongs = term => {
    fetch(`${apiURL}/suggest/${term}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}

form.addEventListener('submit', event =>{
    //não disparar evento
    event.preventDefault()

    //pegar os dados inseridos na pagina / trim(pega variavel do inicio e fim e tira)
    const searchTerm = searchInput.value.trim() 
    //9:10 teste  
    if (!searchTerm){
        //inserindo a Li no Html
       songsContainer.innerHTML = `<li class="warning-message">Por favor, digite um termo válido </li>`
       return
    }
    //Chamando a função pra procurar
    fetchSongs(searchTerm)



    

})