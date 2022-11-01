/*
    ***** value shorthand *****

    value shorthand(변수명 단축)은 너무 간단하다.
    예를들어 나한테 follow 라는 변수가 있고, 이 값이 checkFollow로 부터 나온다고 가정
    또 alert이라는 변수는 checkAlert라는 함수한테서 온다고 할 때

    settings object를 하나 만들것이다
    여기에는 notifications가 있고 그 안에 follow값에는 위에 있는 follow 값을 넣어줄것이다.

    notifications안의 변수명을 안맞추는건 좀 바보같은 행동이다. 보기 불편하기 때문
    그치만 변수 이름을 똑같이 하고싶다면
    shorthand property(단축속성명)을 사용할 수 있다.
    이것이 하는 역할은
    follow : follow, 같이 쓸데없이 반복되는 부분을 안써도 되게 해주는것

    const follow = checkFollow();
    const alert = checkAlert();
    
    const settings = {
        notifications : {
            follow,
            alert
        }
    }

    우리한테 settings라는 object가 있는데 거기에 notifications가 있고
    그 안의 follow는 위의 follow, alert도 같다고 인식하는것
    follow : follow
    와 같은것인데 첫번째 follow는 object의 key값에 해당.
    두번째 follow는 위에있는 follow 변수에 해당.

    물론이것은 key값, 변수명이 같을때만 가능.

*/
const follow = checkFollow();
const alert = checkAlert();

const settings = {
    notifications : {
        /*
            만약 변수명을 통일하고싶지 않다면
            isFollowing : follow 처럼 할 수도있다.
        */
        follow,
        alert
    }
}