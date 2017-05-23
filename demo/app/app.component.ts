import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PageResponse, FilterModel } from '../../src';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  options: any;
  sourceApi: any;

  constructor(private http: Http) {

  }

  ngOnInit(): void {

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
      editing: true,
      controller: {
        updateItem: (item) => {
          console.log(item);
          return item;
        }
      }
    };
  }
}
