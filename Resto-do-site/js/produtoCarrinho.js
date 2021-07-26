function salvarProdutoNoCarrinho(idProduto,img,name,value) {
    dadosCarrinho = localStorage.getItem('carrinho')
    const str = 'id:1,img:link,name:feijao,value:4.50,qtd:2;'
    if (dadosCarrinho) {
        const produto = dadosCarrinho.split(';').filter(e => e.startsWith(`id:${idProduto}`))
        if (produto) {
            const qtd = Number(produto.split(',').filter(e => e.startsWith('qtd'))) 
        }




        localStorage.setItem('carrinho', '')
    }
    
}
