const toNumber = (acc: number[], character: string) => {
  const currentNumber = Number(character);
  if (Boolean(currentNumber)) {
    acc.push(currentNumber);
  }

  return acc;
};

export const add = (value: string): number[] => {
  if (value === '') {
    return [];
  }

  const characters = value.split(',');

  return characters.reduce(toNumber, []);
};
