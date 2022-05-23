function getSupermercadoNome(nomeCidade) {
	var url  = "http://localhost:3000/supermercados/city/";
	var xhr  = new XMLHttpRequest()
	var supermarkets = {}
	xhr.open('GET', url+nomeCidade, false)
	xhr.onload = function () {
		supermarkets = JSON.parse(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == "200") {
			console.log(supermarkets);
		} else {
			console.error(supermarkets);
		}
	}
	xhr.send(null);
	return supermarkets;
}

function getCorredoresNome(codigoSupermercado) {
	var url  = "http://localhost:3000/supermercados/corredores/";
	var xhr  = new XMLHttpRequest()
	var corredores = {}
	xhr.open('GET', url+codigoSupermercado, false)
	xhr.onload = function () {
		corredores = JSON.parse(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == "200") {
			console.log(corredores);
		} else {
			console.error(corredores);
		}
	}
	xhr.send(null);
	return corredores;
}

function getprodutosNome(nomeCorredor, idSupermarket) {
	var url  = "http://localhost:3000/produtos/corredores/";
	var xhr  = new XMLHttpRequest()
	var produtos = {}
	xhr.open('GET', url+nomeCorredor+"/"+idSupermarket, false)
	xhr.onload = function () {
		produtos = JSON.parse(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == "200") {

		} else {
			console.error(produtos);
		}
	}
	xhr.send(null);
	return produtos;
}

function getProductsByCategoryAndSupermarketId() {
	var url  = "http://localhost:3000/produtos/corredores";
	var xhr  = new XMLHttpRequest()
	var produtos = {}

	var requestBody = {};
	requestBody.nomeCorredor = localStorage.getItem("nome-corredor");;
	requestBody.codigoSupermercado = localStorage.getItem("codigo-supermercado");
	var json = JSON.stringify(requestBody);

	xhr.open('GET', url, false)
	xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
	xhr.onload = function () {
		produtos = JSON.parse(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == "200") {
			console.log(produtos);
		} else {
			console.error(produtos);
		}
	}
	xhr.send(json);
	return produtos;
}


function guardarCodigoSupermercado(codigoSupermercado, ) {
    localStorage.setItem("codigo-supermercado", codigoSupermercado);

    getMercadoId({
        id_supermarket: codigoSupermercado
    })
}

function guardarNomeCorredor(nomeCorredor) {
	localStorage.setItem("nome-corredor", nomeCorredor)
}

