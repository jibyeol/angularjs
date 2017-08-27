// A.3 옵션 인자와 인자 기본값
function calcTaxES6 (income, state = 'Florida') {
    console.log(`ES6. Calculating tax for the resident of ${state} with the income ${income}`);
}

calcTaxES6(50000);

function getDefaultState(){
    console.log(getDefaultState);
    return 'Florida';
}

function calcTaxES6_2 (income, state = getDefaultState()) {
    console.log(`ES6. Calculating tax for the resident of ${state} with the income ${income}`);
}

calcTaxES6_2(50000);
calcTaxES6_2(50000, 'state'); // getDefaultState 실행되지 않음