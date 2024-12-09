import { createBehavior, createResource } from '@dn/core';
import { DnFC, usePrefix } from '@dn/react';
import { Form as FormilyForm } from '@formily/antd-v5';
import { createForm } from '@formily/core';
import { observer } from '@formily/react';
import React, { useMemo } from 'react';
import { AllSchemas } from '../../schemas';
// 这个需要确认
import * as formlayoutSchema from '@dncomponents/components/FormLayout/schemas';
import * as locales from './locales';
import './styles.less';

export const Form: DnFC<React.ComponentProps<typeof FormilyForm>> = observer(
    (props) => {
        const prefix = usePrefix('designable-form');
        const form = useMemo(
            () =>
                createForm({
                    designable: true,
                }),
            [],
        );
        return (
            <FormilyForm
                {...props}
                style={{ ...props.style }}
                className={prefix}
                form={form}
            >
                {props.children}
            </FormilyForm>
        );
    },
);

Form.Behavior = createBehavior({
    name: 'Form',
    selector: (node) => node.componentName === 'Form',
    designerProps(node) {
        return {
            draggable: !node.isRoot,
            cloneable: !node.isRoot,
            deletable: !node.isRoot,
            droppable: true,
            propsSchema: {
                type: 'object',
                properties: {
                    ...(formlayoutSchema.FormLayout.properties as any),
                    style: AllSchemas.CSSStyle,
                },
            },
            defaultProps: {
                labelCol: 6,
                wrapperCol: 12,
            },
        };
    },
    designerLocales: locales.Form,
});

Form.Resource = createResource({
    title: { 'zh-CN': '表单', 'en-US': 'Form' },
    icon: 'FormLayoutSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'object',
                'x-component': 'Form',
            },
        },
    ],
});
