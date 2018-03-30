/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { GridModule } from 'ng2-jsgrid';

@Component({
  selector: 'app',
  template: `<app-grid [api]="api" [fields]="fields" ></app-grid>`
})
class AppComponent implements OnInit {
  fields: Field[];
  api = async (filter) => {
    return {
      itemsCount: 12,
      data: [
        { name: 'DINH', age: 12 },
        { name: 'DINH22', age: 16 },
      ]
    };
  }
  ngOnInit(): void {
    this.fields = [
      { name: 'name', title: 'Name' },
      { name: 'age', title: 'Age' }
    ];
  }
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, GridModule]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
