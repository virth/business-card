import { Component } from '@angular/core';
import { BusinessCard} from './business-card';
import { CardService } from './card.service';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: "card-selection",
    templateUrl: "app/card-selection.html",
    providers: [CardService]
})

export class CardSelectionComponent {
    select(card: BusinessCard) {
        let link = ['Detail', { id: card.id }];
        this.router.navigate(link);
    }
    constructor(
        private cardService: CardService,
        private router: Router
    ) { }

    businessCards: BusinessCard[] = this.cardService.getCards();

}