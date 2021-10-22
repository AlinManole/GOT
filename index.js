$(function() {
    var characters = []
  
    $.ajax({
      url: "https://thronesapi.com/api/v2/Characters",
      success: function(data) {
        characters = data
        displayList(data)
      }
    })
  
    $('form').submit(function(e) {
      e.preventDefault()
      var inputValue = $("#full-name-input").val()
  
      var filteredCharacters = characters.filter(function(character) {
        return character.fullName.toLowerCase().includes(inputValue.toLowerCase())
      })
  
      displayList(filteredCharacters)
    })
  
    // $('input').keyup(function() {
    //   var inputValue = $("#full-name-input").val()
  
    //   var filteredCharacters = characters.filter(function(character) {
    //     return character.fullName.toLowerCase().includes(inputValue.toLowerCase())
    //   })
  
    //   displayList(filteredCharacters)
    // })
    
    function displayList(array) {
      $('.list-container').empty()
  
      array.forEach(function(character) {
        $('.list-container').append(`
          <div class="col-md-4 col-sm-6 col-12">
            <div class="character my-2 border rounded">
              <div class="img-container" style="background-image: url('${character.imageUrl}')"></div>
              <div class="pt-3 px-3">
                <h5>${character.fullName}</h5>
                <p>${character.title}</p>
              </div>
            </div>
          </div>
        `)
      })
    }
  
    $(".shuffle").click(function() {
      var shuffledCharacters = _.shuffle(characters)
      displayList(shuffledCharacters)
    })
  })
  // rien en dessous