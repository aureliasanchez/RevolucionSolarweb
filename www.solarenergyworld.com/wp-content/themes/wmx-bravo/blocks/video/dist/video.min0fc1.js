document.addEventListener("DOMContentLoaded",(function(e){function t(){return{block:null,init:function(e){this.block=e,this.handlers()},handlers:function(){var e=this,t=function(){e.open()},o=this.block.querySelector(".video-wrapper"),n=this.block.querySelector(".backdrop");o.addEventListener("click",(function(){t()})),n.addEventListener("click",(function(){t()}))},open:function(){var e=this,t=this.block.querySelector(".video"),o=this.block.classList.contains("expanded"),n=.15*window.innerWidth,i=.15*window.innerHeight;if(o)document.body.style.overflow="auto",t.style.transform="translate(0, 0)",e.unload();else{var l=t.getBoundingClientRect();window.matchMedia("(min-width: 992px)").matches?t.style.transform="translate(".concat(n-l.left,"px, ").concat(i-l.top,"px)"):t.style.transform="translateY(".concat(i-l.top,"px)"),e.load(),document.body.style.overflow="hidden"}this.block.classList.toggle("expanded")},load:function(){var e=this,t=this.block.querySelector(".video"),o=t.dataset.src,n=t.dataset.type;if("youtube"==n){var i=o.split("v=").pop();t.innerHTML='<button class="close">Close &times;</button><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/'.concat(i,'?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'),this.youtube(t)}else if("vimeo"==n){var l=o.split("/").pop();t.innerHTML='<button class="close">Close &times;</button><iframe src="https://player.vimeo.com/video/'.concat(l,'?autoplay=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>')}else"self"==n&&(t.innerHTML='<button class="close">Close &times;</button><video aria-label="Media Player" preload="auto" controls autoplay><source type="video/mp4" src="'.concat(o,'"/></video>'));t.querySelector(".close").addEventListener("click",(function(){e.unload()}))},unload:function(){this.block.querySelector(".video").innerHTML=""},youtube:function(e){var t=e.querySelector("iframe");-1===t.src.indexOf("rel=0")&&(t.src+=(-1===t.src.indexOf("?")?"?":"&")+"rel=0"),window.YT.ready((function(){new YT.Player(t,{events:{onStateChange:function(e){e.data==YT.PlayerState.ENDED&&(e.target.seekTo(0),e.target.stopVideo())}}})}))},log:function(){console.log("test")}}}document.querySelectorAll(".block--video").forEach((function(e){t().init(e)}))}));