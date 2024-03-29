import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/core/models/customer.model';
import { CustomerDTO } from 'src/app/infrastructure/dto/customer.dto';
import { CustomerService } from 'src/app/infrastructure/services/customer/customer.service';
import { ToasterService } from 'src/app/infrastructure/services/generally/toaster.service';

@Component({
  selector: 'app-register-pet-owner',
  templateUrl: './register-pet-owner.component.html',
  styleUrls: ['./register-pet-owner.component.css']
})
export class RegisterPetOwnerComponent implements OnInit {

  customerForm: FormGroup<any> | any;

  value = 'Clear me';

  constructor(
    private customerService: CustomerService,
    private toaster: ToasterService
  ) { }

  ngOnInit(): void {

    this.customerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      homeAddress: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      isOlder: new FormControl(false, [Validators.required]),
    });
  }

  clearFirtName(): void {
    this.customerForm.get('firstName').setValue('');
  }

  clearLastName(): void {
    this.customerForm.get('lastName').setValue('');
  }

  clearHomeAddress(): void {
    this.customerForm.get('homeAddress').setValue('');
  }

  clearHomePhone(): void {
    this.customerForm.get('phone').setValue('');
  }

  clearHomeEmail(): void {
    this.customerForm.get('email').setValue('');
  }

  clearIsOlder(): void {
    this.customerForm.get("isOlder").setValue(false);
  }

  getErrorMessage(): string {
    if (this.customerForm.valid && this.customerForm.get('email')!.value.hasError('required')) {
      return 'You must enter a value';
    }
    return this.customerForm.valid && this.customerForm.get('email')!.value.hasError('email') ? 'Not a valid email' : '';
  }

  onCreater(): void {
    if (this.customerForm.valid) {
      this.customerService
        .createCustomer(this.customerForm.value)
        .subscribe({
          next: (res: Customer) => {
            if (res) {
              this.toaster.info("The client has been registered correctly.", "Manage customer information")
              setTimeout(() => {
                this.clearAllField();
              }, 3000);
            }
          },
          error: res => console.log('error', res.error)
        });
    } else {
      this.toaster.warning("You must register all mandatory data.", "Warning");
    }
  }

  clearAllField(): void {
    this.clearFirtName();
    this.clearLastName();
    this.clearHomeAddress();
    this.clearHomeEmail();
    this.clearHomePhone();
    this.clearIsOlder();
  }
}

