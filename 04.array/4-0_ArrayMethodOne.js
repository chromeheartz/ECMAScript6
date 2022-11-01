{/* ********
    DOM contents

    <button class="btn">1</button>
    <button class="btn">2</button>
    <button class="btn">3</button>
    <button class="btn">4</button>
    <button class="btn">5</button>
    <button class="btn">6</button>
    <button class="btn">7</button>
    <button class="btn">8</button>
    <button class="btn">9</button>
    <button class="btn">10</button>
    
******** */}

/*
    ***** Array.of() *****
    
    Array.of는 어떤것을 array로 만들고 싶을때 사용한다
    const friends = ["bibi", "js", "minu", "bonmi"];
    보통 이런식으로 array를 만드는데 Array.of는 값만 있으면 만들어준다.
    
    const friends = Array.of("bibi", "js", "minu", "bonmi");
    console.log(friends)
    
    만약 내가 element가 많을 때 사용하면 좋을 것이다.
    Array.of(1,4,6,true,"yello") 이런식으로 타입이 다른것들도 넣을 수 있으니.
    
    ***** Array.from() *****

    Array.from()은 aarray-like object(유사배열)로 부터 array를 만드는 메소드.

    현재 버튼이 10개가 있다. 각각의 버튼에 이벤트 리스너를 붙힐것이다.
    const buttons = document.querySelectorAll("button");
    console.log(buttons);
    를 출력해보면 NodeList가 나온다 array인것 같지만 사실 array는 아니다.

    class 를 추가하고 getElementByClassName으로 찍어보면
    HTMLCollection이란 것이 나오는데 마찬가지로 array는 아니다.

    ** 이런것들을 array-like object 라고 부른다
    array 같지만 array가 아닌것들
    이런것들은 왜 array가 아닐까.
    예를들어 각각의 버튼들을 가져와서 이벤트 리스너를 붙인다고 가정하면
    해야할것은 이론상으로 array라면 이렇게 해야한다.

    buttons.forEach(button => {
        button.addEventListener("click", () => console.log("i've benn clicked"))
    })
    buttons에 forEach로 각각에게 이벤트 리스너를 준다.
    하지만 현재상태에서는 에러가 뜬다 왜냐하면 buttons가 forEach메소드를 가지고 있지 않기 때문.

    const buttons = document.getElementsByClassName("btn");
    Array.from(buttons).forEach(button => {
        button.addEventListener('click', () => console.log("i've been clicked"));
    })

    Array.from에서 그 array-like object를 호출하면
    array를 반환해서 forEach를 사용할 수 있게된다.

    또한, 
    const arr = Array.from(button)
    arr.forEach(button => {
        button.addEventListener('click', () => console.log("i've been clicked"));
    })
    이런식으로도 가능하다

*/

// array.of()
const friends = Array.of("bibi", "js", "minu", "bonmi");
console.log(friends)

// array.from()
const buttons = document.getElementsByClassName("btn");
Array.from(buttons).forEach(button => {
    button.addEventListener('click', () => console.log("i've been clicked"));
})