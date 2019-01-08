// @flow

// export default (source) => {
//   const obj = source.reduce((acc, element) => {
//     const namePattern = `${element.sku}_${element.warehouse}`;
//     const currentObj = { [namePattern]: element };
//     return { ...currentObj, ...acc };
//   }, {});
//   return JSON.stringify(obj);
// };


export default (source) => {
  const result = {};
  for (let element = 0; element < source.length; element += 1) {
    const namePattern = `${source[element].sku}_${source[element].warehouse}`;
    result[namePattern] = source[element];
  }
  return JSON.stringify(result);
};
