import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {
  productos = []
  pedidos : any[];

  constructor(private data : AuthServiceService, private router : Router) { }
 
  ngOnInit() {
    this.pedidos = this.data.productosSeleccionados;

    let listProducts = JSON.parse(localStorage.getItem("cart"));
    console.log(listProducts);

    this.productos = listProducts
  }
  
  calcularTotal() {
    let total = 0;
    for (let item of this.productos) {
      total += item.precio
    }
    return total;

  }
  onPagar() {
    if (confirm("¿Desea realizar el pago de su compra")) {
      this.productos.forEach((item, i)=> {
        this.data.actualizarProductos(i, item);
        console.log(item);
      })
      localStorage.clear();
      alert("Compra realizada con éxito!")
      this.router.navigate(['/vista-principal'])
    }
  }
   
}
  





 