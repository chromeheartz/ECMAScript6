/*
    ***** function destructuring *****

    뭔가를 저장하는 함수를 하나 만들어 볼것이다.
    유저 세티을 저장하는 함수라고 가정하여 saveSettings라고 이름을 짓고

    인자를 몇가지 넣어주겠다.
    function saveSettings(followAlert, unfollowAlert, mrkAlert, themeColor){...}
    이렇게 너무 긴 인자를 받는 함수는 좋지않으니
    settings object 안에 넣어버리겠다.

    function saveSettings(settings){
    console.log(settings);
    }
    saveSettings({
            follow : true,
            alert : true,
            mkt : true,
            color : "green"
    })

    이런시그로 해야 보기에 편하다.

    문제는 이게 함수를 호출할 때엔 좋은데 함수를 작성할 때는 좋지 않다는것이다.
    이것의 문제점이 무엇이냐면
    예를들어 누군가 마케팅 이메일 수신을 중단했을 때 내가 알고싶다면
    그럴경우에 "님 왜그러는거임 ㅠㅠ" 이런 메시지를 보내고싶을 수 있다.

    이 경우네는 그러고 싶을때 if (!settings.mkt)이런식으로 해야한다.
    settings안에 있는 값을 특정해서 써야하는 것이다.
    
    심지어 더 별로인것은 notifications 정보를 저장한다고 했을 떄
    위에 세개는 하나의 api로 보내고 color값은 다른 api로 보내야하는 경우를 생각해보자.

    그럼 아마 별도의 saveColor라는 함수같은것을 호출해야할것이다.
    function saveSettings(settings){
        if(!settings.mkt){...}
        saveColor(settings.color){...} 이런식으로
    }
    이것은 좋지 않다 만약 누군가가 color값을 안넣으면 undefined로  에러가 날 수 있기 때문

    ** 정리하면 내가 원라는것은 두가지이다.
    1. 변수들의 가독성 확보
    2. 각 변수의 기본값을 설정

    그렇게 하기 우이해서 object destructuring을 사용할것이다.
    function saveSettings({follow, alert, mkt, color = "blue"}){
        console.log(settings);
    }
    saveSettings({
        follow : true,
        alert : true,
        mkt : true,
    })

    일단은 color가 없을때에 기본값을 이런식으로 설정해줄수있다.

    또한 notifications로 묶어버리고 객체를 또 만들어 줄 수있다.
    function saveSettings({ notifications, color : {theme} }){
        console.log(notifications);
    }
    saveSettings({
        notifications : {
            follow : true,
            alert : true,
            mkt : true
        },
        color : {
            theme : "blue"
        }
    })

    이런 방식이 destructuuring이다.
    더 보기 좋은 방법으로 코딩할 수 잇게 해주고 기본값을 넣을 수 있는것.
*/
function saveSettings({ notifications, color : {theme} }){
    console.log(notifications);
}
saveSettings({
    notifications : {
        follow : true,
        alert : true,
        mkt : true
    },
    color : {
        theme : "blue"
    }
})