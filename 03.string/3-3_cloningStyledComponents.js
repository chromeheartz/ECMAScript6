/*
    ***** styled components *****

    styled components는 리액으틀 위한 라이브러리, 패킷 그런것이다
    이것은 JS에서 css를 쓸 수 있게 해주고, html을 얻을 수 있다.
    template literals의 도움을 받아 이것을 카피해 만들어볼것이다.

    두가지를 해볼것이다.
    첫번째는  function 이 있어야한다.
    function은 우리가 만들고싶은  element를 받고 
    적용하고 싶은 css도 받은 다음에 css를 적용한 element를 return할것이다.

    const styled = css => console.log(css);

    styled`border-radius : 10px;color : blue;`

    보통 styled()안에다가 넣지만 빼고 콘솔을 찍어보면
    내 css argument가 바뀌었다. 여전히 function은 실행되고
    styled()한것과 같은 결과가 나온상태이다. 
    콘솔을 찍어보면 엄청 긴 argument가 나올것이다.
    string인 하나의 argument. array안에 하나만 있는

    이것이 styled component가 동작하는 방식이다

    **** styled`border-radius : 10px;color : blue;`
    
    이것은 function을 text로 호출하는 또 다른 방법이다.
    이것이 template literal의 장점 중 하나다.
    이렇게 함수를 호출하면 string들은 argument로 들어가게 된다.

    const styled = aElement => {
        const el = document.createElement(aElement);
        return el;
    }

    const title = styled("h1")`
        color : blue;
        font-size : 1rem;
    `
    console.log(title);

    이런식으로 하고 찍어보면 error가 난다
    styled(...) is not a function
    이것은 function을 두번 호출했다는 뜻이다.
    const title = styled("h1")() 이런식
    왜냐면 우리가 element를 return하기 때문이다.

    styled("h1") 이것은 하나의 표현식이다 
    <h1></h1>같은것인데 이 h1를 한번 더 부르는 셈이 되는것.

    우리가 해야 할 것은
    function안에 function을 return하는것이다.

    element를 return하는 대신에 function을 return
    이 function을 argument를 가져갈것이다
    `
        color : blue;
        font-size : 1rem;
    `
    이건 string이다. (args) => {
        console.log(args[0]);  arg의 첫번째 엘리먼트로 들어오니 그것만 필요
        const styles = args[0] 변수로 넣어주고
    }
    el.style = styles; element의 스타일을 지정
    return el; element를 return

    이 이후에 확인을해보면 h1을 가지고있고 style이 안에 들어가있다.
    styled("h1")("color : blue")같이 두번쨰의 ()를 넣을 필요가 없어진것이다.
    ()를 넣어도 잘 동작한다

    이것이 react에서 쓰는 방식

    지금까지 styled componentdml clone을 만들었다.
    여기서 react를 다루지는 않지만 잘된다.

    이것이 template literal의 힘이다.
*/

const styled = aElement => {
    const el = document.createElement(aElement);
    return args => {
        const styles = args[0];
        el.style = styles;
        return el;
    };
}

const title = styled("h1")`
    color : blue;
    font-size : 1rem;
`;

const subTitle = styled("span")`
    color : green;
`
title.innerText = "we just cloned";
subTitle.innerText = "styled components";

document.body.append(title, subTitle);