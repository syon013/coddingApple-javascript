var 출석부 = ['홍민', '영희', '철수', '재석']

function 이름찾기(e){
    for(let i = 0; i < 출석부.length; i++){
    if(출석부[i] === e){
        console.log('있어요');
    } 
    }
}

// 이름찾기('철수');

function 구구단(){
    for(i = 2; i < 10; i++){
        for(j = 1; j < 10; j++){
            console.log(i*j);
        }
    }
}

// 구구단();

function 평균점수(e, k){
    let sum = 0;

    for(i = 0; i < e.length; i++){
        sum += e[i];
    }
    sum = sum / e.length;

    if(sum <= k){
        console.log(`평균보다 ${k - sum}점이 올랐네요.`);
    } else {
        console.log(`평균보다 ${sum - k}점이 떨어졌네요. 재수 추천`);
    }
    
    }
    // 평균점수([10, 20, 30, 40, 50], 40);
    평균점수([40, 40, 40], 20);

