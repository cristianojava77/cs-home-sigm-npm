import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonService } from '../service/person.service';
import { Person } from '../model/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  persons: Observable<Person[]>;

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.persons = this.personService.readAll();
  }

  delete(id: number) {
    this.personService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  view(id: number) {
    this.router.navigate(['read', id]);
  }

}
