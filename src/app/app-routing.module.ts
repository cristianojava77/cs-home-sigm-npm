import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonCreateComponent } from './person-create/person-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'person', pathMatch: 'full' },
  { path: 'person-list', component: PersonListComponent },
  { path: 'person-create', component: PersonCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
