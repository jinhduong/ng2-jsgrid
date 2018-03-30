var NumberField = jsGrid.NumberField;
var numberValueType = "number";
var stringValueType = "string";

var SelectAsyncField = function (config) {
    this.items = [];
    this.selectedIndex = -1;
    this.valueField = "";
    this.textField = "";

    if (config.valueField && config.items && config.items.length) {
        var firstItemValue = config.items[0][config.valueField];
        this.valueType = (typeof firstItemValue) === numberValueType ? numberValueType : stringValueType;
    }

    this.sorter = this.valueType;

    NumberField.call(this, config);
};

SelectAsyncField.prototype = new NumberField({
    align: "center",
    valueType: numberValueType,

    itemTemplate: function (value) {
        var items = this.items,
            valueField = this.valueField,
            textField = this.textField,
            itemsAsync = this.itemsAsync,
            resultItem;

        if (valueField) {
            resultItem = $.grep(items, function (item, index) {
                return item[valueField] === value;
            })[0] || {};
        }
        else {
            resultItem = items[value];
        }

        var result = (textField ? resultItem[textField] : resultItem);

        return (result === undefined || result === null) ? "" : result;
    },

    filterTemplate: function () {

        var that = this;

        if (!this.filtering)
            return "";

        var grid = this._grid,
            $result;

        var promise = this._createSelect().then(function ($elem) {

            if (that.autosearch && $elem) {
                $elem.on("change", function (e) {
                    grid.search();
                });
            }

            that.filterControl = $elem;

            return $elem;
        });

        this.filterControl = $('<input type="text">');

        return promise;
    },

    insertTemplate: function () {

        var that = this;

        if (!this.inserting)
            return "";

        var promise = this._createSelect().then(function ($elem) {

            that.insertControl = $elem;

            return $elem;
        });

        return promise;
    },

    editTemplate: function (value) {
        if (!this.editing)
            return this.itemTemplate.apply(this, arguments);

        var $result = this.editControl = this._createSelect();
        (value !== undefined) && $result.val(value);
        return $result;
    },

    filterValue: function () {
        var val = this.filterControl.val();
        return this.valueType === numberValueType ? parseInt(val || 0, 10) : val;
    },

    insertValue: function () {
        var val = this.insertControl.val();
        return this.valueType === numberValueType ? parseInt(val || 0, 10) : val;
    },

    editValue: function () {
        var val = this.editControl.val();
        return this.valueType === numberValueType ? parseInt(val || 0, 10) : val;
    },

    _createSelect: function () {
        var $result = $("<select class='form-control'>"),
            valueField = this.valueField,
            textField = this.textField,
            items = this.items;
        itemsAsync = this.itemsAsync;
        selectedIndex = this.selectedIndex;

        var $elem;

        return new Promise(function (res, rej) {
            if (itemsAsync) {
                itemsAsync.then(function (data) {
                    $elem = _renderSelect(data);
                    res($elem);
                });
            } else {
                $elem = _renderSelect(items);
                res($elem);
            }
        });

        function _renderSelect(items) {

            // Add null value
            $("<option>")
                .attr("value", 0)
                .text("-- Select --")
                .appendTo($result);

            $.each(items, function (index, item) {
                var value = valueField ? item[valueField] : index,
                    text = textField ? item[textField] : item;

                var $option = $("<option>")
                    .attr("value", value)
                    .text(text)
                    .appendTo($result);

                $option.prop("selected", (selectedIndex === index));
            });

            $result.prop("disabled", !!this.readOnly);

            return $result;
        }
    }
});

jsGrid.fields.selectasync = SelectAsyncField;