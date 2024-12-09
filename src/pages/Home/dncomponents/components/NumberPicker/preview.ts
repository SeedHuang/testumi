import { createBehavior, createResource } from '@dn/core';
import { DnFC } from '@dn/react';
import { NumberPicker as FormilyNumberPicker } from '@formily/antd-v5';
import React from 'react';
import { createFieldSchema } from '../Field';
import * as locales from './locales';
import * as schemas from './schemas';

export const NumberPicker: DnFC<
    React.ComponentProps<typeof FormilyNumberPicker>
> = FormilyNumberPicker;

NumberPicker.Behavior = createBehavior({
    name: 'NumberPicker',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'NumberPicker',
    designerProps: {
        propsSchema: createFieldSchema(schemas.NumberPicker),
    },
    designerLocales: locales.NumberPicker,
});

NumberPicker.Resource = createResource({
    icon: 'NumberPickerSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'number',
                title: 'NumberPicker',
                'x-decorator': 'FormItem',
                'x-component': 'NumberPicker',
            },
        },
    ],
});
