# Ng2Jsgrid

## Requirement
- jquery
- jsgrid

## Install
- `npm install jquery --save`
- `npm install jsgrid --save`
- `npm install ng2-jsgrid --save`

## Example

module:
```
import { JsGridModule } from 'ng2-jsgrid';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    JsGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

html: 
```
<js-grid [options]="options" ></js-grid>
```

.ts:
```
options: any;
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
```
