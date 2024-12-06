const config = {
    allComponents: [
        {
            name: 'Form',
            package: 'formily_antd5x',
            'components.panels': null,
        },
        {
            name: 'Field',
            package: 'formily_antd5x',
            'components.panels': null,
        },
        {
            name: 'Input',
            package: 'formily_antd5x',
            'components.panels': 'sources.Inputs',
        },
        {
            name: 'Password',
            package: 'formily_antd5x',
            'components.panels': 'sources.Inputs',
        },
        {
            name: 'NumberPicker',
            package: 'formily_antd5x',
            'components.panels': 'sources.Inputs',
        },
        {
            name: 'Select',
            package: 'formily_antd5x',
            'components.panels': 'sources.Inputs',
        },
        {
            name: 'TreeSelect',
            package: 'formily_antd5x',
            'components.panels': 'sources.Inputs',
        },
        {
            name: 'Cascader',
            package: 'formily_antd5x',
            'components.panels': 'sources.Inputs',
        },
        {
            name: 'Transfer',
            package: 'formily_antd5x',
            'components.panels': 'sources.Inputs',
        },
        {
            name: 'Checkbox',
            package: 'formily_antd5x',
            'components.panels': 'sources.Inputs',
        },
        {
            name: 'Radio',
            package: 'formily_antd5x',
            'components.panels': 'sources.Inputs',
        },
        {
            name: 'DatePicker',
            package: 'formily_antd5x',
            'components.panels': 'sources.Inputs',
        },
        {
            name: 'TimePicker',
            package: 'formily_antd5x',
            'components.panels': 'sources.Inputs',
        },
        {
            name: 'Upload',
            package: 'formily_antd5x',
            'components.panels': 'sources.Inputs',
        },
        {
            name: 'Switch',
            package: 'formily_antd5x',
            'components.panels': 'sources.Inputs',
        },
        {
            name: 'FormGrid',
            package: 'formily_antd5x',
            'components.panels': 'sources.Layouts',
        },
        {
            name: 'FormTab',
            package: 'formily_antd5x',
            'components.panels': 'sources.Layouts',
        },
        {
            name: 'FormLayout',
            package: 'formily_antd5x',
            'components.panels': 'sources.Layouts',
        },
        {
            name: 'FormCollapse',
            package: 'formily_antd5x',
            'components.panels': 'sources.Layouts',
        },
        {
            name: 'Space',
            package: 'formily_antd5x',
            'components.panels': 'sources.Layouts',
        },
        {
            name: 'ArrayCards',
            package: 'formily_antd5x',
            'components.panels': 'sources.Arrays',
        },
        {
            name: 'ArrayTable',
            package: 'formily_antd5x',
            'components.panels': 'sources.Arrays',
        },
        {
            name: 'Rate',
            package: 'antd5x',
            'components.panels': 'sources.Inputs',
        },
        {
            name: 'Slider',
            package: 'antd5x',
            'components.panels': 'sources.Inputs',
        },
        {
            name: 'Card',
            package: 'antd5x',
            'components.panels': 'sources.Layouts',
        },
        {
            name: 'Text',
            package: 'custom',
            'components.panels': 'sources.Displays',
        },
        {
            name: 'ObjectContainer',
            package: 'custom',
            'components.panels': 'sources.Inputs',
        },
    ],
    designableComponents: [],
    panels: {},
    components: {},
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
config.allComponents.forEach((item) => {
    config.designableComponents.push(item.name);
    const COMPONENTS_PANEL = 'components.panels';
    // index.ts 的panelsettting
    if (item[COMPONENTS_PANEL] !== null) {
        if (!config.panels[COMPONENTS_PANEL]) {
            config.panels[COMPONENTS_PANEL] = [];
        }
        let currentPanel = config.panels[COMPONENTS_PANEL].find((panel) => {
            if (panel.title === item[COMPONENTS_PANEL]) {
                return true;
            }
            return false;
        });
        if (!currentPanel) {
            currentPanel = {
                title: item[COMPONENTS_PANEL],
                components: [],
            };
            config.panels[COMPONENTS_PANEL].push(currentPanel);
        }
        currentPanel.components.push(item.name);
    }
    // widget settting
    if (!config.components[item.package]) {
        config.components[item.package] = { includes: [], excludes: [] };
    }
    if (item[COMPONENTS_PANEL] !== null) {
        config.components[item.package].includes.push(item.name);
    } else {
        config.components[item.package].excludes.push(item.name);
    }
});

export default config;
