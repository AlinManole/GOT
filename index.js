$(function () {
    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function (data) {
            console.log(data)
        }
    });
})

