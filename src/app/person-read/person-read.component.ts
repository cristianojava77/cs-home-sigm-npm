import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../service/person.service';


@Component({
  selector: 'app-person-read',
  templateUrl: './person-read.component.html',
  styleUrls: ['./person-read.component.scss']
})
export class PersonReadComponent implements OnInit {

  id: number;
  person: Person;

  constructor(private route: ActivatedRoute, private router: Router, private personService: PersonService) { }

  ngOnInit(): void {
    this.person = new Person();
    this.id = this.route.snapshot.params['id'];
    this.personService.read(this.id)
      .subscribe(data => {
        console.log(data);
        this.person = data;
      }, error => console.log(error));
  }

  close() {
    this.router.navigate(['/person-list']);
  }

}
