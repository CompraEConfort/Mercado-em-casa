$(function() {
	simpleCart({

	    // array representing the format and columns of the cart, see
	    // the cart columns documentation
	    cartColumns: [
	        { attr: "name" , label: "Nome" },
	        { attr: "price" , label: "Preço", view: 'currency' },
	        { view: "decrement" , label: false },
	        { attr: "quantity" , label: "Quant." },
	        { view: "increment" , label: false },
	        { attr: "total" , label: "SubTotal", view: 'currency' },
	        { view: "remove" , text: "Remover" , label: false }
	    ],

	    // "div" or "table" - builds the cart as a table or collection of divs
	    cartStyle: "div",

	    // how simpleCart should checkout, see the checkout reference for more info
	    checkout: {
	        type: "PayPal" ,
	        email: "alvaro.santana1@hotmail.com"
	    },

	    // set the currency, see the currency reference for more info
	    currency: "BRL",

	    // collection of arbitrary data you may want to store with the cart,
	    // such as customer info
	    data: {},

	    // set the cart langauge (may be used for checkout)
	    language: "english-us",

	    // array of item fields that will not be sent to checkout
	    excludeFromCheckout: [],

	    // custom function to add shipping cost
	    shippingCustom: null,

	    // flat rate shipping option
	    shippingFlatRate: 0,

	    // added shipping based on this value multiplied by the cart quantity
	    shippingQuantityRate: 0,

	    // added shipping based on this value multiplied by the cart subtotal
	    shippingTotalRate: 0,

	    // tax rate applied to cart subtotal
	    taxRate: 0,

	    // true if tax should be applied to shipping
	    taxShipping: false,

	    // event callbacks
	    beforeAdd               	: null,
	    afterAdd                	: null,
	    load                    	: null,
	    beforeSave              	: null,
	    afterSave               	: null,
	    update                  	: null,
	    ready                   	: null,
		
		//Compra Realizada 
	    checkoutSuccess             : function compraRealizada(){
			alert ("Parabéns 🥳🎉!! Sua compra foi realizada com sucesso!!")
		window.location.href = 'http://localhost:5500/Resto-do-site/confirmaçao.html'

		},

		//Compra Falha
	    checkoutFail                : function compraFalha(){
		alert("Algo deu errado 😞!! Porfavor, Verifique e tente novamente!!")
		},

	    beforeCheckout              : null

	});
});
