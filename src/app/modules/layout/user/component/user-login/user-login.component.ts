import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserTokenService } from 'src/app/infrastructure/services/auth/user-token.service';
import { ToastrService } from 'src/app/infrastructure/services/generally/toastr.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userTokenForm!: FormGroup;
  hide = true;

  constructor(
    private userLogin: UserTokenService,
    private router: Router,
    private cookieService: CookieService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.userTokenForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('')
    });
  }

  getErrorMessage(): string {
    if (this.userTokenForm.valid && this.userTokenForm.get('email')!.value.hasError('required')) {
      return 'You must enter a value';
    }
    return this.userTokenForm.valid && this.userTokenForm.get('email')!.value.hasError('email') ? 'Not a valid email' : '';
  }

  onLogin(): void {
    this.userLogin.postToken(this.userTokenForm.value).subscribe({
      next: (res: any) => {
        localStorage.setItem('TOKEN', res.jwtToken);
        // this.consultarUsuario();
        this.toastrService.success('This is a success message!', 'Success');
        setTimeout(() => {
          window.location.reload();
        }, 3000);
        this.router.navigateByUrl('/home');
      }, error: (res:any) =>{
        this.toastrService.error(res.error.message,"Login error");
      }
    });
  }

  // consultarUsuario(): void {
  //   this.customerService
  //     .getByEmail(this.userTokenForm.get('email')!.value)
  //     .subscribe({
  //       next: (res: any) => {
  //         this.cookieService.set('usuario', JSON.stringify(res));
  //         this.toasterService.success('This is a success message!', 'Success');
  //       }, error: (res:any) =>{
  //         this.toasterService.error(res.error.message,"Login error");
  //       }
  //     })
  // }

  onCreater(): void {
    this.router.navigateByUrl('/user-create');
  }
}
