/** BUREAU54 STANDARD CONTROLLER STRUCTURE
 *  copyright 2013 bureau54.com
 *
 */


jQuery(document).ready(function(){ 
    var gridster;
	
	jQuery(window).resize(resize3DViewer);
	resize3DViewer();
	
	init();	
	




});

jQuery(window).load(function(){
	
  
			

});


function init(){
	
  gridster = jQuery(".gridster > ul").gridster({
    widget_margins: [1, 1],
    widget_base_dimensions: [15, 15],
	avoid_overlapped_widgets:true,


  }).data('gridster');
  
 
  jQuery('#fp780').click(function(){
	  
	  var widgets = [
          ['<li data-max-sizex="6" data-max-sizey="6"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2]
      ];

      $.each(widgets, function(i, widget){
          gridster.add_widget.apply(gridster, widget,1, 1)
      });
	  
  });	

  jQuery('#fp520').click(function(){
  
      var widgets = [
          ['<li data-max-sizex="4" data-max-sizey="4"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2]
      ];

      jQuery.each(widgets, function(i, widget){
          gridster.add_widget.apply(gridster, widget, 1, 1)
      });
	
  });	

  jQuery('#fp780-portrait').click(function(){
	  
	  var widgets = [
          ['<li data-max-sizex="2" data-max-sizey="6"><div class="control del func-delete-v"><p class="fui-cross"></p></div></li>', 2, 6]
      ];

      $.each(widgets, function(i, widget){
          gridster.add_widget.apply(gridster, widget,1, 1)
      });
	  
  });	

  jQuery('#fp520-portrait').click(function(){
  
      var widgets = [
          ['<li data-max-sizex="2" data-max-sizey="4"><div class="control del func-delete-v"><p class="fui-cross"></p></div></li>', 2, 4]
      ];

      jQuery.each(widgets, function(i, widget){
          gridster.add_widget.apply(gridster, widget, 1, 1)
      });
	
  });	
 

 jQuery(document).on('click', '.gs-w', function(){
	  if (!jQuery(this).hasClass('player-revert')){
	    
    	jQuery(this).children().slideToggle("slide");
	  }
  });

  jQuery(document).on('click', '.del p', function(){
  
    var widget = jQuery(this).parent().parent();
	gridster.remove_widget(widget);
	
  });	

  jQuery(document).on('click', '.turn p', function(){
  
    var widget = jQuery(this).parent().parent();
	
	var sizeW = jQuery(widget).attr('data-sizex');
	var sizeH = jQuery(widget).attr('data-sizey');
	
	gridster.resize_widget(widget, sizeH, sizeW, false);
	
  });	
  
  jQuery('.js-seralize').click(function() {
     var s = gridster.serialize();

	 jQuery("#muster-save").html("<p class='btn load-muster new' style='margin-right:10px;'>Muster laden</p>")
     jQuery('.load-muster.new').attr("data", JSON.stringify(s));
	 jQuery('.load-muster.new').removeClass('new');
	 
  });
  
  jQuery('.js-deleteAll').click(function() {
     
	 gridster.remove_all_widgets();
  });
  

  jQuery('#3dview').click(function(e){
	  e.preventDefault();
	
	 jQuery(this).addClass('blink');
	 
	 jQuery("#newFloor").empty();
	 
	 drawParquetStrips();
	 
	 jQuery("#verlegeplan").css('width', jQuery(window).width() + 'px');
	 jQuery("#verlegeplan").css('height', jQuery(document).height() + 'px');
	 
	 jQuery("#newFloor").html(jQuery('#verlegeplan-muster').html());
	 jQuery(".rechts").css('opacity', '1.0');
 
	 setParquetStripType(1);
	 
     animate3DRoom('show');
	 
	 jQuery(this).removeClass('blink'); 
  });  
  
  
  jQuery('#roomSwitch').click(function(){
  
    var act = parseInt(jQuery('#raum-moebel').attr("data-src"));
	var filename = "images/rooms/moebel-1800x1200_";
	
	if (act < parseInt(jQuery('#raum-moebel').attr("data-src-max"))){
		
		act++;
		
		jQuery('#raum-moebel').attr("data-src", act);
		jQuery('#raum-moebel img').animate({
          opacity: 0.0
   
      }, 1000, function() {
		 jQuery('#raum-moebel img').attr('src', filename+act+".png");
         jQuery('#raum-moebel img').css('opacity', '1.0');
	 
    
     });
		
	} else{
	
	  jQuery('#raum-moebel').attr("data-src", "1");
	  jQuery('#raum-moebel img').animate({
          opacity: 0.0
   
      }, 1000, function() {
		 jQuery('#raum-moebel img').attr('src', filename+"1.png");
         jQuery('#raum-moebel img').css('opacity', '1.0');
	 
    
     });
		
	}
    
  
  });
  
  jQuery('#close3dview').click(function(){
  
    animate3DRoom('close');
  
  });
  
  jQuery('#eiche-14-strips').click(function(){
  
    setParquetStripType(1);
  
  });

  jQuery('#eiche-35-strips').click(function(){
  
    setParquetStripType(2);
  
  });

  jQuery('#eiche-14-ger-strips').click(function(){
  
    setParquetStripType(3);
  
  });

  jQuery('#eiche-24-ger-strips').click(function(){
  
    setParquetStripType(4);
  
  });

  jQuery('#eiche-14-avorio-strips').click(function(){
  
    setParquetStripType(5);
  
  });
 
  
  jQuery('#datenblatt-calc').click(function(e) {
	  
     e.preventDefault();
     
	 jQuery(this).addClass('blink');
	 
	 drawParquetStrips();
	 
	 jQuery(this).removeClass('blink');
	 	 
	 jQuery("#verlegeplan").css('width', jQuery(window).width() + 'px');
	 jQuery("#verlegeplan").css('height', jQuery(document).height() + 'px');
     jQuery("#verlegeplan").css('display', 'block');
	 
	 	 
  });
  
  
  jQuery('#closePlan').click(function() {
     jQuery("#verlegeplan").css('display', 'none');
	 
  });
 
 
  
  jQuery('#musterPresets').click(function(){
	  
	  
	  var musterID = jQuery("select#musterPresets option").filter(":selected").val() ;
	  
	  gridster.remove_all_widgets();
	  
	  var widget1 = [
          ['<li data-max-sizex="4" data-max-sizey="4"><div class="control del func-delete-h"><p class="fui-cross"></p></li>', 2, 4],
		  ['<li data-max-sizex="4" data-max-sizey="4"><div class="control del func-delete-h"><p class="fui-cross"></p></li>', 2, 4],
		  ['<li data-max-sizex="4" data-max-sizey="4"><div class="control del func-delete-h"><p class="fui-cross"></p></li>', 2, 4],
    
      ];

	  var widget2 = [
          ['<li data-max-sizex="6" data-max-sizey="6"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 1, 1],
		  ['<li data-max-sizex="6" data-max-sizey="6"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 3, 1],
		  ['<li data-max-sizex="6" data-max-sizey="6"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 5, 1],
          ['<li data-max-sizex="6" data-max-sizey="6"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 7, 1],
		  ['<li data-max-sizex="6" data-max-sizey="6"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 9, 1],

          ['<li data-max-sizex="6" data-max-sizey="6"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 1, 6, 1, 7],
		  ['<li data-max-sizex="6" data-max-sizey="6"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 2, 7],
		  ['<li data-max-sizex="6" data-max-sizey="6"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 4, 7],
          ['<li data-max-sizex="6" data-max-sizey="6"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 6, 7],
		  ['<li data-max-sizex="6" data-max-sizey="6"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 8, 7],
		  ['<li data-max-sizex="6" data-max-sizey="6"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 1, 6, 10, 7],
    
      ];
	  
	  switch(musterID){
		case "1":
		  jQuery.each(widget1, function(i, widget1){
            gridster.add_widget.apply(gridster, widget1)
          });
		  break;  
		case "2":
		  jQuery.each(widget2, function(i, widget2){
            gridster.add_widget.apply(gridster, widget2)
          });
		  break;  
		  
	  }
  	  
	  
  });
  

  jQuery(document).on('click', '.load-muster', function() {
     gridster.remove_all_widgets();
	 
	 var serialization = jQuery.parseJSON(jQuery(this).attr("data"));
		
     jQuery.each(serialization, function() {
                gridster.add_widget('<li />', this.size_x, this.size_y, this.col, this.row);
     });
	 
	 jQuery(".gridster li[data-sizex=1]").append("<div class='control func-delete-v'><p class='fui-cross'></p></div>");
	 jQuery(".gridster li[data-sizex=2]").append("<div class='control func-delete-h'><p class='fui-cross'></p></div>");
	 jQuery(".gridster li[data-sizex=3]").append("<div class='control func-delete-h'><p class='fui-cross'></p></div>");
	 
	 
	 
  });
  
  jQuery("#close").click(function(){
            
 	  jQuery('#konfigurator3DViewer').animate({
        opacity: 0.0
   
      }, 1000, function() {
		  
		  jQuery('#konfigurator3DViewer').css('width', "0px");
          jQuery('#konfigurator3DViewer').css('height', "0px");

		 
    
     });
    
  });
	
  jQuery("#konfigurator3DViewer").click(function(){
            
 	  jQuery('#konfigurator3DViewer').animate({
        opacity: 0.0
   
      }, 1000, function() {
		  jQuery('#konfigurator3DViewer').css('width', "0px");
          jQuery('#konfigurator3DViewer').css('height', "0px");
	 
    
     });
    
  });
  
  /*
    Defining our variables
        world and viewport are DOM elements,
        worldXAngle and worldYAngle are floats that hold the world rotations,
        d is an int that defines the distance of the world from the camera 

var world = document.getElementById( 'world' ),
    viewport = document.getElementById( 'viewport' ),
    worldXAngle = 0,
    worldYAngle = 0,
    d = 0;
 
/*
    Event listener to transform mouse position into angles 
    from -180 to 180 degress, both vertically and horizontally

window.addEventListener( 'mousemove', function( e ) {
    worldYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 180;
    worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 180;
    updateView();
} );
 

    Changes the transform property of world to be
    translated in the Z axis by d pixels,
    rotated in the X axis by worldXAngle degrees and
    rotated in the Y axis by worldYAngle degrees.

function updateView() {
    world.style.transform = 'translateZ( ' + d + 'px ) \
        rotateX( ' + worldXAngle + 'deg) \
        rotateY( ' + worldYAngle + 'deg)';
}
*/
  
  
  
  var checkOrientation = function() {
    if (window.orientation == 0){
	  
	  jQuery('.overlay-pattern').css('width', jQuery(window).width()+'px');
      jQuery('.overlay-pattern').css('height', jQuery('body').height()+'px');	

	  jQuery('.overlay-pattern').css('display', 'inline');
	  jQuery('.overlay-turn-mobile').css('display', 'block');
	  
    }else{
      jQuery('.overlay-turn-mobile').fadeOut();
	  jQuery('.overlay-pattern').css('display', 'none');
		
	}
  };

  jQuery(window).on('load', checkOrientation).on('orientationchange', checkOrientation);
  
  jQuery('.overlay-turn-mobile').click(function (event) {
	  jQuery('.overlay-turn-mobile').fadeOut();
	  jQuery('.overlay-pattern').css('display', 'none');
  });
   
   
	

}

function setParquetStripType(type){
	
	 jQuery("#newFloor").children().each(function(i, obj) {
	   
	   jQuery(obj).removeClass('formpark');
	   jQuery(obj).removeClass().addClass(jQuery(obj).attr('data-class-base'));
	   
	   jQuery(obj).addClass(getRandomParquetClass(type, obj));
    
    }); 
}

function getRandomParquetClass(type, obj){
		   
  $style = Math.round(Math.random() * 6) + 1
  $newParquetPiece = "";
  
  $is520 = jQuery(obj).hasClass('fp-520');
  $isVertical = jQuery(obj).height() > jQuery(obj).width();
			   
  switch(type) {

    case 1:
	  if ($is520){
        if ($isVertical){
		  $newParquetPiece = "strip-eiche-14-520_h_"+$style; break;
		}else{
		  $newParquetPiece = "strip-eiche-14-520_q_"+$style; break;
		}
		
	  }else{
	    if ($isVertical){
		  $newParquetPiece = "strip-eiche-14-780_h_"+$style; break;
		}else{
		  $newParquetPiece = "strip-eiche-14-780_q_"+$style; break;
		}

	  }
    case 2:
	  if ($is520){
        if ($isVertical){
		  $newParquetPiece = "strip-eiche-35-520_h_"+$style; break;
		}else{
		  $newParquetPiece = "strip-eiche-35-520_q_"+$style; break;
		}
		
	  }else{
	    if ($isVertical){
		  $newParquetPiece = "strip-eiche-35-780_h_"+$style; break;
		}else{
		  $newParquetPiece = "strip-eiche-35-780_q_"+$style; break;
		}

	  }
    case 3:
	  if ($is520){
        if ($isVertical){
		  $newParquetPiece = "strip-eiche-ger-14-520_h_"+$style; break;
		}else{
		  $newParquetPiece = "strip-eiche-ger-14-520_q_"+$style; break;
		}
		
	  }else{
	    if ($isVertical){
		  $newParquetPiece = "strip-eiche-ger-14-780_h_"+$style; break;
		}else{
		  $newParquetPiece = "strip-eiche-ger-14-780_q_"+$style; break;
		}

	  }
    case 4:
	  if ($is520){
        if ($isVertical){
		  $newParquetPiece = "strip-eiche-ger-24-520_h_"+$style; break;
		}else{
		  $newParquetPiece = "strip-eiche-ger-24-520_q_"+$style; break;
		}
		
	  }else{
	    if ($isVertical){
		  $newParquetPiece = "strip-eiche-ger-24-780_h_"+$style; break;
		}else{
		  $newParquetPiece = "strip-eiche-ger-24-780_q_"+$style; break;
		}

	  }
    case 5:
	  if ($is520){
        if ($isVertical){
		  $newParquetPiece = "strip-eiche-avorio-14-520_h_"+$style; break;
		}else{
		  $newParquetPiece = "strip-eiche-avorio-14-520_q_"+$style; break;
		}
		
	  }else{
	    if ($isVertical){
		  $newParquetPiece = "strip-eiche-avorio-14-780_h_"+$style; break;
		}else{
		  $newParquetPiece = "strip-eiche-avorio-14-780_q_"+$style; break;
		}

	  }

  }
			   
  return ($newParquetPiece);
			   
}


function resize3DViewer(){
/*	
    	
   jQuery('#raum, #raum-schatten, #raum-moebel, #stage, .container, #parquet').css('width', "1200px");
   jQuery('#raum, #raum-schatten, #raum-moebel, #stage, .container, #parquet').css('height', "800px");
   jQuery('#raum, #raum-schatten, #raum-moebel, #stage, .container, #parquet').css('margin', "0px auto");
   
   jQuery('#raum img, #raum-schatten img, #raum-moebel img').css('height', '800px');
   jQuery('#raum img, #raum-schatten img, #raum-moebel img').css('width', '1200px');

   

	var ratio = 1800/1200;
	
	var windowH = jQuery(window).height();
	var windowW = jQuery(document).width();
	
	
	
	if (windowW/ratio < windowH){
	  
	  	jQuery('#raum img, #raum-schatten img, #raum-moebel img').css('height', windowH+'px');
		jQuery('#raum img, #raum-schatten img, #raum-moebel img').css('width', windowH*ratio+'px');
	} else{
	
	  	jQuery('#raum img, #raum-schatten img, #raum-moebel img').css('width', windowW+'px');
		jQuery('#raum img, #raum-schatten img, #raum-moebel img').css('height', windowW/ratio+'px');

		
	}
	
*/  

  
}

function animate3DRoom(type){
	
	if (type == "show"){
		
	  jQuery('#raum, #raum-schatten, #raum-moebel, #parquet, #controls, #titel-control').css('display', 'block');	
		
	  jQuery('#raum, #raum-schatten, #raum-moebel, #parquet, #controls, #titel-control').animate({
        opacity: 1.0,
      }, 5000, function() {
        // Animation complete.
      });
		
	  jQuery('#topSpacer').addClass('hidden');
	  jQuery('#topLine').addClass('hidden');
	  jQuery('#konfigurator').addClass('hidden');
	  jQuery('#konfigurator').addClass('hidden');
	  jQuery('.wrapper').addClass('hidden');	 
	  jQuery('footer').addClass('hidden');	 

			
	} else {
		
	  	
		
	  jQuery('#raum, #raum-schatten, #raum-moebel, #parquet, #controls, #titel-control').animate({
        opacity: 0.0,
      }, 1000, function() {
        jQuery('#raum, #raum-schatten, #raum-moebel, #parquet, #controls, #titel-control').css('display', 'none');	
      });

	
	  jQuery('#topSpacer').removeClass('hidden');
	  jQuery('#topLine').removeClass('hidden');
	  jQuery('#konfigurator').removeClass('hidden');
	  jQuery('#konfigurator').removeClass('hidden');
	  jQuery('.wrapper').removeClass('hidden');	 
	  jQuery('footer').removeClass('hidden');	 
	
		
	}
	
}



function drawParquetStrips(){
	
	 jQuery('#verlegeplan-muster').empty();
	 jQuery('#verlegeplan-facts').empty();
	 
	 var parquetMuster = jQuery('.gridster ul li');
	 var anzahl = 0;
	 var anzH = 0;
	 var anzV = 0;
	 var offsetWidth = 0;
	 var offsetHeight = 0;
	 var scaleFactor = 12;
	 
	 
	 jQuery(parquetMuster).each(function( index ) {
       
	   var col = jQuery( this ).attr('data-col');
	   var row = jQuery( this ).attr('data-row');
	   var sizeX = jQuery( this ).attr('data-sizex');
	   var sizeY = jQuery( this ).attr('data-sizey');
	   var cssLeft = 0;
	   var cssTop = 0;
	   var parquetType = "";
	   
	   if (sizeX > sizeY){
	     if (sizeX > 4)
		   parquetType= "fp-780 rechts";
		 else	   
		   parquetType= "fp-520 rechts";
		   
	   } else{
	     if (sizeY > 4)
		   parquetType= "fp-780 links";
		 else	   
		   parquetType= "fp-520 links";
	   }
	   
	   
	   // update statistic values
	   if (sizeX > sizeY) anzH++; else anzV++
	   anzahl++;
	   
	   // calc offset pattern x/y axes
	   if (col == 1)
	     cssLeft = 0;
	   else{
		 cssLeft = (col-1) * scaleFactor;  
	   }
		 
	   if (row == 1)
	     cssTop = 0;
	   else{
		 cssTop = (row-1) * scaleFactor;
		   
	   }
	   
	   if ((cssLeft + sizeX*scaleFactor) > offsetWidth){
		   offsetWidth = cssLeft + sizeX*scaleFactor;
	   }
	   if ((cssTop + sizeY*scaleFactor) > offsetHeight){
		   offsetHeight = cssTop + sizeY*scaleFactor;
	   }

       //var strip = getRandomParquetClass(1, 520);

	   //draw parquet planket
	   jQuery('#verlegeplan-muster').append("<div class='pattern formpark "+parquetType+"' data-class-base='pattern "+parquetType+"' style='position:absolute; top:"+ cssTop +"px; left:"+ cssLeft +"px; width:" + sizeX * scaleFactor +"px; height:" + sizeY * scaleFactor + "px;'></div>" );
	   
	   
     });
	 
	 var fp780 = jQuery('.fp-780').size() *100/anzahl;
	 var fp520 = jQuery('.fp-520').size() *100/anzahl;
	 var stripLeft = anzH * 100/anzahl;
	 var stripRight = anzV * 100/anzahl;

	 
	 //clone pattern X-times of x axes ********************************
	 var allPatternElements = jQuery(".pattern").clone();
	 
	 var counterW = 1200 / offsetWidth;
	 	 
	 $i = 1;
	 while ( $i< counterW ) {
		 
	   var actualLeftWidth = offsetWidth * $i;	 
       
	   jQuery(allPatternElements).each(function( index ) {
		   
		   var clone = jQuery(this).clone();
		   
		   var left = parseInt(jQuery(clone).css('left'));
		   left += actualLeftWidth;
		   
		   jQuery(clone).css('left', left + 'px');
		   //jQuery(clone).addClass(getRandomParquetClass(1, 520));
		   
	  	  
		   jQuery('#verlegeplan-muster').append(clone);

	      
       });
	   $i++;
        
     }
	 
	var allPatternElementsH = jQuery(".pattern").clone();
	 
	  //clone pattern X-times of y axes ********************************
	 $i = 1;
	 while ( $i< 30 ) {
		 
	   var actualTopHeight = offsetHeight*$i;	 
       
	   jQuery(allPatternElementsH).each(function( index ) {
		   
		   var clone = jQuery(this).clone();
		   
		   var top = parseInt(jQuery(clone).css('top'));
		   top += actualTopHeight;
		   
		   jQuery(clone).css('top', top + 'px');
		   //jQuery(clone).addClass(getRandomParquetClass(1, 520));
	  	  
     	   jQuery('#verlegeplan-muster').append(clone);

	       
       });
       $i++; 
     }
	 
	 
	 jQuery('#verlegeplan-facts').append("<p>Ihr Mix:</p>");
	 
	 
     jQuery('#verlegeplan-facts').append("<p>"+ fp780 +" % FORMPARK 780</p>");
	 jQuery('#verlegeplan-facts').append("<p>"+ fp520 +" % FORMPARK 520</p>");
	 
	 if (stripLeft > stripRight){
	   jQuery('#verlegeplan-facts').append("<p>"+ stripLeft +" % Rechts</p>");
	   jQuery('#verlegeplan-facts').append("<p>"+ stripRight +" % Links</p>");
	   
	 }else {
	   jQuery('#verlegeplan-facts').append("<p>"+ stripRight +" % Rechts</p>");
	   jQuery('#verlegeplan-facts').append("<p>"+ stripLeft +" % Links</p>");
	 
	 }
	
}

  

