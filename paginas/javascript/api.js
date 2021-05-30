const cep = document.querySelector('#cep')

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-","");
    const options = {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    }
  
    fetch(`https://viacep.com.br/ws/${search}/json`, options)
      .then((response)=>{response.json()
        .then( (data) => showData(data)) 
      })
      .catch((e) => console.log('Deu erro: '+e,message))
  
})

const showData =  (dados) => { 
    for (const campo in dados){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = dados[campo]
        }
    }
}
  