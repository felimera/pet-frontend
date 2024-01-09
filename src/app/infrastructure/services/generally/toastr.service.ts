import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor(private toastr: ToastrService) { }

  success(message: string, title?: string) {
    this.toastr.success(message, title);
  }

  error(message: string, title?: string) {
    this.toastr.error(message, title);
  }

  warning(message: string, title?: string) {
    this.toastr.warning(message, title);
  }

  info(message: string, title?: string) {
    this.toastr.info(message, title);
  }
}
