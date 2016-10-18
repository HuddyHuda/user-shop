$(document).ready(function ($) {
  alert('dom is ready, do ajax now')

  var $userForm = $('.new-user')

  $userForm.on('submit', function(e){

    e.preventDefault()
    alert('submit is captured')

// gender age email password
    var user_name = $('#user-name').val()
    var user_gender = $('#user-gender').val()
    var user_age = $('#user-age').val()
    var user_email = $('#user-email').val()
      var user_password = $('#user-password').val()

console.log(user_name, user_gender, user_age, user_email, user_password)

      $.ajax({
          type: 'POST',
          url: '/api/users',
          data: {
            user: {
              name : user_name ,
              gender : user_gender,
              age : user_age,
              email : user_email,
              password : user_password
            }
          }
        }).done(doSomething)

        // the data inside the user - is the data inside the form
        // naming must follow the schemas

function doSomething(data){
  alert('form submitted, new users created')
  alert(data)
  $('#all-user-list').append('<li>' + data.name + data.gender + data.age + data.email + data.password +'</li>')

}


  })
})
