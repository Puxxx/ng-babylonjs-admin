import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './3d/starter/starter.component';

const routes: Routes = [
  { path: 'babylon', component: StarterComponent },
  { path: '', redirectTo: '/babylon', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
