class Bird {
    fly(){

    }
    layEggs(){

    }
}

class Fish {
    swim(){

    }
    layEggs(){

    }
}

function getSmallPet(): Fish | Bird | String {
    return new Fish();
}

const fish = getSmallPet();

console.log((fish as String));