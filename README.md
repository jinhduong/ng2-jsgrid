# ng2-jsGrid
Angular component is written for jsGrid ([http://js-grid.com/](http://js-grid.com/))

## Requirement
- jquery
- jsgrid

## Install
- `npm install jquery --save`
- `npm install jsgrid --save`
- `npm install ng2-jsgrid --save`

## Using

### Add to module
```js
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

### Component parameters

> options `object`: jsGrid options config ([http://js-grid.com/docs/#configuration](http://js-grid.com/docs/#configuration))

> source `function(filter) => Promise<PageResponse>`: jsGrid source function api

    - filter `object`: {
        pageIndex:number,
        pageSize :number,
        sortField:string,
        sortOrder:string
      }
      
    - PageResponse `object`: {
        itemsCount: number,
        data: any[]
      }

> action `ODataController` : The actions since use ODataService

    - ODataController `object`{
        insertItem: function(item),
        updateItem: function(item),
        deleteItem: function(item)
      }

### 1.Basic Scenario - OData Service

**.html**
``` html
<js-grid [source]="sourceApi" [options]="options" ></js-grid>
```

**.component.ts**

``` js
...
import { PageResponse, FilterModel, ODataController } from 'ng2-jsrid';

options: any;
sourceApi: any;
gridAction = new ODataController();

constructor(private http: Http) {}

ngOnInit(): void {

    this.gridAction.updateItem = (item) => {
      return new Promise(resolve => {
        // CALL TO API
      });
    };

    this.gridAction.insertItem = (item) => {
      return new Promise(resolve => {
        // CALL TO API
      });
    };

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
      ],
      editing: true,
      inserting: true
    };
  }
```

> Note: You can overrite `controller` object in `options`.

### 2.Use original options

You just set `useOriginal` property in `options` is `false`.
