# Overrides for Extension Preferences
# Tor Browser Bundle
# Do not edit this file.
#
# This file is modified from a file included in the Tor Browser Bundle.
#
# Copyright 2017 The Tor Project.  See LICENSE.tor for licensing information.

# HTTPS Everywhere Preferences:
pref("extensions.https_everywhere._observatory.popup_shown", true, locked);
pref("extensions.https_everywhere.toolbar_hint_shown", true, locked);

# NoScript Preferences:
# In order to disable all scripts by default, uncomment the following line...
# user_pref("capability.policy.maonoscript.javascript.enabled", "noAccess");
# and comment out the following line
pref("capability.policy.maonoscript.javascript.enabled", "allAccess", locked);
pref("capability.policy.maonoscript.sites", "[System+Principal] about: about:tbupdate about:tor chrome: resource: blob: mediasource: moz-extension: moz-safe-about: about:neterror about:certerror about:feeds about:tabcrashed about:cache", locked);
pref("noscript.default", "[System+Principal] about: about:tbupdate about:tor chrome: resource: blob: mediasource: moz-extension: moz-safe-about: about:neterror about:certerror about:feeds about:tabcrashed about:cache", locked);
pref("noscript.mandatory", "[System+Principal] about: about:tbupdate about:tor chrome: resource: blob: mediasource: moz-extension: moz-safe-about: about:neterror about:certerror about:feeds about:tabcrashed about:cache", locked);
pref("noscript.ABE.enabled", false, locked);
pref("noscript.ABE.notify", false, locked);
pref("noscript.ABE.wanIpAsLocal", false, locked);
pref("noscript.confirmUnblock", false, locked);
pref("noscript.contentBlocker", true, locked);
pref("noscript.firstRunRedirection", false, locked);
pref("noscript.global", true, locked);
pref("noscript.gtemp", "", locked);
pref("noscript.opacizeObject", 3, locked);
pref("noscript.forbidWebGL", true, locked);
pref("noscript.forbidFonts", true, locked);
pref("noscript.options.tabSelectedIndexes", "5,0,0", locked);
pref("noscript.policynames", "", locked);
pref("noscript.secureCookies", true, locked);
pref("noscript.showAllowPage", false, locked);
pref("noscript.showBaseDomain", false, locked);
pref("noscript.showDistrust", false, locked);
pref("noscript.showRecentlyBlocked", false, locked);
pref("noscript.showTemp", false, locked);
pref("noscript.showTempToPerm", false, locked);
pref("noscript.showUntrusted", false, locked);
pref("noscript.STS.enabled", false, locked);
pref("noscript.subscription.lastCheck", -142148139, locked);
pref("noscript.temp", "", locked);
pref("noscript.untrusted", "", locked);
pref("noscript.forbidMedia", true, locked);
pref("noscript.allowWhitelistUpdates", false, locked);
pref("noscript.fixLinks", false, locked);
// Now handled by plugins.click_to_play // Not in this one.
pref("noscript.forbidFlash", true, locked);
pref("noscript.forbidSilverlight", true, locked);
pref("noscript.forbidJava", true, locked);
pref("noscript.forbidPlugins", true, locked);
// Usability tweaks
pref("noscript.showPermanent", false, locked);
pref("noscript.showTempAllowPage", true, locked);
pref("noscript.showRevokeTemp", true, locked);
pref("noscript.notify", false, locked);
pref("noscript.autoReload", true, locked);
pref("noscript.autoReload.allTabs", false, locked);
pref("noscript.cascadePermissions", true, locked);
pref("noscript.restrictSubdocScripting", true, locked);
pref("noscript.showVolatilePrivatePermissionsToggle", false, locked);
pref("noscript.volatilePrivatePermissions", true, locked);
pref("noscript.clearClick", 0, locked);

pref("intl.locale.matchOS", false, locked);

pref("extensions.https_everywhere._observatory.enabled", false, locked);
pref("extensions.https_everywhere.options.autoUpdateRulesets", false, locked);
pref("extensions.https_everywhere.globalEnabled", false, locked);
pref("extensions.https_everywhere._observatory.submit_during_tor", false, locked);
pref("extensions.https_everywhere._observatory.submit_during_nontor", false, locked);
pref("extensions.https_everywhere._observatory.use_custom_proxy", true, locked);
pref("extensions.https_everywhere._observatory.proxy_host", "127.0.0.1", locked);
pref("extensions.https_everywhere._observatory.proxy_port", 4444, locked);

pref("extensions.torbutton.use_nontor_proxy", true, locked);
pref("extensions.torlauncher.start_tor", false, locked);
pref("extensions.torlauncher.prompt_at_startup", false, locked);
//user_pref("", false);


//For socket conversion: in the future, I'll need to make TBB communicate with
//i2p over a unix socket. Fortunately, this is how you do that. It will be
//configurable in a similar way to the host:port configuration when that happens.
//user_pref("extensions.torlauncher.socks_port_use_ipc", );
//user_pref("extensions.torlauncher.socks_ipc_path", "");

//user_pref("extensions.torlauncher.start_tor", false);
//user_pref("extensions.torlauncher.default_bridge_type", "");
//user_pref("extensions.torlauncher.prompt_at_startup", false);

// Resist-fingerprinting and first-party isolation enable

pref("privacy.resistFingerprinting", true, locked);
pref("privacy.firstparty.isolate", true, locked);

// Use i2p http proxy for all connections and set homepage to safe local form.

// DON'T allow access to the admin panel from the profile we browse i2p with.
pref("network.proxy.no_proxies_on", "", locked);
pref("network.proxy.type", 1, locked);
pref("network.proxy.http", "127.0.0.1", locked);
pref("network.proxy.http_port", 4444, locked);
pref("network.proxy.ssl", "127.0.0.1", locked);
pref("network.proxy.ssl_port", 4444, locked);
pref("network.proxy.ftp", "127.0.0.1", locked);
pref("network.proxy.ftp_port", 4444, locked);
pref("network.proxy.socks", "127.0.0.1", locked);
pref("network.proxy.socks_port", 4444, locked);
pref("network.proxy.share_proxy_settings", true, locked);
pref("network.proxy.socks_remote_dns", true, locked);
pref("browser.startup.homepage", "about:blank", locked);

// Privacy-harden and disable irrelevant features.
pref("app.normandy.api_url", "", locked);
pref("app.normandy.enabled", false, locked);
pref("app.update.auto", false, locked);
pref("app.update.enabled", false, locked);
pref("beacon.enabled", false, locked);
pref("browser.aboutHomeSnippets.updateUrl", "", locked);
pref("browser.cache.disk_cache_ssl", false, locked);
pref("browser.cache.disk.enable", false, locked);
pref("browser.cache.offline.enable", false, locked);
pref("browser.disableResetPrompt", true, locked);
pref("browser.display.use_document_fonts", 0, locked);
pref("browser.fixup.alternate.enabled", false, locked);
pref("browser.formfill.enable", false, locked);
pref("browser.library.activity-stream.enabled", false, locked);
pref("browser.newtabpage.activity-stream.disableSnippets", true, locked);
pref("browser.newtabpage.activity-stream.enabled", false, locked);
pref("browser.newtabpage.activity-stream.feeds.section.highlights", false, locked);
pref("browser.newtabpage.activity-stream.feeds.snippets", false, locked);
pref("browser.newtabpage.activity-stream.feeds.telemetry", false, locked);
pref("browser.newtabpage.activity-stream.feeds.topsites", false, locked);
pref("browser.newtabpage.activity-stream.prerender", false, locked);
pref("browser.newtabpage.activity-stream.showSearch", false, locked);
pref("browser.newtabpage.enhanced", false, locked);
pref("browser.newtabpage.introShown", true, locked);
pref("browser.newtab.preload", false, locked);
pref("browser.onboarding.enabled", false, locked);
pref("browser.pagethumbnails.capturing_disabled", true, locked);
pref("browser.safebrowsing.appRepURL", "", locked);
pref("browser.safebrowsing.blockedURIs.enabled", false, locked);
pref("browser.safebrowsing.downloads.enabled", false, locked);
pref("browser.safebrowsing.downloads.remote.enabled", false, locked);
pref("browser.safebrowsing.downloads.remote.url", "", locked);
pref("browser.safebrowsing.enabled", false, locked);
pref("browser.safebrowsing.malware.enabled", false, locked);
pref("browser.safebrowsing.phishing.enabled", false, locked);
pref("browser.search.geoip.timeout", 1, locked);
pref("browser.search.suggest.enabled", false, locked);
pref("browser.selfsupport.url", "", locked);
pref("browser.send_pings", false, locked);
pref("browser.shell.checkDefaultBrowser", false, locked);
pref("browser.startup.homepage_override.mstone", "ignore", locked);
pref("browser.startup.page", 0, locked);
pref("browser.toolbarbuttons.introduced.pocket-button", true, locked);
pref("browser.urlbar.speculativeConnect.enabled", false, locked);
pref("browser.urlbar.trimURLs", false, locked);
pref("datareporting.healthreport.uploadEnabled", false, locked);
pref("datareporting.policy.dataSubmissionEnabled", false, locked);
pref("dom.battery.enabled", false, locked);
pref("dom.enable_performance", false, locked);
pref("dom.enable_performance_navigation_timing", false, locked);
pref("dom.enable_resource_timing", false, locked);
pref("dom.event.clipboardevents.enabled", false, locked);
pref("dom.gamepad.enabled", false, locked);
pref("dom.indexedDB.enabled", false, locked);
pref("dom.min_timeout_value", 400, locked);
pref("dom.push.connection.enabled", false, locked);
pref("dom.push.enabled", false, locked);
pref("dom.serviceWorkers.enabled", false, locked);
pref("dom.serviceWorkers.interception.enabled", false, locked);
pref("dom.storage.enabled", false, locked);
pref("dom.webaudio.enabled", false, locked);
pref("extensions.autoDisableScopes", 14, locked);
pref("extensions.getAddons.cache.enabled", false, locked);
pref("extensions.getAddons.showPane", false, locked);
pref("extensions.pocket.enabled", false, locked);
pref("extensions.screenshots.disabled", true, locked);
pref("extensions.webservice.discoverURL", "", locked);
pref("geo.enabled", false, locked);
pref("geo.wifi.uri", "", locked);
pref("gfx.downloadable_fonts.disable_cache", true, locked);
pref("javascript.options.shared_memory", false, locked);
pref("layout.css.visited_links_enabled", false, locked);
pref("media.autoplay.enabled", false, locked);
pref("media.cache_size", 0, locked);
pref("media.navigator.enabled", false, locked);
pref("media.peerconnection.enabled", false, locked);
pref("media.video_stats.enabled", false, locked);
pref("captivedetect.canonicalURL", "", locked);
pref("network.captive-portal-service.enabled", false, locked);
pref("network.cookie.cookieBehavior", 1, locked);
pref("network.cookie.lifetimePolicy", 2, locked);
pref("network.dns.disablePrefetch", true, locked);
pref("network.http.referer.spoofSource", true, locked);
pref("network.http.referer.trimmingPolicy", 2, locked);
pref("network.http.referer.XOriginPolicy", 2, locked);
pref("network.prefetch-next", false, locked);
pref("privacy.donottrackheader.enabled", true, locked);
pref("privacy.donottrackheader.value", 1, locked);
pref("toolkit.telemetry.archive.enabled", false, locked);
pref("toolkit.telemetry.coverage.opt-out", true, locked);
pref("toolkit.telemetry.enabled", false, locked);
pref("toolkit.telemetry.server", "", locked);
pref("toolkit.telemetry.unified", false, locked);
pref("webgl.disabled", true, locked);
pref("browser.chrome.errorReporter.infoURL", "", locked);
pref("breakpad.reportURL", "", locked);
pref("browser.newtabpage.activity-stream.default.sites", "", locked);
//user_pref("browser.newtabpage.activity-stream.default.sites", "http://planet.i2p/,http://legwork.i2p/,http://i2pwiki.i2p/,http://i2pforums.i2p/,http://zzz.i2p/");
