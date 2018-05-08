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
    "revision": "666b727c3554ef14f9fdfd9f1a05f449"
  },
  {
    "url": "assets/css/5.styles.dcef67f4.css",
    "revision": "9eefd79a60778c0314806c526d53ab9b"
  },
  {
    "url": "assets/img/AddTranslator.c75153a4.png",
    "revision": "c75153a4260022b299fe8d3808a08d86"
  },
  {
    "url": "assets/img/Assignorders.7d603a2c.png",
    "revision": "7d603a2c9fc07aa5d6623abe2745a811"
  },
  {
    "url": "assets/img/Comment.dd0e0dbe.png",
    "revision": "dd0e0dbe8af14f02e3f0535522a0a81c"
  },
  {
    "url": "assets/img/Comment1.28aaa403.png",
    "revision": "28aaa4035835f02ec983a484924fc466"
  },
  {
    "url": "assets/img/CompleteTranslation.13107e66.png",
    "revision": "13107e667ca5af4dd6f54e84ebdfd283"
  },
  {
    "url": "assets/img/CreateNewProject.3d3dc5f0.png",
    "revision": "3d3dc5f0c42753266b249e3fc4be5b19"
  },
  {
    "url": "assets/img/Earnings.a1108b31.png",
    "revision": "a1108b319f432933dd781988141d2888"
  },
  {
    "url": "assets/img/FileUpload.1342fd76.png",
    "revision": "1342fd763d8810c933d20ac8ac81cad2"
  },
  {
    "url": "assets/img/InstructionBox.3573178d.png",
    "revision": "3573178d8838c65e6e797f0e53883219"
  },
  {
    "url": "assets/img/KeyboardShortcut.0ae6ef44.png",
    "revision": "0ae6ef44ae3c16334c7074eab484840f"
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
    "url": "assets/img/ProjectDetail.efb1f0be.png",
    "revision": "efb1f0be164460caebe9fdd690e01b28"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/TextSize.6217db22.png",
    "revision": "6217db22bc1c88a896df7791abfec18b"
  },
  {
    "url": "assets/img/Translation.9cc279c0.png",
    "revision": "9cc279c048d3d28f1108c74ca61b3ea2"
  },
  {
    "url": "assets/img/TransTranslatorScreen.665c1149.png",
    "revision": "665c11498104ca19ec1c5734d5df5f33"
  },
  {
    "url": "assets/js/0.7f56c655.js",
    "revision": "1e2e892026575dfe22295c7bab0e7806"
  },
  {
    "url": "assets/js/1.30593680.js",
    "revision": "925b52d2adeaa52da8c12f929664568c"
  },
  {
    "url": "assets/js/2.1d0cca85.js",
    "revision": "898780474552e7d67bc2068fc3025f15"
  },
  {
    "url": "assets/js/3.5cb58ce6.js",
    "revision": "5d69a0cf518510dbd7f6ce615a1214b5"
  },
  {
    "url": "assets/js/4.00a2ad4a.js",
    "revision": "b33104b9e6d30470ed7270167f1993bb"
  },
  {
    "url": "assets/js/app.fb1685ad.js",
    "revision": "95b28189c0c1bdc2c42e0eb6a96a5fce"
  },
  {
    "url": "guide/index.html",
    "revision": "c97475a0f82745c8e556056021d36dec"
  },
  {
    "url": "guide/translator.html",
    "revision": "d46fcf9dd9d84ab6fa0b108920f1bfaf"
  },
  {
    "url": "hero.png",
    "revision": "7d464de30a65b371e920e6b549a9b860"
  },
  {
    "url": "index.html",
    "revision": "beb2b46ea63787fec173734a2611c981"
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
