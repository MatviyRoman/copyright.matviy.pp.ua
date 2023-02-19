if (
	$('.copyright-partner .link').attr('href') != 'https://programist.top' ||
	$('.copyright-partner .link').attr('href') != 'https://apartner.pro' ||
	$('.copyright-partner .link').is(':hidden') ||
	$('.copyright-partner .link').css('opacity') == 0 ||
	$('.copyright-partner').is(':hidden') ||
	$('.copyright-partner').css('opacity') == 0
) {
	$('.copyright-partner').remove();

	$('body').append(`
    <section class="copyright-partner">
        <div class="copyright-partner_container">
            <a
            href="https://APARTNER.PRO"
            class="link"
            title="Development of sites on Laravel, PrestaShop, Wordpress and their support" target="_blank"
            rel="dofollow">
                <h2>
                    APARTNER.PRO
                    <strong class="description">Development of sites on Laravel, PrestaShop, Wordpress and their
                        support</strong>
                </h2>
            </a>
            |
            <a
            href="https://programist.top"
            class="link"
            title="Розробка сайтів на Laravel, PrestaShop, Wordpress та їх підтримка" target="_blank"
            rel="dofollow">
                <h2>
                    PROGRAMIST.TOP
                    <strong class="description">Розробка сайтів на Laravel, PrestaShop, Wordpress та їх
                        підтримка</strong>
                </h2>
            </a>
        </div>
    </section>
    `);
}
