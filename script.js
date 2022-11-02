let allInputs = document.querySelectorAll('.input input'),
    pswInput = document.querySelector('.input #userPsw'),
    pswIcon = document.querySelector('.input i'),
    crtAcct = document.querySelector('.crt-acct'),
    popupBox = document.querySelector('.popup-box'),
    closeBtn = document.querySelector('.close-btn');

pswIcon.addEventListener('click', ()=>{
    if (pswInput.type === 'password') {
        pswInput.type = 'text';
        pswInput.focus();
        pswIcon.className = 'uil uil-eye-slash';
    } else {
        pswInput.type = 'password';
        pswInput.focus();
        pswIcon.className = 'uil uil-eye';
    }
});

for (var i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener('focus', function(){
        if (window.innerWidth > 769) {
            this.parentElement.style.border = '2px solid var(--blue)';
        } else {
            this.parentElement.style.border = '1px solid var(--black)';
        }
    });
    
    allInputs[i].addEventListener('blur', function() {
        this.parentElement.style.border = '2px solid var(--grey)';
    });
}

crtAcct.addEventListener('click', (e)=>{
    e.preventDefault();
    popupBox.classList.add('show');
});

closeBtn.addEventListener('click', function(){
    popupBox.classList.remove('show');
});

let daySelect = document.querySelector('#day'),
    monthSelect = document.querySelector('#month'),
    yrSelect = document.querySelector('#year');
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for (var i = 1; i < 32; i++) {
    daySelect.options.add(new Option(i, i));
}

for (var j = 0; j < month.length; j++) {
    monthSelect.options.add(new Option(month[j], j));
}

for (var x = 1950; x < 2023; x++) {
    yrSelect.options.add(new Option(x, x));
}
