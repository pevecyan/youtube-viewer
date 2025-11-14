const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('videoId');
if (videoId) {
    document.getElementById('videoIframe').src = `https://www.youtube.com/embed/${videoId}`;
}
let callbackUrl = urlParams.get('callbackUrl');
if (callbackUrl) {
    callbackUrl+=`?videoId=${videoId}&status=played`;
    
    const img = new Image();
    img.src = callbackUrl;
}