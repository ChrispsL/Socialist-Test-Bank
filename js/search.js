$('#search').click(function() {
   //  var $btn=$(this);
   //  $btn.button('loading');
   //$('#searchQuery').empty();
//$('#searchInput').val().length()
//$('#searchQuery').append("<a> link </a>");

//'div[id*="'+$('#searchInput').val() + "\""
$(".collapse").each(function(index)
{

var re = new RegExp(".*" + $('#searchInput').val() + ".*");
	if(re.test($(this).attr('id')))
	{
		$(this).collapse("show");
	} else {
		$(this).collapse("hide");
	}
});
        /*each(function(index) {
        	$(this).collapse('toggle');
        })*/
  //    $btn.button('reset');
});



RegExp.escape= function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};