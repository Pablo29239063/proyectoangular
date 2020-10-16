import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AuthServiceService {
  productosSeleccionados: any[] = [];
  productos = [];
  //Se inicializa el modulo http en el servicio
  constructor(private http: Http) {
    this.initProductos();
  }
  // FunciÃƒÂ³n de servicio de usuario en firebase
  obtenerDatosUsuario() {
    return this.http.get("https://valid-perigee-270716.firebaseio.com/.json")
      .map((res: Response) => res.json()) //Convertir la respuesta a formato JSON
  }

  initProductos() {
    return this.obtenerDatosUsuario()
    //this.obtenerDatosUsuario().subscribe((data) => this.productos = data)
  }

  getUsuarios() {
    return this.http.get('https://valid-perigee-270716.firebaseio.com/.json')
      .map((response: Response) => response.json());
  }

  actualizarProductos(pos, producto){
    let newData = JSON.stringify(producto);
    return this.http.put(`https://valid-perigee-270716.firebaseio.com/productos/${pos}.json`, newData);    
  }

  addCarrito(pedido) {
    var listProducts = JSON.parse(localStorage.getItem("cart"));
    listProducts.push(pedido);
    localStorage.setItem("cart", JSON.stringify(listProducts));
    // this.productosSeleccionados.push(pedido);
    // this.submitPedido();
  }
  submitPedido() {
    for (let key in this.productos) {
      for (let item of this.productosSeleccionados) {
        if (this.productos[key].nombre == item.nombre) {
          this.productos[key].unidades_disponibles -= item.cantidad;
        }
      }
    }
    this.productosSeleccionados = [];
    let newData = JSON.stringify(this.productos);
    return this.http.put('https://valid-perigee-270716.firebaseio.com/.json', newData)

  }

}