// function test(test){
//     var test = "a"
//      return {
//          get_test : () =>{
//              return test;          
//          },
 
//          set_test : (_test) => {
//              test = _test;
//          }
 
//      }
//  }  
 
//  console.log(test().set_test('asfasf'));
//  console.log(test().get_test());


 const useState = (init) => {
    let state = init;

    const getState = () => {
        return state;
    }

    const setState = (init) => {
        state = init;
    }

    return [getState(), setState];
 }

const [test, setTest] = useState('테스트');

console.log(test);
setTest('두번째 테스트');
console.log(test);
