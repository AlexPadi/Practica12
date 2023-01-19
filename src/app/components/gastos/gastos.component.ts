import { Component } from '@angular/core';
import {GastoService} from 'src/app/services/gasto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent {
  constructor(public gastoService:GastoService) {}
}
