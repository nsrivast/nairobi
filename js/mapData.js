/* 
Loads map data: categories, posts, markers.
*/

var defaultMapOptions = {
  center: { lat: -1.28, lng: 36.82 },
  zoom: 13,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};

var categoryData = [
	{
		id: 0,
		category: "general",
		title: "General",
		color: "orange",
		colorhex: '#ff7f00',
		mapOptions: {
	    center: { lat: -1.277, lng: 36.80 },
	    zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP
	  }
	},
	{
		id: 1,
		category: "microfinance",
		title: "Microfinance Profiles",
		color: "purple",
		colorhex: '#984ea3',
		mapOptions: {
	    center: { lat: -1.275, lng: 36.9 },
	    zoom: 11,
			mapTypeId: google.maps.MapTypeId.ROADMAP
	  }
	},
	{
		id: 2,
		category: "technology",
		title: "Tech & Entrepreneurship",
		color: "red",
		colorhex: '#e41a1c',
		mapOptions: {
	    center: { lat: -1.294, lng: 36.777 },
	    zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
	  }
	},
	{
		id: 3,
		category: "restaurants",
		title: "Restaurants",
		color: "blue",
		colorhex: '#377eb8',
		mapOptions: {
	    center: { lat: -1.28, lng: 36.78 },
	    zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP
	  }
	},
	{
		id: 4,
		category: "geography",
		title: "Geography",
		color: "green",
		colorhex: '#4daf4a',
		mapOptions: {
	    center: { lat: -1.28, lng: 36.1 },
	    zoom: 9,
			mapTypeId: google.maps.MapTypeId.TERRAIN
	  }
	}
];

var postData = [
	{
		id: 0,
		categoryID: 0,
		title: "Welcome",
		description: "What I'm doing in Nairobi this summer.",
		link: "https://nikhilnairobi.wordpress.com/2015/06/15/welcome/"
	},
	{
		id: 1,
		categoryID: 0,
		title: "Across the World",
		description: "Journey to Nairobi and first impressions.",
		link: "https://nikhilnairobi.wordpress.com/2015/06/17/across-the-world/"
	},
	{
		id: 2,
		categoryID: 0,
		title: "Transportation and Conflagration",
		description: "A trip through Nairobi's public transport system and a fire in its biggest market.",
		link: "https://nikhilnairobi.wordpress.com/2015/06/24/transportation-and-conflagration/"
	},
	{
		id: 3,
		categoryID: 0,
		title: "Safety",
		description: "Nairobi's safety issues, from an expat perspective.",
		link: "https://nikhilnairobi.wordpress.com/2015/07/05/safety/"
	},
	{
		id: 4,
		categoryID: 0,
		title: "Obama-Landing",
		description: "President Obama's visit to Nairobi.",
		link: "https://nikhilnairobi.wordpress.com/2015/07/26/obama-landing/"
	},
	{
		id: 5,
		categoryID: 0,
		title: "Expats",
		description: "The expat culture in Nairobi.",
		link: "https://nikhilnairobi.wordpress.com/2015/07/28/expats/"
	},
	{
		id: 6,
		categoryID: 4,
		title: "The Rural Uplands",
		description: "A trip to Aberdares National Park, and a lesson on Kenyan geography.",
		link: "https://nikhilnairobi.wordpress.com/2015/06/28/the-rural-uplands/"
	},
	{
		id: 7,
		categoryID: 4,
		title: "Mount Longonot",
		description: "A trip to Mount Longonot, a crater volcano in the Great Rift Valley.",
		link: "https://nikhilnairobi.wordpress.com/2015/07/12/mount-longonot/"
	},
	{
		id: 8,
		categoryID: 4,
		title: "The Great Mara - Part 1",
		description: "A safari trip to Maasai Mara (text).",
		link: "https://nikhilnairobi.wordpress.com/2015/07/29/the-great-mara/"
	},
	{
		id: 9,
		categoryID: 2,
		title: "Finance, Technology, Agriculture",
		description: "An 'ag-and-fin-tech' conference in Nairobi.",
		link: "https://nikhilnairobi.wordpress.com/2015/06/29/finance-technology-agriculture/"
	},
	{
		id: 10,
		categoryID: 2,
		title: "Data Visualization Class #1",
		description: "My first data visualization class, covering: What is Data Viz? How and when is it commonly used? Why is it relevant?",
		link: "https://nikhilnairobi.wordpress.com/2015/06/30/data-visualization-class-1/"
	},
	{
		id: 11,
		categoryID: 2,
		title: "Data Visualization Class #2",
		description: "My second data visualization class, covering: How does the brain process visual information? Why is that relevant for data visualization?",
		link: "https://nikhilnairobi.wordpress.com/2015/07/02/data-visualization-class-2/"
	},
	{
		id: 12,
		categoryID: 2,
		title: "Data Visualization Class #3",
		description: "My third data visualization class, covering: How can we classify types of data? How can we represent this data using marks and encodings? What are some popular visualizations, their strengths, and their weaknesses?",
		link: "https://nikhilnairobi.wordpress.com/2015/07/08/data-visualization-class-3/"
	},
	{
		id: 13,
		categoryID: 2,
		title: "Data Visualization Class #4",
		description: "My fourth data visualization class, covering: What are basic design principles for data viz? How do style and creativity factor into design?",
		link: "https://nikhilnairobi.wordpress.com/2015/07/09/data-visualization-class-4/"
	},
	{
		id: 14,
		categoryID: 2,
		title: "Data Visualization Class Encore",
		description: "Summary and recap of the class.",
		link: "https://nikhilnairobi.wordpress.com/2015/07/27/data-visualization-encore/"
	},
	{
		id: 15,
		categoryID: 2,
		title: "Class Photos",
		description: "A selection of photographs from final student presentations.",
		link: "https://nikhilnairobi.wordpress.com/2015/08/01/class-photos/"
	},
	{
		id: 16,
		categoryID: 1,
		title: "Francis Maweu",
		description: "",
		link: "https://nikhilnairobi.wordpress.com/2015/06/25/zidisha-borrower-francis-maweu/"
	},
	{
		id: 17,
		categoryID: 1,
		title: "Edson Wandera",
		description: "",
		link: "https://nikhilnairobi.wordpress.com/2015/06/27/zidisha-borrower-edson-wandera/"
	},
	{
		id: 18,
		categoryID: 1,
		title: "Grace Dawo (1)",
		description: "",
		link: "https://nikhilnairobi.wordpress.com/2015/07/01/zidisha-borrower-grace-dawo/"
	},
	{
		id: 19,
		categoryID: 1,
		title: "Caroline Muuna",
		description: "",
		link: "https://nikhilnairobi.wordpress.com/2015/07/02/zidisha-borrower-carolina-muuna/"
	},
	{
		id: 20,
		categoryID: 1,
		title: "Lilian Kimko",
		description: "",
		link: "https://nikhilnairobi.wordpress.com/2015/07/02/zidisha-borrower-liliam-kimko/"
	},
	{
		id: 21,
		categoryID: 1,
		title: "Charles Kiio",
		description: "",
		link: "https://nikhilnairobi.wordpress.com/2015/07/03/zidisha-borrower-charles-kiio/"
	},
	{
		id: 22,
		categoryID: 1,
		title: "Stephen Mungai",
		description: "",
		link: "https://nikhilnairobi.wordpress.com/2015/07/07/zidisha-borrower-stephen-mungai/"
	},
	{
		id: 23,
		categoryID: 1,
		title: "Judith Lukaka",
		description: "",
		link: "https://nikhilnairobi.wordpress.com/2015/07/08/zidisha-borrower-judith-lukaka/"
	},
	{
		id: 24,
		categoryID: 1,
		title: "Josephat Bundi",
		description: "",
		link: "https://nikhilnairobi.wordpress.com/2015/07/08/zidisha-borrower-josephat-bundi/"
	},
	{
		id: 25,
		categoryID: 1,
		title: "Ann Mwaniki",
		description: "",
		link: "https://nikhilnairobi.wordpress.com/2015/07/13/zidisha-borrower-ann-mwaniki/"
	},
	{
		id: 26,
		categoryID: 1,
		title: "Isaiah Githaiga & Mercy Muthoni",
		description: "",
		link: "https://nikhilnairobi.wordpress.com/2015/07/09/zidisha-borrowers-isaiah-githaiga-and-mercy-muthoni/"
	},
	{
		id: 27,
		categoryID: 1,
		title: "Grace Dawo (2)",
		description: "",
		link: "https://nikhilnairobi.wordpress.com/2015/07/15/zidisha-borrower-grace-dawo-2/"
	},
	{
		id: 28,
		categoryID: 1,
		title: "Corsmas Ogumbo",
		description: "",
		link: ""
	},
	{
		id: 29,
		categoryID: 3,
		title: "Nairobi Restaurants and Bars",
		description: "A rundown of the restaurants and bars I visited.",
		link: ""
	},	
	{
		id: 30,
		categoryID: 4,
		title: "The Great Mara - Part 2",
		description: "A safari trip to Maasai Mara (with pictures).",
		link: "https://nikhilnairobi.wordpress.com/2015/08/01/the-great-mara-part-2/"
	},
	{
		id: 31,
		categoryID: 1,
		title: "Reflections on Microfinance Interviews",
		description: "Looking back at my weeks of microfinance profiles.",
		link: "https://nikhilnairobi.wordpress.com/2015/07/29/reflections-on-microfinance-interviews/"
	}
];


var markerData = [
  {
    "id":0,
    "postID":1,
    "name":"Airport",
    "lat":-1.3247645,
    "lng":36.920414
  },
  {
    "id":1,
    "postID":1,
    "name":"Apartment",
    "lat":-1.2896259,
    "lng":36.7849302
  },
  {
    "id":2,
    "postID":1,
    "name":"Jamia Mosque",
    "lat":-1.2834155,
    "lng":36.820668
  },
  {
    "id":3,
    "postID":2,
    "name":"Ambasadeur Hotel",
    "lat":-1.2851907,
    "lng":36.825673
  },
  {
    "id":4,
    "postID":2,
    "name":"Hilton Hotel",
    "lat":-1.2852121,
    "lng":36.8244499
  },
  {
    "id":5,
    "postID":2,
    "name":"Matatu pickup",
    "lat":-1.2856412,
    "lng":36.8245733
  },
  {
    "id":6,
    "postID":2,
    "name":"Odeon Cinema",
    "lat":-1.2831795,
    "lng":36.824702
  },
  {
    "id":7,
    "postID":2,
    "name":"Koja Station",
    "lat":-1.2814204,
    "lng":36.8225884
  },
  {
    "id":8,
    "postID":2,
    "name":"Railway Bus Station",
    "lat":-1.2897117,
    "lng":36.8277812
  },
  {
    "id":9,
    "postID":2,
    "name":"Fire Station",
    "lat":-1.2815787,
    "lng":36.8231544
  },
  {
    "id":10,
    "postID":2,
    "name":"Gikomba Market",
    "lat":-1.28812,
    "lng":36.84149
  },
  {
    "id":11,
    "postID":5,
    "name":"Yaya Centre",
    "lat":-1.2926722,
    "lng":36.7877412
  },
  {
    "id":12,
    "postID":5,
    "name":"Java House Kimathi St",
    "lat":-1.2829811,
    "lng":36.8216443
  },
  {
    "id":13,
    "postID":5,
    "name":"Uchumi Supermarket",
    "lat":-1.3002877,
    "lng":36.7902946
  },
  {
    "id":14,
    "postID":5,
    "name":"Twin Oaks Apartments",
    "lat":-1.29031,
    "lng":36.78857
  },
  {
    "id":15,
    "postID":5,
    "name":"Capital Club",
    "lat":-1.26891,
    "lng":36.80762
  },
  {
    "id":16,
    "postID":5,
    "name":"The Juniper",
    "lat":-1.25969,
    "lng":36.78434
  },
  {
    "id":17,
    "postID":5,
    "name":"Simmer's Bar",
    "lat":-1.2849,
    "lng":36.8208
  },
  {
    "id":18,
    "postID":5,
    "name":"Sankara Nairobi",
    "lat":-1.26253,
    "lng":36.80231
  },
  {
    "id":19,
    "postID":5,
    "name":"Dalberg Offices",
    "lat":-1.26873,
    "lng":36.77441
  },
  {
    "id":20,
    "postID":6,
    "name":"Kereita Falls",
    "lat":-0.96246,
    "lng":36.66
  },
  {
    "id":21,
    "postID":7,
    "name":"Mount Longonot",
    "lat":-0.91251,
    "lng":36.45538
  },
  {
    "id":22,
    "postID":8,
    "name":"Narok",
    "lat":-1.09015,
    "lng":35.87739
  },
  {
    "id":23,
    "postID":8,
    "name":"Mara River",
    "lat":-1.42127,
    "lng":35.05245
  },
  {
    "id":24,
    "postID":8,
    "name":"Talek River",
    "lat":-1.42357,
    "lng":35.08595
  },
  {
    "id":25,
    "postID":8,
    "name":"Mara Intrepid Lodge",
    "lat":-1.41275,
    "lng":35.09912
  },
  {
    "id":26,
    "postID":9,
    "name":"FinTech in Ag Conference",
    "lat":-1.28773,
    "lng":36.76458
  },
  {
    "id":27,
    "postID":10,
    "name":"Brew Bistro Building",
    "lat":-1.29897,
    "lng":36.7654
  },
  {
    "id":28,
    "postID":11,
    "name":"Brew Bistro Building",
    "lat":-1.29897,
    "lng":36.7654
  },
  {
    "id":29,
    "postID":12,
    "name":"Brew Bistro Building",
    "lat":-1.29897,
    "lng":36.7654
  },
  {
    "id":30,
    "postID":13,
    "name":"Brew Bistro Building",
    "lat":-1.29897,
    "lng":36.7654
  },
  {
    "id":31,
    "postID":14,
    "name":"Brew Bistro Building",
    "lat":-1.29897,
    "lng":36.7654
  },
  {
    "id":32,
    "postID":14,
    "name":"iHub",
    "lat":-1.29786,
    "lng":36.79102
  },
  {
    "id":33,
    "postID":15,
    "name":"Brew Bistro Building",
    "lat":-1.29897,
    "lng":36.7654
  },
  {
    "id":34,
    "postID":16,
    "name":"Cyber Caf",
    "lat":-1.3138,
    "lng":36.84685
  },
  {
    "id":35,
    "postID":16,
    "name":"Nyama Choma",
    "lat":-1.31341,
    "lng":36.84614
  },
  {
    "id":36,
    "postID":16,
    "name":"South B Shopping Market",
    "lat":-1.31137,
    "lng":36.83494
  },
  {
    "id":37,
    "postID":17,
    "name":"National Youth Service",
    "lat":-1.25508,
    "lng":36.85333
  },
  {
    "id":38,
    "postID":17,
    "name":"Allsopps Station",
    "lat":-1.24449,
    "lng":36.8681
  },
  {
    "id":39,
    "postID":17,
    "name":"Edson's Store",
    "lat":-1.23834,
    "lng":36.89684
  },
  {
    "id":40,
    "postID":17,
    "name":"Edson's Home",
    "lat":-1.24308,
    "lng":36.89691
  },
  {
    "id":41,
    "postID":17,
    "name":"Faraja Caf",
    "lat":-1.28234,
    "lng":36.82249
  },
  {
    "id":42,
    "postID":17,
    "name":"Central Building",
    "lat":-1.28311,
    "lng":36.82301
  },
  {
    "id":43,
    "postID":17,
    "name":"KICC",
    "lat":-1.28864,
    "lng":36.82321
  },
  {
    "id":44,
    "postID":19,
    "name":"Makadara Stage",
    "lat":-1.45684,
    "lng":36.97504
  },
  {
    "id":45,
    "postID":19,
    "name":"Goat Butcher",
    "lat":-1.47738,
    "lng":36.96124
  },
  {
    "id":46,
    "postID":20,
    "name":"Curtains and Drapes",
    "lat":-1.47735,
    "lng":36.96115
  },
  {
    "id":47,
    "postID":20,
    "name":"Kitengela Bus Station",
    "lat":-1.47642,
    "lng":36.95834
  },
  {
    "id":48,
    "postID":21,
    "name":"Athi River",
    "lat":-1.29089,
    "lng":36.82829
  },
  {
    "id":49,
    "postID":21,
    "name":"Athi River Market",
    "lat":-1.44935,
    "lng":36.9781
  },
  {
    "id":50,
    "postID":21,
    "name":"Roadside Lunch",
    "lat":-1.4483,
    "lng":36.97739
  },
  {
    "id":51,
    "postID":21,
    "name":"Matatu Station",
    "lat":-1.45282,
    "lng":36.98013
  },
  {
    "id":52,
    "postID":22,
    "name":"Juja Main Stage",
    "lat":-1.10668,
    "lng":37.01521
  },
  {
    "id":53,
    "postID":22,
    "name":"JKUAT Stage",
    "lat":-1.10183,
    "lng":37.01423
  },
  {
    "id":54,
    "postID":22,
    "name":"JKUAT Fields",
    "lat":-1.09264,
    "lng":37.01505
  },
  {
    "id":55,
    "postID":22,
    "name":"Stephen's Business",
    "lat":-1.09813,
    "lng":37.017
  },
  {
    "id":56,
    "postID":23,
    "name":"GPO Bus Stop",
    "lat":-1.28585,
    "lng":36.81814
  },
  {
    "id":57,
    "postID":23,
    "name":"City Market",
    "lat":-1.28369,
    "lng":36.81963
  },
  {
    "id":58,
    "postID":23,
    "name":"Market Stalls Centre",
    "lat":-1.28341,
    "lng":36.81993
  },
  {
    "id":59,
    "postID":24,
    "name":"Josephat's Business",
    "lat":-1.09942,
    "lng":37.01601
  },
  {
    "id":60,
    "postID":25,
    "name":"Ann's Home",
    "lat":-1.23703,
    "lng":36.89772
  },
  {
    "id":61,
    "postID":25,
    "name":"Primary School",
    "lat":-1.24088,
    "lng":36.89663
  },
  {
    "id":62,
    "postID":26,
    "name":"Super Shop Deli",
    "lat":-1.1961,
    "lng":36.9245
  },
  {
    "id":63,
    "postID":26,
    "name":"Kahawa Wendani Stage",
    "lat":-1.19602,
    "lng":36.92362
  },
  {
    "id":64,
    "postID":26,
    "name":"Isaiah's Apartment",
    "lat":-1.19777,
    "lng":36.92687
  },
  {
    "id":65,
    "postID":26,
    "name":"Isaiah's Plot",
    "lat":-1.20088,
    "lng":36.93992
  },
  {
    "id":66,
    "postID":27,
    "name":"Grace's Home",
    "lat":-1.2833,
    "lng":36.87658
  },
  {
    "id":67,
    "postID":27,
    "name":"Local Matatu Stop",
    "lat":-1.28405,
    "lng":36.88028
  },
  {
    "id":68,
    "postID":27,
    "name":"Local Primary School",
    "lat":-1.28191,
    "lng":36.87675
  },
  {
    "id":69,
    "postID":27,
    "name":"Apartment Building",
    "lat":-1.28365,
    "lng":36.87323
  },
  {
    "id":70,
    "postID":27,
    "name":"Uhuru Junction",
    "lat":-1.28184,
    "lng":36.87167
  },
  {
    "id":71,
    "postID":29,
    "name":"Capital Club",
    "lat":-1.26891,
    "lng":36.80762
  },
  {
    "id":72,
    "postID":29,
    "name":"Mediteraneo (Italian)",
    "lat":1.26473,
    "lng":36.80317
  },
  {
    "id":73,
    "postID":29,
    "name":"The Juniper",
    "lat":-1.25969,
    "lng":36.78434
  },
  {
    "id":74,
    "postID":29,
    "name":"Pete's (Mexican)",
    "lat":-1.2981,
    "lng":36.79058
  },
  {
    "id":75,
    "postID":29,
    "name":"Ginza (Japanese)",
    "lat":-1.29031,
    "lng":36.78282
  },
  {
    "id":76,
    "postID":29,
    "name":"Open House (Indian)",
    "lat":-1.26408,
    "lng":36.80277
  },
  {
    "id":77,
    "postID":29,
    "name":"Thai House",
    "lat":-1.29957,
    "lng":36.76751
  },
  {
    "id":78,
    "postID":29,
    "name":"Habesha (Ethiopian)",
    "lat":-1.29177,
    "lng":36.77984
  },
  {
    "id":79,
    "postID":29,
    "name":"Ozone Bar",
    "lat":-1.2903,
    "lng":36.77022
  },
  {
    "id":80,
    "postID":29,
    "name":"Chicken Inn",
    "lat":-1.30052,
    "lng":36.79087
  },
  {
    "id":81,
    "postID":30,
    "name":"Mara River",
    "lat":-1.42127,
    "lng":35.05245
  },
  {
    "id":82,
    "postID":30,
    "name":"Talek River",
    "lat":-1.42357,
    "lng":35.08595
  },
  {
    "id":83,
    "postID":28,
    "name":"Lunch with Corsmas",
    "lat":-1.28516,
    "lng":36.82651
  },
  {
    "id":84,
    "postID":28,
    "name":"Machakos Bus Station",
    "lat":-1.28594,
    "lng":36.83515
  },
  {
    "id":85,
    "postID":28,
    "name":"Gikomba Market",
    "lat":-1.28812,
    "lng":36.84149
  }
];