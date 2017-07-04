$(function(){
  //スマホメニュー
  $(".spmenu").on("click",function(){
    $(".sp-nav").toggleClass("menu-on-default");
    $(this).toggleClass("menu-on");
    $(".sp-wrap").toggleClass("menu-on");
  });
  //ウインドウのリサイズでナビが出てる場合は消す
  $(window).resize(function() {
    var windowWidth = $(window).width();
    //bootstrapのpc切り替えサイズ基準
    if(windowWidth > 991){
      $(".sp-nav").removeClass("menu-on-default");
      $(".spmenu").removeClass("menu-on");
      $(".sp-wrap").removeClass("menu-on");
    }
  });
  //子ナビゲーションの表示
  $(".sp-nav .slidedown").on("click",function(){
    $(this).toggleClass("on");
  });
});
