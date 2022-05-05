const monster1 = { eyeCount: 4 };

const handler1 = {
  set(obj, prop, value) {
    console.log('set log:', obj, prop, value);
    if ((prop === 'eyeCount') && ((value % 2) !== 0)) {
      console.log('Monsters must have an even number of eyes');
    } else {
      console.log('before:', monster1);
      const ret = Reflect.set(...arguments);
      console.log('end:', monster1);
      console.log(`ret: `, ret);
      return ret;
    }
  },
  get(target, prop, receiver) {
    console.log('get log:', target, prop, receiver);
    if (prop === 'secret') {
      return `... shhhh!`;
    }
    return Reflect.get(...arguments);
  }
};

// const proxy1 = new Proxy(monster1, handler1);


// console.log(Array.isArray( Reflect.ownKeys({age:1})));

// proxy1.eyeCount = 1;
// // expected output: "Monsters must have an even number of eyes"

// console.log(proxy1.eyeCount);
// // expected output: 4

// proxy1.eyeCount = 2;
// console.log(proxy1.eyeCount);


// proxy1.age = 100;
// console.log(proxy1.age);
// console.log(proxy1.secret);

