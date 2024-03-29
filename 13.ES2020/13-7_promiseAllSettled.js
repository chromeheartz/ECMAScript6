/*

  ***** Promise.allSettled *****

  promise.allSettled는 promise.all이랑 다르다.
  promise.all 예시

  const p = Promise.all([
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/list_movies.json"),
  ])
  .then(response => console.log("succes!", response))
  .catch(e => console.log("error:", e))

  먼저 promise.all을 하고 안에 있는 링크를 fetch라는 promise 하나가 있다.
  API를 fetch하는것. 기억해야할것은 Promise.all이 언제 동작하는지

  promise.all은 안에 있는 코드들이 성공적으로 실행된다면 success를 출력할것이다.
  그리고 그중 하나라도 실패하면 error code가 출력됨
  현재는 모두 잘되서 success가 출력될것이고
  response에 대한 배열도 출력될것이다. 이 배열은 각각 promise에 대한 response이다.

  '만약' 하나라도 실패할경우
  예를들어 하나를 이렇게 비워둘 경우 fetch(),
  error code가 나오게 되는데 하나가 실패해서 그렇다
  Promise all은 모든것이 성공해야한다.

  ** Promise.allSettled는 모든 promise가 성공할 필요가 없다.

  같은 코드로 Promise.allSettled로 해보게되면
  기본에 출력값은 배열이였는데 지금은 Object로 출력이 된다.
  우리는 status는 fulfilled, value는 response인 Object를 얻었다.
  이게 Promise.allSettled는 promise가 모두 성공하지 않아도 되는이유다.
  끝나기만하면된다. 에러가있는건 상관하지않음.

  두번째가 에러가 나도 status에 rejected라고만나오고 
  두번째의 key값이 reason으로 에러메세지가나온다.

  promise가 성공하면 status는 fulfilled가 된다.
  그리고 value로 promise를 가지는것이고
  promise가 rejected되면 rejected와 reason을 가질것이다.

  ** use case

  모든 Promise가 잘 작동하는지 확인할 필요가 없으면 우리는 allSettled를 사용하면 된다.
  어떤게 잘 동작하고 어떤게 동작하지 않는지 확인할 때 사용.
  다만 모든 Promise가 동시에 동작하는지 확인하는게 중요하면
  그때는 promise.all을 사용해야함.

  *** 정리

  근본적인 정리를 하자면
  promise.all은 서로 상관이 있는 promise들을 동작시킬 때 사용.
  모두 성공하거나, 모두 실패.

  반대로 promise.allSettled는 promise들이 서로 독립적이라 상관없을때 사용가능
  그리고 어떤게 잘 동작하는지 동작하지 않는지 확인할때도 포함.
  만약 하나가 잘 동작되지않으면 수정할 수 있다.

  promise끼리 상관이 있다면 promise.all
  promise끼리 상관이 없거나 어떤게 실패하는지 성공하는지 보고싶을때 promise.allSettled


*/

// promise all
const p = Promise.all([
  fetch("https://yts.mx/api/v2/list_movies.json"),
  fetch("https://yts.mx/api/v2/list_movies.json"), 
  fetch("https://yts.mx/api/v2/list_movies.json"),
  fetch("https://yts.mx/api/v2/list_movies.json"),
])
.then(response => console.log("succes!", response))
.catch(e => console.log("error:", e))

// promise allSettled
const s = Promise.allSettled([
  fetch("https://yts.mx/api/v2/list_movies.json"),
  fetch(),
  fetch("https://yts.mx/api/v2/list_movies.json"),
  fetch("https://yts.mx/api/v2/list_movies.json"),
])
.then(response => console.log("succes!", response))
.catch(e => console.log("error:", e))