# ng2-jsGrid
Angular component is written to jsGrid ([http://js-grid.com/](http://js-grid.com/))

## Requirement
- jquery
- jsgrid

## Install
- `npm install jquery --save`
- `npm install jsgrid --save`
- `npm install ng2-jsgrid --save`

## Using

### Add to module
```ts
...
import { JsGridModule } from 'ng2-jsgrid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    JsGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

### 1.Basic Scenario - OData Service

**.html**
``` html
<js-grid [source]="sourceApi" [options]="options" ></js-grid>
```

**.component.ts**

The component have 2 inputs:
> options: `object` - jsGrid options config ([http://js-grid.com/docs/#configuration](http://js-grid.com/docs/#configuration))

> source: `function(filter): Promise<PageResponse>` - The function with input is `filter` and return a promise type is `PageResponse`
  > - filter `object`: {pageIndex:number, pageSize :number, sortField:string, sortOrder:string}
  > - PageResponse `object` : {itemsCount: number, data: any[]}
[http://js-grid.com/docs/#grid-controller](http://js-grid.com/docs/#grid-controller)

``` ts
options: any;
sourceApi: any;

constructor(private http: Http) {

}

ngOnInit(): void {
    this.sourceApi = (filter: FilterModel) => {
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
      ]
    };
  }
```

> Note: You can overrite `controller` object in `options`.

### 2.Use original options

You just set `useOriginal` property in `options` is `false`.
