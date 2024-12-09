import { createBehavior, createResource } from '@dn/core';
import { DnFC } from '@dn/react';
import { TimePicker as FormilyTimePicker } from '@formily/antd-v5';
import React from 'react';
import { createFieldSchema } from '../Field';
import * as locales from './locales';
import * as schemas from './schemas';

export const TimePicker: DnFC<React.ComponentProps<typeof FormilyTimePicker>> =
    FormilyTimePicker;

TimePicker.Behavior = createBehavior(
    {
        name: 'TimePicker',
        extends: ['Field'],
        selector: (node) => node.props['x-component'] === 'TimePicker',
        designerProps: {
            propsSchema: createFieldSchema(schemas.TimePicker),
        },
        designerLocales: locales.TimePicker,
    },
    {
        name: 'TimePicker.RangePicker',
        extends: ['Field'],
        selector: (node) =>
            node.props['x-component'] === 'TimePicker.RangePicker',
        designerProps: {
            propsSchema: createFieldSchema(schemas.TimePicker.RangePicker),
        },
        designerLocales: locales.TimeRangePicker,
    },
);

TimePicker.Resource = createResource(
    {
        icon: 'TimePickerSource',
        elements: [
            {
                componentName: 'Field',
                props: {
                    type: 'string',
                    title: 'TimePicker',
                    'x-decorator': 'FormItem',
                    'x-component': 'TimePicker',
                },
            },
        ],
    },
    {
        icon: 'TimeRangePickerSource',
        elements: [
            {
                componentName: 'Field',
                props: {
                    type: 'string[]',
                    title: 'TimeRangePicker',
                    'x-decorator': 'FormItem',
                    'x-component': 'TimePicker.RangePicker',
                },
            },
        ],
    },
);
