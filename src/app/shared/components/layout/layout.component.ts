import {Component, inject} from '@angular/core';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {SidebarMenuComponent} from './sidebar-menu/sidebar-menu.component';
import {ShrinkSidebarService} from './sidebar-menu/services/shrink-sidebar.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [
    ToolbarComponent,
    SidebarMenuComponent,
    NgClass
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  public shrinkSidebarService = inject(ShrinkSidebarService)
}
