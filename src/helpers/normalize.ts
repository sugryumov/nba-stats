export const flatObject = (o, prefix = '') =>
  Object.entries(o).flatMap(([key, value], idx) =>
    Object(value) === value
      ? flatObject(value, `Q${idx + 1}`)
      : [[`${prefix}${key}`, value]],
  );

export const toPercentage = num => (num * 100).toFixed(1);
