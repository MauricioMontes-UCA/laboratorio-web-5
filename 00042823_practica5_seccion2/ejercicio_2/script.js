const shoppingCart = {
    products: [
        {
            nombre: "papel higiénico",
            unidades: 4,
            precio: 5
        },
        {
            nombre: "chocolate",
            unidades: 2,
            precio: 1.5
        }
    ],

    // precioTotal es una propiedad, que al definirse como función y usando "this"
    // se actualiza automáticamente

    get precioTotal() {
        let precio = 0;
        for (let i = 0; i < this.products.length; i++){
            precio += this.products[i].precio * this.products[i].unidades;
        }
        return precio;
    }
}

console.log(shoppingCart.precioTotal);
