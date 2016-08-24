/*====================================
		JSON For Definitions
====================================*/
var definitions = [{
        term: "Beer",
        defined: "Name given alcohol-containing beverages produced by fermenting grain, specifically malt, and flavored with hops.",
        example: "Old-Style (Official Beer of the Chicago Cubs)"
    }, {
        term: "Style",
        defined: "What's a beer style? Simply put, a beer style is a label given to a beer that describes its overall character and often times its origin. Most beers are commonly fall into one of two categories: Ale or Lager",
        example: "American Adjunct Lager (Budweiser)"
    }, {
        term: "Ale",
        defined: "This category of beer uses yeast that ferments at the \"top\" of the fermentation vessel, and typically at higher temperatures than lager yeast (60°-75°F), which, as a result, makes for a quicker fermentation period (7-8 days, or even less). Ale yeast are known to produce by-products called esters, which are \"flowery\" and \"fruity\" aromas ranging, but not limited to apple, pear, pineapple, grass, hay, plum, and prune.",
        example: "Young's Double Chocolate Stout"
    }, {
        term: "Lager",
        defined: "The word lager comes from the German word lagern which means, \"to store\". A perfect description as lagers are brewed with bottom fermenting yeast that work slowly at around 34 degrees F, and are often further stored at cool temperature to mature. Lager yeast produce fewer by-product characters than ale yeast which allows for other flavors to pull through, such as hops.",
        example: "Heineken"
    }, {
        term: "Barley",
        defined: "A cereal grain that is malted for use in the grist that becomes the mash in the brewing of beer.",
        example: "Grape Nuts Cereal"
    }, {
        term: "Malt",
        defined: "The process by which barley is steeped in water, germinated ,then kilned to convert insoluble starch to soluble substances and sugar. The foundation ingredient of beer.",
        example: "Malt Extract (used to make ice cream)"
    }, {
        term: "Mash",
        defined: "(Verb) To release malt sugars by soaking the grains in water. (Noun) The resultant mixture.",
        example: "Sweet Wort (see Wort)"
    }, {
        term: "Hops",
        defined: "Herb added to boiling wort or fermenting beer to impart a bitter aroma and flavor.",
        example: "Mosaic Hops"
    }, {
        term: "ABV",
        defined: "(Alcohol by Volume) Amount of alcohol in beer in terms of percentage volume of alcohol per volume of beer.",
        example: "Miller Light-ABV 4.17%"
    }, {
        term: "IBU",
        defined: "International Bitterness units. A system of indicating the hop bitterness in finished beer. Example of a lower IBU beer would be \"Light Lager\", whereas higher IBU beer would be \"Stout\"",
        example: "60 Minute IPA-IBU: 60"
    }, {
        term: "Gravity",
        defined: "Commonly refered as\"Specific Gravity\",a measure of the density of a liquid or solid compared to that of water",
        example: "N/A"
    }, {
        term: "Wort",
        defined: "The solution of grain sugars strained from the mash. At this stage, regarded as \"sweet wort\", later as brewed wort, fermenting wort and finally beer.",
        example: "Unfermented Beer"
    }];
    /*====================================
    		JSON For Beer Styles
    ====================================*/

var ales = [{ 
    style: "Stout",
    description: "As mysterious as they look, stouts are typically dark brown to pitch black in color. A common profile amongst Stouts, but not in all cases, is the use of roasted barley (unmalted barley that is kilned to the point of being charred) which lends a dry character to the beer as well as a huge roasted flavor that can range from burnt to coffee to chocolate. A different balance of hops is up to the brewers preference, but the roasted character must be there.",
    example: "Guiness"
}, {
    style: "Oatmeal Stout",
    description: "These are generally medium to full bodied stouts that have an unreal smoothness to them from the addition of oats to the mash. The oats not only add a lot of smoothness to the mouth feel but give a touch of sweetness that is unlike any other type of stout. Both levels of roasted flavor and hop character will vary.",
    example: "Samuel Smith's Oatmeal Stout"
}, {
    style: "Porter",
    description: "Porter is said to have been popular with transportation workers of Central London, hence the name. Most traditional British brewing documentation from the 1700s state that Porter was a blend of three different styles: an old ale (stale or soured), a new ale (brown or pale ale) and a weak one (mild ale), with various combinations of blending and staleness. The end result was also commonly known as \"Entire Butt\" or \"Three Threads\" and had a pleasing taste of neither new nor old. It was the first truly engineered beer, catering to the public's taste, playing a critical role in quenching the thirst of the UKs Industrial Revolution and lending an arm in building the mega-breweries of today.Porter saw a comeback during the homebrewing and micro-brewery revolution of the late 1970s and early 80s, in the US. Modern-day Porters are typically brewed using a pale malt base with the addition of black malt, crystal, chocolate or smoked brown malt. The addition of roasted malt is uncommon, but used occasionally. Some brewers will also age their beers after inoculation with live bacteria to create an authentic taste. Hop bitterness is moderate on the whole and color ranges from brown to black. Overall they remain very complex and interesting beers.",
    example: "Kocu Boni"
}, {
    style: "IPA (India Pale Ale)",
    description: "First brewed in England and exported for the British troops in India during the late 1700s. To withstand the voyage, IPA's were basically tweaked Pale Ales that were, in comparison, much more malty, boasted a higher alcohol content and were well-hopped, as hops are a natural preservative. Historians believe that an IPA was then watered down for the troops, while officers and the elite would savor the beer at full strength. The English IPA has a lower alcohol due to taxation over the decades. The leaner the brew the less amount of malt there is and less need for a strong hop presence which would easily put the brew out of balance. Some brewers have tried to recreate the origianl IPA with strengths close to 8-9% abv.",
    example: "Harpoon IPA"
}, {
    style: "APA (American Pale Ale)",
    description: "Of British origin, this style is now popular worldwide and the use of local ingredients, or imported, produces variances in character from region to region. Generally, expect a good balance of malt and hops. Fruity esters and diacetyl can vary from none to moderate, and bitterness can range from lightly floral to pungent.",
    example: "Sweetwater 420"
}, {
    style: "Brown Ale",
    description: "Spawned from the Mild Ale, Brown Ales tend to be maltier and sweeter on the palate, with a fuller body. Color can range from reddish brown to dark brown. Some versions will lean towards fruity esters, while others tend to be drier with nutty characters. All seem to have a low hop aroma and bitterness.",
    example: "Newcastle Brown Ale"
}, {
    style: "Blonde Ale",
    description: "More or less a creation from the craft-brewery movement, and also reminiscent of the German style Kölsch. Pale straw to deep gold for color. Usually an all malt brew, well attenuated with a lightly malty palate. Most have a subdued fruitiness. Hop character is of the noble variety, or similar, leaving a light to medium bitterness. A balanced beer, light bodied and sometimes lager like.",
    example: "Somersault"
}, {
    style: "ESB (Extra Special/Strong Bitter",
    description: "ESBs are essentially more aggressive and more balanced Bitters, both in alcohol and hop character, but nothing overpowering. Color range will be similar, though leaning towards the darker end of the scale; dark golds to copper. Low carbonation. Malts tend to be more pronounced, often toasty and fruity, with maybe some notes diacetyl. And despite \"bitter\" being in its name, ESBs are not really all that bitter. They key to an ESB is balance.",
    example: "Redhook ESB"
}, {
    style: "Altbier",
    description: "A Düsseldorf specialty, an Altbier is a German style brown ale, the alt literally translates to \"old\" in German, and traditionally Altbiers are conditioned for a longer than normal periods of time. Other sources note that \"alt\" is derived from the Latin word \"altus,\" which means \"high\" and refers to the rising yeast. Take your pick, but the extended conditioning mellows out the ale's fruitiness and produces an exceptionally smooth and delicate brew. The color ranges from amber to dark brown, medium in carbonation with a great balance between malt and hops.",
    example: "Doppel Sticky"
}, {
    style: "Hefeweiszen",
    description: "A south German style of wheat beer (weissbier) made with a typical ratio of 50:50, or even higher, wheat. A yeast that produces a unique phenolic flavors of banana and cloves with an often dry and tart edge, some spiciness, bubblegum or notes of apples. Little hop bitterness, and a moderate level of alcohol. The \"Hefe\" prefix means \"with yeast\", hence the beers unfiltered and cloudy appearance. Poured into a traditional Weizen glass, the Hefeweizen can be one sexy looking beer.",
    example: "Weihenstephaner Hefeweissbier"
}, {
    style: "Saison",
    description: "Saisons are sturdy farmhouse ale that was traditionally brewed in the winter, to be consumed throughout the summer months. Not so long ago it was close to being an endangered style, but over recent years there's been a massive revival; especially in the US. This is a very complex style; many are very fruity in the aroma and flavor. Look for earthy yeast tones, mild to moderate tartness. Lots of spice and with a medium bitterness. They tend to be semi-dry with many only having touch of sweetness",
    example: "Stone Saison"
}, {
    style: "Witbier",
    description: "A Belgian Style ale that's very pale and cloudy in appearance due to it being unfiltered and the high level of wheat, and sometimes oats, that's used in the mash. Always spiced, generally with coriander, orange peel and other oddball spices or herbs in the back ground. The crispness and slight twang comes from the wheat and the lively level of carbonation. This is one style that many brewers in the US have taken a liking to and have done a very good job of staying to style. Sometimes served with a lemon, but if you truly want to enjoy the untainted subtleties of this style you'll ask for yours without one. Often referred to as \"white beers\" (witbieren) due to the cloudiness / yeast in suspension.",
    example: "Blue Moon Belgian White"
}];

var lagers = [{
    style: "Light Lager",
    description: "The Light Lager is generally a lighter version of a breweries premium lager, some are lower in alcohol but all are lower in calories and carbohydrates compared to other beers. Typically a high amount of cereal adjuncts like rice or corn are used to help lighten the beer as much as possible. Very low in malt flavor with a light and dry body. The hop character is low and should only balance with no signs of flavor or aroma. European versions are about half the alcohol (2.5-3.5% abv) as their regular beer yet show more flavor (some use 100% malt) then the American counterparts. For the most part this style has the least amount of flavor than any other style of beer.",
    example: "Bud Light"
}, {
    style: "American Adjunct Lager",
    description: "The Light Lager is generally a lighter version of a breweries premium lager, some are lower in alcohol but all are lower in calories and carbohydrates compared to other beers. Typically a high amount of cereal adjuncts like rice or corn are used to help lighten the beer as much as possible. Very low in malt flavor with a light and dry body. The hop character is low and should only balance with no signs of flavor or aroma. European versions are about half the alcohol (2.5-3.5% abv) as their regular beer yet show more flavor (some use 100% malt) then the American counterparts. For the most part this style has the least amount of flavor than any other style of beer.",
    example: "Corona Extra"
}, {
    style: "American Pale Lager",
    description: "Sometimes referred to as \"all-malt,\" this category of beer refers to lagers brewed without cereal adjuncts (mainly rice or corn). Though often still yellow and fizzy, these beers will display a broader depth of malt flavor and a more complex bitterness vs. their adjunct counterparts.",
    example: "Longboard Island Lager"
}, {
    style: "American Amber",
    description: "A sort of catch-all category, these lagers boast a bit more malt backbone and overall character than their lighter sister styles. Bitterness is generally low.",
    example: "Yuengling Traditional Lager"
}, {
    style: "Pilsner",
    description: "The Czech Pilsner, or sometimes known as the Bohemian Pilsner, is light straw to golden color and crystal clear. Hops are very prevalent usually with a spicy bitterness and or a spicy floral flavor and aroma, notably one of the defining characteristics of the Saaz hop. Smooth and crisp with a clean malty palate, many are grassy. Some of the originals will show some archaic yeast characteristics similar to very mild buttery or fusel (rose like alcohol) flavors and aromas.",
    example: "Pilsner Urquell"
}, {
    style: "Bock",
    description: "It is a bottom fermenting lager that generally takes extra months of lagering (cold storage) to smooth out such a strong brew. Bock beer in general is stronger than your typical lager, more of a robust malt character with a dark amber to brown hue. Hop bitterness can be assertive enough to balance though must not get in the way of the malt flavor, most are only lightly hopped.",
    example: "Michelob AmberBock"
}, {
    style: "Doppelbock",
    description: "Bocks--you know, those beers with goats on the label--are relatively strong German lagers. Doppelbocks--as the name might suggest--are typically even stronger and contain enough malty goodness that theyve been considered a meal in a glass for centuries. Generally they have a very full-bodied flavor and are darker than their little Bock brothers and sisters and a higher level of alcohol too. They range in color from dark amber to nearly black, and dark versions often have slight chocolate or roasted characters.",
    example: "Spaten Optimator"
}, {
    style: "Märzen",
    description: "Before refrigeration, it was nearly impossible to brew beer in the summer due to the hot weather and bacterial infections. Brewing ended with the coming of spring, and began again in the fall. Most were brewed in March (Märzen). These brews were kept in cold storage over the spring and summer months, or brewed at a higher gravity, so theyd keep. Märzenbier is full-bodied, rich, toasty, typically dark copper in color with a medium to high alcohol content. The common Munich Oktoberfest beer served at Wies'n (the location at which Munich celebrates its Oktoberfest) contains roughly 5.0-6.0% alcohol by volume, is dark/copper in color, has a mild hop profile and is typically labeled as a Bavarian Märzenbier in style.",
    example: "Samuel Adams Octoberfest"
}, {
    style: "Maibock",
    description: "The Maibock style of beer tends to be lighter in color than other Bock beers and often has a significant hop character with a noticeable alcohol around the same as a traditional Bock. Maibocks are customarily served in the spring and are oftentimes interrelated with spring festivals and celebrations more often in the month of May.",
    example: "Andygator"
}, {
    style: "Dunkel",
    description: "An old friend of Bavaria, Munich Dunkels are smooth, rich and complex, but without being heady or heavy. They boast brilliant ruby hues from the large amounts of Munich malts used, and these malts also lend a fuller-bodied beer. The decoction brewing process also lends much depth and richness. Bitterness is often moderate, with just enough to balance out any sweetness. Hop varieties used tend to be of the German noble varieties, like: Tetnang and Hallertau.",
    example: "Warsteiner Premium Dunkel"
}, {
    style: "Vienna Lager",
    description: "Named after the city in which it orginated, a traditional Vienna lager is brewed using a three step decoction boiling process. Munich, Pilsner, Vienna toasted and dextrin malts are used, as well wheat in some cases. Subtle hops, crisp, with residual sweetness. Although German in origin and rare these days, some classic examples come from Mexico, such as: Dos Equis and Negra Modelo. A result of late 19th century immigrant brewers from Austria.",
    example: "Victoria"
}, {
    style: "Japanese Rice Lager",
    description: "Similar to Macro / Adjunct Lagers, wherein the beer's grist bill is cut by using large portions of rice, but not enough to be classified as Happoshu. Pale yellow in color, soft hop nose, and expect a rounded, firm malty character, moderate bitterness, and a trademark dry finish.",
    example: "Sapporo"
}];
