import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface PetCategories {
  id: string;
  value: string;
}

@Component({
  selector: 'app-register-pet',
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.css']
})
export class RegisterPetComponent implements OnInit {

  petCategories: PetCategories[] = [
    { id: 'pizza-1', value: 'Pizza' },
    { id: 'tacos-2', value: 'Tacos' },
    { id: 'steak-0', value: 'Steak' },
  ];

  petForm: FormGroup<any> | any;

  ngOnInit(): void {
    this.petForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      petCategory: new FormControl('', [Validators.required]),
      race: new FormControl('', [Validators.required]),
      wheight: new FormControl('', [Validators.required]),
      characteristicsExtremities: new FormControl('', [Validators.required]),
      idCustomerEntity: new FormControl(0, [Validators.required]),
      idHairColorEntity: new FormControl(0, [Validators.required]),
      idBodySizeEntity: new FormControl(0, [Validators.required]),
      idTypeFigureEntity: new FormControl(0, [Validators.required]),
      idEyeColorEntity: new FormControl(0, [Validators.required]),
    });
  }

  clearName(): void {
    this.petForm.get("name").setValue('');
  }

  clearAge(): void {
    this.petForm.get("age").setValue("");
  }

  clearPhone(): void {
    this.petForm.get("phone").setValue("");
  }

  clearWheight(): void {
    this.petForm.get("wheight");
  }

  clearRace(): void {
    this.petForm.get("race").setValue("");
  }

  receiveMessage($event: number): void {
    this.petForm.get("idCustomerEntity").setValue($event);
  }

  receiveColorMessage($event: number): void {
    this.petForm.get("idHairColorEntity").setValue($event);
  }

  receiveBodySizeMessage($event: number): void {
    this.petForm.get("idBodySizeEntity").setValue($event);
  }

  receiveTypeFigureMessage($event: number): void {
    this.petForm.get("idTypeFigureEntity").setValue($event);
  }

  receiveEyeColorMessage($event: number): void {
    this.petForm.get("idEyeColorEntity").setValue($event);
  }
}

