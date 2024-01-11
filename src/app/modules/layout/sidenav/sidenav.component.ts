import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/infrastructure/services/generally/toaster.service';
import { AccessPermitsService } from 'src/app/infrastructure/services/auth/access-permits.service';
import { CustomerDTO } from 'src/app/infrastructure/dto/customer.dto';
import { AccessPermits } from 'src/app/core/models/access-permits.model';
import { LinkRouterDTO } from 'src/app/infrastructure/dto/link-router.dto';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms',
          style({ opacity: 1 })
        )
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms',
          style({ opacity: 0 })
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' })
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  customer: CustomerDTO | any;
  navBarDatas: LinkRouterDTO[] = [];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private toasterService: ToasterService,
    private accessPermitsService: AccessPermitsService
  ) { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;

    if (this.cookieService.check('usuario')) {
      this.customer = JSON.parse(this.cookieService.get('usuario'));
      this.loadBrowserDataWithEmail(this.customer.email);
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  loadBrowserDataWithEmail(email: string): void {
    this.accessPermitsService
      .getAccessPermitsByEmailCustomer(email)
      .subscribe({
        next: (res: AccessPermits) => {
          if (res) {
            res.listRouterList.forEach(data => {
              this.navBarDatas.push({ label: data.label, acronym: data.acronym, icon: data.icon, url: data.url, description: data.description });
            })
          }
        }, error: (res: any) => console.log('res', res)
      });
  }

  isExistUser(): boolean {
    return (this.cookieService.check('usuario') && localStorage.getItem('TOKEN')!.length > 0)
  }

  cerrarSesion(): void {
    this.cookieService.delete('usuario');
    localStorage.removeItem('TOKEN');
    this.toasterService.info('Haz cerrado sesion.', 'User sign out')
    this.router.navigateByUrl('/home');
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
}
