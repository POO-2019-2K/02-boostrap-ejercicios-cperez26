export default class Movimiento {
    constructor(tableMovimiento, tableInfo) {
        this._tableMovimiento = tableMovimiento;
        this._tableInfo = tableInfo;
        

        this._numDepositos = 0;
        this._totalDepositado = 0;
        this._numRetiros = 0;
        this._totalRetirado = 0;
        this._numMovimientos = 0;
    }

    addCliente(cliente) {
        let row = this._tableMovimiento.insertRow(-1);
        let cellNombre = row.insertCell(0);
        let cellTelefono = row.insertCell(1);
        let cellCuenta = row.insertCell(2);
        let cellDepositar = row.insertCell(3);
        let cellRetiro = row.insertCell(4);

        cellNombre.innerHTML = cliente.nombre;
        cellTelefono.innerHTML = cliente.telefono;
        cellCuenta.innerHTML = cliente.cuenta;
        cellDepositar.innerHTML = cliente.depositar;
        cellRetiro.innerHTML = cliente.retiro;

        this._numDepositos++;
        this._totalDepositado = Number(this._totalDepositado) + Number(cliente.depositar);
        this._numRetiros++;
        this._totalRetirado = Number(this._totalRetirado) + Number(cliente.retiro);
        this._numMovimientos = this._numDepositos + this._numRetiros
        this._numMovimientos = this._numDepositos + this._numRetiros;
        this._totalSaldo = this._totalDepositado - this._totalRetirado;


        this._tableInfo.rows[0].cells[1].innerHTML = this._numDepositos;
        this._tableInfo.rows[1].cells[1].innerHTML = this._totalDepositado;
        this._tableInfo.rows[2].cells[1].innerHTML = this._numRetiros;
        this._tableInfo.rows[3].cells[1].innerHTML = this._totalRetirado;
        if(cliente.retiro==0) {
            this._tableInfo.rows[4].cells[1].innerHTML = this._numMovimientos-1;
        }
        else{
            this._tableInfo.rows[4].cells[1].innerHTML = this._numMovimientos;
        }
       
        this._tableInfo.rows[5].cells[1].innerHTML = this._totalSaldo;



        
    }
}