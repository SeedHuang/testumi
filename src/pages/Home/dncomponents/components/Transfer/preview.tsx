import { createBehavior, createResource } from '@dn/core';
import { DnFC } from '@dn/react';
import { Transfer as FormilyTransfer } from '@formily/antd-v5';
import React from 'react';
import { createFieldSchema } from '../Field';
import * as locales from './locales';
import * as schemas from './schemas';

export const Transfer: DnFC<React.ComponentProps<typeof FormilyTransfer>> =
    FormilyTransfer;

Transfer.Behavior = createBehavior({
    name: 'Transfer',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Transfer',
    designerProps: {
        propsSchema: createFieldSchema(schemas.Transfer),
    },
    designerLocales: locales.Transfer,
});

Transfer.Resource = createResource({
    icon: 'TransferSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                title: 'Transfer',
                'x-decorator': 'FormItem',
                'x-component': 'Transfer',
            },
        },
    ],
});
