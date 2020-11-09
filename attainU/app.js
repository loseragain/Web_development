var xhr = '';
function fetchPosts () {
    if(xhr) xhr.abort();
    var url = 'https://jsonplaceholder.typicode.com/todos';
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        console.log('onreadystatechange', xhr.readyState)
        if(xhr.readyState === 4) {
            var response = JSON.parse(xhr.response)
            console.log(typeof xhr.response);
            console.log(typeof response);
        }
    }
    xhr.open('GET',url);
    xhr.send();
}

function getPostsWithAjax () {
    var url = 'https://jsonplaceholder.typicode.com/todos';
    $.ajax({
        type: 'GET',
        url,
        dataType:'json',
        data:{hello:'hello'},
        success: function (resp) {
            console.log(resp[0]);
        },
        error: function (error) {
            console.log(error);
        }
    });
}


$(document).ready(function(){
    var submitXhr = '';
    if(submitXhr) submitXhr.abort();
    var formjQuery = $('#login-form');
    formjQuery.on('submit',function(event){
        event.preventDefault();
        var emailInput = $(this).find('[name="email"]');
        var passwordInput = $(this).find('[name="password"]');
        var termsInput = $(this).find('[name="terms"]');
        var genderGroup = $(this).find('[name="gender"]');
        var genderInput = $(this).find('[name="gender"]:checked');
        
        var email = emailInput.val();
        var password = passwordInput.val();
        var terms = termsInput.val();
        var gender = genderInput.val();
        
        var errors = 0;

        if(!email) {
            var emailRequired = 'Please enter your email.';
            emailInput.siblings('div.form-error').text(emailRequired);
            errors++;
        } else {
            emailInput.siblings('div.form-error').text(null);
        }
        if(!password) {
            var passwordRequired = 'Please enter your password.';
            passwordInput.siblings('div.form-error').text(passwordRequired);
            errors++;
        } else {
            passwordInput.siblings('div.form-error').text(null);
        }
        if(!termsInput.is(':checked')) {
            var termsRequired = 'Please accept terms.';
            termsInput.siblings('div.form-error').text(termsRequired);
            errors++;
        } else {
            termsInput.siblings('div.form-error').text(null);
        }
        if(!gender) {
            var genderRequired = 'Please select gender.';
            genderGroup.siblings('div.form-error').text(genderRequired);
            errors++;
        } else {
            genderGroup.siblings('div.form-error').text(null);
        }
        console.log(errors)
        if(!errors) {
            var formData = new FormData(this);
            submitXhr = $.ajax({
                type:'POST',
                url:'http://localhost:3939/dummy',
                data: formData,
                processData: false,
                contentType: false,
                success: function(resp) {
                    console.log(resp)
                },
                error:function(err) {
                    console.log(err)
                }
            })
        }
    });
});