//variables

const courses = document.querySelector('#courses-list'),
    shoppingCartContent = document.querySelector('#cart-content tbody'),
    clearCartBtn = document.querySelector('#clear-cart');



//load event Listeners

loadEventListeners();


function loadEventListeners(){
    courses.addEventListener('click', buyCourse);
    shoppingCartContent.addEventListener('click', removeCart);
    clearCartBtn.addEventListener('click', clearCart);
}


function buyCourse(e){

    e.preventDefault();

    if(e.target.classList.contains('add-to-cart')){

        const course = e.target.parentElement.parentElement;

        getCourseInfo(course);
        
    }
}

//reading the couses in the markup

function getCourseInfo(course){
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')

    }
    
    addIntoCart(courseInfo);
}

//add to cart

function addIntoCart(course){
    const row = document.createElement('tr');

    alert("added to cart √");

    row.innerHTML = `

       <tr>
            <td>
                <img src="${course.image}" width = 100px>
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td>
                <a href="#" class="remove" data-id="${course.id}">X</a>
            </td>
       </tr> 
    `;

    shoppingCartContent.appendChild(row);
}






let carts = document.querySelectorAll('.add-to-cart');

for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers();
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.submenu span').textContent = productNumbers;
    }
}


function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.submenu span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.submenu span').textContent = 1;
    }
    
}
onLoadCartNumbers();


function removeCart(e){
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove();
    }
}


function clearCart(){
    while(shoppingCartContent.firstChild){
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }
}
