declare var $: any;

export class GridHtmlTemplate {
    public static editIconButton = '<input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit">';
    public static deleteIconButton = '<input class="jsgrid-button jsgrid-delete-button" type="button" title="Delete">';

    public static viewIconButton = `<button type="button" class="btn btn-default">
    <i class="mdi mdi-eye"></i></button>`;

    public static editButton = `<button type="button" class="btn btn-primary"><i class="fa fa-pencil"></i>
    <span class="hidden-sm-down hidden-md-down">Edit</span></button>`;

    public static deleteButton = `<button type="button" class="btn btn-danger">
    <i class="mdi mdi-delete-forever"></i> <span class="hidden-sm-down hidden-md-down">Delete</span></button>`;

    public static viewButton = `<button type="button" class="btn btn-default">
    <i class="mdi mdi-eye"></i> <span class="hidden-sm-down hidden-md-down">View</span></button>`;

    public static makeFilterSelectControl(data: string[][] | Promise<string[][]>) {
        if (data instanceof Promise) {
            data.then(lastData => {
                const $sel = $('<select>').addClass('form-control').css('width', '100%');
                // data.unshift(['', '-- Select --']); // this line will cause duplicate -- Select -- when click clearFilter in jsGrid
                $sel.append($('<option>').attr('value', '').text('-- Select --'));
                lastData.forEach(item => {
                    $sel.append($('<option>').attr('value', item[0]).text(item[1]));
                });
                return $sel;
            });
        } else {
            const $sel = $('<select>').addClass('form-control').css('width', '100%');
            // data.unshift(['', '-- Select --']); // this line will cause duplicate -- Select -- when click clearFilter in jsGrid
            $sel.append($('<option>').attr('value', '').text('-- Select --'));
            data.forEach(item => {
                $sel.append($('<option>').attr('value', item[0]).text(item[1]));
            });
            return $sel;
        }
    }
}
