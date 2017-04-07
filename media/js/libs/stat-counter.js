// If doNotTrack is not enabled, it is ok to add StatCounter
// @see https://bugzilla.mozilla.org/show_bug.cgi?id=1217896 for more details
if (typeof window._dntEnabled === 'function' && !window._dntEnabled()) {
    var sc_project=11297457;
    var sc_invisible=1;
    var sc_security="d8541690";
    var scJsHost = (("https:" == document.location.protocol) ? "https://secure." : "http://www.");
    document.write("<script type='text/javascript' src='"+scJsHost+"statcounter.com/counter/counter.js'></script>");
}