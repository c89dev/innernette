let isDragging = false;
let offsetX, offsetY;

const titleBar = document.getElementById('title');
titleBar.addEventListener('mousedown', startDrag);

function startDrag() {
    isDragging = true;
    const win = document.getElementById('app');
    win.addEventListener('mousedown', (e) => {
        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;
    });
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            win.style.left = e.clientX - offsetX + 'px';
            win.style.top = e.clientY - offsetY + 'px';
        }
    });
    document.addEventListener('mouseup', () => (isDragging = false));
}

function saveOrder(state) {
    console.log('saving... ', state);
    sessionStorage.setItem('orderState', JSON.stringify(state));
}
function loadOrder() {
    const state = JSON.parse(sessionStorage.getItem('orderState'));
    return state;
}

function reviewOrder() {
    currentState = viewState.store.pantsOpt;
    saveOrder(currentState);
    window.location.href = 'orderform.html';
}

function goToStoreHome() {
    window.location.href = 'index.html';
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

    updateView();
}
