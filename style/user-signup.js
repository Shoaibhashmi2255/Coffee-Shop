const $ = document.querySelector.bind(document);
let userObject = {
    
}


let SignUpData = () =>{
    try {
        let Email = $('.email').value;
        let Number = $('.number').value;
        let Address = $('.address').value;
        userObject.email = Email;
        userObject.number = Number;
        userObject.address = Address;
        localStorage.setItem('user-object',JSON.stringify(userObject))
        console.log(userObject)
    } catch (error) {
        console.log(error.message)
    }
}