import { Component } from '@angular/core';
import { BusinessCard} from './business-card';
import { CardService } from './card.service';

@Component({
    selector: "card-selection",
    templateUrl : "app/card-selection.html",
    providers: [CardService]
})

export class CardSelectionComponent {
    select(card: BusinessCard) {
        alert("route to card detail");  
    }
    constructor(private cardService: CardService) { }
     businessCards :BusinessCard[] = this.cardService.getCards();
}