import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'custom-page-title',
  templateUrl: './custom-page-title.component.html',
  styleUrls: ['./custom-page-title.component.scss']
})
export class CustomPageTitleComponent implements OnInit {
  @Input() title : string   = 'Titre de la page'
  constructor() { }

  ngOnInit(): void {
  }

}
