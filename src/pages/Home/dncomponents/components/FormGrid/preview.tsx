import { TreeNode, createBehavior, createResource } from '@dn/core';
import { DnFC, DroppableWidget, useNodeIdProps, useTreeNode } from '@dn/react';
import { FormGrid as FormilyGird } from '@formily/antd-v5';
import { observer } from '@formily/reactive-react';
import React from 'react';
import { LoadTemplate } from '../../common/LoadTemplate';
import { createFieldSchema } from '../Field';
import * as locales from './locales';
import * as schemas from './schemas';
import './styles.less';

type formilyGrid = typeof FormilyGird;

export const FormGrid: DnFC<React.ComponentProps<formilyGrid>> & {
    GridColumn?: React.FC<React.ComponentProps<formilyGrid['GridColumn']>>;
} = observer((props) => {
    const node = useTreeNode();
    const nodeId = useNodeIdProps();
    if (node.children.length === 0) return <DroppableWidget {...props} />;

    return (
        <div {...nodeId} className="dn-grid">
            <FormilyGird {...props}>{props.children}</FormilyGird>
            <LoadTemplate
                actions={[
                    {
                        title: node.getMessage('addGridColumn'),
                        icon: 'AddColumn',
                        onClick: () => {
                            const column = new TreeNode({
                                componentName: 'Field',
                                props: {
                                    type: 'void',
                                    'x-component': 'FormGrid.GridColumn',
                                },
                            });
                            node.append(column);
                        },
                    },
                ]}
            />
        </div>
    );
});

FormGrid.GridColumn = observer(({ gridSpan, ...props }) => {
    return (
        <DroppableWidget {...props} data-grid-span={gridSpan}>
            {props.children}
        </DroppableWidget>
    );
});

FormGrid.Behavior = createBehavior(
    {
        name: 'FormGrid',
        extends: ['Field'],
        selector: (node) => node.props['x-component'] === 'FormGrid',
        designerProps: {
            droppable: true,
            allowDrop: (node) => node.props['x-component'] !== 'FormGrid',
            propsSchema: createFieldSchema(schemas.FormGrid),
        },
        designerLocales: locales.FormGrid,
    },
    {
        name: 'FormGrid.GridColumn',
        extends: ['Field'],
        selector: (node) => node.props['x-component'] === 'FormGrid.GridColumn',
        designerProps: {
            droppable: true,
            resizable: {
                width(node) {
                    const span = Number(
                        node.props['x-component-props']?.gridSpan ?? 1,
                    );
                    return {
                        plus: () => {
                            if (span + 1 > 12) return;
                            node.props['x-component-props'] =
                                node.props['x-component-props'] || {};
                            node.props['x-component-props'].gridSpan = span + 1;
                        },
                        minus: () => {
                            if (span - 1 < 1) return;
                            node.props['x-component-props'] =
                                node.props['x-component-props'] || {};
                            node.props['x-component-props'].gridSpan = span - 1;
                        },
                    };
                },
            },
            resizeXPath: 'x-component-props.gridSpan',
            resizeStep: 1,
            resizeMin: 1,
            resizeMax: 12,
            allowDrop: (node) => node.props['x-component'] === 'FormGrid',
            propsSchema: createFieldSchema(schemas.FormGrid.GridColumn),
        },
        designerLocales: locales.FormGridColumn,
    },
);

FormGrid.Resource = createResource({
    icon: 'GridSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'FormGrid',
            },
            children: [
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'FormGrid.GridColumn',
                    },
                },
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'FormGrid.GridColumn',
                    },
                },
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'FormGrid.GridColumn',
                    },
                },
            ],
        },
    ],
});
