import { createBehavior, createResource } from '@dn/core';
import { DnFC } from '@dn/react';
import { Radio as FormilyRadio } from '@formily/antd-v5';
import React from 'react';
import { createFieldSchema } from '../Field';
import * as locales from './locales';
import * as schemas from './schemas';

export const Radio: DnFC<React.ComponentProps<typeof FormilyRadio>> =
    FormilyRadio;

Radio.Behavior = createBehavior({
    name: 'Radio.Group',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Radio.Group',
    designerProps: {
        propsSchema: createFieldSchema(schemas.Radio.Group),
    },
    designerLocales: locales.RadioGroup,
});

Radio.Resource = createResource({
    icon: 'RadioGroupSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'string | number',
                title: 'Radio Group',
                'x-decorator': 'FormItem',
                'x-component': 'Radio.Group',
                enum: [
                    { label: '选项1', value: 1 },
                    { label: '选项2', value: 2 },
                ],
            },
        },
    ],
});
