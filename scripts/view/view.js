launchNetteTunes();
function launchNetteTunes() {
    app.innerHTML += netteTunes();
}

function launchInnernette() {
    app.innerHTML = innernette();
}

updateDesktop();
function updateDesktop() {
    drawShortcut('My Files', './media/image/icon_folder.png');
    drawShortcut('The Innernette', './media/image/icon.png', '0');
    drawShortcut('Nette Tunes', './media/image/icon.png', '1');
}

function drawShortcut(name, image, id) {
    let html = '';
    html = /*HTML*/ `
    <div ondblclick="fakeLoading(id)" id="shortcut${id}" class="shortcut" >
        <img src="${image}">
        <p>${name}</p>
    </div>
    `;
    desktop.innerHTML += html;
}
