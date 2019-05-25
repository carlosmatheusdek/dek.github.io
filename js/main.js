function calcularPreco() {
	var option = document.getElementById("orcamentoSelect").value;
	if(option > 0){
		alert("O valor passaria de R$500,00 para R$"+500.00*option+",00");
	}else{
		alert("Selecione uma opção!");
	}
}