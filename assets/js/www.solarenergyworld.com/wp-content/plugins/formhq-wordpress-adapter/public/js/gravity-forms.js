jQuery(document).on('gform_post_render', function(event, form_id) {
    //console.log('FormHQ: gform_post_render', event);
    _FormHQ_WP_Event('form_loaded', {
       form_id: form_id,
       form_type: 'gravity-forms'
    });
});