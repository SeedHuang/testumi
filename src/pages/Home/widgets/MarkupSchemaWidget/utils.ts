export const getComponentsExcepts = (
    componentsNames: string[],
    exceptComponentsNames: string[] = [],
): string => {
    const remainComponents: string[] = [];
    componentsNames.forEach((item: string) => {
        if (exceptComponentsNames.indexOf(item) === -1) {
            remainComponents.push(item);
        }
    });
    return remainComponents.join(',');
};

export const getSchemaFieldsComponents = (
    componentsNames: string[],
): string => {
    return componentsNames.join(',');
};
