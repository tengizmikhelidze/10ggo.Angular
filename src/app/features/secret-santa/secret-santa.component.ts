import { Component } from '@angular/core';
import {AppToolbarTitle} from '../../shared/components/layout/toolbar/base-toolbar.component';
import {ToolbarService} from '../../shared/components/layout/toolbar/services/toolbar.service';

@Component({
  selector: 'app-secret-santa',
  imports: [],
  templateUrl: './secret-santa.component.html',
  styleUrl: './secret-santa.component.scss'
})
export class SecretSantaComponent extends AppToolbarTitle {
  toolbarTitle = "Apps / Secret Santa Generator";

  constructor(toolbarService: ToolbarService) {
    super(toolbarService);
  }
}
