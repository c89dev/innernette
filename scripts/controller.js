function fakeLoading(id) {
    console.log('clicc');
    document.body.style.cursor = "url('./media/image/loading.png'), auto";
    setTimeout(() => iconClickHandler(id), 500);
}

function iconClickHandler(id) {
    document.body.style.cursor = "url('./media/image/mouse.png'), auto";
    console.log('icon clicked with id', id);
    if (id == 'shortcut0' && !model.apps[0].isRunning) {
        console.log('Launching The Innernette');
        app.innerHTML += innernette();
        model.apps[0].isRunning = true;
    } else if (id == 'shortcut1' && !model.apps[0].isRunning) {
        console.log('Launching Nette Tunes');
        app.innerHTML += netteTunes();
        model.apps[1].isRunning = true;
    }
}

function pantsOptController(index) {
    console.log(index);
    let opt = viewState.store.pantsOpt;
    let sizes = ['L', 'XL', '2XL', '3XL', '4XL'];
    if (!sizes.includes(index)) {
        if (opt[index].visible == false) {
            opt[index].visible = true;
        } else if (opt.visible == true) {
            opt[index].visible = false;
        } else if (index == 0 && opt[1].visible == true) {
            opt[1].visible = false;
        } else if (index == 3 && opt[3].visible == true) {
            opt[3].visible = false;
        } else if (index == 4 && opt[4].visible == true) {
            opt[4].visible = false;
        } else if (index == 2 && opt[2].selected == false) {
            opt[2].selected = true;
        } else if (index == 2 && opt[2].selected == true) {
            opt[2].selected = false;
        }
    } else if (sizes.includes(index)) {
        opt[5].size = index;
    }
    document.querySelector('.item-container').innerHTML = drawPants();
}

// Order form and state
function reviewOrder() {
    currentState = viewState.store.pantsOpt;
    saveOrder(currentState);
    window.location.href = 'orderform.html';
}
function goToStoreHome() {
    window.location.href = 'index.html';
}
function saveOrder(state) {
    console.log('saving... ', state);
    sessionStorage.setItem('orderState', JSON.stringify(state));
}
function loadOrder() {
    const state = JSON.parse(sessionStorage.getItem('orderState'));
    return state;
}
