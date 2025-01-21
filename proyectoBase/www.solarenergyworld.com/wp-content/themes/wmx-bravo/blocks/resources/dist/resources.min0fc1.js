document.addEventListener("DOMContentLoaded",(function(e){var t;function a(){return{block:null,loaded:!0,page:1,limit:0,types:"",init:function(e){var t=this;this.block=e,this.limit=this.block.dataset.limit,this.types=this.block.dataset.types;var a=new URL(window.location);new URLSearchParams(a.search).forEach((function(e,a){"resource-type"!=a&&"category"!=a&&"post_tag"!=a&&"keyword"!=a||e.split(",").forEach((function(e){if(e){var r,i="";(i="resource-type"==a||"category"==a||"post_tag"==a?null===(r=t.block.querySelector('[data-filter-type="'+a+'"][data-filter-value="'+e+'"]'))||void 0===r?void 0:r.innerText:e)&&""!=i&&t.filtered(a,e,i)}}))})),this.block.querySelectorAll(".filter .dropdown").forEach((function(e){t.dropdowns(e)}));var r=this.block.querySelector("#keyword");this.keyword(r),this.submit(),this.reset(),this.more(),this.load()},params:function(e,t){var a=new URL(window.location),r=a.searchParams.get(e)?a.searchParams.get(e).split(","):[];r.includes(t)||(r.push(t),a.searchParams.set(e,r.join(",")),a.search=decodeURIComponent(a.search),window.history.replaceState({},"",a))},dropdowns:function(e){var t=this,a=e.querySelector(".dropdown-toggle");e.querySelectorAll(".dropdown-item").forEach((function(e){e.addEventListener("click",(function(e){var a=e.target.dataset.filterType,r=e.target.dataset.filterValue,i=e.target.innerText;t.filtered(a,r,i)})),e.addEventListener("keydown",(function(e){if("Enter"===e.key){var r=e.target.dataset.filterType,i=e.target.dataset.filterValue,n=e.target.innerText;t.filtered(r,i,n),a.focus(),a.setAttribute("aria-expanded","false")}}))}))},keyword:function(e){var t=this;null==e||e.addEventListener("keydown",(function(a){if("Enter"===a.key){var r=e.value,i=e.value;""!==e.value&&(e.value="",t.loaded=!1,t.page=1,t.filtered("keyword",r,i))}}))},filtered:function(e,t,a){var r=this,i=this.block.querySelector(".filtered");if(!i.querySelector('[data-filter-type="'+e+'"][data-filter-value="'+t+'"]')){var n=document.createElement("button");n.classList.add("btn","btn-primary","btn-filter"),n.setAttribute("data-filter-type",e),n.setAttribute("data-filter-value",t),n.innerText=a,n.addEventListener("click",(function(e){var t=new URL(window.location),a=t.searchParams.get(e.target.dataset.filterType);if(a){var i=a.split(",");i=i.filter((function(t){return t!==e.target.dataset.filterValue})),""!=(i=i.join(","))?t.searchParams.set(e.target.dataset.filterType,i):t.searchParams.delete(e.target.dataset.filterType),window.history.replaceState(null,"",t)}e.target.remove(),r.loaded=!1,r.page=1,r.load()})),i.prepend(n),this.loaded=!1,this.page=1,this.params(e,t),this.load()}},submit:function(){var e=this,t=this.block.querySelector(".filter-submit"),a=this.block.querySelector("#keyword");null==t||t.addEventListener("click",(function(t){t.preventDefault();var r=a.value,i=a.value;""!==a.value&&(a.value="",e.loaded=!1,e.page=1,e.filtered("keyword",r,i))}))},reset:function(){var e=this;this.block.addEventListener("click",(function(t){if(t.target.classList.contains("filter-reset")){var a=new URL(window.location);a.search="",window.history.replaceState({},"",a),e.block.querySelector(".filtered").innerHTML="",e.loaded=!1,e.page=1,e.load()}}))},more:function(){var e=this;this.block.addEventListener("click",(function(t){t.target.classList.contains("load-more")&&(e.loaded=!0,e.page=this.page+1,e.load())}))},pagination:function(e){var t=this,a=(e=JSON.parse(e)).totalPages,r=e.currentPage,i=this.block.querySelector(".pagination");if(i.innerHTML="",i.classList.remove("d-none"),a>1){var n=function(e,t){var a=document.createElement("a");a.classList.add("page-link"),a.setAttribute("href",window.location.href.split("?")[0]+"page/"+e),a.setAttribute("data-page",e),a.innerText=e,e===t&&a.classList.add("active"),i.appendChild(a)};if(r>1){var l=document.createElement("a");l.classList.add("page-link","page-arrow","page-prev"),l.setAttribute("href",window.location.href.split("?")[0]+"page/"+(r-1)),l.setAttribute("data-page",r-1),l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="42" height="33" viewBox="0 0 42 33" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6569 23.0711L10.2929 16.7072C9.90237 16.3166 9.90237 15.6835 10.2929 15.2929L16.6569 8.92898C17.0474 8.53846 17.6805 8.53846 18.0711 8.92898C18.4616 9.31951 18.4616 9.95267 18.0711 10.3432L13.4142 15L41 15.0001C41.5523 15.0001 42 15.4478 42 16.0001C42 16.5523 41.5523 17.0001 41 17.0001L13.4142 17L18.0711 21.6569C18.4616 22.0474 18.4616 22.6806 18.0711 23.0711C17.6805 23.4616 17.0474 23.4616 16.6569 23.0711Z" fill="currentColor"></path></svg>',i.appendChild(l)}var o=r-2,s=r+2;if(o<1&&(s=4+(o=1)),s>a&&(o=(s=a)-4)<1&&(o=1),a<=4)for(var c=1;c<=a;c++)n(c,r);else{o>2?(n(1,r),n("...",r)):2===o&&n(1,r);for(var d=o;d<=s;d++)n(d,r);s<a-1?(n("...",r),n(a,r)):s===a-1&&n(a,r)}if(r!=a){var u=document.createElement("a");u.classList.add("page-link","page-arrow","page-next"),u.setAttribute("href",window.location.href.split("?")[0]+"page/"+(r+1)),u.setAttribute("data-page",r+1),u.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="42" height="33" viewBox="0 0 42 33" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.3431 9.92888L31.7071 16.2928C32.0976 16.6834 32.0976 17.3165 31.7071 17.7071L25.3431 24.071C24.9526 24.4615 24.3195 24.4615 23.9289 24.071C23.5384 23.6805 23.5384 23.0473 23.9289 22.6568L28.5858 17.9999H1C0.447715 17.9999 0 17.5522 0 16.9999C0 16.4477 0.447715 15.9999 1 15.9999H28.5858L23.9289 11.3431C23.5384 10.9526 23.5384 10.3194 23.9289 9.92888C24.3195 9.53836 24.9526 9.53836 25.3431 9.92888Z" fill="currentColor"></path></svg>',i.appendChild(u)}this.block.querySelectorAll(".page-link").forEach((function(e){"..."!=e.dataset.page?e.addEventListener("click",(function(e){e.preventDefault(),t.block.querySelector(".resources-target").innerHTML="",t.loaded=!0,t.page=e.currentTarget.dataset.page,t.load(),t.block.scrollIntoView()})):e.classList.add("disabled")}))}},pageItem:function(e,t){var a=document.createElement("a");return a.classList.add("page-link"),a.setAttribute("href","#"),a.setAttribute("data-page",e),a.innerText=e,e===t&&a.classList.add("active"),a},load:function(){var e=this,t=this.block.querySelector(".spinner"),a=this.block.querySelector(".resources-target");this.block.querySelector(".pagination").innerHTML="",this.loaded||(a.innerHTML="");var r,i,n=[],l=this.block.querySelectorAll(".btn-filter");0!=l.length?null===(r=this.block.querySelector(".filter-reset"))||void 0===r||r.classList.remove("d-none"):null===(i=this.block.querySelector(".filter-reset"))||void 0===i||i.classList.add("d-none"),l.forEach((function(e){var t={type:e.dataset.filterType,value:e.dataset.filterValue};n.push(t)})),t.style.display="block";var o=new FormData;o.append("filters",JSON.stringify(n)),o.append("action","resources_get"),o.append("nonce",wmx_block_resources_ajax.nonce),o.append("page",this.page),o.append("url",window.location.href.split("?")[0]),o.append("limit",this.limit),o.append("types",this.types),fetch(wmx_block_resources_ajax.ajax_url,{method:"POST",credentials:"same-origin",body:o}).then((function(t){if(t.ok)return t;e.log("Error getting resources")})).then((function(t){return 0==e.limit&&e.pagination(t.headers.get("pagination")),t.text()})).then((function(r){a.innerHTML=r,e.listeners(),t.style.display="none"}))},listeners:function(){this.block.querySelectorAll(".card").forEach((function(e){var t=e.querySelector("a");t&&(e.classList.add("linked"),e.addEventListener("click",(function(e){if(0===e.button)if(e.ctrlKey||e.metaKey){var a=document.createElement("a");a.setAttribute("aria-hidden","true"),a.href=t.href,a.target="_blank",a.click()}else t.click()})),e.addEventListener("auxclick",(function(e){if(1===e.button){e.preventDefault();var a=document.createElement("a");a.setAttribute("aria-hidden","true"),a.href=t.href,a.target="_blank",a.click()}})))}))},log:function(e){console.log(e)}}}document.querySelectorAll(".block--resources").forEach((function(e){a().init(e)}));var r=new Set;"undefined"!=typeof wp&&null!==(t=wp)&&void 0!==t&&null!==(t=t.data)&&void 0!==t&&t.subscribe&&wp.data.subscribe((function(){document.querySelectorAll(".block--resources").forEach((function(e){r.has(e)||(a().init(e),r.add(e))}))}))}));