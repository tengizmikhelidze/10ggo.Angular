import {Directive, OnDestroy, OnInit} from '@angular/core';
import {ToolbarService} from './services/toolbar.service';

@Directive()
export abstract class AppToolbarTitle implements OnInit, OnDestroy {
  abstract toolbarTitle: string;

  protected constructor(protected toolbarService: ToolbarService) {}

  ngOnInit(): void {
    this.toolbarService.setTitle(this.toolbarTitle);
  }

  ngOnDestroy(): void {
    this.toolbarService.resetTitle();
  }
}
