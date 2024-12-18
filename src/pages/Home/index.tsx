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
import {
    ArrayCards,
    ArrayTable,
    Card,
    Cascader,
    Checkbox,
    DatePicker,
    Field,
    Form,
    FormCollapse,
    FormGrid,
    FormLayout,
    FormTab,
    Input,
    NumberPicker,
    ObjectContainer,
    Password,
    Radio,
    Rate,
    Select,
    Slider,
    Space,
    Switch,
    Text,
    TimePicker,
    Transfer,
    TreeSelect,
    Upload,
} from '@dncomponents/src';
import 'antd/dist/antd.less';
import React, { useMemo } from 'react';
import './index.less';
import { saveSchema } from './service';
import {
    ActionsWidget,
    LogoWidget,
    MarkupSchemaWidget,
    PreviewWidget,
    SchemaEditorWidget,
} from './widgets';

GlobalRegistry.registerDesignerLocales({
    'zh-CN': {
        sources: {
            Inputs: '输入控件',
            Layouts: '布局组件',
            Arrays: '自增组件',
            Displays: '展示组件',
        },
    },
    'en-US': {
        sources: {
            Inputs: 'Inputs',
            Layouts: 'Layouts',
            Arrays: 'Arrays',
            Displays: 'Displays',
        },
    },
});

const App = () => {
    const engine = useMemo(
        () =>
            createDesigner({
                shortcuts: [
                    new Shortcut({
                        codes: [
                            [KeyCode.Meta, KeyCode.S],
                            [KeyCode.Control, KeyCode.S],
                        ],
                        handler(ctx) {
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
            <StudioPanel logo={<LogoWidget />} actions={<ActionsWidget />}>
                <CompositePanel>
                    <CompositePanel.Item
                        title="panels.Component"
                        icon="Component"
                    >
                        <ResourceWidget
                            title="sources.Inputs"
                            sources={[
                                Input,
                                Password,
                                NumberPicker,
                                Rate,
                                Slider,
                                Select,
                                TreeSelect,
                                Cascader,
                                Transfer,
                                Checkbox,
                                Radio,
                                DatePicker,
                                TimePicker,
                                Upload,
                                Switch,
                                ObjectContainer,
                            ]}
                        />
                        <ResourceWidget
                            title="sources.Layouts"
                            sources={[
                                Card,
                                FormGrid,
                                FormTab,
                                FormLayout,
                                FormCollapse,
                                Space,
                            ]}
                        />
                        <ResourceWidget
                            title="sources.Arrays"
                            sources={[ArrayCards, ArrayTable]}
                        />
                        <ResourceWidget
                            title="sources.Displays"
                            sources={[Text]}
                        />
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
                                        components={{
                                            Form,
                                            Field,
                                            Input,
                                            Select,
                                            TreeSelect,
                                            Cascader,
                                            Radio,
                                            Checkbox,
                                            Slider,
                                            Rate,
                                            NumberPicker,
                                            Transfer,
                                            Password,
                                            DatePicker,
                                            TimePicker,
                                            Upload,
                                            Switch,
                                            Text,
                                            Card,
                                            ArrayCards,
                                            ArrayTable,
                                            Space,
                                            FormTab,
                                            FormCollapse,
                                            FormGrid,
                                            FormLayout,
                                            ObjectContainer,
                                        }}
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
            <App />
        </div>
    );
};

export default HomePage;
