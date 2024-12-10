import { createBehavior, createResource } from '@dn/core';
import { DnFC } from '@dn/react';
import { Checkbox as FormilyCheckbox } from '@formily/antd-v5';
import React from 'react';
import { createFieldSchema } from '../Field';
import * as locales from './locales';
import * as schemas from './schemas';

export const Checkbox: DnFC<React.ComponentProps<typeof FormilyCheckbox>> =
    FormilyCheckbox;

Checkbox.Behavior = createBehavior({
    name: 'Checkbox.Group',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Checkbox.Group',
    designerProps: {
        propsSchema: createFieldSchema(schemas.Checkbox.Group),
    },
    designerLocales: locales.CheckboxGroup,
});

Checkbox.Resource = createResource({
    icon: 'CheckboxGroupSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'Array<string | number>',
                title: 'Checkbox Group',
                'x-decorator': 'FormItem',
                'x-component': 'Checkbox.Group',
                enum: [
                    { label: '选项1', value: 1 },
                    { label: '选项2', value: 2 },
                ],
            },
        },
    ],
});
