/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
    this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
    // Your code goes here
    const self = this;
    return ()=>{
        let funcString = func.toString();
        let params = funcString.substring(funcString.indexOf('(')+1, funcString.indexOf(')')).split(',').map((p)=>{
            return self.dependency[p.trim()];
        });
        return func.apply(self, params.filter(p=>p));
    }
}

var deps = {
    'dep1': function () { return 'this is dep1'; },
    'dep2': function () { return 'this is dep2'; },
    'dep3': function () { return 'this is dep3'; },
    'dep4': function () { return 'this is dep4'; }
};

var di = new DI(deps);

var myFunc = di.inject(function (dep3, dep4, dep2) {
    return [dep4(), dep2(), dep3()].join(' -> ');
});


console.log(myFunc());