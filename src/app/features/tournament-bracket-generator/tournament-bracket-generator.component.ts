import {Component} from '@angular/core';
import {AppToolbarTitle} from '../../shared/components/layout/toolbar/base-toolbar.component';
import {ToolbarService} from '../../shared/components/layout/toolbar/services/toolbar.service';

@Component({
  selector: 'app-tournament-bracket-generator',
  imports: [],
  templateUrl: './tournament-bracket-generator.component.html',
  styleUrl: './tournament-bracket-generator.component.scss'
})
export class TournamentBracketGeneratorComponent extends AppToolbarTitle {
  toolbarTitle = "Tournament Bracket Generator";

  constructor(toolbarService: ToolbarService) {
    super(toolbarService);
  }
}
