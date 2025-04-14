import {Component, inject, OnInit} from '@angular/core';
import {LayoutComponent} from './shared/components/layout/layout.component';
import {RouterOutlet} from '@angular/router';
import {ThemeService} from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    LayoutComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
