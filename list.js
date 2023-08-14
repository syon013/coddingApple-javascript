const cardlist = document.querySelector('.row');
let count = 0;


for(let i = 0; i < 3; i++) {
    
    const div = document.createElement('div');
    const img = document.createElement('img');
    const h5 = document.createElement('h5');
    const p = document.createElement('p');
    
    
    div.classList.add('col-md-4');
    img.classList.add('w-100');
    img.src = 'https://picsum.photos/200/300';
    h5.textContent = 'Card title';
    p.textContent = '가격 : 70000';
    
    cardlist.appendChild(div);
    div.appendChild(img);
    div.appendChild(h5);
    div.appendChild(p);
}

let col = document.querySelectorAll('.col-md-4').length; 


var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
];


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
                     </div>`;

                    $('.row').append(div);
        }
    ))
}

$('.btn').click(function(){
    count++;
    if(count == 1){
        more('https://codingapple1.github.io/js/more1.json');
    } else if(count == 2){
        more('https://codingapple1.github.io/js/more2.json');
        $('.btn').remove();
        count = 0;
    }
        
})




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


