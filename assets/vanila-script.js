(function() {
    var partner = document.querySelector('.copyright-partner');
    var link = partner ? partner.querySelector('.link') : null;

    function isHidden(el) {
        if (!el) return true;
        var style = window.getComputedStyle(el);
        return style.display === 'none' || style.visibility === 'hidden' || parseFloat(style.opacity) === 0;
    }

    var invalid =
        !link ||
        (
            link.getAttribute('href') !== 'https://programist.top' &&
            link.getAttribute('href') !== 'https://apartner.pro'
        ) ||
        isHidden(link) ||
        isHidden(partner);

    if (invalid) {
        if (partner) partner.remove();

        document.body.insertAdjacentHTML('beforeend', `
            <section class="copyright-partner">
                <div class="copyright-partner_container">
                    <a
                        href="https://APARTNER.PRO"
                        class="link"
                        title="Development of sites on Laravel, PrestaShop, Wordpress and their support"
                        target="_blank"
                        rel="dofollow">
                        <h2>
                            APARTNER.PRO
                            <strong class="description">Development of sites on Laravel, PrestaShop, Wordpress and their support</strong>
                        </h2>
                    </a>
                    |
                    <a
                        href="https://programist.top"
                        class="link"
                        title="Розробка сайтів на Laravel, PrestaShop, Wordpress та їх підтримка"
                        target="_blank"
                        rel="dofollow">
                        <h2>
                            PROGRAMIST.TOP
                            <strong class="description">Розробка сайтів на Laravel, PrestaShop, Wordpress та їх підтримка</strong>
                        </h2>
                    </a>
                </div>
            </section>
        `);
    }
})();
