// 버튼0을 누르면 
// 모든 버튼에 붙은 orange 클래스명 제거
// 버튼0에 orange 클래스명 추가
// 모든 div에 붙은 show 클래스명 제거
// div0에 show 클래스명 추가

// dataset 을 이용한 코드 작성

$('.list').click(function(e){
    console.log(e.target.dataset.id);
    tabButtons(e.target.dataset.id);
})

// 이벤트 버블링을 이용한 코드 작성

// $('.list').on('click', function(e){
//     const btn1 = document.querySelectorAll('.tab-button')[0];
//     const btn2 = document.querySelectorAll('.tab-button')[1];
//     const btn3 = document.querySelectorAll('.tab-button')[2];

//     if(e.target === btn1){
//         tabButtons(0);
//     } else if (e.target === btn2){
//         tabButtons(1);
//     } else {
//         tabButtons(2);
//     }
// })

// 함수를 이용한 코드 작성

//  for (let i = 0; i < 3; i++){
//     tabButtons(i);
//  }

 function tabButtons(num){
    $('.tab-button').eq(num).on('click', function(){
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(num).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(num).addClass('show');
    })
 }



// for문을 이용해서 코드 작성

// const tabButton = document.querySelectorAll('.tab-button').length;

//     for(let i = 0; i < tabButton; i++){
//     $('.tab-button').eq(i).on('click', function(){
//         $('.tab-button').removeClass('orange');
//         $('.tab-button').eq(i).addClass('orange');
//         $('.tab-content').removeClass('show');
//         $('.tab-content').eq(i).addClass('show');
//     })
//     }


// 순수 자바스크립트로 작성

// $('.tab-button').eq(0).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// })

// $('.tab-button').eq(1).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// })

// $('.tab-button').eq(2).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// })

// 상품 선택에서 셔츠를 선택하면 사이즈를 선택 하는 select 태그가 나오게 하기
 
var form = document.querySelector('.form-select');
var pants = '<option>28</option><option>30</option><option>32</option>';
var shirts = '<option>95</option><option>100</option><option>105</option>';

    form.addEventListener('change', function(){
        if(form.value == '셔츠'){
            $('.form-select').eq(1).removeClass('form-hide');            
            // document.querySelectorAll('.form-select')[1].innerHTML = '<option>95</option><option>100</option><option>105</option>'
            document.querySelectorAll('.form-select')[1].innerHTML = '';
            document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', shirts);
        } else if(form.value == '바지'){
            $('.form-select').eq(1).removeClass('form-hide');
            // document.querySelectorAll('.form-select')[1].innerHTML = '<option>28</option><option>30</option><option>32</option>'
            document.querySelectorAll('.form-select')[1].innerHTML = '';
            document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', pants);
        } else {
            $('.form-select').eq(1).addClass('form-hide');
        }
    })

    