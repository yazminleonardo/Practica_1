import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';


@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage {
  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    ev.detail.complete();
    
}
constructor() { }
onclick(){
}
}
