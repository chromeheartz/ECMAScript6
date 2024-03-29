/*
  HTML ELEMENT

  <span id="count">0</span>
  <button id="add">Plus 1</button>
  <button id="minus">Minus 1</button>
*/

/*
    *** 코드를 잘 정리하기.
    코드를 잘 정리하려면 class를 여러개 쓰면 되는데 더 깔끔하게 보이면서
    이해하기 쉽게 만들어준다.

    예를들어, counter라는 class를 만들어보자.
    이 class는 constructor를 가지고 있다.
    각 인자로 options subject를 받는다.

    this.count = 0
    디폴트값이 0인 count가 있고
    this.counter = document.getElementById(counterId); span이 되는 counter가 있다.
    this.plusBtn = document.getElementById(plusBtn);
    this.minusBtn = document.getElementById(minusBtn);
    객체안의 선택자로 인자를 받을 수 있도록 넣었다.

    이후에 new Counter로 생성해주면. 이벤트리스너를 걸고싶어질것이다.
    this.addEventListeners();함수를 constructor안에 만들어주고 
    밑에 정의해줄것이다.

    addEventListeners(){
      this.plusBtn.addEventListener("click", this.increase);
      this.minusBtn.addEventListener("click", this.decrease);
    }
    정의를 해주고 이제 밑에 
    increase에 대해 정의할것이다. 
    이 함수는 호출할것이다. counter에 1을 더하도록
    decrease도 마찬가지
    

    ** 정리

    constructor에서 initialNumber를 넘겨주고 (0)
    counter는 count라는 id를 잡아냄. plusId, minusId도 같은 맥락.
    그리고 이벤트 리스너를 추가하고, 이제 플러스, 마이너스버튼에 접근할 수 있다.
    addEventListeners에서 플러스버튼과 마이너스버튼을 호출했고 이벤트리스너를 추가했다.
    click이벤트랑 다른 2가지 이벤트를 이벤트 리스너가 가지고잇다.

    increase는 디폴트가 0인 카운트값을 증가시키고 count + 1로 증가시킨다.
    decrease는 반대로.

    그리고 repaintCount함수가 target(span)을 새로고침해주는것.
    그리고 innerText 값을 변경.
    또한 counter의 업데이트가 끝나면
    this.repaintCount()를 호출

*/

class Counter {
  constructor({ initialNumber = 0, counterId, plusBtn, minusBtn }) {
    this.count = initialNumber;
    this.counter = document.getElementById(counterId);
    this.plusBtn = document.getElementById(plusBtn);
    this.minusBtn = document.getElementById(minusBtn);
    this.addEventListeners();
  }
  addEventListeners() {
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  }
  increase() {
    this.count = this.count + 1;
    this.repaintCount();
  }

  decrease() {
    this.count = this.count - 1;
    this.repaintCount();
  }
  repaintCount() {
    this.counter.innerText = this.count;
  }
}
new Counter({
  counterId: "count",
  plusBtn: "add",
  minusBtn: "minus",
});
