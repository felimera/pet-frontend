import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Pet } from 'src/app/core/models/pet.model';
import { ToasterService } from 'src/app/infrastructure/services/generally/toaster.service';
import { PetService } from 'src/app/infrastructure/services/pet/pet.service';

@Component({
  selector: 'app-register-pet',
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.css']
})
export class RegisterPetComponent implements OnInit {

  datePipe = new DatePipe('en-US');

  petForm: FormGroup<any> | any;

  constructor(
    private dateAdapter: DateAdapter<Date>,
    private petService: PetService,
    private toasterService: ToasterService
  ) {
    this.dateAdapter.setLocale('Es');
  }

  ngOnInit(): void {
    this.petForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      race: new FormControl('', [Validators.required]),
      characteristicsExtremities: new FormControl('', [Validators.required]),
      idCustomerEntity: new FormControl(0, [Validators.required]),
      weightValue: new FormControl('', [Validators.required]),
      idMassMeasurementUnitsEntity: new FormControl(0, [Validators.required]),
      idHairColorEntity: new FormControl(0, [Validators.required]),
      idBodySizeEntity: new FormControl(0, [Validators.required]),
      idTypeFigureEntity: new FormControl(0, [Validators.required]),
      idEyeColorEntity: new FormControl(0, [Validators.required]),
      idPetCategoryEntity: new FormControl(0, [Validators.required]),
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

  clearWeightValue(): void {
    this.petForm.get("weightValue").setValue('');
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

  receivePetCategoryMessage($event: number): void {
    this.petForm.get("idPetCategoryEntity").setValue($event);
  }

  receiveMassMeasurementUnitsMessage($event: number): void {
    this.petForm.get("idMassMeasurementUnitsEntity").setValue($event);
  }

  getFormatearFecha(dateOld: any): string | null {
    return this.datePipe.transform(dateOld, 'yyyy-MM-dd');
  }

  clearAllFields(): void {
    this.clearName();
    this.clearAge();
    this.clearPhone();
    this.clearWeightValue();
    this.clearRace();
    this.petForm.get("birthdate").setValue('');
    this.petForm.get("gender").setValue('');
    this.petForm.get("characteristicsExtremities").setValue('');
    this.petForm.get("idCustomerEntity").setValue(0);
  }

  onCreater(): void {
    const birthdate = this.petForm.get("birthdate").value;
    const birthdateFormateada = this.getFormatearFecha(birthdate);
    this.petForm.get("birthdate").setValue(birthdateFormateada);

    this.petService
      .createPet(this.petForm.value)
      .subscribe({
        next: (res: Pet) => {
          if (res) {
            this.toasterService.info('Pet successfully registered.', "Pet create");
            setTimeout(() => {
              this.clearAllFields();
            }, 3000);
          }
        },
        error: (res: any) => console.log('error', res)
      });
  }
}

