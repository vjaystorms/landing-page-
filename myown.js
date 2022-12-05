$(".burger").click(
  function(){
    $(".showcase").toggleClass("active");
    $(".burger").toggleClass("burger2");
    $(".menu").toggleClass("menu2");
  $(".x").removeClass("burger");
      playpause();
  }
);
    var count=1;
    var audio=new Audio("video and audio/Where-to-Go-Today.mp3");
  function playpause(){
if(count==1){
    count=0;
  audio.play();
}
else{
  count=1;
  audio.pause();
}
}
