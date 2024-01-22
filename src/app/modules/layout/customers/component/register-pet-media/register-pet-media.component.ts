import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/infrastructure/services/media/media.service';

@Component({
  selector: 'app-register-pet-media',
  templateUrl: './register-pet-media.component.html',
  styleUrls: ['./register-pet-media.component.css']
})
export class RegisterPetMediaComponent implements OnInit {

  url?: string;

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }

  upload(event: any): void {

    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      this.mediaService.uploadFile(formData)
        .subscribe({
          next: (response: any) => {
            console.log('response', response);
            this.url = response.url;
          },
          error: (response: any) => console.log(response.error)
        });
    }
  }
}
