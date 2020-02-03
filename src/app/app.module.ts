import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ShopComponent } from './shop/shop.component';
import { MobileFriendsComponent } from './mobile-friends/mobile-friends.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { TherapyComponent } from './therapy/therapy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ShopComponent,
    MobileFriendsComponent,
    DiagnosisComponent,
    TherapyComponent,
    ContactUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
