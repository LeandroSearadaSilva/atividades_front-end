function iniciarFuncao(){

    const cardapioPedido = document.getElementById('pedidoCardapio');    
    const pedidoAlinhado = cardapioPedido.value.toLowerCase().trim();
    const respostaPedido = document.getElementById('pedidoResposta');
    let resposta;


    if (pedidoAlinhado === ''){
        resposta='Faça seu pedido!';
    }
    
    else if (pedidoAlinhado === 'pao com ovo' || pedidoAlinhado === 'pão com ovo' || pedidoAlinhado === '100'|| pedidoAlinhado === 'macaxeira com charque' || pedidoAlinhado === '101' || pedidoAlinhado === 'cuscuz com carne de sol' || pedidoAlinhado === '102' ){
        resposta='Bom café da manhã!';
    } 
    
    else if (pedidoAlinhado === 'feijao com arroz' || pedidoAlinhado === 'feijão com arroz' || pedidoAlinhado === '200' ||  pedidoAlinhado === '201' ||  pedidoAlinhado === 'macarrão com almondegas' ||  pedidoAlinhado === 'macarrao com almondegas' || pedidoAlinhado === '202' ||  pedidoAlinhado === 'filé com fritas' ||  pedidoAlinhado === 'file com fritas' ){
        resposta='Bom almoço!';
    } 
    
    else {
        resposta='Boa janta!';
    }
    respostaPedido.textContent=resposta;

}