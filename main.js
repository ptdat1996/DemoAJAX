// $("#btn-get").click(function () {
//     $.get("https://reqres.in/api/users?page=2", function (data, status) {
//         console.log("click!");
//         var result = JSON.stringify(data);
//         $("#test").text(result);
//         //console.log(data);
//     })
// });


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
            console.log(data);
        $("#messagge").text(data);        
        }
    }).done(function(data){
        
    });

    event.preventDefault();
});

// $("#btn-get").click(function () {
//     $.get("http://localhost:3000/get", function (data, status) {
//         console.log("click!");
//         var result = JSON.stringify(data);
//         $("#test").text(result);
//         //console.log(data);
//     })
// });