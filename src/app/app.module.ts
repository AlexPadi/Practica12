import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import {GastoService} from './services/gasto.service';
import {FormsModule, NgForm} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    GastoService    
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
