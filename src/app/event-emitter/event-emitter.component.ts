import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.css']
})
export class EventEmitterComponent implements OnInit {

  pedidos : any[];

  constructor(private data : AuthServiceService, private router : Router) { }

  ngOnInit() {
    this.pedidos = this.data.productosSeleccionados;
  }

  calcularTotal(){
    let total = 0;
    for(let item of this.pedidos){
      total += item.precio
    }
    return total;
  }

  onPagar(){
    this.data.submitPedido()
      .subscribe((data)=>this.router.navigate(['/app-vista-principal']))
    
  }

}
