import { createBehavior, createResource } from '@dn/core';
import { DnFC } from '@dn/react';
import { FormLayout as FormilyFormLayout } from '@formily/antd-v5';
import React from 'react';
import { withContainer } from '../../common/Container';
import { createVoidFieldSchema } from '../Field';
import * as locales from './locales';
import * as schemas from './schemas';

export const FormLayout: DnFC<React.ComponentProps<typeof FormilyFormLayout>> =
    withContainer(FormilyFormLayout);

FormLayout.Behavior = createBehavior({
    name: 'FormLayout',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'FormLayout',
    designerProps: {
        droppable: true,
        propsSchema: createVoidFieldSchema(schemas.FormLayout),
    },
    designerLocales: locales.FormLayout,
});

FormLayout.Resource = createResource({
    icon: 'FormLayoutSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'FormLayout',
            },
        },
    ],
});
