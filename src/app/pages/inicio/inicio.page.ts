import { Component, OnInit } from '@angular/core';

//
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

  //arreglo
  componentes:Componente[] =[
    {
      icon:"finger-print-outline",
      name:"Action-Sheet",
      redirecTo:"/action-sheet",
    },
    {
      icon:"paw-outline",
      name:"Alert",
      redirecTo:"/alert",
    },
    {
      icon:"bandage-outline",
      name:"Accordion",
      redirecTo:"/accordion",
    },
    {
      icon:"newspaper-outline",
      name:"Tipography",
      redirecTo:"/tipography",
    },
    {
      icon:"footsteps-outline",
      name:"Toolbar",
      redirecTo:"/toolbar",
    },
    {
      icon:"game-controller-outline",
      name:"Toggle",
      redirecTo:"/toggle",
    },
    {
      icon:"grid-outline",
      name:"Toast",
      redirecTo:"/toast",
    },
    {
      icon:"ice-cream-outline",
      name:"Popover",
      redirecTo:"/popover",
    },
    {
      icon:"battery-half-outline",
      name:"Range",
      redirecTo:"/range",
    },
    {
      icon:"nutrition-outline",
      name:"Select",
      redirecTo:"/select",
    },
    {
      icon:"paper-plane-outline",
      name:"Segment",
      redirecTo:"/segment",
    },
    {
      icon:"options-outline",
      name:"Searchbar",
      redirecTo:"/searchbar",
    },
    {
      icon:"radio-outline",
      name:"Routing",
      redirecTo:"/ion-routing",
    },
    {
      icon:"pizza-outline",
      name:"Tabs",
      redirecTo:"/tabs",
    },
    {
      icon:"reorder-four-outline",
      name:"Reorder",
      redirecTo:"/reorder",
    },
    {
      icon:"airplane-outline",
      name:"Slides",
      redirecTo:"/slides",
    },
    {
      icon:"cellular-outline",
      name:"Radio",
      redirecTo:"/radio",
    },
    {
      icon:"cloud-upload-outline",
      name:"Refresher",
      redirecTo:"/refresher",
    },
    {
      icon:"cut-outline",
      name:"Progress Indicators",
      redirecTo:"/progress-indicators",
    },
    {
      icon:"ellipsis-vertical-outline",
      name:"List",
      redirecTo:"/list",
    },
    {
      icon:"color-palette-outline",
      name:"Item",
      redirecTo:"/item",
    },
    {
      icon:"heart-circle-outline",
      name:"Modal",
      redirecTo:"/modal",
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
