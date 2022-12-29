import type { InputType } from '@storybook/csf';

export const selectArgType = <T extends number | string>(
  description: string,
  options: T[],
  defaultValue?: T,
): InputType => {
  return {
    control: 'select',
    description,
    options: options,
    defaultValue,
    table: {
      type: {
        summary: options.map((option) => option.toString()).join(' | '),
      },
      defaultValue: { summary: defaultValue },
    },
  };
};

export const booleanArgType = (description: string, defaultValue = false): InputType => {
  return {
    control: 'boolean',
    description,
    defaultValue,
    table: {
      type: {
        summary: 'true | false',
      },
      defaultValue: { summary: Boolean(defaultValue) },
    },
  };
};

export const childrenArgType = (description?: string): InputType => {
  return {
    control: 'text',
    description: description ?? '자식 컴포넌트 또는 컨텐츠',
    table: {
      type: {
        summary: 'ReactNode',
      },
    },
  };
};
