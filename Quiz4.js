// 1. 상품 목록은 store.json에 있는 파일 가져와서 적용시키기 (ajax get 요청으로도 가져올 수 있음) // 완료
// 2. 상품 검색 기능 만들기 <input>에 검색어를 입력하면 그 글자가 제목, 업체명에 들어있으면 그 상품만 보여주기
// 3. 찾은 글자에 노란색 배경 입히기
// 4. 장바구니로 상품을 드래그할 수 있게 만들기
// 5. 상품을 드래그해서 검은 박스에 놓으면 카드 하나 생성
//  --> 카드에는 상품명, 업체명, 가격, 수량
// 6. 담기 버튼을 눌러도 똑같이 카드 생성
// 7. 이미 있는 상품이면 카드 생성이 아니라 수량만 1 증가
// 8. 상품이 들어있는 카드의 수량 및 가격에 따라 아래에 최종가격과 합계 띄우기
// 9. 그 밑에 구매하기 버튼 만들기
// 10. 구매하기 버튼을 누르면 모달창이 뜨고, 모달창에는 성함, 연락처를 입력할 수 있는 input 만들기
// 11. 입력완료, 닫기 버튼 만들기
// 12. 장바구니 개별 항목의 주문 수량 변경 가능하게 만들기

const title = document.querySelector('.cart-title');
const card = document.querySelector('.item-container');

$.get('store.json').done(function(data){
    const storeData = data.products;
    storeData.forEach((item) => {
        console.log(item.photo);
        const div = document.createElement('div');
        const img = document.createElement('img');
        const div2 = document.createElement('div');
        const h5 = document.createElement('h5');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        const a = document.createElement('a');
        
        div.classList.add('card', 'ms-4', 'mb-4');
        img.src=`/img/${item.photo}`;
        div2.classList.add('card-body');
        h5.classList.add('card-title');
        h5.textContent = item.title;
        h4.classList.add('card-subtitle', 'mb-2', 'text-muted');
        h4.textContent = item.brand;
        p.classList.add('card-text');
        p.textContent = `가격 : ${item.price}`;
        a.classList.add('btn', 'btn-primary');
        a.textContent = '담기';

        card.appendChild(div);
        div.appendChild(img);
        div.appendChild(div2);
        div2.appendChild(h5);
        div2.appendChild(h4);
        div2.appendChild(p);
        div2.appendChild(a);
    })

});