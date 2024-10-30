/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Deep merge two objects
 * @param target - The target object to merge into
 * @param source - The source object to merge from
 * @returns The merged object
 */
const deepmerge = (target: any, source: any): any => {
  const isObject = (obj: any) =>
    obj && typeof obj === "object" && !Array.isArray(obj);

  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  // Create a new object to avoid mutating target
  const result = { ...target };

  Object.entries(source).forEach(([key, val]) => {
    if (isObject(val) && isObject(result[key])) {
      result[key] = deepmerge(result[key], val);
    } else {
      result[key] = val;
    }
  });

  return result;
};

export default deepmerge;
