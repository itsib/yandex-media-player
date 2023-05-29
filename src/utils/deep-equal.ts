const testIsObject = (value: any): value is object => value != null && typeof value === 'object';

export function deepEqual(value0: any, value1: any): boolean {
  const isObjects = testIsObject(value0) && testIsObject(value1);
  if (!isObjects) {
    return value0 === value1;
  }

  const keys0 = Object.keys(value0);
  const keys1 = Object.keys(value1);
  if (keys0.length !== keys1.length) {
    return false;
  }

  for (let i = 0; i < keys0.length; i++) {
    const key = keys0[i];
    const isEqual = deepEqual(value0[key], value1[key]);
    if (!isEqual) {
      return false;
    }
  }
  return true;
}
