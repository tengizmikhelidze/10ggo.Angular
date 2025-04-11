import {ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import {ToolbarService} from './services/toolbar.service';
import {Toolbar} from 'primeng/toolbar';

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
  title = signal<string>("");

  constructor(private toolbarService: ToolbarService) {}

  ngOnInit() {
    this.toolbarService.title$.subscribe(value => {
      this.title.set(value)
    });
  }
}
