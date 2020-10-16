import { Component, OnInit } from '@angular/core';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  producto = {}
  constructor() {
    this.producto = JSON.parse(localStorage.getItem("producto"))
  }

  ngOnInit() {

  }
}