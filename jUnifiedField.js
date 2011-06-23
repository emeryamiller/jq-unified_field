/*
 * Unify places the label for a field within the field much like hint text.  When the user 
 * enters the field, the label text moves to the right, but still within the field, out of
 * the way of the text entered but still visible to identify the purpose of the field.
 */
;(function($) {
	$.fn.unify = function(options) {
		var opts = $.extend({}, $.fn.unify.defaults, options);
		return this.each(function() {
			var $field = $(this);
			var $label = $field.prev('label');
			var field_pos = $field.position();
			var label_pos = $field.position();
			var field_width_offset = $field.outerWidth() - $field.innerWidth();
			var field_height_offset = $field.outerHeight() - $field.innerHeight();
			var starting_position = label_pos.left + field_width_offset + opts.padding_start;
			var ending_position = starting_position + $field.innerWidth() - $label.outerWidth() - opts.padding_end;
			$field.css({
				position: 'absolute',
				top: label_pos.top,
				left: label_pos.left,
				'z-index': 0
			}).focus(function() {
				$label.stop().animate({
					left: ending_position,
					opacity: opts.focus_opacity
				}, opts.focus_speed);
			}).blur(function() {
				$label.stop().animate({
					left: starting_position,
					opacity: opts.opacity
				}, opts.blur_speed);
			});
			$label.css({
				position: 'absolute',
				top: label_pos.top + field_height_offset,
				left: starting_position,
				'z-index': 1,
				opacity: opts.opacity
			});
		});
	};

	$.fn.unify.defaults = {
		focus_speed: 600,
		blur_speed: 600,
		opacity: 0.8,
		focus_opacity: 0.4,
		padding_start: 1,
		padding_end: 3
	}
})(jQuery);
