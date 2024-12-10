import { createBehavior } from '@dn/core';
import {
    createFieldSchema,
    createVoidFieldSchema,
} from '@dncomponents/components/Field';
import * as allLocales from './locales';
import * as locales from './locales';
import * as allSchemas from './schemas';

export const createArrayBehavior = (name: string) => {
    return createBehavior(
        {
            name,
            extends: ['Field'],
            selector: (node) => node.props['x-component'] === name,
            designerProps: {
                droppable: true,
                propsSchema: createFieldSchema(allSchemas[name]),
            },
            designerLocales: allLocales[name],
        },
        {
            name: `${name}.Addition`,
            extends: ['Field'],
            selector: (node) =>
                node.props['x-component'] === `${name}.Addition`,
            designerProps: {
                allowDrop(parent) {
                    return parent.props['x-component'] === name;
                },
                propsSchema: createVoidFieldSchema(allSchemas[name].Addition),
            },
            designerLocales: locales.ArrayAddition,
        },
        {
            name: `${name}.Remove`,
            extends: ['Field'],
            selector: (node) => node.props['x-component'] === `${name}.Remove`,
            designerProps: {
                allowDrop(parent) {
                    return parent.props['x-component'] === name;
                },
                propsSchema: createVoidFieldSchema(),
            },
            designerLocales: locales.ArrayRemove,
        },
        {
            name: `${name}.Index`,
            extends: ['Field'],
            selector: (node) => node.props['x-component'] === `${name}.Index`,
            designerProps: {
                allowDrop(parent) {
                    return parent.props['x-component'] === name;
                },
                propsSchema: createVoidFieldSchema(),
            },
            designerLocales: locales.ArrayIndex,
        },
        {
            name: `${name}.MoveUp`,
            extends: ['Field'],
            selector: (node) => node.props['x-component'] === `${name}.MoveUp`,
            designerProps: {
                allowDrop(parent) {
                    return parent.props['x-component'] === name;
                },
                propsSchema: createVoidFieldSchema(),
            },
            designerLocales: locales.ArrayMoveUp,
        },
        {
            name: `${name}.MoveDown`,
            extends: ['Field'],
            selector: (node) =>
                node.props['x-component'] === `${name}.MoveDown`,
            designerProps: {
                allowDrop(parent) {
                    return parent.props['x-component'] === 'ArrayCards';
                },
                propsSchema: createVoidFieldSchema(),
            },
            designerLocales: locales.ArrayMoveDown,
        },
    );
};
