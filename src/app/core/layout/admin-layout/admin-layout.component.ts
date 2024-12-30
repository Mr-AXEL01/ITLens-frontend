import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AdminLayoutHeaderComponent} from '../../components/admin-layout-header/admin-layout-header.component';
import {AdminLayoutFooterComponent} from '../../components/admin-layout-footer/admin-layout-footer.component';

@Component({
  selector: 'app-admin-layout',
  imports: [
    RouterOutlet,
    AdminLayoutHeaderComponent,
    AdminLayoutFooterComponent,
  ],
  standalone: true,
  template: `
    <app-admin-layout-header></app-admin-layout-header>
    <main class="min-h-[80vh] bg-gray-100 p-6">
      <router-outlet></router-outlet>
    </main>
    <app-admin-layout-footer></app-admin-layout-footer>
  `
})
export class AdminLayoutComponent {

}
