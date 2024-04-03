//dom

const nome = document.querySelector('#nome')
const uni1 = document.querySelector('#uni1')
const uni2 = document.querySelector('#uni2')
const uni3 = document.querySelector('#uni3')
const btn = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')

//evento

btn.addEventListener('click',()=>{

    n1 = Number (uni1.value) 
    n2 = Number (uni2.value)
    n3 = Number (uni3.value)

    media = (n1+n2+n3)/3

    if (media >= 5) 
    {
        situacao = 'aprovado'    
    }
    else
    {
        situacao = ' de recuperação'
    }

    resultado.textContent = `${nome.value} a sua média foi: ${media.toFixed(1)} você esta:${situacao}`
})