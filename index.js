
const input = document.getElementById('cep')
const btn_search = document.getElementById('btn_search')
const btn_newSearch = document.getElementById('btn_newSearch')
let estado = document.getElementById('state')
let cidade = document.getElementById('city')
let rua = document.getElementById('street')
let bairro = document.getElementById('neighborhood')
let search_result = {};

const buscarCep = () => {
        const cep = input.value
        fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
        .then(response =>{
            if(!response.ok){
                alert('CEP Não Encontrado! Por Favor Tente Novamente.')
                throw new Error('Erro na Rede')
            }
            return response.json()
        })
        .then(data => {
            search_result = data;
            exporInformacoes()
            console.log(search_result)
        })
    input.value = ''
}

const search_sec = document.getElementById('search_sec')
const view_sec = document.getElementById('result_sec')

const exporInformacoes = () =>{
    estado.textContent = search_result.state
    cidade.textContent = search_result.city
    rua.textContent = search_result.street
    bairro.textContent = search_result.neighborhood

    search_sec.style.display = 'none'
    view_sec.style.display = 'flex'
}

const buscarNovoCep = () => {

    search_sec.style.display = 'flex'
    view_sec.style.display = 'none'

}

btn_search.addEventListener('click', buscarCep)
btn_newSearch.addEventListener('click',buscarNovoCep)