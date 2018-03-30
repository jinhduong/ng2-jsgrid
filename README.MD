# ng2-jsgrid

## Installation

To install this library, run:

```bash
$ npm install ng2-jsgrid --save
```

## Documents
https://jinhduong.github.io/ng2-jsgrid/index.html

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import
import { GridModule } from 'ng2-jsgrid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```typescript
import { Component, OnInit } from '@angular/core';
import { Field } from 'ng2-jsgrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fields: Field[];
  api = async (filter) => {
    // Call from API with current filter
    // Some samples:
    // const result = await this._someService.getDate(filter).toPromise();

    console.log(filter);

    const promise = new Promise((res) => {
      setTimeout(() => {
        res({
          itemsCount: 12,
          data: [
            { name: 'John', age: 30 },
            { name: 'Smith', age: 46 },
          ]
        });
      }, 3000);
    });

    const result = await promise;
    return result;
  }
  ngOnInit(): void {
    this.fields = [
      { name: 'name', title: 'Name' },
      { name: 'age', title: 'Age' }
    ];
  }
}

```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [jinhduong](mailto:0961020@gmail.com)
