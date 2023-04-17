// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

// practice/showのプルダウンメニュ
/*

Visit My Website to see creative design
        www.HUSAMUI.com


*/


$(document).ready(function(){
  
  $(".dropdown").click(function(){
    $(".menu").toggleClass("showMenu");
      $(".menu > li").click(function(){
        $(".dropdown > p").html($(this).html());
          $(".menu").removeClass("showMenu");
      });
  });
  
});