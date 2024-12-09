import { createBehavior, createResource } from '@dn/core';
import { DnFC } from '@dn/react';
import { DatePicker as FormilyDatePicker } from '@formily/antd-v5';
import React from 'react';
import { createFieldSchema } from '../Field';
import * as locales from './locales';
import * as schemas from './schemas';

export const DatePicker: DnFC<React.ComponentProps<typeof FormilyDatePicker>> =
    FormilyDatePicker;

DatePicker.Behavior = createBehavior(
    {
        name: 'DatePicker',
        extends: ['Field'],
        selector: (node) => node.props['x-component'] === 'DatePicker',
        designerProps: {
            propsSchema: createFieldSchema(schemas.DatePicker),
        },
        designerLocales: locales.DatePicker,
    },
    {
        name: 'DatePicker.RangePicker',
        extends: ['Field'],
        selector: (node) =>
            node.props['x-component'] === 'DatePicker.RangePicker',
        designerProps: {
            propsSchema: createFieldSchema(schemas.DatePicker.RangePicker),
        },
        designerLocales: locales.DateRangePicker,
    },
);

DatePicker.Resource = createResource(
    {
        icon: 'DatePickerSource',
        elements: [
            {
                componentName: 'Field',
                props: {
                    type: 'string',
                    title: 'DatePicker',
                    'x-decorator': 'FormItem',
                    'x-component': 'DatePicker',
                },
            },
        ],
    },
    {
        icon: 'DateRangePickerSource',
        elements: [
            {
                componentName: 'Field',
                props: {
                    type: 'string[]',
                    title: 'DateRangePicker',
                    'x-decorator': 'FormItem',
                    'x-component': 'DatePicker.RangePicker',
                },
            },
        ],
    },
);
