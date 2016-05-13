import { Component } from '@angular/core';
import { CardSelectionComponent } from './card-selection.component';
import { CardDetailComponent } from './card-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'business-card',
  templateUrl: 'app/app.html',
  directives: [CardSelectionComponent, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  {
    path: '/cards',
    name: 'Cards',
    component: CardSelectionComponent
  },
  {
    path: '/detail:id',
    name: 'Detail',
    component: CardDetailComponent
  }
])


export class AppComponent { 
 
}