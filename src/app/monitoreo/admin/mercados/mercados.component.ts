import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mercados',
  imports: [SharedModule, NgbDropdownModule],
  templateUrl: './mercados.component.html',
  styleUrl: './mercados.component.scss'
})
export class MercadosComponent {

}
