  /*
  HTML ELEMENT

  <div>
    <h1>Count One</h1>
    <span id="count"></span>
    <button id="add">Plus 1</button>
    <button id="minus">Minus 1</button>
  </div>

  <div>
    <h2>Count Two</h2>
    <span id="count2"></span>
    <button id="add2">Plus 1</button>
    <button id="minus2">Minus 1</button>
  </div>
*/

/*

    ***** this *****

    전 파일에서 우리는 이상한 에러에 직면했다.
    this.repaintCount는 HTML button element의 function이 아니다. 라는 에러가 나온다.

    일단,
    addEventListener()함수 바로 안에 
    console.log(this)를 찍어보면 잘 출력이되고있다.
    하지만 increase 함수 this가 button으로 찍히고있다.

    따라서 몇가지 이유때문에 this는 변한다. 더이상 class를 가르키고 있지 않고 button을 가르킨다.
    이것이 자바스크립트의 기본적인 동작이다. button이나 어떤것에 eventlistener를 추가하고 함수를 호출하면
    자바스크립트는 this를 변경시키고, this는 element를 가르킨다.

    * 그냥 this를 하게되면 window를 가르키고, 
    현재 이벤트 리스너 안에서는 counter를 가르키고, 
    increase를 호출한 안에서 this를 하면 이벤트가 등록된 element를 가르킨다.

    * 내가 event listener를 만들면 그 event 의 function이 this를 Copy할것이다.
    event를 호출한 element안으로.

    * 만약 this를 항상 class를 가르키게 하고싶다면 (몇개의 이벤트리스너가 생기던 상관없이)
    함수를 arrow function으로 바꾸어주면된다.

    this 키워드 사용법, 규칙이 많다 이것도 그중 하나이다.
    eventlistener를 target에 추가할때 이 event의 handler는 this를 event target에 가르키게 한다 

    클래스 없이 만들어도 동작할것이다. 타겟을 만들고 이벤트함수들을 놓고,
    기존에 하던방식대로.
    이건 단지 코드를 조직하는 다른방식이다 다른 규칙과함께

    다른점은 class를 파일에 넣고 import하면 원하는 만큼
    class를 만들어낼 수 있다.
    class와 함께하면 blueprint를 만들어야한다.
    같은 것을 재사용할 수 있으니 원하는 만큼 만들 수 있다.

    새로운 Counter를 만들어서 argument에 전달해주는것을 보내주면 새로운 Class로 등록이된다.
    그리고 argument를 바꾸고싶다하면 예를들어,
    initialNumber의 시작이 0이아닌 666으로 시작하고싶다.
    그렇다면 Counter안에 선언해주면된다.
    this.counter.innerHTML = initialNumber 기본값을 바로 출력해놓고 시작해보자.

    ** 정리

    우리는 보다시피 재사용 할 수 있는것을 만들었다.
    매우 조직적이고 원한다면 파일에 넣어 프로젝트 어디서든 쓸 수 있다.
    이것이 우리가 class를 사용하는 이유이다.
    함수를 사용하면 똑같이 만들수는 있지만 이것처럼 재사용은 불가능할것이다.
*/


class Counter {

  constructor({ initialNumber = 0, counterId, plusBtn, minusBtn }) {
    this.count = initialNumber;
    this.counter = document.getElementById(counterId);
    this.counter.innerHTML = initialNumber
    this.plusBtn = document.getElementById(plusBtn);
    this.minusBtn = document.getElementById(minusBtn);
    this.addEventListeners();
  }
  addEventListeners = () => {
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  }
  increase = () => {
    this.count = this.count + 1;
    this.repaintCount()
  }

  decrease = () => {
    this.count = this.count - 1;
    this.repaintCount()
  }
  repaintCount = () => {
    this.counter.innerText = this.count;
  }
}

new Counter({
  counterId : "count",
  plusBtn : "add",
  minusBtn : "minus"
});

new Counter({
    counterId : "count2",
    plusBtn : "add2",
    minusBtn : "minus2",
    initialNumber : 666
})
