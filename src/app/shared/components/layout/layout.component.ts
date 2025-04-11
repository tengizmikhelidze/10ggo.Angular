import { Component } from '@angular/core';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {SidebarMenuComponent} from './sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-layout',
  imports: [
    ToolbarComponent,
    SidebarMenuComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
