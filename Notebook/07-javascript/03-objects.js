let result = {};

const insertItem = (key, value) => {
  result[key] = value;
};

const deleteItem = (key) => {
  delete result[key];
};

const lookupItem = (key) => {
  if (result.hasOwnProperty(key)) {
    return result[key];
  }
  return 'Item does not exist';
};

const printItems = () => {
  console.log(Object.values(result));
  return Object.keys(result).join(', ');
};

insertItem('hello', 'world');
insertItem('lorem', 'ipsum');
insertItem('sit', 'amet');
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem('lorem'));
// expected: 'ipsum'

deleteItem('lorem');
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem('lorem'));
// expected: 'Item does not exist'
