export const getComponentsExcepts = (
    componentSets: any,
    componentsNames: string[],
    exceptComponentsNames: string[] = [],
) => {
    const remainComponents: any = {};
    componentsNames.forEach((componentName: string) => {
        if (exceptComponentsNames.indexOf(componentName) === -1) {
            remainComponents[componentName] = componentSets[componentName];
        }
    });
    return remainComponents;
};

export const getSchemaFieldsComponents = (
    componentsNames: string[],
): string => {
    return componentsNames.join(',');
};
