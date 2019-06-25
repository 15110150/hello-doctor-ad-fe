import { NgModule, Component, ViewChild, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDrawerComponent, DxDrawerModule, DxListModule, DxRadioGroupModule, DxToolbarModule } from 'devextreme-angular';
import { Injectable } from '@angular/core';
import { Category, Service } from '../services/sharedServices/navbarService';
import DataSource from 'devextreme/data/data_source';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import { navItems } from '../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  providers: [Service],
})
export class DefaultLayoutComponent {
    public navItems = navItems;
    public sidebarMinimized = true;
    private changes: MutationObserver;
    public element: HTMLElement = document.body;
    constructor() {
  
      this.changes = new MutationObserver((mutations) => {
        this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
      });
  
      this.changes.observe(<Element>this.element, {
        attributes: true
      });
    }
}
