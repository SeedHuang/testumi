import { createBehavior, createResource } from '@dn/core';
import { DnFC } from '@dn/react';
import { Rate as AntdRate } from 'antd';
import React from 'react';
import { createFieldSchema } from '../Field';
import * as locales from './locales';
import * as schemas from './schemas';

export const Rate: DnFC<React.ComponentProps<typeof AntdRate>> = AntdRate;

Rate.Behavior = createBehavior({
    name: 'Rate',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Rate',
    designerProps: {
        propsSchema: createFieldSchema(schemas.Rate),
    },
    designerLocales: locales.Rate,
});

Rate.Resource = createResource({
    icon: 'RateSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'number',
                title: 'Rate',
                'x-decorator': 'FormItem',
                'x-component': 'Rate',
            },
        },
    ],
});
