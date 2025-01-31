
    var gform;
    gform ||
      (document.addEventListener("gform_main_scripts_loaded", function() {
          gform.scriptsLoaded = !0;
        }),
        document.addEventListener("gform/theme/scripts_loaded", function() {
          gform.themeScriptsLoaded = !0;
        }),
        window.addEventListener("DOMContentLoaded", function() {
          gform.domLoaded = !0;
        }),
        (gform = {
          domLoaded: !1,
          scriptsLoaded: !1,
          themeScriptsLoaded: !1,
          isFormEditor: () => "function" == typeof InitializeEditor,
          callIfLoaded: function(o) {
            return !(
              !gform.domLoaded ||
              !gform.scriptsLoaded ||
              (!gform.themeScriptsLoaded && !gform.isFormEditor()) ||
              (gform.isFormEditor() &&
                console.warn(
                  "The use of gform.initializeOnLoaded() is deprecated in the form editor context and will be removed in Gravity Forms 3.1."
                ),
                o(),
                0)
            );
          },
          initializeOnLoaded: function(o) {
            gform.callIfLoaded(o) ||
              (document.addEventListener("gform_main_scripts_loaded", () => {
                  (gform.scriptsLoaded = !0), gform.callIfLoaded(o);
                }),
                document.addEventListener("gform/theme/scripts_loaded", () => {
                  (gform.themeScriptsLoaded = !0), gform.callIfLoaded(o);
                }),
                window.addEventListener("DOMContentLoaded", () => {
                  (gform.domLoaded = !0), gform.callIfLoaded(o);
                }));
          },
          hooks: {
            action: {},
            filter: {}
          },
          addAction: function(o, r, e, t) {
            gform.addHook("action", o, r, e, t);
          },
          addFilter: function(o, r, e, t) {
            gform.addHook("filter", o, r, e, t);
          },
          doAction: function(o) {
            gform.doHook("action", o, arguments);
          },
          applyFilters: function(o) {
            return gform.doHook("filter", o, arguments);
          },
          removeAction: function(o, r) {
            gform.removeHook("action", o, r);
          },
          removeFilter: function(o, r, e) {
            gform.removeHook("filter", o, r, e);
          },
          addHook: function(o, r, e, t, n) {
            null == gform.hooks[o][r] && (gform.hooks[o][r] = []);
            var d = gform.hooks[o][r];
            null == n && (n = r + "_" + d.length),
              gform.hooks[o][r].push({
                tag: n,
                callable: e,
                priority: (t = null == t ? 10 : t),
              });
          },
          doHook: function(r, o, e) {
            var t;
            if (
              ((e = Array.prototype.slice.call(e, 1)),
                null != gform.hooks[r][o] &&
                ((o = gform.hooks[r][o]).sort(function(o, r) {
                    return o.priority - r.priority;
                  }),
                  o.forEach(function(o) {
                    "function" != typeof(t = o.callable) && (t = window[t]),
                    "action" == r
                      ?
                      t.apply(null, e) :
                      (e[0] = t.apply(null, e));
                  })),
                "filter" == r)
            )
              return e[0];
          },
          removeHook: function(o, r, t, n) {
            var e;
            null != gform.hooks[o][r] &&
              ((e = (e = gform.hooks[o][r]).filter(function(o, r, e) {
                  return !!(
                    (null != n && n != o.tag) ||
                    (null != t && t != o.priority)
                  );
                })),
                (gform.hooks[o][r] = e));
          },
        }));
    /* ]]> */
 
  var _vwo_clicks = 10;

    /* Fix: wp-rocket (application/ld+json) */
    window._vwo_code ||
      (function() {
        var account_id = 761399, // replace 1 with ${accountId} in release string
          version = 2.1,
          settings_tolerance = 2000,
          library_tolerance = 2500,
          use_existing_jquery = false,
          hide_element = "body",
          hide_element_style =
          "opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;transition:none !important;",
          /* DO NOT EDIT BELOW THIS LINE */
          f = false,
          w = window,
          d = document,
          v = d.querySelector("#vwoCode"),
          cK = "_vwo_" + account_id + "_settings",
          cc = {};
        try {
          var c = JSON.parse(
            localStorage.getItem("_vwo_" + account_id + "_config")
          );
          cc = c && typeof c === "object" ? c : {};
        } catch (e) {}
        var stT = cc.stT === "session" ? w.sessionStorage : w.localStorage;
        code = {
          use_existing_jquery: function() {
            return typeof use_existing_jquery !== "undefined" ?
              use_existing_jquery :
              undefined;
          },
          library_tolerance: function() {
            return typeof library_tolerance !== "undefined" ?
              library_tolerance :
              undefined;
          },
          settings_tolerance: function() {
            return cc.sT || settings_tolerance;
          },
          hide_element_style: function() {
            return "{" + (cc.hES || hide_element_style) + "}";
          },
          hide_element: function() {
            if (performance.getEntriesByName("first-contentful-paint")[0]) {
              return "";
            }
            return typeof cc.hE === "string" ? cc.hE : hide_element;
          },
          getVersion: function() {
            return version;
          },
          finish: function(e) {
            if (!f) {
              f = true;
              var t = d.getElementById("_vis_opt_path_hides");
              if (t) t.parentNode.removeChild(t);
              if (e)
                new Image().src =
                "./assets/img/dev.visualwebsiteoptimizer.com/ee5ba7.gif?a=" +
                account_id +
                e;
            }
          },
          finished: function() {
            return f;
          },
          addScript: function(e) {
            var t = d.createElement("script");
            t.type = "text/javascript";
            if (e.src) {
              t.src = e.src;
            } else {
              t.text = e.text;
            }
            d.getElementsByTagName("head")[0].appendChild(t);
          },
          load: function(e, t) {
            var i = this.getSettings(),
              n = d.createElement("script"),
              r = this;
            t = t || {};
            if (i) {
              n.textContent = i;
              d.getElementsByTagName("head")[0].appendChild(n);
              if (!w.VWO || VWO.caE) {
                stT.removeItem(cK);
                r.load(e);
              }
            } else {
              var o = new XMLHttpRequest();
              o.open("GET.html", e, true);
              o.withCredentials = !t.dSC;
              o.responseType = t.responseType || "text";
              o.onload = function() {
                if (t.onloadCb) {
                  return t.onloadCb(o, e);
                }
                if (o.status === 200 || o.status === 304) {
                  _vwo_code.addScript({
                    text: o.responseText
                  });
                } else {
                  _vwo_code.finish("&e=loading_failure:" + e);
                }
              };
              o.onerror = function() {
                if (t.onerrorCb) {
                  return t.onerrorCb(e);
                }
                _vwo_code.finish("&e=loading_failure:" + e);
              };
              o.send();
            }
          },
          getSettings: function() {
            try {
              var e = stT.getItem(cK);
              if (!e) {
                return;
              }
              e = JSON.parse(e);
              if (Date.now() > e.e) {
                stT.removeItem(cK);
                return;
              }
              return e.s;
            } catch (e) {
              return;
            }
          },
          init: function() {
            if (d.URL.indexOf("__vwo_disable__") > -1) return;
            var e = this.settings_tolerance();
            w._vwo_settings_timer = setTimeout(function() {
              _vwo_code.finish();
              stT.removeItem(cK);
            }, e);
            var t;
            if (this.hide_element() !== "body") {
              t = d.createElement("style");
              var i = this.hide_element(),
                n = i ? i + this.hide_element_style() : "",
                r = d.getElementsByTagName("head")[0];
              t.setAttribute("id", "_vis_opt_path_hides");
              v && t.setAttribute("nonce", v.nonce);
              t.setAttribute("type", "text/css");
              if (t.styleSheet) t.styleSheet.cssText = n;
              else t.appendChild(d.createTextNode(n));
              r.appendChild(t);
            } else {
              t = d.getElementsByTagName("head")[0];
              var n = d.createElement("div");
              n.style.cssText =
                "z-index: 2147483647 !important;position: fixed !important;left: 0 !important;top: 0 !important;width: 100% !important;height: 100% !important;background: white !important;";
              n.setAttribute("id", "_vis_opt_path_hides");
              n.classList.add("_vis_hide_layer");
              t.parentNode.insertBefore(n, t.nextSibling);
            }
            var o =
              "https://dev.visualwebsiteoptimizer.com/j.php?a=" +
              account_id +
              "&u=" +
              encodeURIComponent(d.URL) +
              "&vn=" +
              version;
            if (w.location.search.indexOf("_vwo_xhr") !== -1) {
              this.addScript({
                src: o
              });
            } else {
              this.load(o + "&x=true");
            }
          },
        };
        w._vwo_code = code;
        code.init();
      })();
  
  {
    "@context"; "https://schema.org",
    "@graph"; [{
        "@type": "WebPage",
        "@id": "https://www.solarenergyworld.com/",
        "url": "https://www.solarenergyworld.com/",
        "name": "Leading Residential Solar Provider | Solar Energy World",
        "isPartOf": {
          "@id": "https://www.solarenergyworld.com/#website"
        },
        "primaryImageOfPage": {
          "@id": "https://www.solarenergyworld.com/#primaryimage"
        },
        "image": {
          "@id": "https://www.solarenergyworld.com/#primaryimage"
        },
        "thumbnailUrl": "https://www.solarenergyworld.com/wp-content/uploads/2024/05/d2ec129470064d9df1f61fef8a80dcef-1024x576.webp",
        "datePublished": "2024-04-15T18:42:35+00:00",
        "dateModified": "2024-10-28T13:13:22+00:00",
        "description": "Since 2009, Solar Energy World has led in solar solutions across MD and beyond, helping thousands save on energy costs.",
        "breadcrumb": {
          "@id": "https://www.solarenergyworld.com/#breadcrumb"
        },
        "inLanguage": "en-US",
        "potentialAction": [{
          "@type": "ReadAction",
          "target": ["https://www.solarenergyworld.com/"]
        }]
      },
      {
        "@type": "ImageObject",
        "inLanguage": "en-US",
        "@id": "https://www.solarenergyworld.com/#primaryimage",
        "url": "https://www.solarenergyworld.com/wp-content/uploads/2024/05/d2ec129470064d9df1f61fef8a80dcef.webp",
        "contentUrl": "https://www.solarenergyworld.com/wp-content/uploads/2024/05/d2ec129470064d9df1f61fef8a80dcef.webp",
        "width": 2048,
        "height": 1152
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.solarenergyworld.com/#breadcrumb",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home"
        }]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.solarenergyworld.com/#website",
        "url": "https://www.solarenergyworld.com/",
        "name": "Solar Energy World",
        "description": "",
        "potentialAction": [{
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.solarenergyworld.com/?s={search_term_string}"
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            "valueRequired": true,
            "valueName": "search_term_string"
          }
        }],
        "inLanguage": "en-US"
      }
    ]
  }
    var _hsq = _hsq || [];
    _hsq.push(["setContentType", "standard-page"]);
  
  // Block presence of other buttons
  window.__Marker = {};

    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js"
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "./pages/www.googletagmanager.com/gtm5445.html?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-KQKGBXP");
  
  /* <![CDATA[ */
  var wmxModals = {
    siteUrl: "https:\/\/www.solarenergyworld.com",
    postType: "page",
  };
  /* ]]> */

    /* <![CDATA[ */
    var gf_global = {
      gf_currency_config: {
        name: "U.S. Dollar",
        symbol_left: "$",
        symbol_right: "",
        symbol_padding: "",
        thousand_separator: ",",
        decimal_separator: ".",
        decimals: 2,
        code: "USD",
      },
      base_url: "https:\/\/www.solarenergyworld.com\/wp-content\/plugins\/gravityforms",
      number_formats: [],
      spinnerUrl: "https:\/\/www.solarenergyworld.com\/wp-content\/plugins\/gravityforms\/images\/spinner.svg",
      version_hash: "6e1b6a8a07394e81ed5c99d62a6e87d5",
      strings: {
        newRowAdded: "New row added.",
        rowRemoved: "Row removed",
        formSaved: "The form has been saved.  The content contains the link to return and complete the form.",
      },
    };
    var gform_i18n = {
      datepicker: {
        days: {
          monday: "Mo",
          tuesday: "Tu",
          wednesday: "We",
          thursday: "Th",
          friday: "Fr",
          saturday: "Sa",
          sunday: "Su",
        },
        months: {
          january: "January",
          february: "February",
          march: "March",
          april: "April",
          may: "May",
          june: "June",
          july: "July",
          august: "August",
          september: "September",
          october: "October",
          november: "November",
          december: "December",
        },
        firstDay: 1,
        iconText: "Select date",
      },
    };
    var gf_legacy_multi = {
      3: ""
    };
    var gform_gravityforms = {
      strings: {
        invalid_file_extension: "This type of file is not allowed. Must be one of the following:",
        delete_file: "Delete this file",
        in_progress: "in progress",
        file_exceeds_limit: "File exceeds size limit",
        illegal_extension: "This type of file is not allowed.",
        max_reached: "Maximum number of files reached",
        unknown_error: "There was a problem while saving the file on the server",
        currently_uploading: "Please wait for the uploading to complete",
        cancel: "Cancel",
        cancel_upload: "Cancel this upload",
        cancelled: "Cancelled",
      },
      vars: {
        images_url: "https:\/\/www.solarenergyworld.com\/wp-content\/plugins\/gravityforms\/images",
      },
    };
    /* ]]> */
  
  /* <![CDATA[ */

  /* ]]> */

    /* <![CDATA[ */
    gform.initializeOnLoaded(function() {
      gformInitSpinner(
        3,
        "wp-content/plugins/gravityforms/images/spinner.svg",
        true
      );
      jQuery("#gform_ajax_frame_3").on(
        "load",
        function() {
          var contents = jQuery(this)
            .contents()
            .find("*")
            .html();
          var is_postback =
            contents.indexOf("GF_AJAX_POSTBACK") >= 0;
          if (!is_postback) {
            return;
          }
          var form_content = jQuery(this)
            .contents()
            .find("#gform_wrapper_3");
          var is_confirmation =
            jQuery(this)
            .contents()
            .find("#gform_confirmation_wrapper_3")
            .length > 0;
          var is_redirect =
            contents.indexOf("gformRedirect(){") >= 0;
          var is_form =
            form_content.length > 0 &&
            !is_redirect &&
            !is_confirmation;
          var mt =
            parseInt(
              jQuery("html").css("margin-top"),
              10
            ) +
            parseInt(
              jQuery("body").css("margin-top"),
              10
            ) +
            100;
          if (is_form) {
            jQuery("#gform_wrapper_3").html(
              form_content.html()
            );
            if (
              form_content.hasClass(
                "gform_validation_error"
              )
            ) {
              jQuery("#gform_wrapper_3").addClass(
                "gform_validation_error"
              );
            } else {
              jQuery("#gform_wrapper_3").removeClass(
                "gform_validation_error"
              );
            }
            setTimeout(function() {
              /* delay the scroll by 50 milliseconds to fix a bug in chrome */
              jQuery(
                document
              ).scrollTop(
                jQuery("#gform_wrapper_3").offset()
                .top - mt
              );
            }, 50);
            if (window["gformInitDatepicker"]) {
              gformInitDatepicker();
            }
            if (window["gformInitPriceFields"]) {
              gformInitPriceFields();
            }
            var current_page = jQuery(
              "#gform_source_page_number_3"
            ).val();
            gformInitSpinner(
              3,
              "wp-content/plugins/gravityforms/images/spinner.svg",
              true
            );
            jQuery(document).trigger(
              "gform_page_loaded",
              [3, current_page]
            );
            window["gf_submitting_3"] = false;
          } else if (!is_redirect) {
            var confirmation_content = jQuery(this)
              .contents()
              .find(".GF_AJAX_POSTBACK")
              .html();
            if (!confirmation_content) {
              confirmation_content = contents;
            }
            jQuery("#gform_wrapper_3").replaceWith(
              confirmation_content
            );
            jQuery(document).scrollTop(
              jQuery("#gf_3").offset().top - mt
            );
            jQuery(document).trigger(
              "gform_confirmation_loaded",
              [3]
            );
            window["gf_submitting_3"] = false;
            wp.a11y.speak(
              jQuery(
                "#gform_confirmation_message_3"
              ).text()
            );
          } else {
            jQuery("#gform_3").append(contents);
            if (window["gformRedirect"]) {
              gformRedirect();
            }
          }
          jQuery(document).trigger(
            "gform_pre_post_render",
            [{
              formId: "3",
              currentPage: "current_page",
              abort: function() {
                this.preventDefault();
              },
            }, ]
          );
          if (event && event.defaultPrevented) {
            return;
          }
          const gformWrapperDiv =
            document.getElementById("gform_wrapper_3");
          if (gformWrapperDiv) {
            const visibilitySpan =
              document.createElement("span");
            visibilitySpan.id =
              "gform_visibility_test_3";
            gformWrapperDiv.insertAdjacentElement(
              "afterend",
              visibilitySpan
            );
          }
          const visibilityTestDiv =
            document.getElementById(
              "gform_visibility_test_3"
            );
          let postRenderFired = false;

          function triggerPostRender() {
            if (postRenderFired) {
              return;
            }
            postRenderFired = true;
            jQuery(document).trigger(
              "gform_post_render",
              [3, current_page]
            );
            gform.utils.trigger({
              event: "gform/postRender",
              native: false,
              data: {
                formId: 3,
                currentPage: current_page,
              },
            });
            gform.utils.trigger({
              event: "gform/post_render",
              native: false,
              data: {
                formId: 3,
                currentPage: current_page,
              },
            });
            if (visibilityTestDiv) {
              visibilityTestDiv.parentNode.removeChild(
                visibilityTestDiv
              );
            }
          }

          function debounce(func, wait, immediate) {
            var timeout;
            return function() {
              var context = this,
                args = arguments;
              var later = function() {
                timeout = null;
                if (!immediate)
                  func.apply(context, args);
              };
              var callNow = immediate && !timeout;
              clearTimeout(timeout);
              timeout = setTimeout(later, wait);
              if (callNow) func.apply(context, args);
            };
          }
          const debouncedTriggerPostRender = debounce(
            function() {
              triggerPostRender();
            },
            200
          );
          if (
            visibilityTestDiv &&
            visibilityTestDiv.offsetParent === null
          ) {
            const observer = new MutationObserver(
              (mutations) => {
                mutations.forEach((mutation) => {
                  if (
                    mutation.type === "attributes" &&
                    visibilityTestDiv.offsetParent !==
                    null
                  ) {
                    debouncedTriggerPostRender();
                    observer.disconnect();
                  }
                });
              }
            );
            observer.observe(document.body, {
              attributes: true,
              childList: false,
              subtree: true,
              attributeFilter: ["style", "class"],
            });
          } else {
            triggerPostRender();
          }
        }
      );
    });
    /* ]]&gt; */
  
  /* <![CDATA[ */
  var formhq_localized = {
    platform_id: "www.solarenergyworld.com",
    site_id: "1",
    postmessage_target_origins: ["https:\/\/www.solarenergyworld.com"],
  };
  /* ]]> */

      /* <![CDATA[ */
      window._FormHQueue = {};
      /* ]]> */
    
    /* <![CDATA[ */
    var leadin_wordpress = {
      userRole: "visitor",
      pageType: "home",
      leadinPluginVersion: "11.1.75",
    };
    /* ]]> */
  
  /* <![CDATA[ */
  var app_localized = {
    themepath: "https:\/\/www.solarenergyworld.com\/wp-content\/themes\/wmx-prime",
    ajaxurl: "https:\/\/www.solarenergyworld.com\/wp-admin\/admin-ajax.php",
    check: "16b845e8d2",
    namespace: "wmx",
  };
  /* ]]> */

      /* <![CDATA[ */
      wp.i18n.setLocaleData({
        "text direction\u0004ltr": ["ltr"]
      });
      /* ]]> */
    
    /* <![CDATA[ */
    var gform_theme_config = {
      common: {
        form: {
          honeypot: {
            version_hash: "6e1b6a8a07394e81ed5c99d62a6e87d5"
          },
          ajax: {
            ajaxurl: "https:\/\/www.solarenergyworld.com\/wp-admin\/admin-ajax.php",
            ajax_submission_nonce: "695f1c2ce1",
            i18n: {
              step_announcement: "Step %1$s of %2$s, %3$s",
              unknown_error: "There was an unknown error processing your request. Please try again.",
            },
          },
          product_meta: {
            3: null
          },
          pagination: {
            3: ""
          },
        },
      },
      hmr_dev: "",
      public_path: "https:\/\/www.solarenergyworld.com\/wp-content\/plugins\/gravityforms\/assets\/js\/dist\/",
      config_nonce: "ed52e34a75",
    };
    /* ]]> */
  
  /* <![CDATA[ */
  var gf_legacy = {
    is_legacy: ""
  };
  /* ]]> */

      /* <![CDATA[ */
      var wmx_block_wizard_ajax = {
        ajax_url: "https:\/\/www.solarenergyworld.com\/wp-admin\/admin-ajax.php",
        nonce: "16a4c339c9",
      };
      var wmx_block_wizard_ajax = {
        ajax_url: "https:\/\/www.solarenergyworld.com\/wp-admin\/admin-ajax.php",
        nonce: "16a4c339c9",
      };
      /* ]]> */
    
    jQuery(document).ready(function($) {
      jQuery(document).on(
        "gform_post_render",
        function(event, form_id, current_page) {
          $("#gform_wrapper_" + form_id).addClass("gform-loaded");
          checkSkipValue();
        }
      );

      $(document).on("click", "#skipButton", function() {
        // Set the hidden field value to 'skip'
        $('[data-gfield-key="skip_value"]').val("skip");
        $(".meeting-scheduler .datepicker").val("");
        $(".meeting-scheduler .time-select select").val("");
        $(".meeting-scheduler .meeting_timestamp").val("");
        $('.meeting-scheduler [data-gfield-key="status_reason"]').val("1");

        $(".meeting-scheduler .gform_next_button").click();

        checkSkipValue();
      });

      // Custom function to check if a date should be disabled
      function isDateDisabled(date) {
        var disabledDays = [
          "01\/01\/2025",
          "01\/20\/2025",
          "02\/17\/2025",
          "05\/26\/2025",
          "07\/04\/2025",
          "09\/01\/2025",
          "10\/13\/2025",
          "11\/11\/2025",
          "11\/27\/2025",
          "12\/25\/2025",
          "01\/01\/2026",
          "01\/19\/2026",
          "02\/16\/2026",
          "05\/25\/2026",
          "07\/04\/2026",
          "09\/07\/2026",
          "10\/12\/2026",
          "11\/11\/2026",
          "11\/26\/2026",
          "12\/25\/2026",
          "07\/03\/2026",
          "01\/01\/2027",
          "01\/18\/2027",
          "02\/15\/2027",
          "05\/31\/2027",
          "07\/04\/2027",
          "09\/06\/2027",
          "10\/11\/2027",
          "11\/11\/2027",
          "11\/25\/2027",
          "12\/25\/2027",
          "07\/05\/2027",
          "12\/24\/2027",
          "01\/01\/2028",
          "01\/17\/2028",
          "02\/21\/2028",
          "05\/29\/2028",
          "07\/04\/2028",
          "09\/04\/2028",
          "10\/09\/2028",
          "11\/11\/2028",
          "11\/23\/2028",
          "12\/25\/2028",
          "12\/31\/2027",
          "11\/10\/2028",
        ];
        var checkdate = $.datepicker.formatDate("mm/dd/yy", date);
        var day = date.getDay();

        // Check if the date is in the disabledDays array or is a Sunday
        return disabledDays.indexOf(checkdate) !== -1 || day === 0;
      }

      if (typeof gform !== "undefined") {
        // Modify datepicker options for all Gravity Forms datepickers
        gform.addFilter(
          "gform_datepicker_options_pre_init",
          function(optionsObj, formId, fieldId) {
            optionsObj.minDate = 1; // Start from tomorrow
            optionsObj.maxDate = 14; // Allow booking up to 11 days in advance

            // Store the original beforeShowDay function if it exists
            var originalBeforeShowDay = optionsObj.beforeShowDay;

            // Override the beforeShowDay function
            optionsObj.beforeShowDay = function(date) {
              // First, check our custom disabled dates
              if (isDateDisabled(date)) {
                return [false, ""];
              }

              // If not disabled by our custom logic, use the original function if it exists
              return originalBeforeShowDay ?
                originalBeforeShowDay(date) : [true, ""];
            };

            return optionsObj;
          }
        );
      }

      //get the value of time and date and generate a timestamp
      $(document).on(
        "change",
        ".meeting-scheduler .time-select select",
        function() {
          var selectedTime = $(this).val();
          var selectedDate = $(".meeting-scheduler .datepicker").val();

          //Take Date and Time and formulate a timestamp that looks like this 2020-10-20T13:00:00.0
          if ($('[data-gfield-key="skip_value"]').val() !== "skip") {
            if (selectedTime != "" && selectedDate != "") {
              selectedTime = selectedTime + ":00:00.00+05:00";

              var dateParts = selectedDate.split("./index.php");
              selectedDate =
                dateParts[2] + "-" + dateParts[0] + "-" + dateParts[1];

              var timestamp = selectedDate + "T" + selectedTime;
              // console.log(timestamp);

              var timestampValue = $(
                ".meeting-scheduler .meeting_timestamp"
              ).val(timestamp);

              //if timestamp has a value then add the value '948170013' to the hidden field 'status_reason'

              if (timestamp) {
                $('.meeting-scheduler [data-gfield-key="status_reason"]').val(
                  "948170013"
                );
              } else {
                $('.meeting-scheduler [data-gfield-key="status_reason"]').val(
                  "1"
                );
              }
            } else {
              timestampValue = $(".meeting-scheduler .meeting_timestamp").val(
                ""
              );
              $('.meeting-scheduler [data-gfield-key="status_reason"]').val(
                "1"
              );
            }
          }

          //Enable the next button only if timestamp has a value that is not null otherwise disable the next button
          setTimeout(function() {
            var timestampValue = $(
              ".meeting-scheduler .meeting_timestamp"
            ).val();
            var selectedDate = $(".meeting-scheduler .datepicker").val();

            var selectedTime = $(
              ".meeting-scheduler .time-select select"
            ).val();

            if (
              timestampValue != "" &&
              selectedDate != "" &&
              selectedTime != ""
            ) {
              $(".meeting-scheduler .gform_next_button").prop(
                "disabled",
                false
              );
              $(".meeting-scheduler .gform_next_button").css(
                "visibility",
                "visible"
              );
            } else {
              $(".meeting-scheduler .gform_next_button").prop(
                "disabled",
                true
              );
              $(".meeting-scheduler .gform_next_button").css(
                "visibility",
                "hidden"
              );
            }
          }, 100);
        }
      );

      function checkSkipValue() {
        // hot fix for bug in wizard (forcing to show the continue button only if a time is selected)
        if (
          $(".meeting-scheduler .time-select select").val() ==
          "Please select a time"
        ) {
          $('[data-gfield-key="skip_value"]').val("");
        }

        //Disable the next button on page load if skip button is not clicked
        if ($('[data-gfield-key="skip_value"]').val() !== "skip") {
          $(".meeting-scheduler .gform_next_button").prop("disabled", true);
          // $('.meeting-scheduler .gform_next_button').css('visibility', 'hidden');
        } else {
          $(".meeting-scheduler .gform_next_button").prop("disabled", false);
          // $('.meeting-scheduler .gform_next_button').css('visibility', 'visible');
        }
      }

      checkSkipValue();

      var lastSelectedDate = null;

      // Update selectable times based on the selected date
      $(document).on("change", ".meeting-scheduler .datepicker", function() {
        var selectedDate = new Date($(this).val());

        var dayOfWeek = selectedDate.getDay(); // 0 (Sunday) - 6 (Saturday)

        // Only update the dropdown options if the selected date has changed
        if (lastSelectedDate !== dayOfWeek) {
          lastSelectedDate = dayOfWeek;

          var dropdownOptions = [];
          if (dayOfWeek == 1 || dayOfWeek == 3) {
            // Monday, Wednesday
            dropdownOptions = [{
                text: "1:00pm",
                value: "13",
              },
              {
                text: "2:00pm",
                value: "14",
              },
              {
                text: "3:00pm",
                value: "15",
              },
              {
                text: "4:00pm",
                value: "16",
              },
              {
                text: "5:00pm",
                value: "17",
              },
              {
                text: "6:00pm",
                value: "18",
              },
            ];
          } else if (dayOfWeek == 2 || dayOfWeek == 4 || dayOfWeek == 5) {
            // Tuesday, Thursday, Friday
            dropdownOptions = [{
                text: "10:00am",
                value: "10",
              },
              {
                text: "11:00am",
                value: "11",
              },
              {
                text: "12:00pm",
                value: "12",
              },
              {
                text: "1:00pm",
                value: "13",
              },
              {
                text: "2:00pm",
                value: "14",
              },
              {
                text: "3:00pm",
                value: "15",
              },
              {
                text: "4:00pm",
                value: "16",
              },
              {
                text: "5:00pm",
                value: "17",
              },
              {
                text: "6:00pm",
                value: "18",
              },
            ];
          } else if (dayOfWeek == 6) {
            // Saturday
            dropdownOptions = [{
                text: "10:00am",
                value: "10",
              },
              {
                text: "11:00am",
                value: "11",
              },
              {
                text: "12:00pm",
                value: "12",
              },
              {
                text: "1:00pm",
                value: "13",
              },
              {
                text: "2:00pm",
                value: "14",
              },
              {
                text: "3:00pm",
                value: "15",
              },
            ];
          }

          // Update the dropdown options
          var $dropdown = $(".meeting-scheduler .time-select").find("select");
          $dropdown.empty();

          //default option
          $dropdown.append(
            $("<option></option>")
            .attr("value", "")
            .text("Please select a time")
          );

          $.each(dropdownOptions, function(i, option) {
            $dropdown.append(
              $("<option></option>")
              .attr("value", option.value)
              .text(option.text)
            );
          });

          checkSkipValue();
        }
      });
    });
  
    /* <![CDATA[ */
    gform.initializeOnLoaded(function() {
      jQuery(document).on(
        "gform_post_render",
        function(event, formId, currentPage) {
          if (formId == 3) {
            if (!jQuery("#input_3_2+.ginput_counter").length) {
              jQuery("#input_3_2").textareaCount({
                maxCharacterSize: 5,
                originalStyle: "ginput_counter gfield_description",
                truncate: true,
                errorStyle: "",
                displayFormat: "#input of #max max characters",
              });
              jQuery("#input_3_2")
                .next(".ginput_counter")
                .attr("aria-live", "polite");
            }
            if (typeof Placeholders != "undefined") {
              Placeholders.enable();
            }
          }
        }
      );
      jQuery(document).on(
        "gform_post_conditional_logic",
        function(event, formId, fields, isInit) {}
      );
    });
    /* ]]> */
  
    /* <![CDATA[ */
    gform.initializeOnLoaded(function() {
      jQuery(document).trigger("gform_pre_post_render", [{
        formId: "3",
        currentPage: "1",
        abort: function() {
          this.preventDefault();
        },
      }, ]);
      if (event && event.defaultPrevented) {
        return;
      }
      const gformWrapperDiv = document.getElementById("gform_wrapper_3");
      if (gformWrapperDiv) {
        const visibilitySpan = document.createElement("span");
        visibilitySpan.id = "gform_visibility_test_3";
        gformWrapperDiv.insertAdjacentElement("afterend", visibilitySpan);
      }
      const visibilityTestDiv = document.getElementById(
        "gform_visibility_test_3"
      );
      let postRenderFired = false;

      function triggerPostRender() {
        if (postRenderFired) {
          return;
        }
        postRenderFired = true;
        jQuery(document).trigger("gform_post_render", [3, 1]);
        gform.utils.trigger({
          event: "gform/postRender",
          native: false,
          data: {
            formId: 3,
            currentPage: 1
          },
        });
        gform.utils.trigger({
          event: "gform/post_render",
          native: false,
          data: {
            formId: 3,
            currentPage: 1
          },
        });
        if (visibilityTestDiv) {
          visibilityTestDiv.parentNode.removeChild(visibilityTestDiv);
        }
      }

      function debounce(func, wait, immediate) {
        var timeout;
        return function() {
          var context = this,
            args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      }
      const debouncedTriggerPostRender = debounce(function() {
        triggerPostRender();
      }, 200);
      if (visibilityTestDiv && visibilityTestDiv.offsetParent === null) {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (
              mutation.type === "attributes" &&
              visibilityTestDiv.offsetParent !== null
            ) {
              debouncedTriggerPostRender();
              observer.disconnect();
            }
          });
        });
        observer.observe(document.body, {
          attributes: true,
          childList: false,
          subtree: true,
          attributeFilter: ["style", "class"],
        });
      } else {
        triggerPostRender();
      }
    });
    /* ]]> */
  
    /* <![CDATA[ */
    gform.initializeOnLoaded(function() {
      jQuery(document).on(
        "gform_post_render",
        function(event, formId, currentPage) {
          if (formId == 1) {
            gf_global["number_formats"][1] = {
              53: {
                price: false,
                value: false
              },
              16: {
                price: false,
                value: false
              },
              11: {
                price: false,
                value: false
              },
              13: {
                price: false,
                value: false
              },
              14: {
                price: false,
                value: false
              },
              50: {
                price: false,
                value: false
              },
              2: {
                price: false,
                value: false
              },
              18: {
                price: false,
                value: false
              },
              5: {
                price: false,
                value: false
              },
              7: {
                price: false,
                value: false
              },
              52: {
                price: false,
                value: false
              },
              20: {
                price: false,
                value: false
              },
              17: {
                price: false,
                value: false
              },
              57: {
                price: false,
                value: false
              },
              10: {
                price: false,
                value: false
              },
              56: {
                price: false,
                value: false
              },
              55: {
                price: false,
                value: false
              },
              54: {
                price: false,
                value: false
              },
              48: {
                price: false,
                value: false
              },
              49: {
                price: false,
                value: false
              },
              51: {
                price: false,
                value: false
              },
              15: {
                price: false,
                value: false
              },
              36: {
                price: false,
                value: false
              },
              12: {
                price: false,
                value: false
              },
              64: {
                price: false,
                value: false
              },
              59: {
                price: false,
                value: false
              },
              60: {
                price: false,
                value: false
              },
              62: {
                price: false,
                value: false
              },
              61: {
                price: false,
                value: false
              },
              65: {
                price: false,
                value: false
              },
              63: {
                price: false,
                value: false
              },
              58: {
                price: false,
                value: false
              },
              25: {
                price: false,
                value: false
              },
              21: {
                price: false,
                value: false
              },
              22: {
                price: false,
                value: false
              },
              23: {
                price: false,
                value: false
              },
              24: {
                price: false,
                value: false
              },
              45: {
                price: false,
                value: false
              },
              44: {
                price: false,
                value: false
              },
              66: {
                price: false,
                value: false
              },
              26: {
                price: false,
                value: false
              },
              37: {
                price: false,
                value: false
              },
              27: {
                price: false,
                value: false
              },
              38: {
                price: false,
                value: false
              },
              28: {
                price: false,
                value: false
              },
              39: {
                price: false,
                value: false
              },
              29: {
                price: false,
                value: false
              },
              40: {
                price: false,
                value: false
              },
              30: {
                price: false,
                value: false
              },
              41: {
                price: false,
                value: false
              },
              31: {
                price: false,
                value: false
              },
              32: {
                price: false,
                value: false
              },
              33: {
                price: false,
                value: false
              },
              47: {
                price: false,
                value: false
              },
              34: {
                price: false,
                value: false
              },
              35: {
                price: false,
                value: false
              },
              42: {
                price: false,
                value: false
              },
              43: {
                price: false,
                value: false
              },
              67: {
                price: false,
                value: false
              },
            };
            if (window["jQuery"]) {
              if (!window["gf_form_conditional_logic"])
                window["gf_form_conditional_logic"] = new Array();
              window["gf_form_conditional_logic"][1] = {
                logic: {
                  50: {
                    field: {
                      actionType: "show",
                      logicType: "all",
                      rules: [{
                          fieldId: "14",
                          operator: "isnot",
                          value: "FL"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "MD"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "NJ"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "PA"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "VA"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "DC"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "DE"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: ""
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "SC"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "NC"
                        },
                      ],
                      enabled: true,
                    },
                    nextButton: null,
                    section: null,
                  },
                  2: {
                    field: null,
                    nextButton: {
                      actionType: "hide",
                      logicType: "all",
                      rules: [{
                          fieldId: "14",
                          operator: "isnot",
                          value: "DC"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "FL"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "PA"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "VA"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "MD"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "NJ"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "DE"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: ""
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "SC"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "NC"
                        },
                      ],
                      enabled: true,
                    },
                    section: null,
                  },
                  20: {
                    field: null,
                    nextButton: {
                      actionType: "hide",
                      logicType: "all",
                      rules: [{
                        fieldId: "5",
                        operator: "is",
                        value: "No"
                      }],
                      enabled: true,
                    },
                    section: null,
                  },
                },
                dependents: {
                  50: [50],
                  2: [2],
                  20: [20]
                },
                animation: 0,
                defaults: {
                  53: "No Gift",
                  42: "AdsBot-Google (+http:\/\/www.google.com\/adsbot.html)",
                },
                fields: {
                  53: [],
                  16: [],
                  11: [],
                  13: [],
                  14: [50, 2],
                  50: [],
                  2: [],
                  18: [],
                  5: [20],
                  7: [],
                  52: [],
                  20: [],
                  17: [],
                  57: [],
                  10: [],
                  56: [],
                  55: [],
                  54: [],
                  48: [],
                  49: [],
                  51: [],
                  15: [],
                  36: [],
                  12: [],
                  64: [],
                  59: [],
                  60: [],
                  62: [],
                  61: [],
                  65: [],
                  63: [],
                  58: [],
                  25: [],
                  21: [],
                  22: [],
                  23: [],
                  24: [],
                  45: [],
                  44: [],
                  66: [],
                  26: [],
                  37: [],
                  27: [],
                  38: [],
                  28: [],
                  39: [],
                  29: [],
                  40: [],
                  30: [],
                  41: [],
                  31: [],
                  32: [],
                  33: [],
                  47: [],
                  34: [],
                  35: [],
                  42: [],
                  43: [],
                  67: [],
                },
              };
              if (!window["gf_number_format"])
                window["gf_number_format"] = "decimal_dot";
              jQuery(document).ready(function() {
                gform.utils.trigger({
                  event: "gform/conditionalLogic/init/start",
                  native: false,
                  data: {
                    formId: 1,
                    fields: null,
                    isInit: true
                  },
                });
                window["gformInitPriceFields"]();
                gf_apply_rules(1, [50, 2, 20], true);
                jQuery("#gform_wrapper_1").show();
                jQuery("#gform_wrapper_1 form").css("opacity", "");
                jQuery(document).trigger("gform_post_conditional_logic", [
                  1,
                  null,
                  true,
                ]);
                gform.utils.trigger({
                  event: "gform/conditionalLogic/init/end",
                  native: false,
                  data: {
                    formId: 1,
                    fields: null,
                    isInit: true
                  },
                });
              });
            }
            new GFPageConditionalLogic({
              formId: 1,
              formButton: {
                type: "text",
                text: "Submit",
                imageUrl: "",
                width: "auto",
                location: "bottom",
                layoutGridColumnSpan: 12,
              },
              pagination: {
                type: "percentage",
                pages: ["", "", "", "", "", "", "", "", ""],
                style: "custom",
                backgroundColor: "#1C2C57",
                color: "",
                display_progressbar_on_confirmation: false,
                progressbar_completion_text: null,
              },
              pages: [{
                  fieldId: 2,
                  conditionalLogic: "",
                  nextButton: {
                    type: "text",
                    text: "Continue",
                    imageUrl: "",
                    conditionalLogic: {
                      actionType: "hide",
                      logicType: "all",
                      rules: [{
                          fieldId: "14",
                          operator: "isnot",
                          value: "DC"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "FL"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "PA"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "VA"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "MD"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "NJ"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "DE"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: ""
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "SC"
                        },
                        {
                          fieldId: "14",
                          operator: "isnot",
                          value: "NC"
                        },
                      ],
                      enabled: true,
                    },
                    id: 2,
                  },
                },
                {
                  fieldId: 7,
                  conditionalLogic: {
                    actionType: "show",
                    logicType: "all",
                    rules: [{
                      fieldId: "5",
                      operator: "is",
                      value: "No"
                    }],
                    enabled: true,
                  },
                  nextButton: {
                    type: "text",
                    text: "Continue",
                    imageUrl: "",
                    conditionalLogic: null,
                    id: 7,
                  },
                },
                {
                  fieldId: 20,
                  conditionalLogic: "",
                  nextButton: {
                    type: "text",
                    text: "Continue",
                    imageUrl: "",
                    conditionalLogic: {
                      actionType: "hide",
                      logicType: "all",
                      rules: [{
                        fieldId: "5",
                        operator: "is",
                        value: "No"
                      }],
                      enabled: true,
                    },
                    id: 20,
                  },
                },
                {
                  fieldId: 10,
                  conditionalLogic: {
                    actionType: "hide",
                    logicType: "all",
                    rules: [{
                      fieldId: "14",
                      operator: "is",
                      value: "VA"
                    }],
                    enabled: true,
                  },
                  nextButton: {
                    type: "text",
                    text: "Continue",
                    imageUrl: "",
                    id: 10,
                  },
                },
                {
                  fieldId: 54,
                  conditionalLogic: "",
                  nextButton: {
                    type: "text",
                    text: "Continue",
                    imageUrl: "",
                    id: 54,
                  },
                },
                {
                  fieldId: 51,
                  conditionalLogic: "",
                  nextButton: {
                    type: "text",
                    text: "Continue",
                    imageUrl: "",
                    conditionalLogic: null,
                    id: 51,
                  },
                },
                {
                  fieldId: 12,
                  conditionalLogic: {
                    enabled: true,
                    actionType: "hide",
                    logicType: "all",
                    rules: [{
                      fieldId: "11",
                      operator: "isnot",
                      value: ""
                    }],
                  },
                  nextButton: {
                    type: "text",
                    text: "Continue",
                    imageUrl: "",
                    id: 12,
                  },
                },
                {
                  fieldId: 58,
                  conditionalLogic: "",
                  nextButton: {
                    type: "text",
                    text: "Schedule and Continue",
                    imageUrl: "",
                    id: 58,
                    conditionalLogic: "",
                  },
                },
              ],
            });
            if (typeof Placeholders != "undefined") {
              Placeholders.enable();
            }
            jQuery("#input_1_24")
              .mask("(999) 999-9999")
              .bind("keypress", function(e) {
                if (e.which == 13) {
                  jQuery(this).blur();
                }
              });
          }
        }
      );
      jQuery(document).on(
        "gform_post_conditional_logic",
        function(event, formId, fields, isInit) {}
      );
    });
    /* ]]> */
  
    /* <![CDATA[ */
    gform.initializeOnLoaded(function() {
      jQuery(document).trigger("gform_pre_post_render", [{
        formId: "1",
        currentPage: "1",
        abort: function() {
          this.preventDefault();
        },
      }, ]);
      if (event && event.defaultPrevented) {
        return;
      }
      const gformWrapperDiv = document.getElementById("gform_wrapper_1");
      if (gformWrapperDiv) {
        const visibilitySpan = document.createElement("span");
        visibilitySpan.id = "gform_visibility_test_1";
        gformWrapperDiv.insertAdjacentElement("afterend", visibilitySpan);
      }
      const visibilityTestDiv = document.getElementById(
        "gform_visibility_test_1"
      );
      let postRenderFired = false;

      function triggerPostRender() {
        if (postRenderFired) {
          return;
        }
        postRenderFired = true;
        jQuery(document).trigger("gform_post_render", [1, 1]);
        gform.utils.trigger({
          event: "gform/postRender",
          native: false,
          data: {
            formId: 1,
            currentPage: 1
          },
        });
        gform.utils.trigger({
          event: "gform/post_render",
          native: false,
          data: {
            formId: 1,
            currentPage: 1
          },
        });
        if (visibilityTestDiv) {
          visibilityTestDiv.parentNode.removeChild(visibilityTestDiv);
        }
      }

      function debounce(func, wait, immediate) {
        var timeout;
        return function() {
          var context = this,
            args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      }
      const debouncedTriggerPostRender = debounce(function() {
        triggerPostRender();
      }, 200);
      if (visibilityTestDiv && visibilityTestDiv.offsetParent === null) {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (
              mutation.type === "attributes" &&
              visibilityTestDiv.offsetParent !== null
            ) {
              debouncedTriggerPostRender();
              observer.disconnect();
            }
          });
        });
        observer.observe(document.body, {
          attributes: true,
          childList: false,
          subtree: true,
          attributeFilter: ["style", "class"],
        });
      } else {
        triggerPostRender();
      }
    });
    /* ]]> */
  