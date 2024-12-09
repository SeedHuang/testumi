import { createBehavior, createResource } from '@dn/core';
import { DnFC } from '@dn/react';
import { Slider as AntdSlider } from 'antd';
import React from 'react';
import { createFieldSchema } from '../Field';
import * as locales from './locales';
import * as schemas from './schemas';

export const Slider: DnFC<React.ComponentProps<typeof AntdSlider>> = AntdSlider;

Slider.Behavior = createBehavior({
    name: 'Slider',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Slider',
    designerProps: {
        propsSchema: createFieldSchema(schemas.Slider),
    },
    designerLocales: locales.Slider,
});

Slider.Resource = createResource({
    icon: 'SliderSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'number',
                title: 'Slider',
                'x-decorator': 'FormItem',
                'x-component': 'Slider',
            },
        },
    ],
});
