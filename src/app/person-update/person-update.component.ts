import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.scss']
})
export class PersonUpdateComponent implements OnInit {

  id: number;
  person: Person;
  disabled = true;


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

  onSubmit() {
    this.update();
  }

  update() {
    this.personService.update(this.person)
      .subscribe(data => console.log(data), error => console.log(error));
    this.close();
  }

  close() {
    this.router.navigate(['/person-list']);
  }

  enableUpdate() {
    this.disabled = false;
  }

}
