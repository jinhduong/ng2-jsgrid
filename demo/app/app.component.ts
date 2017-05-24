import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PageResponse, FilterModel, ODataController } from '../../src';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  options: any;
  sourceApi: any;
  gridAction = new ODataController();

  constructor(private http: Http) {

  }

  ngOnInit(): void {

    this.gridAction.updateItem = (item) => {
      console.log(item);
      return new Promise(resolve => {
        resolve(item);
      });
    };

    this.gridAction.insertItem = (item) => {
      return new Promise(resolve => {
        resolve(item);
      });
    };

    this.sourceApi = (filter: FilterModel) => {
      console.log(filter);
      return new Promise(resolve => {
        this.http.get('https://jsonplaceholder.typicode.com/posts')
          .map(res => res.json())
          .subscribe(data => {
            const source: PageResponse = {
              data: data,
              itemsCount: data.length
            };
            resolve(source);
          });
      });
    };

    this.options = {
      fields: [
        { name: 'userId', type: 'text', width: 50 },
        { name: 'id', type: 'text', width: 50 },
        { name: 'title', type: 'text', },
        { name: 'body', type: 'text', },
        { type: 'control' }
      ],
      inserting: true,
      editing: true
    };
  }
}
