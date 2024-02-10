const botoesNumericos = [...document.querySelectorAll('.num')];
const operacoes =[...document.querySelectorAll('.opr')]
const res = document.querySelector('.res')
const display = document.querySelector('#div_display')
const tecla_on = document.querySelector('#ton')
const tecla_limpar = document.querySelector('#tlimpar')
const tecla_igual = document.getElementById('tigual')
const tecla_copy = document.getElementById('tcopy')
const div_paste = document.getElementById('colar')
const input = document.getElementById('paste')

let sinal = false
let decimal = false

botoesNumericos.map((el) => {
    el.addEventListener('click',(evt) => {
        sinal=false
        if(evt.target.innerHTML==","){
            if(!decimal){
                decimal=true
                sinal=true
                if(display.innerHTML=="0"){
                    display.innerHTML="0,"
                }else {
                    display.innerHTML+=evt.target.innerHTML
                }
            }
        } else {
        if(display.innerHTML=="0"){
            display.innerHTML=''
        }
        display.innerHTML+=evt.target.innerHTML
        }
    })
})

operacoes.map((el) => {
    el.addEventListener('click', (evt)=> {
        if(!sinal){
            sinal = true
            if(display.innerHTML=='0'){
                display.innerHTML=''
            }
            if(evt.target.innerHTML=='x'){
                display.innerHTML+='*'
            }else {
                display.innerHTML+=evt.target.innerHTML
            }
        }
    })
})

tecla_limpar.addEventListener('click',(evt)=> {
    sinal=false
    decimal=false
    display.innerHTML="0"
})

tecla_igual.addEventListener('click',(evt)=> {
    sinal=false
    decimal=false
    const res= eval(display.innerHTML)
    display.innerHTML= res 
})

tecla_copy.addEventListener("click", (evt) => {
    // navigator.clipboard.writeText(display.innerHTML)
  div_paste.select()
   div_paste.setSelectionRange(0,999)
    navigator.clipboard.writeText(teste.value)
})

div_paste.addEventListener("click", (evt) => {
    if (input.style.display === 'flex') {
        input.style.display = 'none';
    } else {
        input.style.display = 'flex';
    }
})