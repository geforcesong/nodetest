const list = [
  { name: "george", ename: "guosong", like: "apple" },
  { name: "Jenny", ename: "yiqing", like: "apple pie" },
  { name: "tom", ename: "likou", like: "orange" },
  { name: "John", ename: "shadongxi", like: "banana" },
  { name: "Kevin", ename: "suibian", like: "grape" },
];

const searchFields = ["name", "ename", "like"];

const searchFunc = (text) => {
  return list.filter((c) => {
    return searchFields.reduce((prev, cur) => {
      return prev || c[cur]?.toUpperCase().includes(text.toUpperCase());
    }, false);
  });
};

const result = searchFunc("guo");

console.log(result);
