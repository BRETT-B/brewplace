var parkTavernBeers = [];

var parkTavernBeerData = [
			{
				"id": "LPiJ3q",
				"name": "EASTSIDE TRAIL PALE ALE",
				"nameDisplay": "EASTSIDE TRAIL PALE ALE",
				"description": "German Pale malt and Cascade hops",
				"availableId": 1,
				"styleId": 73,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-04-03 14:46:34",
				"updateDate": "2015-04-03 14:46:34",
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 73,
					"categoryId": 6,
					"category": {
						"id": 6,
						"name": "International Ale Styles",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "International-Style Pale Ale",
					"shortName": "International Pale",
					"description": "International-style pale ales range from deep golden to copper in color. The style is characterized by wide range of hop characters unlike fruity, floral and citrus-like American-variety hop character and unlike earthy, herbal English-variety hop character. Moderate to high hop bitterness, flavor, and aroma is evident. International pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
					"ibuMin": "30",
					"ibuMax": "42",
					"abvMin": "4.5",
					"abvMax": "5.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.044",
					"fgMin": "1.008",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:35:08"
				}
			},
			{
				"id": "a39vMi",
				"name": "OLMSTED AMBER ALE",
				"nameDisplay": "OLMSTED AMBER ALE",
				"description": "English Pale malt with Caramunich and Carafa malts and East Kent Goldings hops",
				"availableId": 1,
				"styleId": 32,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-04-03 14:51:36",
				"updateDate": "2015-04-03 14:51:37",
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 32,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Amber/Red Ale",
					"shortName": "Amber",
					"description": "American amber/red ales range from light copper to light brown in color. They are characterized by American-variety hops used to produce the perception of medium hop bitterness, flavor, and medium aroma. Amber ales have medium-high to high maltiness with medium to low caramel character. They should have medium to medium-high body. The style may have low levels of fruityester flavor and aroma. Diacetyl can be either absent or barely perceived at very low levels. Chill haze is allowable at cold temperatures. Slight yeast haze is acceptable for bottle-conditioned products.",
					"ibuMin": "30",
					"ibuMax": "40",
					"abvMin": "4.5",
					"abvMax": "6",
					"srmMin": "11",
					"srmMax": "18",
					"ogMin": "1.048",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:52"
				}
			},
			{
				"id": "j5zUuP",
				"name": "PIEDMONT PILSNER",
				"nameDisplay": "PIEDMONT PILSNER",
				"description": "Weyermann Pilsner malt and Czech Saaz hops",
				"availableId": 1,
				"styleId": 98,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-04-03 14:45:02",
				"updateDate": "2015-04-03 14:45:02",
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 98,
					"categoryId": 8,
					"category": {
						"id": 8,
						"name": "North American Lager",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "American-Style Pilsener",
					"shortName": "American Pilsener",
					"description": "This classic and unique pre-Prohibition American-style Pilsener is straw to deep gold in color. Hop bitterness, flavor and aroma are medium to high, and use of noble-type hops for flavor and aroma is preferred. Up to 25 percent corn and/or rice in the grist should be used. Malt flavor and aroma are medium. This is a light-medium to medium-bodied beer. Sweet corn-like dimethylsulfide (DMS), fruity esters and American hop-derived citrus flavors or aromas should not be perceived. Diacetyl is not acceptable. There should be no chill haze. Competition organizers may wish to subcategorize this style into rice and corn subcategories.",
					"ibuMin": "25",
					"ibuMax": "40",
					"abvMin": "5",
					"abvMax": "6",
					"srmMin": "3",
					"srmMax": "6",
					"ogMin": "1.045",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:40:08"
				}
			},
			{
				"id": "R0KLp1",
				"name": "PT’S IPA",
				"nameDisplay": "PT’S IPA",
				"description": "English Pale and Crystal 155 malts with Cascade, Centennial and Columbus hops",
				"availableId": 1,
				"styleId": 2,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-04-03 14:53:19",
				"updateDate": "2015-04-03 14:53:20",
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 2,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "English-Style India Pale Ale",
					"shortName": "English IPA",
					"description": "Most traditional interpretations of English-style India pale ales are characterized by medium-high hop bitterness with a medium to medium-high alcohol content. Hops from a variety of origins may be used to contribute to a high hopping rate. Earthy and herbal English-variety hop character is the perceived end, but may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer, sometimes with subtle and balanced character of sulfur compounds. This pale gold to deep copper-colored ale has a medium to high, flowery hop aroma and may have a medium to strong hop flavor (in addition to the hop bitterness). English-style India pale ales possess medium maltiness and body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill haze is allowable at cold temperatures. Hops of other origins may be used for bitterness or approximating traditional English character.",
					"ibuMin": "35",
					"ibuMax": "63",
					"abvMin": "5",
					"abvMax": "7",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.05",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:18:33"
				}
			},
			{
				"id": "ogbXfa",
				"name": "SOUTHWEST LAGER",
				"nameDisplay": "SOUTHWEST LAGER",
				"description": "Vienna Lager and Munich malts with Saphir hops",
				"availableId": 1,
				"styleId": 80,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-04-03 14:52:36",
				"updateDate": "2015-04-03 14:52:36",
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 80,
					"categoryId": 7,
					"category": {
						"id": 7,
						"name": "European-germanic Lager",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Vienna-Style Lager",
					"shortName": "Vienna Lager",
					"description": "Beers in this category are reddish brown or copper colored. They are medium in body. The beer is characterized by malty aroma and slight malt sweetness. The malt aroma and flavor should have a notable degree of toasted and/or slightly roasted malt character. Hop bitterness is clean and crisp. Noble-type hop aromas and flavors should be low or mild. Diacetyl, chill haze and ale-like fruity esters should not be perceived.",
					"ibuMin": "22",
					"ibuMax": "28",
					"abvMin": "4.8",
					"abvMax": "5.4",
					"srmMin": "12",
					"srmMax": "16",
					"ogMin": "1.046",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:36:42"
				}
			}
		];

function createBeerList(beerArray, brewery, targetArray){
	for (var i = 0; i < beerArray.length; i++){
		var beer = beerArray[i];

		var label = '';
		if(beer.labels){
			label = beer.labels.large;
		}else{
			label = 'N/A';
		}

		var abv = 0;
		if(beer.abv){
			abv = beer.abv;
		}else{
			abv = 'N/A';
		}

		var temp = new Beer(beer.name, beer.style.name, beer.description, label, abv, brewery);
		targetArray.push(temp);
	}
}
	
function Beer(name, style, description, label, abv, brewery){
	this.name = name;
	this.style = style;
	this.description = description;
	this.label = label;
	this.abv = abv;
	this.brewery = brewery;
}

createBeerList(parkTavernBeerData, 'Park Tavern', parkTavernBeers);

console.log(parkTavernBeers);