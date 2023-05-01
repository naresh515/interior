$(document).ready(function () {

    var items = $(".card-details");
    var numItems = items.length;
    var perPage = 6;

    items.slice(perPage).hide();

    $('.pagination').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "",
        nextText: "&#8250",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });
})