import { createBehavior, createResource } from '@dn/core';
import { DnFC } from '@dn/react';
import { Input as FormilyInput } from '@formily/antd-v5';
import React from 'react';
import { createFieldSchema } from '../Field';
import * as locales from './locales';
import * as schemas from './schemas';

export const Input: DnFC<React.ComponentProps<typeof FormilyInput>> =
    FormilyInput;

Input.Behavior = createBehavior(
    {
        name: 'Input',
        extends: ['Field'],
        selector: (node) => node.props['x-component'] === 'Input',
        designerProps: {
            propsSchema: createFieldSchema(schemas.Input),
        },
        designerLocales: locales.Input,
    },
    {
        name: 'Input.TextArea',
        extends: ['Field'],
        selector: (node) => node.props['x-component'] === 'Input.TextArea',
        designerProps: {
            propsSchema: createFieldSchema(schemas.Input.TextArea),
        },
        designerLocales: locales.TextArea,
    },
);

Input.Resource = createResource(
    {
        icon: 'InputSource',
        elements: [
            {
                componentName: 'Field',
                props: {
                    type: 'string',
                    title: 'Input',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                },
            },
        ],
    },
    {
        icon: 'TextAreaSource',
        elements: [
            {
                componentName: 'Field',
                props: {
                    type: 'string',
                    title: 'TextArea',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input.TextArea',
                },
            },
        ],
    },
);
