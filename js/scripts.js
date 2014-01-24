include("js/jquery.color.js");
include("js/jquery.backgroundpos.js");
include("js/jquery.easing.js");
include("js/jquery.mousewheel.js");
include("js/jquery.fancybox-1.3.4.pack.js");
include("js/switcher.js");
include("js/bgStretch.js");
include("js/sImg.js");
include("js/MathUtils.js");
include("js/jquery.cycle.all.min.js");
include("js/tms-0.4.1.js");
include("js/jquery.jqtransform.js");
include("js/forms.js");
include("js/preloadIMG.js");

function include(url) {
    document.write('<script src="' + url + '"></script>');
}
var MSIE = false,
    content, defSrc = [];

function addAllListeners() {
    $('.prevBtn,.prev').hover(
        function(){
        	$(this).stop().animate({'backgroundPosition':'right center'},400,'easeOutExpo');  
        },
        function(){
        	$(this).stop().animate({'backgroundPosition':'left center'},500,'easeOutExpo');  
        }
    );  
    $('.nextBtn,.next').hover(
        function(){
        	$(this).stop().animate({'backgroundPosition':'left center'},400,'easeOutExpo');  
        },
        function(){
        	$(this).stop().animate({'backgroundPosition':'right center'},500,'easeOutExpo');  
        }
    );
    var val1 = $('.readMore>span').css('color');
    $('.readMore').hover(
        function(){
        	$(this).stop().animate({'backgroundPosition':'14px 8px'},400,'easeOutExpo')
                .children('span').stop().animate({'color':'#fcb043','paddingLeft':'10px'},400,'easeOutExpo')
        },
        function(){
        	$(this).stop().animate({'backgroundPosition':'left 8px'},600,'easeOutCubic')
                .children('span').stop().animate({'color':val1,'paddingLeft':'0px'},600,'easeOutCubic')
        }
    );
        
    var val2 = parseInt($('.imHolder.v2').children('span').width());
    var val3 = parseInt($('.imHolder.v2').children('span').height());    
    var els = $('.imHolder.v2')
    if (!MSIE)
        els.children('span').css({'height':0,'width':0,'left':val2*.5,'top':val3*.5,'display':'block','opacity':0}).end()
    els.hover(
        function(){
            if (!MSIE) {
                $(this).children('span').stop().animate({'width':val2,'height':val3,'left':0,'top':0,'opacity':1},300,'easeOutExpo')
            } else {
                $(this).children('span').css({'width':val2,'height':val3,'left':0,'top':0,'display':'block'})
            }
        },
        function(){
            if (!MSIE) {
                $(this).children('span').stop().animate({'width':'0','height':'0','left':val2*.5,'top':val3*.5,'opacity':0},400,'easeOutExpo');
            } else {
                $(this).children('span').css({'width':'0','height':'0','left':val2*.5,'top':val3*.5,'display':'none'});
            }
        }
    );
	
	
	
	//Imagenes Cursos
	
var val22 = parseInt($('.imHolder.v22').children('span').width());
    var val33 = parseInt($('.imHolder.v22').children('span').height());    
    var els = $('.imHolder.v22')
    if (!MSIE)
        els.children('span').css({'height':0,'width':0,'left':val22*.5,'top':val33*.5,'display':'block','opacity':0}).end()
    els.hover(
        function(){
            if (!MSIE) {
                $(this).children('span').stop().animate({'width':val22,'height':val33,'left':0,'top':0,'opacity':1},300,'easeOutExpo')
            } else {
                $(this).children('span').css({'width':val22,'height':val33,'left':0,'top':0,'display':'block'})
            }
        },
        function(){
            if (!MSIE) {
                $(this).children('span').stop().animate({'width':'0','height':'0','left':val22*.5,'top':val33*.5,'opacity':0},400,'easeOutExpo');
            } else {
                $(this).children('span').css({'width':'0','height':'0','left':val22*.5,'top':val33*.5,'display':'none'});
            }
        }
    );	
	
	

	
    var val4 = parseInt($('.imHolder.v3').children('span').width());
    var val5 = parseInt($('.imHolder.v3').children('span').height());    
    $('.imHolder.v3')
    .hover(
        function(){
            if (!MSIE) {
                $(this).children('span').stop().animate({'width':'0','height':'0','left':val4*.5,'top':val5*.5,'opacity':0},400,'easeOutExpo');
            } else {
                $(this).children('span').css({'width':'0','height':'0','left':val4*.5,'top':val5*.5,'display':'none'});
            }
        },
        function(){
            if (!MSIE){
                $(this).children('span').stop().animate({'width':val4,'height':val5,'left':0,'top':0,'opacity':1},300,'easeOutExpo')
            } else {
                $(this).children('span').css({'width':val4,'height':val5,'left':0,'top':0,'display':'block'})
            }
        }
    );
    var val6 = parseInt($('.imHolder.v1').children('span').width());
    var val7 = parseInt($('.imHolder.v1').children('span').height());    
    $('.imHolder.v1')
    .hover(
        function(){
            if (!MSIE){
                $(this).children('span').stop().animate({'width':'0','height':'0','left':val6*.5,'top':val7*.5,'opacity':0},400,'easeOutExpo');
            } else {
                $(this).children('span').css({'width':'0','height':'0','left':val6*.5,'top':val7*.5,'display':'none'});
            }
        },
        function(){
            if (!MSIE) {
                $(this).children('span').stop().animate({'width':val6,'height':val7,'left':0,'top':0,'opacity':1},300,'easeOutExpo')
            } else {
                $(this).children('span').css({'width':val6,'height':val7,'left':0,'top':0,'display':'block'})
            }
        }
    );
}

function showSplash(){
    $('header').stop().animate({'top': '291px'},500,'easeOutExpo');
    $('#content>ul').stop().animate({'top': '375px','height':'0'},500,'easeOutExpo');
}

function hideSplash(){
    $('header').stop().animate({'top': '-10px'},500,'easeOutExpo');
    $('#content>ul').stop().animate({'top': '210px','height':'535px'},1500,'easeOutElastic');
}

function hideSplashQ(){
    $('header').css({'top': '-10px'});
    $('#content>ul').css({'top': '375px','height':'0'});
}

$(document).ready(ON_READY);
function ON_READY() {
    /*SUPERFISH MENU*/
    
    preloadIMG(["splash_icon1_out.gif",
            "splash_icon2_out.gif",
            "splash_icon3_out.gif",
            "splash_icon4_out.gif",
            "splash_icon5_out.gif"])
}

function ON_LOAD(){
    MSIE = ($.browser.msie) && ($.browser.version <= 8);
    $('.spinner').fadeOut();
    
    $('#form1').jqTransform({imgPath:'images/'});
    
    $('.slider')._TMS({
		show:0,
		pauseOnHover:false,
		duration:800,
		preset:'fadeFromCenter',
        easing: 'easeOutExpo',
		pagination: $('.pagination'),
        prevBu: '.prev',
        nextBu: '.next',
		pagNums: false,
		slideshow: 8000,
		numStatus:false,
		banners:false,
		overflow:'hidden',
		waitBannerAnimation:false,
		progressBar:'<div class="progbar"></div>'
	});
    
    if ($(".cont_slider").length) {
        $('.cont_slider').cycle({
            fx: 'scrollHorz',
            speed: 600,
    		timeout: 0,
            next: '.nextBtn',
    		prev: '.prevBtn',                
    		easing: 'easeInOutExpo',
    		cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
  		})
    };
    
    $('.imHolder.v2,.imHolder.v1').attr('rel','Appendix')
    .fancybox({
        'centerOnScroll': true
    });
	
	
	
	//Imagenes Cursos
	
	 $('.imHolder.v22').attr('rel','Appendix')
    .fancybox({
        'centerOnScroll': true
    });






    //content switch
    content = $('#content');
    content.tabs({
        show:0,
        preFu:function(_){
            _.li.css({'visibility':'hidden'});
            hideSplashQ();		
        },
        actFu:function(_){            
            if(_.curr){
                if (_.n == 0){
                    showSplash();
                } else {
                    hideSplash();
                }
                _.curr
                    .css({'left':'-1000px','visibility':'visible'}).stop(true).animate({'left':'0px'},{duration:1500,easing:'easeOutExpo'});
            }   
    		if(_.prev){
  		        _.prev
                    .show().stop(true).animate({'left':'1000px'},{duration:400,easing:'easeInOutCubic',complete:function(){
                            if (_.prev){
                                _.prev.css({'visibility':'hidden'});
                            }
                        }
		              });
            }            
  		}
    });
    $('#menu>li>em').css('display','inline-block').children('span').css({'height':0,'left':'-1px'}); 
    $('#menu>li>strong>img').each(function (ind){
        defSrc.push($(this).attr('src'));
    })
    var nav = $('.menu');
    nav.navs({
		useHash:true,
        defHash: '#!/inicio',
        hoverIn:function(li){
            $('>strong',li).stop().children('img').attr({'src':defSrc[$(li).index()-1]});                                
            $('>em',li).children('span').eq(0).stop().animate({'height':'4px','top':'0'},700,'easeOutElastic');
            $('>em',li).children('span').eq(1).stop().animate({'height':'5px','bottom':'0'},500,'easeOutElastic');
        },
        hoverOut:function(li){
            if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                $('>strong',li).children('img').attr({'src':$('>strong',li).attr('data')}).end();
                $('>em',li).children('span').eq(0).stop().animate({'height':'0','top':'0'},500,'easeInBack');
                $('>em',li).children('span').eq(1).stop().animate({'height':'0','bottom':'0'},500,'easeInBack');
            }
        }
    })
    .navs(function(n){	
   	    $('#content').tabs(n);
   	});
    
    setTimeout(function(){
        $('#bgStretch').bgStretch({
    	   align:'leftTop',
           autoplay: true,
            navs:$('.pagin').navs({autoPlay:16000})
        })
        .sImg({
            sleep: 1000,
            spinner:$('<div class="spinner spinner_bg"></div>').css({opacity:1}).stop().hide(3000)
        });
    },0);
    
    setTimeout(function(){  $('body').css({'overflow':'visible'}); },300);    
    addAllListeners();
    
    $(window).trigger('resize');
}

$(window).resize(function (){
    if (content) content.stop().animate({'top':(windowH()-content.height())*.5-18},500,'easeOutCubic');
});

function listen(evnt, elem, func) {
    if (elem.addEventListener)  // W3C DOM
        elem.addEventListener(evnt,func,false);
    else if (elem.attachEvent) { // IE DOM
        var r = elem.attachEvent("on"+evnt, func);
    return r;
    }
}
listen("load", window, ON_LOAD);





