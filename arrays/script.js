var res = window.document.querySelector('div#res')
var sel = window.document.getElementById('tab')
var opc = []
var num = window.document.querySelector('input#num')

function adicionar() {

    //const sel = document.createElement("select");
    opc.push(Number(num.value))

    let opt1 = document.createElement("option");
    opt1.text = num.value
    sel.appendChild(opt1)

}

function finalizar() {

    var res = window.document.querySelector('div#res')
    res.innerHTML += `<p>Maior valor adicionado: ${opc[opc.length-1]}\n</p>` 
    res.innerHTML += `<p>Menor valor adicionado: ${opc[0]}</p>`
    res.innerHTML += `<p>tamanho: ${opc.length}</p>`

}