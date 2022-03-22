$(function(){
    'use strict';
    //adjust slider height
    var windowH = $(window).height(),
        upperH  = $('.upper-bar').innerHeight(),
        navH    = $('.navbar').innerHeight();
    $('.slider,.carousel-item').height(windowH-(upperH+navH));
});
// Start Section 5 Car Features
$('.Feature1').mouseenter(function () { //Feature1
    $('.Feature1 .Image .Img1').hide();
    $('.Feature1 .Image .Img2').show();
    $('.Feature1 .Wor .BUT1').hide();
    $('.Feature1 .Wor .BUT2').show();
});
$('.Feature1').mouseleave(function () {
    $('.Feature1 .Image .Img1').show();
    $('.Feature1 .Image .Img2').hide();
    $('.Feature1 .Wor .BUT1').show();
    $('.Feature1 .Wor .BUT2').hide();
});
$('.Feature2').mouseenter(function () { //Feature2
    $('.Feature2 .Image .Img1').hide();
    $('.Feature2 .Image .Img2').show();
    $('.Feature2 .Wor .BUT1').hide();
    $('.Feature2 .Wor .BUT2').show();
});
$('.Feature2').mouseleave(function () {
    $('.Feature2 .Image .Img1').show();
    $('.Feature2 .Image .Img2').hide();
    $('.Feature2 .Wor .BUT1').show();
    $('.Feature2 .Wor .BUT2').hide();
});
$('.Feature3').mouseenter(function () { //Feature3
    $('.Feature3 .Image .Img1').hide();
    $('.Feature3 .Image .Img2').show();
    $('.Feature3 .Wor .BUT1').hide();
    $('.Feature3 .Wor .BUT2').show();
});
$('.Feature3').mouseleave(function () {
    $('.Feature3 .Image .Img1').show();
    $('.Feature3 .Image .Img2').hide();
    $('.Feature3 .Wor .BUT1').show();
    $('.Feature3 .Wor .BUT2').hide();
});
$('.Feature4').mouseenter(function () { //Feature4
    $('.Feature4 .Image .Img1').hide();
    $('.Feature4 .Image .Img2').show();
    $('.Feature4 .Wor .BUT1').hide();
    $('.Feature4 .Wor .BUT2').show();
});
$('.Feature4').mouseleave(function () {
    $('.Feature4 .Image .Img1').show();
    $('.Feature4 .Image .Img2').hide();
    $('.Feature4 .Wor .BUT1').show();
    $('.Feature4 .Wor .BUT2').hide();
});
$('.Feature5').mouseenter(function () { //Feature5
    $('.Feature5 .Image .Img1').hide();
    $('.Feature5 .Image .Img2').show();
    $('.Feature5 .Wor .BUT1').hide();
    $('.Feature5 .Wor .BUT2').show();
});
$('.Feature5').mouseleave(function () {
    $('.Feature5 .Image .Img1').show();
    $('.Feature5 .Image .Img2').hide();
    $('.Feature5 .Wor .BUT1').show();
    $('.Feature5 .Wor .BUT2').hide();
});
$('.Feature6').mouseenter(function () { //Feature6
    $('.Feature6 .Image .Img1').hide();
    $('.Feature6 .Image .Img2').show();
    $('.Feature6 .Wor .BUT1').hide();
    $('.Feature6 .Wor .BUT2').show();
});
$('.Feature6').mouseleave(function () {
    $('.Feature6 .Image .Img1').show();
    $('.Feature6 .Image .Img2').hide();
    $('.Feature6 .Wor .BUT1').show();
    $('.Feature6 .Wor .BUT2').hide();
});
$('.Feature7').mouseenter(function () { //Feature7
    $('.Feature7 .Image .Img1').hide();
    $('.Feature7 .Image .Img2').show();
    $('.Feature7 .Wor .BUT1').hide();
    $('.Feature7 .Wor .BUT2').show();
});
$('.Feature7').mouseleave(function () {
    $('.Feature7 .Image .Img1').show();
    $('.Feature7 .Image .Img2').hide();
    $('.Feature7 .Wor .BUT1').show();
    $('.Feature7 .Wor .BUT2').hide();
});
$('.Feature8').mouseenter(function () { //Feature8
    $('.Feature8 .Image .Img1').hide();
    $('.Feature8 .Image .Img2').show();
    $('.Feature8 .Wor .BUT1').hide();
    $('.Feature8 .Wor .BUT2').show();
});
$('.Feature8').mouseleave(function () {
    $('.Feature8 .Image .Img1').show();
    $('.Feature8 .Image .Img2').hide();
    $('.Feature8 .Wor .BUT1').show();
    $('.Feature8 .Wor .BUT2').hide();
});
$('.Feature9').mouseenter(function () { //Feature9
    $('.Feature9 .Image .Img1').hide();
    $('.Feature9 .Image .Img2').show();
    $('.Feature9 .Wor .BUT1').hide();
    $('.Feature9 .Wor .BUT2').show();
});
$('.Feature9').mouseleave(function () {
    $('.Feature9 .Image .Img1').show();
    $('.Feature9 .Image .Img2').hide();
    $('.Feature9 .Wor .BUT1').show();
    $('.Feature9 .Wor .BUT2').hide();
});
$('.Feature10').mouseenter(function () { //Feature10
    $('.Feature10 .Image .Img1').hide();
    $('.Feature10 .Image .Img2').show();
    $('.Feature10 .Wor .BUT1').hide();
    $('.Feature10 .Wor .BUT2').show();
});
$('.Feature10').mouseleave(function () {
    $('.Feature10 .Image .Img1').show();
    $('.Feature10 .Image .Img2').hide();
    $('.Feature10 .Wor .BUT1').show();
    $('.Feature10 .Wor .BUT2').hide();
});
$('.Feature11').mouseenter(function () { //Feature11
    $('.Feature11 .Image .Img1').hide();
    $('.Feature11 .Image .Img2').show();
    $('.Feature11 .Wor .BUT1').hide();
    $('.Feature11 .Wor .BUT2').show();
});
$('.Feature11').mouseleave(function () {
    $('.Feature11 .Image .Img1').show();
    $('.Feature11 .Image .Img2').hide();
    $('.Feature11 .Wor .BUT1').show();
    $('.Feature11 .Wor .BUT2').hide();
});
$('.Feature12').mouseenter(function () { //Feature12
    $('.Feature12 .Image .Img1').hide();
    $('.Feature12 .Image .Img2').show();
    $('.Feature12 .Wor .BUT1').hide();
    $('.Feature12 .Wor .BUT2').show();
});
$('.Feature12').mouseleave(function () {
    $('.Feature12 .Image .Img1').show();
    $('.Feature12 .Image .Img2').hide();
    $('.Feature12 .Wor .BUT1').show();
    $('.Feature12 .Wor .BUT2').hide();
});
$('.FEATUREDCARSBUTTON button').click(function () { //SHOW MORE
    $('.FEATUREDCARSBUTTON button').hide();
    $('.HIDEEN').fadeIn();
    $('body').getNiceScroll().resize();
});