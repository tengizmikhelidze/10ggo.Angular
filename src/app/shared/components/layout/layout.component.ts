import { Component } from '@angular/core';
import {ToolbarComponent} from '../toolbar/toolbar.component';

@Component({
  selector: 'app-layout',
  imports: [
    ToolbarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
