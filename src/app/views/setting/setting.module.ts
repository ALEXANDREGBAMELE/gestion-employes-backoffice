import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { CompaniesComponent } from './companies/companies.component';


@NgModule({
  declarations: [
  
    SettingComponent,
       CompaniesComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
