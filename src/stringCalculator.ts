export const add = (value: string): number[] => {
  const result = parseInt(value);
  if (isNaN(result)) {
    return [];
  }

  return [result];
};
/** 
export const add = (value: string): number[] => {
  
  if (value === '') {
    return [];
  }
  const result = parseInt(value);
  if (isNaN(result)) {
    return [];
  }

  return [result];
};
*/
