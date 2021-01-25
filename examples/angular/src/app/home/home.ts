import {Component, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'home',
  templateUrl: './home.html',
})
export class Home {
}

@NgModule({
  declarations: [Home],
  imports: [
    NgbDatepickerModule,
    RouterModule.forChild([{path: '', component: Home}]),
  ],
})
export class HomeModule {
}