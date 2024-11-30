// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

$(document).ready(() => {

  $('#copy').on('click', (event) => {
    console.log('Click event', event);
    $('#output1').text($('#userInput1').val());
  });

  // Exercise #2:
  // When the user enters input text, copy the user input to the output area

  let $userInput2 = $('#userInput2');
  let $output2 = $('#output2');
  
  $userInput2.on('input', function(event) {
    console.log('input event', event);
    $output2.text($userInput2.val());
  });
});