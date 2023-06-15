import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
import { SplashComponent } from './components/splash/splash.component';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
    RouterModule.forRoot([

      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule
  ],
  providers: [
    
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
