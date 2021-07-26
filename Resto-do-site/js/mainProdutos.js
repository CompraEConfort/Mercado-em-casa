var list = [

];


//somando total
function getTotal(list){
	var total = 0;
	for(var key in list){
		total += list[key].value * list[key].amount;
	}
	document.getElementById("totalValue").innerHTML = formatValue(total);
}

//criando a tabela
function setList(list){
	var table = '<thead><tr><td>Produtos</td><td>Quantidade</td><td>Valor</td><td>Opções</td></tr></thead><tbody>';
	for(var key in list){
		table += '<tr><td>'+ formatDesc(list[key].desc) +'</td><td>'+ formatAmount(list[key].amount) +'</td><td>'+ formatValue(list[key].value) +'</td><td><button class="btn btn-default" onclick="setUpdate('+key+');">Editar</button> <button class="btn btn-default" onclick="deleteData('+key+');">Deletar</button></td></tr>';
	}
	table += '</tbody>';

	document.getElementById('listTable').innerHTML = table;
	getTotal(list);
	saveListStorage(list);
}

//formatando o nome do produto
function formatDesc(desc){
	var str = desc.toLowerCase();
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

//formatando a quantidade
function formatAmount(amount){
	return parseInt(amount);
}

//formatando o preço
function formatValue(value){
	var str = parseFloat(value).toFixed(2) + "";
	str = str.replace(".",",");
	str = "R$ " + str;
	return str;
}

//formatando o Peso do produto
function formatDesc(weight){
	var str = desc.toLowerCase();
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

//formatando o Código de Barras
function formatDesc(desc){
	var str = desc.toLowerCase();
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

//formatando a data de Expedição
function formatDesc(desc){
	var str = desc.toLowerCase();
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

//formatando a data de validade
function formatDesc(desc){
	var str = desc.toLowerCase();
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

//formatando a Categoria
function formatDesc(desc){
	var str = desc.toLowerCase();
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

//formatando a imagem
function formatDesc(desc){
	var str = desc.toLowerCase();
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

//adicionar novo produto
function addData(){
	if(!validation()){
		return;
	}
	var desc = document.getElementById("desc").value;
	var amount = document.getElementById("amount").value;
	var value = document.getElementById("value").value;
	var peso = document.getElementById("peso").value;
	var barcode = document.getElementById("barcode").value;
	var dataex = document.getElementById("dataex").value;
	var dataval = document.getElementById("dataval").value;
	var categoria = document.getElementById("categoria").value;
	var image = document.getElementById("image").value;
	

	list.unshift({"desc":desc , "amount":amount , "value":value, "peso":peso, "barcode":barcode, 
				"dataex":dataex, "dataval":dataval, "categoria":categoria, "image":image});
	setList(list);
}

//botões de editar
function setUpdate(id){

	var obj = list[id];
	document.getElementById("desc").value = obj.desc;
	document.getElementById("amount").value = obj.amount;
	document.getElementById("value").value = obj.value;
	document.getElementById("peso").value = obj.peso;
	document.getElementById("barcode").value = obj.barcode;
	document.getElementById("dataex").value = obj.dataex;
	document.getElementById("dataval").value = obj.dataval;
	document.getElementById("categoria").value = obj.categoria;
	document.getElementById("image").value = obj.image;
	document.getElementById("btnUpdate").style.display = "inline-block";
	document.getElementById("btnAdd").style.display = "none";
	document.getElementById("inputIDUpdate").innerHTML = '<input id="idUpdate" type="hidden" value="'+id+'">';
}

//limpa os campos de editar
function resetForm(){

	document.getElementById("desc").value = "";
	document.getElementById("amount").value = "";
	document.getElementById("value").value = "";
	document.getElementById("peso").value = "";
	document.getElementById("barcode").value = "";
	document.getElementById("dataex").value = "";
	document.getElementById("dataval").value = "";
	document.getElementById("categoria").value = "";
	document.getElementById("image").value = "";
	document.getElementById("btnUpdate").style.display = "none";
	document.getElementById("btnAdd").style.display = "inline-block";
	document.getElementById("inputIDUpdate").innerHTML = "";
	document.getElementById("errors").style.display = "none";
}

//atualizando os dados
function updateData(){
	if(!validation()){
		return;
	}

	var id = document.getElementById("idUpdate").value;
	var desc = document.getElementById("desc").value;
	var amount = document.getElementById("amount").value;
	var value = document.getElementById("value").value;
	var peso = document.getElementById("peso").value;
	var barcode = document.getElementById("barcode").value;
	var dataex = document.getElementById("dataex").value;
	var dataval = document.getElementById("dataval").value;
	var categoria = document.getElementById("categoria").value;
	var image = document.getElementById("image").value;
	

	list.unshift({"desc":desc , "amount":amount , "value":value, "peso":peso, "barcode":barcode, 
				"dataex":dataex, "dataval":dataval, "categoria":categoria, "image":image});
	setList(list);
}

//deletando os dados
function deleteData(id){
	if(confirm("Deletar este item da Lista ?")){
		if(id === list.length - 1){
			list.pop();
		}else if(id === 0){
			list.shift();
		}else{
			var arrAuxIni = list.slice(0,id);
			var arrAuxEnd = list.slice(id + 1);
			list = arrAuxIni.concat(arrAuxEnd);
		}
		setList(list);
	}
}

//validando e printando erros
function validation(){
	var desc = document.getElementById("desc").value;
	var amount = document.getElementById("amount").value;
	var value = document.getElementById("value").value;
	var peso = document.getElementById("peso").value;
	var barcode = document.getElementById("barcode").value;
	var dataex = document.getElementById("dataex").value;
	var dataval = document.getElementById("dataval").value;
	var categoria = document.getElementById("categoria").value;
	var image = document.getElementById("image").value;
	var errors = "";
	document.getElementById("errors").style.display = "none";

	if(desc === ""){
		errors += '<p>Fill out description</p>';
	}
	if(amount === ""){
		errors += '<p>Fill out a quantity</p>';
	}else if(amount != parseInt(amount)){
		errors += '<p>Fill out a valid amount</p>';
	}
	if(value === ""){
		errors += '<p>Fill out a value</p>';
	}else if(value != parseFloat(value)){
		errors += '<p>Fill out a valid value</p>';
	}
	if(value === ""){
		errors += '<p>Fill out a value</p>';
	}else if(value != parseFloat(peso)){
		errors += '<p>Fill out a valid value</p>';
	}
	if(value === ""){
		errors += '<p>Fill out a value</p>';
	}else if(value != parseFloat(barcode)){
		errors += '<p>Fill out a valid value</p>';
	}
	if(value === ""){
		errors += '<p>Fill out a value</p>';
	}else if(value != parseFloat(dataex)){
		errors += '<p>Fill out a valid value</p>';
	}
	if(value === ""){
		errors += '<p>Fill out a value</p>';
	}else if(value != parseFloat(dataval)){
		errors += '<p>Fill out a valid value</p>';
	}
	if(value === ""){
		errors += '<p>Fill out a value</p>';
	}else if(value != parseFloat(categoria)){
		errors += '<p>Fill out a valid value</p>';
	}
	if(value === ""){
		errors += '<p>Fill out a value</p>';
	}else if(value != parseFloat(image)){
		errors += '<p>Fill out a valid value</p>';
	}

	if(errors != ""){
		document.getElementById("errors").style.display = "block";
		document.getElementById("errors").innerHTML = "<h3>Error:</h3>" + errors;
		return 0;
	}else{
		return 1;
	}
}

//deletando lista
function deleteList(){
	if (confirm("Tem certeza que quer deletar Toda lista ?")){
		list = [];
		setList(list);
	}
}

//salvando em storage
function saveListStorage(list){
	var jsonStr = JSON.stringify(list);
	localStorage.setItem("list",jsonStr);
}

//verifica se já tem algo salvo
function initListStorage(){
	var testList = localStorage.getItem("list");
	if(testList){
		list = JSON.parse(testList);
	}
	setList(list);
}

initListStorage();