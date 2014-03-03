/** BUREAU54 STANDARD CONTROLLER STRUCTURE
 *  copyright 2013 bureau54.com
 *
 */

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        
        console.log('Received Event: ' + id);
    }
};


jQuery(document).ready(function(){ 
    var gridster;
	
	jQuery(window).resize(resize3DViewer);
	resize3DViewer();
	
    var lang = navigator.language.split("-");
    var current_lang = (lang[0]);
    
    jQuery("body").attr("current_lang", current_lang);
              	
    jQuery("[data-translate]").each(function(key,value) {
      jQuery(value).html(translate(current_lang, jQuery(value).attr("data-translate")));
    })

    init();
});

jQuery(window).load(function(){
                   
   
   showMsgContainer("<h3 class='dark'>"+translate(jQuery("body").attr("current_lang"), "4")+"</h3>", "<ol>1." +translate(jQuery("body").attr("current_lang"), "5")+"</ol><ol>2." +translate(jQuery("body").attr("current_lang"), "6")+"</ol><ol>3." +translate(jQuery("body").attr("current_lang"), "7")+"</ol><ol>4." +translate(jQuery("body").attr("current_lang"), "8")+"</ol>", false);
	
});

function translate(lang, id){
	
	switch(lang){
        case "de":
            switch(id){
                case "1": return "Der Konfigurator";
                case "2": return "Meine Wunsch-Verlegung";
                case "3": return "In den Raum legen";
                case "4": return "Herzlich willkommen im Formpark-Konfigurator";
                case "5": return "Gewünschte Verlegung wählen";
                case "6": return "Musterverlegung in den Raum legen";
                case "7": return "Farbe und Sortierung wählen";
                case "8": return "Raumsituation wählen";
                case "9": return "Verlege-Datenblatt";
                case "10": return "Verlegeplan als E-Mail senden";
                case "11": return "Verlegeraster als E-Mail senden";
                case "12": return "Kein Formpark Muster gefunden";
                case "13": return "Bitte wählen Sie zuerst ein Verlegemuster von unten aus.";
                case "14": return "Wunsch Verlegung";
                case "15": return "Ihre Musterauswahl wird aufbereitet.";
                case "16": return "Raumansicht";
                case "17": return "Die Raumansicht wird vorbereitet.";
                case "18": return "Ihr Boden wird neu verlegt.";
                case "19": return "Eiche 14";
                case "20": return "Eiche 35";
                case "21": return "Eiche 14 <br/> geräuchert";
                case "22": return "Eiche <br/> Avorio 14";
                case "23": return "Das Verlegedatenblatt";
                case "24": return "Untenstehend finden Sie das gewünschte Verlegmuster sowie das neutrale Verlegeraster.";
				case "25": return "Verlegeplan als PDF Muster";
				case "26": return "Verlegeraster als PDF";
                
			}
        case "en":
            switch(id){
                case "1": return "The configurator";
                case "2": return "My preferred installation-pattern";
                case "3": return "Place into the room";
                case "4": return "Welcome to the Formpark configurator";
                case "5": return "Select preferred installation-pattern";
                case "6": return "Place installation-pattern into the room";
                case "7": return "Select colour and grading";
                case "8": return "Select room situation";
                case "9": return "Installation data sheet";
                case "10": return "Send installation data sheet by e-mail";
                case "11": return "Send grid pattern data sheet by e-mail";
                case "12": return "No Formpark pattern found";
                case "13": return "Please select a pattern below.";
                case "14": return "Preferred installation-pattern";
                case "15": return "Your pattern selection is being processed.";
                case "16": return "View of the room";
                case "17": return "The view of the room is being prepared";
                case "18": return "New installation-pattern of your floor";
                case "19": return "Oak 14";
                case "20": return "Oak 35";
                case "21": return "Oak 14 <br/> smoked";
                case "22": return "Oak <br/> Avorio 14";
                case "23": return "The installation data sheet";
                case "24": return "See below for the selected installation pattern and the neutral installation grid.";
 				case "25": return "Installation plan as PDF pattern";
				case "26": return "Grid pattern plan as PDF";
           }
        case "fr":
            switch(id){
                case "1": return "Le configurateur";
                case "2": return "La pose de mes rêves";
                case "3": return "Placer dans la pièce";
                case "4": return "Bienvenue sur le configurateur Formpark";
                case "5": return "Choisir le style de pose souhaité";
                case "6": return "Placer le style de pose dans la pièce";
                case "7": return "Choisir la teinte et le profil";
                case "8": return "Choisir la configuration de pièce";
                case "9": return "Imprimer la fiche technique de pose";
                case "10": return "Envoyer la fiche technique de pose par e-mail.";
                case "11": return "Envoyer la fiche technique du schéma par e-mail";
                case "12": return "Aucun style Formpark trouvé";
                case "13": return "Veuillez sélectionner un style ci-dessous.";
                case "14": return "Pose souhaitée";
                case "15": return "Votre choix de style est en cours de traitement.";
                case "16": return "Visualisation de la pièce";
                case "17": return "La vue de la pièce est en cours de préparation.";
                case "18": return "Votre sol est désormais posé.";
                case "19": return "Chêne 14";
                case "20": return "Chêne 35";
                case "21": return "Chêne 14 <br/> fumé";
                case "22": return "Chêne <br/> Avorio 14";
                case "23": return "La fiche technique";
                case "24": return "Veuillez trouver ci-après le style de pose souhaité de même que le schéma de pose neutre.";
 				case "25": return "Plan de pose en format PDF schéma";
				case "26": return "Plan du schéma en format PDF ";

            }
        case "it":
            switch(id){
                case "1": return "Il Configuratore";
                case "2": return "La posa che voglio";
                case "3": return "Applica motivo nell'ambiente";
                case "4": return "Benvenuti al configuratore Formpark!";
                case "5": return "Selezionare la posa che si desidera";
                case "6": return "Applicare il motivo nell'ambiente";
                case "7": return "Selezionare colore e tipologia";
                case "8": return "Selezionare situazione ambientale ";
                case "9": return "Stampa scheda tecnica posa";
                case "10": return "Inviare la scheda tecnica per la posa via e-mail.";
                case "11": return "Inviare la scheda tecnica griglia via e-mail";
                case "12": return "Non è stato trovato nessun motivo per Formpark";
                case "13": return "Seleziona un motivo in basso.";
                case "14": return "Posa desiderata";
                case "15": return "Il motivo che hai scelto viene preparato.";
                case "16": return "Vista dell'ambiente";
                case "17": return "La vista dell'ambiente viene preparata.";
                case "18": return "Il tuo pavimento viene rivestito a nuovo.";
                case "19": return "Quercia 14";
                case "20": return "Quercia 35";
                case "21": return "Quercia 14 <br/> affumicato";
                case "22": return "Quercia <br/> Avorio 14";
                case "23": return "La scheda tecnica";
                case "24": return "Qui sotto trovate il motivo di posa desiderato e la griglia di posa neutra.";
 				case "25": return "Schema di posa in formato PDF scheda";
				case "26": return "Schema griglia in formato PDF ";
            }
        default:
            switch(id){
                case "1": return "The configurator";
                case "2": return "My preferred installation-pattern";
                case "3": return "Place into the room";
                case "4": return "Welcome to the Formpark configurator";
                case "5": return "Select preferred installation-pattern";
                case "6": return "Place installation-pattern into the room";
                case "7": return "Select colour and grading";
                case "8": return "Select room situation";
                case "9": return "Print installation data sheet";
                case "10": return "Send installation data sheet by e-mail";
                case "11": return "Send grid pattern data sheet by e-mail";
                case "12": return "No Formpark pattern found";
                case "13": return "Please select a pattern below.";
                case "14": return "Preferred installation-pattern";
                case "15": return "Your pattern selection is being processed.";
                case "16": return "View of the room";
                case "17": return "The view of the room is being prepared";
                case "18": return "New installation-pattern of your floor";
                case "19": return "Oak 14";
                case "20": return "Oak 35";
                case "21": return "Oak 14 smoked";
                case "22": return "Oak Avorio 14";
                case "23": return "The installation data sheet";
                case "24": return "See below for the selected installation pattern and the neutral installation grid.";
 				case "25": return "Installation plan as PDF pattern";
				case "26": return "Grid pattern plan as PDF";
           }
	}
	
}



function init(){
    
	
  gridster = jQuery(".gridster > ul").gridster({
    widget_margins: [1, 1],
    widget_base_dimensions: [15, 15],
	autogenerate_stylesheet: false,
	avoid_overlapped_widgets:true,


  }).data('gridster');
  
  gridster.generate_stylesheet();
  
  
  jQuery("#owl-formpark").owlCarousel({
	  items : 5, //10 items above 1000px browser width
      itemsDesktop : [1000,4], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,4], // betweem 900px and 601px
      itemsTablet: [600,4],
      itemsMobile : false ,
	  
    pagination: false,
	navigation : false,
    autoHeight : false,
    lazyLoad : true,
    responsive: true
 
  
  });
    
  jQuery(document).on('click', 'a[target="_blank"]', function(ev) {
    var url;
                      
    ev.preventDefault();
    url = jQuery(this).attr('href');
    
    window.open(url,  '_blank', 'location=no');
  });
  
 
  jQuery('#fp780').click(function(){
	  
	  var widgets = [
          ['<li src-strip="780" orig-xy="q" data-max-sizex="6" data-max-sizey="6"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2]
      ];

      $.each(widgets, function(i, widget){
          gridster.add_widget.apply(gridster, widget,1, 1)
      });
	  
  });	

  jQuery('#fp520').click(function(){
  
      var widgets = [
          ['<li src-strip="520" orig-xy="q" data-max-sizex="4" data-max-sizey="4"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2]
      ];

      jQuery.each(widgets, function(i, widget){
          gridster.add_widget.apply(gridster, widget, 1, 1)
      });
	
  });	

  jQuery('#fp780-portrait').click(function(){
	  
	  var widgets = [
          ['<li src-strip="780" orig-xy="h" data-max-sizex="2" data-max-sizey="6"><div class="control del func-delete-v"><p class="fui-cross"></p></div></li>', 2, 6]
      ];

      $.each(widgets, function(i, widget){
          gridster.add_widget.apply(gridster, widget,1, 1)
      });
	  
  });	

  jQuery('#fp520-portrait').click(function(){
  
      var widgets = [
          ['<li src-strip="520" orig-xy="h" data-max-sizex="2" data-max-sizey="4"><div class="control del func-delete-v"><p class="fui-cross"></p></div></li>', 2, 4]
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
	 
	  if (jQuery('.gridster ul li').size() == 0){
		 
		 showMsgContainer(translate(jQuery("body").attr("current_lang"), "12"), translate(jQuery("body").attr("current_lang"), "13"), false);
		
		
	 } else{
	
	 
	 jQuery("#newFloor").empty();
	 
	 var msg = this;
	 var retrievedObj = showMsgContainer(translate(jQuery("body").attr("current_lang"), "16"), translate(jQuery("body").attr("current_lang"), "17"), true);
	 
	 jQuery.when(retrievedObj).then(function(){

	   drawParquetStrips(false);
	 
	   jQuery("#verlegeplan").css('width', jQuery(window).width() + 'px');
	   jQuery("#verlegeplan").css('height', jQuery(document).height() + 'px');
	 
	   jQuery("#newFloor").html(jQuery('#verlegeplan-muster').html());
	   jQuery(".rechts").css('opacity', '1.0');
 
	   setParquetStripType(1);
	 
       animate3DRoom('show');
	 });
	 
	 }
	 
	 jQuery(this).removeClass('blink'); 
	 
  }); 
  
  jQuery('#left-room').click(function(){
	  
	  switchRoom(0);
  
  });
  
  jQuery('#right-room').click(function(){
	  switchRoom(1);
	  
  });
  

  jQuery('#closeMsg').click(function(){
	  
	  closeMsgContainer();
  
  });
  
  jQuery('#verlegemusterAuswahl').click(function(){
	  
	  jQuery("#basis-controls").css('display', 'none');
	  jQuery("#musterverlegungen-chooser").css('display', 'block');
	  jQuery("#musterverlegungen-chooser").css('opacity', '1.0');
	  
	  
  });
  
  jQuery('.lazyOwl').click(function(e){
	  
	 var id = parseInt(jQuery(this).attr('data-source'));
	 closeMsgContainer();
	 gridster.remove_all_widgets();
	 showMsgContainer(translate(jQuery("body").attr("current_lang"), "14"), translate(jQuery("body").attr("current_lang"), "15"), true);
	 
	 setTimeout(function () {
	   getMusterPreset(id);
       closeMsgContainer();
                    
                 }, 500);
	 
	//jQuery("#basis-controls").css('display', 'block');
	//jQuery("#musterverlegungen-chooser").css('display', 'none');
	//jQuery("#musterverlegungen-chooser").css('opacity', '0.0');
	
  
  });
  
 
  jQuery('#close3dview').click(function(){
  
    animate3DRoom('close');
  
  });
  
  jQuery('#eiche-14-strips').click(function(){
  
    showMsgContainer(translate(jQuery("body").attr("current_lang"), "19"), translate(jQuery("body").attr("current_lang"), "18"), true);
	setTimeout(function () {
       setParquetStripType(1);
	   closeMsgContainer();
    }, 1500);
	
  
  });

  jQuery('#eiche-35-strips').click(function(){
  
    showMsgContainer(translate(jQuery("body").attr("current_lang"), "20"), translate(jQuery("body").attr("current_lang"), "18"), true);
	setTimeout(function () {
       setParquetStripType(2);
	   closeMsgContainer();
    }, 1500);
  
  });

  jQuery('#eiche-14-ger-strips').click(function(){
  
       showMsgContainer(translate(jQuery("body").attr("current_lang"), "21"), translate(jQuery("body").attr("current_lang"), "18"), true);
	setTimeout(function () {
       setParquetStripType(3);
	   closeMsgContainer();
    }, 1500);

  
  });

  jQuery('#eiche-24-ger-strips').click(function(){
  
        showMsgContainer("Eiche 24 geräuchert", translate(jQuery("body").attr("current_lang"), "18"), true);
	setTimeout(function () {
       setParquetStripType(4);
	   closeMsgContainer();
    }, 1500);

  
  });

  jQuery('#eiche-14-avorio-strips').click(function(){
  
        showMsgContainer(translate(jQuery("body").attr("current_lang"), "22"), translate(jQuery("body").attr("current_lang"), "18"), true);
	setTimeout(function () {
       setParquetStripType(5);
	   closeMsgContainer();
    }, 1500);

  
  });
 
  
  jQuery('#datenblatt-calc').click(function(e) {
	  
     e.preventDefault();
	 jQuery(this).addClass('blink');
	 
	 var preset = jQuery("#muster-container img").attr('data-id');
	 
	 if (jQuery('.gridster ul li').size() == 0){
		 
		 showMsgContainer(translate(jQuery("body").attr("current_lang"), "12"), translate(jQuery("body").attr("current_lang"), "13"));
		
		
	 } else{
     
     var funcCall = "sendEmail" + "(" + preset + ");";
         
		 
     jQuery("#verlegeplan-muster").html("<img data-id='"+preset+"' src='images/pdf/Verlegeraster_Muster_"+preset+".png' class='pdf-pattern' alt='Muster "+preset+"'/>");
	 jQuery("#verlegeplan-facts").html("<p onclick='javascript:"+funcCall+"' style='margin-right:20px;' class='btn float-left'>"+translate(jQuery("body").attr("current_lang"), "10")+"</p><p  onclick='javascript:"+funcCall+"' class='btn float-left'>"+translate(jQuery("body").attr("current_lang"), "11")+"</p>");
     	 	  
	 
	 jQuery("#musterverlegungen-chooser").css('display', 'none');
	 jQuery("#musterverlegungen-chooser").css('opacity', '0.0');
	 jQuery('footer').addClass('hidden');
	 	 
	 jQuery("#verlegeplan").css('width', jQuery(window).width() + 'px');
	 jQuery("#verlegeplan").css('height', jQuery(document).height() + 'px');
     jQuery("#verlegeplan").css('display', 'block');
	 
	 
	 closeMsgContainer();
	 }
	 jQuery(this).removeClass('blink');
	
	 
	 	 
  });
  
  
  jQuery('#closePlan').click(function() {
     jQuery("#verlegeplan").css('display', 'none');
	 jQuery("#musterverlegungen-chooser").css('display', 'block');
	 jQuery("#musterverlegungen-chooser").css('opacity', '1.0');
	 jQuery('footer').removeClass('hidden');

	 
  });

  jQuery('#close-msg-container').click(function() {
     jQuery("#msg-container").css('display', 'none');
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

function sendEmail(preset){
  
  var emailHeaderPDF = "FORMPARK";
  var emailSubHeader = translate(jQuery("body").attr("current_lang"), "25");
  var emailBodyText = translate(jQuery("body").attr("current_lang"), "24");
  var linkTextPDF = translate(jQuery("body").attr("current_lang"), "25")+ " " + preset;
  var linkTextPattern = translate(jQuery("body").attr("current_lang"), "26");


  var emailPDF = "http://www.formpark.bauwerk.com/konfigurator/en/images/pdf/Verlegeraster_Muster_"+preset+".pdf";
  var emailPDFPattern ="http://www.formpark.bauwerk.com/konfigurator/en/images/pdf/Verlegeraster_eigenes_Muster.pdf";


window.plugin.email.open({
    to:      [''],
    subject: 'Formpark',
    body:    '<h1>'+emailHeaderPDF+'</h1><p>'+emailSubHeader+'</p><p>'+emailBodyText+'</p><a href='+emailPDF+'><p>'+linkTextPDF+'</p></a><a href='+emailPDFPattern+'><p>'+linkTextPattern+'</p></a><p>Bauwerk Parkett AG</p><p>Neudorfstrasse 49</p><p>CH-9430 St. Margrethen</p>',
    isHtml:  true
    });
}

function showMsgContainer(headerValue, bodyValue, showLoader){
	
	jQuery("#msg-header").html(headerValue);
	jQuery("#msg-body").html(bodyValue);
	
	if (!showLoader){
	  jQuery("#msg-loader").css('display', 'none');	
	} else
	  jQuery("#msg-loader").css('display', 'block');
    
	
	jQuery("#message-container").css('display', 'block');
	
	jQuery("#message-container").css('opacity', '0.9');
  	  
	return jQuery("#message-container");
	
}

function closeMsgContainer(){
	jQuery("#message-container").css('display', 'none');
	 jQuery("#msg-loader").css('display', 'block');
	jQuery("#message-container").css('opacity', '0.0');
	
}

  function getMusterPreset(musterID){
	   
	  	  
	  switch(musterID){
		case 1:
		  openPreset1();
		  break;  
		case 2:
          openPreset2();		  
		  break;  
		case 3:
          openPreset3();		  
		  break;  
    	case 4:
          openPreset4();		  
		  break;  
		case 5:
          openPreset5();		  
		  break;  
		case 6:
          openPreset6();		  
		  break;  
		case 7:
          openPreset7();		  
		  break;  
		case 8:
          openPreset8();		  
		  break;  
		case 9:
          openPreset9();		  
		  break;  
		case 10:
          openPreset10();		  
		  break;  
		case 11:
          openPreset11();		  
		  break;  
		case 12:
          openPreset12();		  
		  break;  
		case 13:
          openPreset13();		  
		  break;  
		case 14:
          openPreset14();		  
		  break;  
		case 15:
          openPreset15();		  
		  break;  
		case 16:
          openPreset16();		  
		  break;  
		case 17:
          openPreset17();		  
		  break;  
		case 18:
          openPreset18();		  
		  break;  
		case 19:
          openPreset19();		  
		  break;  
		case 20:
          openPreset20();		  
		  break;  
		case 21:
          openPreset21();		  
		  break;  
		case 22:
          openPreset22();		  
		  break;  
		case 23:
          openPreset23();		  
		  break;  
		case 24:
          openPreset24();		  
		  break;  
		case 25:
          openPreset25();		  
		  break;  
		case 26:
          openPreset26();		  
		  break;  
	  
	  }
	  
	  jQuery("#muster-container").html("<img data-id='"+musterID+"' src='images/verlegemuster/"+musterID+"-gross.png' class='img-pattern' alt='Muster "+musterID+"'/>");
  	  
	  
}

function openPreset1(){
	
		  var widget = [
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 1],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 1],


      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });
	 
}

function openPreset2(){
	
  var widget = [
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 1, 1, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 1, 9, 1],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 1, 17, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 1],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 2],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 2],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 2],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 3],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 4],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 5],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 4],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 5],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 4],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 5],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 6],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 7],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 6],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 7],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 6],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 7],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 8],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 9],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 8],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 9],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 8],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 9],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 10],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 11],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 10],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 11],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 10],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 11],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 12],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 13],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 12],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 13],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 12],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 13],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 14],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 15],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 14],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 15],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 14],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 15],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 1, 1, 16],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 1, 9, 16],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 1, 17, 16],
	    
      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset3(){
	
  
	  var widget = [
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 1],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 1],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 3, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 7, 3],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 11, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 15, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 19, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 3],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 5],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 5],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 5],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 5],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 5],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 5],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 7],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 3, 7],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 7, 7],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 11, 7],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 15, 7],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 19, 7],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 7],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 9],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 9],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 9],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 9],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 9],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 9],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 11],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 3, 11],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 7, 11],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 11, 11],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 15, 11],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 19, 11],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 11],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 13],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 13],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 13],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 13],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 13],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 13],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 15],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 3, 15],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 7, 15],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 11, 15],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 15, 15],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 19, 15],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 15],

      ];
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset4(){
	
  
 var widget = [
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 1],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 25, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 31, 1],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 3],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 25, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 31, 3],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 5],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 25, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 31, 5],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 7],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 25, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 31, 7],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 9],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 9],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 9],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 9],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 25, 9],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 31, 9],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 11],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 11],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 11],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 11],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 25, 11],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 31, 11],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 13],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 13],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 13],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 13],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 25, 13],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 31, 13],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 15],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 15],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 15],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 15],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 25, 15],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 31, 15],

      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset5(){
	
  
	  var widget = [
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 1, 1, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 1, 13, 1],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 1, 25, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 31, 1],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 2],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 2],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 25, 2],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 31, 3],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 4],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 4],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 25, 4],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 31, 5],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 6],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 6],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 25, 6],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 31, 7],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 8],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 9],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 8],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 9],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 25, 8],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 31, 9],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 10],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 11],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 10],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 11],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 25, 10],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 31, 11],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 12],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 13],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 12],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 13],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 25, 12],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 31, 13],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 14],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 15],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 14],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 15],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 25, 14],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 31, 15],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 1, 1, 16],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 1, 13, 16],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 1, 25, 16],
	    
      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset6(){
	
  
		  var widget = [
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 1],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 1],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 3, 2, 1, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 4, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 10, 3],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 16, 3],
    	  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 3, 2, 22, 3],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 5],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 5],
	
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 3, 2, 1, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 4, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 10, 7],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 16, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 3, 2, 22, 7],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 9],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 9],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 9],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 9],
	
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 3, 2, 1, 11],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 4, 11],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 10, 11],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 16, 11],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 3, 2, 22, 11],
	
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 13],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 13],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 13],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 13],
	
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 3, 2, 1, 15],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 4, 15],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 10, 15],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 16, 15],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 3, 2, 22, 15],
	
      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset7(){
	
  
		  var widget = [
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 1, 2, 1, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 2, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 8, 1],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 12, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 18, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 22, 1],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 3, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 3],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 17, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 3, 2, 23, 3],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 5],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 7, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 11, 5],
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 5, 2, 21, 5],



	
      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset8(){
	
  
		  var widget = [
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 5, 1],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 7, 3],

	
      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}


function openPreset9(){
	
  
		  var widget = [
          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 9, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 15, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 1],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 5, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 11, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 15, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 3],



	
      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset10(){
	
  
		  var widget = [
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 1, 1],
	      ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 3, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 3, 3],

          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 1],
	      ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 3],

          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 13, 1],
	      ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 15, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 15, 3],

          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 19, 1],
	      ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 3],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 5],
	      ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 7],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 5, 5],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 7, 5],
	      ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 7, 7],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 11, 5],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 5],
	      ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 7],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 17, 5],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 19, 5],
	      ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 19, 7],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 23, 5],


	
      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset11(){
	
  
		  var widget = [
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 1, 1],
	      ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 3, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 3, 3],

          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 9, 1],
	      ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 11, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 11, 3],

          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 17, 1],
	      ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 3],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 5],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 7],
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 5, 5],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 5],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 7],
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 13, 5],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 15, 5],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 15, 7],
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 21, 5],
	
	      ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 5],
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 7],

      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset12(){
	
  
		  var widget = [
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 1, 1],
	      ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 3, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 1],
		  
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 13, 1],

	      ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 15, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 1],

	      ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 3, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 3],

	      ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 15, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 3],


	      ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 7],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 3, 7],
		  
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 5],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 5],

	      ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 9, 7],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 15, 7],
		  
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 19, 5],
		  
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 7],




      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset13(){
	
  
		  var widget = [
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 1, 1],
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 3, 1],
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 5, 1],
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 1],
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 9, 1],
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 11, 1],
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 13, 1],
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 15, 1],
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 17, 1],
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 19, 1],
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 21, 1],
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 23, 1],
		  
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 5],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 5],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 5],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 5],



      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset14(){
	
  
		  var widget = [
		  
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 1, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 3, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 3, 3],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 5, 3],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 3],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 9, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 11,1],

		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 11, 3],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 13, 3],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 15, 3],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 17, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 19, 3],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 21, 3],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 23, 3],
		  
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 15, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 7],



      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset15(){
	
  
		  var widget = [
		  
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 1, 1],
	      ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 3, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 3, 3],

          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 1],
	      ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 3],

          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 13, 1],
	      ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 15, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 15, 3],

          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 19, 1],
	      ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 3],
		  
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 5, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 11, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 17, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 5],



      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset16(){
	
  
		  var widget = [
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 1, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 3, 1],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 3],

          ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 5],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 7],

          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 5, 5],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 5],

 	


	
      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset17(){
	
  
		  var widget = [
          ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 1, 1],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 3, 1],
  		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 5, 1],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 5],
	
	      ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 7],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 9],
  		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 11],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 7, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 9, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 11, 7],
		  
 	


	
      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset18(){
	
  
		  var widget = [

	      ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 5, 2, 1, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 5, 2, 1, 3],
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 6, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 8, 1],
	      ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 10, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 10, 3],
          ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 16, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 18, 1],
	      ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 5, 2, 20, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 5, 2, 20, 3],
	 
	      ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 1, 5],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 3, 5],
	      ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 5, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 5, 7],
	      ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 11, 5],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 13, 5],
	      ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 15, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 15, 7],
	      ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 21, 5],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 23, 5],

	
      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset19(){
	
  
		  var widget = [
		  
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 3, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 9, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 11, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 17, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 19, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 1],
		  
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 3],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 5, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 7, 3],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 13, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 15, 3],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 21, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 3],
		  
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 5],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 5],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 5],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 15, 5],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 5],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 23, 5],
		  
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 1, 7],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 3, 7],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 9, 7],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 11, 7],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 17, 7],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 19, 7],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 9],
		  
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 11],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 3, 9],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 9],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 11, 9],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 9],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 19, 9],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 21, 11],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 11],
		  
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 13],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 5, 11],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 7, 11],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 13, 11],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 15, 11],
		  
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 15],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 3, 15],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 13],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 13],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 9, 15],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 11, 15],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 15, 13],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 13],
		  
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 17, 15],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 19, 15],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 23, 13],
		  
		  

	
      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset20(){
	
  
		  var widget = [
		  
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 1],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 3, 1],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 5, 1],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 7, 3],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 9, 5],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 11, 7],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 13, 9],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 15, 11],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 17, 13],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 19, 15],

		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 3, 9],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 5, 11],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 13],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 9, 15],
  
  	      ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 1, 9],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 3, 11],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 5, 13],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 7, 15],
		  
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 15],
		   
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 9, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 11, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 15, 9],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 17, 11],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 13],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 15], 
		  
	      ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 13, 1],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 15, 1],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 17, 1],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 19, 3],
	      ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 21, 5],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 23, 7],
		  
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 5],

	
      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset21(){
	
  
		  var widget = [
		  

		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 3, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 5, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 9],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 9, 11],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 11, 13],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 15],
  
  	      ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 1, 5],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 3, 7],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 5, 9],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 11],
	      ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 9, 13],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 11, 15],
		  
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 9],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 11],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 13],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 3, 15],
		  
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 15],

	      ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 5, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 9, 3],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 11, 5],
	      ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 13, 7],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 15, 9],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 17, 11],
	      ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 19, 13],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 21, 15],
	
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 9, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 11, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 13, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 15, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 17, 9],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 11],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 13],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 15],
		  
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 15, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 17, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 19, 3],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 21, 5],
	      ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 23, 7],
		  
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 5],
	


	
      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset22(){
	
  
		  var widget = [
		  

  	      ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 3, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 3, 5],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 7, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 9],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 11, 11],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 11, 13],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 15, 15],

  	      ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 1, 3],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 3, 7],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 5, 7],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 11],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 9, 11],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 11, 15],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 13, 15],
	
 	      ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 9],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 11],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 3, 13],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 3, 15],
		  
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 1, 13],

  	      ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 5, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 1],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 9, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 11, 5],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 13, 5],
	      ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 15, 9],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 17, 9],
	      ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 19, 13],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 21, 13],

  	      ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 11, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 11, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 15, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 15, 7],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 19, 9],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 11],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 13],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 15],
		  
	      ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 15, 1],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 17, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 19, 3],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 21, 3],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 23, 7],

  	      ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 5],

	
	
      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset23(){
	
  
		  var widget = [
		  

		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 1],
  	      ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 5, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 7, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 9, 1],
	
  	      ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 11, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 13, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 15, 1],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 17, 1],
		  
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 19, 3],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 21, 3],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 23, 3],
	
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 1, 3],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 3, 3],
		  
          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 5, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 11, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 17, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 9],
		  
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 5, 5],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 5],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 9, 5],

		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 11, 7],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 13, 7],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 15, 7],

		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 17, 9],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 19, 9],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 21, 9],
		  
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 23, 11],

          ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 3, 9],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 9, 11],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 15, 13],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 15],

	      ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 1, 9],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 3, 11],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 5, 11],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 7, 11],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 9, 13],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 11, 13],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 13, 13],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 15, 15],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 17, 15],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 19, 15],
		  
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 15],

	
	
      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset24(){
	
  
		  var widget = [
		  

		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 3, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 5],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 7, 7],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 9],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 11, 11],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 13],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 15, 15],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 7, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 5],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 11, 7],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 9],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 15, 11],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 13],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 19, 15],
		  		  
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 1, 3],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 3, 5],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 5, 7],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 9],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 9, 11],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 11, 13],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 13, 15],

		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 1, 7],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 3, 9],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 5, 11],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 13],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 9, 15],

		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 11],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 13],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 15],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 3, 15],

		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 9, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 11, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 13, 3],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 15, 5],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 17, 7],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 19, 9],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 21, 13],
	      ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 23, 15],
	
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 13, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 15, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 17, 3],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 19, 5],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 21, 7],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 23, 9],
		  
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 19, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 5],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 7],
			  
		
	
      ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset25(){
	
  
		  var widget = [
		  
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 5, 1],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 9, 1],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 11, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 1],
		  
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 5],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 13, 3],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 15, 3],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 17, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 19, 3],
		  
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 5],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 1, 7],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 3, 7],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 5, 5],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 7],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 15, 7],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 21, 7],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 23, 7],
		  
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 3, 11],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 9, 9],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 9],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 13],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 15],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 3, 13],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 5, 13],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 5, 15],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 9, 11],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 11, 11],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 13, 11],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 15, 9],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 15],

		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 17, 11],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 13],
		  
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 17, 15],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 19, 15],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 21, 13],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 15],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 13],

		  
	     ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}

function openPreset26(){
	
  
		  var widget = [
		  

		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 5, 1],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 9, 1],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 11, 1],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 1],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 19, 1],
		  
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 1, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 9, 3],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 3],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 21, 5],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 13, 3],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 15, 3],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 17, 1],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 19, 3],
		  
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 1, 5],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 7, 5],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 1, 7],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 3, 7],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 5, 5],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 7, 7],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 9, 7],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 7],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 21, 7],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 23, 7],
		  
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 3, 11],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 9, 9],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 9],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 1, 11],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 1, 13],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 3, 15],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 3, 13],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 5, 15],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 9, 11],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 11, 11],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 13, 11],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 6, 15, 9],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 13, 15],

		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 6, 2, 17, 11],
		  ['<li src-strip="520" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 4, 2, 17, 13],
		  
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 17, 15],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 19, 15],
		  ['<li src-strip="780" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 4, 21, 13],
		  ['<li src-strip="520" orig-xy="h"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 15],
		  ['<li src-strip="780" orig-xy="q"><div class="control del func-delete-h"><p class="fui-cross"></p></div></li>', 2, 2, 23, 13],
	     ];
	  
	 jQuery.each(widget, function(i, widget){
         gridster.add_widget.apply(gridster, widget)
     });

}



function switchRoom(direction){
	
	//direction 0:left, 1:right
  
    var act = parseInt(jQuery('#raum-moebel').attr("data-src"));
	var filename = "images/rooms/moebel-1200x800-";
	
	switch(direction){
	  case 0: act--; break;
	  case 1: act++; break;	
	
	}
	
	if (act <= 0) act = parseInt(jQuery('#raum-moebel').attr("data-src-max"));
	
	
	if (act <= parseInt(jQuery('#raum-moebel').attr("data-src-max"))){
						
		jQuery('#raum-moebel').attr("data-src", act);
		jQuery('#raum-moebel img').animate({
          opacity: 0.0
   
        }, 2000, function() {
		 jQuery('#raum-moebel img').attr('src', filename+act+".png");
		 
		 jQuery('#raum-moebel img').animate({
           opacity:1.0
		 },2000, function(){
	       
		 });
         	 
    
       });
		
	} else{
	
	  jQuery('#raum-moebel').attr("data-src", "1");
	  jQuery('#raum-moebel img').animate({
          opacity: 0.0
   
      }, 2000, function() {
		  
		 jQuery('#raum-moebel img').attr('src', filename+"1.png");
	     jQuery('#raum-moebel img').animate({
           opacity:1.0	 
		 },2000, function(){
	       
		 });
	 
    
     });
		
	}
    
  
}

function setParquetStripType(type){
	
	 jQuery("#newFloor").children().each(function(i, obj) {
	   
	   jQuery(obj).removeClass('formpark');
	   jQuery(obj).removeClass().addClass(jQuery(obj).attr('data-class-base'));
	   
	   jQuery(obj).addClass(getRandomParquetClass(type, obj));
    
    }); 
}

function getRandomParquetClass(type, obj){
		   
  $style = Math.round(Math.random() * 9) + 1
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
		
	  jQuery('#raum, #raum-switcher, #raum-schatten, #raum-moebel, #parquet, #controls, #titel-control').css('display', 'block');	
		
	  jQuery('#raum, #raum-switcher, #raum-schatten, #raum-moebel, #parquet, #controls, #titel-control').animate({
        opacity: 1.0,
      }, 3000, function() {
        closeMsgContainer();
      });
		
	  jQuery('#topSpacer').addClass('hidden');
	  jQuery('#topLine').addClass('hidden');
	  jQuery('#header-endline').addClass('hidden');
	  jQuery('#konfigurator').addClass('hidden');
	  jQuery('#konfigurator').addClass('hidden');
	  jQuery('.wrapper').addClass('hidden');	 
	  jQuery('footer').addClass('hidden');	 

			
	} else {
		
	  	
		
	  jQuery('#raum, #raum-switcher, #raum-schatten, #raum-moebel, #parquet, #controls, #titel-control').animate({
        opacity: 0.0,
      }, 1000, function() {
        jQuery('#raum,#raum-switcher, #raum-schatten, #raum-moebel, #parquet, #controls, #titel-control').css('display', 'none');	
      });
	  
	  jQuery('#newFloor').html('');

	
	  jQuery('#topSpacer').removeClass('hidden');
	  jQuery('#topLine').removeClass('hidden');
	  jQuery('#header-endline').removeClass('hidden');
	  jQuery('#konfigurator').removeClass('hidden');
	  jQuery('#konfigurator').removeClass('hidden');
	  jQuery('.wrapper').removeClass('hidden');	 
	  jQuery('footer').removeClass('hidden');	 
	
		
	}
	
}



function drawParquetStrips(only1Time){
			
	 jQuery('#verlegeplan-muster').empty();
	 jQuery('#verlegeplan-facts').empty();
	 
	 var parquetMuster = jQuery('.gridster ul li');
	 var actWidthOfDevice = jQuery(window).width();
	 
	 var anzahl = 0;
	 var anzH = 0;
	 var anzV = 0;
	 var offsetWidth = 0;
	 var offsetHeight = 0;
	 var scaleFactor = 23;
	 
	 if (actWidthOfDevice < 500) scaleFactor = 12;
	 
	 	  
	 jQuery(parquetMuster).each(function( index ) {
       
	   var col = jQuery( this ).attr('data-col');
	   var row = jQuery( this ).attr('data-row');
	   var sizeX = jQuery( this ).attr('data-sizex');
	   var sizeY = jQuery( this ).attr('data-sizey');
	   var stripType = jQuery( this ).attr('src-strip');
	   var origXYType = jQuery( this ).attr('orig-xy');
	   
	   var cssLeft = 0;
	   var cssTop = 0;
	   var parquetType = "";
	   
	   
	   if (stripType == "780"){
	     parquetType= "fp-780"; 	   
	   } else {
		 parquetType= "fp-520";  
	   }
	   
	   if (origXYType == "q"){
	     parquetType += " rechts"; 	   
	   } else{
		 parquetType += " links";   
	   }
	   
	   /*
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
	   */
	   
	   
	   // update statistic values
	   if (origXYType == "q") anzH++; else anzV++
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
	 
	 var actWidthOfDevice = jQuery(window).width();
	 
	 if (actWidthOfDevice < 700) actWidthOfDevice = 800;
	 var counterW = actWidthOfDevice / offsetWidth;
	 	 
	 $i = 1;
	 
	 if (only1Time) $i = counterW;
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
	  
	var actHeightOfDevice = jQuery(window).height();
	 
	 if (actHeightOfDevice < 350) actHeightOfDevice = 600;
	 var counterH = actHeightOfDevice / offsetHeight;


	 $i = 1;
	 
	 if (only1Time) $i = counterH;
	 while ( $i< counterH ) {
		 
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
	  
}
