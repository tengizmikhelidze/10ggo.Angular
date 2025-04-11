import {OnDestroy, OnInit} from '@angular/core';
import {ToolbarService} from './services/toolbar.service';

export abstract class AppToolbarTitle implements OnInit, OnDestroy {
  abstract pageTitle: string;

  constructor(protected toolbarService: ToolbarService) {}

  ngOnInit(): void {
    this.toolbarService.setTitle(this.pageTitle);
  }

  ngOnDestroy(): void {
    this.toolbarService.resetTitle();
  }
}
