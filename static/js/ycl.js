(function(e) {
    e.fn.hhShare = function(t) {
        var n = {
                cenBox: "asid_share_box",
                icon: "adid_icon",
                addClass: "red_bag",
                titleClass: "asid_title",
                triangle: "asid_share_triangle",
                showBox: "asid_sha_layer"
            },
            r = e.extend(n, t);
        this.each(function() {
            var t = e(this),
                n = e("." + r.cenBox).last();
            n.hide(), e("." + r.triangle + "," + "." + r.showBox).hide(), e("." + r.cenBox).on({
                mouseenter: function() {
                    var t = e(this).find("." + r.icon);
                    e(this).find("." + r.triangle + "," + "." + r.showBox).show()
                },
                mouseleave: function() {
                    var t = e(this).find("." + r.icon);
                    e(this).find("." + r.triangle + "," + "." + r.showBox).hide()
                }
            }), e(window).scroll(function() {
                e(window).scrollTop() > 100 ? n.fadeIn() : n.fadeOut()
            }), n.click(function() {
                return e("body,html").animate({
                    scrollTop: 0
                }, 500), !1
            })
        })
    }
})(jQuery)