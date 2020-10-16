import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { FormControl } from '@angular/forms'
import { getBootstrapListener } from '@angular/router/src/router_module';
//import {MatBadgeModule} from '@angular/material/badge';
import { AuthServiceService } from '../auth-service.service';
import RegExp from "typescript-dotnet-commonjs/System/Text/RegularExpressions";

@Component({
  selector: 'vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css']
})

export class VistaPrincipalComponent implements OnInit {

  filterproductos = '';
  productos = [];
  copyProduct = [];
  buscar = ""

  constructor(private route: Router, private authserviceservise: AuthServiceService) {
  }

  ngOnInit() {
    this.buscar = '';
    this.authserviceservise.obtenerDatosUsuario()
      .subscribe((data) => {
        this.productos = data.productos
        this.copyProduct = this.productos;
      })
  }

  onAddCarrito(product, cantidad) {
    console.log("Agregando al carrito...")
    let products = JSON.parse(localStorage.getItem("cart"));
    product.countProduct = parseFloat(cantidad);
    if (products) {
      let isAdd = false;
      products.forEach((item, i) => {
        if (item.nombre === product.nombre) {
          item.countProduct += parseFloat(cantidad)
          this.resta(i, parseFloat(cantidad))
          isAdd = true;
        }
      })
      if (!isAdd) {
        products.push(product);
      }
    } else {
      products = [product];
    }

    localStorage.setItem("cart", JSON.stringify(products));
    this.funCountProduct(products)
  }

  funCountProduct(products) {
    let totalProduct = 0;
    products.forEach(item => totalProduct += item.countProduct);
    localStorage.setItem("cantidadCarrito", JSON.stringify(totalProduct));
    location.reload()
  }
  
  getPrecioProducto(nombre) {
    for (let item of this.productos) {
      if (item.nombre == nombre) {
        return item.precio;
      }
    }
  }

  vermas(producto) {
    localStorage.setItem("producto", JSON.stringify(producto));
    this.route.navigate(['/productos']);
  }


  buscarProductos(input: string) {
    console.log("Se escribe:" + input);
    this.productos = this.copyProduct.filter((item: any) => new RegExp(input, 'i').isMatch(item.nombre));
    console.log("El nuevo arreglo tiene," + this.productos);
  }
  resta(identificador, cantidad) {
    console.log(identificador, cantidad);
    
    // console.log(this.productos[identificador]);
    // this.productos[identificador].stock = this.productos[identificador].stock - cantidad;
    // console.log("**RESTA**")
    // console.log(this.productos[identificador].stock)
    }
    }
