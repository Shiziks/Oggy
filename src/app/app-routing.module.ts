import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertiseComponent } from './expertise/component/expertise/expertise.component';
import { FooterComponent } from './footer/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InquiryComponent } from './inquiry/components/inquiry/inquiry.component';
import { IntroductionComponent } from './introduction/component/introduction/introduction.component';
import { NavigationComponent } from './navigation/components/navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModalComponent } from './portfolio/components/modal/modal.component';
import { PortfolioComponent } from './portfolio/components/portfolio/portfolio.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent,
    
  },
  {
    path:"home",
    redirectTo: "",
    pathMatch: "full"
  },
  // {
  //   path:"introduction",
  //   component:IntroductionComponent

  // },
  {
    path: "portfolio",
    component:PortfolioComponent

  },
  // {
  //   path: "expertise",
  //   component: ExpertiseComponent
  // },
  // {
  //   path: "inquiry",
  //   component: InquiryComponent
  // },
  // {
  //   path: "contact",
  //   redirectTo: "/home",
  //   pathMatch: "full",
  // },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
