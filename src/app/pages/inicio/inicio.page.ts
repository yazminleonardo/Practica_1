import { Component, OnInit } from '@angular/core';

interface Componente{ 
  icon:string;
  name:string;
  redirecTo:string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:Componente[] = [
    { 
      icon:"glasses-outline",
      name:"ACTION SHEET PAGE",
      redirecTo:"/action"
    },
    { 
      icon:"pencil-outline",
      name:"ALERT PAGE",
      redirecTo:"/alert"
    },
    { 
      icon:"color-filter-outline",
      name:"ACCORDION PAGE",
      redirecTo:"/accordion"
    },
    { 
      icon:"logo-firebase",
      name:"BADGE PAGE",
      redirecTo:"/badge"
    },
    { 
      icon:"logo-apple-ar",
      name:"BREADCRUMBS PAGE",
      redirecTo:"/breadcrumbs"
    },
    { 
      icon:"stop-circle-outline",
      name:"BUTTON PAGE",
      redirecTo:"/button"
    },
    { 
      icon:"layers-outline",
      name:"RIPPLE - EFFECT PAGE",
      redirecTo:"/ripple-effect"
    },
    { 
      icon:"happy-outline",
      name:"CARD PAGE",
      redirecTo:"/card"
    },
    { 
      icon:"checkmark-outline",
      name:"CHECKBOX PAGE",
      redirecTo:"/checkbox"
    },
    { 
      icon:"hardware-chip-outline",
      name:"CHIP PAGE",
      redirecTo:"/chip"
    },
    { 
      icon:"clipboard-outline",
      name:"CONTENT PAGE",
      redirecTo:"/content"
    },
    { 
      icon:"calendar-outline",
      name:"DATETIME PAGE",
      redirecTo:"/datetime"
    },
    { 
      icon:"caret-back-circle-outline",
      name:"DATETIME-BUTTON PAGE",
      redirecTo:"/datetime-button"
    },
    { 
      icon:"bookmark-outline",
      name:"PICKER PAGE",
      redirecTo:"/picker"
    },
    { 
      icon:"color-palette-outline",
      name:"FAB PAGE",
      redirecTo:"/fab"
    },
    { 
      icon:"ellipsis-vertical-circle-outline",
      name:"MENU PAGE",
      redirecTo:"/menu"
    },
    { 
      icon:"extension-puzzle-outline",
      name:"MEDIA PAGE",
      redirecTo:"/media"
    },
    { 
      icon:"disc-outline",
      name:"GRID PAGE",
      redirecTo:"/grid"
    },
    { 
      icon:"sync-circle-outline",
      name:"ICONS PAGE",
      redirecTo:"/icons"
    },
    { 
      icon:"filter-outline",
      name:"INPUT PAGE",
      redirecTo:"/input"
    },
    { 
      icon:"navigate-outline",
      name:"NAVIGATION PAGE",
      redirecTo:"/nav"
    },
    { 
      icon:"nuclear-outline",
      name:"INFINITE-SCROLL PAGE",
      redirecTo:"/infinite-scroll"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
