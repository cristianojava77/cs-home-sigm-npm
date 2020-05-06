import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonCreateComponent } from './person-create/person-create.component';
import { PersonReadComponent } from './person-read/person-read.component';
import { PersonUpdateComponent } from './person-update/person-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'person', pathMatch: 'full' },
  { path: 'person-list', component: PersonListComponent },
  { path: 'person-create', component: PersonCreateComponent },
  { path: 'person-read/:id', component: PersonReadComponent },
  { path: 'person-update/:id', component: PersonUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
