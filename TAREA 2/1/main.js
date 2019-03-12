import Reservacion1 from "./reservacion1.js";
import Reservacion2 from "./reservacion2.js";
class Main
{
    constructor()
    {
        this._hotel = new Reservacion1(document.querySelector("#hotel"), document.querySelector("#info"));
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let name = document.querySelector("#name").value;
            let email = document.querySelector("#email").value;
            let reservacion = document.querySelector("#reservacion").value;
            let reservacionF = document.querySelector("#reservacionF").value;
            let habitacion = document.getElementById("habitacion");


            let reservacion2 = new Reservacion2(name, email, reservacion, reservacionF, habitacion);
            this._hotel.addReservacion(reservacion2);
        });
    }
}

let m = new Main();