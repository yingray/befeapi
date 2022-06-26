import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PetService } from 'src/api';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  providers: [PetService],
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets$: Observable<any> | undefined;

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.pets$ = this.petService.findPets();
  }
}
