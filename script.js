

document.getElementById("form_palavra").addEventListener("submit", function(event) {
    event.preventDefault();

    let palavra = document.getElementById('palavra-momento').value;
    let listPalavra = document.getElementsByClassName('palavras-item')[0];

    // Criar um novo elemento <li> com a palavra e adicioná-lo à lista
    let novoItem = document.createElement('li');
    novoItem.textContent = palavra;
    listPalavra.appendChild(novoItem);

    console.log(listPalavra.innerHTML);
  });

function PostPalavra(data) {
    alert(data)
    fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
   .then(responde => responde.json())
   .then(res => {
        alert('Palavra adicionada a sua lista')
   })
}

function GetPalavra() {
    fetch('')
    .then(responde => responde.json())
    .then(res => {
        
    })
}