import { TreeNode } from '@dn/core';
import { MonacoInput } from '@dn/react-settings-form';
import { isEmpty, isPlainObj } from '@formily/shared';
import React from 'react';
import config from '../config';
import { getComponentsExcepts, getSchemaFieldsComponents } from './utils';

export interface IMarkupSchemaWidgetProps {
    tree: TreeNode;
}

const {
    schema: { nodeTypes },
    components: {
        formily_antd5x: {
            includes: formilyAntd5s,
            excludes: formilyAntd5sExcludes,
        },
        antd5x: { includes: antd5s },
    },
} = config;

const transformToMarkupSchemaCode = (tree: TreeNode) => {
    const printAttribute = (node: TreeNode) => {
        if (!node) return '';
        const props = { ...node.props };
        if (node.depth !== 0) {
            props.name = node.props.name || node.id;
        }
        return `${Object.keys(props)
            .map((key) => {
                if (
                    key === 'x-designable-id' ||
                    key === 'x-designable-source-name' ||
                    key === '_isJSONSchemaObject' ||
                    key === 'version' ||
                    key === 'type'
                )
                    return '';
                const value = props[key];
                if (isPlainObj(value) && isEmpty(value)) return '';
                if (typeof value === 'string') return `${key}="${value}"`;
                return `${key}={${JSON.stringify(value)}}`;
            })
            .join(' ')}`;
    };
    const printChildren = (node: TreeNode) => {
        if (!node) return '';
        return node.children
            .map((child) => {
                return printNode(child);
            })
            .join('');
    };
    const printTag = (node: TreeNode) => {
        let result: string = nodeTypes[node] || '';
        if (result === '') {
            result = nodeTypes['@@default'];
        }
        return result;
    };
    const printNode = (node: TreeNode) => {
        if (!node) return '';
        return `<${printTag(node)} ${printAttribute(node)} ${
            node.children.length
                ? `>${printChildren(node)}</${printTag(node)}>`
                : '/>'
        }`;
    };
    const root = tree.find((child) => {
        return child.componentName === 'Form' || child.componentName === 'Root';
    });
    return `import React, { useMemo } from 'react'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'
import { ${getComponentsExcepts(formilyAntd5s)} } from '@formily/antd-v5'
import { ${getComponentsExcepts(antd5s)} } from 'antd'

const Text: React.FC<{
  value?: string
  content?: string
  mode?: 'normal' | 'h1' | 'h2' | 'h3' | 'p'
}> = ({ value, mode, content, ...props }) => {
  const tagName = mode === 'normal' || !mode ? 'div' : mode
  return React.createElement(tagName, props, value || content)
}

const SchemaField = createSchemaField({
  components: {
    ${getSchemaFieldsComponents([
        getComponentsExcepts(formilyAntd5s, formilyAntd5sExcludes),
        getComponentsExcepts(antd5s),
        'Text',
    ])}
  },
})

export default ()=>{
  const form = useMemo(() => createForm(), [])

  return <Form form={form} ${printAttribute(root)}>
    <SchemaField>
      ${printChildren(root)}
    </SchemaField>
  </Form>
}
  
`;
};

export const MarkupSchemaWidget: React.FC<IMarkupSchemaWidgetProps> = (
    props,
) => {
    return (
        <MonacoInput
            {...props}
            options={{ readOnly: true }}
            value={transformToMarkupSchemaCode(props.tree)}
            language="typescript"
        />
    );
};
