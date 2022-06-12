var dadosCliente = document.querySelector('#data-order-res')
var nameRes = document.querySelector('#name');
var surnameRes = document.querySelector('#surname')
var dateRes = document.querySelector('#date')
var emailRes = document.querySelector('#email')
var orderRes = document.querySelector('#order')
var frameColor = document.querySelector('#frame-color')
var frameType = document.querySelector('#frame-type')
var teste = document.querySelector(".teste");

function buscar() {
    const name = (nameRes.value)
    dadosCliente.innerHTML = ` 
                <style>
                    #data-order-res {
                    justify-content: flex-start;
                    }   
                </style>
                <div id="order-res">
                    <div id="div-row">
                        <div id="div-row-line-1">
                            <div id="div-col">
                                <div>
                                    <p><strong>Pedido:</strong> ${orderRes.value}</p>
                                </div>

                                <div>
                                    <p><strong>Cliente:</strong> ${nameRes.value} ${surnameRes.value}</p>
                                </div>
                            </div>

                            <div>
                                <p><strong>Vendido:</strong> ${dateRes.value}</p>
                            </div>
                        </div>

                        <div>
                            <img width="84px" src="imgs/logo-png.png" alt="">
                        </div>
                    </div> <!--Primeiro bloco dados cliente-->

                    <div id="text">
                        <div style="font-size: .9rem"> <!--Nome do Quadro-->
                            <p>Quadro Decorativo Com Moldura Leão de Judá Calvo</p>
                        </div>

                        <div style="font-size: 1rem">
                            <p><strong>Tamanho: 60x90</strong></p>
                        </div>

                        <div>
                            <p><strong>Tipo da Moldura:</strong> ${frameType.value}</p>
                        </div>

                        <div>
                            <p><strong>Cor da Moldura:</strong> ${frameColor.value}</p>
                        </div>
                    </div>

                </div>`
}

