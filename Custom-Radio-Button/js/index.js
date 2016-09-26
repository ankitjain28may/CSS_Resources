
  $(".radio-custom").click(function() {
        check(this);
    });


  function check(self)
  {
        id = "#"+$(self).attr('for');
        console.log(id);
        name = $(id).attr('name');
        console.log(name);
        $("input[name="+name+"]:checked").removeAttr('checked');
      $(id).attr('checked','true');
      console.log($("input[type=radio]:checked").val());
      // $("form").submit();

      change = id.substr(2,1);
      console.log(change);
      change++;
      change = ".q"+change;
      displayHide(change);
  }

  function displayHide(change)
  {

    $("ul li").fadeOut("slow");
    $("ul li").hide();
    $(change).fadeIn("slow");
    $("#button").attr('onclick',next(change.substr(1)));
    if(change==".q3")
        $("#button").attr({'onclick':'done()','type':'button'});
  }

  function init()
  {
    $(".q1").show();
  }

  function done() {
    $("ul li").show();
    $("#button").hide();
    $("#submit").show();
  }

  function next(ele)
  {
    // if($("input[name="+ele+"]:checked"));
  }
