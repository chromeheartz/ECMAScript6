{/*  DOM contents
    <button>Click me</button> 
*/}

/*
    ***** this inarrow function *****
    
    대부분의 경우에 arrow function을 사용할 수 있다.
    this 키워드를 사용해야 하는 경우를 제외하고.

    자바스크립트에서는 this라는 키워드가 이미 예약되어있다는 뜻으로
    색이 다르게 나온다.
    vscodde도  buttom의 이벤트 리스너 안에서 보게된다면
    HTMLButtonElement라고 알려주게 된다.
    
    이건 자바스크립트의 룰이다.
    이벤트 리스너를 붙히고 이벤트 리스너에 function이 있으면
    자바스크립트는 우리가 이벤트리스너에 등록한 대상을 this 키워드에 넣는다.

    이것도 scope라고 부른다.
    어떤 이론을 배워도 이해해야하는건 자바스크립트가 this를 
    내가 원하는 function에 넣는지를 알아야한다.

    현재는 
    const button =document.querySelector('button');
    button.addEventListener('click', function(){
        // this
        console.log('i have been clicked');
    })
    로 했지만 arrow function으로 바꾸게 되면 this가 
    가리키는 객체가 달라진다. 

    arrow function은 규칙을 가지고있다
    이 안에 있는 this는 window를 참조한다.
    바깥의 bubble을 참조한다.
    this를 사용하고 싶으면 arrow function을 사용하면 안된다.
    arrow function을 사용하면 reference를 잃게됨.

    ** 정리

    arrow function은 this를 이벤트로부터 가지고 있지않고,
    window object로 가지고있다.

    객체로 넣어서 this로 ++ 해주게 했는데도 window를 
    가리키기 때문에 적용이 되지않는다.

    this가 관련된것이나 scope관련해선
    arrow function을 사용하지 않는것이 좋다.
*/
    const button =document.querySelector('button');

    const handleClick = () => {
        console.log(this)
    }
    button.addEventListener('click', handleClick);

    //    const bibi = {
    //     name : "Bibi",
    //     age : 24,
    //     addYear : () => {
    //         this.age++;
    //     }
    //    }
    //    console.log(bibi)
    //    bibi.addYear();
    //    bibi.addYear();
    //    console.log(bibi)
     
