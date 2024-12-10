import { createBehavior, createResource } from '@dn/core';
import { DnFC } from '@dn/react';
import { Switch as AntdSwitch } from 'antd';
import React from 'react';
import { createFieldSchema } from '../Field';
import * as locales from './locales';
import * as schemas from './schemas';

export const Switch: DnFC<React.ComponentProps<typeof AntdSwitch>> = AntdSwitch;

Switch.Behavior = createBehavior({
    name: 'Switch',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Switch',
    designerProps: {
        propsSchema: createFieldSchema(schemas.Switch),
    },
    designerLocales: locales.Switch,
});

Switch.Resource = createResource({
    icon: 'SwitchSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'boolean',
                title: 'Switch',
                'x-decorator': 'FormItem',
                'x-component': 'Switch',
            },
        },
    ],
});
