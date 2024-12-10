import { CSSStyle } from '@allSchemas/CSSStyle';
import { FormLayout } from '@dncomponents/components/FormLayout/schemas';
import { ISchema } from '@formily/react';

export const Form: ISchema = {
    type: 'object',
    properties: {
        ...(FormLayout.properties as any),
        style: CSSStyle,
    },
};
