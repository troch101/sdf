

$(".books_rigth").click(function(){
   $(".books_date li").slice(20).css("display","block");
    $(".books_date li").slice(0,20).css("display","none");


  
  });
$(".books_left").click(function(){
   $(".books_date li").slice(20).css("display","none");
   $(".books_date li").slice(0,20).css("display","block");

   
  });



$(function(){
	$(".books_date li").click(function(){
	   $(".books_date li").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
	})
})



let temp =JSON.parse(sessionStorage.getItem("data_d"))||[];
var count=0;






 $("table tr").each(function() {
            $(this).children('td:nth-child(1)').addClass('selected');
        });



$("table td").click(function () {




   if($(this).hasClass("selected")){
    return
   }
	 var price=$(this).text()

    // price=price++
   console.log(price)
  
  var row = $(this).closest("tr").find("td").eq(0).text();//当前行第一个值
  console.log($(this).closest("tr").find("td").eq(0)) 

  var trSeq = $(this).parent().parent().find("tr").index($(this).parent()[0]);//当前在第几行
   console.log(trSeq)

  var cloumNumber = $(this).index();
  var cloum =$('table tr th').eq(cloumNumber).text();//当前列第一个值
  console.log(cloum)  




   if ($(this).hasClass("td_time")) {
   	    $(this).removeClass("td_time");
       
   }else{
   
         $(this).addClass("td_time");
    

     }
  });
 

  


