import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {ToolbarService} from './services/toolbar.service';
import {Toolbar} from 'primeng/toolbar';
import {ShrinkSidebarService} from '../sidebar-menu/services/shrink-sidebar.service';

@Component({
  selector: 'app-toolbar',
  imports: [
    Toolbar
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit{
  public shrinkSidebarService = inject(ShrinkSidebarService)
  title = signal<string>("");

  constructor(private toolbarService: ToolbarService) {}

  ngOnInit() {
    this.toolbarService.title$.subscribe(value => {
      this.title.set(value)
    });
  }
}
