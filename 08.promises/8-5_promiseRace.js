/*
    ***** promise race ****

    Promise Race는 Promice All 이랑 사용법은 같은데 다르다.
    다른점은 이 세개중 하나라도 resolve되거나 reject되면 된다는것.

    Promise Race가 resolve되어서 then으로 넘어가거나
    reject되어서 catch로 넘어가려면
    p1,p2,p3중 하나만 resolve되거나 reject되면 가능.

    여기서 가장 빠른것이 결과를 정한다.

    const p1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 5000, "First")
    })

    const p2 = new Promise((resolve, reject) => {
        setTimeout(reject, 1000, "Second")
    })

    const p3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 3000, "Third")
    })

    const motherPromise = Promise.race([p1,p2,p3]);
    motherPromise
        .then(value => console.log(value))
        .catch(err => console.log(err))
    
    를 해보면 Second가 출력된다. 왜냐하면 p2가 가장 빠르기 때문.
    reject하는데 1초밖에 걸리지않는다.

    어느것이 먼저 되는지 상관 없을 때 Race를 사용하면 된다.
    현재 p2가 reject된 이후에 다른것들이 실행되어야하는데
    Promise Race는 다른 Promise들에 대해 아무것도 하지않는다.

    ** Race는 이 중 어떤 것이든지 성공하거나 reject가 발생하지 않으면
    resolve 된다.

    Promise.race([p1,p2,p3])
        .then(value => console.log(value))
        .catch(err => console.log(err))

    이런식으로 써주어도 정상작동될것이다.
*/

const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "First")
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 5000, "Second")
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Third")
})

Promise.race([p1,p2,p3])
    .then(value => console.log(value))
    .catch(err => console.log(err))
