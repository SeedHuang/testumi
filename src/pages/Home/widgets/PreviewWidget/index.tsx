import { TreeNode } from '@dn/core';
import { transformToSchema } from '@dn/formily-transformer';
import * as formilyAntd5 from '@formily/antd-v5';
import { createForm } from '@formily/core';
import { createSchemaField } from '@formily/react';
import * as antd5 from 'antd';
import React, { useMemo } from 'react';
import config from '../../config';
import { getComponentsExcepts } from './utils';

const {
    components: {
        formily_antd5x: {
            includes: formilyAntd5s,
            excludes: formilyAntd5sExcludes,
        },
        antd5x: { includes: antd5s },
    },
} = config;

const Text: React.FC<{
    value?: string;
    content?: string;
    mode?: 'normal' | 'h1' | 'h2' | 'h3' | 'p';
}> = ({ value, mode, content, ...props }) => {
    const tagName = mode === 'normal' || !mode ? 'div' : mode;
    return React.createElement(tagName, props, value || content);
};
const { Form } = formilyAntd5;

const SchemaField = createSchemaField({
    components: {
        ...getComponentsExcepts(
            formilyAntd5,
            formilyAntd5s,
            formilyAntd5sExcludes,
        ),
        ...getComponentsExcepts(antd5, antd5s),
        Text,
    },
});

export interface IPreviewWidgetProps {
    tree: TreeNode;
}

export const PreviewWidget: React.FC<IPreviewWidgetProps> = (props) => {
    const form = useMemo(() => createForm(), []);
    const { form: formProps, schema } = transformToSchema(props.tree);
    return (
        <Form {...formProps} form={form}>
            <SchemaField schema={schema} />
        </Form>
    );
};
