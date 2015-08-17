
var map;
var categories;
var posts;
var markers;

// ===
// Helper functions
// ===

function icon(color, light) {
	// [markers from: http://www.googlemapsmarkers.com/]
	return './icons/' + color + '.png';
};

function findByAttr(arr, attr, val) {
	for (i = 0; i < arr.length; i++) {
		if (arr[i][attr] == val) {
			return arr[i];
		}
	}
	return false;
}

function colorMarkers(attr, val, color) {
	// change markers matching attribute value to specified color
	for (i = 0; i < markers.length; i++) {
		if (markers[i][attr].toString() == val) {
			markers[i].setIcon(icon(color));
		}
	}	
};

// ===
// Create category, post, marker items
// ===

function createCategory(c) {
	var cat = $(
		"<div/>", {
			'id': 'category' + c['id'],
			'class': 'category'
		}
	)
	var header = $(
		"<div/>", {
			'id': 'header' + c['id'],
			'class': 'categoryHeader',
			'style': 'color:' + c['colorhex'] + ';',
			'data-id': c['id'],
			'data-color': c['color'],
			html: c['title']
		}
	).append( $(
		"<img/>", {
			'src': icon(c['color']),
			'alt': 'sample-icon',
			'style': 'float:right; text-align:right;'
		}
	));
	header.data('mapOptions', c['mapOptions']);
	cat.append(header);
	
	cat.append( $(
		"<div/>", {
			'id': 'content' + c['id'],
			'class': 'categoryContent',
			'style': 'display:none;'
		}
	));
	$("#categoryContainer").append(cat);
	return cat;
};

function createPost(p) {
	var category = findByAttr(categoryData, 'id', p['categoryID']);	
	var post = $( 
		"<div/>", { 
			'id': 'post' + p['id'],
			'class': 'post',
			'data-id': p['id'],
			'data-color': category['color'],
			'data-categoryID': p['categoryID']
		}
	).append( $( 
		"<div/>", { 
			'class': 'postLink', 
			html: ' <a href="' + p['link'] + '" target="_blank">[read post]</a>'
		}
	) ).append( $( 
		"<div/>", { 
			'class': 'postTitle', 
			html: p['title'] 
		}
	) ).append( $( 
		"<div/>", { 
			'class': 'postDescription', 
			html: p['description'] 
		}
	) );
	$("#content" + p['categoryID']).append(post);		
	return post;
};

function createMarker(m) {
	var color = $("#post" + m['postID'])[0].getAttribute("data-color");
	
	var marker = new google.maps.Marker({
		position: {
			lat: parseFloat( m['lat'] ), 
			lng: parseFloat( m['lng'] )
		},
		map: map,
		icon: icon(color),
		color: color,
		title: m['name'],
		postID: m['postID'],
		categoryID: $("#post" + m['postID'])[0].getAttribute("data-categoryID"),
		cursor: 'crosshair'
	});
	return marker;
};

// ===
// Actions for category, post, marker items
// ===

function categoryActions() {
	// On hover: highlight this box, highlight category markers
	$(".categoryHeader").hover(
		function() { 
			colorMarkers('categoryID', this.getAttribute("data-id"), 'yellow');
			$(this).addClass('categoryHeaderHighlight');
		},
		function() { 
			colorMarkers('categoryID', this.getAttribute("data-id"), this.getAttribute('data-color'));
			$(this).removeClass('categoryHeaderHighlight');
		}
	);
	
	// On click: open/close posts, re-zoom map
	$(".categoryHeader").click(function() {
		map.setOptions($(this).data('mapOptions'));
		$( "#content" + this.getAttribute('data-id')).toggle( 300 );
	});	
}

function postActions() {
	// On hover: highlight my box, highlight post markers
	$(".post").hover(
		function() { 
			colorMarkers('postID', this.getAttribute('data-id'), 'yellow');
			$(this).addClass('postHighlight');
		},
		function() { 
			colorMarkers('postID', this.getAttribute('data-id'), this.getAttribute('data-color'));
			$(this).removeClass('postHighlight');
		}
	);
};

function markerActions() {
	for (i = 0; i < markers.length; i++) {

		// On hover: highlight post markers, highlight categoryHeader
		google.maps.event.addListener(markers[i], 'mouseover', function() {
			$('#header' + this.categoryID).addClass('categoryHeaderHighlight');
			$('#post' + this.postID).addClass('postHighlight');
			colorMarkers('postID', this.postID, 'yellow');
		});
		google.maps.event.addListener(markers[i], 'mouseout', function() {
			$('#header' + this.categoryID).removeClass('categoryHeaderHighlight');
			$('#post' + this.postID).removeClass('postHighlight');
			colorMarkers('postID', this.postID, this.color);
		});
	}
};

// ===
// Create items, set events
// ===

$(document).ready(function() {
	
	categories = categoryData.map(createCategory);
	posts = postData.map(createPost);
		
  map = new google.maps.Map(document.getElementById('map'), defaultMapOptions);
	markers = markerData.map(createMarker);
	
	categoryActions();
	postActions();
	markerActions();

});
