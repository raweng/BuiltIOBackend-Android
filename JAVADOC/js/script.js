$(window).load(function(){
	
	$('pre').addClass('prettyprint linenums');
	/**
	 *  initialize prettify to highlight code.
	 */
	! function($) {
	    $(function() {
	        window.prettyPrint && prettyPrint()
	    })
	}(window.jQuery)
})