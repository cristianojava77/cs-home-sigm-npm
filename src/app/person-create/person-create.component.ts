import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../model/person';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss']
})
export class PersonCreateComponent implements OnInit {

  person: Person;

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
    this.newPerson();
  }

  newPerson(): void {
    this.person = new Person();
  }

  save() {
    this.personService.create(this.person)
      .subscribe(data => console.log(data), error => console.log(error));

  }

  onSubmit() {
    this.save();
    this.close();
  }

  close() {
    this.router.navigate(['/person-list']);
  }

}
