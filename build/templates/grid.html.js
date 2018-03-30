/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GridHtmlTemplate = (function () {
    function GridHtmlTemplate() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    GridHtmlTemplate.makeFilterSelectControl = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (data instanceof Promise) {
            data.then(function (lastData) {
                var /** @type {?} */ $sel = $('<select>').addClass('form-control').css('width', '100%');
                // data.unshift(['', '-- Select --']); // this line will cause duplicate -- Select -- when click clearFilter in jsGrid
                $sel.append($('<option>').attr('value', '').text('-- Select --'));
                lastData.forEach(function (item) {
                    $sel.append($('<option>').attr('value', item[0]).text(item[1]));
                });
                return $sel;
            });
        }
        else {
            var /** @type {?} */ $sel_1 = $('<select>').addClass('form-control').css('width', '100%');
            // data.unshift(['', '-- Select --']); // this line will cause duplicate -- Select -- when click clearFilter in jsGrid
            // data.unshift(['', '-- Select --']); // this line will cause duplicate -- Select -- when click clearFilter in jsGrid
            $sel_1.append($('<option>').attr('value', '').text('-- Select --'));
            data.forEach(function (item) {
                $sel_1.append($('<option>').attr('value', item[0]).text(item[1]));
            });
            return $sel_1;
        }
    };
    GridHtmlTemplate.editIconButton = '<input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit">';
    GridHtmlTemplate.deleteIconButton = '<input class="jsgrid-button jsgrid-delete-button" type="button" title="Delete">';
    GridHtmlTemplate.viewIconButton = "<button type=\"button\" class=\"btn btn-default\">\n    <i class=\"mdi mdi-eye\"></i></button>";
    GridHtmlTemplate.editButton = "<button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-pencil\"></i>\n    <span class=\"hidden-sm-down hidden-md-down\">Edit</span></button>";
    GridHtmlTemplate.deleteButton = "<button type=\"button\" class=\"btn btn-danger\">\n    <i class=\"mdi mdi-delete-forever\"></i> <span class=\"hidden-sm-down hidden-md-down\">Delete</span></button>";
    GridHtmlTemplate.viewButton = "<button type=\"button\" class=\"btn btn-default\">\n    <i class=\"mdi mdi-eye\"></i> <span class=\"hidden-sm-down hidden-md-down\">View</span></button>";
    return GridHtmlTemplate;
}());
export { GridHtmlTemplate };
function GridHtmlTemplate_tsickle_Closure_declarations() {
    /** @type {?} */
    GridHtmlTemplate.editIconButton;
    /** @type {?} */
    GridHtmlTemplate.deleteIconButton;
    /** @type {?} */
    GridHtmlTemplate.viewIconButton;
    /** @type {?} */
    GridHtmlTemplate.editButton;
    /** @type {?} */
    GridHtmlTemplate.deleteButton;
    /** @type {?} */
    GridHtmlTemplate.viewButton;
}
