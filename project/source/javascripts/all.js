// ===================================================================
// control cc
// ===================================================================

// function featureControlCC(){

//   $("#ac_system").hide();

//   // $("[data-toggle]").click(function(){
//   //   var toggle_el = $(this).data("toggle");
//   // });

//   $(".btn_close").stop(true,true).click(function(){

//     $(this).removeClass('btn_close').addClass('btn_open');
//     $("#ac_system").stop(true,true).animate({ width: "toggle" });
//     $("#ac_system").toggleClass('open');

//   });

//   $(".btn_open").click(function(){

//     $("#ac_system").animate({ width: 0 });
//     $(this).removeClass('btn_open').addClass('btn_close');
//     $("#ac_system").toggleClass('close');

//   });

// }


if(navigator.userAgent.match(/Android/i)){
  window.scrollTo(0,1);
}