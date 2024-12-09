import { createBehavior, createResource } from '@dn/core';
import { DnFC } from '@dn/react';
import { Password as FormilyPassword } from '@formily/antd-v5';
import React from 'react';
import { createFieldSchema } from '../Field';
import * as locales from './locales';
import * as schemas from './schemas';

export const Password: DnFC<React.ComponentProps<typeof FormilyPassword>> =
    FormilyPassword;

Password.Behavior = createBehavior({
    name: 'Password',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Password',
    designerProps: {
        propsSchema: createFieldSchema(schemas.Password),
    },
    designerLocales: locales.Password,
});

Password.Resource = createResource({
    icon: 'PasswordSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                title: 'Password',
                'x-decorator': 'FormItem',
                'x-component': 'Password',
            },
        },
    ],
});
