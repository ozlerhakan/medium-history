

window.onload = function () {
    const timer = setInterval(() => {
        const navis = document.getElementById("scroller-items");
        if (navis) {
            clearTimeout(timer);
            const firstChild = navis.children[2];
            const parentNode = firstChild.parentNode;

            const newDiv = document.createElement('div')
            newDiv.innerHTML = firstChild.innerHTML
            newDiv.className = "ly ns mm nu y";
            newDiv.querySelector('a').href = "/me/readinghistory";
            newDiv.querySelector('button').textContent = "Reading history";

            parentNode.insertBefore(newDiv, firstChild);
        } else {
            console.log("cannot find the element whose id is `scroller-items`, querying again in 150ms.");
        }
    }, 150);
}