import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableViewComponent } from './table-view/table-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabela',
    pathMatch: 'full'
  },
  { path: 'tabela', component: TableViewComponent },
  { path: 'pocetna', component: LandingPageComponent },
  { path: 'administracija', component: UnderConstructionComponent },
  { path: 'izvestaji', component: UnderConstructionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
