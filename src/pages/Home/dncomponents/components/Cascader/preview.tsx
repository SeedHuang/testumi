import { createBehavior, createResource } from '@dn/core';
import { DnFC } from '@dn/react';
import { Cascader as FormilyCascader } from '@formily/antd-v5';
import React from 'react';
import { createFieldSchema } from '../Field';
import * as locales from './locales';
import * as schemas from './schemas';

export const Cascader: DnFC<React.ComponentProps<typeof FormilyCascader>> =
    FormilyCascader;

Cascader.Behavior = createBehavior({
    name: 'Cascader',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Cascader',
    designerProps: {
        propsSchema: createFieldSchema(schemas.Cascader),
    },
    designerLocales: locales.Cascader,
});

Cascader.Resource = createResource({
    icon: 'CascaderSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                title: 'Cascader',
                'x-decorator': 'FormItem',
                'x-component': 'Cascader',
            },
        },
    ],
});
