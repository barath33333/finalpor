
$(document).ready(function()
{
  $(".mainskill2,.mainskill3").hide();
});
$(document).ready(function()
{
  $(".mainskill1").show();
});

 $(document).ready(function()
 {
  $("#head1").click(function()
  {
    $(".mainskill1").show();
  });
 });
 $(document).ready(function()
 {
$("#head1").click(function()
{
  $(".mainskill2,.mainskill3").hide();
});
 });

$(document).ready(function()
{
  $("#head2").click(function()
  {
    $(".mainskill2").show().css({"padding-left":"200px"});
  });
});

$(document).ready(function()
{
  $("#head2").click(function()
  {
    $(".mainskill1,.mainskill3").hide();
  });
});

$(document).ready(function()
{
  $("#head3").click(function()
  {
    $(".mainskill3").show().css({"padding-left":"350px"});
  });
});

$(document).ready(function()
{
  $("#head3").click(function()
  {
    $(".mainskill1,.mainskill2").hide();
  });
});
