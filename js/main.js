var app = (function () {

    var statusSelector = document.querySelectorAll('.col-4');

    for (var i = 0; i < statusSelector.length; i++) {
        statusSelector[i].addEventListener('click', function () {
            resetSelectors();
            this.classList.remove("notActive");
            this.classList.add("Active");
        })
    }

    function resetSelectors() {
        for (var i = 0; i < statusSelector.length; i++) {
            statusSelector[i].classList.add("notActive");
        }
    }
})();
