'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "685a68dbc17e16f0c810e9572195ffe9",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/objects/pack/pack-06bb1ee7abeff0bc16703bf94ece74c5d1b8ebd9.idx": "1904d86fa81cc71388d26b76cfd67da1",
".git/objects/pack/pack-06bb1ee7abeff0bc16703bf94ece74c5d1b8ebd9.pack": "1017e3bfdb66615a7d5d0facbf7a4460",
".git/objects/pack/pack-06bb1ee7abeff0bc16703bf94ece74c5d1b8ebd9.rev": "ae5fc4215fdeb42b303c750e724d62ef",
".git/logs/refs/remotes/origin/HEAD": "7ad5c179ae317eb33ae5656b7444ade7",
".git/logs/refs/heads/gh-pages": "7ad5c179ae317eb33ae5656b7444ade7",
".git/logs/HEAD": "7ad5c179ae317eb33ae5656b7444ade7",
".git/refs/remotes/origin/HEAD": "b501512a260537c5e52df65d2a034251",
".git/refs/heads/gh-pages": "53c15d3594976387c0dd6094f16c5882",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/index": "f5647cf9018317e88ec4dbd5558c3295",
".git/packed-refs": "d1e9bd3280e9bc1f30c1dc2396296da5",
"manifest.json": "1222249d7a8e8151b8d194f04043f723",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"index.html": "36ff31b9c90669514290960a5dbc6424",
"/": "36ff31b9c90669514290960a5dbc6424",
"assets/AssetManifest.bin.json": "9a937c4791be6f8bd9785d565cd4ebc3",
"assets/AssetManifest.bin": "4b7529e8ff3fe45325f53d528cca4cc8",
"assets/FontManifest.json": "cc069cdd95cc3a7bc228372f85e900cc",
"assets/assets/page05/kakaopay.png": "c859e3f09226090af7035fbc673bd01f",
"assets/assets/page05/UI_Page05_QR.png": "1faac0a729545148cf8815c842ab565e",
"assets/assets/page05/QR.svg": "6e5ad21b61513d6a785b7ae350cd32e7",
"assets/assets/page05/QR.png": "12bdf14903a904a3e44d6d433c4d3194",
"assets/assets/data/content_zh_CN.json": "5cfcb762259d7003096f65a7b9ff16e8",
"assets/assets/data/content_en_US.json": "143544f52825b286a75845eb2d62b824",
"assets/assets/data/content_ja_JP.json": "b3e191aec72076e6f93870bac9c5b5b2",
"assets/assets/data/content_zh_TW.json": "389ea84226af79368726ec7a88a4c57b",
"assets/assets/data/content_ko_KR.json": "a7e84b3a88621ff662bf53c8f6756137",
"assets/assets/fonts/KimjungchulGothic-Light.ttf": "c9b69e815b5dda339a718052b4e41012",
"assets/assets/fonts/KimjungchulScript-Light.ttf": "b42298b521a9fa3ea99ca012d418efb4",
"assets/assets/fonts/KimjungchulGothic-Regular.ttf": "76f4259119a89c0fbff401bd2ac78b78",
"assets/assets/fonts/KimjungchulMyungjo-Bold.ttf": "17b2927e9ce3a53202d5c92ee1c47366",
"assets/assets/fonts/KimjungchulMyungjo-Regular.ttf": "a6f4320b760fc8a5b5ae25bfa5809326",
"assets/assets/fonts/KimjungchulScript-Bold.ttf": "29710d723ba5119a4da2b7f4d3af2f21",
"assets/assets/fonts/KimjungchulGothic-Bold.ttf": "ab088e2db7ac09b49b39ed5ebeec53e6",
"assets/assets/fonts/KimjungchulMyungjo-Light.ttf": "0e6d40f365cbee8a2ccaa71f49cb2691",
"assets/assets/fonts/KimjungchulScript-Regular.ttf": "11b7a088780cf820526d3319af11fc3d",
"assets/assets/page01/UI_Page01_5.png": "0cff241490af554225f2554943084e05",
"assets/assets/page01/UI_Page01_2.png": "44cf034280ba2cf2b847c9a4eb509a6b",
"assets/assets/page01/UI_Page01_1.png": "c83ae5825171887229238dcb75be1662",
"assets/assets/page01/UI_Page01_4.png": "14b862539fa7555d02dfaf8f4035523c",
"assets/assets/page01/UI_Page01_6.png": "e8ab0ce8455f57bf3cdf0a185cc50044",
"assets/assets/page01/UI_Page01_7.png": "752d38253aca12a9d6e4adc63bdf1c32",
"assets/assets/page01/UI_Page01_3.png": "783d61b99ab30ee2350bdc262f0d46bd",
"assets/assets/page02/UI_Page02_4.jpg": "68d10f482dfcf2631e87d70c608c56f7",
"assets/assets/page02/UI_Page02_3.jpg": "588544e0404e51871f571d9752be6d8a",
"assets/assets/page02/UI_Page02_5.jpg": "e81762da1c600129792266c86e7c24a6",
"assets/assets/page02/UI_Page02_7.jpg": "93b507e9b1dbecbecb57afac8ca8eb34",
"assets/assets/page02/UI_Page02_1.jpg": "439d40d3c7249ee9927310cacad29b4a",
"assets/assets/page02/UI_Page02_6.jpg": "3d3f2246d5da8fd5ba4dfcb695a707b1",
"assets/assets/page02/UI_Page02_2.jpg": "28b8f24ccadb901f7843086c09d96464",
"assets/assets/bg/ScreenSaver_BG_07.jpg": "26e2fe37208bb32041f87cbdd6eaeaff",
"assets/assets/bg/Work_1080x1920_002_Home_08.jpg": "20c092a70c356facc4d60d6d3f030ad2",
"assets/assets/bg/ScreenSaver_BG_17.jpg": "ae0960dee7c536e3c89ae4054f0a0167",
"assets/assets/bg/Final_TouchIcon.png": "884ff30ecf06b053945154f7f2ca8503",
"assets/assets/bg/ScreenSaver_BG_06.jpg": "492af5c8c28e663aa1f8cde207fde1f5",
"assets/assets/bg/ScreenSaver_BG_05.jpg": "50361622c1dd587e747023557c8a9df6",
"assets/assets/bg/Work_1080x1920_002_Home_10.jpg": "ab592a272cb4752efb534b32605f839e",
"assets/assets/bg/Work_1080x1920_002_Home_01.jpg": "b4d91bddb7f53ec54cb5e321f4f1faed",
"assets/assets/bg/map.png": "97f79f018dbe10b6b709e7b1199f29e7",
"assets/assets/bg/Work_1080x1920_002_Home_06.jpg": "a6a2f9990815c3cd43b10dcaba6fdfe2",
"assets/assets/bg/Work_1080x1920_002_Home_12.jpg": "039c372a3fa370ae0acbbfba60fab8bf",
"assets/assets/bg/Work_1080x1920_002_Home_07.jpg": "7691272ac57b01bc6ed3ed9df6fcc386",
"assets/assets/bg/Work_1080x1920_002_Home_02.jpg": "8739cba5a33db29fea41c184d02b9fe2",
"assets/assets/bg/Work_1080x1920_002_Home_03.jpg": "d9fbd0c972a7705c7c56671e29c5add2",
"assets/assets/bg/ScreenSaver_BG_02.jpg": "072eb0c16987b78ea7ea68ec8d05d186",
"assets/assets/bg/fixing.jpg": "6ec5a26d818d0bb2f742dd884ce9c105",
"assets/assets/bg/ScreenSaver_BG_11.jpg": "a7f6ff7a1313714c31db11222512dada",
"assets/assets/bg/ScreenSaver_BG_14.jpg": "87062c9534010d245bf4214277219ce7",
"assets/assets/bg/ScreenSaver_BG_16.jpg": "5fc59e7b7e68ea3621b215eb94c9f7d4",
"assets/assets/bg/ScreenSaver_BG_13.jpg": "a5218de874350106073e7c20870223d5",
"assets/assets/bg/Work_1080x1920_002_Home_14.jpg": "255bc5f0a077654ef738cdeccb14d2d7",
"assets/assets/bg/ScreenSaver_BG_09.jpg": "5efb14b433dc7312dbdbc25ba6f3c592",
"assets/assets/bg/Work_1080x1920_002_Home_15.jpg": "c537e4c70e393ba0461a20fc92802baf",
"assets/assets/bg/fixing.png": "cae34442a04f2369eb8e80e74165e371",
"assets/assets/bg/Work_1080x1920_002_Home_04.jpg": "f5a2d1fc98c05fd53bc3e13cdd8c2969",
"assets/assets/bg/UI_Page01_BG.jpg": "e0ddf0e96c6a20eebf09a2c581859a04",
"assets/assets/bg/ScreenSaver_BG_08.jpg": "dc15774caaa0fe270889f83bff562ca6",
"assets/assets/bg/ScreenSaver_BG_15.jpg": "6b68b48a1df4b08957b143c007d3d185",
"assets/assets/bg/UI_Base_Title.png": "becc1dd21056beebbca020acbf1655ec",
"assets/assets/bg/ScreenSaver_BG_03.jpg": "6a3e84aea1ce5216dce4b2f2a23dd64f",
"assets/assets/bg/Work_1080x1920_002_Home_11.jpg": "0fb2660f21a8c7949a39e433ae20d459",
"assets/assets/bg/Work_1080x1920_002_Home_16.jpg": "63c937c054433682915f994f29273a8d",
"assets/assets/bg/ScreenSaver_BG_01.jpg": "edd7b3ea4648cff946d2918d24943646",
"assets/assets/bg/Work_1080x1920_002_Home_13.jpg": "29bec00bf07841297bed4400c21bc391",
"assets/assets/bg/ScreenSaver_BG_12.jpg": "184f2f928f2c212f3ee0b0353db5f63f",
"assets/assets/bg/ScreenSaver_BG_10.jpg": "f0cbb2ca912cf31ffa4cce143d48ef32",
"assets/assets/bg/Work_1080x1920_002_Home_05.jpg": "29652e6fe32e159e2f4370879b8b7596",
"assets/assets/bg/Work_1080x1920_002_Home_09.jpg": "446a27cab2eae5cf0f6163c753e6f5e3",
"assets/assets/bg/ScreenSaver_BG_04.jpg": "c9ac733b9d6b582e8126b55f310bac13",
"assets/assets/page03/UI_Page03_PopUp_9.png": "2c00527dcd98a6729871e996a6bf1223",
"assets/assets/page03/UI_Page03_PopUp_15.png": "0baf890ddc0c33ff5e7f71d706a077df",
"assets/assets/page03/UI_Page03_PopUp_17.png": "da55ebc701becba7993bb36b92530c0a",
"assets/assets/page03/UI_Page03_PopUp_10.png": "be5dc031166ce46f4b07b269f136846f",
"assets/assets/page03/map.jpg": "a1f1b4cee990182f64241beb9148a66e",
"assets/assets/page03/UI_Page03_PopUp_4.png": "b11abc999c13686620e71bc567d2a047",
"assets/assets/page03/UI_Page03_PopUp_11.png": "5c007b7edca5fddd12c852901a521313",
"assets/assets/page03/UI_Page03_PopUp_13.png": "4ef3689476ea8b12f59e5a1b68887b04",
"assets/assets/page03/UI_Page03_PopUp_5.png": "17fd64ebb827069288c07df373f91b33",
"assets/assets/page03/UI_Page03_PopUp_16.png": "19ea3964956f02e7bd7f138aeb6e8c11",
"assets/assets/page03/UI_Page03_PopUp_14.png": "598ab4b392faa8844b6c74db3f54b5f0",
"assets/assets/page03/UI_Page03_PopUp_7.png": "8ab6df42f13398d9f8bf259ace47fec2",
"assets/assets/page03/UI_Page03_PopUp_2.png": "f269328a409d6ac81690ab6ab0c9f6ef",
"assets/assets/page03/UI_Page03_PopUp_8.png": "fd37b78cdea7a0390f687d15e88f7e1a",
"assets/assets/page03/UI_Page03_PopUp_3.png": "baabf94f3623ae86922066ee46c1bb41",
"assets/assets/page03/UI_Page03_PopUp_12.png": "9da1d485bb7385298abb3f34db45561f",
"assets/assets/page03/UI_Page03_PopUp_1.png": "691214d0390ce221defdb4b45d2cab67",
"assets/assets/page03/UI_Page03_PopUp_18.png": "011c76f1c42f4746bf2cd634f95926d8",
"assets/assets/page03/UI_Page03_PopUp_6.png": "a2413ce309fe27cca50a5b5898dd450a",
"assets/assets/icons/Button_%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25CC%25A4%25EF%25BF%25BD%25EF%25BF%25BD%25CB%25A4%25EF%25BF%25BD%25EF%25BF%25BD%25CC%25A4%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25C8%25A4%25EF%25BF%25BD%25EF%25BF%25BD%25D0%25A4%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD.png": "38ffebcd96c7bf68882d51be79c13065",
"assets/assets/icons/Button_%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25D3%25A4%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD.png": "4afa5b176bcca40cf00fb4214d6cb0b3",
"assets/assets/icons/Button_%25E1%2584%2592%25E1%2585%25A2%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25A1%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25B7.png": "b4b3a2f15bcd93d3a2a479d7fe3d97c7",
"assets/assets/icons/Button_%25E1%2584%258B%25E1%2585%25A5%25E1%2586%25AB%25E1%2584%258B%25E1%2585%25A5.png": "cab410ee279e9bf52108b042abdaa18d",
"assets/assets/icons/Button_%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25C3%25A4%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25D1%25A4%25EF%25BF%25BD%25EF%25BF%25BD%25E7%25A4%25B5%25EF%25BF%25BD%25C7%25A4%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD.png": "1ea01e3620439b6d76d0c9b5fd76e426",
"assets/assets/icons/Button_%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25C3%25A4%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD.png": "cab410ee279e9bf52108b042abdaa18d",
"assets/assets/icons/Button_%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25D3%25A4%25EF%25BF%25BD.png": "b4b3a2f15bcd93d3a2a479d7fe3d97c7",
"assets/assets/icons/Button_%25E1%2584%2587%25E1%2585%25AE%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB%25E1%2584%2592%25E1%2585%25A1%25E1%2586%25B7.png": "a147893c828c7369e2cbffe214d5ddc0",
"assets/assets/icons/Button_%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25CC%25A4%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25C3%25A4%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD%25EF%25BF%25BD.png": "a147893c828c7369e2cbffe214d5ddc0",
"assets/assets/icons/Button_%25E1%2584%2589%25E1%2585%25A1%25E1%2584%258E%25E1%2585%25A1%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25A9.png": "4afa5b176bcca40cf00fb4214d6cb0b3",
"assets/assets/icons/Button_%25E1%2584%258C%25E1%2585%25AE%25E1%2584%258B%25E1%2585%25AD%25E1%2584%2586%25E1%2585%25AE%25E1%2586%25AB%25E1%2584%2592%25E1%2585%25AA%25E1%2584%258B%25E1%2585%25B2%25E1%2584%2589%25E1%2585%25A1%25E1%2586%25AB.png": "38ffebcd96c7bf68882d51be79c13065",
"assets/assets/icons/buddhist.png": "43739e32e155d0fd538caba943817af7",
"assets/assets/icons/Button_%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB%25E1%2584%2583%25E1%2585%25B3%25E1%2586%25BC%25EC%2582%25AC%25E1%2584%2589%25E1%2585%25A9%25E1%2584%2580%25E1%2585%25A2.png": "1ea01e3620439b6d76d0c9b5fd76e426",
"assets/assets/page04/UI_Page04.png": "2ad4fcfea0bfaf5067828a01af445f60",
"assets/fonts/MaterialIcons-Regular.otf": "58ebf5947c421c26899f0f13f9d58a8c",
"assets/NOTICES": "723d78526d8b9c109a945966e2ffb0c7",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"version.json": "8770b3d564f3bdf408ba630689dea918",
"main.dart.js": "d275888a55a80dd3b33b5224cb6692c7",
"favicon.png": "29cce6f8664bbc848dd798aa56485b59",
"flutter_bootstrap.js": "eb1fa4946ad1e1a820d0dc16c1eec5b0",
"icons/Icon-maskable-192.png": "6c764b577b3db0f9578d70afe01d0280",
"icons/Icon-512.png": "99a5174e7b828a10c492776d033eb9d7",
"icons/Icon-192.png": "6c764b577b3db0f9578d70afe01d0280",
"icons/Icon-maskable-512.png": "99a5174e7b828a10c492776d033eb9d7",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
