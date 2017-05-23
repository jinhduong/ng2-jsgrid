# Ng2Jsgrid

## Example

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
