function calcularCostoTotal() {
    // Precios
    const precioMug = 25000;
    const precioLlavero = 20000;
    const precioCamiseta = 40000;

    let costoTotal = 0;

    // Bucle
    while (true) {
        let tipoProducto = prompt("Ingrese el tipo de producto (mug, llavero, camiseta) o escriba 'fin' para terminar:", "");

        if (tipoProducto.toLowerCase() === 'fin') {
            break;
        }
        if (tipoProducto.toLowerCase() !== 'mug' && tipoProducto.toLowerCase() !== 'llavero' && tipoProducto.toLowerCase() !== 'camiseta') {
            alert("Tipo de producto no válido. Por favor, ingrese 'mug', 'llavero' o 'camiseta'.");
            continue;
        }

        let cantidad = parseInt(prompt(`Ingrese la cantidad de ${tipoProducto}s que desea comprar:`, 0));

        if (isNaN(cantidad)) {
            alert("Por favor, ingrese una cantidad válida.");
            continue;
        }

        let costoProducto = 0;
        switch (tipoProducto.toLowerCase()) {
            case 'mug':
                costoProducto = cantidad * precioMug;
                break;
            case 'llavero':
                costoProducto = cantidad * precioLlavero;
                break;
            case 'camiseta':
                costoProducto = cantidad * precioCamiseta;
                break;
            default:
                alert("Tipo de producto no reconocido. Por favor, ingrese 'mug', 'llavero' o 'camiseta'.");
                continue;
        }

        costoTotal += costoProducto;
    }

    alert(`El costo total de su compra es: ${costoTotal} pesos colombianos`);
}

calcularCostoTotal();
