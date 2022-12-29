export const selectArgTypes = (description: string, options: string[], defaultValue?: string) => {
  return {
    control: 'select',
    description: description,
    options: options,
    defaultValue,
    table: {
      type: {
        summary: options.join(', '),
      },
      defaultValue: { summary: defaultValue },
    },
  };
};

export const booleanArgTypes = (description: string, defaultValue = false) => {
  return {
    control: 'boolean',
    description: description,
    defaultValue,
    table: {
      type: {
        summary: ['true', 'false'].join(', '),
      },
      defaultValue: { summary: Boolean(defaultValue) },
    },
  };
};
