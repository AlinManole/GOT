$(function () {
    var array = []
    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function (data) {
            array = data;
            array.forEach(function (personaje, index) {
                $("#container").html($("#container").html() + `
                    <div class="include col-3 m-1">
                        <div class="box">
                            <img class="theImage" src="${personaje.imageUrl}" alt="" />
                            <div class = "textBox">
                                <h3>${personaje.fullName}</h3>
                                <h5>${personaje.title}</h5>
                            </div>
                        </div>
                    </div>
                ` )
            })
        }
    });

    $(".btn").click(function(){
        console.log("button click")
        $().val();
    });


});