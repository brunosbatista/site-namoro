window.addEventListener("load", function() {
    GetPalavra();
});


document.getElementById("form_palavra").addEventListener("submit", function(event) {
    event.preventDefault();

    let palavra = document.getElementById('palavra-momento').value;
   
    body = {
        'nome': palavra
    }
    PostPalavra(body);
  });

 function PostPalavra(palavra) {
     fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(palavra)
    })
   .then(responde => responde.json())
   .then(res => {
        GetPalavra()
       
   })

   
}

async function GetPalavra() {
    await fetch('http://localhost:3000')
    .then(responde => responde.json())
    .then(res => {
        let listPalavra = document.getElementsByClassName('palavras-item')[0];
        listPalavra.innerHTML = res.map(p => `<li>${p.nome}</li>`).join('');
    })
    .catch(error => console.error('Erro ao buscar palavras:', error));
}
