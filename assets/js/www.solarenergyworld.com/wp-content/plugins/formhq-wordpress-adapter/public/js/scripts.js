(function () {

	window._FormHQ_Poller = {};

    window._FormHQ_WP_Event = function( eventName, detail ) {
		
		//console.log(eventName, detail);

        var formKey = getFormKey( detail.form_type, detail.form_id );
        var _detail = {
            platform: 'wordpress',
            platform_id: formhq_localized.platform_id,
            id: formKey,
            event: eventName + '.formhq'
        };

        if ( ( eventName == 'form_loaded' ) && !_FormHQueue.hasOwnProperty(formKey) )
            _FormHQueue[formKey] = _detail;

        if ( eventName == 'form_submitted' ) {
            _detail.delay = true;
            _detail.fields = detail.fields || {};
        }

        var event = new CustomEvent( eventName + '.formhq', {
            bubbles: false, 
            cancelable: false, 
            detail: _detail
        });

        document.dispatchEvent(
            event
        );

        if ( inIframe() ) {

            if ( eventName == 'form_submitted' ) {
                for (var i = 0; i < formhq_localized.postmessage_target_origins.length; i++)
                    window.parent.postMessage(_detail, formhq_localized.postmessage_target_origins[i]);
            }

            if ( eventName == 'form_loaded' ) {
	            _FormHQ_Poller[_detail.id + '-attempts'] = 0;
                _FormHQ_Poller[_detail.id] = setInterval(function() {
	                
	                var maxAttempts = 10;
                
                    for (var i = 0; i < formhq_localized.postmessage_target_origins.length; i++)
                        window.parent.postMessage(_detail, formhq_localized.postmessage_target_origins[i]);
                        
                    _FormHQ_Poller[_detail.id + '-attempts']++;
                   
                    if (_FormHQ_Poller[_detail.id + '-attempts'] == maxAttempts) 
                        clearInterval(_FormHQ_Poller[_detail.id]);

                }, 500);
            }

        }

    }
    
    window.addEventListener('message', function(event) {
	
		if (formhq_localized.postmessage_target_origins.indexOf(event.origin) === -1) return;
		
		if (event.data.event == 'form_lookup_detected.formhq')
			clearInterval(_FormHQ_Poller[event.data.id]);
	
	});

    var inIframe = function() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }

    var getFormKey = function( form_type, form_id ) {
        return form_type + ':' + [formhq_localized.site_id, form_id].join('-');
    }

    // CustomEvent Polyfill

    if ( typeof window.CustomEvent === 'function' ) return false;
  
    function CustomEvent ( event, params ) {
		//console.log(event, params);
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent( 'CustomEvent' );
        evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
        return evt;
    }
  
    CustomEvent.prototype = window.Event.prototype;
  
    window.CustomEvent = CustomEvent;

})();
  
