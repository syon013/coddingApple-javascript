const cardlist = document.querySelector('.row');
let count = 0;


for(let i = 0; i < 3; i++) {
    
    const div = document.createElement('div');
    const img = document.createElement('img');
    const h5 = document.createElement('h5');
    const p = document.createElement('p');
    const btn = document.createElement('button');
    
    
    div.classList.add('col-md-4');
    img.classList.add('w-100');
    btn.classList.add('buy');
    img.src = 'https://picsum.photos/200/300';
    h5.textContent = 'Card title';
    p.textContent = '가격 : 70000';
    btn.textContent = '구매';
    
    cardlist.appendChild(div);
    div.appendChild(img);
    div.appendChild(h5);
    div.appendChild(p);
    div.appendChild(btn);
}


var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
];

/*$('.btn').click(function(){
    products.sort(function(a, b){
        return a.price - b.price;
    });
    console.log(products);
})*/

$('#sort').click(function(){
    products.sort(function(a, b){
        if(a.title > b.title){
            return 1;
        } else if(a.title < b.title){
            return -1;
        } else {
            return 0;
        }
    })

    $('.row').html('');

    products.forEach(element => {
            
        const div = `<div class='col-md-4'>
                    <img class='w-100' src='https://picsum.photos/200/300'>
                        <h5>${element.title}</h5>
                        <p>가격 : ${element.price}</p>
                        <button class='btn btn-primary buy'>구매</button>
                     </div>`;

                    $('.row').append(div);
        }
)});

document.querySelectorAll('.btn')[2].addEventListener('click', function(){
    products.sort(function(a, b){
        if(a.title < b.title){
            return 1;
        } else if(a.title > b.title){
            return -1;
        } else {
            return 0;
        }
    })

    $('.row').html('');

    products.forEach(element => {
            
        const div = `<div class='col-md-4'>
                    <img class='w-100' src='https://picsum.photos/200/300'>
                        <h5>${element.title}</h5>
                        <p>가격 : ${element.price}</p>
                        <button class='btn btn-primary'>구매</button>
                     </div>`;

                    $('.row').append(div);
        }
)});

document.querySelectorAll('.btn')[3].addEventListener('click', function(){
    const filter = products.filter(function(a){
        return a.price <= 60000;
    })
    $('.row').html('');

    filter.forEach(element => {
            
        const div = `<div class='col-md-4'>
                    <img class='w-100' src='https://picsum.photos/200/300'>
                        <h5>${element.title}</h5>
                        <p>가격 : ${element.price}</p>
                        <button class='btn btn-primary'>구매</button>
                     </div>`;

                    $('.row').append(div);
        }
)});

$('#filterBtn').click(function(){
    var input = $('.sort');
    const value = input.val();
    
    const filter = products.filter(function(a){
        return a.price <= value;
    })
    $('.row').html('');

    filter.forEach(element => {
            
        const div = `<div class='col-md-4'>
                    <img class='w-100' src='https://picsum.photos/200/300'>
                        <h5>${element.title}</h5>
                        <p>가격 : ${element.price}</p>
                        <button class='btn btn-primary'>구매</button>
                     </div>`;

                    $('.row').append(div);
        }

)})
    const product = [
        { id : 0, price : 70000, title : 'Blossom Dress' },
        { id : 1, price : 50000, title : 'Springfield Shirt' },
        { id : 2, price : 60000, title : 'Black Monastery' }
    ];
$('#return').click(function(){
    

    if(JSON.stringify(products) === JSON.stringify(product)){

        console.log('같음');
        
    } else {
        $('.row').html('');

        product.forEach(element => {
            
            const div = `<div class='col-md-4'>
                        <img class='w-100' src='https://picsum.photos/200/300'>
                            <h5>${element.title}</h5>
                            <p>가격 : ${element.price}</p>
                            <button class='btn btn-primary'>구매</button>
                         </div>`;
    
                        $('.row').append(div);
            }
    )
    }
})






for(let i = 0; i < 3; i++){
    card(i);
    
}

function card(i){
    const cardlist = document.querySelectorAll('.col-md-4')[i];

    cardlist.querySelector('h5').innerHTML = products[i].title;
    cardlist.querySelector('p').innerHTML = `가격 : ${products[i].price}`
}

function more(url){
    $.get(url).done((data)=>
    data.forEach(element => {
            
        const div = `<div class='col-md-4'>
                    <img class='w-100' src='https://picsum.photos/200/300'>
                        <h5>${element.title}</h5>
                        <p>가격 : ${element.price}</p>
                        <button class='btn btn-primary'>구매</button>
                     </div>`;

                    $('.row').append(div);
        }
    ))
}

document.querySelectorAll('.btn')[0].addEventListener('click', function(){
    count++;
    if(count == 1){
        more('https://codingapple1.github.io/js/more1.json');
    } else if(count == 2){
        more('https://codingapple1.github.io/js/more2.json');
        $('.btn').remove();
        count = 0;
    }
        
})

// 1. 구매 버튼을 누르면
// 2. 해당 상품의 이름을 가져와서
// 3. 장바구니에 담는다.

var counters = [];

$('.buy').click(function(e){
    var title = $(e.target).siblings('h5').text();
    var price = $(e.target).siblings('p').text();
    var cartItem = JSON.parse(localStorage.getItem('cart')); 



    if(!cartItem) { 
        cartItem = [];
    }

    if(!cartItem.includes(title)){
        cartItem.push({title, price});
        localStorage.setItem('cart', JSON.stringify(cartItem));
    } else{
        count++;
        console.log('이미 장바구니에 담긴 상품입니다.');
    }
})

    var buttonIndex = $('.buy').index(this);
    if(!counters[buttonIndex]){
        counters[buttonIndex] = 0;
    } else {
        counters[buttonIndex]++;
    }
    count = counters[buttonIndex];

    console.log(count);

// const buyBtn = document.querySelectorAll('.buy');

// buyBtn.forEach(element => {
//     element.addEventListener('click', function(){
//         const productName = element.parentNode.querySelector('h5').innerHTML;
//         let cartItem = JSON.parse(localStorage.getItem('cart'));

//         if(!cartItem) {
//             cartItem = [];
//         }
        
//         if(!cartItem.includes(productName)){
//             cartItem.push(productName);
//             localStorage.setItem('cart', JSON.stringify(cartItem));
//         } else {
//             alert('이미 장바구니에 담긴 상품입니다.');
//         }
    
//     }
// )})




// var 어레이 = [7,3,5,2,40];
// var 어레이2 = ['a', 'c','b','d'];
// 어레이.sort(function(a,b){
//     return b - a;
// });
// 어레이2.sort(function(a,b){
//     if(a > b){
//         return 1;
//     } else if(a < b){
//         return -1;
//     } else{
//         return 0;
//     }
// })


/*$('.btn').on('click', function(){
    count++;
    if(count == 1){
    $.get('https://codingapple1.github.io/js/more1.json').done((data)=>{
        
        data.forEach(element => {
            
            const div = `<div class='col-md-4'>
                        <img class='w-100' src='https://picsum.photos/200/300'>
                            <h5>${element.title}</h5>
                            <p>가격 : ${element.price}</p>
                         </div>`;

        $('.row').append(div);


            
    }
    )})}
    else if(count == 2){
        $.get('https://codingapple1.github.io/js/more2.json').done((data)=>{
            data.forEach(element => {
            
                const div = `<div class='col-md-4'>
                                <img class='w-100' src='https://picsum.photos/200/300'>
                                <h5>${element.title}</h5>
                                <p>가격 : ${element.price}</p>
                            </div>`;
    
    
                $('.row').append(div);
    })})
    document.querySelector('.btn').remove();
    count = 0;
}

})*/



  
/*data.forEach(element => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const h5 = document.createElement('h5');
    const p = document.createElement('p');
    
    
    div.classList.add('col-md-4');
    img.classList.add('w-100');
    img.src = 'https://picsum.photos/200/300';
    h5.textContent = element.title;
    p.textContent = `가격 : ${element.price}}`;
    
    cardlist.appendChild(div);
    div.appendChild(img);
    div.appendChild(h5);
    div.appendChild(p);
    $('.row').append(div);
        });
});*/


