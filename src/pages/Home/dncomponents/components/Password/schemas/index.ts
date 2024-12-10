import { Input } from '@dncomponents/components/Input/schemas';
import { ISchema } from '@formily/react';
export const Password: ISchema = {
    type: 'object',
    properties: {
        ...(Input.properties as any),
        checkStrength: {
            type: 'boolean',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
        },
    },
};
