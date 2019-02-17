import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej2awaybinding',
  templateUrl: './ej2awaybinding.component.html',
  styleUrls: ['./ej2awaybinding.component.css']
})
export class Ej2awaybindingComponent implements OnInit {
  texto = 'Texto original al cargar';
  constructor() { }

  ngOnInit() {
  }

}
