/*
    ***** destructuring (비구조화) *****

    destructuring은 object나 array, 그 외 요소들 안의
    변수를 바깥으로 끄집어 내서 사용할 수 있도록 하는것.

    예를들어 우리한테 
    settings라는 객체가 있고,
    누군가 유저를 팔로우하면 notification을 보낸다고 가정
    alert같은 것들을 설정

    const settings = {
        notifications : {
            follow : true,
            alerts : true,
            unfollow : false
        },
        color : {
            theme : "dark"
        }
    }
    이런것들은 우리가 js로 코딩하면서 만들게 될 수도있는 그런 종류의 변수들이다. 
    이제 우리가 하고싶은것은 일종의 체크이다.

    만약 follow 가 true일때 이메일을 보내려고 한다면

    if (settings.notifications.follow) {
        // send email
    }
    이런식으로 작성을 할것이다.
    이런경우는 notifications가 없거나 follow가 없거나 많은 변수 상황들에 의해
    코드가 정상작동하지 않을 경우가있다.
    이런때에 활용 할것이

    object destructuring이다.
    내가 하고싶은것은 settings 안의 notifications의 follow를 가져올것이다.
    if 로 체크하는것이 아닌 변수를 만든다.

    const follow = settings.notifications.follow 이런방식이 아닌
    변수 자체에 destructuring을 적용
    const follow = settings; 
    이런식으로 타겟 object를 뒤에 넣어주고 이제 구조상 follow가 나올때까지 settings안을 찾아볼것이다.
    상단방식은 접근하기 어려우니

    const {
        notifications : { follow }, 3단계 레벨의 안으로 접근하고 싶다면 변수에 컬럼 : 하고 중괄호로 묶으면 된다.
        *** 여기서 중요한점은 notifications를 콘솔에 찍어보면 에러가 난다.
        그 이유는 notifications자체를 변수로 가져오는것이 아니라 그 안에 있는 follow라는 값을 변수로 만드는것이다.
        color
    } = settings;
    라는 식으로 해주면, notifications안으로 접근하고 그것은 settings안에 있는데, follow만을 가져올것이다.

    만약 color의 theme이 아니라 전체를 가져오고싶다면
    color를 추가

    **** 이런 방식은 큰 오브젝트에서 특정 변수나 그 안에 속한 작은 오브젝트에 접근할 수 있게 해준다 

    const {
        notifications 이 부분이 const를 생성하는것이다.
    } = settings

    const notifications = settings.notifications   두 구문이 같은것.

    ***** 없는것을 찾아볼때

    const {
        bibi : { barnes = true }
    } = settings;
    console.log(barnes);

    이런식으로 현재 object에 없는것을 찾아보면 
    에러가 나온다.

    이런때에 default값을 넣어줄 수 잇다.

    barnes = true 가 무슨뜻이냐하면
    settings안의 notifications의 안으로 가서
    barnes가 있는지 찾아본 다음에
    없다면 true라는 값을 넣는것이다. boolean 값 뿐만 아니라 모든 타입을 넣을 수 있다.

    bibi라는 것이 통째로 없다면 이런식으로도 체크가 가능
    const { bibi  : { barnes = false } = {} } = settings;
    이것은 bibi가 없다면 default값을 설정하는것이다.
    무슨 의미냐 하면
    settings안을 보고 bibi 안으로 가서 barnes를 찾는것이다.
    만약 barnes가 없다면  false로 설정하고 
    bibi 자체가 없다면 빈 object로 만들것이다. 
    console.log(barnes)를 찍어보면 false 가 나올것이다.
    왜냐하면 지금 bibi는 빈 객체이기 때문

    참조를 해서 settings에 넣고싶다면
    const { bibi, bibi  : { barnes = false } = {} } = settings;

    이것이 'one-line-statement'이다.
    이런식으로 one-line-statement를 사용하는게 if 어쩌고를 사용하는것보다 좋다

    target object를 적어주고 우리가 가지고 올 값의 경로를 적어주는 것
*/

const settings = {
    notifications : {
        follow : true,
        alerts : true,
        unfollow : false
    },
    color : {
        theme : "dark"
    }
}

const {
    notifications : { follow },
    color
} = settings;
console.log(color);

// 없는것을 찾아보려고할때
const { bibi  : { barnes = false } = {} } = settings;
console.log(settings);
