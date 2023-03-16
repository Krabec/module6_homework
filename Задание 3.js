function getArg1(arg1) {
    
    return function (arg2) {

        return arg1 + arg2;
    };
};

const getArg2 = getArg1(-17);

console.log(getArg2(96));
