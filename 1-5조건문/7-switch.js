
let day ='monday';

switch (day) {
    case '월요일': case 'monday':
        console.log('새로운 한주가 시작되었습니다.');
        break;
    case '화요일': 
        console.log('화이팅 오늘도 좋은하루 보내세요.');
        break;
    case '수요일':
        console.log('주중의 절반을 넘었어요.');
        break;
    case '목요일':
        console.log('거의 주말이 다가옵니다.');
        break;
    case '금요일':
        console.log('마지막 하루 잘 마무리하세요.');
        break; 
    default:
        console.log('즐거운 주말 보내세요.');
}

//break가 있어야 코드가 아래로 내려가지 않는다