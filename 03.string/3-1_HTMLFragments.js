{/* ********
    DOM contents

    <div class="wrapper"></div>
    
******** */}

/*
    ***** HTML Fragments *****
    
    string안에 표현식을 넣을 수 있다는 점 말고
    template literal을 멋지게 사용하는 경우는
    javascript안에서 html을 쓸 수 있다는 점이다.

    예를들어 인터넷에서 어떤 이름을 가져오는 function이 있다고해보자
    이름이나 어떤 정보를 가져온다고 가정하고
    welcome 메시지를 추가한다고 해보자

    const wrapper = document.querySelector(".wrapper");

    const addWelcome = () => {
        const potato = document.createElement("div");
        const h1 = document.createElement("h1");
        h1.innerText = "Hello";
        potato.append(h1);
        wrapper.append(potato);
    }

    setTimeout(addWelcome, 3000);

    로딩하고 3초 후에 addWelcome이 실행되면서
    Hello를 가지고 있는 엘리먼트를 반환하게된다.

    만약 복잡한 구조의 html 을 만들거나 className을 같이 만들게 된다면 어떻게될까.
    h1.className = "sexyTitle"
    이런식으로 한 줄씩 계속 커지면서 길어질것이다.

    그렇게 하는 대신 1개의 div만 만들고
    template literal 안에 원하는것을 써주면 된다.
    물론 변수도 안에 넣어줄 수 잇다.

    전보다 더 보기 편해졌다.
    우리는 HTML Fragments를 만든것이다.
    html을 위한 fragments로만 동작하는것이 아니라
    어떤것이든 될 수 있다.

    여기서 중요한것은 template literal이 우리가 만드는 space도 고려해준다는것이다
    enter한것도 알아준다. 
*/

    const wrapper = document.querySelector(".wrapper");

    const addWelcome = () => {
        const potato = document.createElement("div");
        const h1 = document.createElement("h1");
        h1.innerText = "Hello";
        potato.append(h1);
        wrapper.append(potato);
    }

    // setTimeout(addWelcome, 3000);

    const hello = "HEllo"
    const addTemplate = () => {
        const div = `
            <div class="hello">
                <h1 class="title">${hello}</h1>
            </div>
        `;
        wrapper.innerHTML = div;
    }
    addTemplate();

    console.log(`
    
    
        enter , spance
    
    `) // enter,space를 고려하기 때문에 이런것도 가능하다.
    