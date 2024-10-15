import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultFooterComponent } from './containers/default-layout/default-footer/default-footer.component';
import { DefaultHeaderComponent } from './containers/default-layout/default-header/default-header.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { DefaultSideBarComponent } from './containers/default-layout/default-side-bar/default-side-bar.component';
import { HttpErrorInterceptor } from './core/interceptors/error.interceptor';
import { SharedModule } from './shared/shared/shared.module';
import { UserState } from './store/states/user.state';


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
    SharedModule,
    HttpClientModule,
    NgxsModule.forRoot([UserState]),
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', // Position des notifications toast
      preventDuplicates: true, // Eviter les doublons
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }],
  bootstrap: [AppComponent],

})
export class AppModule { }
