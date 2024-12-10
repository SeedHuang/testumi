import { createBehavior, createResource } from '@dn/core';
import { DnFC } from '@dn/react';
import React from 'react';
import { Container } from '../../common/Container';
import { createFieldSchema } from '../Field';
import * as locales from './locales';

export const ObjectContainer: DnFC<React.ComponentProps<typeof Container>> =
    Container;
ObjectContainer.Behavior = createBehavior({
    name: 'Object',
    extends: ['Field'],
    selector: (node) => node.props.type === 'object',
    designerProps: {
        droppable: true,
        propsSchema: createFieldSchema(),
    },
    designerLocales: locales.ObjectLocale,
});

ObjectContainer.Resource = createResource({
    icon: 'ObjectSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'object',
            },
        },
    ],
});
