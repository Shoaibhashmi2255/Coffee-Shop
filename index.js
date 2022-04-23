const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let Value1 = 0;
let Value2 = 0;
let Value3 = 0;
let Value4 = 0;
let result = 0;
let quantity1 = 1;
let quantity2 = 1;
let quantity3 = 1;
let quantity4 = 1; 
let price1 = () => {
    try {
        let result1 = parseInt($('.value1').dataset.value);
        Value1 += result1;
        console.log(result1,Value1);
        let GetValue = $('.one');
        GetValue.placeholder= `${Value1} x ${quantity1}`;
        quantity1++;
    } catch (error) {
        console.log(error.message)
    }
}
let price2 = () => {
    try {
        let result2 = parseInt($('.value2').dataset.value);
        Value2 += result2;
        let GetValue2 = $('.two');
        GetValue2.placeholder = `${Value2} x ${quantity2}`;
        quantity2++;
    } catch (error) {
        console.log(error.message)
    }
}
let price3 = () => {
    try {
        let result3 =parseInt($('.value3').dataset.value);
        Value3 += result3;
        console.log(result3);
        let GetValue3 = $('.three');
        GetValue3.placeholder = `${Value3} x ${quantity3}`;
        quantity3++;
    } catch (error) {
        console.log(error.message)
    }
}
let price4 = () => {
    try {
        let result4 = parseInt($('.value4').dataset.value);
        Value4 += result4;
        let GetValue4 = $('.four');
        GetValue4.placeholder = `${Value4} x ${quantity4}`;
        quantity4++;
    } catch (error) {
        console.log(error.message)
    }
}
let CalculateThePrice= () => {
    try {
       if (result !== null) {
           
       }
        
    } catch (error) {
        console.log(error.message)
    }
}