export const selectArgTypes = (description: string, options: string[], defaultValue?: string) => {
  return {
    control: 'select',
    description: description,
    options: options,
    table: {
      type: {
        summary: options.join(', '),
      },
      defaultValue: { summary: defaultValue ?? options[0] },
    },
  };
};

export const booleanArgTypes = (description: string, defaultValue = false) => {
  return {
    control: 'boolean',
    description: description,
    table: {
      type: {
        summary: ['true', 'false'].join(', '),
      },
      defaultValue: { summary: Boolean(defaultValue) },
    },
  };
};
