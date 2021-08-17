document.getElementById('submit-btn').addEventListener('click', function(){
    // email 
    const emailFeild = document.getElementById('user-email');
    const userEmail = emailFeild.value;

    // password 
    const passwordFeild = document.getElementById('user-password');
    const userPassword = passwordFeild.value;
    
    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
        window.location.href = 'index.html'; 
    }
})