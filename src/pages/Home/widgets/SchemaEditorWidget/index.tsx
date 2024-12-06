import { ITreeNode, TreeNode } from '@dn/core';
import {
    transformToSchema,
    transformToTreeNode,
} from '@dn/formily-transformer';
import { MonacoInput } from '@dn/react-settings-form';
import React from 'react';

export interface ISchemaEditorWidgetProps {
    tree: TreeNode;
    onChange?: (tree: ITreeNode) => void;
}

export const SchemaEditorWidget: React.FC<ISchemaEditorWidgetProps> = (
    props,
) => {
    return (
        <MonacoInput
            {...props}
            value={JSON.stringify(transformToSchema(props.tree), null, 2)}
            onChange={(value) => {
                props.onChange?.(transformToTreeNode(JSON.parse(value)));
            }}
            language="json"
        />
    );
};
