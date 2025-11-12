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
        opt.size = index;
    }

    updateView();
}
