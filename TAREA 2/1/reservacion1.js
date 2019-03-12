export default class Reservacion1 
{
    constructor(tablaHotel, tablainfo) 
    {
        this._tablaHotel = tablaHotel;
        this._tablainfo = tablainfo;
        this._numReservacion = 0;
        this.dias = 0;
        this._contador = 0;
    }
    addReservacion(reserva) 
    {
        let row = this._tablaHotel.insertRow(-1);
        let cellName = row.insertCell(0);
        let cellEmail = row.insertCell(1);
        let cellreservacion = row.insertCell(2);
        let cellreservacionF = row.insertCell(3);
        let celldias = row.insertCell(4);
        let cellhabitacion = row.insertCell(5);
        let cellcosto = row.insertCell(6);
        cellName.innerHTML = reserva.name;
        cellEmail.innerHTML = reserva.email;
        cellreservacion.innerHTML = reserva.reservacion;
        cellreservacionF.innerHTML = reserva.reservacionF;
        celldias.innerHTML = reserva.getReservacion();
        cellhabitacion.innerHTML = reserva.habitacion;
        let habitacion = reserva.habitacion;
        this.dias = reserva.getReservacion();
        if(habitacion === "Individual")
        {
            this._precioReservacion = 100 * this.dias;
        }
        else if(habitacion === "Doble uso individual")
        {
            this._precioReservacion = 200 * this.dias;
        }
        else if(habitacion === "Doble")
        {
            this._precioReservacion = 350 * this.dias;
        }
        else if(habitacion === "Con cama Supletoria")
        {
            this._precioReservacion = 500 * this.dias;
        }
        else if(habitacion === "Triple")
        {
            this._precioReservacion = 750 * this.dias;
        }
        else if(habitacion === "Junior Suite")
        {
            this._precioReservacion = 1000 * this.dias;
        }
        else if(habitacion === "Suite")
        {
            this._precioReservacion = 1250 * this.dias;
        }
        else if(habitacion === "Suite Nupcial")
        {
            this._precioReservacion = 1500 * this.dias;
        }
        
        this._contador = this._contador + this._precioReservacion ;
        this._numReservacion++;
        this._tablainfo.rows[1].cells[0].innerHTML = this._numReservacion;
        
        cellcosto.innerHTML = this._precioReservacion;
    }
}