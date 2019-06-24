// const arr = [1, 2, 3, 4, 5];

// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[arr.length - 1]);

// function callBackFn(...myParams){
//     console.log(myParams)
// }

// arr.forEach( callBackFn )

// arr.forEach((element, index) => console.log(element, index));

// arr.push(6);
// console.log(arr);

// arr.pop();
// console.log(arr);

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(1));
// console.log(animals);

// console.log(animals.splice(2, 0, 'Goat'));
// console.log(animals);

// const arr = [1, 2, 3, 4, 5];

// const result = arr.map(value => value * 2);
// const result = arr.filter(value => value > 2);
// const result = arr.reduce((accValue, currValue, index, array) => {
//     return accValue + currValue
// }, 0);
// const result = arr.reduce((accValue, currValue) => accValue + currValue);

// console.log(result);

// const arr = [
//     true,
//     'Hello',
//     {
//         abc : 'hello'
//     },
//     [1,2,3]
// ];

const arr = [
  {
    first_name: "Fania",
    last_name: "Radish",
    email: "fradish4@howstuffworks.com"
  },
  {
    first_name: "Rickard",
    last_name: "Davydychev",
    email: "rdavydychev5@tinypic.com"
  },
  {
    first_name: "Gus",
    last_name: "Gianettini",
    email: "ggianettinic@wufoo.com"
  },
  {
    first_name: "Corbett",
    last_name: "Spaight",
    email: "cspaightd@buzzfeed.com"
  },
  {
    first_name: "Cortney",
    last_name: "Lynagh",
    email: "clynaghe@princeton.edu"
  },
  {
    first_name: "Trudy",
    last_name: "Bonafacino",
    email: "tbonafacinof@psu.edu"
  },
  {
    first_name: "Tanney",
    last_name: "Itzhayek",
    email: "titzhayeki@toplist.cz"
  },
  {
    first_name: "Padget",
    last_name: "Fishbourne",
    email: "pfishbournej@baidu.com"
  },
  {
    first_name: "Masha",
    last_name: "Mallaby",
    email: "mmallabyk@cargocollective.com"
  },
  {
    first_name: "Adella",
    last_name: "Groucutt",
    email: "agroucuttm@about.com"
  },
  {
    first_name: "Reinhold",
    last_name: "Carlesso",
    email: "rcarlesson@ocn.ne.jp"
  },
  {
    first_name: "Agata",
    last_name: "O'Hederscoll",
    email: "aohederscollt@indiegogo.com"
  },
  {
    first_name: "Alonso",
    last_name: "Frostdicke",
    email: "afrostdickeu@naver.com"
  },
  {
    first_name: "Xylia",
    last_name: "Rastrick",
    email: "xrastrickv@bluehost.com"
  },
  {
    first_name: "Hervey",
    last_name: "Drought",
    email: "hdroughtw@skyrock.com"
  },
  {
    first_name: "Charita",
    last_name: "Canete",
    email: "ccanete11@hubpages.com"
  },
  {
    first_name: "Robbie",
    last_name: "Limbert",
    email: "rlimbert12@google.com.br"
  },
  {
    first_name: "Emyle",
    last_name: "Rickeard",
    email: "erickeard17@example.com"
  },
  {
    first_name: "Fraze",
    last_name: "Artinstall",
    email: "fartinstall19@sphinn.com"
  }
];

// console.log(
//   arr.map((obj, index) => {
    // const tempObj = {};
    // tempObj['fullName'] = `${obj.first_name} ${obj.last_name}`;
    // tempObj['index'] = index + 1;
    // tempObj.fullName = '';
    // tempObj.index = index + 1
    // return tempObj
//     return {
//       fullName: `${obj.first_name} ${obj.last_name}`,
//       index: index + 1
//     };
//   })
// );

console.log(
  arr.map((obj, index) => ({
    fullName: `${obj.first_name} ${obj.last_name}`,
    index: index + 1
  }))
);
