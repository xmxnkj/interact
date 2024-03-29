(function($) {
	var myflow = $.myflow;

	$.extend(true, myflow.editors, {
		inputEditor : function() {
			var _props, _k, _div, _src, _r;
			this.init = function(props, k, div, src, r) {
				_props = props;
				_k = k;
				_div = div;
				_src = src;
				_r = r;

				$('<input style="width:100%;"/>').val(props[_k].value).change(
						function() {
							props[_k].value = $(this).val();
						}).appendTo('#' + _div);

				$('#' + _div).data('editor', this);
			}
			this.destroy = function() {
				$('#' + _div + ' input').each(function() {
					_props[_k].value = $(this).val();
				});
			}
		},
		selectEditor : function(arg) {
			var _props, _k, _div, _src, _r;
			this.init = function(props, k, div, src, r) {
				_props = props;
				_k = k;
				_div = div;
				_src = src;
				_r = r;

				var sle = $('<select  style="width:100%;"/>').val(
						props[_k].value).change(function() {
					props[_k].value = $(this).val();
				}).appendTo('#' + _div);

				if (typeof arg === 'string') {
					$.ajax({
						type : "GET",
						url : arg,
						success : function(data) {
							var opts = eval(data);
							if (opts && opts.length) {
								for ( var idx = 0; idx < opts.length; idx++) {
									sle.append('<option value="'
											+ opts[idx].value + '">'
											+ opts[idx].name + '</option>');
								}
								sle.val(_props[_k].value);
							}
						}
					});
				} else {
					for ( var idx = 0; idx < arg.length; idx++) {
						sle.append('<option value="' + arg[idx].value + '">'
								+ arg[idx].name + '</option>');
					}
					sle.val(_props[_k].value);
				}

				$('#' + _div).data('editor', this);
			};
			this.destroy = function() {
				$('#' + _div + ' input').each(function() {
					_props[_k].value = $(this).val();
				});
			};
		},
		
		autoSelectUserType : function(arg) {
			var _props, _k, _div, _src, _r;
			this.init = function(props, k, div, src, r) {
				_props = props;
				_k = k;
				_div = div;
				_src = src;
				_r = r;

				var sle = $('<select  style="width:100%;"/>').val(
						props[_k].value).change(function() {
					props[_k].value = $(this).val();
				}).appendTo('#' + _div);

				
				for ( var idx = 0; idx < arg.length; idx++) {
					sle.append('<option value="' + arg[idx].value + '">'
							+ arg[idx].name + '</option>');
				}
				sle.val(_props[_k].value);
				

				$('#' + _div).data('editor', this);
			};
			this.destroy = function() {
				$('#' + _div + ' input').each(function() {
					_props[_k].value = $(this).val();
				});
			};
		},
		
		checkEditor : function() {
			var _props, _k, _div, _src, _r;
			this.init = function(props, k, div, src, r) {
				_props = props;
				_k = k;
				_div = div;
				_src = src;
				_r = r;

				$('<input type="checkbox" checked="checked" value="1"/>').val(props[_k].value).change(
						function() {
							//props[_k].value = $(this).val();
						}).appendTo('#' + _div);

				$('#' + _div).data('editor', this);
			}
			this.destroy = function() {
				$('#' + _div + ' input').each(function() {
					_props[_k].value = $(this).val();
				});
			}
		},
		
		selectActorEditor : function() {
			var _props, _k, _div, _src, _r;
			this.init = function(props, k, div, src, r) {
				_props = props;
				_k = k;
				_div = div;
				_src = src;
				_r = r;
				
				var con = "<table style='width:100%' cellspacing='0' cellpadding='0'><tr><td><input type='text' style='width:100%'></td><td style='width:30px'><input type='button' value='...' style='width:100%'></td></tr></table>";
				$(con).appendTo('#'+_div);
				//$('<input style="width:100%;"/>').val(props[_k].value).change(
				//		function() {
				//			props[_k].value = $(this).val();
				//		}).appendTo('#' + _div);

				$('#' + _div).data('editor', this);
			}
			this.destroy = function() {
				$('#' + _div + ' input').each(function() {
					_props[_k].value = $(this).val();
				});
			}
		}
		
	});

})(jQuery);