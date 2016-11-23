/*
Plugin Name: Tooltip
Dependency: JavaScript, jQuery, CSS 3.0
Complete Reference on: https://github.com/uiravi/Tooltip

Developer: Ravi kumar
Website: http://uiravi.com
*/


function Tooltip(option){
	var $elm = option.elm,
		$tooltip_container = this,
		top = option.tooltipPosition === "top" || "top",
		right = option.tooltipPosition === "right" || false,
		bottom = option.tooltipPosition === "bottom" || false,
		left = option.tooltipPosition === "left" || false;

	this.tooltip = function(){

		var $tpContainer = $("<div class='tooltip transition-hide'></div>").appendTo('body');
			offset = $(this).offset(),
			tpWidth = $(this).width(),
			$tooltip_container = $tpContainer;

		$tpContainer
		.text($(this).attr('data'))
		.addClass("transition-show");
		

		if (right) {
			$tpContainer
			.addClass("tooltip-right")
			.css({
				"left":offset.left + tpWidth + 20,
				"top":offset.top - ($tpContainer.height() - $tpContainer.height() / 2)
			});
			
		}else if(left){
			$tpContainer
				.addClass("tooltip-left")
				.css({
				"left":offset.left - ($tpContainer.width() + 48),
				"top":offset.top - ($tpContainer.height() - $tpContainer.height() / 2)
			});

		}else if(bottom){
			$tpContainer
				.addClass("tooltip-bottom")
				.css({
				"left":offset.left + (tpWidth / 2) - ($tpContainer.width() / 2) - 15,
				"top":offset.top + 40
			});

		}else if(top){
			$tpContainer
				.addClass("tooltip-top")
				.css({
				"left":offset.left + (tpWidth / 2) - ($tpContainer.width() / 2) - 15,
				"top":offset.top - ($tpContainer.height() + 40)
			});
		};
	};

	(function(instance){
		//event binding
		$elm.on("mouseenter", instance.tooltip);
		$elm.on("mouseleave", function(){
			$tooltip_container.remove();
		});
	})(this);
};

var tooltip = new Tooltip({
	tooltipPosition: "bottom", //set tooltip position "top, left, right, bottom" (Default is top if nothing here)
	elm: $(".tp")
});


