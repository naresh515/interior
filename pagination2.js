$(document).ready(function () {
    const $tabContents = $('.tab-content');
    const $tab = $('.button-group .tab-btn');
    updateThePagination()

    $tab.click(function () {
        const tab_id = $(this).attr('data-tab');

        $tab.removeClass('tab-btn-active');
        $tabContents.removeClass('current');
        $(this).addClass('tab-btn-active');
        $("#" + tab_id).addClass('current');
        updateThePagination()
    })

    function updateThePagination() {
        if (window.location.hash) {
            window.location.hash = ""
        }
        var items = $(".current .pagination-item-details");
        var numItems = items.length;
        var perPage = 8;
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
    }

    // var items = $(".current .pagination-item-details");
    // var numItems = items.length;
    // var perPage = 8;

    // items.slice(perPage).hide();


    // $('.pagination').pagination({
    //     items: numItems,
    //     itemsOnPage: perPage,
    //     prevText: "",
    //     nextText: "&#8250",
    //     onPageClick: function (pageNumber) {
    //         var showFrom = perPage * (pageNumber - 1);
    //         var showTo = showFrom + perPage;
    //         items.hide().slice(showFrom, showTo).show();
    //     }
    // });
})