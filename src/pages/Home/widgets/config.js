const config = {
    components: {
        formily_antd5x: {
            includes: [
                'ArrayTable',
                'ArrayCards',
                'Checkbox',
                'Cascader',
                'DatePicker',
                'Editable',
                'Form',
                'FormItem',
                'FormGrid',
                'FormLayout',
                'FormTab',
                'FormCollapse',
                'Input',
                'NumberPicker',
                'Switch',
                'Space',
                'Select',
                'Submit',
                'Password',
                'PreviewText',
                'Radio',
                'Reset',
                'TimePicker',
                'Transfer',
                'TreeSelect',
                'Upload',
            ],
            excludes: ['Form'],
        },
        antd5x: {
            includes: ['Card', 'Slider', 'Rate'],
        },
        inlineComponents: {
            includes: ['Text'],
        },
    },
    schema: {
        nodeTypes: {
            string: 'SchemaField.String',
            number: 'SchemaField.Number',
            boolean: 'SchemaField.Boolean',
            date: 'SchemaField.Date',
            datetime: 'SchemaField.DateTime',
            array: 'SchemaField.Array',
            object: 'SchemaField.Object',
            void: 'SchemaField.Void',
            '@@default': 'SchemaField.Markup',
        },
    },
};

export default config;
