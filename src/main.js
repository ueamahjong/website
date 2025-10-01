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

function handleHeaderScroll() {
	const header = $("header");
	const heroJoin = $("#heroJoin");

	if (window.scrollY > 0) {
		header.classList.add("scrolled");
	}
	else {
		header.classList.remove("scrolled");
	}

	if (window.scrollY > 32) {
		heroJoin.classList.remove("docked");
	}
	else {
		heroJoin.classList.add("docked");
	}
}

function init() {
	handleHeaderScroll();

	$$("a[href^=\"#\"]").forEach(anchor => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const href = this.getAttribute("href");
			if (!href) {
				return;
			}
			history.pushState(null, "", href);

			// Smooth scroll manually
			const target = document.querySelector(href);
			if (target) {
				target.scrollIntoView({
					behavior: "smooth"
				});
			}
		});
	});

	const tileInfoDialog = $("#tileInfoDialog");
	tileInfoDialog.addEventListener("click", (event) => {
		if (event.target === tileInfoDialog) {
			tileInfoDialog.close();
		}
	});

	function showTileInfoDialog(tileName, description) {
		tileInfoDialog.showModal();
		const tileNameElement = $("#tileName");
		const tileDescriptionElement = $("#tileDescription");
		tileNameElement.textContent = tileName;
		tileDescriptionElement.textContent = description;
	}

	const tileSixCharacters = $("#tileSixCharacters");
	tileSixCharacters.addEventListener("click", () => {
		showTileInfoDialog("Six of Characters", "The Six of Characters is a tile in the character suit of Mahjong. It is part of the numbered tiles and can be used to form sequences or sets.");
	});

	const tileEastWind = $("#tileEastWind");
	tileEastWind.addEventListener("click", () => {
		showTileInfoDialog("East Wind", "The East Wind is one of the four wind tiles in Mahjong. It represents the east direction and can be significant in certain hands, especially if it matches the prevailing wind.");
	});

	const tileEightBamboos = $("#tileEightBamboos");
	tileEightBamboos.addEventListener("click", () => {
		showTileInfoDialog("8 of Bamboos", "The 8 of Bamboos is a tile in the bamboo suit of Mahjong. It is part of the numbered tiles and can be used to form sequences or sets.");
	});

	const closeDialogButton = $("#closeDialog");
	closeDialogButton.addEventListener("click", () => {
		tileInfoDialog.close();
	});

	const tileFiveCoins = $("#tileFiveCoins");
	tileFiveCoins.addEventListener("click", () => {
		showTileInfoDialog("5 Of Coins", "The 5 of Coins is a special tile in Mahjong, often marked with a red dot. It is considered a 'dora' tile, which can increase the value of your hand if included.");
	});
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", init);
}
else {
	init();
}

window.addEventListener("scroll", handleHeaderScroll);
