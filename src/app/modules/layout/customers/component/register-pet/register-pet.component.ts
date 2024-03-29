import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Pet } from 'src/app/core/models/pet.model';
import { PhotoPet } from 'src/app/core/models/photo-pet.model';
import { ToasterService } from 'src/app/infrastructure/services/generally/toaster.service';
import { MediaService } from 'src/app/infrastructure/services/media/media.service';
import { PetService } from 'src/app/infrastructure/services/pet/pet.service';
import { PhotoPetService } from 'src/app/infrastructure/services/photo/photo-pet.service';

@Component({
  selector: 'app-register-pet',
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.css']
})
export class RegisterPetComponent implements OnInit {

  datePipe = new DatePipe('en-US');

  petForm: FormGroup<any> | any;

  url?: string;

  constructor(
    private dateAdapter: DateAdapter<Date>,
    private petService: PetService,
    private toasterService: ToasterService,
    private mediaService: MediaService,
    private photoPetService: PhotoPetService
  ) {
    this.dateAdapter.setLocale('Es');
  }

  ngOnInit(): void {
    this.petForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      photo: new FormControl('', [Validators.required]),
      birthdate: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl('', [Validators.required]),
      characteristicsExtremities: new FormControl('', [Validators.required]),
      idCustomerEntity: new FormControl(0, [Validators.required]),
      weightValue: new FormControl('', [Validators.required]),
      idMassMeasurementUnitsEntity: new FormControl(0, [Validators.required]),
      idHairColorEntity: new FormControl(0, [Validators.required]),
      idTypeFigureEntity: new FormControl(0, [Validators.required]),
      idEyeColorEntity: new FormControl(0, [Validators.required]),
      idRaceEntity:new FormControl(0,[Validators.required])
    });
  }

  clearName(): void {
    this.petForm.get("name").setValue('');
  }

  clearAge(): void {
    this.petForm.get("age").setValue("");
  }

  clearPhoto(): void {
    this.petForm.get("photo").setValue("");
  }

  clearWeightValue(): void {
    this.petForm.get("weightValue").setValue('');
  }

  receiveMessage($event: number): void {
    this.petForm.get("idCustomerEntity").setValue($event);
  }

  receiveColorMessage($event: number): void {
    this.petForm.get("idHairColorEntity").setValue($event);
  }

  receiveTypeFigureMessage($event: number): void {
    this.petForm.get("idTypeFigureEntity").setValue($event);
  }

  receiveEyeColorMessage($event: number): void {
    this.petForm.get("idEyeColorEntity").setValue($event);
  }

  receiveMassMeasurementUnitsMessage($event: number): void {
    this.petForm.get("idMassMeasurementUnitsEntity").setValue($event);
  }

  receiveRaceMessage($event: number): void {
    this.petForm.get("idRaceEntity").setValue($event);
  }

  getFormatearFecha(dateOld: any): string | null {
    return this.datePipe.transform(dateOld, 'yyyy-MM-dd');
  }

  clearAllFields(): void {
    this.clearName();
    this.clearAge();
    this.clearPhoto();
    this.clearWeightValue();
    this.petForm.get("birthdate").setValue('');
    this.petForm.get("gender").setValue('');
    this.petForm.get("characteristicsExtremities").setValue('');
    this.petForm.get("idCustomerEntity").setValue(0);
  }

  onCreater(): void {
    const birthdate = this.petForm.get("birthdate").value;
    const birthdateFormateada = this.getFormatearFecha(birthdate);
    this.petForm.get("birthdate").setValue(birthdateFormateada);

    if (this.petForm.valid) {
      this.petService
        .createPet(this.petForm.value)
        .subscribe({
          next: (res: Pet) => {
            if (res) {
              this.createPhoto(res);
              this.toasterService.info('Pet successfully registered.', "Pet create");
              setTimeout(() => {
                this.clearAllFields();
              }, 3000);
            }
          },
          error: (res: any) => console.log('error', res)
        });
    } else {
      this.toasterService.warning("You must register all mandatory data.", "Warning");
    }
  }

  upload(event: any): void {

    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      this.mediaService.uploadFile(formData)
        .subscribe({
          next: (response: any) => {
            if (response) {
              this.url = response.url;
              this.petForm.get("photo").setValue(this.url);
            }
          },
          error: (response: any) => console.log(response.error)
        });
    }
  }

  createPhoto(data: Pet): void {

    const photoPet: PhotoPet = {
      location: data.photo,
      profilePicture: true,
      petId: data.id ? data.id : 0
    };
    this.photoPetService
      .createPhotoPet(photoPet)
      .subscribe({
        next: (res: PhotoPet) => { },
        error: (res: any) => console.log('error', res)
      });
  }
}

