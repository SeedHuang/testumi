import { createBehavior, createResource } from '@dn/core';
import { DnFC } from '@dn/react';
import { Select as FormilySelect } from '@formily/antd-v5';
import React from 'react';
import { createFieldSchema } from '../Field';
import * as locales from './locales';
import * as schemas from './schemas';

export const Select: DnFC<React.ComponentProps<typeof FormilySelect>> =
    FormilySelect;

Select.Behavior = createBehavior({
    name: 'Select',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Select',
    designerProps: {
        propsSchema: createFieldSchema(schemas.Select),
    },
    designerLocales: locales.Select,
});

Select.Resource = createResource({
    icon: 'SelectSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                title: 'Select',
                'x-decorator': 'FormItem',
                'x-component': 'Select',
            },
        },
    ],
});
