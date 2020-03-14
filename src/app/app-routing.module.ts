import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ShopComponent } from './shop/shop.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { TherapyComponent } from './therapy/therapy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MobileFriendsComponent } from './mobile-friends/mobile-friends.component';
import { LogopedicArticleComponent } from './logopedic-article/logopedic-article.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'sklep', component: ShopComponent},
  {path: 'diagnoza', component: DiagnosisComponent},
  {path: 'terapia', component: TherapyComponent},
  {path: 'o-mnie', component: MainComponent},
  {path: 'mobilni-przyjaciele', component: MobileFriendsComponent},
  {path: 'artykuly', component: LogopedicArticleComponent},
  {path: 'kontakt', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
