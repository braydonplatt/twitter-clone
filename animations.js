$(document).ready (function(){

  $('.tweet-actions').hide();

  $('.tweet-compose').on('focus', function() {
    $('.tweet-compose').css('height', '50px')
    $('#tweet-submit, #char-count').css('display', 'inline-block')
  });

  //$('tweet-compose').on('blur', function(){
    //$('tweet-compose').css('height', 'auto')
  //});

  $('.tweet-compose').on('keypress, keydown, keyup', function(){
    var count = $(this).val().length;  //it is taking the input value and computing the length and store in variable count.
    var charCount = 140;
    $('#char-count').text(charCount-count);
    if(count > 130){
        $('#char-count').css('color', 'red');
      }
    if (count <= 130){
        $('#char-count').css('color', 'black');
    }
    if (count >= 140) {
      $('#tweet-submit').prop('disabled', true);  // this will disable the property of '#tweet-submit' when it reaches 0.
    } else {
      $('#tweet-submit').prop('disabled', false);  
  }

 <!-- //STEP 5: When the user successfully inputs characters and clicks the “Tweet” button, a new tweet should be created and 
 //added to the tweet stream in the main column, using the user’s fake profile image in the top left and username/fullname. -->
          <!-- //HINT: jQuery ".prepend" method -->

});
  $('#tweet-submit').on('click', function(){
    var tweeter = '<div class="tweet">'+
            '<div class="content">'+
              '<img class="avatar" src="img/damenleeturks.jpg" />'+
              '<strong class="fullname">My BFF</strong>'+
              '<span class="username">@mybff</span>'+
              '<p class="tweet-text">' + $('.tweet-compose').val() + '</p>'+

              '<div class="tweet-actions">'+
                '<ul>'+
                  '<li><span class="icon action-reply"></span> Reply</li>'+
                  '<li><span class="icon action-retweet"></span> Retweet</li>'+
                  '<li><span class="icon action-favorite"></span> Favorite</li>'+
                  '<li><span class="icon action-more"></span> More</li>'+
                '</ul>'+
              '</div>'+

              '<div class="stats">'+
                '<div class="retweets">'+
                  '<p class="num-retweets">30</p>'+
                  '<p>RETWEETS</p>'+
                '</div>'+
                '<div class="favorites">'+
                  '<p class="num-favorites">6</p>'+
                  '<p>FAVORITES</p>'+
                '</div>'+
                '<div class="users-interact">'+
                  '<div>'+
                    '<img src="img/alagoon.jpg" />'+
                    '<img src="img/vklimenko.jpg" />'+
                  '</div>'+
                '</div>'+
                '<div class="time">'+
                  '1:04 PM - 19 Sep 13'+
                '</div>'+
              '</div>'+
              '<div class="reply">'+
                '<img class="avatar" src="img/alagoon.jpg" />'+
                '<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>'+
              '</div>'+
            '</div>'+
          '</div>';
             
             
             $('#stream').prepend(tweeter).val();
           }); 
//<!-- STEP 6: The tweet actions below should only show up when you hover over the tweet. Otherwise, they should be hidden. -->
              //<!-- HINT: CSS ":hover" pseudo element -->

             $('.tweet-actions').hide();
           $('.tweet').hover(function(){
             $('.tweet-actions', this).fadeIn(300);
         },
            function(){
             $('.tweet-actions').hide();  
      
         });  









});
