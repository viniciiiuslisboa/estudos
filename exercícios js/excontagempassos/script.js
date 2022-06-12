function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.lengh == 0 || passo.value.length == 0 || fim.value.legth < ini.value.length){
        window.alert('[ERRO] Faltam dados!')
    } else{
        window.alert('Tudo Certo!')
        res.innerHTML = 'Contando...'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for(var c = 1; c <= f; c += p){
            res.innerHTML += `${c} \u{1F603} `
        }
    }
} 

const inputs = document.querySelectorAll('.input')

inputs.forEach(input => {
    input.addEventListener("keydown", checkKey)
});

function checkKey(e) {
    var keyPressed = e.key;

    const invalidKeys = ["e", ".", ",", "+"];

    if(invalidKeys.includes(keyPressed)) e.preventDefault() 
    
}
