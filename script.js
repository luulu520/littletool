(() => {
    const clear_icon1 = document.getElementById("clear-search1");
	const clear_icon2 = document.getElementById("clear-search2");
    const clear_icon3 = document.getElementById("clear-search3");

    const l = document.getElementById("length");
	const w = document.getElementById("width");
    const h = document.getElementById("height");


    const showClearIcon1 = event => {
        let search_value = event.target.value;
        if (search_value.length > 0) {
            clear_icon1.style.display = "flex";

        }else{
            clear_icon1.style.display = "none";
        }
    };
	const showClearIcon2 = event => {
        let search_value = event.target.value;
        if (search_value.length > 0) {
			clear_icon2.style.display = "flex";
        }else{
			clear_icon2.style.display = "none";
        }
    };
	const showClearIcon3 = event => {
        let search_value = event.target.value;
        if (search_value.length > 0) {
            clear_icon3.style.display = "flex";

        }else{
            clear_icon3.style.display = "none";
        }
    };
    const hideClearIcon1 = () => {
        clear_icon1.style.display = "none";
        l.value = '';
        // add callback()
        console.log("input cleared");
    };
	    const hideClearIcon2 = () => {
        clear_icon2.style.display = "none";
        w.value = '';
        // add callback()
        console.log("input cleared");
    };
	    const hideClearIcon3 = () => {
        clear_icon3.style.display = "none";
        h.value = '';
        // add callback()
        console.log("input cleared");
    };

    l.addEventListener("input", showClearIcon1);
	w.addEventListener("input", showClearIcon2);
    h.addEventListener("input", showClearIcon3);

    clear_icon1.addEventListener("click", hideClearIcon1);
	clear_icon2.addEventListener("click", hideClearIcon2);
    clear_icon3.addEventListener("click", hideClearIcon3);

})();

function transform() {
    const l = document.getElementById("length");
	const w = document.getElementById("width");
    const h = document.getElementById("height");
    let new_text = "";
	new_text = (l.value * w.value * h.value) + '英吋';
	let cm = (l.value * w.value * h.value * 2.54).toFixed(2);
    new_text += '<br>' + cm + '公分';
	let m = (cm/100).toFixed(2);
	new_text += '<br>' + m + '公尺';
	new_text += '<br>' + (m/(11.8 * 2.13 * 2.72)).toFixed(2) + '箱';
    document.getElementById("result").innerHTML = new_text;
}