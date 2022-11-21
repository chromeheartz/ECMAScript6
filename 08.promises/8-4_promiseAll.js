 /*
    ***** promise all ****

    Promise.all은 주어진 모든 Promise를 실행한 후 진행되는
    하나의 Promise를 반환한다.

    가끔 우리는 하나의 API가 아닌 3개, 4개의 API에서 값을 불러와야 할 때가
    있을것이다.
    예륻릉자면 영화리스트를 볼 수 있는 앱을 만들었는데,
    영화들, 인기가많은 영화들, 항상인기가많은영화들 을 불러와야하는데
    내가 원하는것은 그 3개의 값만을 기다리는것인데 
    그걸 p1 then, p2 then, p3 then으로 수많은 then을 넣어주는 것보다
    Promise.all 으로 한개의 Promise로 반환하는게 좋을것이다.
    모든 Promise가 전부 resolve되고 나면 마지막 Promise를 리턴해주는것

    const p1 = new Promise(resolve => {
        setTimeout(resolve, 5000, "First")
    })

    const p2 = new Promise(resolve => {
        setTimeout(resolve, 1000, "Second")
    })

    const p3 = new Promise(resolve => {
        setTimeout(resolve, 3000, "Third")
    })

    const motherPromise = Promise.all([p1, p2, p3]);
    motherPromise.then(items => console.log(items));

    모든 Promise들이 진행이 되고 값을 얻었다.
    즉 Promise.all이 다른 promisee들이 전부 진행될 때까지 기다렸다가 진행되었다는뜻.
    나오는 값들이 Array라는 뜻도 되는것이다. function 에서 resolve된 value들의 array 

    그리고 p1,p2,p3가 언제끝나는지에 상관없이 순서대로 받은것이다.
    이론에 따르면 p1은 마지막 값이 되어야하는데, 그런 작업들을 하지 않는것
    순서에 맞춰서 값을 제공한다.

    * 이제 만약 마지막 promise가 reject되면 어떻게 될까

    Uncaught (in promise) Third 이런 error가 나온다.
    Promise가 reject해서 제대로 작동하지 않은것

    Promise.all은 현재 3개의 Promise들이 필요한데 제공한 Promise가
    하나라도 reject되면 motherPromise도 reject가 되는것이다.
    그래서 catch를 써주면

    motherPromise
    .then(items => console.log(items))
    .catch(err => console.log(err));

    보이는것처럼 reject가 되는 Promise에는 catch를 쓰지않았는데
    에러값이 제대로 출력이된다.
    p3 promise에 넣어준 값이 나온다. p3 Promise가 거절을 당했다는 뜻.
    만약 p2에다가 같은식으로 해보면 그 다음것은 진행이 안된다. 이미 앞에 에러가 나서 소용이 없어진것이니.

*/

    const p1 = new Promise(resolve => {
        setTimeout(resolve, 5000, "First")
    })

    const p2 = new Promise(resolve => {
        setTimeout(resolve, 1000, "Second")
    })

    const p3 = new Promise((resolve, reject) => {
        setTimeout(reject, 3000, "Third")
    })

    const motherPromise = Promise.all([p1, p2, p3]);
    motherPromise
    .then(items => console.log(items))
    .catch(err => console.log(err));
    