import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RhRoutingModule } from './rh-routing.module';
import { RhComponent } from './rh.component';


@NgModule({
  declarations: [
    RhComponent
  ],
  imports: [
    CommonModule,
    RhRoutingModule,
    RouterOutlet
  ]
})
export class RhModule { }
