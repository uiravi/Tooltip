# Tooltip with Left, Right, Top, Bottom

### Features:
- Set position as per you choice "Top, Right, Bottom, Left"
- Could pass different class name for each tooltip
- Highly Customizable
- No images used
- Readable CSS and JS, well commented so that you can make your changes as per your requirements
- Well commented CSS
- Used "data" attribute for tooltip content

#### Dependency:
- jQuery and CSS (Could easily modify css as per requirment and colors)

#### How to Create Instances of the Tooltip:
<pre>
<code>
var tooltip = new Tooltip({
	tooltipPosition: "top", //set tooltip position "top, left, right, bottom" (Default is top if nothing here) {remove full line "tooltipPosition: 'top'," if you want default}
	elm: $(".tp")
});

var tooltip1 = new Tooltip({
	tooltipPosition: "right", //set tooltip position "top, left, right, bottom" (Default is top if nothing here)
	elm: $(".tp")
});
</code>
</pre>


#### Instance for default "top" position
<pre>
<code>
var tooltip = new Tooltip({
	elm: $(".tp")
});
</code>
</pre>