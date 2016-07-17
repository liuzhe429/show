/*
========================================================================
 EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Project Name		: Resumy - Colorful CV/Resume Template
 Author 			: Mias Marthinus
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Copyright (c) 2016 - Mias Studio 
========================================================================
*/

'use strict'

$(window).load(function(){	
	
	/*
	====================================================================
	 GLOBAL
	====================================================================
	*/
		
		/*
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		 VARIABLES
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		*/
		
		var
		
			active_page = 'page-none'
			
			,back_to_top_button_visibility = false
			
			,back_to_top_button = {
			
				show : function(){
					if( !back_to_top_button_visibility ){
						back_to_top_button_visibility = true
						
						$('#back-to-top-button').removeClass('hide')
					}
				}
				
				,hide : function(){
					if( back_to_top_button_visibility ){
						back_to_top_button_visibility = false
						
						$('#back-to-top-button').addClass('hide')
					}
				}
			
			}
			
			,portofolio_first_time_load = false
			
			,portofolioInitiate = function(){
				
				//proccess each item
				$('#portofolio-ajax-container').children('.portofolio-item-container').children().each(function(){
					
					var 
						container = $(this)
						,image = $(this).children('.image').children('img').attr('src') || ''
						,title = $(this).children('.content').children('.title').html() || ''
						,information = $(this).children('.content').children('.information').html() || ''
						,description = $(this).children('.content').children('.description').html() || ''
					
					//on click action
					$(this).on('click', function(){
						//set content
						$('#portofolio-preview-image').attr('src', image)
						$('#portofolio-preview-title').html(title)
						$('#portofolio-preview-information').html(information)
						$('#portofolio-preview-description').html(description)
						
						//open preview
						$('#portofolio-preview').scrollTop(0)	
						$('#pages-container').ms().openPage('#portofolio-preview')
						back_to_top_button.hide()
					})
				})
				
				//proccess category button
				$('#portofolio-ajax-container').children('.portofolio-category-button-container').children().each(function(){
					
					var 
						this_button = $(this)
						,target = $('#portofolio-ajax-container').children('.portofolio-item-container')
					
					//if the button is not category all
					if( !$(this).hasClass('ms-category-all') ){
						var 
							category_name = $.ms.getClassValue($(this), 'ms-category') //get class value
							,item_match = $(target).children('.ms-category-' + category_name) //get match item
							,item_not_match = $(target).children().not('.ms-category-' + category_name) //get non match item
						
						
						$(this).on('click', function(){
							item_match.removeClass('hide')
							item_not_match.addClass('hide')
							
							$('#portofolio-ajax-container').children('.portofolio-category-button-container').children('.accent-bg')
							.removeClass('accent-bg')
							.addClass('button-frame-darker')
							
							this_button
							.removeClass('button-frame-darker')
							.addClass('accent-bg')
						})
					}
					//if is category all
					else{					
						item_match = $(target).children() //get all item
					
						$(this).on('click', function(){
							item_match.removeClass('hide')
							
							$('#portofolio-ajax-container').children('.portofolio-category-button-container').children('.accent-bg')
							.removeClass('accent-bg')
							.addClass('button-frame-darker')
							
							this_button
							.removeClass('button-frame-darker')
							.addClass('accent-bg')
						})
					}
					
				})
				
			}
		
			,portofolioRequest = function( request_var ){
				
				// var
				// 	container = $('#portofolio-ajax-container')
				// 	,url = 'engine/php/portofolio.php?' + request_var
				//
				// $('body').addClass('loading')
				//
				// $.ajax({
				// 	url : url,
				// 	dataType : 'html'
				// })
				// .done(function( data ){
				// 	container.html(data)
				// 	portofolioInitiate()
				// })
				// .fail(function(){
				// 	container.html('fail')
				// })
				// .always(function(){
				// 	$('body').removeClass('loading')
				// })
			}
			
			,goToPage = function( target ){
				
				window.location.hash = target //change the hash
				
			}
			
			,hashHandler = function(){
				if( window.location.hash !== '' ){		
					var target = window.location.hash //store hash
				
					target = target.replace('#', '') //get string without hash
					
					if( active_page == ( 'page-' + target ) ){ return false } //target = false
					
					//first time load portofolio
					if( !portofolio_first_time_load && target == 'portofolio' ){
						portofolio_first_time_load = true
						portofolioRequest()
					}
					
					var 
					
						current_page = '#' + active_page
						
						,speed = Number( $.ms.getClassValue('#pages-container', 'ms-speed') || 500 )
					
					
					active_page = 'page-' + target //set active page
					
					window.setTimeout(function(){
						$(current_page).scrollTop(0)	
					}, speed)
					
					$('#main-menu').children('.active').each(function(){
						$(this).removeClass('active') //remove active classes
					})
					
					$('#main-menu-' + target).addClass('active') //set active class
				
					$('#pages-container').ms().openPage( '#' + active_page ) //change page
										
					//close social media link on mobile
					if( $('#social-media-link').hasClass('show') ){
						$('#social-media-link').removeClass('show')
					}
				}
			}
		
		
		
		window.getPortofolio = function( request_var ){
			portofolioRequest( request_var )	
		}
			
		
		/*
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		 ON HASH CHANGE
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		*/
		
		$(window).on('hashchange', function(){
			hashHandler()
		})
		
		
		/*
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		 PAGES LINK
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		*/
		
		$('.link-page-resume').on('click', function(){
			goToPage('resume')
		})
		
		$('.link-page-portofolio').on('click', function(){
			goToPage('portofolio')
		})
		
		$('.link-page-services').on('click', function(){
			goToPage('services')
		})
		
		$('.link-page-contact').on('click', function(){
			goToPage('contact')
		})
		
		/*
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		 PAGES ON SCROLL
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		*/
		
		$('#pages-container').children('article').not('#portofolio-preview').each(function(){
			
			var
				target = $(this)
				
				,target_id = $(this).attr('id')
				
				,header_height = $(this).children('header').innerHeight()
				
			
			//still consistent even window is resized	
			$(window).on('resize', function(){
				header_height = $(this).children('header').innerHeight()
				
				if( target.scrollTop() > header_height ){
					back_to_top_button.show()
				}
				else if( target.scrollTop() <= header_height ){
					back_to_top_button.hide()
				}
			})	
			
			$(this).on('scroll', function(){
				if( target.scrollTop() > header_height ){
					back_to_top_button.show()
				}
				else if( target.scrollTop() <= header_height ){
					back_to_top_button.hide()
				}
				
				//close social media link on mobile
				if( $('#social-media-link').hasClass('show') ){
					$('#social-media-link').removeClass('show')
				}
			})
			
		})
		
		/*
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		 INITIATE PORTOFOLIO
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		*/
		
		portofolioInitiate()
		
		/*
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		 INITIATE PORTOFOLIO
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		*/
		
		$('.portofolio-back-button').on('click', function(){
			$('#pages-container').ms().openPage('#page-portofolio')
			back_to_top_button.show()
		})
		
		/*
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		 BACK TO TOP BUTTON
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		*/
		
		$('#back-to-top-button').on('click', function(){
			$( '#' + active_page ).animate({
				'scrollTop' : '0'
			}, 500)
		})
		
		/*
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		 SOCIAL MEDIA TOGGLE
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		*/
		
		$('#social-media-toggle').on('click', function(){
			$('#social-media-link').toggleClass('show')
		})
		
		
	/*
	====================================================================
	 STARTING ACTION
	====================================================================
	*/
		
		/*
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		 SET SCROLL TOP TO 0
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		*/
		
		$('#pages-container').children().each(function(){
			$(this).scrollTop(0)
		})
		
		
		/*
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		 OPEN PAGE ACCORDING TO HASH
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		*/
		
		hashHandler()
		
		
		/*
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		 HEADER SLIDESHOW
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		*/
		
		$('#pages-container').find('.header-slideshow').each(function(){
			var 
			
				container = $(this)
				
				,parent = $(this).parent().parent()
				
				,timer = $.ms.timer(function(){
					if( parent.hasClass('ms-page-active') ){
						container.ms().openNextPage()
					}
				})
				
				,speed = $.ms.getClassValue( container, 'ms-speed' ) || 5000
			
			
			timer.play( speed )
		})
		
		/*
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		 OPEN MODE
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		*/
		
		$('body').removeClass('loading')
		
})
