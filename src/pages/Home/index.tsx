import { createDesigner, GlobalRegistry, KeyCode, Shortcut } from '@dn/core';
import {
    ComponentTreeWidget, //主布局面板
    CompositePanel,
    Designer, //设计器根组件，主要用于下发上下文
    DesignerToolsWidget, //拖拽源挂件
    HistoryWidget, //工作区组件，核心组件，用于管理工作区内的拖拽行为，树节点数据等等...
    OutlineTreeWidget, //大纲树组件，它会自动识别当前工作区，展示出工作区内树节点
    ResourceWidget, //视图布局面板
    SettingsPanel, //历史记录挂件
    StudioPanel, //工作区布局面板
    ToolbarPanel, //视口布局面板
    ViewPanel, //工具栏布局面板
    ViewportPanel, //画板工具挂件
    ViewToolsWidget, //视图切换工具挂件
    Workspace, //左侧组合布局面板
    WorkspacePanel, //工作区布局面板
} from '@dn/react';
import { SettingsForm } from '@dn/react-settings-form';
import * as AllComponents from '@dncomponents';
import config from './config';
// import 'antd/dist/antd.less';
import React, { useMemo } from 'react';
import './index.less';
import locales from './locales';
import { saveSchema } from './service';
import {
    ActionsWidget,
    MarkupSchemaWidget,
    PreviewWidget,
    SchemaEditorWidget,
} from './widgets';

const getComponents = (componentsNames: string[]): any[] => {
    return componentsNames.map((componentName: string) => {
        return AllComponents[componentName];
    });
};

const getComponentSet = (componentsNames: string[]): any => {
    const result: any = {};
    componentsNames.forEach((componentName: string) => {
        result[componentName] = AllComponents[componentName];
    });
    return result;
};

GlobalRegistry.registerDesignerLocales(locales);

const DesignerCompoennt = () => {
    const engine = useMemo(
        () =>
            createDesigner({
                shortcuts: [
                    new Shortcut({
                        codes: [
                            [KeyCode.Meta, KeyCode.S],
                            [KeyCode.Control, KeyCode.S],
                        ],
                        handler(ctx: any) {
                            saveSchema(ctx.engine);
                        },
                    }),
                ],
                rootComponentName: 'Form',
            }),
        [],
    );
    return (
        <Designer engine={engine}>
            <StudioPanel actions={<ActionsWidget />}>
                <CompositePanel>
                    <CompositePanel.Item
                        title="panels.Component"
                        icon="Component"
                    >
                        {config.panels['components.panels'].map(
                            ({ title = '', components = [] }) => (
                                <ResourceWidget
                                    key={title}
                                    title={title}
                                    sources={getComponents(components)}
                                />
                            ),
                        )}
                    </CompositePanel.Item>
                    <CompositePanel.Item
                        title="panels.OutlinedTree"
                        icon="Outline"
                    >
                        <OutlineTreeWidget />
                    </CompositePanel.Item>
                    <CompositePanel.Item title="panels.History" icon="History">
                        <HistoryWidget />
                    </CompositePanel.Item>
                </CompositePanel>
                <Workspace id="form">
                    <WorkspacePanel>
                        <ToolbarPanel>
                            <DesignerToolsWidget />
                            <ViewToolsWidget
                                use={[
                                    'DESIGNABLE',
                                    'JSONTREE',
                                    'MARKUP',
                                    'PREVIEW',
                                ]}
                            />
                        </ToolbarPanel>
                        <ViewportPanel>
                            <ViewPanel type="DESIGNABLE">
                                {() => (
                                    <ComponentTreeWidget
                                        components={getComponentSet(
                                            config.designableComponents,
                                        )}
                                    />
                                )}
                            </ViewPanel>
                            <ViewPanel type="JSONTREE" scrollable={false}>
                                {(tree, onChange) => (
                                    <SchemaEditorWidget
                                        tree={tree}
                                        onChange={onChange}
                                    />
                                )}
                            </ViewPanel>
                            <ViewPanel type="MARKUP" scrollable={false}>
                                {(tree) => <MarkupSchemaWidget tree={tree} />}
                            </ViewPanel>
                            <ViewPanel type="PREVIEW">
                                {(tree) => <PreviewWidget tree={tree} />}
                            </ViewPanel>
                        </ViewportPanel>
                    </WorkspacePanel>
                </Workspace>
                <SettingsPanel title="panels.PropertySettings">
                    <SettingsForm uploadAction="https://www.mocky.io/v2/5cc8019d300000980a055e76" />
                </SettingsPanel>
            </StudioPanel>
        </Designer>
    );
};

const HomePage: React.FC = () => {
    return (
        <div className="designcontainer">
            <DesignerCompoennt />
        </div>
    );
};

export default HomePage;
