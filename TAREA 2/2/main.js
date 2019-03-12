import Movimiento from "./Banco2.js";
import Cliente from "./Banco1.js";

class Main {
    constructor() {
        this._movimiento = new Movimiento(document.querySelector("#movimiento"), document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let nombre = document.querySelector("#nombre").value;
            let telefono = document.querySelector("#telefono").value;
            let cuenta = document.querySelector("#cuenta").value;
            let depositar = document.querySelector("#depositar").value;
            let retiro = document.querySelector("#retiro").value;

            let cliente = new Cliente(nombre, telefono, cuenta, depositar, retiro);

            this._movimiento.addCliente(cliente);
        });
    }
}
let m = new Main();