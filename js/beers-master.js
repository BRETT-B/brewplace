var eventideBeers = [];
var fiveSeasonsBeers = [];
var maxLagersBeers = [];
var mondayNightBeers = [];
var oDempseysBeers = [];
var orpheusBeers = [];
var parkTavernBeers = [];
var pontoonBeers = [];
var redBrickBeers = [];
var secondSelfBeers = [];
var sweetWaterBeers = [];
var wreckingBarBeers = [];

var eventideBeerData = [
			{
				"id": "de0K1O",
				"name": "Dry Irish Stout",
				"nameDisplay": "Dry Irish Stout",
				"description": "Our rendition of the Dry Irish Stout follows with the traditional light body with dark flavors, however, we incorporated a little more ABV into the style and moved the dark flavors up to balance it out. The recipe has just a hint of Coffee and a bit stronger finish with the same, if not better, drinkability that has made this style a favorite among beer drinker for generations. Our target for this modified Dry Irish style is for the typical stout drinkers that want something a little more American. In house we like to call it the Dry American Stout.",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 23,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-04-23 12:51:56",
				"updateDate": "2012-04-23 12:51:56",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 23,
					"categoryId": 2,
					"category": {
						"id": 2,
						"name": "Irish Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Classic Irish-Style Dry Stout",
					"shortName": "Dry Irish Stout",
					"description": "Dry stouts have an initial malt and light caramel flavor profile with a distinctive dry-roasted bitterness in the finish. Dry stouts achieve a dry-roasted character through the use of roasted barley. The emphasis of coffee-like roasted barley and a moderate degree of roasted malt aromas define much of the character. Some slight acidity may be perceived but is not necessary. European hop aroma and flavor should be low or not perceived. Dry stouts have medium-light to medium body. Fruity esters are minimal and overshadowed by malt, high hop bitterness, and roasted barley character. Diacetyl (butterscotch) should be very low or not perceived. Head retention and rich character should be part of its visual character.",
					"ibuMin": "30",
					"ibuMax": "40",
					"abvMin": "3.8",
					"abvMax": "5",
					"srmMin": "40",
					"srmMax": "40",
					"ogMin": "1.038",
					"fgMin": "1.008",
					"fgMax": "1.012",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:23:51"
				}
			},
			{
				"id": "sHRwKG",
				"name": "Hefe",
				"nameDisplay": "Hefe",
				"description": "A summertime and, admittedly for us, year round favorite, the German Hefeweizen  has been a sessionable delight for ages. One of the first beers we brewed, our hefe is brewed in traditional German style with ingredients to match. Fermenting at just the right temperature imparts the signature banana esters which make this beer a sweet treat to be enjoyed by everyone. Add an orange slice to give it a citris zest and you’ve got a great beer for those hot summer days or a little ray of sunshine on a cloudy day. We like it and know you’ll love it.",
				"glasswareId": 9,
				"availableId": 1,
				"styleId": 48,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-04-23 12:53:00",
				"updateDate": "2012-04-23 12:53:00",
				"glass": {
					"id": 9,
					"name": "Weizen",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 48,
					"categoryId": 4,
					"category": {
						"id": 4,
						"name": "German Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "South German-Style Hefeweizen / Hefeweissbier",
					"shortName": "Hefeweizen",
					"description": "The aroma and flavor of a Weissbier with yeast is decidedly fruity and phenolic. The phenolic characteristics are often described as clove-, nutmeg-like, mildly smoke-like or even vanilla-like. Banana-like esters should be present at low to medium-high levels. These beers are made with at least 50 percent malted wheat, and hop rates are quite low. Hop flavor and aroma are absent or present at very low levels. Weissbier is well attenuated and very highly carbonated and a medium to full bodied beer. The color is very pale to pale amber. Because yeast is present, the beer will have yeast flavor and a characteristically fuller mouthfeel and may be appropriately very cloudy. No diacetyl should be perceived.",
					"ibuMin": "10",
					"ibuMax": "15",
					"abvMin": "4.9",
					"abvMax": "5.5",
					"srmMin": "3",
					"srmMax": "9",
					"ogMin": "1.047",
					"fgMin": "1.008",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:29:27"
				}
			},
			{
				"id": "hWAQSX",
				"name": "Kattegat",
				"nameDisplay": "Kattegat",
				"description": "Our Baltic Porter has a clean profile with flavors reminiscent of rich, dark sugar, vinous and herbal notes, some dark fruit, and just enough dark chocolate and coffee to bring everything together. We are very excited to present our new interpretation of this old style to you, and we look forward to raising a glass with you soon.",
				"abv": "7",
				"ibu": "27",
				"styleId": 104,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2016-02-17 15:19:50",
				"updateDate": "2016-02-17 15:19:50",
				"style": {
					"id": 104,
					"categoryId": 9,
					"category": {
						"id": 9,
						"name": "Other Lager",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Baltic-Style Porter",
					"shortName": "Baltic Porter",
					"description": "A true smooth cold-fermented and cold lagered beer, brewed with lager yeast. Black to very deep ruby/garnet in color. Overall, Baltic Porters have a very smooth lagered character with distinctive caramelized sugars, licorice and chocolate-like character of roasted malts and dark sugars. Roasted dark malts should not contribute bitterness, or astringent roast character. A low degree of smokiness from malt may be evident. Debitterized roast malts are best used for this style. Because of its alcoholic strength, aroma may include gentle (low) lager fruitiness (berries, grapes, plums, not banana; ale-like fruitiness from warm temperature fermentation is not appropriate), complex alcohols, cocoa-like, roast malt (and sometimes coffee-like roast barley, yet not bitter). Hop aroma is very low, though a hint of floral or sweet hop aroma can complement aromatics and flavor without dominance. Baltic Porters are not hop bitter dominated and expressed as low to medium-low. Baltic porters range from having medium to full body complemented with a medium-low to medium level of malty sweetness. No butterscotch-like diacetyl or sweet corn-like dimethylsulfide (DMS) should be apparent in aroma or flavor.",
					"ibuMin": "35",
					"ibuMax": "40",
					"abvMin": "7.5",
					"abvMax": "9",
					"srmMin": "40",
					"srmMax": "40",
					"ogMin": "1.072",
					"fgMin": "1.016",
					"fgMax": "1.022",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:41:46"
				}
			},
			{
				"id": "Fxj8Ap",
				"name": "Kölsch Style Ale",
				"nameDisplay": "Kölsch Style Ale",
				"description": "For those who are not familiar with the Kölsch style ale, it is only legally allowed to be produced in Cologne, Germany. That is why, when you do see it, it is mostly “Kölsch Style” instead of just “Kölsch”. We understand Cologne, it is a truly good style of beer with all the light flavors that you would expect in a pilsner and only half the trouble to make. We are only troubled by the fact that because you regulated this style most of the rest of the world hasn’t heard of it. We are here to change that, whether you like it or not.  We took the traditional “Kölsch Style” and worked it up a bit with some special hop additions. We did not go noble with the hop profile but instead took it in a direction that paired better with the bready flavor of the pilsen and the touch of wheat grains that make up the back bone of this brew. This style is perfect on those hot summer days, but it’s is also so refreshing that it is great anytime. So good in fact that it may coin the phrase “Eventide Style Kölsch”, and don’t worry Cologne, we’ll let you call it that too.",
				"glasswareId": 13,
				"availableId": 1,
				"styleId": 45,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-04-23 12:52:33",
				"updateDate": "2012-04-23 12:52:33",
				"glass": {
					"id": 13,
					"name": "Willi",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 45,
					"categoryId": 4,
					"category": {
						"id": 4,
						"name": "German Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "German-Style Kölsch / Köln-Style Kölsch",
					"shortName": "Kölsch",
					"description": "Kölsch is warm fermented and aged at cold temperatures (German ale or alt-style beer). Kölsch is characterized by a golden to straw color and a slightly dry, subtly sweet softness on the palate, yet crisp. Good, dense head retention is desirable. Light pearapple-Riesling wine-like fruitiness may be apparent, but is not necessary for this style. Caramel character should not be evident. The body is light to medium-light. This beer has low hop flavor and aroma with medium bitterness. Wheat can be used in brewing this beer. Ale yeast is used for fermentation, though lager yeast is sometimes used in the bottle or final cold conditioning process. Fruity esters should be minimally perceived, if at all. Chill haze should be absent.",
					"ibuMin": "18",
					"ibuMax": "25",
					"abvMin": "4.8",
					"abvMax": "5.3",
					"srmMin": "4",
					"srmMax": "6",
					"ogMin": "1.042",
					"fgMin": "1.006",
					"fgMax": "1.01",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:29:04"
				}
			},
			{
				"id": "UbAkTh",
				"name": "Red Ale",
				"nameDisplay": "Red Ale",
				"description": "The mission: create a red ale in the same vein as the best red ales available on the market…but better. Sure, no problem. Named for the wife of one of our founders (she’s the one who requested it), the “Red Headed Haley” is our interpretation of an American amber ale. Brewed with multiple malts and hops, we worked to bridge the gap between a Belgian and American amber. The result was an immensely drinkable beer with notes of both styles and new flavors unfamiliar to both (we may have discovered quarks, anyone know what one tastes like?). This has had the benefit of bottle conditioning and aging which has, almost surprisingly, only improved it. We can’t wait for you to taste it.",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 32,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-04-23 12:53:22",
				"updateDate": "2012-04-23 12:53:22",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
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
				"id": "vRGThD",
				"name": "Snowpocalypse",
				"nameDisplay": "Snowpocalypse",
				"abv": "9",
				"styleId": 62,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/vRGThD/upload_SNnAmf-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/vRGThD/upload_SNnAmf-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/vRGThD/upload_SNnAmf-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-02-05 12:29:05",
				"updateDate": "2015-12-17 20:21:29",
				"style": {
					"id": 62,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style Pale Ale",
					"shortName": "Belgian Pale",
					"description": "Belgian-style pale ales are characterized by low but noticeable hop bitterness, flavor, and aroma. Light to medium body and low malt aroma are typical. They are light amber to deep amber in color. Noble-type hops are commonly used. Low to medium fruity esters are evident in aroma and flavor. Low levels of phenolic spiciness from yeast byproducts may be perceived. Low caramel or toasted malt flavor is okay. Diacetyl should not be perceived. Chill haze is allowable at cold temperatures.",
					"ibuMin": "20",
					"ibuMax": "30",
					"abvMin": "4",
					"abvMax": "6",
					"srmMin": "6",
					"srmMax": "12",
					"ogMin": "1.044",
					"fgMin": "1.008",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:32:06"
				}
			},
			{
				"id": "xLYnM5",
				"name": "The \"A\"",
				"nameDisplay": "The \"A\"",
				"abv": "7",
				"ibu": "65",
				"styleId": 30,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2016-05-18 15:40:10",
				"updateDate": "2016-05-18 15:40:10",
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			}
		];

var fiveSeasonsBeerData = [
			{
				"id": "W28hWM",
				"name": "10W-30 Imperial Oatmeal Stout",
				"nameDisplay": "10W-30 Imperial Oatmeal Stout",
				"description": "This is a BIG imperial stout full of flavors of roasted espresso, dark chocolate, dark cherries and deep smoky notes. It will keep your engine running smooth all winter.",
				"styleId": 21,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:59:38",
				"updateDate": "2013-05-08 23:59:38",
				"style": {
					"id": 21,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Oatmeal Stout",
					"shortName": "Oatmeal Stout",
					"description": "Oatmeal stouts include oatmeal in their grist, resulting in a pleasant, full flavor and a smooth profile that is rich without being grainy. A roasted malt character which is caramel-like and chocolate-like should be evident - smooth and not bitter. Coffee-like roasted barley and roasted malt aromas (chocolate and nut-like) are prominent. Color is dark brown to black. Bitterness is moderate, not high. Hop flavor and aroma are optional but should not overpower the overall balance if present. This is a medium- to full- bodied beer, with minimal fruity esters. Diacetyl should be absent or at extremely low levels. Original gravity range and alcohol levels are indicative of English tradition of oatmeal stout.",
					"ibuMin": "20",
					"ibuMax": "40",
					"abvMin": "3.8",
					"abvMax": "6",
					"srmMin": "20",
					"srmMax": "20",
					"ogMin": "1.038",
					"fgMin": "1.008",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:22:53"
				}
			},
			{
				"id": "IiW61L",
				"name": "1972",
				"nameDisplay": "1972",
				"description": "This is part of the Serenade Series, where we brew a beer inspired by a particular musician or group, and then serenade, the yeast with that music during the brewing, fermentation and conditioning of the beer. The beer was inspired by and then serenaded to the Grateful Dead's musical zenith, the year 1972. The entire 72 tour was played to the yeast-with some very interesting results!",
				"styleId": 14,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:50:26",
				"updateDate": "2015-05-07 14:12:29",
				"style": {
					"id": 14,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Strong Ale",
					"shortName": "Strong Ale",
					"description": "Light amber to mid-range brown in color, strong ales are medium to full bodied with a malty sweetness and may have low levels of roast malt character. Hop aroma should be minimal and flavor can vary from none to medium in character intensity. Fruity-ester flavors and aromas can contribute to the character of this ale. Bitterness should be minimal but evident and balanced with malt and/or caramel-like sweetness. Alcohol types can be varied and complex. A rich, often sweet and complex estery character may be evident. Very low levels of diacetyl are acceptable. Chill haze is acceptable at low temperatures. (This style may often be split into two categories, strong and very strong.)",
					"ibuMin": "30",
					"ibuMax": "65",
					"abvMin": "7",
					"abvMax": "11",
					"srmMin": "8",
					"srmMax": "21",
					"ogMin": "1.06",
					"fgMin": "1.014",
					"fgMax": "1.04",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:21:05"
				}
			},
			{
				"id": "j2RJTc",
				"name": "5 Seasons 285 Gridlock ESB",
				"nameDisplay": "5 Seasons 285 Gridlock ESB",
				"description": "This is a traditional English style ale brewed with four malts and four hops. The complex malt character and deep copper color balances with the mild English hops delivering a smooth finish. Alcohol runs about 5% and the carbonation is relatively low. Enjoy a few! Cheers!",
				"abv": "5",
				"styleId": 5,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 18:27:36",
				"updateDate": "2015-05-28 18:51:42",
				"style": {
					"id": 5,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Extra Special Bitter",
					"shortName": "ESB",
					"description": "Extra special bitter possesses medium to strong hop aroma, flavor, and bitterness. The residual malt and defining sweetness of this richly flavored, full-bodied bitter is more pronounced than in other styles of bitter. It is light amber to copper colored with medium to medium-high bitterness. Mild carbonation traditionally characterizes draft-cask versions, but in bottled versions, a slight increase in carbon dioxide content is acceptable. Fruity-ester character is acceptable in aroma and flavor. Diacetyl (butterscotch character) is acceptable and characteristic when at very low levels. The absence of diacetyl is also acceptable. Chill haze is allowable at cold temperatures. English or American hops may be used. (English and American hop character may be specified in subcategories.)",
					"ibuMin": "30",
					"ibuMax": "45",
					"abvMin": "4.8",
					"abvMax": "5.8",
					"srmMin": "8",
					"srmMax": "14",
					"ogMin": "1.046",
					"fgMin": "1.01",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:19:20"
				}
			},
			{
				"id": "od3MEn",
				"name": "5 Seasons Bavarian Ecstasy Festbier",
				"nameDisplay": "5 Seasons Bavarian Ecstasy Festbier",
				"description": "Kind of like our Münchner, only BIGGER! This full bodied, malty, mellow amber lager is brewed only once a year, to celebrate the Oktoberfest. Munich & Pilsen malts make this beer big and smooth, while German CaraMunich malt gives it a rich amber hue. This style is also known as Märzenbier and Weis’n Bier. Best enjoyed in a one liter Mass with three fingers of foamy head!",
				"availableId": 7,
				"styleId": 96,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 18:31:52",
				"updateDate": "2013-05-09 00:15:46",
				"available": {
					"id": 7,
					"name": "Fall",
					"description": "Available during the fall months."
				},
				"style": {
					"id": 96,
					"categoryId": 8,
					"category": {
						"id": 8,
						"name": "North American Lager",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "American-Style Amber (Low Calorie) Lager",
					"shortName": "American Amber Lager",
					"description": "These beers are pale golden to amber in color, light to medium-light in body, and high in carbonation. Calorie level should not exceed 125 per 12 ounce serving. Corn, rice, or other grain or sugar adjuncts may be used but all malt formulations are also made. Malt and hop flavors are mild yet evident. Hop bitterness is evident and hop aroma may be negligible to evident. Light fruity esters are acceptable. Chill haze and diacetyl should be absent.",
					"ibuMin": "8",
					"ibuMax": "15",
					"abvMin": "3.5",
					"abvMax": "4.4",
					"srmMin": "4",
					"srmMax": "12",
					"ogMin": "1.024",
					"fgMin": "1.002",
					"fgMax": "1.008",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:39:59"
				}
			},
			{
				"id": "LMA7d3",
				"name": "AAAH... Bacon",
				"nameDisplay": "AAAH... Bacon",
				"description": "Our 8% signature Scotch Ale sports a smooth complex malt character with a slight roasted note, sweet balance and subtle hop finish. What could possibly make this beer more enjoyable? Bacon, of course. Whole leaf Hallertau hops, hickory chips and bacon were smoked with staves from our Heaven Hill Bourbon barrel, then added to the cask before secondary fermentation.",
				"abv": "8",
				"styleId": 15,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 18:28:05",
				"updateDate": "2013-05-09 00:12:03",
				"style": {
					"id": 15,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Scotch Ale",
					"shortName": "Scotch Ale",
					"description": "Scotch ales are overwhelmingly malty and full-bodied. Perception of hop bitterness is very low. Hop flavor and aroma are very low or nonexistent. Color ranges from deep copper to brown. The clean alcohol flavor balances the rich and dominant sweet maltiness in flavor and aroma. A caramel character is often a part of the profile. Dark roasted malt flavors and aroma may be evident at low levels. If present, fruity esters are generally at low aromatic and flavor levels. Low diacetyl levels are acceptable. Chill haze is allowable at cold temperatures. Though there is little evidence suggesting that traditionally made strong Scotch ales exhibited peat smoke character, the current marketplace offers many Scotch Ales with peat or smoke character present at low to medium levels. Thus a peaty/smoky character may be evident at low levels (ales with medium or higher smoke character would be considered a smoke flavored beer and considered in another category). Scotch Ales may be split into two subcategories: Traditional (no smoke character) and Peated (low level of peat smoke character).",
					"ibuMin": "25",
					"ibuMax": "35",
					"abvMin": "6.2",
					"abvMax": "8",
					"srmMin": "15",
					"srmMax": "30",
					"ogMin": "1.072",
					"fgMin": "1.016",
					"fgMax": "1.028",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:21:11"
				}
			},
			{
				"id": "xfsvmU",
				"name": "Abbey Winter Wheat",
				"nameDisplay": "Abbey Winter Wheat",
				"description": "Bananas and cloves tickle your nose. Rum raisins and licorice dance on your tongue. Joy and happiness abound. This bee was born a Weizenbock, but it grew up a strong Belgian Dubbel. Happy Holidays.",
				"availableId": 8,
				"styleId": 58,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 18:28:19",
				"updateDate": "2014-10-13 17:41:17",
				"available": {
					"id": 8,
					"name": "Winter",
					"description": "Available during the winter months."
				},
				"style": {
					"id": 58,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style Dubbel",
					"shortName": "Belgian Dubbel",
					"description": "This medium-bodied, red to dark brown colored ale has a malty sweetness and chocolate-like caramel aroma. A light hop flavor and/or aroma is acceptable. Dubbels are also characterized by low-medium to medium bitterness. No diacetyl is acceptable. Yeastgenerated fruity esters (especially banana) are appropriate at low levels. Head retention is dense and mousse-like. Chill haze is acceptable at low serving temperatures. Often bottle conditioned a slight yeast haze and flavor may be evident.",
					"ibuMin": "20",
					"ibuMax": "30",
					"abvMin": "6.25",
					"abvMax": "7.5",
					"srmMin": "16",
					"srmMax": "36",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:31:45"
				}
			},
			{
				"id": "Zzbjvv",
				"name": "Afterglow Flanders Golden Ale",
				"nameDisplay": "Afterglow Flanders Golden Ale",
				"description": "This is a special brew that Brewmaster Glen Sprouse first formulated and brewed for his wedding in 2001. It is brewed with a Saison yeast that is very attenuative. It is also dosed with a british ale yeast late in primary fermentation to \"clean it up a little\" and then an Abbey yeast is added for secondary fermentation. The base malt is all German Pilsener and Munich Malt (as is the typical practice of most of the high quality Belgian brewers of pale beers) with a bit of red winter wheat thrown in for body and mouthfeel and just a touch of coriander for the finish. We use a little Belgian Light Candi Sugar and a little Special B Malt to add to the Belgian character. Five mash rests are employed to improve the clarity, pH and distribution of sugars. And, four hop additions are made in the boil using a combination of German, Styrian and Czech Hops. This beer gets considerably better with about six months to a year under its belt. 5 Seasons will be serving it throughout this period, slowly meting out the kegs on a monthly basis to ensure it lasts until next year's batch is ready.",
				"abv": "8",
				"availableId": 4,
				"styleId": 36,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 18:28:30",
				"updateDate": "2014-10-09 13:50:04",
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 36,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Golden or Blonde Ale",
					"shortName": "Blonde",
					"description": "Golden or Blonde ales are straw to golden blonde in color. They have a crisp, dry palate, light to medium body, and light malt sweetness. Low to medium hop aroma may be present but does not dominate. Bitterness is low to medium. Fruity esters may be perceived but do not predominate. Diacetyl should not be perceived. Chill haze should be absent.",
					"ibuMin": "15",
					"ibuMax": "25",
					"abvMin": "4",
					"abvMax": "5",
					"srmMin": "3",
					"srmMax": "7",
					"ogMin": "1.045",
					"fgMin": "1.008",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:27:26"
				}
			},
			{
				"id": "8LrVfn",
				"name": "AK-47 English Pub Draft Ale",
				"nameDisplay": "AK-47 English Pub Draft Ale",
				"description": "Mild Ales are a popular British pub style beer. Ours is crisp with a touch of hop flavor, a light, smooth malt character and a dry finish. Although lighter in body it has a nice combination of flavors. This style of beer is often referred to as the “elixir of life for the salt of the earth” as it is widely consumed in the pubs of England.",
				"styleId": 10,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:00:02",
				"updateDate": "2013-05-09 00:00:02",
				"style": {
					"id": 10,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "English-Style Pale Mild Ale",
					"shortName": "English Pale Mild",
					"description": "English pale mild ales range from golden to amber in color. Malt flavor dominates the flavor profile with little hop bitterness or flavor. Hop aroma can be light. Very low diacetyl flavors may be appropriate in this low-alcohol beer. Fruity-ester level is very low. Chill haze is allowable at cold temperatures.",
					"ibuMin": "10",
					"ibuMax": "20",
					"abvMin": "3.2",
					"abvMax": "4",
					"srmMin": "8",
					"srmMax": "17",
					"ogMin": "1.03",
					"fgMin": "1.004",
					"fgMax": "1.008",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:20:35"
				}
			},
			{
				"id": "CJKY5M",
				"name": "All Good",
				"nameDisplay": "All Good",
				"description": "All Good starts with our robust porter aged in the finest Heaven Hill Bourbon barrel for three months. Once in the cask, we cooked up some sugar and added Trappist yeast and a lot of patience. All Good is malty with slight Belgian fruit notes, a hint of vanilla and oak, and warmth from bourbon traces.",
				"abv": "9",
				"availableId": 2,
				"styleId": 19,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 18:28:46",
				"updateDate": "2014-10-20 19:57:28",
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 19,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Robust Porter",
					"shortName": "Robust Porter",
					"description": "Robust porters are black in color and have a roast malt flavor, often reminiscent of cocoa, but no roast barley flavor. These porters have a sharp bitterness of black malt without a highly burnt/charcoal flavor. Caramel and other malt sweetness should be present and in harmony with other distinguishing porter characters. Robust porters range from medium to full in body and have a malty sweetness. Hop bitterness is medium to high, with hop aroma and flavor ranging from negligible to medium. Diacetyl is acceptable at very low levels. Fruity esters should be evident, balanced with roast malt and hop bitterness.",
					"ibuMin": "25",
					"ibuMax": "40",
					"abvMin": "5",
					"abvMax": "6.5",
					"srmMin": "30",
					"srmMax": "30",
					"ogMin": "1.045",
					"fgMin": "1.008",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:21:45"
				}
			},
			{
				"id": "v2EuAm",
				"name": "Amber Alert",
				"nameDisplay": "Amber Alert",
				"description": "Alert: This Amber Ale has a deep garnet red hue. The juicy malt backbone is balanced by the citrusy character of the Centennial hops. You should try this one. It’s for your own safety.",
				"styleId": 32,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:50:48",
				"updateDate": "2013-05-08 23:50:48",
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
				"id": "kfaJpE",
				"name": "ASB (American Special Bitter)",
				"nameDisplay": "ASB (American Special Bitter)",
				"description": "This is an American Version of a classic English ESB ale.   Copper colored with a beautiful floral, citrus aroma from ‘dry hopping’ it with American Ahtanum whole leaf hops.  A great beer to enjoy with friends.  \r\n\r\nThis beer does not have a name--create your own for it!",
				"styleId": 5,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:00:46",
				"updateDate": "2015-03-03 20:26:35",
				"style": {
					"id": 5,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Extra Special Bitter",
					"shortName": "ESB",
					"description": "Extra special bitter possesses medium to strong hop aroma, flavor, and bitterness. The residual malt and defining sweetness of this richly flavored, full-bodied bitter is more pronounced than in other styles of bitter. It is light amber to copper colored with medium to medium-high bitterness. Mild carbonation traditionally characterizes draft-cask versions, but in bottled versions, a slight increase in carbon dioxide content is acceptable. Fruity-ester character is acceptable in aroma and flavor. Diacetyl (butterscotch character) is acceptable and characteristic when at very low levels. The absence of diacetyl is also acceptable. Chill haze is allowable at cold temperatures. English or American hops may be used. (English and American hop character may be specified in subcategories.)",
					"ibuMin": "30",
					"ibuMax": "45",
					"abvMin": "4.8",
					"abvMax": "5.8",
					"srmMin": "8",
					"srmMax": "14",
					"ogMin": "1.046",
					"fgMin": "1.01",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:19:20"
				}
			},
			{
				"id": "XLxiKD",
				"name": "Black Beauty",
				"nameDisplay": "Black Beauty",
				"description": "Black Beauty is a big Belgian Dubbel - but brewed with rye. \r\n\r\nIt is velvety smooth, chocolatey, has undertones of toffee and rum, and finishes with a dry, spiciness from the rye.\r\n\r\nThe yeast comes directly from an old Trappist monastery in Belgium and imparts a wonderfully complex character to the beer.\r\n\r\nI made Chef Dave make me our own traditional dark Belgian candi sugar to add to the complexity.  This beer was inspired by the music of Miles Davis. I actually placed speakers right by the fermentation tank and \"serenaded\" the yeast with Miles' music while it fermented the beer. Outta sight, man!",
				"styleId": 58,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:51:23",
				"updateDate": "2015-05-22 01:36:27",
				"style": {
					"id": 58,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style Dubbel",
					"shortName": "Belgian Dubbel",
					"description": "This medium-bodied, red to dark brown colored ale has a malty sweetness and chocolate-like caramel aroma. A light hop flavor and/or aroma is acceptable. Dubbels are also characterized by low-medium to medium bitterness. No diacetyl is acceptable. Yeastgenerated fruity esters (especially banana) are appropriate at low levels. Head retention is dense and mousse-like. Chill haze is acceptable at low serving temperatures. Often bottle conditioned a slight yeast haze and flavor may be evident.",
					"ibuMin": "20",
					"ibuMax": "30",
					"abvMin": "6.25",
					"abvMax": "7.5",
					"srmMin": "16",
					"srmMax": "36",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:31:45"
				}
			},
			{
				"id": "MzJ7yf",
				"name": "Black Hole American Stout",
				"nameDisplay": "Black Hole American Stout",
				"description": "American Stouts are somewhat bigger, bolder versions of dry Irish stouts. Ours is filled with rich flavors of espresso and roasted coffee beans soon followed by dark, bittersweet chocolate. A firm bitterness cuts through the caramel sweetness of the malt. Black Hole American Stout is not just dark and opaque, it actually seems to absorb all light and matter that approaches it! So suck down a pint of the Black Hole before it sucks you in!",
				"styleId": 42,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:01:10",
				"updateDate": "2013-05-09 00:01:10",
				"style": {
					"id": 42,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Stout",
					"shortName": "American Stout",
					"description": "Initial low to medium malt sweetness with a degree of caramel, chocolate and/or roasted coffee flavor with a distinctive dryroasted bitterness in the finish. Coffee-like roasted barley and roasted malt aromas are prominent. Some slight roasted malt acidity is permissible and a medium- to full-bodied mouthfeel is appropriate. Hop bitterness may be moderate to high. Hop aroma and flavor is moderate to high, often with American citrus-type and/or resiny hop character. The perception of fruity esters is low. Roasted malt/barley astringency may be low but not excessive. Diacetyl (butterscotch) should be negligible or not perceived. Head retention is excellent.",
					"ibuMin": "35",
					"ibuMax": "60",
					"abvMin": "5.7",
					"abvMax": "8.8",
					"srmMin": "40",
					"srmMax": "40",
					"ogMin": "1.05",
					"fgMin": "1.01",
					"fgMax": "1.022",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:28:43"
				}
			},
			{
				"id": "9fgWTe",
				"name": "Bombshell Blonde Ale",
				"nameDisplay": "Bombshell Blonde Ale",
				"description": "OK, the jokes were too easy when it came to naming this one - so we took it easy on all of the blondes out there. The Bombshell is golden in color, light in body and very refreshing.\r\n\r\nFeel free to add your own blonde joke. At your own risk.",
				"styleId": 36,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:51:47",
				"updateDate": "2013-05-08 23:51:48",
				"style": {
					"id": 36,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Golden or Blonde Ale",
					"shortName": "Blonde",
					"description": "Golden or Blonde ales are straw to golden blonde in color. They have a crisp, dry palate, light to medium body, and light malt sweetness. Low to medium hop aroma may be present but does not dominate. Bitterness is low to medium. Fruity esters may be perceived but do not predominate. Diacetyl should not be perceived. Chill haze should be absent.",
					"ibuMin": "15",
					"ibuMax": "25",
					"abvMin": "4",
					"abvMax": "5",
					"srmMin": "3",
					"srmMax": "7",
					"ogMin": "1.045",
					"fgMin": "1.008",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:27:26"
				}
			},
			{
				"id": "zJ1w86",
				"name": "BR-549 Pale Ale",
				"nameDisplay": "BR-549 Pale Ale",
				"description": "An American Pale Ale - but brewed exclusively with British barley.\r\n\r\nIt is copper in color and has a nice sweetness from the malted barley. A citrusy aroma comes from the American whole leaf hops added in bags sitting right inside the serving tank (called ‘dry hopping’). \r\n\r\nOh, where does the name come from? It was Junior Samples’ phone number from the ol’ Hee Haw show.\r\n(Junior used to live in these parts actually.) And I really, really like Hee Haw.",
				"styleId": 25,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:01:34",
				"updateDate": "2014-10-14 17:21:11",
				"style": {
					"id": 25,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Pale Ale",
					"shortName": "American Pale",
					"description": "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
					"ibuMin": "30",
					"ibuMax": "42",
					"abvMin": "4.5",
					"abvMax": "5.6",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.044",
					"fgMin": "1.008",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:25:18"
				}
			},
			{
				"id": "lzPKd5",
				"name": "Bunker Hill Pale Ale",
				"nameDisplay": "Bunker Hill Pale Ale",
				"description": "An amber, deep copper color with a nice hop aroma. This beer is brewed with all imported British barley - Maris Otter floor-malted pale malt and Hugh Baird crystal malt. But the hops are all American. And the barley and hops are fighting for your taste buds in this beer, waging a gustatory battle.",
				"styleId": 25,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:52:06",
				"updateDate": "2013-05-08 23:52:07",
				"style": {
					"id": 25,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Pale Ale",
					"shortName": "American Pale",
					"description": "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
					"ibuMin": "30",
					"ibuMax": "42",
					"abvMin": "4.5",
					"abvMax": "5.6",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.044",
					"fgMin": "1.008",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:25:18"
				}
			},
			{
				"id": "bckkHX",
				"name": "Clark Kent British Mild",
				"nameDisplay": "Clark Kent British Mild",
				"styleId": 10,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:02:08",
				"updateDate": "2013-05-09 00:02:09",
				"style": {
					"id": 10,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "English-Style Pale Mild Ale",
					"shortName": "English Pale Mild",
					"description": "English pale mild ales range from golden to amber in color. Malt flavor dominates the flavor profile with little hop bitterness or flavor. Hop aroma can be light. Very low diacetyl flavors may be appropriate in this low-alcohol beer. Fruity-ester level is very low. Chill haze is allowable at cold temperatures.",
					"ibuMin": "10",
					"ibuMax": "20",
					"abvMin": "3.2",
					"abvMax": "4",
					"srmMin": "8",
					"srmMax": "17",
					"ogMin": "1.03",
					"fgMin": "1.004",
					"fgMax": "1.008",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:20:35"
				}
			},
			{
				"id": "OJ88mW",
				"name": "Cloud Nine Barleywine",
				"nameDisplay": "Cloud Nine Barleywine",
				"description": "That’s where you’ll be after one of these.  Rich, deep, mysterious.  Malty with a big, fruity aroma.  This beer is excess in a glass.",
				"styleId": 34,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:52:27",
				"updateDate": "2013-05-08 23:52:27",
				"style": {
					"id": 34,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Barley Wine Ale",
					"shortName": "American Barleywine",
					"description": "American style barley wines range from amber to deep copper-garnet in color and have a full body and high residual malty sweetness. Complexity of alcohols and fruity-ester characters are often high and counterbalanced by assertive bitterness and extraordinary alcohol content. Hop aroma and flavor are at medium to very high levels. American type hops are often used but not necessary for this style. Very low levels of diacetyl may be acceptable. A caramel and/or toffee aroma and flavor are often part of the character. Characters indicating oxidation, such as vinous (sometimes sherry-like) aromas and/or flavors, are not generally acceptable in American-style Barley Wine Ale, however if a low level of age-induced oxidation character harmonizes and enhances the overall experience this can be regarded favorably. Chill haze is allowable at cold temperatures.",
					"ibuMin": "60",
					"ibuMax": "100",
					"abvMin": "8.4",
					"abvMax": "12",
					"srmMin": "11",
					"srmMax": "22",
					"ogMin": "1.09",
					"fgMin": "1.024",
					"fgMax": "1.028",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:27:08"
				}
			},
			{
				"id": "DwTYQy",
				"name": "Coltrane Belgian Ale",
				"nameDisplay": "Coltrane Belgian Ale",
				"description": "The new release in the Serenade Series, this beer was inspired by the music of John Coltrane, the greatest jazz musician of all-time. Among other things, it was brewed with quinoa, raisins and rosemary. (The rosemary comes from Hembree Farm in Roswell, a small, local, organic farm where we take the spent grain left over from the brewing process to be composted.) It was fermented with a Belgian Trappist yeast which adds deep fruit notes and spicy flavors. The music of John Coltrane serenaded the yeast the entire six weeks the beer spent in the fermentation tank which made it extra funky!",
				"styleId": 70,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:02:44",
				"updateDate": "2015-04-17 15:10:32",
				"style": {
					"id": 70,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Other Belgian-Style Ales",
					"shortName": "Belgian Ale",
					"description": "Recognizing the uniqueness and traditions of several other styles of Belgian Ales, the beers entered in this category will be assessed on the merits that they do not fit existing style guidelines and information that the brewer provides explaining the history and tradition of the style. Balance of character is a key component when assessing these beers. Barrel or wood-aged entries in competitions may be directed to other categories by competition director. In competitions the brewer must provide the historical or regional tradition of the style, or his interpretation of the style, in order to be assessed properly by the judges.",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:33:05"
				}
			},
			{
				"id": "0cqwvx",
				"name": "Connemara Irish Red Ale",
				"nameDisplay": "Connemara Irish Red Ale",
				"description": "This beer is a traditional Irish Red Ale inspired by the savage beauty of western Ireland and its friendly people. \r\n\r\nIt has a deep amber, ruby color and a rich, smooth malt character. Notes of caramel and toasted malt persist. \r\n\r\nTales of appearances of fairies and leprechauns abound in the mountains of the Connemara, \r\nso who knows what will happen after enjoying a pint of this magical brew.",
				"styleId": 22,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:52:45",
				"updateDate": "2013-05-08 23:52:46",
				"style": {
					"id": 22,
					"categoryId": 2,
					"category": {
						"id": 2,
						"name": "Irish Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Irish-Style Red Ale",
					"shortName": "Irish Red",
					"description": "Irish-style red ales range from light red-amber-copper to light brown in color. These ales have a medium hop bitterness and flavor. They often don't have hop aroma. Irish-style red ales have low to medium candy-like caramel malt sweetness and may have a balanced subtle degree of roast barley or roast malt character and complexity.  Irish-style Red Ales have a medium body. The style may have low levels of fruity-ester flavor and aroma. Diacetyl should be absent or at very low levels. Chill haze is allowable at cold temperatures. Slight yeast haze is acceptable for bottle-conditioned products.",
					"ibuMin": "20",
					"ibuMax": "28",
					"abvMin": "4",
					"abvMax": "4.5",
					"srmMin": "11",
					"srmMax": "18",
					"ogMin": "1.04",
					"fgMin": "1.01",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:23:38"
				}
			},
			{
				"id": "qGCMaP",
				"name": "Crazy Ralph’s Nut Brown Ale",
				"nameDisplay": "Crazy Ralph’s Nut Brown Ale",
				"description": "Brewed with floor-malted Maris Otter barley from England and six other specialty grains, this beer has notes of toffee, caramel and toasted biscuits. We also took some of the barley and toasted it in our ovens to bring out a nutty character.",
				"styleId": 37,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:03:08",
				"updateDate": "2013-05-09 00:03:08",
				"style": {
					"id": 37,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Brown Ale",
					"shortName": "American Brown",
					"description": "American brown ales range from deep copper to brown in color. Roasted malt caramel-like and chocolate-like characters should be of medium intensity in both flavor and aroma. American brown ales have evident low to medium hop flavor and aroma, medium to high hop bitterness, and a medium body. Estery and fruity-ester characters should be subdued. Diacetyl should not be perceived. Chill haze is allowable at cold temperatures.",
					"ibuMin": "25",
					"ibuMax": "45",
					"abvMin": "4",
					"abvMax": "6.4",
					"srmMin": "15",
					"srmMax": "26",
					"ogMin": "1.04",
					"fgMin": "1.01",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:27:35"
				}
			},
			{
				"id": "cwZl5O",
				"name": "Crouching Tiger (Hidden Poulet) Saison",
				"nameDisplay": "Crouching Tiger (Hidden Poulet) Saison",
				"description": "Brewed with European Pilsner malt, German wheat malt and a hefty dose of turbinado sugar in the kettle, this beer clocks in at  over 9% abv. Despite this it has a dry finish and is very drinkable. The traditional Belgian yeast packs this beer with tropical fruit flavors, a mysterious earthiness and an inviting spiciness. In addition, we added grains of paradise, coriander and the peels of fresh clementines. After fermentation and conditioning we then aged the beer for 3 months in a red wine barrel from Tiger Mountain Vineyards before bottling. The barrel aging added a prominent red wine character, a beautiful color, a nice oak backbone and a mysterious mustiness.",
				"styleId": 72,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:53:10",
				"updateDate": "2014-10-10 19:50:24",
				"style": {
					"id": 72,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "French & Belgian-Style Saison",
					"shortName": "Saison",
					"description": "Beers in this category are golden to deep amber in color. There may be quite a variety of characters within this style. Generally: They are light to medium in body. Malt aroma is low to medium-low. Esters are medium to high in  aroma, while, complex alcohols, herbs, spices, low Brettanomyces character and even clove and smoke-like phenolics may or may not be evident in the overall balanced beer. Hop aroma and flavor may be at low to medium levels. Malt flavor is low but provides foundation for the overall balance. Hop bitterness is moderate to moderately assertive. Herb and/or spice flavors, including black pepper-like notes, may or may not be evident. Fruitiness from fermentation is generally in character. A balanced small amount of sour or acidic flavors is acceptable when in balance with other components. Earthy, cellar-like, musty aromas are okay. Diacetyl should not be perceived. Chill or slight yeast haze is okay. Often bottle conditioned with some yeast character and high carbonation. French & Belgian-Style Saison may have Brettanomyces characters that are slightly acidity, fruity, horsey, goaty and/or leather-like.",
					"ibuMin": "20",
					"ibuMax": "40",
					"abvMin": "4.5",
					"abvMax": "8.5",
					"srmMin": "4",
					"srmMax": "14",
					"ogMin": "1.055",
					"fgMin": "1.004",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:34:55"
				}
			},
			{
				"id": "SZvAjq",
				"name": "Dark Star Stout",
				"nameDisplay": "Dark Star Stout",
				"description": "The second offering in the Serenade Series, this is a traditional dry Irish Stout. It has a deep, dark, mysterious color. \r\n\r\nFlavors of expresso and chocolate dominate yet a subtle smoky character persists in the background. (There is no coffee or chocolate in there, it’s just the roasted barley.) This recipe was voted Best Stout in the world at the World Beer Cup 2000. This one’s for all you Stout Heads.",
				"styleId": 23,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:03:39",
				"updateDate": "2015-04-17 17:32:40",
				"style": {
					"id": 23,
					"categoryId": 2,
					"category": {
						"id": 2,
						"name": "Irish Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Classic Irish-Style Dry Stout",
					"shortName": "Dry Irish Stout",
					"description": "Dry stouts have an initial malt and light caramel flavor profile with a distinctive dry-roasted bitterness in the finish. Dry stouts achieve a dry-roasted character through the use of roasted barley. The emphasis of coffee-like roasted barley and a moderate degree of roasted malt aromas define much of the character. Some slight acidity may be perceived but is not necessary. European hop aroma and flavor should be low or not perceived. Dry stouts have medium-light to medium body. Fruity esters are minimal and overshadowed by malt, high hop bitterness, and roasted barley character. Diacetyl (butterscotch) should be very low or not perceived. Head retention and rich character should be part of its visual character.",
					"ibuMin": "30",
					"ibuMax": "40",
					"abvMin": "3.8",
					"abvMax": "5",
					"srmMin": "40",
					"srmMax": "40",
					"ogMin": "1.038",
					"fgMin": "1.008",
					"fgMax": "1.012",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:23:51"
				}
			},
			{
				"id": "FGIZEp",
				"name": "Dark White Ale",
				"nameDisplay": "Dark White Ale",
				"description": "We barrowed our Venus (white) yeast to make this malty ale with hints of bakers' chocolate and traditional orange peel. We simply call this the high gravity beer the Dark White.",
				"styleId": 125,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:53:38",
				"updateDate": "2013-05-08 23:53:38",
				"style": {
					"id": 125,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Specialty Beer",
					"shortName": "Specialty",
					"description": "These beers are brewed using unusual fermentable sugars, grains and starches that contribute to alcohol content other than, or in addition to, malted barley. Nuts generally have some degree of fermentables, thus beers brewed with nuts would appropriately be entered in this category. The distinctive characters of these special ingredients should be evident either in the aroma, flavor or overall balance of the beer, but not necessarily in overpowering quantities. For example, maple syrup or potatoes would be considered unusual. Rice, corn, or wheat are not considered unusual. Special ingredients must be listed when competing. A statement by the brewer explaining the special nature of the beer, ingredient(s) and achieved character is essential in order for fair assessment in competitions. If this beer is a classic style with some specialty ingredient(s), the brewer should also specify the classic style. Guidelines for competing: Spiced beers using unusual fermentables should be entered in the experimental category. Fruit beers using unusual fermentables should be entered in the fruit beer category.",
					"ibuMax": "100",
					"abvMin": "2.5",
					"abvMax": "25",
					"srmMin": "1",
					"srmMax": "100",
					"ogMin": "1.03",
					"fgMin": "1.006",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:44:53"
				}
			},
			{
				"id": "4tdytH",
				"name": "Doctor Moran’s Dunkelweizen",
				"nameDisplay": "Doctor Moran’s Dunkelweizen",
				"description": "A classic German-style dark wheat beer brewed with German wheat, crystal wheat, pale malt and chocolate malt, German hops and a German yeast. It is very flavorful with big notes of toffee, banana, clove and chocolate. It is unfiltered, and therefore cloudy, as is traditional. Please ask your server or bartender if you would like a slice of lemon served with it. Prost!",
				"styleId": 52,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:04:05",
				"updateDate": "2013-05-09 00:04:05",
				"style": {
					"id": 52,
					"categoryId": 4,
					"category": {
						"id": 4,
						"name": "German Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "South German-Style Dunkel Weizen / Dunkel Weissbier",
					"shortName": "Dunkelweizen",
					"description": "This beer style is characterized by a distinct sweet maltiness and a chocolate-like character from roasted malt. Estery and phenolic elements of this Weissbier should be evident but subdued. Color can range from copper-brown to dark brown. Dunkel Weissbier is well attenuated and very highly carbonated, and hop bitterness is low. Hop flavor and aroma are absent. Usually dark barley malts are used in conjunction with dark cara or color malts, and the percentage of wheat malt is at least 50 percent. If this is served with yeast, the beer may be appropriately very cloudy. No diacetyl should be perceived.",
					"ibuMin": "10",
					"ibuMax": "15",
					"abvMin": "4.8",
					"abvMax": "5.4",
					"srmMin": "10",
					"srmMax": "19",
					"ogMin": "1.048",
					"fgMin": "1.008",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:30:09"
				}
			},
			{
				"id": "ra1NOG",
				"name": "Ed’s German Lager",
				"nameDisplay": "Ed’s German Lager",
				"description": "This a golden German lager. A Dortmunder Export. Very drinkable. It is brewed with all German malts, German hops and a German lager yeast. On the lighter side yet very tasty.",
				"styleId": 79,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:54:00",
				"updateDate": "2013-05-08 23:54:00",
				"style": {
					"id": 79,
					"categoryId": 7,
					"category": {
						"id": 7,
						"name": "European-germanic Lager",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Dortmunder / European-Style Export",
					"shortName": "Dortmunder",
					"description": "Dortmunder has medium hop bitterness. Hop flavor and aroma from noble hops are perceptible but low. Sweet malt flavor can be low and should not be caramel-like. The color of this style is straw to deep golden. The body will be medium bodied. Fruity esters, chill haze, and diacetyl should not be perceived.",
					"ibuMin": "23",
					"ibuMax": "29",
					"abvMin": "5",
					"abvMax": "6",
					"srmMin": "3",
					"srmMax": "6",
					"ogMin": "1.048",
					"fgMin": "1.01",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:36:34"
				}
			},
			{
				"id": "hDMn2i",
				"name": "Espresso Black Hole Stout",
				"nameDisplay": "Espresso Black Hole Stout",
				"description": "This is the Black Hole Stout with 5 different types of espresso added. The rich, roasted notes of the coffee marry the dark flavors of the Stout creating an immense combination of flavors. So stay up all night and get sucked in to the Espresso Black Hole – or even better, wake up to the day with one!",
				"styleId": 123,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:04:28",
				"updateDate": "2013-05-09 00:04:28",
				"style": {
					"id": 123,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Coffee-Flavored Beer",
					"shortName": "Coffee Beer",
					"description": "Coffee beers use coffee in any of its forms other than or in addition to hops to create a distinct (ranging from subtle to intense) character. Under hopping allows coffee to contribute to the flavor profile while not becoming excessively bitter. If this beer is a classic style with coffee flavor, the brewer should specify the classic style.",
					"ibuMin": "15",
					"ibuMax": "40",
					"abvMin": "2.5",
					"abvMax": "12",
					"srmMin": "8",
					"srmMax": "50",
					"ogMin": "1.03",
					"fgMin": "1.006",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:44:40"
				}
			},
			{
				"id": "TtkBXh",
				"name": "Flying Monkeys (Vliegende Aapen) Golden Ale",
				"nameDisplay": "Flying Monkeys (Vliegende Aapen) Golden Ale",
				"description": "This is a Belgian-style Golden Ale. It has a pale gold color, is soft on the palette and has an intriguing spiciness imparted by the Belgian yeast. It is unfiltered and, therefore, cloudy in appearance. (Don’t panic, that is just yeast – which is mainly vitamin B – and we don’t charge extra for it.) \r\n\r\nIf the flying monkeys scene scared you in the Wizard of Oz this beer will calm your nerves. \r\n\r\nAnd bonus points if you order this beer in the Flemish.",
				"styleId": 36,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:54:38",
				"updateDate": "2013-05-08 23:54:38",
				"style": {
					"id": 36,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Golden or Blonde Ale",
					"shortName": "Blonde",
					"description": "Golden or Blonde ales are straw to golden blonde in color. They have a crisp, dry palate, light to medium body, and light malt sweetness. Low to medium hop aroma may be present but does not dominate. Bitterness is low to medium. Fruity esters may be perceived but do not predominate. Diacetyl should not be perceived. Chill haze should be absent.",
					"ibuMin": "15",
					"ibuMax": "25",
					"abvMin": "4",
					"abvMax": "5",
					"srmMin": "3",
					"srmMax": "7",
					"ogMin": "1.045",
					"fgMin": "1.008",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:27:26"
				}
			},
			{
				"id": "JX5bC9",
				"name": "Freudian Slip Vienna Lager",
				"nameDisplay": "Freudian Slip Vienna Lager",
				"description": "Subconsciously you desire this beer. This beautiful, stunning lager is nice to look at in its tall, thin, shapely glass. It has a light amber color, like a strawberry blonde. It has a firm, supple, creamy head. It is smooth, but with great body. It’s malty, sweet aroma lingers like a lover’s scent on a pillow. It will leave you wanting, desiring more. (How’s that for some Freudian Slips?)\r\n\r\nBut seriously, it is brewed with German malted barley, European noble hops and lagered for two months. Enjoy.",
				"styleId": 80,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:04:53",
				"updateDate": "2015-04-24 15:02:08",
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
			},
			{
				"id": "6DSzh8",
				"name": "GA Peach Wheat Beer",
				"nameDisplay": "GA Peach Wheat Beer",
				"description": "You might be a redneck if you drink this beer…\r\nAn American Wheat beer with 300 lbs of fresh GA peaches right from the farm into the tank! A great beer for these southern hot summer days and nights.",
				"styleId": 119,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:54:59",
				"updateDate": "2013-05-08 23:54:59",
				"style": {
					"id": 119,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Fruit Beer",
					"shortName": "Fruit Beer",
					"description": "Fruit beers are any beers using fruit or fruit extracts as an adjunct in either, the mash, kettle, primary or secondary fermentation providing obvious (ranging from subtle to intense), yet harmonious, fruit qualities. Fruit qualities should not be overpowered by hop character. If a fruit (such as juniper berry) has an herbal or spice quality, it is more appropriate to consider it in the herb and spice beers category. Acidic bacterial (not wild yeast) fermentation characters may be evident (but not necessary) they would contribute to acidity and enhance fruity balance. Clear or hazy beer is acceptable in appearance. A statement by the brewer explaining what fruits are used is essential in order for fair assessment in competitions. If this beer is a classic style with fruit, the brewer should also specify the classic style.",
					"ibuMin": "5",
					"ibuMax": "70",
					"abvMin": "2.5",
					"abvMax": "12",
					"srmMin": "5",
					"srmMax": "50",
					"ogMin": "1.03",
					"fgMin": "1.006",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:44:21"
				}
			},
			{
				"id": "vqoPLa",
				"name": "Golden Number Ale",
				"nameDisplay": "Golden Number Ale",
				"description": "A golden ale is a delicate balance of malt and hops. To achieve this perfect balance, the ratio of malt and hops is based upon the actual golden number, the Fibonacci Sequence, or Phi as the Greeks knew it. This number’s pervasive appearance throughout nature creates a sense of balance, harmony and beauty in art, architecture, composition, space – and now beer! Some believe this number is a universal constant of design, the signature of God. (Some believe it is a perfect ratio of malt and hops.)  And for those of you playing along at home, the actual number is 1.6180339887…..",
				"styleId": 36,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:05:17",
				"updateDate": "2013-05-09 00:05:17",
				"style": {
					"id": 36,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Golden or Blonde Ale",
					"shortName": "Blonde",
					"description": "Golden or Blonde ales are straw to golden blonde in color. They have a crisp, dry palate, light to medium body, and light malt sweetness. Low to medium hop aroma may be present but does not dominate. Bitterness is low to medium. Fruity esters may be perceived but do not predominate. Diacetyl should not be perceived. Chill haze should be absent.",
					"ibuMin": "15",
					"ibuMax": "25",
					"abvMin": "4",
					"abvMax": "5",
					"srmMin": "3",
					"srmMax": "7",
					"ogMin": "1.045",
					"fgMin": "1.008",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:27:26"
				}
			},
			{
				"id": "iXBnqZ",
				"name": "Haiku Belgian Trippel",
				"nameDisplay": "Haiku Belgian Trippel",
				"description": "Tripels are one of the most beautiful, wonderful beers ever brewed by man. There is just something majestic about them. No simple beer description could capture that. So I had to write a haiku for the description.\r\n\r\ngolden gift from God\r\nsweet, honeysuckle, spice, fruit\r\npour me another!",
				"styleId": 59,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:55:19",
				"updateDate": "2013-05-08 23:55:19",
				"style": {
					"id": 59,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style Tripel",
					"shortName": "Belgian Tripel",
					"description": "Tripels are often characterized by a complex, sometimes mild spicy character. Clove-like phenolic flavor and aroma may be evident at extremely low levels. Yeast-generated  fruity esters, including banana, are also common, but not necessary. These pale/light-colored ales may finish sweet, though any sweet finish should be light. The beer is characteristically medium and clean in body with an equalizing hop/malt balance and a perception of medium to medium high hop bitterness. Traditional Belgian Tripels are often well attenuated. Brewing sugar may be used to lighten the perception of body. Its sweetness will come from very pale malts. There should not be character from any roasted or dark malts. Low hop flavor is acceptable. Alcohol strength and flavor should be perceived as evident. Head retention is dense and mousse-like. Chill haze is acceptable at low serving temperatures. Traditional Tripels are bottle conditioned, may exhibit slight yeast haze but the yeast should not be intentionally roused. Oxidative character if evident in aged Tripels should be mild and pleasant.",
					"ibuMin": "20",
					"ibuMax": "45",
					"abvMin": "7",
					"abvMax": "10",
					"srmMin": "4",
					"srmMax": "9",
					"ogMin": "1.07",
					"fgMin": "1.01",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:31:50"
				}
			},
			{
				"id": "YAXDV1",
				"name": "High-5 Root Beer",
				"nameDisplay": "High-5 Root Beer",
				"description": "We brew our own all-natural, hand crafted root beer right here. It’s made with cane sugar, brown sugar,     vanilla bean, star anise, cinnamon, cardamom, juniper berries, toasted coriander and hops.\r\n\r\nThere is no caffeine.  Save room for a float!",
				"styleId": 139,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:05:44",
				"updateDate": "2013-05-09 00:05:44",
				"style": {
					"id": 139,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Non-Alcoholic (Beer) Malt Beverages",
					"shortName": "Non-Alcoholic",
					"description": "Non-alcoholic (NA) malt beverages should emulate the character of a previously listed category/subcategory designation but without the alcohol (less than 0.5 percent). Non-alcoholic (beer) malt beverages will inherently have a profile lacking the complexity and balance of flavors which can be attributed to alcohol. They should accordingly not be assessed negatively for reasons related to the absence of alcohol.",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:47:18"
				}
			},
			{
				"id": "Kquc00",
				"name": "La Fin du Poulet Saison",
				"nameDisplay": "La Fin du Poulet Saison",
				"description": "Brewed with European Pilsner malt, German wheat malt and a hefty dose of turbinado sugar in the kettle, this beer clocks in at a hefty 9.14% abv. Despite its strength it has a dry finish and is very drinkable. The traditional Belgian yeast packs this beer with tropical fruit flavors, a mysterious earthiness and an inviting spiciness. In addition, we added grains of paradise, coriander and the peels of fresh clementines. Phil Farrell - a local homebrewer and beer freak – brewed this with me for a “pro-am” competition.",
				"abv": "9.14",
				"styleId": 72,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:55:41",
				"updateDate": "2015-05-22 01:39:36",
				"style": {
					"id": 72,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "French & Belgian-Style Saison",
					"shortName": "Saison",
					"description": "Beers in this category are golden to deep amber in color. There may be quite a variety of characters within this style. Generally: They are light to medium in body. Malt aroma is low to medium-low. Esters are medium to high in  aroma, while, complex alcohols, herbs, spices, low Brettanomyces character and even clove and smoke-like phenolics may or may not be evident in the overall balanced beer. Hop aroma and flavor may be at low to medium levels. Malt flavor is low but provides foundation for the overall balance. Hop bitterness is moderate to moderately assertive. Herb and/or spice flavors, including black pepper-like notes, may or may not be evident. Fruitiness from fermentation is generally in character. A balanced small amount of sour or acidic flavors is acceptable when in balance with other components. Earthy, cellar-like, musty aromas are okay. Diacetyl should not be perceived. Chill or slight yeast haze is okay. Often bottle conditioned with some yeast character and high carbonation. French & Belgian-Style Saison may have Brettanomyces characters that are slightly acidity, fruity, horsey, goaty and/or leather-like.",
					"ibuMin": "20",
					"ibuMax": "40",
					"abvMin": "4.5",
					"abvMax": "8.5",
					"srmMin": "4",
					"srmMax": "14",
					"ogMin": "1.055",
					"fgMin": "1.004",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:34:55"
				}
			},
			{
				"id": "AUG1eS",
				"name": "Lord Barfly’s Re-Session Ale",
				"nameDisplay": "Lord Barfly’s Re-Session Ale",
				"description": "Let’s celebrate the economy by raising a pint! This is a traditional British session beer – a beer brewed to slightly lower alcohol levels where one can drink several pints in a “session” at the pub. It is made exclusively with the finest English barley and only whole leaf Willamette hops. It is then dry-hopped in the serving tank for a wonderful floral aroma and texture.  Cheers!",
				"styleId": 108,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:06:08",
				"updateDate": "2014-10-14 17:19:43",
				"style": {
					"id": 108,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Session Beer",
					"shortName": "Session",
					"description": "Any style of beer can be made lower in strength than described in the classic style guidelines. The goal should be to reach a balance between the style's character and the lower alcohol content. Drinkability is a character in the overall balance of these beers. Beers in this category must not exceed 4.1% alcohol by weight (5.1% alcohol by volume).",
					"ibuMin": "10",
					"ibuMax": "30",
					"abvMin": "4",
					"abvMax": "5.1",
					"srmMin": "2",
					"srmMax": "2",
					"ogMin": "1.034",
					"fgMin": "1.004",
					"fgMax": "1.01",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:42:20"
				}
			},
			{
				"id": "xAdQ9R",
				"name": "Mechanical Failure Scotch Ale (aka The Dreaded Crossthreaded Wee Heavy)",
				"nameDisplay": "Mechanical Failure Scotch Ale (aka The Dreaded Crossthreaded Wee Heavy)",
				"description": "This beer was a joy to brew. We started with Golden Promise barley, a strain of barley only grown in Scotland and used by the world’s great single malt Scotch distillers. We then smoked some barley over a peat fire out back. The peat was shipped directly from Ireland. The smoked malt adds a peaty, earthy (and smoky) depth and complexity to the beer. The beer is then allowed to age, or lager, for over a month at 32 degrees in order for the flavors to really come together.\r\n\r\nIt would have been pouring a week earlier if a piece on the serving tank had not broken. That was quite obviously Dennis’ fault. I would never have crossthreaded that piece. Never.",
				"styleId": 8,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:56:05",
				"updateDate": "2013-05-08 23:56:05",
				"style": {
					"id": 8,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Scottish-Style Heavy Ale",
					"shortName": "Scottish Heavy",
					"description": "Scottish heavy ale is moderate in strength and dominated by a smooth, sweet maltiness balanced with low, but perceptible, hop bitterness. Hop flavor or aroma should not be perceived. Scottish heavy ale will have a medium degree of malty, caramel-like, soft and chewy character in flavor and mouthfeel. It has medium body, and fruity esters are very low, if evident. Yeast characters such as diacetyl (butterscotch) and sulfuriness are acceptable at very low levels. The color will range from golden amber to deep brown. Bottled versions of this traditional draft beer may contain higher amounts of carbon dioxide than is typical for mildly carbonated draft versions. Chill haze is acceptable at low temperatures. Though there is little evidence suggesting that traditionally made Scottish-style heavy ales exhibited peat smoke character, the current marketplace offers many Scottish-style heavy ales with peat or smoke character present at low to medium levels. Thus a peaty/smoky character may be evident at low to medium levels (ales with medium-high or higher smoke character would be considered a smoke flavored beer and considered in another category). Scottish-style heavy ales may be split into two subcategories: Traditional (no smoke character) and Peated (low level of peat smoke character).",
					"ibuMin": "12",
					"ibuMax": "20",
					"abvMin": "3.5",
					"abvMax": "4",
					"srmMin": "10",
					"srmMax": "19",
					"ogMin": "1.035",
					"fgMin": "1.01",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:19:48"
				}
			},
			{
				"id": "mnypnt",
				"name": "Mighty Aphrodite Imperial White Beer Cask",
				"nameDisplay": "Mighty Aphrodite Imperial White Beer Cask",
				"description": "This is a bigger version of our Venus (both invoke the powers of the Goddess of Love). Brewed with European Pilsner malt, German wheat malt, unmalted wheat and flaked oats, it is then spiced at the end of the boil with 55 fresh orange peels, coriander and a bit of freshly ground black pepper which adds an earthy character.",
				"styleId": 65,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:06:57",
				"updateDate": "2015-05-22 02:18:31",
				"style": {
					"id": 65,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style White (or Wit) / Belgian-Style Wheat",
					"shortName": "Witbier",
					"description": "Belgian white ales are very pale in color and are brewed using unmalted wheat and malted barley and are spiced with coriander and orange peel. Coriander and light orange peel aroma should be perceived as such or as an unidentified spiciness. Phenolic spiciness and yeast flavors may be evident at mild levels. These beers are traditionally bottle conditioned and served cloudy. An unfiltered starch and yeast haze should be part of the appearance. The low to medium body should have some degree of creaminess from wheat starch. The style is further characterized by the use of noble-type hops to achieve low hop bitterness and little to no apparent hop flavor. This beer has no diacetyl and a low to medium fruity-ester level. Mild acidity is appropriate.",
					"ibuMin": "10",
					"ibuMax": "17",
					"abvMin": "4.8",
					"abvMax": "5.2",
					"srmMin": "2",
					"srmMax": "4",
					"ogMin": "1.044",
					"fgMin": "1.006",
					"fgMax": "1.01",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:32:30"
				}
			},
			{
				"id": "ZUMEIs",
				"name": "Mr. Breakfast Oatmeal Porter",
				"nameDisplay": "Mr. Breakfast Oatmeal Porter",
				"description": "This is a nice, easy drinking, sessionable porter. It's a deep brown color with dark, ruby highlights. The oats add a nice complexity to the chocolatey character.",
				"styleId": 18,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:56:26",
				"updateDate": "2013-05-08 23:56:27",
				"style": {
					"id": 18,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Brown Porter",
					"shortName": "Brown Porter",
					"description": "Brown porters are mid to dark brown (may have red tint) in color. No roast barley or strong burnt/black malt character should be perceived. Low to medium malt sweetness, caramel and chocolate is acceptable along with medium hop bitterness. This is a lightto medium-bodied beer. Fruity esters are acceptable. Hop flavor and aroma may vary from being negligible to medium in character.",
					"ibuMin": "20",
					"ibuMax": "30",
					"abvMin": "4.5",
					"abvMax": "6",
					"srmMin": "20",
					"srmMax": "35",
					"ogMin": "1.04",
					"fgMin": "1.006",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:21:43"
				}
			},
			{
				"id": "6iiVKB",
				"name": "Munich Helles",
				"nameDisplay": "Munich Helles",
				"description": "A golden lager in the traditional Munich brewing style. This is what you find on tap in Bavaria instead of a Pilsener. With more malt character and less hop bitterness than a pilsener, our Helles is full flavored but crisp. Slightly lighter bodied than our Seven Sisters Münchner.",
				"styleId": 78,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 18:27:21",
				"updateDate": "2013-05-09 00:20:22",
				"style": {
					"id": 78,
					"categoryId": 7,
					"category": {
						"id": 7,
						"name": "European-germanic Lager",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Münchner (Munich)-Style Helles",
					"shortName": "Helles",
					"description": "This beer should be perceived as having low bitterness. It is a medium-bodied, malt-emphasized beer with malt character often balanced with low levels of yeast produced sulfur compounds (character). Certain renditions of this beer style have  a perceivable level of hop flavor (note: hop flavor does not imply hop bitterness) and character but it is essentially balanced with malt character to retain its style identity. Malt character is sometimes bread-like yet always reminiscent of freshly and very lightly toasted malted barley. There should not be any caramel character. Color is light straw to golden. Fruity esters and diacetyl should not be perceived. There should be no chill haze.",
					"ibuMin": "18",
					"ibuMax": "25",
					"abvMin": "4.5",
					"abvMax": "5.5",
					"srmMin": "4",
					"srmMax": "6",
					"ogMin": "1.044",
					"fgMin": "1.008",
					"fgMax": "1.012",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:36:40"
				}
			},
			{
				"id": "P7hdxK",
				"name": "Nelson IPA",
				"nameDisplay": "Nelson IPA",
				"description": "This India Pale Ale features a new experimental hop from New Zealand called Nelson Sauvin.  The creator, Nelson, was reminded of New Zealand’s famed Sauvignon Blanc grapes.  This boutique hop features a brilliant bouquet of aromatics that is very unique.  Our beer is bursting with juicy fruits like passion fruit, guava and pear.  There are bright grassy notes and an undeniable exotic aroma reminiscent of gooseberries and elderflowers (smell a bottle of St. Germain liqueur).  The aromas transcend onto the palate along with sweet pale malts.  The beer has a yellowish hay color with good clarity and a nearly white head.  It finishes with a sharp bitterness that contrasts the initially sweet fruit flavors.",
				"abv": "7",
				"styleId": 30,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:07:21",
				"updateDate": "2013-05-09 00:07:22",
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "Bo52SJ",
				"name": "Nitro Espresso Stout",
				"nameDisplay": "Nitro Espresso Stout",
				"description": "This is a traditional dry Irish Stout - with a few shots of Italian espresso added. It has a deep, dark, mysterious color. \r\nFlavors of espresso and dark chocolate dominate yet a smoky character persists in the background. We nitrogenated it (“carbonating” it with nitrogen instead of CO2) which gives it a wonderful creamy texture when run through a ‘creamer’ faucet (and that very cool cascade special effect!)",
				"styleId": 23,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:56:54",
				"updateDate": "2013-05-08 23:56:55",
				"style": {
					"id": 23,
					"categoryId": 2,
					"category": {
						"id": 2,
						"name": "Irish Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Classic Irish-Style Dry Stout",
					"shortName": "Dry Irish Stout",
					"description": "Dry stouts have an initial malt and light caramel flavor profile with a distinctive dry-roasted bitterness in the finish. Dry stouts achieve a dry-roasted character through the use of roasted barley. The emphasis of coffee-like roasted barley and a moderate degree of roasted malt aromas define much of the character. Some slight acidity may be perceived but is not necessary. European hop aroma and flavor should be low or not perceived. Dry stouts have medium-light to medium body. Fruity esters are minimal and overshadowed by malt, high hop bitterness, and roasted barley character. Diacetyl (butterscotch) should be very low or not perceived. Head retention and rich character should be part of its visual character.",
					"ibuMin": "30",
					"ibuMax": "40",
					"abvMin": "3.8",
					"abvMax": "5",
					"srmMin": "40",
					"srmMax": "40",
					"ogMin": "1.038",
					"fgMin": "1.008",
					"fgMax": "1.012",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:23:51"
				}
			},
			{
				"id": "1RQS6l",
				"name": "Oktoberfest Lager",
				"nameDisplay": "Oktoberfest Lager",
				"description": "It is a traditional German Oktoberfest lager brewed with all German barley, European noble hops, and has been lagered - or conditioned – for over two months. It has an amber color and a smooth, beautiful, soft maltiness from the German barley. Prost!",
				"styleId": 81,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:07:48",
				"updateDate": "2013-05-09 00:07:48",
				"style": {
					"id": 81,
					"categoryId": 7,
					"category": {
						"id": 7,
						"name": "European-germanic Lager",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "German-Style Märzen",
					"shortName": "Märzen",
					"description": "Märzens are characterized by a medium body and broad range of color. They can range from golden to reddish orange. Sweet maltiness should dominate slightly over a clean hop bitterness. Malt character should be light-toasted rather than strongly caramel (though a low level of light caramel character is acceptable). Bread or biscuit-like malt character is acceptable in aroma and flavor. Hop aroma and flavor should be low but notable. Ale-like fruity esters should not be perceived. Diacetyl and chill haze should not be perceived.",
					"ibuMin": "18",
					"ibuMax": "25",
					"abvMin": "5.3",
					"abvMax": "5.9",
					"srmMin": "4",
					"srmMax": "15",
					"ogMin": "1.05",
					"fgMin": "1.012",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:36:50"
				}
			},
			{
				"id": "o7nqbk",
				"name": "pms Smoked Molasses Porter",
				"nameDisplay": "pms Smoked Molasses Porter",
				"description": "(Peated, Smoked, Molasses) Porters are dark,, chocolaty beers and first cousins to Stout. We used some molasses in the boil to add some depth of character and then smoked a small portion of the grain over a peat fire to give it a slight smokiness as well. Don’t let the color fool you, this is a very drinkable beer.",
				"styleId": 18,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:57:17",
				"updateDate": "2015-04-21 14:40:11",
				"style": {
					"id": 18,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Brown Porter",
					"shortName": "Brown Porter",
					"description": "Brown porters are mid to dark brown (may have red tint) in color. No roast barley or strong burnt/black malt character should be perceived. Low to medium malt sweetness, caramel and chocolate is acceptable along with medium hop bitterness. This is a lightto medium-bodied beer. Fruity esters are acceptable. Hop flavor and aroma may vary from being negligible to medium in character.",
					"ibuMin": "20",
					"ibuMax": "30",
					"abvMin": "4.5",
					"abvMax": "6",
					"srmMin": "20",
					"srmMax": "35",
					"ogMin": "1.04",
					"fgMin": "1.006",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:21:43"
				}
			},
			{
				"id": "dl9GGC",
				"name": "Poltergeist ESB",
				"nameDisplay": "Poltergeist ESB",
				"description": "Poltergeist ESB has a light copper color, a toasted, biscuity malt profile and a prominent earthy, flowery hoppiness. A slight honey fruitiness sneeks its way in the background as well. It is brewed with exquisite traditional English ingredients – Maris Otter floor malted barley and Kent Golding hops. Relax and have a pint or two to keep the evil spirits away – and, of course, go to the light.",
				"styleId": 5,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:08:10",
				"updateDate": "2013-05-09 00:08:10",
				"style": {
					"id": 5,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Extra Special Bitter",
					"shortName": "ESB",
					"description": "Extra special bitter possesses medium to strong hop aroma, flavor, and bitterness. The residual malt and defining sweetness of this richly flavored, full-bodied bitter is more pronounced than in other styles of bitter. It is light amber to copper colored with medium to medium-high bitterness. Mild carbonation traditionally characterizes draft-cask versions, but in bottled versions, a slight increase in carbon dioxide content is acceptable. Fruity-ester character is acceptable in aroma and flavor. Diacetyl (butterscotch character) is acceptable and characteristic when at very low levels. The absence of diacetyl is also acceptable. Chill haze is allowable at cold temperatures. English or American hops may be used. (English and American hop character may be specified in subcategories.)",
					"ibuMin": "30",
					"ibuMax": "45",
					"abvMin": "4.8",
					"abvMax": "5.8",
					"srmMin": "8",
					"srmMax": "14",
					"ogMin": "1.046",
					"fgMin": "1.01",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:19:20"
				}
			},
			{
				"id": "QRWelB",
				"name": "Pumpkin Ale",
				"nameDisplay": "Pumpkin Ale",
				"description": "We brewed one batch of the Pumpkin Ale to celebrate the fall harvest season, and we used almost 100 lbs of organic Sweet Sugar Pumpkin from a local Georgia farm. We carved, baked and scooped pumpkin (for a really long time) and then added them directly into the mash. Several ‘pumpkin pie’ spices were added in the kettle. Enjoy!",
				"styleId": 121,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:57:40",
				"updateDate": "2013-05-08 23:57:40",
				"style": {
					"id": 121,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Pumpkin Beer",
					"shortName": "Pumpkin Beer",
					"description": "Pumpkin beers are any beers using pumpkins (Cucurbito pepo) as an adjunct in either mash, kettle, primary or secondary fermentation, providing obvious (ranging from subtle to intense), yet harmonious, qualities. Pumpkin qualities should not be overpowered by hop character. These may or may not be spiced or flavored with other things. A statement by the brewer explaining the nature of the beer is essential for fair assessment in competitions. If this beer is a classic style with pumpkin, the brewer should also specify the classic style.",
					"ibuMin": "5",
					"ibuMax": "70",
					"abvMin": "2.5",
					"abvMax": "12",
					"srmMin": "5",
					"srmMax": "50",
					"ogMin": "1.03",
					"fgMin": "1.006",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:44:28"
				}
			},
			{
				"id": "G4s4Pd",
				"name": "Quinte55ence",
				"nameDisplay": "Quinte55ence",
				"description": "A Belgian Quintuple--if there was such a thing.  A celebration of the opening of 5 Seasons-North. \r\n\r\nThere are 5 malts, 5 hops, 5 of this, 5 of that 25 of these things and 25 of those things over there.  It is a BIG beer. \r\n\r\nVery rich, very complex.  But don’t be scared of it—or maybe you should.",
				"styleId": 60,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:08:37",
				"updateDate": "2013-05-09 00:08:37",
				"style": {
					"id": 60,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style Quadrupel",
					"shortName": "Belgian Quad",
					"description": "Quadrupels or \"Quads\" are characterized by the immense presence of alcohol and balanced flavor, bitterness and aromas. Its color is deep amber to rich chestnut/garnet brown. Often characterized by a mousse-like dense, sometimes amber head will top off a properly poured and served quad. Complex fruity aroma and flavor emerge reminiscent of raisins, dates, figs, grapes, plums often accompanied with a hint of winy character. Caramel, dark sugar and malty sweet flavors and aromas can be intense, not cloying, while complementing fruitiness. Though well attenuated it usually has a full, creamy body. Hop characters do not dominate; low to low-medium bitterness is perceived. Perception of alcohol can be extreme. Clove-like phenolic flavor and aroma should not be evident. Chill haze is acceptable at low serving temperatures. Diacetyl and DMS should not be perceived. Well balanced with savoring/sipping drinkability. Oxidative character if evident in aged Quads should be mild and pleasant.",
					"ibuMin": "25",
					"ibuMax": "50",
					"abvMin": "9",
					"abvMax": "14",
					"srmMin": "8",
					"srmMax": "20",
					"ogMin": "1.084",
					"fgMin": "1.014",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:33:33"
				}
			},
			{
				"id": "2lFSuc",
				"name": "Sgt. Schultz’s Hefeweizen",
				"nameDisplay": "Sgt. Schultz’s Hefeweizen",
				"description": "Ours is a traditional German-style Wheat Beer. We use German wheat, German barley and German hops. \r\n\r\nIt is gold in color and has a soft, smooth malt character. We also use a German yeast specifically cultivated for this style of beer. It imparts extremely interesting flavors of banana, clove and spice. It is unfiltered and, therefore, cloudy as is traditional.",
				"styleId": 48,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:58:06",
				"updateDate": "2013-05-08 23:58:06",
				"style": {
					"id": 48,
					"categoryId": 4,
					"category": {
						"id": 4,
						"name": "German Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "South German-Style Hefeweizen / Hefeweissbier",
					"shortName": "Hefeweizen",
					"description": "The aroma and flavor of a Weissbier with yeast is decidedly fruity and phenolic. The phenolic characteristics are often described as clove-, nutmeg-like, mildly smoke-like or even vanilla-like. Banana-like esters should be present at low to medium-high levels. These beers are made with at least 50 percent malted wheat, and hop rates are quite low. Hop flavor and aroma are absent or present at very low levels. Weissbier is well attenuated and very highly carbonated and a medium to full bodied beer. The color is very pale to pale amber. Because yeast is present, the beer will have yeast flavor and a characteristically fuller mouthfeel and may be appropriately very cloudy. No diacetyl should be perceived.",
					"ibuMin": "10",
					"ibuMax": "15",
					"abvMin": "4.9",
					"abvMax": "5.5",
					"srmMin": "3",
					"srmMax": "9",
					"ogMin": "1.047",
					"fgMin": "1.008",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:29:27"
				}
			},
			{
				"id": "sOasZ4",
				"name": "Shakti Saison",
				"nameDisplay": "Shakti Saison",
				"description": "Shakti (Hindu for ‘sacred force’) Saison is a mix of East and West and is brewed with Maris Otter floor-malted barley, German wheat malt, Crystal Wheat and turbinado sugar in the kettle. It is spiced with cardamom and grains of paradise, while the Belgian yeast produces an extremely complex flavor profile with tropical fruit, earthy, spicy notes. The latest installment in the Serenade Series, the yeast was serenaded by the beautiful sounds of the legendary jazz groups, Shakti, who first fused western jazz and classical Indian music. The yeast got real funky – as did the brewer.",
				"styleId": 72,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:08:56",
				"updateDate": "2014-10-13 17:29:25",
				"style": {
					"id": 72,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "French & Belgian-Style Saison",
					"shortName": "Saison",
					"description": "Beers in this category are golden to deep amber in color. There may be quite a variety of characters within this style. Generally: They are light to medium in body. Malt aroma is low to medium-low. Esters are medium to high in  aroma, while, complex alcohols, herbs, spices, low Brettanomyces character and even clove and smoke-like phenolics may or may not be evident in the overall balanced beer. Hop aroma and flavor may be at low to medium levels. Malt flavor is low but provides foundation for the overall balance. Hop bitterness is moderate to moderately assertive. Herb and/or spice flavors, including black pepper-like notes, may or may not be evident. Fruitiness from fermentation is generally in character. A balanced small amount of sour or acidic flavors is acceptable when in balance with other components. Earthy, cellar-like, musty aromas are okay. Diacetyl should not be perceived. Chill or slight yeast haze is okay. Often bottle conditioned with some yeast character and high carbonation. French & Belgian-Style Saison may have Brettanomyces characters that are slightly acidity, fruity, horsey, goaty and/or leather-like.",
					"ibuMin": "20",
					"ibuMax": "40",
					"abvMin": "4.5",
					"abvMax": "8.5",
					"srmMin": "4",
					"srmMax": "14",
					"ogMin": "1.055",
					"fgMin": "1.004",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:34:55"
				}
			},
			{
				"id": "f4yH43",
				"name": "Sister-In-Law Saison",
				"nameDisplay": "Sister-In-Law Saison",
				"description": "This is a French-style saison. Saisons are a farmhouse style of beer, rustic in character and the yeast imparts lots of spicy notes. It is very dry and refreshing.",
				"styleId": 72,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:58:25",
				"updateDate": "2015-06-10 19:15:34",
				"style": {
					"id": 72,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "French & Belgian-Style Saison",
					"shortName": "Saison",
					"description": "Beers in this category are golden to deep amber in color. There may be quite a variety of characters within this style. Generally: They are light to medium in body. Malt aroma is low to medium-low. Esters are medium to high in  aroma, while, complex alcohols, herbs, spices, low Brettanomyces character and even clove and smoke-like phenolics may or may not be evident in the overall balanced beer. Hop aroma and flavor may be at low to medium levels. Malt flavor is low but provides foundation for the overall balance. Hop bitterness is moderate to moderately assertive. Herb and/or spice flavors, including black pepper-like notes, may or may not be evident. Fruitiness from fermentation is generally in character. A balanced small amount of sour or acidic flavors is acceptable when in balance with other components. Earthy, cellar-like, musty aromas are okay. Diacetyl should not be perceived. Chill or slight yeast haze is okay. Often bottle conditioned with some yeast character and high carbonation. French & Belgian-Style Saison may have Brettanomyces characters that are slightly acidity, fruity, horsey, goaty and/or leather-like.",
					"ibuMin": "20",
					"ibuMax": "40",
					"abvMin": "4.5",
					"abvMax": "8.5",
					"srmMin": "4",
					"srmMax": "14",
					"ogMin": "1.055",
					"fgMin": "1.004",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:34:55"
				}
			},
			{
				"id": "UiJgiV",
				"name": "The Answer – Bottled Whiskey Barrel Quinte55ence",
				"nameDisplay": "The Answer – Bottled Whiskey Barrel Quinte55ence",
				"description": "It is the Quinte55ence aged in Woodford Reserve Whiskey barrels for 5.5 weeks. We then hand bottled it in 750 ml bottles, corked finished them and put champagne cages on. It is a limited release\r\nThis beer is the Answer to the Questions. This is what Willis was talking about. This is where the beef is. \r\n\r\nThis is the sound of one hand clapping.",
				"styleId": 60,
				"isOrganic": "N",
				"beerVariationId": "G4s4Pd",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:09:38",
				"updateDate": "2013-05-09 00:09:38",
				"style": {
					"id": 60,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style Quadrupel",
					"shortName": "Belgian Quad",
					"description": "Quadrupels or \"Quads\" are characterized by the immense presence of alcohol and balanced flavor, bitterness and aromas. Its color is deep amber to rich chestnut/garnet brown. Often characterized by a mousse-like dense, sometimes amber head will top off a properly poured and served quad. Complex fruity aroma and flavor emerge reminiscent of raisins, dates, figs, grapes, plums often accompanied with a hint of winy character. Caramel, dark sugar and malty sweet flavors and aromas can be intense, not cloying, while complementing fruitiness. Though well attenuated it usually has a full, creamy body. Hop characters do not dominate; low to low-medium bitterness is perceived. Perception of alcohol can be extreme. Clove-like phenolic flavor and aroma should not be evident. Chill haze is acceptable at low serving temperatures. Diacetyl and DMS should not be perceived. Well balanced with savoring/sipping drinkability. Oxidative character if evident in aged Quads should be mild and pleasant.",
					"ibuMin": "25",
					"ibuMax": "50",
					"abvMin": "9",
					"abvMax": "14",
					"srmMin": "8",
					"srmMax": "20",
					"ogMin": "1.084",
					"fgMin": "1.014",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:33:33"
				},
				"beerVariation": {
					"id": "G4s4Pd",
					"name": "Quinte55ence",
					"nameDisplay": "Quinte55ence",
					"description": "A Belgian Quintuple--if there was such a thing.  A celebration of the opening of 5 Seasons-North. \r\n\r\nThere are 5 malts, 5 hops, 5 of this, 5 of that 25 of these things and 25 of those things over there.  It is a BIG beer. \r\n\r\nVery rich, very complex.  But don’t be scared of it—or maybe you should.",
					"styleId": 60,
					"isOrganic": "N",
					"status": "verified",
					"statusDisplay": "Verified",
					"createDate": "2013-05-09 00:08:37",
					"updateDate": "2013-05-09 00:08:37",
					"style": {
						"id": 60,
						"categoryId": 5,
						"category": {
							"id": 5,
							"name": "Belgian And French Origin Ales",
							"createDate": "2012-03-21 20:06:46"
						},
						"name": "Belgian-Style Quadrupel",
						"shortName": "Belgian Quad",
						"description": "Quadrupels or \"Quads\" are characterized by the immense presence of alcohol and balanced flavor, bitterness and aromas. Its color is deep amber to rich chestnut/garnet brown. Often characterized by a mousse-like dense, sometimes amber head will top off a properly poured and served quad. Complex fruity aroma and flavor emerge reminiscent of raisins, dates, figs, grapes, plums often accompanied with a hint of winy character. Caramel, dark sugar and malty sweet flavors and aromas can be intense, not cloying, while complementing fruitiness. Though well attenuated it usually has a full, creamy body. Hop characters do not dominate; low to low-medium bitterness is perceived. Perception of alcohol can be extreme. Clove-like phenolic flavor and aroma should not be evident. Chill haze is acceptable at low serving temperatures. Diacetyl and DMS should not be perceived. Well balanced with savoring/sipping drinkability. Oxidative character if evident in aged Quads should be mild and pleasant.",
						"ibuMin": "25",
						"ibuMax": "50",
						"abvMin": "9",
						"abvMax": "14",
						"srmMin": "8",
						"srmMax": "20",
						"ogMin": "1.084",
						"fgMin": "1.014",
						"fgMax": "1.02",
						"createDate": "2012-03-21 20:06:46",
						"updateDate": "2015-04-07 15:33:33"
					}
				}
			},
			{
				"id": "HOh5DU",
				"name": "The Great Pumpkin Ale",
				"nameDisplay": "The Great Pumpkin Ale",
				"description": "The Great Pumpkin has indeed finally arrived. We brewed one batch of Pumpkin Ale to celebrate the fall harvest season and we used almost 400 lbs of fresh, local, organic pumpkins from a Riverview Farms. We carved, baked and scooped pumpkin (for a really long time) and added them directly into the mash. Several “pumpkin pie” spices were added in the kettle. Enjoy.",
				"styleId": 121,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:58:53",
				"updateDate": "2013-05-08 23:58:53",
				"style": {
					"id": 121,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Pumpkin Beer",
					"shortName": "Pumpkin Beer",
					"description": "Pumpkin beers are any beers using pumpkins (Cucurbito pepo) as an adjunct in either mash, kettle, primary or secondary fermentation, providing obvious (ranging from subtle to intense), yet harmonious, qualities. Pumpkin qualities should not be overpowered by hop character. These may or may not be spiced or flavored with other things. A statement by the brewer explaining the nature of the beer is essential for fair assessment in competitions. If this beer is a classic style with pumpkin, the brewer should also specify the classic style.",
					"ibuMin": "5",
					"ibuMax": "70",
					"abvMin": "2.5",
					"abvMax": "12",
					"srmMin": "5",
					"srmMax": "50",
					"ogMin": "1.03",
					"fgMin": "1.006",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:44:28"
				}
			},
			{
				"id": "722Urw",
				"name": "The Rascally Goat Rye Bock",
				"nameDisplay": "The Rascally Goat Rye Bock",
				"description": "Bocks are German lagers. They are malty and smooth,and can be fairly strong. Ours is brewed with rye which adds a nice dryness and spiciness. It is amber in color, malty, smooth wih a dry finish.",
				"styleId": 88,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:10:10",
				"updateDate": "2013-05-09 00:10:10",
				"style": {
					"id": 88,
					"categoryId": 7,
					"category": {
						"id": 7,
						"name": "European-germanic Lager",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Traditional German-Style Bock",
					"shortName": "Bock",
					"description": "Traditional bocks are made with all malt and are strong, malty, medium- to full-bodied, bottom-fermented beers with moderate hop bitterness that should increase proportionately with the starting gravity. Malt character should be a balance of sweetness and toasted/nut-like malt; not caramel. Hop flavor should be low and hop aroma should be very low. Bocks can range in color from deep copper to dark brown. Fruity esters should be minimal. Diacetyl should be absent.",
					"ibuMin": "20",
					"ibuMax": "30",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "20",
					"srmMax": "30",
					"ogMin": "1.066",
					"fgMin": "1.018",
					"fgMax": "1.024",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:38:54"
				}
			},
			{
				"id": "tiPtMv",
				"name": "Watermelon Wheat Beer",
				"nameDisplay": "Watermelon Wheat Beer",
				"description": "We somehow managed to fit 600 lbs of fresh, local, organic watermelons into this American wheat beer. Very refreshing.",
				"styleId": 119,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:59:17",
				"updateDate": "2015-05-07 14:09:17",
				"style": {
					"id": 119,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Fruit Beer",
					"shortName": "Fruit Beer",
					"description": "Fruit beers are any beers using fruit or fruit extracts as an adjunct in either, the mash, kettle, primary or secondary fermentation providing obvious (ranging from subtle to intense), yet harmonious, fruit qualities. Fruit qualities should not be overpowered by hop character. If a fruit (such as juniper berry) has an herbal or spice quality, it is more appropriate to consider it in the herb and spice beers category. Acidic bacterial (not wild yeast) fermentation characters may be evident (but not necessary) they would contribute to acidity and enhance fruity balance. Clear or hazy beer is acceptable in appearance. A statement by the brewer explaining what fruits are used is essential in order for fair assessment in competitions. If this beer is a classic style with fruit, the brewer should also specify the classic style.",
					"ibuMin": "5",
					"ibuMax": "70",
					"abvMin": "2.5",
					"abvMax": "12",
					"srmMin": "5",
					"srmMax": "50",
					"ogMin": "1.03",
					"fgMin": "1.006",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:44:21"
				}
			},
			{
				"id": "gOnHru",
				"name": "Weiss Ässe Weizenbock",
				"nameDisplay": "Weiss Ässe Weizenbock",
				"description": "This is a big, hearty beer full of flavor, It has a tawny, brown color while notes of deep fruits, raisins, bananas and spice fill the nose. A full malt character is followed by the warming sensation of the alcohol with a subtle clove character in the finish.",
				"styleId": 90,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-08 23:49:53",
				"updateDate": "2013-05-08 23:49:53",
				"style": {
					"id": 90,
					"categoryId": 7,
					"category": {
						"id": 7,
						"name": "European-germanic Lager",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "German-Style Doppelbock",
					"shortName": "Doppelbock",
					"description": "Malty sweetness is dominant but should not be cloying. Malt character is more reminiscent of fresh and lightly toasted Munich- style malt, more so than caramel or toffee malt character. Some elements of caramel and toffee can be evident and contribute to complexity, but the predominant malt character is an expression of toasted barley malt. Doppelbocks are full bodied and deep amber to dark brown in color. Astringency from roast malts is absent. Alcoholic strength is high, and hop rates increase with gravity. Hop bitterness and flavor should be low and hop aroma absent. Fruity esters are commonly perceived but at low to moderate levels. Diacetyl should be absent",
					"ibuMin": "17",
					"ibuMax": "27",
					"abvMin": "6.5",
					"abvMax": "8",
					"srmMin": "12",
					"srmMax": "30",
					"ogMin": "1.074",
					"fgMin": "1.014",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:39:08"
				}
			},
			{
				"id": "jLlJ1N",
				"name": "WinterJack",
				"nameDisplay": "WinterJack",
				"description": "A Belgian Dubbel that was aged in a Jack Daniel’s whiskey barrel. Notes of chocolate, vanilla and whiskey really shine through. This one will put hair on your chest.",
				"styleId": 58,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-05-09 00:10:36",
				"updateDate": "2013-05-09 00:10:36",
				"style": {
					"id": 58,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style Dubbel",
					"shortName": "Belgian Dubbel",
					"description": "This medium-bodied, red to dark brown colored ale has a malty sweetness and chocolate-like caramel aroma. A light hop flavor and/or aroma is acceptable. Dubbels are also characterized by low-medium to medium bitterness. No diacetyl is acceptable. Yeastgenerated fruity esters (especially banana) are appropriate at low levels. Head retention is dense and mousse-like. Chill haze is acceptable at low serving temperatures. Often bottle conditioned a slight yeast haze and flavor may be evident.",
					"ibuMin": "20",
					"ibuMax": "30",
					"abvMin": "6.25",
					"abvMax": "7.5",
					"srmMin": "16",
					"srmMax": "36",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:31:45"
				}
			}
		];

var maxLagersBeerData = [
			{
				"id": "13JsiW",
				"name": "Atomic Frog DIPL",
				"nameDisplay": "Atomic Frog DIPL",
				"description": "A collaborative beer with Red Brick Brewing, Atomic Frog is a Double India Pale Lager hopped with Galaxy, Pacifica and Huell Melon. Originally brewed at Max Lager's, it will be available in bottle form from Red Brick in Late 2014 early 2015.",
				"abv": "8",
				"ibu": "80",
				"glasswareId": 5,
				"srmId": 5,
				"availableId": 2,
				"styleId": 130,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/13JsiW/upload_aHYW4B-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/13JsiW/upload_aHYW4B-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/13JsiW/upload_aHYW4B-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"servingTemperature": "cold",
				"servingTemperatureDisplay": "Cold - (4-7C/39-45F)",
				"originalGravity": "1.07",
				"createDate": "2014-09-10 11:24:58",
				"updateDate": "2016-02-05 20:02:45",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 5,
					"name": "5",
					"hex": "FBB123"
				},
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 130,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Experimental Beer (Lager or Ale)",
					"shortName": "Experimental Beer",
					"description": "An experimental beer is any beer (lager, ale or other) that is primarily grain-based and employs unusual techniques and/or ingredients. A minimum 51% of the fermentable carbohydrates must be derived from malted grains. The overall uniqueness of the process, ingredients used and creativity should be considered. Beers such as garden (vegetable), fruit, chocolate, coffee, spice, specialty or other beers that match existing categories should not be entered into this category. Beers not easily matched to existing style categories in a competition would often be entered into this category. Beers that are a combination of other categories (spice, smoke, specialty, porter, etc.) could also be entered into this category. A statement by the brewer explaining the experimental or other nature of the beer is essential in order for fair assessment in competitions. Generally, a 25-word statement would suffice in explaining the experimental nature of the beer.",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:46:02"
				}
			},
			{
				"id": "Ojb4Z5",
				"name": "Dark Side",
				"nameDisplay": "Dark Side",
				"description": "India Black Ale made with a small portion of house smoked malt and Medusa hops",
				"abv": "8",
				"ibu": "70",
				"glasswareId": 5,
				"srmId": 24,
				"availableId": 4,
				"styleId": 41,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"servingTemperature": "cold",
				"servingTemperatureDisplay": "Cold - (4-7C/39-45F)",
				"originalGravity": "1.072",
				"createDate": "2014-09-10 11:20:40",
				"updateDate": "2014-09-11 18:00:59",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 24,
					"name": "24",
					"hex": "821E00"
				},
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 41,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Black Ale",
					"shortName": "Black Ale",
					"description": "American-style Black Ales are very dark to black and perceived to have medium high to high hop bitterness, flavor and aroma with medium-high alcohol content, balanced with a medium body. Fruity, floral and herbal character from hops of all origins may contribute character. The style is further characterized by a balanced and moderate degree of caramel malt and dark roasted malt flavor and aroma. High astringency and high degree of burnt roast malt character should be absent.",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6",
					"abvMax": "7.5",
					"srmMin": "35",
					"srmMax": "35",
					"ogMin": "1.056",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:28:36"
				}
			},
			{
				"id": "mPsGPe",
				"name": "Demon D'Or",
				"nameDisplay": "Demon D'Or",
				"description": "Conditioned on dark rum soaked oak",
				"abv": "11.5",
				"ibu": "35",
				"glasswareId": 8,
				"srmId": 5,
				"availableId": 4,
				"styleId": 59,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"servingTemperature": "cold",
				"servingTemperatureDisplay": "Cold - (4-7C/39-45F)",
				"originalGravity": "1.085",
				"createDate": "2014-09-10 11:17:53",
				"updateDate": "2014-09-11 18:04:45",
				"glass": {
					"id": 8,
					"name": "Tulip",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 5,
					"name": "5",
					"hex": "FBB123"
				},
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 59,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style Tripel",
					"shortName": "Belgian Tripel",
					"description": "Tripels are often characterized by a complex, sometimes mild spicy character. Clove-like phenolic flavor and aroma may be evident at extremely low levels. Yeast-generated  fruity esters, including banana, are also common, but not necessary. These pale/light-colored ales may finish sweet, though any sweet finish should be light. The beer is characteristically medium and clean in body with an equalizing hop/malt balance and a perception of medium to medium high hop bitterness. Traditional Belgian Tripels are often well attenuated. Brewing sugar may be used to lighten the perception of body. Its sweetness will come from very pale malts. There should not be character from any roasted or dark malts. Low hop flavor is acceptable. Alcohol strength and flavor should be perceived as evident. Head retention is dense and mousse-like. Chill haze is acceptable at low serving temperatures. Traditional Tripels are bottle conditioned, may exhibit slight yeast haze but the yeast should not be intentionally roused. Oxidative character if evident in aged Tripels should be mild and pleasant.",
					"ibuMin": "20",
					"ibuMax": "45",
					"abvMin": "7",
					"abvMax": "10",
					"srmMin": "4",
					"srmMax": "9",
					"ogMin": "1.07",
					"fgMin": "1.01",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:31:50"
				}
			},
			{
				"id": "lm2SHf",
				"name": "Georgia Air Lift",
				"nameDisplay": "Georgia Air Lift",
				"description": "Classic Berliner Weisse brewed with peaches and conditioned on Chardonnay soaked oak",
				"abv": "4.2",
				"ibu": "5",
				"glasswareId": 8,
				"srmId": 4,
				"availableId": 6,
				"styleId": 46,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"servingTemperature": "cold",
				"servingTemperatureDisplay": "Cold - (4-7C/39-45F)",
				"createDate": "2014-07-25 18:00:34",
				"updateDate": "2014-07-26 11:03:31",
				"glass": {
					"id": 8,
					"name": "Tulip",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 4,
					"name": "4",
					"hex": "FFBF42"
				},
				"available": {
					"id": 6,
					"name": "Summer",
					"description": "Available during the summer months."
				},
				"style": {
					"id": 46,
					"categoryId": 4,
					"category": {
						"id": 4,
						"name": "German Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Berliner-Style Weisse (Wheat)",
					"shortName": "Berlinerweisse",
					"description": "This is very pale in color and the lightest of all the German wheat beers. The unique combination of yeast and lactic acid bacteria fermentation yields a beer that is acidic, highly attenuated, and very light bodied. The carbonation of a Berliner Weisse is high, and hop rates are very low. Clarity may be hazy or cloudy from yeast or chill haze. Hop character should not be perceived. Fruity esters will be evident. No diacetyl should be perceived.",
					"ibuMin": "3",
					"ibuMax": "6",
					"abvMin": "2.8",
					"abvMax": "3.4",
					"srmMin": "2",
					"srmMax": "4",
					"ogMin": "1.028",
					"fgMin": "1.004",
					"fgMax": "1.006",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:29:14"
				}
			},
			{
				"id": "lVLe2V",
				"name": "Hopless Dancer",
				"nameDisplay": "Hopless Dancer",
				"description": "HOPLESS DANCER\r\nANCIENT ALE\r\nBefore the use of hops, beer was bittered and flavored with a multitude of herbs, roots and spices. These ancient ales were known as Gruits. This Gruit is spiced with chamomile, lavender, grains of paradise, yarrow, sweet gale and mugwort. The result is an amazingly complex and usual beer that is slightly tart and extremely delicious.",
				"abv": "4.5",
				"ibu": "10",
				"glasswareId": 2,
				"srmId": 6,
				"availableId": 2,
				"styleId": 124,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"servingTemperature": "cool",
				"servingTemperatureDisplay": "Cool - (8-12C/45-54F)",
				"originalGravity": "1.052",
				"createDate": "2013-08-12 20:31:50",
				"updateDate": "2013-08-12 23:30:31",
				"glass": {
					"id": 2,
					"name": "Goblet",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 6,
					"name": "6",
					"hex": "F8A600"
				},
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 124,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Herb and Spice Beer",
					"shortName": "Spice Beer",
					"description": "Herb beers use herbs or spices (derived from roots, seeds, fruits, vegetable, flowers, etc.) other than or in addition to hops to create a distinct (ranging from subtle to intense) character, though individual characters of herbs and/or spices used may not always be identifiable. Under hopping often, but not always, allows the spice or herb to contribute to the flavor profile. Positive evaluations are significantly based on perceived balance of flavors. Note: Chili-flavored beers that emphasize heat rather than chili flavor should be entered as a \"spiced\" beer.  A statement by the brewer explaining what herbs or spices are used is essential in order for fair assessment in competitions. Specifying a style upon which the beer is based may help evaluation. If this beer is a classic style with an herb or spice, the brewer should specify the classic style. If no Chocolate or Coffee category exists in a competition, then chocolate and coffee beers should be entered in this category.",
					"ibuMin": "5",
					"ibuMax": "70",
					"abvMin": "2.5",
					"abvMax": "12",
					"srmMin": "5",
					"srmMax": "50",
					"ogMin": "1.03",
					"fgMin": "1.006",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:44:45"
				}
			},
			{
				"id": "Np4SBw",
				"name": "Hopsplosion!!! IPA",
				"nameDisplay": "Hopsplosion!!! IPA",
				"description": "Crisp, dry and explosively hopped with an insane amount of Citra, El Dorado, Amarillo and Cascade.",
				"abv": "7.5",
				"ibu": "85",
				"glasswareId": 5,
				"srmId": 8,
				"availableId": 1,
				"styleId": 30,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/Np4SBw/upload_lD6zLA-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/Np4SBw/upload_lD6zLA-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/Np4SBw/upload_lD6zLA-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Spicy foods, burgers...whatever is on your plate",
				"servingTemperature": "cool",
				"servingTemperatureDisplay": "Cool - (8-12C/45-54F)",
				"originalGravity": "1.064",
				"createDate": "2013-08-12 20:36:13",
				"updateDate": "2015-12-17 04:50:10",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 8,
					"name": "8",
					"hex": "EA8F00"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "A69SGD",
				"name": "Resurgens Rye",
				"nameDisplay": "Resurgens Rye",
				"abv": "9.2",
				"ibu": "112",
				"glasswareId": 2,
				"srmId": 12,
				"availableId": 6,
				"styleId": 31,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"servingTemperature": "cold",
				"servingTemperatureDisplay": "Cold - (4-7C/39-45F)",
				"originalGravity": "1.08",
				"createDate": "2014-09-10 11:12:39",
				"updateDate": "2014-09-10 19:46:06",
				"glass": {
					"id": 2,
					"name": "Goblet",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 12,
					"name": "12",
					"hex": "CF6900"
				},
				"available": {
					"id": 6,
					"name": "Summer",
					"description": "Available during the summer months."
				},
				"style": {
					"id": 31,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Imperial or Double India Pale Ale",
					"shortName": "Imperial IPA",
					"description": "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
					"ibuMin": "65",
					"ibuMax": "100",
					"abvMin": "7.5",
					"abvMax": "10.5",
					"srmMin": "5",
					"srmMax": "13",
					"ogMin": "1.075",
					"fgMin": "1.012",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:46"
				}
			}
		];

var mondayNightBeerData = [
			{
				"id": "5C0Ovc",
				"name": "Bed Head",
				"nameDisplay": "Bed Head",
				"abv": "8.4",
				"ibu": "75",
				"styleId": 31,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2014-04-09 09:44:31",
				"updateDate": "2015-04-30 18:54:36",
				"style": {
					"id": 31,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Imperial or Double India Pale Ale",
					"shortName": "Imperial IPA",
					"description": "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
					"ibuMin": "65",
					"ibuMax": "100",
					"abvMin": "7.5",
					"abvMax": "10.5",
					"srmMin": "5",
					"srmMax": "13",
					"ogMin": "1.075",
					"fgMin": "1.012",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:46"
				}
			},
			{
				"id": "C5jQCt",
				"name": "Blind Pirate",
				"nameDisplay": "Blind Pirate",
				"description": "A surprisingly balanced double IPA. A pirate without the use of his eyes is a bitter man indeed. And this Blind Pirate’s bitterness is only matched by his boldness. He doesn’t care if you enjoy the citrusy, spicy combination of hops on your tongue, the faint herbal notes in your nose, or the exquisite balance of caramel malts looting your senses. The Blind Pirate is a bold, bitter ale not for the weak in spirit. Just don’t ask him if you can borrow his sight glass. He gets offended",
				"abv": "8.2",
				"ibu": "85",
				"availableId": 1,
				"styleId": 31,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/C5jQCt/upload_depj2f-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/C5jQCt/upload_depj2f-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/C5jQCt/upload_depj2f-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Strong cheeses, spicy foods, salty foods",
				"createDate": "2013-07-15 15:57:26",
				"updateDate": "2015-12-17 04:43:22",
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 31,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Imperial or Double India Pale Ale",
					"shortName": "Imperial IPA",
					"description": "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
					"ibuMin": "65",
					"ibuMax": "100",
					"abvMin": "7.5",
					"abvMax": "10.5",
					"srmMin": "5",
					"srmMax": "13",
					"ogMin": "1.075",
					"fgMin": "1.012",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:46"
				}
			},
			{
				"id": "4SQRRj",
				"name": "Bourbon Barrel Drafty Kilt",
				"nameDisplay": "Bourbon Barrel Drafty Kilt",
				"abv": "8.5",
				"styleId": 15,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/4SQRRj/upload_kMAs89-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/4SQRRj/upload_kMAs89-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/4SQRRj/upload_kMAs89-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-03-02 13:03:13",
				"updateDate": "2015-12-17 22:20:16",
				"style": {
					"id": 15,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Scotch Ale",
					"shortName": "Scotch Ale",
					"description": "Scotch ales are overwhelmingly malty and full-bodied. Perception of hop bitterness is very low. Hop flavor and aroma are very low or nonexistent. Color ranges from deep copper to brown. The clean alcohol flavor balances the rich and dominant sweet maltiness in flavor and aroma. A caramel character is often a part of the profile. Dark roasted malt flavors and aroma may be evident at low levels. If present, fruity esters are generally at low aromatic and flavor levels. Low diacetyl levels are acceptable. Chill haze is allowable at cold temperatures. Though there is little evidence suggesting that traditionally made strong Scotch ales exhibited peat smoke character, the current marketplace offers many Scotch Ales with peat or smoke character present at low to medium levels. Thus a peaty/smoky character may be evident at low levels (ales with medium or higher smoke character would be considered a smoke flavored beer and considered in another category). Scotch Ales may be split into two subcategories: Traditional (no smoke character) and Peated (low level of peat smoke character).",
					"ibuMin": "25",
					"ibuMax": "35",
					"abvMin": "6.2",
					"abvMax": "8",
					"srmMin": "15",
					"srmMax": "30",
					"ogMin": "1.072",
					"fgMin": "1.016",
					"fgMax": "1.028",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:21:11"
				}
			},
			{
				"id": "vxgWg7",
				"name": "Cinnamon Cocoa Drafty Kilt",
				"nameDisplay": "Cinnamon Cocoa Drafty Kilt",
				"description": "Cinnamon is a versatile spice. You can stir it into oatmeal, add it to chili, and even snort it (not recommended). We thought we’d add it to our already delicious Drafty Kilt as a special treat. The addition of cocoa nibs makes this treat even more indulgent. Refined notes of spice and dark chocolate abound, making this beer perfect for a cold winter (week)night.",
				"abv": "7.2",
				"ibu": "26",
				"styleId": 15,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2016-02-24 21:23:16",
				"updateDate": "2016-02-24 21:23:16",
				"style": {
					"id": 15,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Scotch Ale",
					"shortName": "Scotch Ale",
					"description": "Scotch ales are overwhelmingly malty and full-bodied. Perception of hop bitterness is very low. Hop flavor and aroma are very low or nonexistent. Color ranges from deep copper to brown. The clean alcohol flavor balances the rich and dominant sweet maltiness in flavor and aroma. A caramel character is often a part of the profile. Dark roasted malt flavors and aroma may be evident at low levels. If present, fruity esters are generally at low aromatic and flavor levels. Low diacetyl levels are acceptable. Chill haze is allowable at cold temperatures. Though there is little evidence suggesting that traditionally made strong Scotch ales exhibited peat smoke character, the current marketplace offers many Scotch Ales with peat or smoke character present at low to medium levels. Thus a peaty/smoky character may be evident at low levels (ales with medium or higher smoke character would be considered a smoke flavored beer and considered in another category). Scotch Ales may be split into two subcategories: Traditional (no smoke character) and Peated (low level of peat smoke character).",
					"ibuMin": "25",
					"ibuMax": "35",
					"abvMin": "6.2",
					"abvMax": "8",
					"srmMin": "15",
					"srmMax": "30",
					"ogMin": "1.072",
					"fgMin": "1.016",
					"fgMax": "1.028",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:21:11"
				}
			},
			{
				"id": "mrZabu",
				"name": "Drafty Kilt",
				"nameDisplay": "Drafty Kilt",
				"description": "A roasty scotch ale with a hint of smoke. Full-bodied, but not overpowering. Smokey, but not in a creepy bar kind of way. Sweet, but not obnoxiously so. Sound like your ideal mother-in-law? Fair enough, but it also is a pretty dead-on description of our Scotch Ale. In a difficult hop-growing climate, Scottish brewers relied on other ingredients to impart flavor and bitterness – one such ingredient was smoked malt. Drafty Kilt is a dark, malty bombshell of a beer.",
				"abv": "7.2",
				"ibu": "26",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 8,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/mrZabu/upload_eZZras-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/mrZabu/upload_eZZras-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/mrZabu/upload_eZZras-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-25 00:14:07",
				"updateDate": "2015-12-16 15:36:16",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 8,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Scottish-Style Heavy Ale",
					"shortName": "Scottish Heavy",
					"description": "Scottish heavy ale is moderate in strength and dominated by a smooth, sweet maltiness balanced with low, but perceptible, hop bitterness. Hop flavor or aroma should not be perceived. Scottish heavy ale will have a medium degree of malty, caramel-like, soft and chewy character in flavor and mouthfeel. It has medium body, and fruity esters are very low, if evident. Yeast characters such as diacetyl (butterscotch) and sulfuriness are acceptable at very low levels. The color will range from golden amber to deep brown. Bottled versions of this traditional draft beer may contain higher amounts of carbon dioxide than is typical for mildly carbonated draft versions. Chill haze is acceptable at low temperatures. Though there is little evidence suggesting that traditionally made Scottish-style heavy ales exhibited peat smoke character, the current marketplace offers many Scottish-style heavy ales with peat or smoke character present at low to medium levels. Thus a peaty/smoky character may be evident at low to medium levels (ales with medium-high or higher smoke character would be considered a smoke flavored beer and considered in another category). Scottish-style heavy ales may be split into two subcategories: Traditional (no smoke character) and Peated (low level of peat smoke character).",
					"ibuMin": "12",
					"ibuMax": "20",
					"abvMin": "3.5",
					"abvMax": "4",
					"srmMin": "10",
					"srmMax": "19",
					"ogMin": "1.035",
					"fgMin": "1.01",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:19:48"
				}
			},
			{
				"id": "RYtnLo",
				"name": "Drafty Kilt Nitro",
				"nameDisplay": "Drafty Kilt Nitro",
				"abv": "7.2",
				"ibu": "26",
				"styleId": 8,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/RYtnLo/upload_YfXcDc-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/RYtnLo/upload_YfXcDc-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/RYtnLo/upload_YfXcDc-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2016-02-17 19:51:54",
				"updateDate": "2016-02-17 19:53:22",
				"style": {
					"id": 8,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Scottish-Style Heavy Ale",
					"shortName": "Scottish Heavy",
					"description": "Scottish heavy ale is moderate in strength and dominated by a smooth, sweet maltiness balanced with low, but perceptible, hop bitterness. Hop flavor or aroma should not be perceived. Scottish heavy ale will have a medium degree of malty, caramel-like, soft and chewy character in flavor and mouthfeel. It has medium body, and fruity esters are very low, if evident. Yeast characters such as diacetyl (butterscotch) and sulfuriness are acceptable at very low levels. The color will range from golden amber to deep brown. Bottled versions of this traditional draft beer may contain higher amounts of carbon dioxide than is typical for mildly carbonated draft versions. Chill haze is acceptable at low temperatures. Though there is little evidence suggesting that traditionally made Scottish-style heavy ales exhibited peat smoke character, the current marketplace offers many Scottish-style heavy ales with peat or smoke character present at low to medium levels. Thus a peaty/smoky character may be evident at low to medium levels (ales with medium-high or higher smoke character would be considered a smoke flavored beer and considered in another category). Scottish-style heavy ales may be split into two subcategories: Traditional (no smoke character) and Peated (low level of peat smoke character).",
					"ibuMin": "12",
					"ibuMax": "20",
					"abvMin": "3.5",
					"abvMax": "4",
					"srmMin": "10",
					"srmMax": "19",
					"ogMin": "1.035",
					"fgMin": "1.01",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:19:48"
				}
			},
			{
				"id": "AXqmST",
				"name": "Eye Patch Ale",
				"nameDisplay": "Eye Patch Ale",
				"description": "A crisp, drinkable IPA. The earthy deliciousness of Cascade and Simcoe hops, combined with upfront malt flavor, and balanced with a pirate’s sensibilities. Our Eye Patch Ale is a uniquely drinkable take on the American IPA – sweet caramel, citrusy flowers and swashbuckling adventure abound with every pint.",
				"abv": "6.2",
				"ibu": "46",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 30,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/AXqmST/upload_kAyPW0-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/AXqmST/upload_kAyPW0-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/AXqmST/upload_kAyPW0-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-25 00:13:24",
				"updateDate": "2015-12-16 15:37:50",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "rEJjlZ",
				"name": "Fu Manbrew",
				"nameDisplay": "Fu Manbrew",
				"description": "A bright, spicy Belgian-style wit. An effervescent, easy-drinking wheat beer, brewed with Belgian yeast, German hops, and a whisper of ginger from the Far East. This mustachio’d Belgian-style wit believes that good beer defies borders. The name Fu Manbrew was crowdsourced with some help from our friends at Scoutmob. They call the mustache a “Flavor Savor” for a reason.",
				"abv": "5.2",
				"ibu": "15",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 65,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/rEJjlZ/upload_pEtAMr-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/rEJjlZ/upload_pEtAMr-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/rEJjlZ/upload_pEtAMr-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-11-04 22:41:27",
				"updateDate": "2015-12-16 20:26:18",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 65,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style White (or Wit) / Belgian-Style Wheat",
					"shortName": "Witbier",
					"description": "Belgian white ales are very pale in color and are brewed using unmalted wheat and malted barley and are spiced with coriander and orange peel. Coriander and light orange peel aroma should be perceived as such or as an unidentified spiciness. Phenolic spiciness and yeast flavors may be evident at mild levels. These beers are traditionally bottle conditioned and served cloudy. An unfiltered starch and yeast haze should be part of the appearance. The low to medium body should have some degree of creaminess from wheat starch. The style is further characterized by the use of noble-type hops to achieve low hop bitterness and little to no apparent hop flavor. This beer has no diacetyl and a low to medium fruity-ester level. Mild acidity is appropriate.",
					"ibuMin": "10",
					"ibuMax": "17",
					"abvMin": "4.8",
					"abvMax": "5.2",
					"srmMin": "2",
					"srmMax": "4",
					"ogMin": "1.044",
					"fgMin": "1.006",
					"fgMax": "1.01",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:32:30"
				}
			},
			{
				"id": "9PtQg4",
				"name": "Fu Manbrew Gose",
				"nameDisplay": "Fu Manbrew Gose",
				"abv": "5.2",
				"ibu": "15",
				"styleId": 47,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2016-05-10 13:03:23",
				"updateDate": "2016-05-10 13:03:23",
				"style": {
					"id": 47,
					"categoryId": 4,
					"category": {
						"id": 4,
						"name": "German Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Leipzig-Style Gose",
					"shortName": "Leipzig Gose",
					"description": "Traditional examples of Gose are spontaneously fermented, similarly to Belgian-style gueuze/lambic beers, and should exhibit complexity of acidic, flavor and aroma contributed by introduction of wild yeast and bacteria into the fermentation. A primary difference between Belgian Gueuze and German Gose is that Gose is served at a much younger age. Gose is typically pale gold to pale amber in color and typically contains malted barley, unmalted wheat with some traditional varieties containing oats. Hop character and malt flavors and aromas are negligible. Lemony or other citrus-like qualities are often present in aroma and on the palate. Some versions may have the spicy character of added coriander in aroma and on the palate at low to medium levels. Salt (table salt) character is also traditional in low amounts. Horsey, leathery, earthy aroma and flavors contributed by Brettanomyces yeasts may be evident but have a very low profile, as this beer is not excessively aged. Modern German Gose breweries typically introduce only pure beer yeast strains for fermentation. Low to medium lactic acid character is evident in all examples as sharp, refreshing sourness. Gose is typically enjoyed fresh, carbonated, and cloudy/hazy with yeast character, and may have evidence of continued fermentation activity. Overall complexity of flavors and aromas are sought while maintaining an ideal balance between acidity, yeast-enhanced spice and refreshment is ideal.",
					"ibuMin": "10",
					"ibuMax": "15",
					"abvMin": "4.4",
					"abvMax": "5.4",
					"srmMin": "3",
					"srmMax": "9",
					"ogMin": "1.036",
					"fgMin": "1.008",
					"fgMax": "1.012",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 17:09:35"
				}
			},
			{
				"id": "YIb9s1",
				"name": "Fu Manbrew Gose",
				"nameDisplay": "Fu Manbrew Gose",
				"description": "The gose is a traditional German style known for its wheat base, tartness, and saltiness. We kettle sour our version, resulting in a pleasant lemon note that balances the sea salt nicely. Oh – and then we dry hop it to accentuate the aromas. The soul of Fu Manbrew lives on in this beer, with its crisp taste and pristine mustache.",
				"abv": "5.2",
				"ibu": "15",
				"availableId": 2,
				"styleId": 165,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/YIb9s1/upload_qYdWOd-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/YIb9s1/upload_qYdWOd-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/YIb9s1/upload_qYdWOd-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Fish, salads, citrus, salty dishes",
				"createDate": "2016-05-04 18:34:01",
				"updateDate": "2016-05-13 19:01:10",
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 165,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Contemporary Gose",
					"shortName": "Contemporary Gose",
					"description": "Contemporary Goses are straw to medium amber, or, may take on the hue of added fruits or other ingredients if present. Appearance is cloudy/hazy with yeast character, and may have evidence of continued fermentation activity. A wide variety of herbal, spice, floral or fruity aromas other than found in traditional Leipzig-Style Gose are present, in harmony with other aromas. Horsey, leathery or earthy aromas contributed by Brettanomyces yeasts may be evident but have a very low profile, as this beer is not excessively aged. Hop aroma is not perceived. Malt sweetness is not perceived to very low. They typically contain malted barley and unmalted wheat, with some traditional varieties containing oats. Hop flavor is not perceived. Hop bitterness is not perceived. A wide variety of herbal, spice, floral or fruity flavors other than found in traditional Leipzig-Style Gose, are present in harmony with the overall flavor profile. Salt (table salt) character is traditional in low amounts, but may vary from absent to present in Contemporary Gose. Horsey, leathery or earthy flavors contributed by Brettanomyces yeasts may be evident but have a very low profile, as this beer is not excessively aged. Contemporary Gose may be fermented with pure beer yeast strains, or with yeast mixed with bacteria. Contemporary Gose may be spontaneously fermented, similarly to Belgian-style gueuze/lambic beers, and should exhibit complexity of acidic, flavor and aroma contributed by introduction of wild yeast and bacteria into the fermentation. Low to medium lactic acid character is evident in all examples as sharp, refreshing sourness. A primary difference between Belgian Gueuze and Gose is that Gose is served at a much younger age. Gose is typically enjoyed fresh and carbonated. Overall complexity of flavors and aromas sought while maintaining a balance between acidity, yeast-enhanced spice and refreshment is ideal. Body is low to medium-low.",
					"createDate": "2015-04-07 17:10:42"
				}
			},
			{
				"id": "5RzAt1",
				"name": "Gun Show",
				"nameDisplay": "Gun Show",
				"abv": "8",
				"ibu": "34",
				"styleId": 61,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/5RzAt1/upload_aacC1v-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/5RzAt1/upload_aacC1v-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/5RzAt1/upload_aacC1v-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2014-07-10 13:02:25",
				"updateDate": "2015-12-17 15:13:12",
				"style": {
					"id": 61,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style Blonde Ale",
					"shortName": "Belgian Blonde",
					"description": "Belgian-style blond ales are characterized by low yet evident hop bitterness, flavor, and sometimes aroma. Light to medium body and low malt aroma with a sweet, spiced and a low to medium fruity-ester character orchestrated in flavor and aroma. Sugar may be used to lighten perceived body. They are blonde to golden in color. Noble-type hops are commonly used. Low levels of phenolic spiciness from yeast byproducts may be perceived. Diacetyl should not be perceived. Acidic character should not be present. Chill haze is allowable at cold temperatures.",
					"ibuMin": "15",
					"ibuMax": "30",
					"abvMin": "6",
					"abvMax": "7.8",
					"srmMin": "4",
					"srmMax": "7",
					"ogMin": "1.054",
					"fgMin": "1.008",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:32:01"
				}
			},
			{
				"id": "UmMwac",
				"name": "Hipster Fresh Hop",
				"nameDisplay": "Hipster Fresh Hop",
				"abv": "5.5",
				"glasswareId": 5,
				"availableId": 4,
				"styleId": 26,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/UmMwac/upload_877AxL-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/UmMwac/upload_877AxL-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/UmMwac/upload_877AxL-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-09-02 15:09:35",
				"updateDate": "2015-12-17 05:21:29",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 26,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Fresh \"Wet\" Hop Ale",
					"shortName": "Wet Hop Ale",
					"description": "Any style of ale can be made into a fresh hop or wet hop version. These ales are hopped predominantly with fresh (newly harvested and kilned) and/or undried (“wet”) hops. These beers will exhibit especially aromas and flavors of green, almost chlorophyll-like or other fresh hop characters, in harmony with the characters of the base style of the beer. These beers may be aged and enjoyed after the initial “fresh-hop” character diminishes. Unique character from “aged” fresh hop beers may emerge, but they have yet to be defined.",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:25:25"
				}
			},
			{
				"id": "wdDEHt",
				"name": "Master Splinter",
				"nameDisplay": "Master Splinter",
				"description": "This red ale has the big malt backbone and creamy mouthfeel you’d expect from a red, but with a little something extra. It’s dry-hopped with the floral East Kent Golding hop, and aged on hard maple. None of that sissy soft maple your mom uses.",
				"abv": "9",
				"ibu": "50",
				"styleId": 33,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-03-19 19:54:25",
				"updateDate": "2015-03-23 18:27:11",
				"style": {
					"id": 33,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Imperial Red Ale",
					"shortName": "Imperial Red",
					"description": "Imperial Red Ales are deep amber to dark copper/reddish brown. A small amount of chill haze is allowable at cold temperatures. Fruity-ester aroma is medium. Hop aroma is intense, arising from any variety of hops. Medium to high caramel malt character is present. Hop flavor is intense, and balanced with other beer characters. They may use any variety of hops. Hop bitterness is intense. Alcohol content is very high and of notable character. Complex alcohol flavors may be evident. Fruity-ester flavors are medium. Diacetyl should not be perceived. Body is full.",
					"ibuMin": "55",
					"ibuMax": "85",
					"abvMin": "7.9",
					"abvMax": "10.5",
					"srmMin": "10",
					"srmMax": "15",
					"ogMin": "1.08",
					"fgMin": "1.02",
					"fgMax": "1.028",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 17:05:43"
				}
			},
			{
				"id": "CK2aN7",
				"name": "Nerd Alert",
				"nameDisplay": "Nerd Alert",
				"abv": "5",
				"glasswareId": 4,
				"availableId": 1,
				"styleId": 98,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/CK2aN7/upload_QDNAwk-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/CK2aN7/upload_QDNAwk-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/CK2aN7/upload_QDNAwk-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2014-02-09 12:53:34",
				"updateDate": "2015-12-17 10:17:55",
				"glass": {
					"id": 4,
					"name": "Pilsner",
					"createDate": "2012-01-03 02:41:33"
				},
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
				"id": "R2giDL",
				"name": "Nitro Eye Patch IPA",
				"nameDisplay": "Nitro Eye Patch IPA",
				"description": "A crisp, drinkable IPA. The earthy deliciousness of Cascade and Magnum hops, combined with upfront malt flavor, and balanced with a pirate’s sensibilities. Our Eye Patch Ale is a uniquely drinkable take on the American IPA – sweet caramel, citrusy flowers and swashbuckling adventure abound with every pint.",
				"abv": "6.2",
				"ibu": "46",
				"styleId": 30,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2016-08-19 17:11:11",
				"updateDate": "2016-08-19 17:11:11",
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "tpKa4g",
				"name": "Serrano Eye Patch Ale",
				"nameDisplay": "Serrano Eye Patch Ale",
				"abv": "6.2",
				"glasswareId": 5,
				"styleId": 30,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/tpKa4g/upload_qZaymU-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/tpKa4g/upload_qZaymU-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/tpKa4g/upload_qZaymU-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-11-13 02:00:31",
				"updateDate": "2015-12-17 07:22:22",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "jYMI1C",
				"name": "Slap Fight",
				"nameDisplay": "Slap Fight",
				"description": "Slap Fight will woo you in with a West Coast-style malt bill, but slaps you across the face with its tropical hop profile. Light in body, heavy in character, this IPA features Munich and Crystal pale malts for a clean, rich mouthfeel. Comet, Equinox and Mosaic hops lend a pungent herbal aroma, peppered with hints of papaya, orange and grapefruit. Present this beer to a friend. If he does not drink it immediately, slap him as hard as you can. Repeat.",
				"abv": "5.8",
				"ibu": "58",
				"availableId": 1,
				"styleId": 30,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/jYMI1C/upload_OwPQkB-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/jYMI1C/upload_OwPQkB-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/jYMI1C/upload_OwPQkB-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Spicy curries, citrus, chicken, key lime pie",
				"createDate": "2016-04-29 13:30:18",
				"updateDate": "2016-04-29 15:25:49",
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "3MPWMm",
				"name": "Super Nerd Imperial Pilsner",
				"nameDisplay": "Super Nerd Imperial Pilsner",
				"description": "Super Nerd is a variation on our Nerd Alert with more malt, more lagering, and more throat punch. By day, mild-mannered Super Nerd pretends to be refreshing and crisp, with the perfect balance between sweet malt and hop bite.\r\n\r\nBy night, Super Nerd taps into his secret powers: dodging bullies, standing awkwardly on the sidelines of dances, and playing the tuba. Drink up – it just might save the world.",
				"abv": "7.5",
				"ibu": "22",
				"styleId": 98,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Fish, pizza, hamburgers, lightly spiced foods",
				"createDate": "2016-08-19 17:15:23",
				"updateDate": "2016-08-19 17:15:23",
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
				"id": "fg8KWD",
				"name": "Tie 5 On Wild IPA",
				"nameDisplay": "Tie 5 On Wild IPA",
				"abv": "6.6",
				"styleId": 30,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2016-08-19 17:19:43",
				"updateDate": "2016-08-19 17:19:43",
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			}
		];

var oDempseysBeerData = [
			{
				"id": "RXlpNB",
				"name": "Big Red Ale",
				"nameDisplay": "Big Red Ale",
				"description": "It’s Big! It’s Red! It’s an Irish-Style Red Ale with a North American Attitude! With 30 IBUs and an original gravity of 1.058, this 6% ABV Red Ale has all the body you want with just the right amount of hoppy goodness.",
				"abv": "6",
				"ibu": "30",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 22,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/RXlpNB/upload_cg1EW7-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/RXlpNB/upload_cg1EW7-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/RXlpNB/upload_cg1EW7-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:42:49",
				"updateDate": "2015-12-16 09:16:17",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 22,
					"categoryId": 2,
					"category": {
						"id": 2,
						"name": "Irish Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Irish-Style Red Ale",
					"shortName": "Irish Red",
					"description": "Irish-style red ales range from light red-amber-copper to light brown in color. These ales have a medium hop bitterness and flavor. They often don't have hop aroma. Irish-style red ales have low to medium candy-like caramel malt sweetness and may have a balanced subtle degree of roast barley or roast malt character and complexity.  Irish-style Red Ales have a medium body. The style may have low levels of fruity-ester flavor and aroma. Diacetyl should be absent or at very low levels. Chill haze is allowable at cold temperatures. Slight yeast haze is acceptable for bottle-conditioned products.",
					"ibuMin": "20",
					"ibuMax": "28",
					"abvMin": "4",
					"abvMax": "4.5",
					"srmMin": "11",
					"srmMax": "18",
					"ogMin": "1.04",
					"fgMin": "1.01",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:23:38"
				}
			},
			{
				"id": "3rUdWc",
				"name": "Inukshuk IPA",
				"nameDisplay": "Inukshuk IPA",
				"description": "Weighing in at 1.067 Original Gravity and 69 IBUs, Inukshuk IPA combines a bitter hop bite and light citrus nose with just enough of a malt backbone to support its 7% ABV all together achieving a balancing act for your senses.",
				"abv": "7",
				"ibu": "69",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 30,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/3rUdWc/upload_JIEnq6-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/3rUdWc/upload_JIEnq6-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/3rUdWc/upload_JIEnq6-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"originalGravity": "1.067",
				"createDate": "2012-01-03 02:43:29",
				"updateDate": "2015-12-16 08:30:11",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "gBDRg3",
				"name": "Your Black Heart Russian Imperial Stout",
				"nameDisplay": "Your Black Heart Russian Imperial Stout",
				"description": "With 90 IBUs and 8% ABV you might expect something else but with an Original Gravity of 1.092, balance is restored.",
				"abv": "8",
				"ibu": "90",
				"glasswareId": 8,
				"srmId": 41,
				"availableId": 1,
				"styleId": 43,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/gBDRg3/upload_oMWRAK-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/gBDRg3/upload_oMWRAK-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/gBDRg3/upload_oMWRAK-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"originalGravity": "1.092",
				"createDate": "2012-01-03 02:44:34",
				"updateDate": "2015-12-16 10:09:56",
				"glass": {
					"id": 8,
					"name": "Tulip",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 41,
					"name": "Over 40",
					"hex": "000000"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 43,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Imperial Stout",
					"shortName": "American Imperial Stout",
					"description": "Black in color, American-style imperial stouts typically have a high alcohol content. Generally characterized as very robust. The extremely rich malty flavor and aroma are balanced with assertive hopping and fruity-ester characteristics. Bitterness should be moderately high to very high and balanced with full sweet malt character. Roasted malt astringency and bitterness can be moderately perceived but should not overwhelm the overall character. Hop aroma is usually moderately-high to overwhelmingly hop-floral, -citrus or -herbal. Diacetyl (butterscotch) levels should be absent.",
					"ibuMin": "50",
					"ibuMax": "80",
					"abvMin": "7",
					"abvMax": "12",
					"srmMin": "40",
					"srmMax": "40",
					"ogMin": "1.08",
					"fgMin": "1.02",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:28:49"
				}
			}
		];

var orpheusBeerData = [
			{
				"id": "jbF0XS",
				"name": "Atalanta",
				"nameDisplay": "Atalanta",
				"description": "In the heroine Atalanta, we see the traits of what we aim for in all of our beers: piquant, deceptively robust, and a bit wild. A tart plum saison, Atalanta tastes of plums intermingling with spicy yeast, and a refreshing tartness that makes Atalanta as good for pairing with food as by itself.",
				"abv": "5.25",
				"availableId": 1,
				"styleId": 125,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/jbF0XS/upload_a0ZZ5M-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/jbF0XS/upload_a0ZZ5M-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/jbF0XS/upload_a0ZZ5M-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Atalanta is mildly assertive, fruity, acidic, and dry. Its acidity and fruitiness make it an ideal complement to most cheeses and oysters. Its dryness and only mild assertiveness means it can also be paired very well with poultry and delicate fish, but it has enough flavor to also be paired nicely with a strong curry.",
				"createDate": "2015-04-01 20:01:06",
				"updateDate": "2016-02-22 20:12:12",
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 125,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Specialty Beer",
					"shortName": "Specialty",
					"description": "These beers are brewed using unusual fermentable sugars, grains and starches that contribute to alcohol content other than, or in addition to, malted barley. Nuts generally have some degree of fermentables, thus beers brewed with nuts would appropriately be entered in this category. The distinctive characters of these special ingredients should be evident either in the aroma, flavor or overall balance of the beer, but not necessarily in overpowering quantities. For example, maple syrup or potatoes would be considered unusual. Rice, corn, or wheat are not considered unusual. Special ingredients must be listed when competing. A statement by the brewer explaining the special nature of the beer, ingredient(s) and achieved character is essential in order for fair assessment in competitions. If this beer is a classic style with some specialty ingredient(s), the brewer should also specify the classic style. Guidelines for competing: Spiced beers using unusual fermentables should be entered in the experimental category. Fruit beers using unusual fermentables should be entered in the fruit beer category.",
					"ibuMax": "100",
					"abvMin": "2.5",
					"abvMax": "25",
					"srmMin": "1",
					"srmMax": "100",
					"ogMin": "1.03",
					"fgMin": "1.006",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:44:53"
				}
			},
			{
				"id": "68tNh5",
				"name": "Barrel Aged Sykophantes",
				"nameDisplay": "Barrel Aged Sykophantes",
				"description": "In ancient Greece, “showing the fig” was a vulgar hand gesture, and Sykophantes means “one who shows the fig”. Earthy and full of dark fruit flavor from hundreds of pounds of figs and dark candy syrup, but with a sourness that cuts the gentle sweetness, Sykophantes is our fall beer.",
				"abv": "9.5",
				"availableId": 2,
				"styleId": 40,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/68tNh5/upload_srkOCV-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/68tNh5/upload_srkOCV-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/68tNh5/upload_srkOCV-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-11-10 15:48:24",
				"updateDate": "2015-12-18 05:47:56",
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 40,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Sour Ale",
					"shortName": "Sour",
					"description": "American sour ales can be very light to black or take on the color of added fruits or other ingredients. There is no Brettanomyces character in this style of beer. Wood- and barrel-aged sour ales are classified elsewhere. If acidity is present it is usually in the form of lactic, acetic and other organic acids naturally developed with acidified malt in the mash or in fermentation by the use of various microorganisms including certain bacteria and yeasts. Acidic character can be a complex balance of several types of acid and characteristics of age. The evolution of natural acidity develops balanced complexity. Residual flavors that come from liquids previously aged in a barrel such as bourbon or sherry should not be present. Wood vessels may be used during the fermentation and aging process, but wood-derived flavors such as vanillin must not be present. In darker versions, roasted malt, caramel-like and chocolate-like characters should be subtle in both flavor and aroma. American sour may have evident full range of hop aroma and hop bitterness with a full range of body. Estery and fruity-ester characters are evident, sometimes moderate and sometimes intense, yet balanced. Diacetyl and sweet corn-like dimethylsulfide (DMS) should not be perceived. Chill haze, bacteria and yeast-induced haze are allowable at low to medium levels at any temperature. Fruited American-Style Sour Ales will exhibit fruit flavors in harmonious balance with other characters.",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:28:32"
				}
			},
			{
				"id": "Luxogt",
				"name": "Lyric Ale",
				"nameDisplay": "Lyric Ale",
				"description": "The beautiful music of Orpheus had power over the living, could move inanimate objects, and even hold sway over the gods. Lyric Ale is an ode to this profound beauty, which guides everything we do. We use a blend of hops from three continents and our house saison yeast to strike this harmonic balance of fruit and spice.",
				"abv": "6.5",
				"ibu": "6.5",
				"availableId": 1,
				"styleId": 125,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/Luxogt/upload_CuX43q-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/Luxogt/upload_CuX43q-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/Luxogt/upload_CuX43q-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Dry enough to not overwhelm, but strong enough flavor to stand up to most foods, Lyric Ale makes for easy food pairing. Lyric Ale is a great choice with cheese, barbecue, and fruit desserts.",
				"createDate": "2015-04-01 20:02:46",
				"updateDate": "2015-12-17 23:23:40",
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 125,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Specialty Beer",
					"shortName": "Specialty",
					"description": "These beers are brewed using unusual fermentable sugars, grains and starches that contribute to alcohol content other than, or in addition to, malted barley. Nuts generally have some degree of fermentables, thus beers brewed with nuts would appropriately be entered in this category. The distinctive characters of these special ingredients should be evident either in the aroma, flavor or overall balance of the beer, but not necessarily in overpowering quantities. For example, maple syrup or potatoes would be considered unusual. Rice, corn, or wheat are not considered unusual. Special ingredients must be listed when competing. A statement by the brewer explaining the special nature of the beer, ingredient(s) and achieved character is essential in order for fair assessment in competitions. If this beer is a classic style with some specialty ingredient(s), the brewer should also specify the classic style. Guidelines for competing: Spiced beers using unusual fermentables should be entered in the experimental category. Fruit beers using unusual fermentables should be entered in the fruit beer category.",
					"ibuMax": "100",
					"abvMin": "2.5",
					"abvMax": "25",
					"srmMin": "1",
					"srmMax": "100",
					"ogMin": "1.03",
					"fgMin": "1.006",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:44:53"
				}
			},
			{
				"id": "ij4kYd",
				"name": "Orpheus",
				"nameDisplay": "Orpheus",
				"styleId": 25,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-10-28 00:09:14",
				"updateDate": "2015-10-28 18:35:40",
				"style": {
					"id": 25,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Pale Ale",
					"shortName": "American Pale",
					"description": "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
					"ibuMin": "30",
					"ibuMax": "42",
					"abvMin": "4.5",
					"abvMax": "5.6",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.044",
					"fgMin": "1.008",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:25:18"
				}
			},
			{
				"id": "aYPQzl",
				"name": "Sykophantes",
				"nameDisplay": "Sykophantes",
				"description": "In ancient Greece, “showing the fig” was a vulgar hand gesture, and Sykophantes means “one who shows the fig”. Earthy and full of dark fruit flavor from hundreds of pounds of figs and dark candy syrup, but with a sourness that cuts the gentle sweetness, Sykophantes is our fall beer.",
				"abv": "7.5",
				"availableId": 7,
				"styleId": 125,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/aYPQzl/upload_AGOPnU-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/aYPQzl/upload_AGOPnU-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/aYPQzl/upload_AGOPnU-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "The combination of rich, earthy sweetness and sourness in Sykophantes make it a great pairing for rich, spiced foods like a Moroccan tagine or Hungarian goulash.",
				"createDate": "2015-04-01 20:05:27",
				"updateDate": "2015-12-17 23:24:20",
				"available": {
					"id": 7,
					"name": "Fall",
					"description": "Available during the fall months."
				},
				"style": {
					"id": 125,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Specialty Beer",
					"shortName": "Specialty",
					"description": "These beers are brewed using unusual fermentable sugars, grains and starches that contribute to alcohol content other than, or in addition to, malted barley. Nuts generally have some degree of fermentables, thus beers brewed with nuts would appropriately be entered in this category. The distinctive characters of these special ingredients should be evident either in the aroma, flavor or overall balance of the beer, but not necessarily in overpowering quantities. For example, maple syrup or potatoes would be considered unusual. Rice, corn, or wheat are not considered unusual. Special ingredients must be listed when competing. A statement by the brewer explaining the special nature of the beer, ingredient(s) and achieved character is essential in order for fair assessment in competitions. If this beer is a classic style with some specialty ingredient(s), the brewer should also specify the classic style. Guidelines for competing: Spiced beers using unusual fermentables should be entered in the experimental category. Fruit beers using unusual fermentables should be entered in the fruit beer category.",
					"ibuMax": "100",
					"abvMin": "2.5",
					"abvMax": "25",
					"srmMin": "1",
					"srmMax": "100",
					"ogMin": "1.03",
					"fgMin": "1.006",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:44:53"
				}
			},
			{
				"id": "KmKzzx",
				"name": "The 12th Labor",
				"nameDisplay": "The 12th Labor",
				"description": "The 12th Labor is an overpowering 13% Imperial Stout with intensely layered flavors of dark chocolate, coffee, smoke, and dark fruit. You’ll be lulled to dreams of a distant past you can’t quite remember in a world teeming with noise and flesh. With each sip, The 12th Labor is a struggle at the edge of darkness.",
				"abv": "13",
				"srmId": 41,
				"availableId": 2,
				"styleId": 43,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/KmKzzx/upload_Nj4z68-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/KmKzzx/upload_Nj4z68-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/KmKzzx/upload_Nj4z68-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-11-10 16:01:17",
				"updateDate": "2015-12-18 05:47:47",
				"srm": {
					"id": 41,
					"name": "Over 40",
					"hex": "000000"
				},
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 43,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Imperial Stout",
					"shortName": "American Imperial Stout",
					"description": "Black in color, American-style imperial stouts typically have a high alcohol content. Generally characterized as very robust. The extremely rich malty flavor and aroma are balanced with assertive hopping and fruity-ester characteristics. Bitterness should be moderately high to very high and balanced with full sweet malt character. Roasted malt astringency and bitterness can be moderately perceived but should not overwhelm the overall character. Hop aroma is usually moderately-high to overwhelmingly hop-floral, -citrus or -herbal. Diacetyl (butterscotch) levels should be absent.",
					"ibuMin": "50",
					"ibuMax": "80",
					"abvMin": "7",
					"abvMax": "12",
					"srmMin": "40",
					"srmMax": "40",
					"ogMin": "1.08",
					"fgMin": "1.02",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:28:49"
				}
			},
			{
				"id": "9xIKr0",
				"name": "The Ferryman",
				"nameDisplay": "The Ferryman",
				"abv": "10.5",
				"styleId": 43,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/9xIKr0/upload_DsiK0n-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/9xIKr0/upload_DsiK0n-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/9xIKr0/upload_DsiK0n-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-12-02 20:35:40",
				"updateDate": "2015-12-18 05:57:11",
				"style": {
					"id": 43,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Imperial Stout",
					"shortName": "American Imperial Stout",
					"description": "Black in color, American-style imperial stouts typically have a high alcohol content. Generally characterized as very robust. The extremely rich malty flavor and aroma are balanced with assertive hopping and fruity-ester characteristics. Bitterness should be moderately high to very high and balanced with full sweet malt character. Roasted malt astringency and bitterness can be moderately perceived but should not overwhelm the overall character. Hop aroma is usually moderately-high to overwhelmingly hop-floral, -citrus or -herbal. Diacetyl (butterscotch) levels should be absent.",
					"ibuMin": "50",
					"ibuMax": "80",
					"abvMin": "7",
					"abvMax": "12",
					"srmMin": "40",
					"srmMax": "40",
					"ogMin": "1.08",
					"fgMin": "1.02",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:28:49"
				}
			},
			{
				"id": "X9Vq6z",
				"name": "The Rites",
				"nameDisplay": "The Rites",
				"description": "We take our inspiration from Orpheus, who revealed the mysteries of the gods. The Orphic Rites break the never ending cycle of the Transmigration of Souls, allowing us to control our own destiny. This juicy, mysteriously hopped IPA is brewed for those who are ready to break the monotony, to dream, and to take control.",
				"abv": "6.7",
				"styleId": 30,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/X9Vq6z/upload_LZ47rM-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/X9Vq6z/upload_LZ47rM-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/X9Vq6z/upload_LZ47rM-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2016-02-18 14:40:57",
				"updateDate": "2016-02-18 14:43:20",
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "xl5RJq",
				"name": "Transmigration of Souls",
				"nameDisplay": "Transmigration of Souls",
				"description": "Inspired by the Orphic bone tablets which explore the dichotomous nature of life and death, our Bone Tablet series reveals the many sides of the IPA. Transmigration of Souls is an irresponsibly hopped Double IPA, bursting with life from an absurd amount of aromatic hops. You’ll experience a bouquet of orange, lemon, and tropical fruit sitting on top of a clean, dry malt body.",
				"abv": "10",
				"availableId": 4,
				"styleId": 31,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/xl5RJq/upload_pz28OI-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/xl5RJq/upload_pz28OI-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/xl5RJq/upload_pz28OI-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Transmigration of Souls is very overpowering; just pair it with another Transmigration of Souls. If you must eat, Transmigration of Souls is bold and dry, with an abundance of tropical fruit. It will pair well with spicy food.",
				"createDate": "2016-04-11 20:53:40",
				"updateDate": "2016-04-11 20:54:56",
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 31,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Imperial or Double India Pale Ale",
					"shortName": "Imperial IPA",
					"description": "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
					"ibuMin": "65",
					"ibuMax": "100",
					"abvMin": "7.5",
					"abvMax": "10.5",
					"srmMin": "5",
					"srmMax": "13",
					"ogMin": "1.075",
					"fgMin": "1.012",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:46"
				}
			}
		];

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

var pontoonBeerData = [
			{
				"id": "5CRcJ6",
				"name": "No Pants Pilsner",
				"nameDisplay": "No Pants Pilsner",
				"description": "Pants are undeniably a constraining piece of material that sings songs of boredom and monotony. Why do we wear ‘em? Who knows. But we do know that our No Pants Pilsner is an unconstrained and unique brew that blends old school Gold Rush Common-Style brewing with traditional Saaz hops and Pilsen malt from our European friends across the pond. What does that mean for you? Flavor, drinkability, and absolute awesomeness. Go ahead and pop off those pants and jump aboard your party platform.",
				"abv": "5.5",
				"ibu": "30",
				"availableId": 1,
				"styleId": 98,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2016-02-17 15:10:45",
				"updateDate": "2016-02-17 15:13:28",
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
				"id": "Ssio9f",
				"name": "Southern Skipper",
				"nameDisplay": "Southern Skipper",
				"description": "White IPA\r\nWe know how you like em’…  Bold and smooth. Complex yet grounded. Bitter with a touch of sweet. This White IPA is our flagship brew, perfectly balanced for the Pontoon Lifestyle. American Wheat compliments a boatload of Centennial hops to bring out an aromatic, crisp, and radically flavorful beer that will aid in all your Southern Skipper activities, whatever they may be. Shades On, Bottoms Up!",
				"abv": "6",
				"ibu": "55",
				"availableId": 1,
				"styleId": 30,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2016-02-17 14:57:58",
				"updateDate": "2016-02-17 14:57:59",
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			}
		];

var redBrickBeerData = [
			{
				"id": "s95tMN",
				"name": "17 Anniversary",
				"nameDisplay": "17 Anniversary",
				"abv": "8.5",
				"availableId": 3,
				"styleId": 132,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/s95tMN/upload_FR54mv-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/s95tMN/upload_FR54mv-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/s95tMN/upload_FR54mv-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-09-06 12:44:39",
				"updateDate": "2015-12-16 19:18:11",
				"available": {
					"id": 3,
					"name": "Not Available",
					"description": "Beer is not available."
				},
				"style": {
					"id": 132,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Wood- and Barrel-Aged Beer",
					"shortName": "BBL Aged",
					"description": "A wood- or barrel-aged beer is any lager, ale or hybrid beer, either a traditional style or a unique experimental beer that has been aged for a period of time in a wooden barrel or in contact with wood. This beer is aged with the intention of imparting the particularly unique character of the wood and/or what has previously been in the barrel. New wood character can be characterized as a complex blend of vanillin and/or other unique wood character, but wood aged is not necessarily synonymous with imparting wood-flavors. Used sherry, rum, bourbon, scotch, port, wine and other barrels are often used, imparting complexity and uniqueness to beer. Ultimately a balance of flavor, aroma and mouthfeel are sought with the marriage of new beer with wood and/or barrel flavors. Beers in this style may or may not have Brettanomyces character. Brewers when entering this category should specify type of barrel and/or wood used and any other special treatment or ingredients used. Competition managers may create style subcategories to differentiate between high alcohol and low alcohol beers and very dark and lighter colored beer as well as for fruit beers and non-fruit beers. Competitions may develop guidelines requesting brewers to specify what kind of wood (new or used oak, other wood varieties) and/or barrel (whiskey, port, sherry, wine, etc.) was used in the process. The brewer may be asked to explain the special nature (wood used, base beer style(s) and achieved character) of the beer.",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:46:27"
				}
			},
			{
				"id": "CxAMDL",
				"name": "20th Anniversary",
				"nameDisplay": "20th Anniversary",
				"description": "20th Anniversary, Brick Mason Series #7, is an Imperial Stout aged in bourbon barrels. We are celebrating our milestone anniversary with a milestone beer that will be the strongest beer in brewery’s history. Rich dark chocolate and roasted coffee flavors are balanced by sweet caramel malts. Bourbon barrels provide big bourbon notes supported by flavors of oak and vanilla. This beer commemorates Red Brick Brewing Company’s 20 year brewing tradition. And while we’re focused on the future, we’ll never forget our humble beginnings.",
				"abv": "10",
				"ibu": "80",
				"glasswareId": 6,
				"srmId": 41,
				"availableId": 2,
				"styleId": 135,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/CxAMDL/upload_hvtRIw-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/CxAMDL/upload_hvtRIw-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/CxAMDL/upload_hvtRIw-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"servingTemperature": "cellar",
				"servingTemperatureDisplay": "Cellar - (12-14C/54-57F)",
				"createDate": "2013-08-13 14:26:16",
				"updateDate": "2015-12-17 05:37:53",
				"glass": {
					"id": 6,
					"name": "Snifter",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 41,
					"name": "Over 40",
					"hex": "000000"
				},
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 135,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Wood- and Barrel-Aged Strong Beer",
					"shortName": "BBL Aged Strong",
					"description": "Any strong classic style or unique, experimental style of beer can be wood or barrel-aged for a period of time in a wooden barrel or in contact with wood. This beer is aged with the intention of imparting the particularly unique character of the wood and/or what has previously been in the barrel. New wood character can be characterized as a complex blend of vanillin and unique wood character but wood aged is not necessarily synonymous with imparting wood-flavors. Used sherry, rum, bourbon, scotch, port, wine and other barrels are often used, imparting complexity and uniqueness to beer. Ultimately a balance of flavor, aroma and mouthfeel are sought with the marriage of new beer with wood and/or barrel flavors. Primary character of the beer style may or may not be apparent. Sour wood-aged beer of any color is outlined in other categories. Beers in this style may or may not have Brettanomyces character. The brewer must explain the special nature of the beer to allow for accurate judging. Comments could include: type of wood used (new or old, oak or other wood type), type of barrel used (new, port/ whiskey/ wine/ sherry/ other), base beer style or achieved character. Beer entries not accompanied by this information will be at a disadvantage during judging.",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:46:50"
				}
			},
			{
				"id": "ifIJan",
				"name": "3 Bagger",
				"nameDisplay": "3 Bagger",
				"description": "It could have been a single, but it’s so much more. This rum barrel aged\r\nBelgian Tripel is named for the 3 Bagger -- the true team player, the\r\ngo-getter, the unabashed risk-taker -- the one who knows when to stretch\r\nsomething good into something even better. Call it experience, call it\r\nskill or call it pure animal instinct, the three-bagger knows when his time\r\nhas come and rises to the occasion. Take your turn with this well balanced\r\ngolden straw colored ale, which is full of complex fruity esters, dark rum,\r\nvanilla and oak flavors.\r\n\r\nBeer family: Brick Mason Series",
				"abv": "9",
				"ibu": "40",
				"glasswareId": 5,
				"srmId": 5,
				"availableId": 4,
				"styleId": 59,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/ifIJan/upload_k62H2h-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/ifIJan/upload_k62H2h-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/ifIJan/upload_k62H2h-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"servingTemperature": "cool",
				"servingTemperatureDisplay": "Cool - (8-12C/45-54F)",
				"createDate": "2014-02-24 21:07:37",
				"updateDate": "2015-12-17 10:18:42",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 5,
					"name": "5",
					"hex": "FBB123"
				},
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 59,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style Tripel",
					"shortName": "Belgian Tripel",
					"description": "Tripels are often characterized by a complex, sometimes mild spicy character. Clove-like phenolic flavor and aroma may be evident at extremely low levels. Yeast-generated  fruity esters, including banana, are also common, but not necessary. These pale/light-colored ales may finish sweet, though any sweet finish should be light. The beer is characteristically medium and clean in body with an equalizing hop/malt balance and a perception of medium to medium high hop bitterness. Traditional Belgian Tripels are often well attenuated. Brewing sugar may be used to lighten the perception of body. Its sweetness will come from very pale malts. There should not be character from any roasted or dark malts. Low hop flavor is acceptable. Alcohol strength and flavor should be perceived as evident. Head retention is dense and mousse-like. Chill haze is acceptable at low serving temperatures. Traditional Tripels are bottle conditioned, may exhibit slight yeast haze but the yeast should not be intentionally roused. Oxidative character if evident in aged Tripels should be mild and pleasant.",
					"ibuMin": "20",
					"ibuMax": "45",
					"abvMin": "7",
					"abvMax": "10",
					"srmMin": "4",
					"srmMax": "9",
					"ogMin": "1.07",
					"fgMin": "1.01",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:31:50"
				}
			},
			{
				"id": "oGO96g",
				"name": "A-Town Brown",
				"nameDisplay": "A-Town Brown",
				"description": "Red Brick Brown Ale is the beer that launched our brewing legacy in 1993. It was inspired by the malty brews of England, but we gave it an American sized attitude. Deep copper gives way to an off-white head when poured into a glass, offering aromas of sweet malt, caramel, and almond. Our Brown Ale is surprisingly light bodied, which plays well with the sweet caramel, fresh pecan, and bread notes you discover on each sip. Brown Ale is a great beer to enjoy outdoors on a clear autumn afternoon.",
				"abv": "6.5",
				"ibu": "16",
				"glasswareId": 5,
				"srmId": 18,
				"availableId": 4,
				"styleId": 37,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/oGO96g/upload_riRgrR-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/oGO96g/upload_riRgrR-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/oGO96g/upload_riRgrR-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Red Brick Brown Ale goes well with grilled meats. We recommend trying our Brown Ale with savory Italian sausages served at West Side Pizzeria in Atlanta, GA, and the mouth-watering beer brats at Wienerz™ Grill & Deli in Marietta, GA.",
				"servingTemperature": "cold",
				"servingTemperatureDisplay": "Cold - (4-7C/39-45F)",
				"createDate": "2013-08-14 14:09:10",
				"updateDate": "2015-12-17 04:42:53",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 18,
					"name": "18",
					"hex": "A63E00"
				},
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 37,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Brown Ale",
					"shortName": "American Brown",
					"description": "American brown ales range from deep copper to brown in color. Roasted malt caramel-like and chocolate-like characters should be of medium intensity in both flavor and aroma. American brown ales have evident low to medium hop flavor and aroma, medium to high hop bitterness, and a medium body. Estery and fruity-ester characters should be subdued. Diacetyl should not be perceived. Chill haze is allowable at cold temperatures.",
					"ibuMin": "25",
					"ibuMax": "45",
					"abvMin": "4",
					"abvMax": "6.4",
					"srmMin": "15",
					"srmMax": "26",
					"ogMin": "1.04",
					"fgMin": "1.01",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:27:35"
				}
			},
			{
				"id": "13JsiW",
				"name": "Atomic Frog DIPL",
				"nameDisplay": "Atomic Frog DIPL",
				"description": "A collaborative beer with Red Brick Brewing, Atomic Frog is a Double India Pale Lager hopped with Galaxy, Pacifica and Huell Melon. Originally brewed at Max Lager's, it will be available in bottle form from Red Brick in Late 2014 early 2015.",
				"abv": "8",
				"ibu": "80",
				"glasswareId": 5,
				"srmId": 5,
				"availableId": 2,
				"styleId": 130,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/13JsiW/upload_aHYW4B-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/13JsiW/upload_aHYW4B-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/13JsiW/upload_aHYW4B-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"servingTemperature": "cold",
				"servingTemperatureDisplay": "Cold - (4-7C/39-45F)",
				"originalGravity": "1.07",
				"createDate": "2014-09-10 11:24:58",
				"updateDate": "2016-02-05 20:02:45",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 5,
					"name": "5",
					"hex": "FBB123"
				},
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 130,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Experimental Beer (Lager or Ale)",
					"shortName": "Experimental Beer",
					"description": "An experimental beer is any beer (lager, ale or other) that is primarily grain-based and employs unusual techniques and/or ingredients. A minimum 51% of the fermentable carbohydrates must be derived from malted grains. The overall uniqueness of the process, ingredients used and creativity should be considered. Beers such as garden (vegetable), fruit, chocolate, coffee, spice, specialty or other beers that match existing categories should not be entered into this category. Beers not easily matched to existing style categories in a competition would often be entered into this category. Beers that are a combination of other categories (spice, smoke, specialty, porter, etc.) could also be entered into this category. A statement by the brewer explaining the experimental or other nature of the beer is essential in order for fair assessment in competitions. Generally, a 25-word statement would suffice in explaining the experimental nature of the beer.",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:46:02"
				}
			},
			{
				"id": "BqSgXF",
				"name": "Beard Envy",
				"nameDisplay": "Beard Envy",
				"description": "Some of us have it and some of us don’t. You know what we’re talking about. That quintessential mark of a true man of beer legend, the very badge of the great brew masters the world over. Around here, we call it beard envy. And like this robust beer, it speaks volumes with words like “Put that razor down and take a drink.” With flavors of toffee, raisins and dark fruit accentuated by vanilla and a hint of bourbon balanced by the resinous pine notes of Chinook hops, this barrel-aged barley wine masterwork is as bold and hearty as the beards we salute.\r\n\r\nBeer family: Brick Mason Series",
				"abv": "9.3",
				"ibu": "80",
				"glasswareId": 5,
				"srmId": 14,
				"availableId": 4,
				"styleId": 34,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/BqSgXF/upload_B8snEJ-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/BqSgXF/upload_B8snEJ-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/BqSgXF/upload_B8snEJ-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"servingTemperature": "cool",
				"servingTemperatureDisplay": "Cool - (8-12C/45-54F)",
				"createDate": "2013-11-25 13:54:19",
				"updateDate": "2015-12-17 07:17:23",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 14,
					"name": "14",
					"hex": "C35900"
				},
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 34,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Barley Wine Ale",
					"shortName": "American Barleywine",
					"description": "American style barley wines range from amber to deep copper-garnet in color and have a full body and high residual malty sweetness. Complexity of alcohols and fruity-ester characters are often high and counterbalanced by assertive bitterness and extraordinary alcohol content. Hop aroma and flavor are at medium to very high levels. American type hops are often used but not necessary for this style. Very low levels of diacetyl may be acceptable. A caramel and/or toffee aroma and flavor are often part of the character. Characters indicating oxidation, such as vinous (sometimes sherry-like) aromas and/or flavors, are not generally acceptable in American-style Barley Wine Ale, however if a low level of age-induced oxidation character harmonizes and enhances the overall experience this can be regarded favorably. Chill haze is allowable at cold temperatures.",
					"ibuMin": "60",
					"ibuMax": "100",
					"abvMin": "8.4",
					"abvMax": "12",
					"srmMin": "11",
					"srmMax": "22",
					"ogMin": "1.09",
					"fgMin": "1.024",
					"fgMax": "1.028",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:27:08"
				}
			},
			{
				"id": "qPkEal",
				"name": "Black-Eye Rye",
				"nameDisplay": "Black-Eye Rye",
				"description": "Black-Eye Rye is an American-style India Black Ale brewed with rye. Inspired by the popularity of this unique and interesting style, it pours midnight black and features a fluffy cappuccino colored head. Don't let the dark color fool you though, because this is Red Brick's hoppiest beer yet! The aroma features complex tropical fruit notes of mango and peach intermingling with classic citrus and pine, as well as a slight hint of cocoa. The flavor is resinous and piney, complimented by a velvety mouth-feel, and finishes with lingering notes of grapefruit and bittersweet chocolate. It's sure to keep you coming back round after round!",
				"abv": "8",
				"ibu": "80",
				"glasswareId": 6,
				"srmId": 41,
				"availableId": 2,
				"styleId": 41,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/qPkEal/upload_94OLSr-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/qPkEal/upload_94OLSr-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/qPkEal/upload_94OLSr-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"servingTemperature": "cold",
				"servingTemperatureDisplay": "Cold - (4-7C/39-45F)",
				"createDate": "2012-11-03 17:52:29",
				"updateDate": "2015-12-16 21:09:01",
				"glass": {
					"id": 6,
					"name": "Snifter",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 41,
					"name": "Over 40",
					"hex": "000000"
				},
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 41,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Black Ale",
					"shortName": "Black Ale",
					"description": "American-style Black Ales are very dark to black and perceived to have medium high to high hop bitterness, flavor and aroma with medium-high alcohol content, balanced with a medium body. Fruity, floral and herbal character from hops of all origins may contribute character. The style is further characterized by a balanced and moderate degree of caramel malt and dark roasted malt flavor and aroma. High astringency and high degree of burnt roast malt character should be absent.",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6",
					"abvMax": "7.5",
					"srmMin": "35",
					"srmMax": "35",
					"ogMin": "1.056",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:28:36"
				}
			},
			{
				"id": "C01qED",
				"name": "Blonde",
				"nameDisplay": "Blonde",
				"description": "Bright, medium intensity gold color. Light foam, thin bubbles with moderate persistence.\r\n\r\nElegant aromas of orange skin, slight comfit apricot, very fresh developing on citrus notes.\r\n\r\nGood attack, fresh not too aggressive, the acidity though is quite present. There is a smooth texture, caressing of fresh barley and lemony flavors towards the end. Short finish with characters of slight bitterness, fresh coffee beans and blond chocolate.",
				"abv": "5.7",
				"glasswareId": 5,
				"availableId": 3,
				"styleId": 36,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:42:51",
				"updateDate": "2013-08-14 14:08:33",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 3,
					"name": "Not Available",
					"description": "Beer is not available."
				},
				"style": {
					"id": 36,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Golden or Blonde Ale",
					"shortName": "Blonde",
					"description": "Golden or Blonde ales are straw to golden blonde in color. They have a crisp, dry palate, light to medium body, and light malt sweetness. Low to medium hop aroma may be present but does not dominate. Bitterness is low to medium. Fruity esters may be perceived but do not predominate. Diacetyl should not be perceived. Chill haze should be absent.",
					"ibuMin": "15",
					"ibuMax": "25",
					"abvMin": "4",
					"abvMax": "5",
					"srmMin": "3",
					"srmMax": "7",
					"ogMin": "1.045",
					"fgMin": "1.008",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:27:26"
				}
			},
			{
				"id": "Bbtz9M",
				"name": "Brother Leo Belgian IPA",
				"nameDisplay": "Brother Leo Belgian IPA",
				"description": "Rehearse your Gregorian chants, don your monastic habit and take your vows to the lost order of Brother Leo, devoted to the solitary contemplation of the ancient brew mysteries. Your new-found devotion to drink this heavenly combination of Belgian and American grains with its mild spiciness, moderate fruity esters, and boldly hoppy notes of citrus, pine, and lemon, encourages sacrifice from the worldly distractions of lesser beers to worship in unity with this inspired brew.",
				"abv": "8",
				"ibu": "66",
				"styleId": 70,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/Bbtz9M/upload_A7KsW0-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/Bbtz9M/upload_A7KsW0-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/Bbtz9M/upload_A7KsW0-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2014-09-09 15:10:06",
				"updateDate": "2015-12-17 16:41:19",
				"style": {
					"id": 70,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Other Belgian-Style Ales",
					"shortName": "Belgian Ale",
					"description": "Recognizing the uniqueness and traditions of several other styles of Belgian Ales, the beers entered in this category will be assessed on the merits that they do not fit existing style guidelines and information that the brewer provides explaining the history and tradition of the style. Balance of character is a key component when assessing these beers. Barrel or wood-aged entries in competitions may be directed to other categories by competition director. In competitions the brewer must provide the historical or regional tradition of the style, or his interpretation of the style, in order to be assessed properly by the judges.",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:33:05"
				}
			},
			{
				"id": "2vh3MY",
				"name": "Casual",
				"nameDisplay": "Casual",
				"description": "This easy drinking IPA packs a hoppy punch without the bitterness. Casual is a light bodied ale featuring citrus and tropical hop flavors thanks to copious additions of five different hops during the dry hop process. this beer\r\nis ideal for any time of year when you want to kick back and sip on a few beers.",
				"abv": "4.5",
				"ibu": "30",
				"srmId": 4,
				"styleId": 164,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "sizzling fajitas, ceviche, and arugula salad",
				"createDate": "2016-08-09 11:59:39",
				"updateDate": "2016-08-09 11:59:39",
				"srm": {
					"id": 4,
					"name": "4",
					"hex": "FFBF42"
				},
				"style": {
					"id": 164,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Session India Pale Ale",
					"shortName": "Session IPA",
					"description": "Session India Pale Ales are gold to copper. Chill haze is allowable at cold temperatures and hop haze is allowable at any temperature. Fruity-ester aroma is light to moderate. Hop aroma is medium to high with qualities from a wide variety of hops from all over the world. Low to medium maltiness is present. Hop flavor is strong, characterized by flavors from a wide variety of hops. Hop bitterness is medium to high. Fruity-ester flavors are low to moderate. Diacetyl is absent or at very low levels. Body is low to medium.",
					"createDate": "2015-04-07 17:07:27"
				}
			},
			{
				"id": "kgH4QN",
				"name": "Divine Bovine",
				"nameDisplay": "Divine Bovine",
				"description": "Appease your divine nature and drink in the mysteries of this milk stout brewed with organic chai spices. Dark chocolate notes combine with an exotic blend of ginger, cardamom, black pepper, coriander, and cinnamon, which is softened by the milky sweetness of lactose. Meant to be revered, this handcrafted stout may produce spontaneous moonlight mooing, awaken your chakras, or set you sailing on your own passage to India.",
				"abv": "6",
				"ibu": "25.7",
				"srmId": 34,
				"availableId": 4,
				"styleId": 44,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/kgH4QN/upload_wQAZ7j-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/kgH4QN/upload_wQAZ7j-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/kgH4QN/upload_wQAZ7j-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"servingTemperature": "cool",
				"servingTemperatureDisplay": "Cool - (8-12C/45-54F)",
				"createDate": "2015-03-26 01:08:58",
				"updateDate": "2015-12-18 00:18:04",
				"srm": {
					"id": 34,
					"name": "34",
					"hex": "4C0505"
				},
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 44,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Specialty Stouts",
					"shortName": "Stout",
					"description": "See British Origin American-Style Imperial Porter Imperial porters are very dark brown to black in color. No roast barley or strong burnt/astringent black malt character should be perceived. Medium malt, caramel and cocoa-like sweetness should be in harmony with medium-low to medium hop bitterness. This is a full bodied beer. Ale-like fruity esters should be evident but not overpowering and compliment malt derived sweetness and hop character. Hop flavor and aroma may vary from being low to medium-high. Diacetyl (butterscotch) levels should be absent.",
					"ibuMin": "35",
					"ibuMax": "50",
					"abvMin": "7",
					"abvMax": "12",
					"srmMin": "40",
					"srmMax": "40",
					"ogMin": "1.08",
					"fgMin": "1.02",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:28:58"
				}
			},
			{
				"id": "UBPqyt",
				"name": "Dog Days",
				"nameDisplay": "Dog Days",
				"description": "Kick back and taste the sweetness, dude! These dog days never end with a rip curl of flavor, a creamy mouth-feel and a pleasing, sweet effervescence like waves across the beach. This Hefewiezen can warm any freeze and tame any breaker with bodacious aromas of banana and tart citrus. So, hang loose, follow the sun, catch some air, but don't lose grip on our favorite dog as you chase your next swell.",
				"abv": "4.1",
				"ibu": "12",
				"glasswareId": 5,
				"srmId": 4,
				"availableId": 4,
				"styleId": 48,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/UBPqyt/upload_QvW4uk-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/UBPqyt/upload_QvW4uk-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/UBPqyt/upload_QvW4uk-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Blends well with summer's leafy greens, cucumbers, and bean sprouts and can handle vinaigrette and creamy dressings. Poached sole or halibut filet topped with a citrus salsa will set off the beer’s flavor.",
				"servingTemperature": "cold",
				"servingTemperatureDisplay": "Cold - (4-7C/39-45F)",
				"createDate": "2012-01-03 02:43:05",
				"updateDate": "2015-12-16 09:25:24",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 4,
					"name": "4",
					"hex": "FFBF42"
				},
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 48,
					"categoryId": 4,
					"category": {
						"id": 4,
						"name": "German Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "South German-Style Hefeweizen / Hefeweissbier",
					"shortName": "Hefeweizen",
					"description": "The aroma and flavor of a Weissbier with yeast is decidedly fruity and phenolic. The phenolic characteristics are often described as clove-, nutmeg-like, mildly smoke-like or even vanilla-like. Banana-like esters should be present at low to medium-high levels. These beers are made with at least 50 percent malted wheat, and hop rates are quite low. Hop flavor and aroma are absent or present at very low levels. Weissbier is well attenuated and very highly carbonated and a medium to full bodied beer. The color is very pale to pale amber. Because yeast is present, the beer will have yeast flavor and a characteristically fuller mouthfeel and may be appropriately very cloudy. No diacetyl should be perceived.",
					"ibuMin": "10",
					"ibuMax": "15",
					"abvMin": "4.9",
					"abvMax": "5.5",
					"srmMin": "3",
					"srmMax": "9",
					"ogMin": "1.047",
					"fgMin": "1.008",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:29:27"
				}
			},
			{
				"id": "U5gzJb",
				"name": "Double IPA",
				"nameDisplay": "Double IPA",
				"abv": "9.3",
				"glasswareId": 5,
				"availableId": 3,
				"styleId": 31,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/U5gzJb/upload_qTuJGr-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/U5gzJb/upload_qTuJGr-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/U5gzJb/upload_qTuJGr-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:43:06",
				"updateDate": "2015-12-16 07:10:11",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 3,
					"name": "Not Available",
					"description": "Beer is not available."
				},
				"style": {
					"id": 31,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Imperial or Double India Pale Ale",
					"shortName": "Imperial IPA",
					"description": "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
					"ibuMin": "65",
					"ibuMax": "100",
					"abvMin": "7.5",
					"abvMax": "10.5",
					"srmMin": "5",
					"srmMax": "13",
					"ogMin": "1.075",
					"fgMin": "1.012",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:46"
				}
			},
			{
				"id": "HadszO",
				"name": "Helluva Bock",
				"nameDisplay": "Helluva Bock",
				"description": "Helluva Bock is a malty German-Style lager with a smooth low-hop flavor.",
				"abv": "6.7",
				"glasswareId": 5,
				"availableId": 3,
				"styleId": 89,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:43:22",
				"updateDate": "2014-10-14 17:48:24",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 3,
					"name": "Not Available",
					"description": "Beer is not available."
				},
				"style": {
					"id": 89,
					"categoryId": 7,
					"category": {
						"id": 7,
						"name": "European-germanic Lager",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "German-Style Heller Bock/Maibock",
					"shortName": "Maibock",
					"description": "The German word helle means light colored, and as such, a heller Bock is light straw to deep golden in color. Maibocks are also light-colored bocks. The sweet malty character should come through in the aroma and flavor. A lightly toasted and/or bready malt character is often evident. Roast or heavy toast/caramel malt character should be absent. Body is medium to full. Hop bitterness should be low, while noble-type hop aroma and flavor may be at low to medium levels. Bitterness increases with gravity. Fruity esters may be perceived at low levels. Diacetyl should be absent. Chill haze should not be perceived.",
					"ibuMin": "20",
					"ibuMax": "38",
					"abvMin": "6",
					"abvMax": "8",
					"srmMin": "4",
					"srmMax": "10",
					"ogMin": "1.066",
					"fgMin": "1.012",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:39:04"
				}
			},
			{
				"id": "nvcnIn",
				"name": "Hibiscuwit",
				"nameDisplay": "Hibiscuwit",
				"description": "Turn on, tune out, and drop into the groovy charms of this brew's flower power, murmuring words like \"I dig it\" with complete abandon. Drink in the essence of this creamy, light Belgian witbier with hibiscus and spices as you ponder the necessity of bathing and garments and the virtues of living in true brew harmony.",
				"abv": "5",
				"ibu": "13",
				"styleId": 65,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/nvcnIn/upload_SvZ5rz-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/nvcnIn/upload_SvZ5rz-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/nvcnIn/upload_SvZ5rz-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2014-09-09 15:14:10",
				"updateDate": "2015-12-17 17:38:13",
				"style": {
					"id": 65,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style White (or Wit) / Belgian-Style Wheat",
					"shortName": "Witbier",
					"description": "Belgian white ales are very pale in color and are brewed using unmalted wheat and malted barley and are spiced with coriander and orange peel. Coriander and light orange peel aroma should be perceived as such or as an unidentified spiciness. Phenolic spiciness and yeast flavors may be evident at mild levels. These beers are traditionally bottle conditioned and served cloudy. An unfiltered starch and yeast haze should be part of the appearance. The low to medium body should have some degree of creaminess from wheat starch. The style is further characterized by the use of noble-type hops to achieve low hop bitterness and little to no apparent hop flavor. This beer has no diacetyl and a low to medium fruity-ester level. Mild acidity is appropriate.",
					"ibuMin": "10",
					"ibuMax": "17",
					"abvMin": "4.8",
					"abvMax": "5.2",
					"srmMin": "2",
					"srmMax": "4",
					"ogMin": "1.044",
					"fgMin": "1.006",
					"fgMax": "1.01",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:32:30"
				}
			},
			{
				"id": "nhnPtH",
				"name": "Hop Circle",
				"nameDisplay": "Hop Circle",
				"description": "Some claim that our Hop Circle India Session Ale is of extraterrestrial origin. This easy-drinking wheat beer packs a big hoppy punch without overwhelming bitterness, creating an out-of-this-world drinking experience, which begs the question if this is a truly alien encounter. Despite its terra firm origins, drinking more than one may inspire you to search for lights in the night sky, take to the front lawn to mow your own enigma, and ponder the eternal question, \"What were those guys drinking?\"",
				"abv": "4.21",
				"ibu": "35.7",
				"glasswareId": 5,
				"srmId": 6,
				"availableId": 4,
				"styleId": 108,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/nhnPtH/upload_qugKEe-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/nhnPtH/upload_qugKEe-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/nhnPtH/upload_qugKEe-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2014-01-22 13:31:03",
				"updateDate": "2015-12-17 08:43:11",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 6,
					"name": "6",
					"hex": "F8A600"
				},
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 108,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Session Beer",
					"shortName": "Session",
					"description": "Any style of beer can be made lower in strength than described in the classic style guidelines. The goal should be to reach a balance between the style's character and the lower alcohol content. Drinkability is a character in the overall balance of these beers. Beers in this category must not exceed 4.1% alcohol by weight (5.1% alcohol by volume).",
					"ibuMin": "10",
					"ibuMax": "30",
					"abvMin": "4",
					"abvMax": "5.1",
					"srmMin": "2",
					"srmMax": "2",
					"ogMin": "1.034",
					"fgMin": "1.004",
					"fgMax": "1.01",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:42:20"
				}
			},
			{
				"id": "dw8UWg",
				"name": "Hoplanta",
				"nameDisplay": "Hoplanta",
				"description": "HOPLANTA is an easy drinking American style IPA (India Pale Ale) that is hoppy without being overly bitter. As this beer pours into your favorite glass, you will notice the beautiful honey color topped by a fluffy white head. The aroma is dominated by citrus, with hints of pine and malt sweetness. While drinking, you’ll notice the hop profile of resinous grapefruit balanced by a distinctive malt backbone, highlighting our use of Vienna malt.",
				"abv": "6.8",
				"ibu": "61",
				"glasswareId": 5,
				"srmId": 13,
				"availableId": 1,
				"styleId": 30,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/dw8UWg/upload_9py0UO-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/dw8UWg/upload_9py0UO-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/dw8UWg/upload_9py0UO-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "This lovely, amber colored beer is natural for pairing with spicy foods.",
				"servingTemperature": "cold",
				"servingTemperatureDisplay": "Cold - (4-7C/39-45F)",
				"createDate": "2012-02-14 02:13:06",
				"updateDate": "2015-12-16 14:31:27",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 13,
					"name": "13",
					"hex": "CB6200"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "fGv4px",
				"name": "Laughing Skull Amber Ale",
				"nameDisplay": "Laughing Skull Amber Ale",
				"description": "Laughing Skull is our southern style amber ale. Smoothed flavored and easy drinking, it develops a loyal following wherever it’s served. This beer pours a brilliant amber color, with an off white head. The late addition of Willamette hops provides an earthy and mild bitterness which balances the bready, malt character. The refreshingly crisp, clean and dry finish makes this a highly sessionable beer.",
				"abv": "5.7",
				"ibu": "25",
				"glasswareId": 5,
				"srmId": 12,
				"availableId": 1,
				"styleId": 32,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/fGv4px/upload_8zv80o-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/fGv4px/upload_8zv80o-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/fGv4px/upload_8zv80o-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Burgers, grilled meat and veggies",
				"servingTemperature": "cold",
				"servingTemperatureDisplay": "Cold - (4-7C/39-45F)",
				"createDate": "2012-01-03 02:43:36",
				"updateDate": "2015-12-16 06:37:15",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 12,
					"name": "12",
					"hex": "CF6900"
				},
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
				"id": "krX7b8",
				"name": "Long John Ale",
				"nameDisplay": "Long John Ale",
				"description": "Atlanta Brewing Company's newest beer for the winter season is a Belgian style strong dark ale.\r\n\r\nIt took several different malts from the United States, Canada, and Belgium plus dark candi sugar to get this beer to it's hefty abv of 8.2%.\r\n\r\nChestnut brown in color, aromas of dark fruits, bananas (bananas foster?), rise from an alcohol laced head. Plum like flavors with accents of raisins, crusty French bread, and caramel followed by gentle warming are enjoyed with each sip.",
				"abv": "8.2",
				"glasswareId": 5,
				"availableId": 3,
				"styleId": 64,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:43:38",
				"updateDate": "2014-10-17 18:00:36",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 3,
					"name": "Not Available",
					"description": "Beer is not available."
				},
				"style": {
					"id": 64,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style Dark Strong Ale",
					"shortName": "Belgian Dark Strong",
					"description": "Belgian dark strong ales are amber to dark brown in color. Often, though not always, brewed with dark Belgian \"candy\" sugar, these beers can be well attenuated, ranging from medium to full-bodied. The perception of hop bitterness is low to medium, with hop flavor and aroma also in this range. Fruity complexity along with the soft flavors of roasted malts add distinct character. The alcohol strength of these beers can often be deceiving to the senses. The intensity of malt character can be rich, creamy, and sweet with intensities ranging from medium to high. Very little or no diacetyl is perceived. Herbs and spices are sometimes used to delicately flavor these strong ales. Low levels of phenolic spiciness from yeast byproducts may also be perceived. Chill haze is allowable at cold temperatures.",
					"ibuMin": "20",
					"ibuMax": "50",
					"abvMin": "7",
					"abvMax": "11",
					"srmMin": "9",
					"srmMax": "35",
					"ogMin": "1.064",
					"fgMin": "1.012",
					"fgMax": "1.024",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:32:23"
				}
			},
			{
				"id": "6L5ige",
				"name": "Matcha Super Green Yuzu IPA",
				"nameDisplay": "Matcha Super Green Yuzu IPA",
				"abv": "7.8",
				"ibu": "65",
				"styleId": 30,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/6L5ige/upload_eTBojP-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/6L5ige/upload_eTBojP-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/6L5ige/upload_eTBojP-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2014-06-25 12:47:31",
				"updateDate": "2015-12-17 13:47:04",
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "WE5VIG",
				"name": "Okto Beer Fest",
				"nameDisplay": "Okto Beer Fest",
				"description": "Light copper color with bright reflection of gold.\r\n\r\nDelicate aromas of roasted pineapple with spices of cinnamon and cloves.\r\n\r\nTexture in the mouth is medium bodied with flavors of toasty bread, fresh notes of coffee beans. Very elegant overall with a finish on earthy characters. Good example of a seasonal beer.",
				"abv": "5.7",
				"glasswareId": 5,
				"availableId": 3,
				"styleId": 81,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:43:49",
				"updateDate": "2013-08-14 14:09:29",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 3,
					"name": "Not Available",
					"description": "Beer is not available."
				},
				"style": {
					"id": 81,
					"categoryId": 7,
					"category": {
						"id": 7,
						"name": "European-germanic Lager",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "German-Style Märzen",
					"shortName": "Märzen",
					"description": "Märzens are characterized by a medium body and broad range of color. They can range from golden to reddish orange. Sweet maltiness should dominate slightly over a clean hop bitterness. Malt character should be light-toasted rather than strongly caramel (though a low level of light caramel character is acceptable). Bread or biscuit-like malt character is acceptable in aroma and flavor. Hop aroma and flavor should be low but notable. Ale-like fruity esters should not be perceived. Diacetyl and chill haze should not be perceived.",
					"ibuMin": "18",
					"ibuMax": "25",
					"abvMin": "5.3",
					"abvMax": "5.9",
					"srmMin": "4",
					"srmMax": "15",
					"ogMin": "1.05",
					"fgMin": "1.012",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:36:50"
				}
			},
			{
				"id": "rlyBAA",
				"name": "Red Brick 16th Anniversary",
				"nameDisplay": "Red Brick 16th Anniversary",
				"abv": "7.5",
				"glasswareId": 5,
				"availableId": 3,
				"styleId": 132,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/rlyBAA/upload_uFdGT4-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/rlyBAA/upload_uFdGT4-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/rlyBAA/upload_uFdGT4-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:44:03",
				"updateDate": "2015-12-16 07:38:14",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 3,
					"name": "Not Available",
					"description": "Beer is not available."
				},
				"style": {
					"id": 132,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Wood- and Barrel-Aged Beer",
					"shortName": "BBL Aged",
					"description": "A wood- or barrel-aged beer is any lager, ale or hybrid beer, either a traditional style or a unique experimental beer that has been aged for a period of time in a wooden barrel or in contact with wood. This beer is aged with the intention of imparting the particularly unique character of the wood and/or what has previously been in the barrel. New wood character can be characterized as a complex blend of vanillin and/or other unique wood character, but wood aged is not necessarily synonymous with imparting wood-flavors. Used sherry, rum, bourbon, scotch, port, wine and other barrels are often used, imparting complexity and uniqueness to beer. Ultimately a balance of flavor, aroma and mouthfeel are sought with the marriage of new beer with wood and/or barrel flavors. Beers in this style may or may not have Brettanomyces character. Brewers when entering this category should specify type of barrel and/or wood used and any other special treatment or ingredients used. Competition managers may create style subcategories to differentiate between high alcohol and low alcohol beers and very dark and lighter colored beer as well as for fruit beers and non-fruit beers. Competitions may develop guidelines requesting brewers to specify what kind of wood (new or used oak, other wood varieties) and/or barrel (whiskey, port, sherry, wine, etc.) was used in the process. The brewer may be asked to explain the special nature (wood used, base beer style(s) and achieved character) of the beer.",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:46:27"
				}
			},
			{
				"id": "oJkeNe",
				"name": "Red Brick Brown",
				"nameDisplay": "Red Brick Brown",
				"description": "Dark copper color with bronze rims. Very thick foam, persistent.\r\n\r\nNice and elegant toffee aromas with spices and roasted almonds, very persistent and evolving on brewed coffee.\r\n\r\nVery franc in the mouth. Black fruits, plum with more intense spicy notes of canella and cloves. The texture is very delicate. The beer seems to have all characters for a beer with personality but is kind of dissociated having intense flavors at first, then some emptiness in the middle of the mouth and finishing with a bitter finish.",
				"abv": "6",
				"glasswareId": 5,
				"availableId": 3,
				"styleId": 37,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:44:03",
				"updateDate": "2013-08-14 14:08:56",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 3,
					"name": "Not Available",
					"description": "Beer is not available."
				},
				"style": {
					"id": 37,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Brown Ale",
					"shortName": "American Brown",
					"description": "American brown ales range from deep copper to brown in color. Roasted malt caramel-like and chocolate-like characters should be of medium intensity in both flavor and aroma. American brown ales have evident low to medium hop flavor and aroma, medium to high hop bitterness, and a medium body. Estery and fruity-ester characters should be subdued. Diacetyl should not be perceived. Chill haze is allowable at cold temperatures.",
					"ibuMin": "25",
					"ibuMax": "45",
					"abvMin": "4",
					"abvMax": "6.4",
					"srmMin": "15",
					"srmMax": "26",
					"ogMin": "1.04",
					"fgMin": "1.01",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:27:35"
				}
			},
			{
				"id": "QdTSX5",
				"name": "Red Brick Pale Ale",
				"nameDisplay": "Red Brick Pale Ale",
				"description": "A classic American-style Pale Ale, with medium body and a slight caramel sweetness. Medium hop bitterness is perfectly balanced by the citrus like flavor and aroma of the Cascades and Crystal hops.\r\n\r\nThis lovely, amber colored beer is natural for pairing with spicy foods.",
				"abv": "5.5",
				"glasswareId": 5,
				"availableId": 3,
				"styleId": 25,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:44:03",
				"updateDate": "2013-08-14 14:09:09",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 3,
					"name": "Not Available",
					"description": "Beer is not available."
				},
				"style": {
					"id": 25,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Pale Ale",
					"shortName": "American Pale",
					"description": "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
					"ibuMin": "30",
					"ibuMax": "42",
					"abvMin": "4.5",
					"abvMax": "5.6",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.044",
					"fgMin": "1.008",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:25:18"
				}
			},
			{
				"id": "2xCGgW",
				"name": "Red Brick Porter",
				"nameDisplay": "Red Brick Porter",
				"description": "Intense dark copper color with a thick, intense foam with some brown color effects.\r\n\r\nRich aromas of treated coffee of good persistence, very straight forward beer on the nose.\r\n\r\nAttack in the mouth shows some bitterness with a moderate acidity. Aromatic characters of roasted coffee beans with delicate spices. Finish is long on intense bitter cacao flavors.",
				"abv": "7.7",
				"glasswareId": 5,
				"availableId": 3,
				"styleId": 19,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:44:03",
				"updateDate": "2015-06-04 20:08:35",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 3,
					"name": "Not Available",
					"description": "Beer is not available."
				},
				"style": {
					"id": 19,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Robust Porter",
					"shortName": "Robust Porter",
					"description": "Robust porters are black in color and have a roast malt flavor, often reminiscent of cocoa, but no roast barley flavor. These porters have a sharp bitterness of black malt without a highly burnt/charcoal flavor. Caramel and other malt sweetness should be present and in harmony with other distinguishing porter characters. Robust porters range from medium to full in body and have a malty sweetness. Hop bitterness is medium to high, with hop aroma and flavor ranging from negligible to medium. Diacetyl is acceptable at very low levels. Fruity esters should be evident, balanced with roast malt and hop bitterness.",
					"ibuMin": "25",
					"ibuMax": "40",
					"abvMin": "5",
					"abvMax": "6.5",
					"srmMin": "30",
					"srmMax": "30",
					"ogMin": "1.045",
					"fgMin": "1.008",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:21:45"
				}
			},
			{
				"id": "w8Sn6A",
				"name": "Reverend Mudbone Ale",
				"nameDisplay": "Reverend Mudbone Ale",
				"styleId": 36,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/w8Sn6A/upload_llsE6V-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/w8Sn6A/upload_llsE6V-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/w8Sn6A/upload_llsE6V-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-07-22 22:49:37",
				"updateDate": "2015-12-17 04:18:22",
				"style": {
					"id": 36,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Golden or Blonde Ale",
					"shortName": "Blonde",
					"description": "Golden or Blonde ales are straw to golden blonde in color. They have a crisp, dry palate, light to medium body, and light malt sweetness. Low to medium hop aroma may be present but does not dominate. Bitterness is low to medium. Fruity esters may be perceived but do not predominate. Diacetyl should not be perceived. Chill haze should be absent.",
					"ibuMin": "15",
					"ibuMax": "25",
					"abvMin": "4",
					"abvMax": "5",
					"srmMin": "3",
					"srmMax": "7",
					"ogMin": "1.045",
					"fgMin": "1.008",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:27:26"
				}
			},
			{
				"id": "i2OnHc",
				"name": "Rum Skull",
				"nameDisplay": "Rum Skull",
				"abv": "6",
				"styleId": 32,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2014-11-15 18:43:40",
				"updateDate": "2015-02-10 22:47:57",
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
				"id": "tK54Rd",
				"name": "Sacred Cow",
				"nameDisplay": "Sacred Cow",
				"description": "Appease your divine nature and drink in the mysteries of this milk stout brewed with organic chai spices. Dark chocolate notes combine with an exotic blend of ginger, cardamom, black pepper, coriander, and cinnamon, which is softened by the milky sweetness of lactose. Meant to be revered, this handcrafted stout may produce spontaneous moonlight mooing, awaken your chakras, or set you sailing on your own passage to India.",
				"abv": "6",
				"ibu": "25.7",
				"glasswareId": 5,
				"srmId": 34,
				"availableId": 4,
				"styleId": 20,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/tK54Rd/upload_6SbIlJ-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/tK54Rd/upload_6SbIlJ-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/tK54Rd/upload_6SbIlJ-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"servingTemperature": "cool",
				"servingTemperatureDisplay": "Cool - (8-12C/45-54F)",
				"createDate": "2013-11-15 00:23:22",
				"updateDate": "2015-12-17 07:32:13",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 34,
					"name": "34",
					"hex": "4C0505"
				},
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 20,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Sweet or Cream Stout",
					"shortName": "Sweet Stout",
					"description": "Sweet stouts, also referred to as cream stouts, have less roasted bitter flavor and a full-bodied mouthfeel. The style can be given more body with milk sugar (lactose) before bottling. Malt sweetness, chocolate, and caramel flavor should dominate the flavor profile and contribute to the aroma. Hops should balance and suppress some of the sweetness without contributing apparent flavor or aroma. The overall impression should be sweet and full-bodied.",
					"ibuMin": "15",
					"ibuMax": "25",
					"abvMin": "3",
					"abvMax": "6",
					"srmMin": "40",
					"srmMax": "40",
					"ogMin": "1.045",
					"fgMin": "1.012",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:24:41"
				}
			},
			{
				"id": "dEBZSk",
				"name": "Southern Roots",
				"nameDisplay": "Southern Roots",
				"abv": "6",
				"styleId": 37,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-12-02 20:47:12",
				"updateDate": "2015-12-02 20:47:57",
				"style": {
					"id": 37,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Brown Ale",
					"shortName": "American Brown",
					"description": "American brown ales range from deep copper to brown in color. Roasted malt caramel-like and chocolate-like characters should be of medium intensity in both flavor and aroma. American brown ales have evident low to medium hop flavor and aroma, medium to high hop bitterness, and a medium body. Estery and fruity-ester characters should be subdued. Diacetyl should not be perceived. Chill haze is allowable at cold temperatures.",
					"ibuMin": "25",
					"ibuMax": "45",
					"abvMin": "4",
					"abvMax": "6.4",
					"srmMin": "15",
					"srmMax": "26",
					"ogMin": "1.04",
					"fgMin": "1.01",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:27:35"
				}
			},
			{
				"id": "tuMh8p",
				"name": "Summer",
				"nameDisplay": "Summer",
				"description": "Light and bright copper color. Very elegant foam, creamy aspect and regular, fading away delicately.\r\n\r\nIntense nose of fruit, exotic pineapple, orange zest.\r\n\r\nRich body in the mouth, fully textured, very long finish with flavors of peach and lemon. The acidity is well balanced giving freshness.",
				"glasswareId": 9,
				"availableId": 3,
				"styleId": 48,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:44:19",
				"updateDate": "2013-08-14 14:09:46",
				"glass": {
					"id": 9,
					"name": "Weizen",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 3,
					"name": "Not Available",
					"description": "Beer is not available."
				},
				"style": {
					"id": 48,
					"categoryId": 4,
					"category": {
						"id": 4,
						"name": "German Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "South German-Style Hefeweizen / Hefeweissbier",
					"shortName": "Hefeweizen",
					"description": "The aroma and flavor of a Weissbier with yeast is decidedly fruity and phenolic. The phenolic characteristics are often described as clove-, nutmeg-like, mildly smoke-like or even vanilla-like. Banana-like esters should be present at low to medium-high levels. These beers are made with at least 50 percent malted wheat, and hop rates are quite low. Hop flavor and aroma are absent or present at very low levels. Weissbier is well attenuated and very highly carbonated and a medium to full bodied beer. The color is very pale to pale amber. Because yeast is present, the beer will have yeast flavor and a characteristically fuller mouthfeel and may be appropriately very cloudy. No diacetyl should be perceived.",
					"ibuMin": "10",
					"ibuMax": "15",
					"abvMin": "4.9",
					"abvMax": "5.5",
					"srmMin": "3",
					"srmMax": "9",
					"ogMin": "1.047",
					"fgMin": "1.008",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:29:27"
				}
			},
			{
				"id": "E61QRK",
				"name": "The Lost Years",
				"nameDisplay": "The Lost Years",
				"description": "The Lost Years, the 5th release of Red Brick Brewing's distinguished Brick Mason Series, is an American Strong Ale brewed with spices and aged in Jim Beam bourbon oak barrels. This copper colored ale gives off aromas of dark fruit and toffee. The taste of caramel and fruity esters are complimented by subtle spicing of orange peel and star anise, followed by hints of bourbon and oak, leading to a warm finish.",
				"abv": "8.6",
				"ibu": "22",
				"glasswareId": 6,
				"srmId": 17,
				"availableId": 2,
				"styleId": 132,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/E61QRK/upload_QsNw3s-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/E61QRK/upload_QsNw3s-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/E61QRK/upload_QsNw3s-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"servingTemperature": "cool",
				"servingTemperatureDisplay": "Cool - (8-12C/45-54F)",
				"createDate": "2012-11-03 17:52:08",
				"updateDate": "2015-12-16 21:09:19",
				"glass": {
					"id": 6,
					"name": "Snifter",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 17,
					"name": "17",
					"hex": "B04500"
				},
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 132,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Wood- and Barrel-Aged Beer",
					"shortName": "BBL Aged",
					"description": "A wood- or barrel-aged beer is any lager, ale or hybrid beer, either a traditional style or a unique experimental beer that has been aged for a period of time in a wooden barrel or in contact with wood. This beer is aged with the intention of imparting the particularly unique character of the wood and/or what has previously been in the barrel. New wood character can be characterized as a complex blend of vanillin and/or other unique wood character, but wood aged is not necessarily synonymous with imparting wood-flavors. Used sherry, rum, bourbon, scotch, port, wine and other barrels are often used, imparting complexity and uniqueness to beer. Ultimately a balance of flavor, aroma and mouthfeel are sought with the marriage of new beer with wood and/or barrel flavors. Beers in this style may or may not have Brettanomyces character. Brewers when entering this category should specify type of barrel and/or wood used and any other special treatment or ingredients used. Competition managers may create style subcategories to differentiate between high alcohol and low alcohol beers and very dark and lighter colored beer as well as for fruit beers and non-fruit beers. Competitions may develop guidelines requesting brewers to specify what kind of wood (new or used oak, other wood varieties) and/or barrel (whiskey, port, sherry, wine, etc.) was used in the process. The brewer may be asked to explain the special nature (wood used, base beer style(s) and achieved character) of the beer.",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:46:27"
				}
			},
			{
				"id": "QFLbSE",
				"name": "Thick Silky",
				"nameDisplay": "Thick Silky",
				"description": "All you suckas gather 'round, a brand new dude is coming to town! Thick Silky is a man with a plan and a Kung Fu backhand, you dig? He runs the chocolate game in this city, and when it comes to haters he shows no pity. With his fine, foxy ladies sitting pretty in a tricked out '73 Cadillac DeVille, he's down with the double chocolate oatmeal scene and keeping it real. So, if you crave satisfaction, Thick Silky is the man who's got that action!",
				"abv": "7.7",
				"ibu": "65",
				"styleId": 18,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/QFLbSE/upload_DIkPaW-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/QFLbSE/upload_DIkPaW-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/QFLbSE/upload_DIkPaW-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2014-09-09 15:16:50",
				"updateDate": "2015-12-17 17:09:22",
				"style": {
					"id": 18,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Brown Porter",
					"shortName": "Brown Porter",
					"description": "Brown porters are mid to dark brown (may have red tint) in color. No roast barley or strong burnt/black malt character should be perceived. Low to medium malt sweetness, caramel and chocolate is acceptable along with medium hop bitterness. This is a lightto medium-bodied beer. Fruity esters are acceptable. Hop flavor and aroma may vary from being negligible to medium in character.",
					"ibuMin": "20",
					"ibuMax": "30",
					"abvMin": "4.5",
					"abvMax": "6",
					"srmMin": "20",
					"srmMax": "35",
					"ogMin": "1.04",
					"fgMin": "1.006",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:21:43"
				}
			},
			{
				"id": "5bYKZz",
				"name": "Vanilla Gorilla",
				"nameDisplay": "Vanilla Gorilla",
				"description": "Vanilla Gorilla, Brick Mason Series #8, has developed a cult following over the years. The original recipe was simply our Red Brick Porter with Madagascar Vanilla beans added. Over the years we've brewed different variations including the use of cherry wood smoked malt, aging in Jack Daniels barrels, peated malt and even smoking the vanilla beans at Fox Bros., a local BBQ joint. One thing you can always count on with our Vanilla Gorilla is a delicious vanilla porter with a creative twist.\r\n\r\nBeer family: Brick Mason Series",
				"abv": "8",
				"ibu": "64",
				"glasswareId": 6,
				"srmId": 41,
				"availableId": 2,
				"styleId": 44,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/5bYKZz/upload_E0SZdv-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/5bYKZz/upload_E0SZdv-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/5bYKZz/upload_E0SZdv-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"servingTemperature": "cool",
				"servingTemperatureDisplay": "Cool - (8-12C/45-54F)",
				"createDate": "2012-01-03 02:44:27",
				"updateDate": "2015-12-16 14:09:15",
				"glass": {
					"id": 6,
					"name": "Snifter",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 41,
					"name": "Over 40",
					"hex": "000000"
				},
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 44,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Specialty Stouts",
					"shortName": "Stout",
					"description": "See British Origin American-Style Imperial Porter Imperial porters are very dark brown to black in color. No roast barley or strong burnt/astringent black malt character should be perceived. Medium malt, caramel and cocoa-like sweetness should be in harmony with medium-low to medium hop bitterness. This is a full bodied beer. Ale-like fruity esters should be evident but not overpowering and compliment malt derived sweetness and hop character. Hop flavor and aroma may vary from being low to medium-high. Diacetyl (butterscotch) levels should be absent.",
					"ibuMin": "35",
					"ibuMax": "50",
					"abvMin": "7",
					"abvMax": "12",
					"srmMin": "40",
					"srmMax": "40",
					"ogMin": "1.08",
					"fgMin": "1.02",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:28:58"
				}
			}
		];

var secondSelfBeerData = [
			{
				"id": "y3EtVk",
				"name": "Bleeding Heart",
				"nameDisplay": "Bleeding Heart",
				"description": "Just in time for Valentine's Day, we're releasing this amber ale brewed with COCOA and VANILLA and inspired by the Southern classic, RED VELVET cake. Bleeding Heart is the perfect balance of MALTY sweet and just enough hops to BALANCE it out. Like it’s inspirational dish, the cocoa is there for color and bitterness more than flavor, and the vanilla is the icing on top rounding out each sip, coming just at the end of your taste.",
				"abv": "6.9",
				"ibu": "27",
				"styleId": 32,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/y3EtVk/upload_gxKqEB-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/y3EtVk/upload_gxKqEB-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/y3EtVk/upload_gxKqEB-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Pairings include: Steak, roasted butternut squash, gorgonzola cheese, a loved one to share it with.",
				"createDate": "2015-02-27 22:26:43",
				"updateDate": "2015-02-27 22:26:44",
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
				"id": "YQ0v16",
				"name": "Citrus IPA",
				"nameDisplay": "Citrus IPA",
				"description": "This IPA has just what you need to get you ready for spring.  It is brewed with with CITRUSY hops: Columbus, Amarillo, Pilgrim, LEMON and ORANGE peel.  Then dry-hopped with more Amarillo for added HOPPY citrus punch.  The aroma is sweet yet the taste is dry with a great ROBUST IPA finish.",
				"abv": "6.2",
				"ibu": "50",
				"styleId": 30,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Pan-roasted Trout, mussels, artichokes, gruyere cheese",
				"createDate": "2015-04-01 19:43:54",
				"updateDate": "2015-04-01 19:43:54",
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "AjjjAX",
				"name": "Gose - 1st Draft",
				"nameDisplay": "Gose - 1st Draft",
				"description": "This is our first test batch of Gose and you’ll see it come back this summer, right when you want it.  This is the perfect summer beer to get you through the winter months. Our take on a traditional Gose include the addition of GINGER and CORIANDER to balance out the sightly TART and SALTY nature of this FUN beer.",
				"abv": "4",
				"ibu": "8",
				"styleId": 47,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Grouper, oysters, guacamole, parmesan cheese.",
				"createDate": "2015-04-01 19:45:29",
				"updateDate": "2015-04-01 19:45:29",
				"style": {
					"id": 47,
					"categoryId": 4,
					"category": {
						"id": 4,
						"name": "German Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Leipzig-Style Gose",
					"shortName": "Leipzig Gose",
					"description": "Traditional examples of Gose are spontaneously fermented, similarly to Belgian-style gueuze/lambic beers, and should exhibit complexity of acidic, flavor and aroma contributed by introduction of wild yeast and bacteria into the fermentation. A primary difference between Belgian Gueuze and German Gose is that Gose is served at a much younger age. Gose is typically pale gold to pale amber in color and typically contains malted barley, unmalted wheat with some traditional varieties containing oats. Hop character and malt flavors and aromas are negligible. Lemony or other citrus-like qualities are often present in aroma and on the palate. Some versions may have the spicy character of added coriander in aroma and on the palate at low to medium levels. Salt (table salt) character is also traditional in low amounts. Horsey, leathery, earthy aroma and flavors contributed by Brettanomyces yeasts may be evident but have a very low profile, as this beer is not excessively aged. Modern German Gose breweries typically introduce only pure beer yeast strains for fermentation. Low to medium lactic acid character is evident in all examples as sharp, refreshing sourness. Gose is typically enjoyed fresh, carbonated, and cloudy/hazy with yeast character, and may have evidence of continued fermentation activity. Overall complexity of flavors and aromas are sought while maintaining an ideal balance between acidity, yeast-enhanced spice and refreshment is ideal.",
					"ibuMin": "10",
					"ibuMax": "15",
					"abvMin": "4.4",
					"abvMax": "5.4",
					"srmMin": "3",
					"srmMax": "9",
					"ogMin": "1.036",
					"fgMin": "1.008",
					"fgMax": "1.012",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 17:09:35"
				}
			},
			{
				"id": "LjW5MJ",
				"name": "JunIPA",
				"nameDisplay": "JunIPA",
				"description": "This is an IPA, inspired by gin.  It is brewed with CITRUSY Amarillo, cascade, and antanem hops plus juniper berries, then ‘dry-hopped’ with JUNIPER and ROSEMARY. By using this combination of hops and juniper we are able to get a beer with similar flavors to a more citrusy GIN.",
				"abv": "6.4",
				"ibu": "43",
				"styleId": 30,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/LjW5MJ/upload_kgvSlY-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/LjW5MJ/upload_kgvSlY-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/LjW5MJ/upload_kgvSlY-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Parings include -Braised short ribs, herb chicken, roasted brussels sprouts, sharp cheeses, fire pits and roasted marshmallows",
				"createDate": "2015-02-27 22:24:55",
				"updateDate": "2015-02-27 22:28:59",
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "QsTNIS",
				"name": "LIPA",
				"nameDisplay": "LIPA",
				"description": "The LIPA is proof that you don't need a high gravity IPA to have a ROBUST and AROMATIC IPA.  By using a unique blend of hops we create a SMOOTH IPA, LIGHT in body, that you can drink all day making this HOPPY summer seasonal great for any occasion.",
				"abv": "4.3",
				"ibu": "61",
				"styleId": 30,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/QsTNIS/upload_QMjSh6-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/QsTNIS/upload_QMjSh6-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/QsTNIS/upload_QMjSh6-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2014-07-01 12:12:19",
				"updateDate": "2015-12-17 14:28:38",
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "xny9q6",
				"name": "Mild Mannered - 1st Draft",
				"nameDisplay": "Mild Mannered - 1st Draft",
				"description": "Created by our brewer Ben, this one-off mild has a lot of ROBUST flavor.  Using CHOCOLATE and BROWN malts, there is a lot of traditional British MALTY goodness in a low above beer.  A great example of a SESSION English ale.",
				"abv": "4",
				"ibu": "21",
				"styleId": 108,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Fish and Chips, curry, beef wellington, cheddar cheese",
				"createDate": "2015-03-28 14:53:21",
				"updateDate": "2015-04-01 19:44:33",
				"style": {
					"id": 108,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Session Beer",
					"shortName": "Session",
					"description": "Any style of beer can be made lower in strength than described in the classic style guidelines. The goal should be to reach a balance between the style's character and the lower alcohol content. Drinkability is a character in the overall balance of these beers. Beers in this category must not exceed 4.1% alcohol by weight (5.1% alcohol by volume).",
					"ibuMin": "10",
					"ibuMax": "30",
					"abvMin": "4",
					"abvMax": "5.1",
					"srmMin": "2",
					"srmMax": "2",
					"ogMin": "1.034",
					"fgMin": "1.004",
					"fgMax": "1.01",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:42:20"
				}
			},
			{
				"id": "t2PP0R",
				"name": "Mole Porter",
				"nameDisplay": "Mole Porter",
				"description": "This is the first of our Second Shift series.  These are one-offs we are brewing, inspired by our surroundings and past experiences.  \r\n\r\nThis is our award winning chocolate porter with extra spices reminiscent of the oaxacan mole sauce.  We combines California, Pasella, and Chipotle CHILIES with CINNAMON, CLOVES, and COCOA nibs to create this ROBUST porter packed with flavor to warm you up this winter.",
				"abv": "6.5",
				"ibu": "27",
				"styleId": 122,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/t2PP0R/upload_VDpxhx-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/t2PP0R/upload_VDpxhx-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/t2PP0R/upload_VDpxhx-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Parings include - Pork or beef tacos, stews and chilis, gruyere cheese, and chocolate desserts.",
				"createDate": "2015-02-18 23:20:05",
				"updateDate": "2015-12-17 22:47:10",
				"style": {
					"id": 122,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Chocolate / Cocoa-Flavored Beer",
					"shortName": "Chocolate Beer",
					"description": "Chocolate beers use \"dark\" chocolate or cocoa in any of its forms other than or in addition to hops to create a distinct (ranging from subtle to intense) character. Under hopping allows chocolate to contribute to the flavor profile while not becoming excessively bitter. White Chocolate should not be entered into this category. If this beer is a classic style with chocolate or cocoa, the brewer should specify the classic style.",
					"ibuMin": "15",
					"ibuMax": "40",
					"abvMin": "2.5",
					"abvMax": "12",
					"srmMin": "15",
					"srmMax": "50",
					"ogMin": "1.03",
					"fgMin": "1.006",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:44:36"
				}
			},
			{
				"id": "oYkZ91",
				"name": "Red Hop Rye",
				"nameDisplay": "Red Hop Rye",
				"description": "When you first smell the Red Hop Rye you'll notice an abundance of HOPPY citrus aromas from our dry hopping.  As you take your first sip you'll notice the spicy RYE mixed with hops BALANCED by a MALTY backbone from American caramel and HONEY malts. This give the Red Hop Rye it's dark red color.  This is a great example of an American hybrid of beer, a Red Rye IPA.  \r\n\r\nEnjoy Red Hop Rye while relaxing after work or with a dish as bold and flavorful as this beer.",
				"styleId": 32,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/oYkZ91/upload_Y8Hc7u-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/oYkZ91/upload_Y8Hc7u-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/oYkZ91/upload_Y8Hc7u-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Pairings include: BBQ, steak, burgers, brats, cheddar cheese, and spicy foods.",
				"createDate": "2014-07-01 12:12:04",
				"updateDate": "2015-12-17 15:00:03",
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
				"id": "3CCBRt",
				"name": "Saison",
				"nameDisplay": "Saison",
				"description": "No messing around here.  This is a traditional saison using only the finest fresh American ingredients.  We take our time making this limited release beer and let the beer speak for itself.  It is everything you want is a saison: DELICATE, CITRUS, DRY, PEPPERY, and FLAVORFUL.",
				"abv": "5.5",
				"ibu": "24",
				"styleId": 72,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/3CCBRt/upload_cyKQkA-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/3CCBRt/upload_cyKQkA-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/3CCBRt/upload_cyKQkA-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "roasted turkey, fish, steak au poivre, fresh goat cheese and rustic provincial cuisine.",
				"createDate": "2014-07-01 12:12:36",
				"updateDate": "2015-12-17 15:58:08",
				"style": {
					"id": 72,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "French & Belgian-Style Saison",
					"shortName": "Saison",
					"description": "Beers in this category are golden to deep amber in color. There may be quite a variety of characters within this style. Generally: They are light to medium in body. Malt aroma is low to medium-low. Esters are medium to high in  aroma, while, complex alcohols, herbs, spices, low Brettanomyces character and even clove and smoke-like phenolics may or may not be evident in the overall balanced beer. Hop aroma and flavor may be at low to medium levels. Malt flavor is low but provides foundation for the overall balance. Hop bitterness is moderate to moderately assertive. Herb and/or spice flavors, including black pepper-like notes, may or may not be evident. Fruitiness from fermentation is generally in character. A balanced small amount of sour or acidic flavors is acceptable when in balance with other components. Earthy, cellar-like, musty aromas are okay. Diacetyl should not be perceived. Chill or slight yeast haze is okay. Often bottle conditioned with some yeast character and high carbonation. French & Belgian-Style Saison may have Brettanomyces characters that are slightly acidity, fruity, horsey, goaty and/or leather-like.",
					"ibuMin": "20",
					"ibuMax": "40",
					"abvMin": "4.5",
					"abvMax": "8.5",
					"srmMin": "4",
					"srmMax": "14",
					"ogMin": "1.055",
					"fgMin": "1.004",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:34:55"
				}
			},
			{
				"id": "CF1kza",
				"name": "Thai Wheat",
				"nameDisplay": "Thai Wheat",
				"description": "This SPICY American What beer is as EXOTIC as the country that inspired it.  This beer uses both fresh LEMONGRASS and GINGER to give it a refreshing aroma and taste taking you on a trip access the globe.  We keep the beer DRY letting the spices stand out on their own giving you a unique experience.\r\n\r\nThis flavorful wheat ale is great for an escape into your second self.",
				"styleId": 113,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/CF1kza/upload_Z1Jy4X-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/CF1kza/upload_Z1Jy4X-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/CF1kza/upload_Z1Jy4X-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"foodPairings": "Pairings include: fish, chicken, pork loin, grilled vegetables, sushi, and Asian cuisine.",
				"createDate": "2014-07-01 12:11:43",
				"updateDate": "2015-12-17 14:55:36",
				"style": {
					"id": 113,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Light American Wheat Ale or Lager without Yeast",
					"shortName": "Wheat Ale",
					"description": "This beer can be made using either ale or lager yeast. It can be brewed with 30 to 75 percent wheat malt, and hop rates may be low to medium. Hop characters may be light to moderate in bitterness, flavor and aroma. A fruity-estery aroma and flavor are typical but at low levels however, phenolic, clove-like characteristics should not be perceived. Appearance can be clear or with chill haze, golden to light amber, and the body should be light to medium in character. Diacetyl should not be perceived. Because this style is packaged and served without yeast, no yeast characters should be evident in mouthfeel, flavor, or aroma.",
					"ibuMin": "10",
					"ibuMax": "35",
					"abvMin": "3.8",
					"abvMax": "5",
					"srmMin": "2",
					"srmMax": "10",
					"ogMin": "1.036",
					"fgMin": "1.004",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:42:53"
				}
			}
		];

var sweetWaterBeerData = [
			{
				"id": "xwYSL2",
				"name": "15th Anniversary Ale",
				"nameDisplay": "15th Anniversary Ale",
				"description": "For the ﬁrst ever SweetWater anniversary beer (yeah it took us 15 years), we went back to our roots, dusted off our original ESB recipe, and gave it a big ol’ bump. The recipe consists of 7 malts, one of which Kevin toasted personally in his toaster oven, just like the old days, and 5 different styles of hops. In true SweetWater style, there is no style, but it’s big, bold, and meant to grow old, meaning this beer will be fantastic out of the gate, or you can lay her down in the cellar for many years to come.",
				"styleId": 5,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-04-16 15:44:15",
				"updateDate": "2015-04-16 15:45:25",
				"style": {
					"id": 5,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Extra Special Bitter",
					"shortName": "ESB",
					"description": "Extra special bitter possesses medium to strong hop aroma, flavor, and bitterness. The residual malt and defining sweetness of this richly flavored, full-bodied bitter is more pronounced than in other styles of bitter. It is light amber to copper colored with medium to medium-high bitterness. Mild carbonation traditionally characterizes draft-cask versions, but in bottled versions, a slight increase in carbon dioxide content is acceptable. Fruity-ester character is acceptable in aroma and flavor. Diacetyl (butterscotch character) is acceptable and characteristic when at very low levels. The absence of diacetyl is also acceptable. Chill haze is allowable at cold temperatures. English or American hops may be used. (English and American hop character may be specified in subcategories.)",
					"ibuMin": "30",
					"ibuMax": "45",
					"abvMin": "4.8",
					"abvMax": "5.8",
					"srmMin": "8",
					"srmMax": "14",
					"ogMin": "1.046",
					"fgMin": "1.01",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:19:20"
				}
			},
			{
				"id": "UJGpVS",
				"name": "16 So Fine Red Wheat Wine",
				"nameDisplay": "16 So Fine Red Wheat Wine",
				"description": "For our super heady 16 year anniversary beer we stepped on the gas and headed down the road less traveled! Our b-day present to ourselves was a racy Red Wheat Wine. The brew rips down the road at 11% ABV fueld by a 45% wheat bomb with an after burner hop shot of Amarillo, Willamette, Nelson Sauvignon, and US Goldings that pushes this baby to the limit of sensory overload. Get in. Sit down. Hold on. Shut up.",
				"abv": "11",
				"styleId": 35,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/UJGpVS/upload_K4w7gB-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/UJGpVS/upload_K4w7gB-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/UJGpVS/upload_K4w7gB-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-02-24 16:31:05",
				"updateDate": "2015-12-17 01:47:08",
				"style": {
					"id": 35,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Wheat Wine Ale",
					"shortName": "Wheatwine",
					"description": "American style wheat wines range from gold to deep amber and are brewed with 50% or more wheat malt. They have full body and high residual malty sweetness. Perception of bitterness is moderate to medium -high. Fruity-ester characters are often high and counterbalanced by complexity of alcohols and high alcohol content. Hop aroma and flavor are at low to medium levels. Very low levels of diacetyl may be acceptable. Bready, wheat, honey-like and/or caramel aroma and flavor are often part of the character. Phenolic yeast character, sulfur, and/or sweet corn-like dimethylsulfide (DMS) should not be present. Oxidized, stale and aged characters are not typical of this style. Chill haze is allowable.",
					"ibuMin": "45",
					"ibuMax": "85",
					"abvMin": "8.4",
					"abvMax": "12",
					"srmMin": "8",
					"srmMax": "15",
					"ogMin": "1.088",
					"fgMin": "1.024",
					"fgMax": "1.032",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:27:17"
				}
			},
			{
				"id": "LcpeBb",
				"name": "17th Saison",
				"nameDisplay": "17th Saison",
				"description": "This year’s anni ale has everything in it but the pitch fork and a bale of hay. With over two months of fermentation and cellaring time, this saison plows the field as it harvests spicy farmhouse overtones from its primary Fraunch saison yeast. That funky monkey delivers a strapping alc 9 % by vol, seeding a perfect foundation for secondary Brettanomyces fermentation, which hoes a cornucopia of tart and effervescent flavors. Distinct citrus notes from the finishing hops cultivate a naturally freaky fresh palate tweaker. Here’s to the next 17 trips around that burning ball in the sky!",
				"abv": "9",
				"styleId": 72,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-04-16 15:43:03",
				"updateDate": "2015-04-16 15:46:19",
				"style": {
					"id": 72,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "French & Belgian-Style Saison",
					"shortName": "Saison",
					"description": "Beers in this category are golden to deep amber in color. There may be quite a variety of characters within this style. Generally: They are light to medium in body. Malt aroma is low to medium-low. Esters are medium to high in  aroma, while, complex alcohols, herbs, spices, low Brettanomyces character and even clove and smoke-like phenolics may or may not be evident in the overall balanced beer. Hop aroma and flavor may be at low to medium levels. Malt flavor is low but provides foundation for the overall balance. Hop bitterness is moderate to moderately assertive. Herb and/or spice flavors, including black pepper-like notes, may or may not be evident. Fruitiness from fermentation is generally in character. A balanced small amount of sour or acidic flavors is acceptable when in balance with other components. Earthy, cellar-like, musty aromas are okay. Diacetyl should not be perceived. Chill or slight yeast haze is okay. Often bottle conditioned with some yeast character and high carbonation. French & Belgian-Style Saison may have Brettanomyces characters that are slightly acidity, fruity, horsey, goaty and/or leather-like.",
					"ibuMin": "20",
					"ibuMax": "40",
					"abvMin": "4.5",
					"abvMax": "8.5",
					"srmMin": "4",
					"srmMax": "14",
					"ogMin": "1.055",
					"fgMin": "1.004",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:34:55"
				}
			},
			{
				"id": "Yd8G8r",
				"name": "18th Anniversary Belgian Tripel",
				"nameDisplay": "18th Anniversary Belgian Tripel",
				"description": "This brilliant Belgian Tripel showcases the best of our brewers as we bring to life 18 years of passion for beer and strive to crate the most interesting beers possible. This tripel leads with complex citrus aromas that are complimented by a strong undertow of spicy hop character. Ardennes yeast brings forward fruity esters as the Belgian candy sugar added in fermentation softens the body while leading to a vigorous ABV in the finished beer.",
				"abv": "10",
				"ibu": "17",
				"styleId": 59,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/Yd8G8r/upload_tFSifO-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/Yd8G8r/upload_tFSifO-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/Yd8G8r/upload_tFSifO-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-04-15 20:02:48",
				"updateDate": "2015-12-17 23:50:19",
				"style": {
					"id": 59,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style Tripel",
					"shortName": "Belgian Tripel",
					"description": "Tripels are often characterized by a complex, sometimes mild spicy character. Clove-like phenolic flavor and aroma may be evident at extremely low levels. Yeast-generated  fruity esters, including banana, are also common, but not necessary. These pale/light-colored ales may finish sweet, though any sweet finish should be light. The beer is characteristically medium and clean in body with an equalizing hop/malt balance and a perception of medium to medium high hop bitterness. Traditional Belgian Tripels are often well attenuated. Brewing sugar may be used to lighten the perception of body. Its sweetness will come from very pale malts. There should not be character from any roasted or dark malts. Low hop flavor is acceptable. Alcohol strength and flavor should be perceived as evident. Head retention is dense and mousse-like. Chill haze is acceptable at low serving temperatures. Traditional Tripels are bottle conditioned, may exhibit slight yeast haze but the yeast should not be intentionally roused. Oxidative character if evident in aged Tripels should be mild and pleasant.",
					"ibuMin": "20",
					"ibuMax": "45",
					"abvMin": "7",
					"abvMax": "10",
					"srmMin": "4",
					"srmMax": "9",
					"ogMin": "1.07",
					"fgMin": "1.01",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:31:50"
				}
			},
			{
				"id": "NoNhan",
				"name": "420 Extra Pale Ale",
				"nameDisplay": "420 Extra Pale Ale",
				"description": "SweetWater 420 Extra Pale Ale, our most popular brew, is a tasty West Coast-style pale ale with a stimulating hop character and a crisp finish. 1st brewed on April 20th 1997.\r\n\r\nGrains – Munich, 40L, 2-Row\r\nHops – Centennial, Cascade\r\n\r\nAwards – 2002 Silver Medal- Great American Beer Festival, 1997 – 2005 Creative Loafing Readers Choice – Best local beer, 1998 World Beer Cup silver medal, Top 10 Local beers – Atlanta Journal Constitution",
				"abv": "5.4",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 25,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/NoNhan/upload_FgWgmB-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/NoNhan/upload_FgWgmB-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/NoNhan/upload_FgWgmB-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:44:20",
				"updateDate": "2016-07-19 14:41:46",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 25,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Pale Ale",
					"shortName": "American Pale",
					"description": "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
					"ibuMin": "30",
					"ibuMax": "42",
					"abvMin": "4.5",
					"abvMax": "5.6",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.044",
					"fgMin": "1.008",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:25:18"
				}
			},
			{
				"id": "pOUbfg",
				"name": "420 Fest",
				"nameDisplay": "420 Fest",
				"abv": "8",
				"availableId": 2,
				"styleId": 31,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-06-01 22:38:11",
				"updateDate": "2015-06-01 23:20:29",
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 31,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Imperial or Double India Pale Ale",
					"shortName": "Imperial IPA",
					"description": "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
					"ibuMin": "65",
					"ibuMax": "100",
					"abvMin": "7.5",
					"abvMax": "10.5",
					"srmMin": "5",
					"srmMax": "13",
					"ogMin": "1.075",
					"fgMin": "1.012",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:46"
				}
			},
			{
				"id": "PPM1hu",
				"name": "Balls Deep",
				"nameDisplay": "Balls Deep",
				"availableId": 2,
				"styleId": 125,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/PPM1hu/upload_UASdrW-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/PPM1hu/upload_UASdrW-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/PPM1hu/upload_UASdrW-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-07-22 22:57:22",
				"updateDate": "2015-12-17 04:09:51",
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 125,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Specialty Beer",
					"shortName": "Specialty",
					"description": "These beers are brewed using unusual fermentable sugars, grains and starches that contribute to alcohol content other than, or in addition to, malted barley. Nuts generally have some degree of fermentables, thus beers brewed with nuts would appropriately be entered in this category. The distinctive characters of these special ingredients should be evident either in the aroma, flavor or overall balance of the beer, but not necessarily in overpowering quantities. For example, maple syrup or potatoes would be considered unusual. Rice, corn, or wheat are not considered unusual. Special ingredients must be listed when competing. A statement by the brewer explaining the special nature of the beer, ingredient(s) and achieved character is essential in order for fair assessment in competitions. If this beer is a classic style with some specialty ingredient(s), the brewer should also specify the classic style. Guidelines for competing: Spiced beers using unusual fermentables should be entered in the experimental category. Fruit beers using unusual fermentables should be entered in the fruit beer category.",
					"ibuMax": "100",
					"abvMin": "2.5",
					"abvMax": "25",
					"srmMin": "1",
					"srmMax": "100",
					"ogMin": "1.03",
					"fgMin": "1.006",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:44:53"
				}
			},
			{
				"id": "wzCyVT",
				"name": "Blue",
				"nameDisplay": "Blue",
				"description": "Sweetwater Blue is a unique light bodied ale enhanced with a hint of fresh blueberries. This euphoric experience begins with an appealing blueberry aroma and finishes as a surprisingly thirst-quenching ale.\r\n\r\nAward – 1998 World Beer festival Bronze Medal Winner – Fruit beer category",
				"abv": "4.6",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 119,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/wzCyVT/upload_1BZLAy-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/wzCyVT/upload_1BZLAy-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/wzCyVT/upload_1BZLAy-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:42:52",
				"updateDate": "2015-12-16 03:25:45",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 119,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Fruit Beer",
					"shortName": "Fruit Beer",
					"description": "Fruit beers are any beers using fruit or fruit extracts as an adjunct in either, the mash, kettle, primary or secondary fermentation providing obvious (ranging from subtle to intense), yet harmonious, fruit qualities. Fruit qualities should not be overpowered by hop character. If a fruit (such as juniper berry) has an herbal or spice quality, it is more appropriate to consider it in the herb and spice beers category. Acidic bacterial (not wild yeast) fermentation characters may be evident (but not necessary) they would contribute to acidity and enhance fruity balance. Clear or hazy beer is acceptable in appearance. A statement by the brewer explaining what fruits are used is essential in order for fair assessment in competitions. If this beer is a classic style with fruit, the brewer should also specify the classic style.",
					"ibuMin": "5",
					"ibuMax": "70",
					"abvMin": "2.5",
					"abvMax": "12",
					"srmMin": "5",
					"srmMax": "50",
					"ogMin": "1.03",
					"fgMin": "1.006",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:44:21"
				}
			},
			{
				"id": "CRw8Gu",
				"name": "Brown Eyed Buckeye",
				"nameDisplay": "Brown Eyed Buckeye",
				"abv": "8.6",
				"glasswareId": 5,
				"styleId": 30,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/CRw8Gu/upload_nCy0vL-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/CRw8Gu/upload_nCy0vL-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/CRw8Gu/upload_nCy0vL-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:42:55",
				"updateDate": "2015-12-16 11:10:56",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "bHmQdD",
				"name": "Crank Tank",
				"nameDisplay": "Crank Tank",
				"description": "We cranked the fermentation temps down to a chilly 11 degrees celsius and went with a longer lagering on this Helles prior to filtration. Bright and balanced with the clean and crisp finish of traditional Munich style lagers, Crank Tank is very quaffable after any long ride.",
				"abv": "5.8",
				"ibu": "25",
				"glasswareId": 5,
				"styleId": 112,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/bHmQdD/upload_Vpld0J-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/bHmQdD/upload_Vpld0J-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/bHmQdD/upload_Vpld0J-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:43:02",
				"updateDate": "2015-12-16 08:43:13",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"style": {
					"id": 112,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Light American Wheat Ale or Lager with Yeast",
					"shortName": "Wheat Ale",
					"description": "This beer can be made using either ale or lager yeast. It can be brewed with 30 to 75 percent wheat malt, and hop rates may be low to medium. Hop characters may be light to moderate in bitterness, flavor and aroma. Fruity-estery aroma and flavor are typical but at low levels however, phenolic, clove-like characteristics should not be perceived. Color is usually straw to light amber, and the body should be light to medium in character. Diacetyl should not be perceived. Because this style is served with yeast the character should portray a full yeasty mouthfeel and appear hazy to very cloudy. Chill haze is also acceptable. Yeast flavor and aroma should be low to medium but not overpowering the balance and character of malt and hops. These beers are typically served with the yeast in the bottle, and are cloudy when served.",
					"ibuMin": "10",
					"ibuMax": "35",
					"abvMin": "3.5",
					"abvMax": "5.5",
					"srmMin": "4",
					"srmMax": "10",
					"ogMin": "1.036",
					"fgMin": "1.006",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:42:48"
				}
			},
			{
				"id": "69tWZj",
				"name": "Dank Tank Ghoulash",
				"nameDisplay": "Dank Tank Ghoulash",
				"description": "Alone and cold on a frigid fall night, the evil Dr. Dank’s stomach rumbled. It had been days since devouring the last of his trannies and platypuseses. Desperate, he wandered into his kitchen only to find a 3-eyed rat, yellow toenails, and an old bean burrito. Always resourceful, Dr. Dank remembered his great, great, bouffalata, granny goose’s Ghoulash recipe.  Try as he might, he couldn’t get it right, so he dumped everything he could find from the fridge and cupboard into one giant boiling brew, resulting in this stew of 2-row, black wheat, munich malt and a 14-hop variety asplifidation of Willamette, Galena, Mt. Hood, Nugget, Perle, Aroma, Bobek, Aurora, Styrian, Golding, Magnum, Columbus, Summit, Millennium, and Crystal.\r\n\r\nSloppy seconds never tasted so ghood!",
				"abv": "8.5",
				"ibu": "167",
				"glasswareId": 5,
				"availableId": 2,
				"styleId": 31,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/69tWZj/upload_Ihq8Pr-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/69tWZj/upload_Ihq8Pr-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/69tWZj/upload_Ihq8Pr-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"originalGravity": "1.087",
				"createDate": "2012-08-26 04:06:08",
				"updateDate": "2015-12-16 18:21:40",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 31,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Imperial or Double India Pale Ale",
					"shortName": "Imperial IPA",
					"description": "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
					"ibuMin": "65",
					"ibuMax": "100",
					"abvMin": "7.5",
					"abvMax": "10.5",
					"srmMin": "5",
					"srmMax": "13",
					"ogMin": "1.075",
					"fgMin": "1.012",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:46"
				}
			},
			{
				"id": "DEojxv",
				"name": "Dank Tank Red Hot Mama",
				"nameDisplay": "Dank Tank Red Hot Mama",
				"abv": "8.6",
				"styleId": 33,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/DEojxv/upload_xfUAZe-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/DEojxv/upload_xfUAZe-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/DEojxv/upload_xfUAZe-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-11-13 01:19:02",
				"updateDate": "2015-12-17 07:46:23",
				"style": {
					"id": 33,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Imperial Red Ale",
					"shortName": "Imperial Red",
					"description": "Imperial Red Ales are deep amber to dark copper/reddish brown. A small amount of chill haze is allowable at cold temperatures. Fruity-ester aroma is medium. Hop aroma is intense, arising from any variety of hops. Medium to high caramel malt character is present. Hop flavor is intense, and balanced with other beer characters. They may use any variety of hops. Hop bitterness is intense. Alcohol content is very high and of notable character. Complex alcohol flavors may be evident. Fruity-ester flavors are medium. Diacetyl should not be perceived. Body is full.",
					"ibuMin": "55",
					"ibuMax": "85",
					"abvMin": "7.9",
					"abvMax": "10.5",
					"srmMin": "10",
					"srmMax": "15",
					"ogMin": "1.08",
					"fgMin": "1.02",
					"fgMax": "1.028",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 17:05:43"
				}
			},
			{
				"id": "9nXV0D",
				"name": "Dank Tank The Price is Wrong",
				"nameDisplay": "Dank Tank The Price is Wrong",
				"description": "Workin’ as a caddy at Bushwood, El Danko was stoked to ﬁnd out he would be shouldering Boob Barker’s bag. Figuring Boob was a swell guy who liked to have fun, El Danko slipped an exploding golf ball onto the ﬁrst tee. Boob was so enraged after the ball blew, he threw a haymaker at El Danko and broke his high heel. Fearing a big lawsuit and being hammered in the tabloids, Boob offered him a rigged spot on the Price is Wrong to keep him quiet. Sure enough, down in Studio City 42 days later, Rod Roddy bellowed out to El Danko “C’mon down!” He was ecstatic as they wheeled out some fancy leather chaps and some extra crisping hair mousse, which he just purchased last week. Bidding $420 on the lot, El Danko nailed it! With a kiss from Barker ’s Beauties as the bonus, he strutted on stage and with a wink he gave a slap on the ass to Boob Barker himself. On to the big prize, El Danko was confronted with the infamous Cliff Hanger climb! Just as the yodeler was about to cliff dive off the ledge, he came to a screeching halt. The Dankster had pulled it off, winning the prize behind Door #2: Pimpin’ high heels and some private time behind Curtain #3 with Ester-y, the Belgian Barker Beauty, who 9 months later delivered the biggest surprise of all! Blam!!! El Danko is a dad living in Belgium. Jobless, he got a gig at Ester-y’s family brewery to pay for his Price is Wrong love child, Bar nold Schwarzenkegger. The Boob Barker Belgian Behemoth Boogieboy. Benjoy!",
				"abv": "9",
				"styleId": 64,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/9nXV0D/upload_ZN4x2H-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/9nXV0D/upload_ZN4x2H-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/9nXV0D/upload_ZN4x2H-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2014-11-16 17:46:17",
				"updateDate": "2015-12-17 20:14:33",
				"style": {
					"id": 64,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style Dark Strong Ale",
					"shortName": "Belgian Dark Strong",
					"description": "Belgian dark strong ales are amber to dark brown in color. Often, though not always, brewed with dark Belgian \"candy\" sugar, these beers can be well attenuated, ranging from medium to full-bodied. The perception of hop bitterness is low to medium, with hop flavor and aroma also in this range. Fruity complexity along with the soft flavors of roasted malts add distinct character. The alcohol strength of these beers can often be deceiving to the senses. The intensity of malt character can be rich, creamy, and sweet with intensities ranging from medium to high. Very little or no diacetyl is perceived. Herbs and spices are sometimes used to delicately flavor these strong ales. Low levels of phenolic spiciness from yeast byproducts may also be perceived. Chill haze is allowable at cold temperatures.",
					"ibuMin": "20",
					"ibuMax": "50",
					"abvMin": "7",
					"abvMax": "11",
					"srmMin": "9",
					"srmMax": "35",
					"ogMin": "1.064",
					"fgMin": "1.012",
					"fgMax": "1.024",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:32:23"
				}
			},
			{
				"id": "x3ijRg",
				"name": "Dank Tank: Some Strange II Black IPA",
				"nameDisplay": "Dank Tank: Some Strange II Black IPA",
				"abv": "10",
				"availableId": 2,
				"styleId": 41,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/x3ijRg/upload_QZ8nS2-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/x3ijRg/upload_QZ8nS2-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/x3ijRg/upload_QZ8nS2-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-12-05 12:02:06",
				"updateDate": "2015-12-16 21:09:15",
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 41,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Black Ale",
					"shortName": "Black Ale",
					"description": "American-style Black Ales are very dark to black and perceived to have medium high to high hop bitterness, flavor and aroma with medium-high alcohol content, balanced with a medium body. Fruity, floral and herbal character from hops of all origins may contribute character. The style is further characterized by a balanced and moderate degree of caramel malt and dark roasted malt flavor and aroma. High astringency and high degree of burnt roast malt character should be absent.",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6",
					"abvMax": "7.5",
					"srmMin": "35",
					"srmMax": "35",
					"ogMin": "1.056",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:28:36"
				}
			},
			{
				"id": "RsGMGn",
				"name": "Festive Ale",
				"nameDisplay": "Festive Ale (2013)",
				"abv": "8.5",
				"availableId": 4,
				"styleId": 124,
				"isOrganic": "N",
				"year": 2013,
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/RsGMGn/upload_osBvWa-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/RsGMGn/upload_osBvWa-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/RsGMGn/upload_osBvWa-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-11-13 01:20:22",
				"updateDate": "2015-12-17 06:39:09",
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 124,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Herb and Spice Beer",
					"shortName": "Spice Beer",
					"description": "Herb beers use herbs or spices (derived from roots, seeds, fruits, vegetable, flowers, etc.) other than or in addition to hops to create a distinct (ranging from subtle to intense) character, though individual characters of herbs and/or spices used may not always be identifiable. Under hopping often, but not always, allows the spice or herb to contribute to the flavor profile. Positive evaluations are significantly based on perceived balance of flavors. Note: Chili-flavored beers that emphasize heat rather than chili flavor should be entered as a \"spiced\" beer.  A statement by the brewer explaining what herbs or spices are used is essential in order for fair assessment in competitions. Specifying a style upon which the beer is based may help evaluation. If this beer is a classic style with an herb or spice, the brewer should specify the classic style. If no Chocolate or Coffee category exists in a competition, then chocolate and coffee beers should be entered in this category.",
					"ibuMin": "5",
					"ibuMax": "70",
					"abvMin": "2.5",
					"abvMax": "12",
					"srmMin": "5",
					"srmMax": "50",
					"ogMin": "1.03",
					"fgMin": "1.006",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:44:45"
				}
			},
			{
				"id": "9cqNKc",
				"name": "Georgia Brown",
				"nameDisplay": "Georgia Brown",
				"description": "An American Brown Ale, deep copper-colored, mild malt. Designed to be a session beer, it has a real smooth finish without a huge hop character. Smoother than a Bill Clinton apology! \r\n\r\nGold - Brown Ales Great American Beer Festival\r\n\r\nHops: Columbus, Willamette\r\nGrains: 2 Row, 70/80, Carapils, Victory, Chocolate",
				"abv": "5.8",
				"ibu": "30",
				"glasswareId": 5,
				"srmId": 33,
				"availableId": 1,
				"styleId": 37,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/9cqNKc/upload_fyCyII-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/9cqNKc/upload_fyCyII-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/9cqNKc/upload_fyCyII-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:44:20",
				"updateDate": "2015-12-16 06:56:17",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 33,
					"name": "33",
					"hex": "520907"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 37,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Brown Ale",
					"shortName": "American Brown",
					"description": "American brown ales range from deep copper to brown in color. Roasted malt caramel-like and chocolate-like characters should be of medium intensity in both flavor and aroma. American brown ales have evident low to medium hop flavor and aroma, medium to high hop bitterness, and a medium body. Estery and fruity-ester characters should be subdued. Diacetyl should not be perceived. Chill haze is allowable at cold temperatures.",
					"ibuMin": "25",
					"ibuMax": "45",
					"abvMin": "4",
					"abvMax": "6.4",
					"srmMin": "15",
					"srmMax": "26",
					"ogMin": "1.04",
					"fgMin": "1.01",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:27:35"
				}
			},
			{
				"id": "jMQlvu",
				"name": "Goin' Coastal",
				"nameDisplay": "Goin' Coastal",
				"description": "Slide into summer and step off the grid by Goin’ Coastal with this pineapple laced IPA. The bright aromas of the five citrus hop additions are accentuated by the tropical fruit of the pineapple- and just like those three day weekends, its finish is quick.",
				"abv": "6.1",
				"styleId": 30,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/jMQlvu/upload_vdRaZA-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/jMQlvu/upload_vdRaZA-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/jMQlvu/upload_vdRaZA-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2016-05-02 13:06:31",
				"updateDate": "2016-08-03 20:09:47",
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "4BzAQE",
				"name": "Happy Ending",
				"nameDisplay": "Happy Ending (2014)",
				"abv": "9",
				"availableId": 4,
				"styleId": 43,
				"isOrganic": "N",
				"year": 2014,
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/4BzAQE/upload_W6jcxs-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/4BzAQE/upload_W6jcxs-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/4BzAQE/upload_W6jcxs-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-11-13 01:20:54",
				"updateDate": "2015-12-17 07:18:40",
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 43,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Imperial Stout",
					"shortName": "American Imperial Stout",
					"description": "Black in color, American-style imperial stouts typically have a high alcohol content. Generally characterized as very robust. The extremely rich malty flavor and aroma are balanced with assertive hopping and fruity-ester characteristics. Bitterness should be moderately high to very high and balanced with full sweet malt character. Roasted malt astringency and bitterness can be moderately perceived but should not overwhelm the overall character. Hop aroma is usually moderately-high to overwhelmingly hop-floral, -citrus or -herbal. Diacetyl (butterscotch) levels should be absent.",
					"ibuMin": "50",
					"ibuMax": "80",
					"abvMin": "7",
					"abvMax": "12",
					"srmMin": "40",
					"srmMax": "40",
					"ogMin": "1.08",
					"fgMin": "1.02",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:28:49"
				}
			},
			{
				"id": "Hb6O3U",
				"name": "Happy Ending",
				"nameDisplay": "Happy Ending",
				"description": "This seasonal “Catch and Release” Imperial Stout is a dry hopped stiffy, leading to an explosive finish at 9% ABV that is guaranteed to put a smile on your face.\r\nAvailable late December thru early March, in six packs, 22oz. bombers, 15.5 and 5.2 gallon kegs. Line priced with our Festive Ale, slightly higher than SweetWater’s year round lip smackin core styles.",
				"abv": "9",
				"glasswareId": 5,
				"availableId": 4,
				"styleId": 43,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/Hb6O3U/upload_AasixN-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/Hb6O3U/upload_AasixN-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/Hb6O3U/upload_AasixN-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-12-13 03:27:45",
				"updateDate": "2016-03-21 19:53:56",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 43,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Imperial Stout",
					"shortName": "American Imperial Stout",
					"description": "Black in color, American-style imperial stouts typically have a high alcohol content. Generally characterized as very robust. The extremely rich malty flavor and aroma are balanced with assertive hopping and fruity-ester characteristics. Bitterness should be moderately high to very high and balanced with full sweet malt character. Roasted malt astringency and bitterness can be moderately perceived but should not overwhelm the overall character. Hop aroma is usually moderately-high to overwhelmingly hop-floral, -citrus or -herbal. Diacetyl (butterscotch) levels should be absent.",
					"ibuMin": "50",
					"ibuMax": "80",
					"abvMin": "7",
					"abvMax": "12",
					"srmMin": "40",
					"srmMax": "40",
					"ogMin": "1.08",
					"fgMin": "1.02",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:28:49"
				}
			},
			{
				"id": "0s57EN",
				"name": "Hash Brown",
				"nameDisplay": "Hash Brown",
				"description": "Oh me oh my-. What did we do? We fired up the skillet to 420 degrees, tossed in a sizzling concoction of 2-Row, Wheat, Pale Chocolate, Cara-Brown, and Midnight Wheat, then added in a hefty dose of hop hash and other dank-ish-ish-ish fixins to scatter, smother, and cover this baby all the way. Resiny, citrusy hops spice up the rich chocolate and caramel notes the malt brought to the mix, making this platter slide down the counter at 60 IBU’s.",
				"abv": "6.2",
				"ibu": "60",
				"styleId": 37,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/0s57EN/upload_X2XhH1-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/0s57EN/upload_X2XhH1-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/0s57EN/upload_X2XhH1-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-08-27 02:41:34",
				"updateDate": "2015-12-18 03:15:47",
				"style": {
					"id": 37,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Brown Ale",
					"shortName": "American Brown",
					"description": "American brown ales range from deep copper to brown in color. Roasted malt caramel-like and chocolate-like characters should be of medium intensity in both flavor and aroma. American brown ales have evident low to medium hop flavor and aroma, medium to high hop bitterness, and a medium body. Estery and fruity-ester characters should be subdued. Diacetyl should not be perceived. Chill haze is allowable at cold temperatures.",
					"ibuMin": "25",
					"ibuMax": "45",
					"abvMin": "4",
					"abvMax": "6.4",
					"srmMin": "15",
					"srmMax": "26",
					"ogMin": "1.04",
					"fgMin": "1.01",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:27:35"
				}
			},
			{
				"id": "JKdiyv",
				"name": "Hash Session IPA",
				"nameDisplay": "Hash Session IPA",
				"description": "Cooling out on the dock, jamming tunes and popping tops, wait for da rod to bend. Gist of the grist is mellow at 4.2%, laying down the base to showcase the blazin’ Amarillo hop hash sunset.",
				"abv": "4.2",
				"styleId": 164,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/JKdiyv/upload_L3Kylb-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/JKdiyv/upload_L3Kylb-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/JKdiyv/upload_L3Kylb-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2016-02-20 18:56:21",
				"updateDate": "2016-02-21 10:00:26",
				"style": {
					"id": 164,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Session India Pale Ale",
					"shortName": "Session IPA",
					"description": "Session India Pale Ales are gold to copper. Chill haze is allowable at cold temperatures and hop haze is allowable at any temperature. Fruity-ester aroma is light to moderate. Hop aroma is medium to high with qualities from a wide variety of hops from all over the world. Low to medium maltiness is present. Hop flavor is strong, characterized by flavors from a wide variety of hops. Hop bitterness is medium to high. Fruity-ester flavors are low to moderate. Diacetyl is absent or at very low levels. Body is low to medium.",
					"createDate": "2015-04-07 17:07:27"
				}
			},
			{
				"id": "7HHwqy",
				"name": "Hop Hash",
				"nameDisplay": "Hop Hash",
				"description": "We scraped all the hash out of the Yakima hop pelletizers we could get our sticky fingers on to concoct the dankest double IPA out there. The pure hop lupulin, aka “hash” (the resiny stuff), meshes seamlessly with the 2-row, pilsner and wheat malts, allowing it to deliver a pungent punch to the palate.",
				"abv": "7.8",
				"ibu": "100",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 31,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/7HHwqy/upload_KhJwGJ-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/7HHwqy/upload_KhJwGJ-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/7HHwqy/upload_KhJwGJ-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2014-11-21 19:57:49",
				"updateDate": "2015-12-17 18:43:00",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 31,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Imperial or Double India Pale Ale",
					"shortName": "Imperial IPA",
					"description": "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
					"ibuMin": "65",
					"ibuMax": "100",
					"abvMin": "7.5",
					"abvMax": "10.5",
					"srmMin": "5",
					"srmMax": "13",
					"ogMin": "1.075",
					"fgMin": "1.012",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:46"
				}
			},
			{
				"id": "BceaoL",
				"name": "Hummer",
				"nameDisplay": "Hummer",
				"description": "SweetWater Hummer is a tasty Belgian White Ale brewed with coriander and orange peel. Cloudy with subtle fruit tones and a lingering finish. Everybody loves a Hummer!",
				"abv": "5.1",
				"styleId": 61,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/BceaoL/upload_f4Z2z1-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/BceaoL/upload_f4Z2z1-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/BceaoL/upload_f4Z2z1-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:43:27",
				"updateDate": "2015-12-16 03:50:33",
				"style": {
					"id": 61,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style Blonde Ale",
					"shortName": "Belgian Blonde",
					"description": "Belgian-style blond ales are characterized by low yet evident hop bitterness, flavor, and sometimes aroma. Light to medium body and low malt aroma with a sweet, spiced and a low to medium fruity-ester character orchestrated in flavor and aroma. Sugar may be used to lighten perceived body. They are blonde to golden in color. Noble-type hops are commonly used. Low levels of phenolic spiciness from yeast byproducts may be perceived. Diacetyl should not be perceived. Acidic character should not be present. Chill haze is allowable at cold temperatures.",
					"ibuMin": "15",
					"ibuMax": "30",
					"abvMin": "6",
					"abvMax": "7.8",
					"srmMin": "4",
					"srmMax": "7",
					"ogMin": "1.054",
					"fgMin": "1.008",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:32:01"
				}
			},
			{
				"id": "DiM4QZ",
				"name": "IPA with Rosemary",
				"nameDisplay": "IPA with Rosemary",
				"availableId": 2,
				"styleId": 30,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2016-04-11 14:36:16",
				"updateDate": "2016-04-11 14:36:16",
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "gm9FbA",
				"name": "Johnny Hash - Dank Tank",
				"nameDisplay": "Johnny Hash - Dank Tank",
				"abv": "8.5",
				"styleId": 31,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/gm9FbA/upload_pQv7AC-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/gm9FbA/upload_pQv7AC-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/gm9FbA/upload_pQv7AC-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-03-02 13:11:19",
				"updateDate": "2015-12-17 23:22:09",
				"style": {
					"id": 31,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Imperial or Double India Pale Ale",
					"shortName": "Imperial IPA",
					"description": "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
					"ibuMin": "65",
					"ibuMax": "100",
					"abvMin": "7.5",
					"abvMax": "10.5",
					"srmMin": "5",
					"srmMax": "13",
					"ogMin": "1.075",
					"fgMin": "1.012",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:46"
				}
			},
			{
				"id": "DNAmvo",
				"name": "LowRYEder IPA",
				"nameDisplay": "LowRYEder IPA",
				"description": "A flame throwin’ Rye IPA ignited by a 25% shot of rye malt and capped by a booty hoppin’ blast of Mt Hood and Centennial hops that makes this IPA bounce!",
				"abv": "6.2",
				"ibu": "45",
				"glasswareId": 5,
				"availableId": 4,
				"styleId": 117,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/DNAmvo/upload_zFykIg-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/DNAmvo/upload_zFykIg-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/DNAmvo/upload_zFykIg-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-01-13 01:30:35",
				"updateDate": "2015-12-16 21:49:43",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 117,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Rye Ale or Lager with or without Yeast",
					"shortName": "Rye Ale",
					"description": "Rye beers can be made using either ale or lager yeast. It should be brewed with at least 20 percent rye malt, and low to medium perception of hop bitterness. Hop aroma and flavor can be low to medium-high. These are often versions of classic styles that contain noticeable rye character in balance with other qualities of the beer. A spicy, fruity-estery aroma and flavor are typical but at low levels; however, phenolic, clove-like characteristics should not be perceived. Color is straw to amber, and the body should be light to medium in character. Diacetyl should not be perceived. If this style is packaged and served without yeast, no yeast characters should be evident in mouthfeel, flavor, or aroma. A low level of tannin derived astringency may be perceived. If this style is served with yeast, the character should portray a full yeasty mouthfeel and appear hazy to very cloudy. Yeast flavor and aroma should be low to medium but not overpowering the balance and character of rye and barley malt and hops. Darker versions of this style will be dark amber to dark brown, and the body should be light to medium in character. Roasted malts are optionally evident in aroma and flavor with a low level of roast malt astringency acceptable when appropriately balanced with malt sweetness. Roast malts may be evident as a cocoa/chocolate or caramel character. Aromatic toffee-like, caramel, or biscuit-like characters may be part of the overall flavor/aroma profile. As in the lighter colored versions, diacetyl should not be perceived. Competition directors may create specific styles of rye beer, such as Rye Pale Ale or Rye Brown Ale. A statement by the brewer indicating if the beer is based on a classic style is essential for accurate judging.",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:44:12"
				}
			},
			{
				"id": "tupCCv",
				"name": "Mean Joe Bean",
				"nameDisplay": "Mean Joe Bean",
				"description": "Rodger the Dodger and his Imperial Porter bone offense didn’t stand a bat wing’s chance, once we dipped our Nicaraguan bean sack through his facemask!\r\nWe blindsided his 8.5% Alc/Vol jock strap back to the fields to pick some more beans, resulting in this Immaculate con-Catch-tion of intense forearm shivers of chocolate malt, a body like the Bus and blitzes of gridiron hops, all clotheslined by intense coffee overtones. So good that you’ll need your terrible towel to wipe the tears.\r\n\r\nImperial Porter brewed with Fresh Roasted Coffee Beans from Java Vino in Atlanta via their family coffee farm in Nicaragua.",
				"abv": "8.5",
				"availableId": 2,
				"styleId": 18,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/tupCCv/upload_bcgLF0-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/tupCCv/upload_bcgLF0-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/tupCCv/upload_bcgLF0-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-12-13 03:34:18",
				"updateDate": "2015-12-16 22:02:44",
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 18,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Brown Porter",
					"shortName": "Brown Porter",
					"description": "Brown porters are mid to dark brown (may have red tint) in color. No roast barley or strong burnt/black malt character should be perceived. Low to medium malt sweetness, caramel and chocolate is acceptable along with medium hop bitterness. This is a lightto medium-bodied beer. Fruity esters are acceptable. Hop flavor and aroma may vary from being negligible to medium in character.",
					"ibuMin": "20",
					"ibuMax": "30",
					"abvMin": "4.5",
					"abvMax": "6",
					"srmMin": "20",
					"srmMax": "35",
					"ogMin": "1.04",
					"fgMin": "1.006",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:21:43"
				}
			},
			{
				"id": "1j4prL",
				"name": "Mid Winter India Pale Ale",
				"nameDisplay": "Mid Winter India Pale Ale",
				"availableId": 2,
				"styleId": 30,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/1j4prL/upload_fwYIQ2-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/1j4prL/upload_fwYIQ2-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/1j4prL/upload_fwYIQ2-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-07-22 22:57:39",
				"updateDate": "2015-12-17 02:59:44",
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "EbwOyu",
				"name": "Pulled Porter",
				"nameDisplay": "Pulled Porter",
				"description": "On the farm way too long, ol’ McDanko began showing some worrisome tendencies. Following a solid session in the hot box smoking malt, he was overcome by a methane cloud emoted from the herd. Ya heard? Reaching for the hops, he goofed and grabbed porky by the e-i-e-i-oh and plopped her in the brew kettle slow and low —that is the tempo. Knock knock —who’s them? It’s McDanko’s inbred neighbor, Geri Reynolds, swinging by delivering his deliverance with some fat back hem and some fat back them. Stepping out past some Foxy brothers picking a banjo on the porch to sample his wares, McDanko, doubled over the chopping block and squealed like a pig – wieii wieii — proclaiming this to be the most bodacious bacon beer brewed this side of the Chattoog-a!",
				"abv": "7.7",
				"styleId": 38,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/EbwOyu/upload_5xJa4H-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/EbwOyu/upload_5xJa4H-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/EbwOyu/upload_5xJa4H-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-11-24 15:12:21",
				"updateDate": "2015-12-18 06:21:16",
				"style": {
					"id": 38,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Smoke Porter",
					"shortName": "Smoke Porter",
					"description": "Smoke porters are chestnut brown to black in color. They can exhibit a mild to assertive smoke character in balance with other beer characters. Black malt character can be perceived in some porters, while others may be absent of strong roast character. Roast barley character should be absent. Medium to full malt sweetness, caramel and chocolate are acceptable along with medium to medium-high hop bitterness. These beers are usually medium to full bodied. Fruity esters are acceptable. Hop flavor and aroma may vary from being negligible to medium in character.",
					"ibuMin": "20",
					"ibuMax": "40",
					"abvMin": "5",
					"abvMax": "8.7",
					"srmMin": "20",
					"srmMax": "20",
					"ogMin": "1.04",
					"fgMin": "1.006",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:27:41"
				}
			},
			{
				"id": "Z4LnaP",
				"name": "Second Helping IPA",
				"nameDisplay": "Second Helping IPA",
				"description": "Sometimes a beer is more than a beer – it’s hope. Our goal with Second Helping IPA is just that. We tag-teamed this IPA, brewed with juniper berries, with our pals at The Giving Kitchen – an awesome local organization dedicated to helping folks from the hospitality industry who have hit a rough patch or experienced catastrophic emergencies.\r\n\r\nSecond Helping will be a limited release brew only available in Atlanta, and 100% of profits from the beer will be donated right back to the amazing stuff The Giving Kitchen is doing. Just one small way we can help pay it forward. For more info on what they’re all about, make sure you visit their website and check out the video below.",
				"abv": "7.4",
				"availableId": 2,
				"styleId": 30,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/Z4LnaP/upload_XCF3wF-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/Z4LnaP/upload_XCF3wF-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/Z4LnaP/upload_XCF3wF-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2014-01-22 00:06:34",
				"updateDate": "2015-12-17 08:37:15",
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "zJigjF",
				"name": "Spinnerbait",
				"nameDisplay": "Spinnerbait",
				"description": "The flash of this spinnerbait stimulates the senses with its sweet malty currents and deep red hues. Our BA reels with fruity esters and spicy notes from the Ardennes yeast which swirl through the Belgian rock candy, casting the perfect presentation for the hops to set the hook on this big boy.",
				"abv": "6",
				"ibu": "25",
				"availableId": 4,
				"styleId": 57,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-03-26 01:17:41",
				"updateDate": "2015-04-01 18:12:20",
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 57,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style Flanders Oud Bruin or Oud Red Ales",
					"shortName": "Flanders Red",
					"description": "This light- to medium-bodied deep copper to brown ale is characterized by a slight to strong lactic sourness, and with \"Reds\" sometimes a balanced degree of acetic acid. Brettanomyces produced flavors and aromas are not part of character. A fruity-estery character which is often cherry-like is apparent with no hop flavor or aroma. Flanders brown ales have low to medium bitterness and a cocoa-like character from roast malt. Roasted malt character in aroma and flavor is acceptable at low levels. A very low degree of malt sweetness may be present and in balance with the acidity produced by Lactobacillus activity. Oak-like or woody characters may be pleasantly integrated into overall palate. Chill haze is acceptable at low serving temperatures. Some versions may be more highly carbonated and, when bottle conditioned, may appear cloudy (yeast) when served. These final beers are often blended old with new before packaging in order to create the brewer's intended balance of characters.",
					"ibuMin": "15",
					"ibuMax": "25",
					"abvMin": "4.8",
					"abvMax": "6.5",
					"srmMin": "12",
					"srmMax": "20",
					"ogMin": "1.044",
					"fgMin": "1.008",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:31:39"
				}
			},
			{
				"id": "6owRQn",
				"name": "SweetWater Exodus Porter",
				"nameDisplay": "SweetWater Exodus Porter",
				"description": "This is a classic American Porter, poured on tap it has a good head that stays and leaves a nice lace.  It is defined by its chocolate malt, medium body, and smooth mouthfeel.  Balanced by the Golding and Columbus hops on the finish is a hint of bitterness.  \r\n\r\nDon't be afraid of the dark.",
				"glasswareId": 5,
				"availableId": 4,
				"styleId": 18,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/6owRQn/upload_X4IowT-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/6owRQn/upload_X4IowT-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/6owRQn/upload_X4IowT-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:44:20",
				"updateDate": "2015-12-16 05:03:52",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 18,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Brown Porter",
					"shortName": "Brown Porter",
					"description": "Brown porters are mid to dark brown (may have red tint) in color. No roast barley or strong burnt/black malt character should be perceived. Low to medium malt sweetness, caramel and chocolate is acceptable along with medium hop bitterness. This is a lightto medium-bodied beer. Fruity esters are acceptable. Hop flavor and aroma may vary from being negligible to medium in character.",
					"ibuMin": "20",
					"ibuMax": "30",
					"abvMin": "4.5",
					"abvMax": "6",
					"srmMin": "20",
					"srmMax": "35",
					"ogMin": "1.04",
					"fgMin": "1.006",
					"fgMax": "1.014",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:21:43"
				}
			},
			{
				"id": "ctjbwM",
				"name": "SweetWater Festive Ale",
				"nameDisplay": "SweetWater Festive Ale",
				"description": "Winter Coat Season – A strong ale brewed with generous amounts of rich malt, coupled with a taint of cinnamon and mace to keep you warm and toasted all winter long  We Double Dog Dare You",
				"abv": "8.5",
				"glasswareId": 5,
				"availableId": 4,
				"styleId": 124,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/ctjbwM/upload_wI10zq-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/ctjbwM/upload_wI10zq-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/ctjbwM/upload_wI10zq-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:44:20",
				"updateDate": "2016-06-20 18:11:55",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 124,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Herb and Spice Beer",
					"shortName": "Spice Beer",
					"description": "Herb beers use herbs or spices (derived from roots, seeds, fruits, vegetable, flowers, etc.) other than or in addition to hops to create a distinct (ranging from subtle to intense) character, though individual characters of herbs and/or spices used may not always be identifiable. Under hopping often, but not always, allows the spice or herb to contribute to the flavor profile. Positive evaluations are significantly based on perceived balance of flavors. Note: Chili-flavored beers that emphasize heat rather than chili flavor should be entered as a \"spiced\" beer.  A statement by the brewer explaining what herbs or spices are used is essential in order for fair assessment in competitions. Specifying a style upon which the beer is based may help evaluation. If this beer is a classic style with an herb or spice, the brewer should specify the classic style. If no Chocolate or Coffee category exists in a competition, then chocolate and coffee beers should be entered in this category.",
					"ibuMin": "5",
					"ibuMax": "70",
					"abvMin": "2.5",
					"abvMax": "12",
					"srmMin": "5",
					"srmMax": "50",
					"ogMin": "1.03",
					"fgMin": "1.006",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:44:45"
				}
			},
			{
				"id": "uzOl1k",
				"name": "SweetWater IPA",
				"nameDisplay": "SweetWater IPA",
				"description": "This mammouth India Pale Ale is loaded with intense hop character and subjected to an extensive dry-hopping process. Our IPA is unfiltered and as always, not pasteurized, leaving all the natural flavors intact.\r\n\r\nThe Beer You’ve Been Training For\r\n\r\nAwards – Best IPA in the Country – Judges Choice AJC March 09",
				"abv": "6.3",
				"ibu": "61",
				"glasswareId": 5,
				"srmId": 9,
				"availableId": 1,
				"styleId": 30,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/uzOl1k/upload_NFmL6m-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/uzOl1k/upload_NFmL6m-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/uzOl1k/upload_NFmL6m-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:44:20",
				"updateDate": "2015-12-16 06:56:07",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"srm": {
					"id": 9,
					"name": "9",
					"hex": "E58500"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			},
			{
				"id": "FDSQ5n",
				"name": "SweetWater Mean Joe Bean",
				"nameDisplay": "SweetWater Mean Joe Bean",
				"description": "Rodger the Dodger and his Imperial Porter bone offense didn't stand a bat wings change once we dipped our Nicaraguan bean sack through his facemask!\r\n\r\nWe blindsided his 8.5% ABV jock strap back to the fields to pick more beans, resulting in his Immaculate con-Catch-tion of intense forearm shivers of chocolate malt, a body like the Bus and blitzes of gridiron hops, all clotheslined by intense coffee overtones.  So goo that you'll need your terrible towel to wipe the tears.",
				"abv": "8.5",
				"glasswareId": 5,
				"availableId": 2,
				"styleId": 19,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/FDSQ5n/upload_Hoh2yn-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/FDSQ5n/upload_Hoh2yn-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/FDSQ5n/upload_Hoh2yn-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:44:20",
				"updateDate": "2015-12-16 06:53:01",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 2,
					"name": "Limited",
					"description": "Limited availability."
				},
				"style": {
					"id": 19,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Robust Porter",
					"shortName": "Robust Porter",
					"description": "Robust porters are black in color and have a roast malt flavor, often reminiscent of cocoa, but no roast barley flavor. These porters have a sharp bitterness of black malt without a highly burnt/charcoal flavor. Caramel and other malt sweetness should be present and in harmony with other distinguishing porter characters. Robust porters range from medium to full in body and have a malty sweetness. Hop bitterness is medium to high, with hop aroma and flavor ranging from negligible to medium. Diacetyl is acceptable at very low levels. Fruity esters should be evident, balanced with roast malt and hop bitterness.",
					"ibuMin": "25",
					"ibuMax": "40",
					"abvMin": "5",
					"abvMax": "6.5",
					"srmMin": "30",
					"srmMax": "30",
					"ogMin": "1.045",
					"fgMin": "1.008",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:21:45"
				}
			},
			{
				"id": "0a0nmv",
				"name": "SweetWater Motor Boat",
				"nameDisplay": "SweetWater Motor Boat",
				"description": "Leaf Season – Silver medal winner “08 & 09 Great American Beer Festival! Our titillating version of an ESB. Dry Hopped for a face full of flavor.",
				"abv": "5.6",
				"glasswareId": 5,
				"availableId": 4,
				"styleId": 3,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/0a0nmv/upload_rkM9CG-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/0a0nmv/upload_rkM9CG-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/0a0nmv/upload_rkM9CG-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:44:20",
				"updateDate": "2015-12-16 06:54:14",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 3,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Ordinary Bitter",
					"shortName": "Bitter",
					"description": "Ordinary bitter is gold to copper colored with medium bitterness, light to medium body, and low to medium residual malt sweetness. Hop flavor and aroma character may be evident at the brewer's discretion. Mild carbonation traditionally characterizes draft-cask versions, but in bottled versions, a slight increase in carbon dioxide content is acceptable. Fruity-ester character and very low diacetyl (butterscotch) character are acceptable in aroma and flavor, but should be minimized in this form of bitter. Chill haze is allowable at cold temperatures. (English and American hop character may be specified in subcategories.)",
					"ibuMin": "20",
					"ibuMax": "35",
					"abvMin": "3",
					"abvMax": "4.1",
					"srmMin": "5",
					"srmMax": "12",
					"ogMin": "1.033",
					"fgMin": "1.006",
					"fgMax": "1.012",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:18:39"
				}
			},
			{
				"id": "OGHzdU",
				"name": "SweetWater Road Trip",
				"nameDisplay": "SweetWater Road Trip",
				"description": "Bikini Season – a fiery Pilsner fermented at ale temperatures for a fuller flavor, capped by and intense spicy-hop finish.\r\nNobody Rides for Free",
				"abv": "5.2",
				"glasswareId": 4,
				"availableId": 4,
				"styleId": 98,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/OGHzdU/upload_c8GdYf-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/OGHzdU/upload_c8GdYf-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/OGHzdU/upload_c8GdYf-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:44:20",
				"updateDate": "2015-12-16 06:49:44",
				"glass": {
					"id": 4,
					"name": "Pilsner",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
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
				"id": "XJ7ZBB",
				"name": "SweetWater SchWheat",
				"nameDisplay": "SweetWater SchWheat",
				"description": "SweetWater Sch’Wheat American Wheat Ale. If that don't slide past your uvula, we are sure this will! Delicate rays of citrus hop overtones transcend this easy drinking unfiltered wheat ale, creating an exceptionally quaffable experience. This year round beer is line priced with the rest of our year round lip smackin lineup. Available in both six packs and on draught.",
				"abv": "4.9",
				"glasswareId": 5,
				"availableId": 3,
				"styleId": 112,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/XJ7ZBB/upload_t111tW-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/XJ7ZBB/upload_t111tW-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/XJ7ZBB/upload_t111tW-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:44:20",
				"updateDate": "2015-12-16 06:55:21",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 3,
					"name": "Not Available",
					"description": "Beer is not available."
				},
				"style": {
					"id": 112,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Light American Wheat Ale or Lager with Yeast",
					"shortName": "Wheat Ale",
					"description": "This beer can be made using either ale or lager yeast. It can be brewed with 30 to 75 percent wheat malt, and hop rates may be low to medium. Hop characters may be light to moderate in bitterness, flavor and aroma. Fruity-estery aroma and flavor are typical but at low levels however, phenolic, clove-like characteristics should not be perceived. Color is usually straw to light amber, and the body should be light to medium in character. Diacetyl should not be perceived. Because this style is served with yeast the character should portray a full yeasty mouthfeel and appear hazy to very cloudy. Chill haze is also acceptable. Yeast flavor and aroma should be low to medium but not overpowering the balance and character of malt and hops. These beers are typically served with the yeast in the bottle, and are cloudy when served.",
					"ibuMin": "10",
					"ibuMax": "35",
					"abvMin": "3.5",
					"abvMax": "5.5",
					"srmMin": "4",
					"srmMax": "10",
					"ogMin": "1.036",
					"fgMin": "1.006",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:42:48"
				}
			},
			{
				"id": "FnRwC6",
				"name": "Take Two Pils",
				"nameDisplay": "Take Two Pils",
				"description": "A Golden Blonde German Pilsner brewed with spicy floral hops. A head-first trip down the rabbit hole of lagers. Call us in the morning!\r\n\r\nHops: Mt. Hood, Saaz, Styrian Golding\r\nGrains: Pilsner, Munich, Carapils",
				"abv": "5.5",
				"ibu": "35",
				"glasswareId": 4,
				"availableId": 1,
				"styleId": 75,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/FnRwC6/upload_wasOqX-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/FnRwC6/upload_wasOqX-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/FnRwC6/upload_wasOqX-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2014-04-29 17:36:33",
				"updateDate": "2015-12-17 13:11:25",
				"glass": {
					"id": 4,
					"name": "Pilsner",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 75,
					"categoryId": 7,
					"category": {
						"id": 7,
						"name": "European-germanic Lager",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "German-Style Pilsener",
					"shortName": "German Pilsener",
					"description": "A classic German Pilsener is very light straw or golden in color and well hopped. Perception of hop bitterness is medium to high. Noble-type hop aroma and flavor are moderate and quite obvious. It is a well-attenuated, medium-light bodied beer, but a malty residual sweetness can be perceived in aroma and flavor. Very low levels of sweet corn-like dimethylsulfide (DMS) character are below most beer drinkers' taste thresholds and are usually not detectable except to the trained or sensitive palate. Other fermentation or hop related sulfur compounds, when perceived at low levels, may be characteristic of this style. Fruity esters and diacetyl should not be perceived. There should be no chill haze. Its head should be dense and rich.",
					"ibuMin": "25",
					"ibuMax": "40",
					"abvMin": "4",
					"abvMax": "5",
					"srmMin": "3",
					"srmMax": "4",
					"ogMin": "1.044",
					"fgMin": "1.006",
					"fgMax": "1.012",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:35:59"
				}
			},
			{
				"id": "9RNMJQ",
				"name": "The Gimp",
				"nameDisplay": "The Gimp",
				"abv": "10.3",
				"styleId": 13,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/9RNMJQ/upload_nvKD9R-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/9RNMJQ/upload_nvKD9R-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/9RNMJQ/upload_nvKD9R-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-11-15 14:57:58",
				"updateDate": "2015-12-16 21:34:07",
				"style": {
					"id": 13,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Old Ale",
					"shortName": "Old Ale",
					"description": "Dark amber to brown in color, old ales are medium to full bodied with a malty sweetness. Hop aroma should be minimal and flavor can vary from none to medium in character intensity. Fruity-ester flavors and aromas can contribute to the character of this ale. Bitterness should be minimal but evident and balanced with malt and/or caramel-like sweetness. Alcohol types can be varied and complex. A distinctive quality of these ales is that they undergo an aging process (often for years) on their yeast either in bulk storage or through conditioning in the bottle, which contributes to a rich, wine-like and often sweet oxidation character. Complex estery characters may also emerge. Some very low diacetyl character may be evident and acceptable. Wood aged characters such as vanillin and other woody characters are acceptable. Horsey, goaty, leathery and phenolic character evolved from Brettanomyces organisms and acidity may be present but should be at low levels and balanced with other flavors Residual flavors that come from liquids previously aged in a barrel such as bourbon or sherry should not be present. Chill haze is acceptable at low temperatures. (This style may often be split into two categories, strong and very strong. Brettanomyces organisms and acidic characters reflect historical character. Competition organizers may choose to distinguish these types of old ale from modern versions.)",
					"ibuMin": "30",
					"ibuMax": "65",
					"abvMin": "6",
					"abvMax": "9",
					"srmMin": "12",
					"srmMax": "30",
					"ogMin": "1.058",
					"fgMin": "1.014",
					"fgMax": "1.03",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:21:03"
				}
			},
			{
				"id": "Qgkp3b",
				"name": "The Pit & The Pendulum",
				"nameDisplay": "The Pit & The Pendulum",
				"description": "The perfect balance of three distinct divergences. Allowed to initially flower with Belgian ale yeast, The Pit & The Pendulum was then incarcerated with Brett and freshly pureed peaches to intensify the trifecta of its persona.\r\n\r\nEnjoy fresh, but also a good one for the cellar, as the Brett continues to contemplate its environment.",
				"abv": "8.3",
				"ibu": "30",
				"styleId": 170,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/Qgkp3b/upload_2O52MN-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/Qgkp3b/upload_2O52MN-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/Qgkp3b/upload_2O52MN-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2015-08-27 03:43:10",
				"updateDate": "2016-07-31 16:13:47",
				"style": {
					"id": 170,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Wild Beer",
					"shortName": "Wild Beer",
					"description": "Wild Beers are any range of color. These beers may be clear or hazy due to yeast, chill haze or hop haze. Aromas may vary tremendously due to fermentation characters contributed by various known and unknown microorganisms. The overall balance should be complex and balanced. Hop aroma very low to high. Usually because of a high degree of attenuation in these beers, malt character is very low to low. If there are exceptions that are malty, the overall balance of complexity of other characters should be in harmony. Hop flavor very low to high. Hop bitterness is perceived at varying levels depending on the overall balance, but usually perceived as very low to low. Wild beers are \"spontaneously\" fermented with microorganisms that the brewer has introduced from the ambient air/environment in the vicinity of the brewery in which the beer is brewed. Wild beers may not be fermented with any cultured strains of yeast or bacteria. Wild beer may or may not be perceived as acidic. It may include a wildly variable spectrum of flavors and aromas derived from the wild microorganisms with which it was fermented. The overall balance of flavors, aromas, appearance and body is an important factor in assessing these beers. Body is very low to medium. Spontaneously fermented beers with fruit, spice or other ingredients would be appropriately entered as Wild Beer. For purposes of competition, entries which could be appropriately entered in an existing classic or traditional category such as Belgian-Style Lambic, Gueuze, Fruit Lambic, etc. should be entered in that category and not entered as a Wild Beer.",
					"createDate": "2015-04-07 17:21:44"
				}
			},
			{
				"id": "6jvc3G",
				"name": "Waterkeeper",
				"nameDisplay": "Waterkeeper",
				"description": "Perfect for a float down the Hooch or just grillin’ in the backyard, Waterkeeper Hefeweizen is our go to summer brew. Picks up with notes of banana and clove and light enough to drink all day.",
				"abv": "6",
				"glasswareId": 9,
				"styleId": 48,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/6jvc3G/upload_xDJUme-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/6jvc3G/upload_xDJUme-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/6jvc3G/upload_xDJUme-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-01-03 02:44:28",
				"updateDate": "2015-12-16 10:19:05",
				"glass": {
					"id": 9,
					"name": "Weizen",
					"createDate": "2012-01-03 02:41:33"
				},
				"style": {
					"id": 48,
					"categoryId": 4,
					"category": {
						"id": 4,
						"name": "German Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "South German-Style Hefeweizen / Hefeweissbier",
					"shortName": "Hefeweizen",
					"description": "The aroma and flavor of a Weissbier with yeast is decidedly fruity and phenolic. The phenolic characteristics are often described as clove-, nutmeg-like, mildly smoke-like or even vanilla-like. Banana-like esters should be present at low to medium-high levels. These beers are made with at least 50 percent malted wheat, and hop rates are quite low. Hop flavor and aroma are absent or present at very low levels. Weissbier is well attenuated and very highly carbonated and a medium to full bodied beer. The color is very pale to pale amber. Because yeast is present, the beer will have yeast flavor and a characteristically fuller mouthfeel and may be appropriately very cloudy. No diacetyl should be perceived.",
					"ibuMin": "10",
					"ibuMax": "15",
					"abvMin": "4.9",
					"abvMax": "5.5",
					"srmMin": "3",
					"srmMax": "9",
					"ogMin": "1.047",
					"fgMin": "1.008",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:29:27"
				}
			},
			{
				"id": "pYXY7M",
				"name": "Whiplash",
				"nameDisplay": "Whiplash",
				"description": "What happens when a 500year old Belgian style ale gets rear-ended bya truckload of pompous American hops? It equals one heck of an ambulance chaser of a beer. This is an American style Belgian IPA, with a subtle phenolic ﬂavor in combination with citrusy/piney hops, well balanced at 6.2% and 55 IBUs, with a tart, dry ﬁnish.\r\n\r\nGrains: 2-Row, Wheat, Flaked Oats\r\nHops: Bravo, Ahtanum, Centennial, Cascade\r\nDry Hop: Ahtanum, Centennial, Simcoe\r\nYeast: Strong Belgian Ale\r\n\r\n2014 World Beer Cup Bronze Medal winner for American-Belgo-Style Ale category.",
				"abv": "6.3",
				"ibu": "55",
				"glasswareId": 5,
				"availableId": 4,
				"styleId": 30,
				"isOrganic": "N",
				"labels": {
					"icon": "https://s3.amazonaws.com/brewerydbapi/beer/pYXY7M/upload_hngktS-icon.png",
					"medium": "https://s3.amazonaws.com/brewerydbapi/beer/pYXY7M/upload_hngktS-medium.png",
					"large": "https://s3.amazonaws.com/brewerydbapi/beer/pYXY7M/upload_hngktS-large.png"
				},
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2013-11-13 01:19:46",
				"updateDate": "2015-12-17 06:38:38",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 4,
					"name": "Seasonal",
					"description": "Available at the same time of year, every year."
				},
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
				}
			}
		];

var wreckingBarBeerData = [
			{
				"id": "54rSgo",
				"name": "\"Jemmy Dean\" Breakfast Stout",
				"nameDisplay": "\"Jemmy Dean\" Breakfast Stout",
				"description": "The stout style lends itself well to pairing with coffee.  Our Jemmy stout uses over eight different malts and has a complexity that is complemented by our special cold-pressed Java Vino blend added into the serving tank - yielding our \"Jemmy Dean\" breakfast stout.",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 20,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"createDate": "2012-09-29 17:22:22",
				"updateDate": "2015-04-24 13:24:02",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 20,
					"categoryId": 1,
					"category": {
						"id": 1,
						"name": "British Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Sweet or Cream Stout",
					"shortName": "Sweet Stout",
					"description": "Sweet stouts, also referred to as cream stouts, have less roasted bitter flavor and a full-bodied mouthfeel. The style can be given more body with milk sugar (lactose) before bottling. Malt sweetness, chocolate, and caramel flavor should dominate the flavor profile and contribute to the aroma. Hops should balance and suppress some of the sweetness without contributing apparent flavor or aroma. The overall impression should be sweet and full-bodied.",
					"ibuMin": "15",
					"ibuMax": "25",
					"abvMin": "3",
					"abvMax": "6",
					"srmMin": "40",
					"srmMax": "40",
					"ogMin": "1.045",
					"fgMin": "1.012",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:24:41"
				}
			},
			{
				"id": "bvYNhM",
				"name": "Breaking Bob Kolsch",
				"nameDisplay": "Breaking Bob Kolsch",
				"description": "Our 2nd generation of Kolsch, which now uses the lightest German Koln and Heidelberg malts available. Just enough hops for balance and brew water adjusted to match Koln, resulting in a very light crisp beer. Critique from some of our friends/neighbors from Koln said that the Kolquittsch Kolsch tasted too much like a Pilsner. So, we have replaced the Pilsner with Heidelberg malt and have made the beer lighter in body and ABV. Heidelberg made us think Heisenberg, who kind of looks like Brewmaster Bob. So, it is now the Breaking Bob Kolsch!",
				"abv": "4.8",
				"ibu": "21",
				"styleId": 45,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"originalGravity": "1.045",
				"createDate": "2016-02-17 14:44:34",
				"updateDate": "2016-02-17 14:44:34",
				"style": {
					"id": 45,
					"categoryId": 4,
					"category": {
						"id": 4,
						"name": "German Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "German-Style Kölsch / Köln-Style Kölsch",
					"shortName": "Kölsch",
					"description": "Kölsch is warm fermented and aged at cold temperatures (German ale or alt-style beer). Kölsch is characterized by a golden to straw color and a slightly dry, subtly sweet softness on the palate, yet crisp. Good, dense head retention is desirable. Light pearapple-Riesling wine-like fruitiness may be apparent, but is not necessary for this style. Caramel character should not be evident. The body is light to medium-light. This beer has low hop flavor and aroma with medium bitterness. Wheat can be used in brewing this beer. Ale yeast is used for fermentation, though lager yeast is sometimes used in the bottle or final cold conditioning process. Fruity esters should be minimally perceived, if at all. Chill haze should be absent.",
					"ibuMin": "18",
					"ibuMax": "25",
					"abvMin": "4.8",
					"abvMax": "5.3",
					"srmMin": "4",
					"srmMax": "6",
					"ogMin": "1.042",
					"fgMin": "1.006",
					"fgMax": "1.01",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:29:04"
				}
			},
			{
				"id": "E7h2EV",
				"name": "Denamelizer Double IPA",
				"nameDisplay": "Denamelizer Double IPA",
				"description": "If you are not current on dental insurance, beware, as the hop levels of this beer will give the perception that the enamel is coming off your teeth!  Centennial, Summit, Columbus, Falconer's Flight, and Zythos hops were used everywhere from in the mash to being served through a \"randall\" full of hops.  Yet, unlike some big IPAs, the Denamelizer has enough malt complexity and body to at least attempt to balance the insane amount of hops used - enjoy!",
				"abv": "10.3",
				"ibu": "140",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 31,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"originalGravity": "1.092",
				"createDate": "2012-09-29 17:20:50",
				"updateDate": "2012-09-29 17:20:50",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 31,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "Imperial or Double India Pale Ale",
					"shortName": "Imperial IPA",
					"description": "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
					"ibuMin": "65",
					"ibuMax": "100",
					"abvMin": "7.5",
					"abvMax": "10.5",
					"srmMin": "5",
					"srmMax": "13",
					"ogMin": "1.075",
					"fgMin": "1.012",
					"fgMax": "1.02",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:46"
				}
			},
			{
				"id": "bnyE54",
				"name": "Half-Wit",
				"nameDisplay": "Half-Wit",
				"description": "What do you call a cross between a German Hefeweizen and Belgian Witbier?  Maybe it should be Hefe-Wit, but we instead call it the Half-Wit.  Traditional German Hefeweizen grain bill fermented with Belgian yeast; yielding nice and light almost banana notes from the wheat malts, but with a light citrusy and peppery note from the yeast.  Not bitter, rather very smooth and drinkable!",
				"abv": "4.9",
				"ibu": "15",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 65,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"originalGravity": "1.047",
				"createDate": "2012-09-29 17:20:20",
				"updateDate": "2015-04-27 16:02:23",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 65,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Belgian-Style White (or Wit) / Belgian-Style Wheat",
					"shortName": "Witbier",
					"description": "Belgian white ales are very pale in color and are brewed using unmalted wheat and malted barley and are spiced with coriander and orange peel. Coriander and light orange peel aroma should be perceived as such or as an unidentified spiciness. Phenolic spiciness and yeast flavors may be evident at mild levels. These beers are traditionally bottle conditioned and served cloudy. An unfiltered starch and yeast haze should be part of the appearance. The low to medium body should have some degree of creaminess from wheat starch. The style is further characterized by the use of noble-type hops to achieve low hop bitterness and little to no apparent hop flavor. This beer has no diacetyl and a low to medium fruity-ester level. Mild acidity is appropriate.",
					"ibuMin": "10",
					"ibuMax": "17",
					"abvMin": "4.8",
					"abvMax": "5.2",
					"srmMin": "2",
					"srmMax": "4",
					"ogMin": "1.044",
					"fgMin": "1.006",
					"fgMax": "1.01",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:32:30"
				}
			},
			{
				"id": "hOaGqF",
				"name": "Husker Red Rye",
				"nameDisplay": "Husker Red Rye",
				"description": "Named for Brewmaster Bob's home football team.  Somewhat of a hybrid between a West Coast Amber and IPA, this beer uses about 30% rye malt, which lends a subtle spiciness and gives great body.  Columbus, Falconers Flight, Zythos, and Chinook hops combine to give flavors of citrus and pine, without being overly bitter.  Enjoy!",
				"abv": "5.8",
				"ibu": "37",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 117,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"originalGravity": "1.054",
				"createDate": "2012-09-29 17:22:53",
				"updateDate": "2015-06-09 20:03:49",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 117,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Rye Ale or Lager with or without Yeast",
					"shortName": "Rye Ale",
					"description": "Rye beers can be made using either ale or lager yeast. It should be brewed with at least 20 percent rye malt, and low to medium perception of hop bitterness. Hop aroma and flavor can be low to medium-high. These are often versions of classic styles that contain noticeable rye character in balance with other qualities of the beer. A spicy, fruity-estery aroma and flavor are typical but at low levels; however, phenolic, clove-like characteristics should not be perceived. Color is straw to amber, and the body should be light to medium in character. Diacetyl should not be perceived. If this style is packaged and served without yeast, no yeast characters should be evident in mouthfeel, flavor, or aroma. A low level of tannin derived astringency may be perceived. If this style is served with yeast, the character should portray a full yeasty mouthfeel and appear hazy to very cloudy. Yeast flavor and aroma should be low to medium but not overpowering the balance and character of rye and barley malt and hops. Darker versions of this style will be dark amber to dark brown, and the body should be light to medium in character. Roasted malts are optionally evident in aroma and flavor with a low level of roast malt astringency acceptable when appropriately balanced with malt sweetness. Roast malts may be evident as a cocoa/chocolate or caramel character. Aromatic toffee-like, caramel, or biscuit-like characters may be part of the overall flavor/aroma profile. As in the lighter colored versions, diacetyl should not be perceived. Competition directors may create specific styles of rye beer, such as Rye Pale Ale or Rye Brown Ale. A statement by the brewer indicating if the beer is based on a classic style is essential for accurate judging.",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:44:12"
				}
			},
			{
				"id": "zUFPvd",
				"name": "Jemmy American Stout",
				"nameDisplay": "Jemmy American Stout",
				"description": "A dark stout, yet with light body and creamy head. \r\n\r\nStouts are full-bodied black ales with flavors of dark roasted coffee and chocolate. Ours is made with Crisp Marris Otter malt, a bit of wheat for smoothness, Perle and Centennial hops and American ale yeast.",
				"abv": "7",
				"ibu": "47",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 42,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"originalGravity": "1.061",
				"createDate": "2012-09-29 17:19:49",
				"updateDate": "2012-09-29 17:19:49",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 42,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style Stout",
					"shortName": "American Stout",
					"description": "Initial low to medium malt sweetness with a degree of caramel, chocolate and/or roasted coffee flavor with a distinctive dryroasted bitterness in the finish. Coffee-like roasted barley and roasted malt aromas are prominent. Some slight roasted malt acidity is permissible and a medium- to full-bodied mouthfeel is appropriate. Hop bitterness may be moderate to high. Hop aroma and flavor is moderate to high, often with American citrus-type and/or resiny hop character. The perception of fruity esters is low. Roasted malt/barley astringency may be low but not excessive. Diacetyl (butterscotch) should be negligible or not perceived. Head retention is excellent.",
					"ibuMin": "35",
					"ibuMax": "60",
					"abvMin": "5.7",
					"abvMax": "8.8",
					"srmMin": "40",
					"srmMax": "40",
					"ogMin": "1.05",
					"fgMin": "1.01",
					"fgMax": "1.022",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:28:43"
				}
			},
			{
				"id": "Sl8eXN",
				"name": "Kölquittsch",
				"nameDisplay": "Kölquittsch",
				"description": "Very pale golden, hybrid ale/lager associated with the city of Köln, Germany.  The name is a play on words; blending the Kölsch style with one of our neighborhood's more famous streets - Colquitt.  Uses all Bohemian pilsner malts and a German yeast blend that produces a lager-like character with a \"soft\" mouthfeel and low hop bitterness that makes it easy to drink more than one.  Prost!",
				"abv": "5",
				"ibu": "23",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 45,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"originalGravity": "1.047",
				"createDate": "2012-09-29 17:21:53",
				"updateDate": "2012-09-29 17:21:53",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 45,
					"categoryId": 4,
					"category": {
						"id": 4,
						"name": "German Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "German-Style Kölsch / Köln-Style Kölsch",
					"shortName": "Kölsch",
					"description": "Kölsch is warm fermented and aged at cold temperatures (German ale or alt-style beer). Kölsch is characterized by a golden to straw color and a slightly dry, subtly sweet softness on the palate, yet crisp. Good, dense head retention is desirable. Light pearapple-Riesling wine-like fruitiness may be apparent, but is not necessary for this style. Caramel character should not be evident. The body is light to medium-light. This beer has low hop flavor and aroma with medium bitterness. Wheat can be used in brewing this beer. Ale yeast is used for fermentation, though lager yeast is sometimes used in the bottle or final cold conditioning process. Fruity esters should be minimally perceived, if at all. Chill haze should be absent.",
					"ibuMin": "18",
					"ibuMax": "25",
					"abvMin": "4.8",
					"abvMax": "5.3",
					"srmMin": "4",
					"srmMax": "6",
					"ogMin": "1.042",
					"fgMin": "1.006",
					"fgMax": "1.01",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:29:04"
				}
			},
			{
				"id": "qRPqNw",
				"name": "Ryezing Sun Saison",
				"nameDisplay": "Ryezing Sun Saison",
				"description": "Saison means season, and the Ryezing Sun is our Belgian ale that is perfect for the summer.  Using Belgian malts and yeast, this beer has notes of light pepper and tropical fruit.  The slight spiciness imparted by the yeast is accentuated by the use of about 25% rye malt.  Finishes very crisp and dry, making it easy to have another!",
				"abv": "7.7",
				"ibu": "35",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 72,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"originalGravity": "1.062",
				"createDate": "2012-09-29 17:21:23",
				"updateDate": "2015-06-11 14:52:29",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 72,
					"categoryId": 5,
					"category": {
						"id": 5,
						"name": "Belgian And French Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "French & Belgian-Style Saison",
					"shortName": "Saison",
					"description": "Beers in this category are golden to deep amber in color. There may be quite a variety of characters within this style. Generally: They are light to medium in body. Malt aroma is low to medium-low. Esters are medium to high in  aroma, while, complex alcohols, herbs, spices, low Brettanomyces character and even clove and smoke-like phenolics may or may not be evident in the overall balanced beer. Hop aroma and flavor may be at low to medium levels. Malt flavor is low but provides foundation for the overall balance. Hop bitterness is moderate to moderately assertive. Herb and/or spice flavors, including black pepper-like notes, may or may not be evident. Fruitiness from fermentation is generally in character. A balanced small amount of sour or acidic flavors is acceptable when in balance with other components. Earthy, cellar-like, musty aromas are okay. Diacetyl should not be perceived. Chill or slight yeast haze is okay. Often bottle conditioned with some yeast character and high carbonation. French & Belgian-Style Saison may have Brettanomyces characters that are slightly acidity, fruity, horsey, goaty and/or leather-like.",
					"ibuMin": "20",
					"ibuMax": "40",
					"abvMin": "4.5",
					"abvMax": "8.5",
					"srmMin": "4",
					"srmMax": "14",
					"ogMin": "1.055",
					"fgMin": "1.004",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:34:55"
				}
			},
			{
				"id": "YLkhIY",
				"name": "Son of a Beech Rauchbier",
				"nameDisplay": "Son of a Beech Rauchbier",
				"description": "There is no bacon in this beer.  Repeat, there is no bacon in this beer.  Just the power of association.  This a traditional German Rauchbier, which uses 60% of the malt as beechwood-smoked barley.  Beechwood is commonly used for smoking pork, thus the association with bacon.  Light to medium body, fairly low hoppiness, and a great smoked aroma pair perfectly with meats and meat alternatives.  Prosit!",
				"abv": "5.9",
				"ibu": "26",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 54,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"originalGravity": "1.054",
				"createDate": "2012-09-29 17:26:06",
				"updateDate": "2012-09-29 17:26:06",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 54,
					"categoryId": 4,
					"category": {
						"id": 4,
						"name": "German Origin Ales",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "Bamberg-Style Weiss (Smoke) Rauchbier (Dunkel or Helles)",
					"shortName": "Rauchbier",
					"description": "Bamberg-style Weiss Rauchbier should have smoky characters that range from detectable to prevalent in the aroma and flavor. Smoke character is not harshly phenolic, but rather very smooth, almost rendering a perception of mild sweetness to this style of beer. The aroma and flavor of a Weissbier with yeast is decidedly fruity and phenolic. The phenolic characteristics are often described as clove- or nutmeg-like and can be smoky or even vanilla-like. Banana-like esters are often present. These beers are made with at least 50 percent malted wheat, and hop rates are quite low. Hop flavor and aroma are absent. Weissbier is well attenuated and very highly carbonated and a medium- to full-bodied beer. The color is very pale to very dark amber. Darker (dunkel) styles should have a detectable degree of roast malt in the balance without being robust in overall character. Because yeast is present, the beer will have yeast flavor and a characteristically fuller mouthfeel and may be appropriately very cloudy. No diacetyl should be perceived.",
					"ibuMin": "10",
					"ibuMax": "15",
					"abvMin": "4.9",
					"abvMax": "5.5",
					"srmMin": "4",
					"srmMax": "18",
					"ogMin": "1.047",
					"fgMin": "1.008",
					"fgMax": "1.016",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:30:29"
				}
			},
			{
				"id": "JiJ4zg",
				"name": "Stifler’s Cream Ale",
				"nameDisplay": "Stifler’s Cream Ale",
				"description": "True to style, the Wrecking Bar Cream Ale uses about 30% flaked corn and corn sugar (not HFCS!), resulting in a very clean and light taste.  The remainder of grains are a combination of 6-row and 2-row American barley and hop bitterness is just enough for balance.  Definitely a great, refreshing beer for the Atlanta summer heat!",
				"abv": "4.8",
				"ibu": "17",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 109,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"originalGravity": "1.043",
				"createDate": "2012-09-29 17:23:18",
				"updateDate": "2012-09-29 17:23:19",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 109,
					"categoryId": 11,
					"category": {
						"id": 11,
						"name": "Hybrid/mixed Beer",
						"createDate": "2012-03-21 20:06:46"
					},
					"name": "American-Style Cream Ale or Lager",
					"shortName": "Cream Ale",
					"description": "Mild, pale, light-bodied ale, made using a warm fermentation (top or bottom) and cold lagering. Hop bitterness and flavor range from very low to low. Hop aroma is often absent. Sometimes referred to as cream ales, these beers are crisp and refreshing. Pale malt character predominates. Caramelized malt character should be absent. A fruity or estery aroma may be perceived. Diacetyl and chill haze should not be perceived. Sulfur character and/or sweet corn-like dimethylsulfide (DMS) should be extremely low or absent from this style of beer.",
					"ibuMin": "10",
					"ibuMax": "22",
					"abvMin": "4.2",
					"abvMax": "5.6",
					"srmMin": "2",
					"srmMax": "5",
					"ogMin": "1.044",
					"fgMin": "1.004",
					"fgMax": "1.01",
					"createDate": "2012-03-21 20:06:46",
					"updateDate": "2015-04-07 15:42:30"
				}
			},
			{
				"id": "w21t97",
				"name": "The Victor IPA",
				"nameDisplay": "The Victor IPA",
				"description": "This one is for the hopheads. Classic west coast IPA brewed with six varieties of hops providing flavors of tangerine, mango and a hint of lemon citrus. Crystal and Munich malts provide balance for the perfect pint. Dryhopped in the serving tank with Centennial hops. To the victor go the spoils...get your spoils today.",
				"abv": "7.3",
				"ibu": "80",
				"glasswareId": 5,
				"availableId": 1,
				"styleId": 30,
				"isOrganic": "N",
				"status": "verified",
				"statusDisplay": "Verified",
				"originalGravity": "1.069",
				"createDate": "2012-09-29 17:25:19",
				"updateDate": "2015-04-23 18:24:33",
				"glass": {
					"id": 5,
					"name": "Pint",
					"createDate": "2012-01-03 02:41:33"
				},
				"available": {
					"id": 1,
					"name": "Year Round",
					"description": "Available year round as a staple beer."
				},
				"style": {
					"id": 30,
					"categoryId": 3,
					"category": {
						"id": 3,
						"name": "North American Origin Ales",
						"createDate": "2012-03-21 20:06:45"
					},
					"name": "American-Style India Pale Ale",
					"shortName": "American IPA",
					"description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
					"ibuMin": "50",
					"ibuMax": "70",
					"abvMin": "6.3",
					"abvMax": "7.5",
					"srmMin": "6",
					"srmMax": "14",
					"ogMin": "1.06",
					"fgMin": "1.012",
					"fgMax": "1.018",
					"createDate": "2012-03-21 20:06:45",
					"updateDate": "2015-04-07 15:26:37"
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

		var desc = '';
		if(beer.description){
			desc = beer.description;
		}else{
			desc = 'N/A';
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

createBeerList(eventideBeerData, 'Eventide', eventideBeers);
// console.log(eventideBeers);

createBeerList(fiveSeasonsBeerData, '5 Seasons', fiveSeasonsBeers);
// console.log(fiveSeasonsBeers);

createBeerList(maxLagersBeerData, 'Max Lager\'s Wood-Fired Grill', maxLagersBeers);
// console.log(maxLagersBeers);

createBeerList(mondayNightBeerData, 'Monday Night', mondayNightBeers);
// console.log(mondayNightBeers);

createBeerList(oDempseysBeerData, 'O\'Dempsey\'s', oDempseysBeers);
// console.log(oDempseysBeers);

createBeerList(orpheusBeerData, 'Orpheus', orpheusBeers);
// console.log(orpheusBeers);

createBeerList(parkTavernBeerData, 'Park Tavern', parkTavernBeers);
// console.log(parkTavernBeers);

createBeerList(pontoonBeerData, 'Pontoon', pontoonBeers);
// console.log(pontoonBeers);

createBeerList(redBrickBeerData, 'Red Brick', redBrickBeers);
// console.log(redBrickBeers);

createBeerList(secondSelfBeerData, 'Second Self', secondSelfBeers);
// console.log(secondSelfBeers);

createBeerList(sweetWaterBeerData, 'SweetWater', sweetWaterBeers);
// console.log(sweetWaterBeers);

createBeerList(wreckingBarBeerData, 'Wrecking Bar Brewpub', wreckingBarBeers);
// console.log(wreckingBarBeers);