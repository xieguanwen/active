// JavaScript Document
(function(a, b, c, d, e, f) {
	a[d] = a[d] || [];
	var g = a[e] = a[e] || {};
	a.tagmangerGlobalObject = e,
	g[f] = {
		dlName: d
	};
	var h = b.getElementsByTagName(c)[0],
	i = b.createElement(c);
	i.async = !0,
	i.src = ('https:' == document.location.protocol ? 'https://ssl': 'http://cdn') + '.tagmanager.cn/boot/' + f + '.js',
	h.parentNode.insertBefore(i, h)
})(window, document, 'script', 'TGDataLayer', 'tagmanager', 10175);

var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://": " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F3d9cd45d760da4b8bb6d930b475e8cb0' type='text/javascript'%3E%3C/script%3E"));

(function(i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] ||
	function() { (i[r].q = i[r].q || []).push(arguments)
	},
	i[r].l = 1 * new Date();
	a = s.createElement(o),
	m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-46390821-1', 'auto', {
	'name': 'richTracker'
});
ga('richTracker.require', 'displayfeatures');
ga('richTracker.require', 'linkid', 'linkid.js');

ga('richTracker.send', 'pageview', window.location.pathname + window.location.search + window.location.hash);