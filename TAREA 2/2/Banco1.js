export default class Cliente {
    constructor(nombre, telefono, cuenta, depositar, retiro) {
        this._nombre = nombre;
        this._telefono = telefono;
        this._cuenta = cuenta;
        this._depositar = depositar;
        this._retiro = retiro;
    }

    get nombre() {
        return this._nombre;
    }
    

    get telefono() {
        return this._telefono;
    }

    get cuenta() {
        return this._cuenta;
    }

    get depositar() {
        return this._depositar;
    }

    get retiro() {
        return this._retiro;
    }

}