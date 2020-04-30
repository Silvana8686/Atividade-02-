function validar_form_contato(){
    var nome = formcontato.nome.value;
    var preco = formcontato.preco.value;
    var quantidade = formcontato.quantidade.value;
    var dataatual = formcontato.dataatual.value;
    var validade = formcontato.validade.value;
    var fotoproduto = formcontato.fotoproduto.value;
    var categoria = document.getElementById('cat').value;
    
    if(nome == ""){
        alert("Campo nome é obrigatorio");
        formcontato.nome.focus();
        return false;
    }if(preco == ""){
        alert("Campo Preco é obrigatorio");
        formcontato.preco.focus();
        return false;
    }if(preco <=0){
        alert("preco valor inválido ");
        formcontato.preco.focus();
        return false;
    }if(quantidade == ""|| quantidade<=0){
        alert("Campo Quantidade é obrigatorio");
        formcontato.quantidade.focus();
        return false;
    }if(dataatual == ""){
        alert("Campo Data Atual é obrigatorio");
        formcontato.dataatual.focus();
        return false;
    }if(validade == "" ){
        alert("Campo Validade  do Produto é obrigatorio");
        formcontato.validade.focus();
        return false;
    
    }if(calcula_diferenca_data(dataatual, validade) < 7 ){
        alert(" produto com data menor de sete dias, ja está vencendo !");
        
        formcontato.validade.focus();
        return false;

    }else if(fotoproduto == ""){
        alert("Campo  inserir Foto do Produto é obrigatório");
        formcontato.fotoproduto.focus();
        return false;


    }if(categoria == "" || categoria == "Selecione..."){
        alert("Campo categoria é obrigatorio");
        
        return false;

    }

}



function calcula_diferenca_data(dataatual, validade) {
    let now = new Date(dataatual);
    let newdate = new Date(validade);
    let diff = Math.abs(newdate.getTime() - now.getTime()); // Subtrai uma data pela outra
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
    return days;
}