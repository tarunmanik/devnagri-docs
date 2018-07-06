/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c11d67c557ee5149f28a3dedf709f83c"
  },
  {
    "url": "assets/css/8.styles.4a7e5fc4.css",
    "revision": "9eefd79a60778c0314806c526d53ab9b"
  },
  {
    "url": "assets/img/AddFile1.9fae5a50.png",
    "revision": "9fae5a50070340250a7391be14d22581"
  },
  {
    "url": "assets/img/addglossary.a7df89c0.png",
    "revision": "a7df89c0050d7d0473fa0008de43b685"
  },
  {
    "url": "assets/img/AddTranslator.c75153a4.png",
    "revision": "c75153a4260022b299fe8d3808a08d86"
  },
  {
    "url": "assets/img/AddTranslator1.1350605e.png",
    "revision": "1350605e1a70102ac6d52e46291a7d8c"
  },
  {
    "url": "assets/img/AssignOrders1.2abe5e98.png",
    "revision": "2abe5e988efc56f0f93dee48af270190"
  },
  {
    "url": "assets/img/Comment.dd0e0dbe.png",
    "revision": "dd0e0dbe8af14f02e3f0535522a0a81c"
  },
  {
    "url": "assets/img/Comment2.ab3f65c1.png",
    "revision": "ab3f65c136c11cf2e2683f93f4dbe3fe"
  },
  {
    "url": "assets/img/Complete1.c6736a7f.png",
    "revision": "c6736a7faeaa41e12072680c1ff5c7a3"
  },
  {
    "url": "assets/img/CreateNewProject.3d3dc5f0.png",
    "revision": "3d3dc5f0c42753266b249e3fc4be5b19"
  },
  {
    "url": "assets/img/Discussion.3250194c.png",
    "revision": "3250194c26067d4e569c797814e8dd17"
  },
  {
    "url": "assets/img/donotdisp.99794087.png",
    "revision": "9979408773a3e0eda45a4f1a0017b642"
  },
  {
    "url": "assets/img/Donottrans.07bd06ed.png",
    "revision": "07bd06ed370d7d9c09847c1d930af59c"
  },
  {
    "url": "assets/img/Earnings1.431eafaf.png",
    "revision": "431eafafd9aae4fb5f6309836ddf22c9"
  },
  {
    "url": "assets/img/FileUpload.1342fd76.png",
    "revision": "1342fd763d8810c933d20ac8ac81cad2"
  },
  {
    "url": "assets/img/Fontsize.ae31bbb5.png",
    "revision": "ae31bbb56b723856ae3ec45ab0908cfa"
  },
  {
    "url": "assets/img/glossaryadd.4e8ce98a.png",
    "revision": "4e8ce98a5a69f9aafb8655b3a1be881f"
  },
  {
    "url": "assets/img/Glossaryview.26278d39.png",
    "revision": "26278d391d1c65f02464d2f23b3c3137"
  },
  {
    "url": "assets/img/Instructionbox.1e2a2151.png",
    "revision": "1e2a2151f98ccf400b16c68ea409ae9b"
  },
  {
    "url": "assets/img/Instructiondisplay.81723060.png",
    "revision": "817230601f8f0c9b8583e24a0ae4490f"
  },
  {
    "url": "assets/img/KS.73f33e2f.png",
    "revision": "73f33e2f77c8dbbffc27108fbb6df6b3"
  },
  {
    "url": "assets/img/OrderPlan.b42c7ec6.png",
    "revision": "b42c7ec60d002efcabde66440563098e"
  },
  {
    "url": "assets/img/OrderSystem.2e7f31b0.png",
    "revision": "2e7f31b0e95b07a72e90784fa3ead3ea"
  },
  {
    "url": "assets/img/ProjectDescription.15cd94b0.png",
    "revision": "15cd94b07d81e9856b9cc62daec574a9"
  },
  {
    "url": "assets/img/ProjectDescription1.f4ceb67f.png",
    "revision": "f4ceb67ffa2b21a051b5ac11e52e4b07"
  },
  {
    "url": "assets/img/ProjectDetail.efb1f0be.png",
    "revision": "efb1f0be164460caebe9fdd690e01b28"
  },
  {
    "url": "assets/img/ProjectDetail1.6bdbe4ea.png",
    "revision": "6bdbe4ea4cde2e523d8c884971d13924"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/TranslateTerm.921cbe3d.png",
    "revision": "921cbe3de6c7c4e13f70c40ce3aeeb87"
  },
  {
    "url": "assets/img/Translation.9cc279c0.png",
    "revision": "9cc279c048d3d28f1108c74ca61b3ea2"
  },
  {
    "url": "assets/img/Translation1.f441e61b.png",
    "revision": "f441e61bff7849ddecd7c598a39e922d"
  },
  {
    "url": "assets/img/TransTranslator1.0fa09398.png",
    "revision": "0fa09398b2d1e20753a17adef5a99b91"
  },
  {
    "url": "assets/img/UserDashboard.baf5c899.png",
    "revision": "baf5c8990d7bab8fdf120bf8040ef5f5"
  },
  {
    "url": "assets/js/0.66b1f297.js",
    "revision": "964e1cbbedae0422bfcbe72a0da10beb"
  },
  {
    "url": "assets/js/1.40d63a5a.js",
    "revision": "c4a7a541908356439837086a30df4fb1"
  },
  {
    "url": "assets/js/2.8619498f.js",
    "revision": "d796e12873069e9a0365ddf21cb35caa"
  },
  {
    "url": "assets/js/3.521f78d6.js",
    "revision": "72e3cc570f91a2ec894cf2b59596cbeb"
  },
  {
    "url": "assets/js/4.a47c405c.js",
    "revision": "215ae302c592f8e071f3b96b4e98c948"
  },
  {
    "url": "assets/js/5.1b9800a0.js",
    "revision": "028897c427b783d7f122a448bb1ddf82"
  },
  {
    "url": "assets/js/6.8ed629c0.js",
    "revision": "9fef2cd79eccf216871dc75452780aa9"
  },
  {
    "url": "assets/js/7.d039d5b8.js",
    "revision": "76dea4bb86432ce2f0ebb89d35253e82"
  },
  {
    "url": "assets/js/app.e1d24e1f.js",
    "revision": "fc4ec731c501da86ce35bb0db86f00af"
  },
  {
    "url": "guide/api.html",
    "revision": "90a9439f04b496e84b9876f2495a1d4e"
  },
  {
    "url": "guide/create-project.html",
    "revision": "a8de69407965e1bc31296b441c48f72c"
  },
  {
    "url": "guide/glossary.html",
    "revision": "53bde2897c5b3a448da968546d6b1a45"
  },
  {
    "url": "guide/index.html",
    "revision": "bedd81790f8ff16d38f462d3a2d4ba8c"
  },
  {
    "url": "guide/translator.html",
    "revision": "5e0d822f2d389cd88f893fcb11bcd281"
  },
  {
    "url": "hero.png",
    "revision": "7d464de30a65b371e920e6b549a9b860"
  },
  {
    "url": "index.html",
    "revision": "c7911395de20fce8d0271bed4f65d839"
  },
  {
    "url": "logo-dark.png",
    "revision": "8e1257edb3c9d94e1fe2b0c8005460b0"
  },
  {
    "url": "logo.png",
    "revision": "ff5aa24891fcc8c65199325c00bc4ebe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
