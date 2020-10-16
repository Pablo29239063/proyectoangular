import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthServiceService } from './auth-service.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { navbarComponent } from './navbar/navbar.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { DuplicarPipe } from './duplicar.pipe';
import { ReactiveFormsModule,} from '@angular/forms';
import { ProductosComponent } from './productos/productos.component';
import { VerComponent } from './ver/ver.component';
//import { EventEmitterComponent } from './event-emitter/event-emitter.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotfoundComponent,
    HomeComponent,
    navbarComponent,
    VistaPrincipalComponent,
    DuplicarPipe,
    ProductosComponent,
    VerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
