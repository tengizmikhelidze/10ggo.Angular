import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Menu} from 'primeng/menu';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-sidebar-menu',
  imports: [
    Menu,
    RouterLink,
    NgIf,
    RouterLinkActive
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
          icon: 'pi pi-sitemap',
          route: '/apps/bracket'
        },
        {
          label: 'Sudoku',
          icon: 'pi pi-table',
          route: '/apps/sudoku'
        },
        {
          label: 'Secret Santa',
          icon: 'pi pi-gift',
          route: '/apps/secret-sante'
        }
      ]
    },
  ]
}
