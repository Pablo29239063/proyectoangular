import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class navbarComponent implements OnInit {
  countProduct = 0

  constructor() { }

  ngOnInit() {
    let listProducts = JSON.parse(localStorage.getItem("cantidadCarrito"));
    console.log(listProducts);

    this.countProduct = listProducts
  }

}