

let mainBody = function (){
  const $body = $('body');
  const $main = $('<main></main>');
  $main.appendTo($body);  

  $main.prepend('<div id="newUser-tweet"></div>');
  $('#newUser-tweet').prepend('<header id="newUser-tweet">Tweet Your Thoughts</header>').css('font-weight', 'bold');
  $('#newUser-tweet').prepend('<input class="newUser-name" type="text" id="userName" placeholder="username" ></input>');
  $('#newUser-tweet').prepend('<input class="newUser-tweet" type="text" rows="6" id="message" placeholder="message">');
  $('#newUser-tweet').prepend('<button id="submitButton" class="primary" type="button">Tweet!</button>');
  $('#newUser-tweet').css("font-family", "Luminari");
}

let submitInfo = function(){
  streams.users[$("#userName").val()] = $("#message").val();

  //create a variable to assign a div tag for the guest user tweets 
  const $guestUser = $('<div class="tweet" ></div>');
  
  //create a variable and assign the date method so we can pass it to moment to get the date of the tweets 
  const tweetTime = new Date();

  //create attributes for the guest users tweets to be displayed correctly 
  $guestUser.prepend('<p>' + '<b>' + '@' + '<a class="user">' + $("#userName").val() + '</a>' + ": " + '</b>' + $("#message").val() +'</p>');
  $guestUser.prepend($('<p>' + '<i>'+ moment(tweetTime).fromNow() + '</i>' + '</p>' + '<br>'));
  $guestUser.prepend($('<p>' + '<i>'+ moment(tweetTime).format('LLL') + '</i>' + '</p>' + '<br>'));
  $guestUser.css("font-family", "Chalkduster");

  //put the guest users tweet at the top 
  $tweets.prepend($guestUser);
}

  //use the document.ready() method to start executing the JS code
  $(document).ready(() => {
  //create the elements that will be in the body of the webpage
  const $body = $('body');
  $body.html('');
  $body.css("background-color", "#FF00FF")

  //create the header and the elements to design it 
  const $header = $('<header>TW1ddL3r</header>');
  $header.css("font-family", "Chalkduster");
  $header.appendTo($body);
  $header.css("background-color", "#ADFF2F").css("font-weight", "bold").css('font-size', '65px').css('width', '90%').css("color", "#fcf6bd").css("text-align", "center");
  $body.append('<div id= button4 > <div>')

  $body.append('<div id= button3 > <div>')
  $('#button3').css("font-family","Chalkduster" )
  $('#button3').append('See Your Twiddles').click(() => {
    beginTwiddler()
  })

 

  
  


  //create main tag 
  const $main = $('<main></main>');
  $main.appendTo($body);  

  $body.append(mainBody)




   //create a button for the new tweets 
   const $clickNewTweets = $('<button type="button" class="new Tweets"> See New Tweets</button>');
   $clickNewTweets.appendTo($main);
   $clickNewTweets.css("font-family", "Chalkduster");
   $clickNewTweets.click(() => {
     beginTwiddler();
   });

  

   $body.append(`<div id=` + `"twiddle-form"> `);
   $("#twiddle-form").append($("<h3/>").text("Join Twiddler!"), 
$("<p/>").text("Don't Miss Out Submit Your Twiddle Twiddle Tweets!"), 
$("<form/>", {
 id: 'the-form',
 }).append(
  $("<input/>", {
    type: 'text',
    id: 'username',
    name: 'username',
    placeholder: 'Username'
  }), 
  $("<input/>", {
    type: 'text',
    id: 'twiddle1',
    name: 'twiddle2',
     
  placeholder: 'twiddle'
    }), $("<br/>"), $("<input/>", {
    type: 'submit',
    id: 'submit',
    value: 'Submit'
 })));

 $("#twiddle-form").submit(function(tweets){
  //need to store user information into an empty array 
  let newArray = [];

  //need to access user information 

 })
  
   


  //submit button 
  $("#submitButton").on("click", () => {
   
    submitInfo()
   
  })
 

 
  //create a new variable 
  const $tweets = $('<div class="tweets"></div>');
  $tweets.appendTo($main);

  //function to see new tweets 
  //reference stackoverflow to understand how to implement moment 
  function seeTweets(tweet) {
    const $tweet = $('<div></div>');
    const time = ('<i>' + moment(tweet.created_at).fromNow() + '</i>' + '<br>');
    const created = ('<i>' + moment(tweet.created_at).format('LLL') + '</i>' + '<br>');
    const twuser = tweet.user;
    $tweet.prepend('<p>' + '<b>' + '@' + '<a class="user">' + twuser + '</a>' + ': ' + '</b>' + tweet.message + '</p>');
    
    $tweet.prepend(time);
    $tweet.prepend(created);

    $tweet.prepend('<br>');
    $tweet.prependTo($tweets);
    $tweets.css("font-family", "Chalkduster");
    $tweets.css("color", "#00FF00")
  }


   //build out functions to intilize tweets on the page
   const $initializeTweets = streams.home.map((tweet) => {
    //create a variable for the div tags and assign it to tweets 
    const $tweet = $('<div></div>');
    //create a variable for the timedtweet
    const $timedtweet = $('<i class="timedtweet"></i>');
    //take the tweet variable and append it to create a section for the user and the message 
    $tweet.append('<p>' + '<b>' + '@' + '<a class="user">' + tweet.user + '</a>' + ': ' + '</b>' + tweet.message + '</p>');
    //use the moment library to get the times that the tweets were created and assign a line break so that it won't be jumbled together
    $timedtweet.append(moment(tweet.created_at).format('LLL') + '<br>');
    //replace the timedtweet with the new tweet
    $timedtweet.appendTo($tweet);
    //create a line break for the tweet 
    $tweet.append('<br>');
    //changes the fonts of the tweets 
    $tweet.css("font-family", "Jazz LET").css("color", "#fcf6bd");
    
    //finally return the tweets so that they can be displayed to the screen 
    return $tweet;
  });

// let mainBody = function (){
//   const $main = $('<main></main>');
//   $main.appendTo($body);  

//   $main.prepend('<div id="newUser-tweet"></div>');
//   $('#newUser-tweet').prepend('<header id="newUser-tweet">Tweet Your Thoughts</header>').css('font-weight', 'bold');
//   $('#newUser-tweet').prepend('<input class="newUser-name" type="text" id="userName" placeholder="username" ></input>');
//   $('#newUser-tweet').prepend('<input class="newUser-tweet" type="text" rows="6" id="message" placeholder="message">');
//   $('#newUser-tweet').prepend('<button id="submitButton" class="primary" type="button">Tweet!</button>');
//   $('#newUser-tweet').css("font-family", "Luminari");
// }
 let twiddle = function(tweet){

 }



  //function for new tweets 
  let newTweets = function(tweets) {
    $tweets.html('');

    //loop through the tweets 
    for(let i = tweets.length - 1; i >= 0; i-- ){
      const tweet = tweets[i];
      seeTweets(tweet); 
    }

    //use the click and pass in the function to created to show new tweets 
    $('.user').on('click', function (event) {
      showTweetsOnTimeline(event.target.text);
    });


  }

 
  //create a function to show tweets on timeline
  let showTweetsOnTimeline = function(user) {
    
    $clickNewTweets.text('Home Page').css('color','blue' );

    newTweets(streams.users[user]);
  }

  //function for new tweets to be displayed

  let beginTwiddler = function () {
    $clickNewTweets.text('See New Tweets').css('color', 'black')
    newTweets(streams.home);
  }


  $tweets.append($initializeTweets);
 
});

  

