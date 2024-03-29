/*

    ***** try catch ******

    try catch는 python같은 다른 언어들에서
    이미 쓰이고 있는 특징이다.
    javascript에선 새롭게 추가됨

    catch랑 then대신 우리는 무언가를 try해볼것이고 잘 되지않는다면
    error를 잡아볼것이다. 콘솔으로 에러를 찍어볼것이다.

    그리고 async await를 try문안에 추가하고 try 해볼것이고,
    json데이터를 찍어볼것이다. 동작을 안하면 error를 찍을것

    ***** Try Catch Finally ****
    
    우리는 이제 async await를 이용해서 then,then,then을 피하는 방법을 안다.
    하지만 catch를 아직 모른다.
    catch는 기존 방법과 같다.

    const getMoviesAsync = async() => {
        try {
            const response = await fetch("https://yts.mx/api/v2/listmovies.json")
            const json = await response.json();
            console.log(json);
        } catch(e) {
            console.log(`❌ ${e}`);
        }
    }
    getMoviesAsync();

    URL주소를 살짝바꾸어서 에러가 나게 해볼것이다. 에러메시지에
    패치할 access가 중단되서 없다고 하고, fetch에 실패했다고 뜰것이다.

    전에 했던 거대한 코드오는 다르다. then이 쭉 있고, catch가 있는

    이제 json response가 error를 발생하면 어떻게 될것일까.

    지금은 첫번째 error로 response error가 잡힐것이다. 이곳에 error를 발생시키면 어떻게 될지 보자.
    const response = await fetch("http://127.0.0.1:5500/")
    이 URL은 그냥 텍스트라 에러가 뜰것이다.
    ❌ SyntaxError: Unexpected token < in JSON at position 0
    라는 에러가 나오는데, 여기 보이듯이 catch는 모든 error를 잡아낸다. async await에서 일어나는 모든 에러를.

    ** then도 적고, 함수도 적고, 괄호도 적고 점도 적다. await 한단어면 해결된다.
    async를 함수에서 지우면 awiat는 async 함수 안에서만 유효하다고 뜰것이다.

    ** finally async await

    finally는 제일 마지막에 그냥 추가해주면 된다.

    * 정리
    try {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json")
        const json = await response.json();
        throw Error("I'm error")
    }
    catch block이 await 안의 error만 잡는것이 아니라
    밖도 잡는다 어떤 error가 try block 에 있던지 무조건 잡는다. await안에서 발생한것만 잡는것이 아님.

    * async await가 좋은이유 https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9

    결론은 최근 몇년동안 javascript에 추가된 특징중 가장 혁명적인것.
    또 구문적으로 혼잡한것이 무엇인지 알려준다. 정리가 되어있어 보기좋다.

*/

// async await
const getMoviesAsync = async() => {
    try {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json")
        const json = await response.json();
        // error
        // throw Error("I'm error")
        console.log(json)
    } catch(e) {
        console.log(`❌ ${e}`);
    } finally {
        console.log("we are done");
    }
}
getMoviesAsync();