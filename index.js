
let main = function(){
  $main.prepend('<div id="newUser-tweet"></div>');
  $('#newUser-tweet').prepend('<header id="newUser-tweet">Tweet Your Thoughts</header>').css('font-weight', 'bold');
  $('#newUser-tweet').append('<input class="newUser-name" type="text" id="userName" placeholder="username" ></input>');
  $('#newUser-tweet').append('<input class="newUser-tweet" type="text" rows="6" id="message" placeholder="message">');
  $('#newUser-tweet').append('<button id="submitButton" class="primary" type="button">Tweet!</button>');
  $('#newUser-tweet').css("font-family", "Luminari");

}

let createButton = function(){
  const $clickNewTweets = $('<button type="button" class="new Tweets"> Refresh Twiddle Feed!</button>');
   $clickNewTweets.appendTo($main);
   $clickNewTweets.css("font-family", "Chalkduster");
   $clickNewTweets.click(() => {
     beginTwiddler();
   });
}

let tweetCreator = function(){
  const $tweet = $('<div></div>');
  const time = ('<i>' + moment(tweet.created_at).fromNow() + '</i>' + '<br>');
  const created = ('<i>' + moment(tweet.created_at).format('LLL') + '</i>' + '<br>');
  const twuser = tweet.user;
  $tweet.append('<p>' + '<b>' + '@' + '<a class="user">' + twuser + '</a>' + ': ' + '</b>' + tweet.message + '</p>');
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


  //create main tag 
  const $main = $('<main></main>');
  $main.appendTo($body); 


  //add user tweet boxes
  $main.prepend('<div id="newUser-tweet"></div>');
  $('#newUser-tweet').prepend('<header id="newUser-tweet">Tweet Your Thoughts</header>').css('font-weight', 'bold');
  $('#newUser-tweet').append('<input class="newUser-name" type="text" id="userName" placeholder="username" ></input>');
  $('#newUser-tweet').append('<input class="newUser-tweet" type="text" rows="6" id="message" placeholder="message">');
  $('#newUser-tweet').append('<button id="submitButton" class="primary" type="button">Tweet!</button>');
  $('#newUser-tweet').css("font-family", "Luminari");

   //create a button for the new tweets 
   const $clickNewTweets = $('<button type="button" class="new Tweets"> Refresh Twiddle Feed!</button>');
   $clickNewTweets.appendTo($main);
   $clickNewTweets.css("font-family", "Chalkduster");
   $clickNewTweets.click(() => {
     beginTwiddler();
   });

   const $clickTweets = $('<button type="button" class="new Tweets"> View User Twiddle History </button>');
   $clickTweets.appendTo($main);
   $clickTweets.css("font-family", "Chalkduster");
   $clickTweets.click(() => {
     beginTwiddler();
   });

  //guest tweiddle button function
  $("#submitButton").on("click", () => {
    //create an object for the user so that they can create their message 
    streams.users[$("#userName").val()] = $("#message").val();

    //create a variable to assign a div tag for the guest user tweets 
    const $guestUser = $('<div class="tweet" ></div>');
    
    //create a variable and assign the date method so we can pass it to moment to get the date of the tweets 
    const tweetTime = new Date();

 

    //create attributes for the guest users tweets to be displayed correctly 
    $guestUser.append('<p>' + '<b>' + '@' + '<a class="user">' + $("#userName").val() + '</a>' + ": " + '</b>' + $("#message").val() +'</p>');
    $guestUser.append($('<p>' + '<i>'+ moment(tweetTime).fromNow() + '</i>' + '</p>' + '<br>'));
    $guestUser.append($('<p>' + '<i>'+ moment(tweetTime).format('LLL') + '</i>' + '</p>' + '<br>'));
    $guestUser.css("font-family", "Chalkduster");

    //put the guest users tweet at the top 
    $tweets.prepend($guestUser);
  })
 

 
  //create a new variable 
  const $tweets = $('<div class="tweets"></div>');
  $tweets.appendTo($main);

  //function to see new tweets 
  function seeTweets(tweet) {
    const $tweet = $('<div></div>');
    const time = ('<i>' + moment(tweet.created_at).fromNow() + '</i>' + '<br>');
    const created = ('<i>' + moment(tweet.created_at).format('LLL') + '</i>' + '<br>');
    const twuser = tweet.user;
    $tweet.append('<p>' + '<b>' + '@' + '<a class="user">' + twuser + '</a>' + ': ' + '</b>' + tweet.message + '</p>');
    
    $tweet.append(time);
    $tweet.append(created);

    $tweet.append('<br>');
    $tweet.appendTo($tweets);
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



  //function for new tweets 
  function newTweets(tweets) {
    $tweets.html('');

    var index = tweets.length - 1;
    while (index >= 0) {
      const tweet = tweets[index];
      seeTweets(tweet);
      index -= 1;
    }

    //use the click and pass in the function to created to show new tweets 
    $('.user').on('click', function (event) {
      showTweetsOnTimeline(event.target.text);
    });


  }

 
  //create a function to show tweets on timeline
  function showTweetsOnTimeline(user) {
    
    $clickNewTweets.text('Home Page');
    newTweets(streams.users[user]);
  }

  //function for new tweets to be displayed
  function beginTwiddler() {
    $clickNewTweets.text('Refresh Twiddle Feed');
    newTweets(streams.home);
  }


  $tweets.append($initializeTweets);
 
});

  

