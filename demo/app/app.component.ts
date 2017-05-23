import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  options: any;
  title = 'app works!';
  ngOnInit(): void {
    this.options = {
      width: '100%',
      sorting: true,
      paging: true,

      data: [
        { 'Name': 'Dinh', 'Age': 26 },
        { 'Name': 'Dinh1', 'Age': 26 }
      ],

      fields: [
        { name: 'Name', type: 'text', width: 150 },
        { name: 'Age', type: 'number', width: 50 }
      ]
    };
  }
}
