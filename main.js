$("form").submit(function (event) { 
    var formData ={
        'email' : $('input[name=email]').val(),
        'password' : $('input[name=password]').val()
    };

    $.ajax({
        type: "post",
        url: "http://localhost:3000/login",
        data: formData,
        dataType: "json",
        encode : true,
        success: function (data) {     
        $("#messagge").text(data);        
        }
    }).done(function(data){
        
    });

    event.preventDefault();
});
