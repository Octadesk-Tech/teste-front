$(document).ready(function(){
	var TesteOctadesk = {
		init: function() {
                try {
                    TesteOctadesk.events.place();
                } catch (err) {
                    console.error('[ERROR] ' + err);
                }
        },
        events: {
            place: function() {
                $('.lista-nav li').click(function(){
                  $(this).addClass('ativo');
                    $('.lista-nav li').not(this).removeClass('ativo')
                });
	        }
    	}
	}
    // TesteOctadesk.init();
});