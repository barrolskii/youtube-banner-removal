function waitForElementToLoad(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

// ======================================================================
//                             Main
// ======================================================================

const adSlot = null;

console.log("YouTube Banner Removal loaded");

/* Wait for the elements we need to load into the page before we do anything */
waitForElementToLoad("ytd-ad-slot-renderer").then((elm) => {
    console.log("Removing ad slot");
    elm.remove();
});

waitForElementToLoad("ytd-statement-banner-renderer").then((elm) => {
    console.log("Removing banner");
    elm.remove();
});
