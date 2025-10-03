<script type="text/javascript" src="js/jquery-3.7.1.min.js"></script>
<script type="text/javascript" src="js/jquery.magnific-popup.min.js"></script>
    <script>
$(function() {
		// プラグインの設定
		$(".box a").magnificPopup({
            type: "image",
            gallery: {
            enabled: true,
         },
    });
        $(".watching a").magnificPopup({
            type: "iframe",
        　　 gallery: {
            enabled: true,
        },
    });
});
        
</script>
<script type="text/javascript" src="js/slick.min.js"></script>
<script>
$(function() {
$(".mv-image").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
});
});
</script>
<script type="text/javascript" src="js/jquery.inview.min.js"></script>
    <script>
$(function() {
	  $('.show').on('inview', function() {	// 「show」というクラス名が付いている要素が表示領域に入ったとき
		    $(this).addClass('fade-in');			// 「fade-in」というクラス名を付けます
	  });
});
</script>
    // JavaScript Document