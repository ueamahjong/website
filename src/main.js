/**
 * @param {string} selector - The CSS selector to query for
 * @returns {Element} The selected element
 */
export const $ = (selector) => {
	const element = document.querySelector(selector);
	if (!element) {
		throw new Error(`Element not found for selector: ${selector}`);
	}
	return element;
}

/**
 * @param {string} selector - The CSS selector to query for
 * @returns {NodeList} A NodeList of the selected elements
 */
export const $$ = (selector) => {
	return document.querySelectorAll(selector);
}

const tileInfoDialog = $("#tileInfoDialog");

function showTileInfoDialog(tileName, description) {
	tileInfoDialog.showModal();
	const tileNameElement = $("#tileName");
	const tileDescriptionElement = $("#tileDescription");
	tileNameElement.textContent = tileName;
	tileDescriptionElement.textContent = description;
}

const tileFiveCoin = $("#tileFiveCoin");
tileFiveCoin.addEventListener("click", () => {
	showTileInfoDialog(
		"5 Of Coins",
		"The 5 of Coins is a special tile in Mahjong, often marked with a red dot. It is considered a 'dora' tile, which can increase the value of your hand if included."
	);
});

const tileRedDragon = $("#tileRedDragon");
tileRedDragon.addEventListener("click", () => {
	showTileInfoDialog("Red Dragon", "The Red Dragon is one of the three dragon tiles in Mahjong. It is often associated with good fortune and is a valuable tile to complete certain hands.");
});

const tileEastWind = $("#tileEastWind");
tileEastWind.addEventListener("click", () => {
	showTileInfoDialog("East Wind", "The East Wind is one of the four wind tiles in Mahjong. It represents the east direction and can be significant in certain hands, especially if it matches the prevailing wind.");
});

const tileEightBamboo = $("#tileEightBamboo");
tileEightBamboo.addEventListener("click", () => {
	showTileInfoDialog("8 of Bamboo", "The 8 of Bamboo is a tile in the bamboo suit of Mahjong. It is part of the numbered tiles and can be used to form sequences or sets.");
});

const closeDialogButton = $("#closeDialog");
closeDialogButton.addEventListener("click", () => {
	tileInfoDialog.close();
});
