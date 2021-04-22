//variables

const courses = document.querySelector('#courses-list');



//load event Listeners

loadEventListeners();


function loadEventListeners(){
    courses.addEventListener('click', buyCourse);

    

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
    console.log(course);
}