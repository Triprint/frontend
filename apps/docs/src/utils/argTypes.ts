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

export const numberArgType = (description?: string, defaultValue?: number): InputType => {
  return {
    type: 'number',
    description,
    defaultValue,
    table: {
      type: {
        summary: 'number',
      },
      defaultValue: { summary: defaultValue },
    },
  };
};

export const stringArgType = (
  description: string,
  types = ['string'],
  defaultValue?: string,
): InputType => {
  return {
    control: 'text',
    description,
    defaultValue,
    table: {
      type: {
        summary: types.join(' | '),
      },
      defaultValue: { summary: defaultValue },
    },
  };
};

export const actionArgType = (action: string, description?: string, type?: string): InputType => {
  return {
    action,
    description,
    table: {
      category: 'Events',
      type: {
        summary: type,
      },
    },
  };
};

export const colorArgType = (description: string, defaultValue = '#000'): InputType => {
  return {
    control: {
      type: 'color',
    },
    description: description,
    defaultValue,
    table: {
      category: 'Color',
      type: {
        summary: 'string',
      },
      defaultValue: { summary: defaultValue },
    },
  };
};
