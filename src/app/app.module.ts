import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultFooterComponent } from './containers/default-layout/default-footer/default-footer.component';
import { DefaultHeaderComponent } from './containers/default-layout/default-header/default-header.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { DefaultSideBarComponent } from './containers/default-layout/default-side-bar/default-side-bar.component';
import { SharedModule } from './shared/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent,
    DefaultSideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
