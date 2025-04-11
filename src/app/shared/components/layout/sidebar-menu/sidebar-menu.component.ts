import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Menu} from 'primeng/menu';

@Component({
  selector: 'app-sidebar-menu',
  imports: [
    Menu
  ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Apps',
      items: [
        {
          label: 'Bracket',
          icon: 'pi pi-sitemap'
        }
      ]
    },
  ]
}
