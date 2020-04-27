import { SocialDetailsComponent } from './components/social-details/social-details.component';
import { SocialComponent } from './components/social/social.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {path:'', redirectTo:'social', pathMatch:'full'},
  {path:'social', component:SocialComponent},
  {path:'socialDetails', component:SocialDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
