class Producto {
    constructor(tipo, cantidad, precioUnitario) {
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
        this.calcularCostoTotal();
    }

    calcularCostoTotal() {
        this.costoTotal = this.cantidad * this.precioUnitario;
    }
}

const precioMug = 25000;
const precioLlavero = 20000;
const precioCamiseta = 40000;

let productos = [];

function calcularCostoTotal() {
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

        let precioUnitario = 0;

        switch (tipoProducto.toLowerCase()) {
            case 'mug':
                precioUnitario = precioMug;
                break;
            case 'llavero':
                precioUnitario = precioLlavero;
                break;
            case 'camiseta':
                precioUnitario = precioCamiseta;
                break;
            default:
                alert("Tipo de producto no reconocido. Por favor, ingrese 'mug', 'llavero' o 'camiseta'.");
                continue;
        }

        // Crear una instancia de la clase Producto y agregarla al array
        let nuevoProducto = new Producto(tipoProducto, cantidad, precioUnitario);
        productos.push(nuevoProducto);

        console.log(`Tipo: ${nuevoProducto.tipo}, Cantidad: ${nuevoProducto.cantidad}, Costo Total: ${nuevoProducto.costoTotal}`);
    }

    let costoTotal = productos.reduce((total, producto) => total + producto.costoTotal, 0);

    alert(`El costo total de su compra es: ${costoTotal} pesos colombianos`);
}

document.getElementById('calcularButton').addEventListener('click', calcularCostoTotal);
