import { createBehavior, createResource } from '@dn/core';
import { DnFC } from '@dn/react';
import { TreeSelect as FormilyTreeSelect } from '@formily/antd-v5';
import React from 'react';
import { createFieldSchema } from '../Field';
import * as locales from './locales';
import * as schemas from './schemas';

export const TreeSelect: DnFC<React.ComponentProps<typeof FormilyTreeSelect>> =
    FormilyTreeSelect;

TreeSelect.Behavior = createBehavior({
    name: 'TreeSelect',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'TreeSelect',
    designerProps: {
        propsSchema: createFieldSchema(schemas.TreeSelect),
    },
    designerLocales: locales.TreeSelect,
});

TreeSelect.Resource = createResource({
    icon: 'TreeSelectSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                title: 'TreeSelect',
                'x-decorator': 'FormItem',
                'x-component': 'TreeSelect',
            },
        },
    ],
});
