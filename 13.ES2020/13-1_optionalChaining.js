/*

  ***** optional chaining operator *****

  optional chaining 연산자는 
  React로 작업하거나 어떤 형태의 data로든 작업을 할 때
  API,JSON 뭐든 간에 어떨때는 존재하지 않을떄 유용하다. (null)

  API에서 object를 가져올때를 가정해서 예를 들어봄.
  const me = {
    name : "bibi",
    profile : {
      age : "24",
      email : "@something"
    }
  }
  const nico = {
    name : "nico"
  }

  예를들어 이런식으로 me는 Profile이 있고,
  nico는 없다고 가정해보자.
  me.profile.email은 접근이 가능한데
  nico.profile.email은 에러가 뜬다. profile에 있는 email을 출력하려고했는데
  선언되지 않아서 에러가나옴.
  이런경우가 react.js에서는 많이 나온다
  * 나는 존재한다고 생각했는데 실제로는 undefined인 경우.

  ** ?. 이 연산자는 기본적으로
  nico.profile && nico.profile.email 이것과 같은 맥락이다.
  이 경우 콘솔은 nico에 profile이 존재하고 nico.profile.email이 존재하면
  코드를 실행하라고 하는것이다. 이렇게 하면 문제점이
  어떨때는 이 구문이 엄청 길어질 경우가 있다. 
  
  nico.profile && nico.profile.email && nico.profile.email.provider && ----- 
  이런식으로. 이것을 한단계로 줄일 수 있다.

  * nico?.profile?.email?.provider?.name 이런식으로
  && and연산자를 여러개 쓰지 않아도 된다.
  왜냐하면 nico가 존재하고 profile이 존재하고 email이 존재하고 --- 가 존재하면 
  nico.profile.email.provider.name을 출력하라고 했기 때문.

  같은 역할을 하는 코드를 적어보면 아래와 같다
  nico && nico.profile && nico.profile.email && nico.profile.email.provider && nico.profile.email.provider.name
  이것이 ?. 연산자로 깔끔하게 해결이 된다.

  * 언제 사용하는게 좋냐면
  어떤 object가 내가 예상한것을 가지고 잇는지 아닌지
  확신할 수 없을때 사용하면 된다.

  * API를 사용하는 대부분의 작업에서 사용될것이고
  가끔은 object가 내가 원하는것을 가지고 있지 않을 수 있는데
  그때 이 연산자를 쓰면 어떤 단계는 이전단계가 존재하면 호출됨.
  즉 email은 profile이 없다면 호출되지않고 profile은 nico가 없다면 호출되지 않을것이다.

  * 이 연산자도 마찬가지로
  Browser compatibility를 확인하기를.




*/ 

const me = {
  name : "bibi",
  profile : {
    age : "24",
    email : "@something"
  }
}
const nico = {
  name : "nico"
}