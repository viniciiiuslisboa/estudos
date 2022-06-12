function Gerar(){
    var numberinput = document.querySelector("#txtn")
    var idres = document.querySelector('#tabuada')

    if (numberinput.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        var number = Number(numberinput.value) 
        idres.innerHTML = ''

        for (var i = 1; i <= 10; i++){
            var item = document.createElement('option')
            item.value = `tab${i}`
            item.text = (`${number} x ${i} = ${number * i}`)
            idres.appendChild(item)
        }
    } 
}