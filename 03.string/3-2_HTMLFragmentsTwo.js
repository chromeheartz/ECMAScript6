{/* ********
    DOM contents

    <div class="wrapper"></div>
    
******** */}

/*
    ***** HTML Fragments *****

    친구들을 배열에 만들어서 ul 안의 li 로 뿌리고 싶다.    
    const friends = ["barnes", "kkamzzu", "loki", "edward", "kany"]
    const ul = document.createElement("ul");
    friends.forEach(friend => ul.append(`<li>${friend}</li>`));
    wrapper.append(ul);
    
    이런식으로 forEach문을 써서 한명씩 돌려주게되면 li가 태그가 아닌 string으로 출력되게된다.

    friends.forEach(friend => {
        const li = document.createElement("li");
        li.innerText = `${friend}`;
        ul.append(li)
    });
    이렇게 li라는 태그를 만들어서 innerText로 안에 넣어주게 할 수도 있지만
    그렇게 되면 코드가 길어진다.

    이럴때에 template literal을 써보면 된다.
    const friends = ["barnes", "kkamzzu", "loki", "edward", "kany"]
    const list = `
        <h1>People i love</h1>
        <ul>
            ${friends.map(friend => `<li>${friend}</li>`)}
        </ul>
    `
    
    wrapper.innerHTML = list;

    map은 무엇을 리턴하던지 그 값을 array 로 만든다.
    friend를 받고 template literal 으로 return시켜줄것이다.
    하지만 출력물을 보게되면 , 가 들어가게 되는데 그것은 배열이기 때문에 그렇다.

    우리가 이제 할것은 array를 joing할것이다.
    우리가 string을 나누었던 것 처럼 또 array안의 string을 합칠 수 있다.

    ****** join ******

    join은 모든 엘리먼트들을 뒤에 들어오는 조건에 맞추어 분리하게 된다.
    friends.join("🤍")
    'barnes🤍kkamzzu🤍loki🤍edward🤍kany'

    그러니 (" ") 빈문자열으로 join을 할것이다.
*/

const wrapper = document.querySelector(".wrapper");

const friends = ["barnes", "kkamzzu", "loki", "edward", "kany"]
const list = `
    <h1>People i love</h1>
    <ul>
        ${friends.map(friend => `<li>${friend}</li>`).join("")}
    </ul>
`

wrapper.innerHTML = list;