import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './3d/starter/starter.component';

const routes: Routes = [
  { path: 'starter', component: StarterComponent },
  { path: '', redirectTo: '/starter', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
