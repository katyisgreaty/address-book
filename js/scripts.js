function Contact(first, last) {
  this.firstname = first;
  this.lastname = last;
}

//user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstname + "</span></li>");
    
  })
})
