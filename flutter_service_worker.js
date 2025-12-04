'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "dc8c6a46fddc71f9a65296cb937bc37d",
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
".git/objects/0b/cc574130afdc47bc059ab6f6be01313755cb72": "d9ef1bb70d258b92d6f79672d9b7a455",
".git/objects/0b/f17ab3dcade2336be3951b44bc09521059c407": "81ab0174bbea17c54d4a20bae384cc1f",
".git/objects/65/a59e433163bef3c595b69010fa37d7b6b0d26f": "007e927413d6f8d62deb93f6d06a1afb",
".git/objects/34/a779f77af9f3b7f643c70f596de2c5de5fdfb2": "f8480e087ca6aa15e2e4fd82c400601c",
".git/objects/34/593ed63af244fced8b6420d27869ef93f1cf29": "7346d88157591cd67dd084a66b89770b",
".git/objects/38/f180ae8d925195c39d8070d18f0d60c3e62579": "42cc2434d537a74fbddf585c6bf96553",
".git/objects/50/d7fa6e051f02b63934d213da56644447a24073": "7c6bbd3c4458a8ab7d82fbd686305ed4",
".git/objects/04/873693305decca22e8674238a55847732e9b87": "34fc0d2af8b06928bd828bc16fba2f74",
".git/objects/db/66ca53375171daaccde1b45d802343fa060d08": "f467203f3e0affb4b667fefe374301d9",
".git/objects/b9/38fece1ca7ab31e6fc82e5f2716bf7d68882c2": "4fb66a19527dba4818c21f6b5ad47383",
".git/objects/d4/08aa8a50f17c113558bc1ce6d45baffea3fb9c": "8eb786b7306239bccb7401172be30ffe",
".git/objects/9f/3d30c1bb7dda42295386a79f2a21e4ce43af2e": "032c2b8c27fefd255f9910100ae7a697",
".git/objects/9f/fbf0ba81700030d64467105abb79431c0f523b": "467df5247aee412b896db1e9163e868b",
".git/objects/47/9fa0760aa836718b1880895c0404c7db33eb52": "c0b6b88f58474aabb886479f4b16753e",
".git/objects/06/2cf7524f41260424216384c3ecf7d55c8a853d": "85598a2e9a13a98980c4a92535bdb531",
".git/objects/94/e50a59a6084c5bd93c57e6b142209c27ab9c62": "2d05cfbb3c83f132c7eb8801f63e5d28",
".git/objects/94/548c16859849a852f10e6f7831e7ca5f56e0a8": "a7d34456e87a7d843b191976cf68bdbd",
".git/objects/75/9891492eaff34bb64f913856a5c6102e10e415": "732f7ea04c5169bc74d3706f00567425",
".git/objects/90/daa0985f6e8309d8cef3b91b65cd39cb332d46": "5e221a8545b90e8f95abc543a09e4e71",
".git/objects/79/a29e3df7764740056aaf087160b6e117385d34": "d1ea475eac20ea29a45b722e587ac9eb",
".git/objects/2d/f4d74dbc23417bd6d56b6919816cdda04ed70c": "ac912fc2f750eb8fdedd5c977faa7cab",
".git/objects/fe/e2395d3aa876a3729dca03fa0cc336fcdcd092": "830f2bf6cf39b2c7e58a4ac051162cec",
".git/objects/5e/f87cc9519f034ad23f100d8d28fec522403ab1": "c91ca8e1ace1c5229f1c5684543cdec1",
".git/objects/96/00db052ca229da9b42780c1a9565e83bf9b5ad": "c862cf6c45af7ff7b05335cf04815190",
".git/objects/f2/f4b7b25240b740eb56ecde1ab49bcd5b9c46f5": "30b338dc007bfb745a5853d33bec2c11",
".git/objects/66/8e93f6e04a952237f02ead8c2c7fb3c6e80759": "ad628be70141df44642239bee9f51e02",
".git/objects/d7/655e873aa78ca0254c11d4f37d824755fc0227": "5e0f39685506a1802b5a1b177a96b517",
".git/objects/bf/776961fbf036ea1b79ce9f3d1594d51c00fddd": "42791d62ed2678eeae1a95a754749054",
".git/objects/a7/8cd90e0d62c00fff64271a33a5bd1f5cf2704f": "5c096da8469fb4b06d43e8016116fac0",
".git/objects/a7/cfb67a96590c1c3ac87bf0d64821e941e6a4c4": "e65120a314e47e501a00bc0c2b39dabe",
".git/objects/a7/0fbc0504de1d5529a6658957b4823ceed98e58": "1408b35611630ecb4abeaafb93aef9b4",
".git/objects/pack/pack-06bb1ee7abeff0bc16703bf94ece74c5d1b8ebd9.idx": "1904d86fa81cc71388d26b76cfd67da1",
".git/objects/pack/pack-06bb1ee7abeff0bc16703bf94ece74c5d1b8ebd9.pack": "1017e3bfdb66615a7d5d0facbf7a4460",
".git/objects/pack/pack-06bb1ee7abeff0bc16703bf94ece74c5d1b8ebd9.rev": "ae5fc4215fdeb42b303c750e724d62ef",
".git/objects/ce/7de74e2fc64b44e8e805ab9db241f02565de94": "523237650c6e3896be6f0466f4340aa0",
".git/objects/ab/2e80582890472fc7e3ee7906af262bd558b7ae": "e2f5f7153b1d64dd4e2465a6ad103a71",
".git/objects/bc/6fa484e2409d8845fb16e0b4d7d62e60713840": "bf0912248ba665c7dc90928914d96570",
".git/objects/bc/a2cacc926c973e5ee40301d3667b5e70ebbadd": "2cf1132e210af1a300be511f901895a1",
".git/objects/c9/25d4d747f78a82d791daec18a39445614b0c84": "1ed4cc9fd11e5f08a8bf3faf3e230ece",
".git/objects/e3/56fb0ab9921f56a164e4be7f134069cc6ce26b": "9fe1bdcc08239352f745c4eb9a94a35f",
".git/objects/57/e6d011495231c93a2378ee27df27ca23381da7": "cb062f9d3bd5f961571d30bd1d56f856",
".git/objects/a4/544c458041b6a16b8edb1d7a8e5cc2ab03514b": "075e18af1980c8d643f0337975fb9654",
".git/objects/0d/b3c708731f76ae930841280193264119df5d1b": "55e69aaef660aa809141c658782c02f4",
".git/objects/0d/9fd4799b51178871266f23ebf0954330326575": "091ee52424d3006d0733d9e09b44fbf6",
".git/objects/b5/5192618378ca055164d4b9b3925f1a39ec5c98": "e9552271991b17e6f10658dd4a9c8c2d",
".git/objects/70/febfeac1444329257ab4c85489bcccf895a0ff": "36bb8658db87d73602e99f63a528f5bb",
".git/objects/e2/cd1a28bb594e2a3e0dc732685e0be986319a1d": "f8fd067aeb04f4dc85ad509cacf2218b",
".git/objects/e2/821d244a3e4ed308d0ad05d225729564217e56": "ed467b1efd4ea5b19165af513689c96a",
".git/objects/fd/22134bfb14be68ba791afbf0778e161b67857d": "343e190c88728ca5050ea83c5043a8e6",
".git/objects/78/b9a61f3f822803c92fdc5a29037daaeeb9ccfb": "1f9d3187649b19b0806b04d3476f93af",
".git/objects/0a/0964cc013586ccec393b81e84b664365971dbe": "909c0d0b1fc321114383816d25bed1b2",
".git/objects/0f/373fd2b115980e97e97646d80ed417f464c557": "8122cf185159f985492442898657bab2",
".git/objects/6a/f04c774414c38ae88f620fe0f93058336d7227": "a94c2bf4a1816f2fc334556ddf2f0f9a",
".git/objects/74/e39592f4cc478ab17a26d635392fef0734e710": "5fefacc05d33c79ccb1fa742e3da7b0a",
".git/objects/86/a8a7ffe36b3510873e09688721d9467d6b6b46": "a5b9bcd82094a0f11e72cf9977ff454a",
".git/objects/3f/d2aed429e9a13a91d89afc1ee5e7fefaf3f45d": "a18eaaf3d5bca18d8bea1fceff8a54e6",
".git/objects/ef/28c6b016909ab9fa4f98c090043233fcbd6351": "d29cfb7fd86f8f4aa3f697463356f41d",
".git/objects/ef/5a17388624688faab83d0575aa6f275a1b2bac": "fff89e12c479859dd968ecbd8e64e41f",
".git/objects/92/8d62b8c6791c6d6a3c33fb0f98b40ef2fb5188": "b66a0de1af4f7005178c3fdbf62d6430",
".git/objects/49/988767bcacf0a8be842201876a3627228114bc": "41830584b31f811fcadf7e0907b59014",
".git/objects/49/bb117778e002f504d0cb93f47b88b4e1a56a6d": "73b245d2058d5e52ba3289618aaf1f61",
".git/objects/88/e94ed2bc3ca0d48e6b3dd9d054df89daef74a6": "b2cfbf140d1631031b1203bb68b8ec19",
".git/objects/ba/468daa1b9cec98c954b218bdd174aefbae123f": "085525ee9b1721e51c95735ee8180f6d",
".git/objects/41/3d6247bddc795e5f05d0ee15e2e5f6602b4346": "5bea168dfd3fa8ad37cd5403be2ce4d0",
".git/objects/71/2a2ad5ef6170680cc9629efa7e433309597de9": "83d1024342a74592391596245799d4d6",
".git/objects/43/fba25221ad9cfee8a8cf4d4dcfdd57e2084b41": "224cbba01e84ee689a8640118d909c32",
".git/objects/48/7fd871bc74755b8ab0509c31a71bb75c3330a0": "7290081f7fe3923affce82e71cd0a149",
".git/objects/7a/3f9fe28209a8bf99ba281263483f8dbda3fd3c": "ccf03e33923c1fd2bf00288b761ced28",
".git/objects/d0/e242253f15520f423fe7add26056bbd8351f8c": "ee0aa4d70777bddd9ddeb8cf130eba76",
".git/objects/c5/4e089ab62635dec374055feb84b78c70235f8d": "aaa3a4facaa6059f691601306ef4c801",
".git/objects/c5/62ef57af839e5a17e6ab17703f75660c1c0e63": "451161b7e4a038970d0a181050829606",
".git/objects/44/54befe45ef6b82034f89ce3b5b9a0557054819": "6f3e47a04b678f99791b593e02cbee40",
".git/objects/02/4e740b4f414e125e2f540e2e9220d3c961a717": "7f0e9ccb5fa4eb6b0e149dc965f80bea",
".git/objects/1a/ac5bcfe0ec01184269085f6697601bee478d7d": "da06a0e78c743988e64e05387e4d835e",
".git/objects/3b/b03d446f648f3e98996aeab532edd5abd0d0cc": "8373b4cf3975bda8916063b939cf646b",
".git/objects/3b/f77a7157f5bd69c8ddea383699fbef64e6eee9": "7e86936b235e538b2129260b7a7a16e3",
".git/objects/7f/a4b39654ca05b007e35650a3b0945d7427234a": "dd05ddfd6c56ea55e399378b75e9ee65",
".git/objects/14/c5bfaf67ffcbd6a732319d546145139f041fd3": "fa26349bd98125d77bcde3b201a82bd6",
".git/objects/14/28ed8203a2ce30ead87e56b322ffe455e28139": "3e3bb0dc95c7b37bdff3bc90e56c264e",
".git/objects/01/3a7a150eccf335e134d4ac74bc6cbde2969542": "51b6cc9b28d940188bcdbab034d817f7",
".git/objects/84/7a5cbc71de4b0aa6358ccfaaeed2c6a83f5974": "30f278c01451dbd281eeb38dc96273a3",
".git/objects/b2/9433298b26a4da17c05d74c1e2ca92e396adbc": "b8f77532629870e72b858f0dc1c68f6d",
".git/objects/cc/2e88217996f2cefd3f197e6978f9def398fc00": "082764d98f8bf415778225907599a489",
".git/objects/ee/c9384ec0db69c8bca2981cee8b2fe1a4cb66f8": "4392e7485b8f162782034d264b0add75",
".git/objects/ee/606bb260f67ec746c056bc8d510c84c4c4ad99": "7a2cbdeb6e384b428871ad94e2c97b93",
".git/objects/42/2752cf01711b02af82031360a94cf7b1b254d4": "59e1e2d00decb8da2a1c89880f122437",
".git/objects/da/285b2a47e0b44894376822b5f139611a60cd47": "3d1f5e33b14c39c8af0a9e41cced4c92",
".git/objects/f6/1f9a0a817a4c38da4cfca830612c41285b5a49": "1f12958a6b370ffdb888e293dc048d33",
".git/objects/c6/b43f6da51968e0e7f8086f29ff0006e43d001c": "1ddcec03186393902f421f6bf5d2e798",
".git/objects/c6/e75680955d2c3e0e19f21c661378f9ea95dff3": "f083e5055ef591bf3a61f0c303d993ff",
".git/objects/c6/d67884230190e69721841bb3bc251d50b4072e": "cceaf8a9717c629f38dd89fcb6de3b65",
".git/objects/91/717f30c46b16d53234355257deb336fbc1b03d": "a4011729d52b2ebc25b1b455affb2da6",
".git/objects/b1/7db8eefd81047bb2f4d272eed432a9c84900dd": "ef04000abdbe70dfc3aae0377b94fe2b",
".git/objects/27/b21a85eeb0b2a3464215076f1418a729f95cf8": "dfac83bd2a692816b1dd76f7e8b4f4c2",
".git/objects/0c/9be1dd229c4efaf46beb54ddae4ff0c5217468": "cc18a22acb68a72078e353e9063fd0c1",
".git/objects/99/7d60f720bb54f0694d5e3b6d9ba52ac2e82e0e": "36f09cd12919888fab028a9fc6e546da",
".git/objects/31/0c8f4cceac08abf8df05f566d7f5a4706791ef": "24a97f8e6fd3899291235eba771060c2",
".git/objects/eb/eb7924025e2bf671be6ce39f9ce9c54ebc513d": "de06d8bd3be66e8d375071b3cca9819e",
".git/objects/c1/cc1e1b847bb207572ef3288fc57fc60556c1d9": "a27797b172ae69d34a88ef032a9268d2",
".git/objects/c1/18cfe8c4742902868c97fc5f3764b1ccda23c5": "0b32587e34704b451223d353330e1296",
".git/objects/37/14e61c575919cf63db211da272b536bb20b6ba": "af000d0fdde161e3a5d6c87fd46b3398",
".git/objects/ea/0e596b6eee632969eb23794773a703aaecfee5": "33c20b6f09648658f52f1f91cb2167ee",
".git/objects/c7/96194659c7f217f65eb4252c30b0141aab7983": "42d33015bbb239abded636f1811512ce",
".git/objects/c7/400a863253e5416eb1ca8035ac6a9bbd14c29e": "71a6dc1d5fe3af6c0e706b30f0446fee",
".git/objects/f3/c2beac69ddfd2634d404e2026e08ab8f2ba460": "d38e9eb6282493e72fb73b6056142c99",
".git/objects/f5/ac3a5ce1de5f67a969dae776de6a64759e37ea": "1e90544ebd8999ba06803dd2634c9883",
".git/objects/f5/42acc092bc930500c296fe7a35e2c6515fd0b8": "f272bb7c558e14df9d884932a6ce035b",
".git/objects/a8/8bac03c6f13299d651226593c86a2a37a5adb9": "71937d2bd78c1109d961a4a95dfd4f8c",
".git/logs/refs/remotes/origin/gh-pages": "0b871abdb134e18ef19bed222676573c",
".git/logs/refs/remotes/origin/HEAD": "7ad5c179ae317eb33ae5656b7444ade7",
".git/logs/refs/heads/gh-pages": "eaf60acb6c8bd107cb5bc7e2f23d65b7",
".git/logs/HEAD": "eaf60acb6c8bd107cb5bc7e2f23d65b7",
".git/refs/remotes/origin/gh-pages": "d3a7b23a75143037d37c2efac7713cec",
".git/refs/remotes/origin/HEAD": "b501512a260537c5e52df65d2a034251",
".git/refs/heads/gh-pages": "d3a7b23a75143037d37c2efac7713cec",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "f01a183f376268d7e77a127f68c55dac",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/index": "70915411c8e0272db019a08b395c9db8",
".git/packed-refs": "d1e9bd3280e9bc1f30c1dc2396296da5",
"manifest.json": "1222249d7a8e8151b8d194f04043f723",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"index.html": "7fdf2b248e7f9f906942fb1dfb3b2348",
"/": "7fdf2b248e7f9f906942fb1dfb3b2348",
"assets/AssetManifest.bin.json": "62ec2ae0062aec7c096981e02da5452f",
"assets/AssetManifest.bin": "9f79a4a43822b048add3242494e49054",
"assets/FontManifest.json": "cc069cdd95cc3a7bc228372f85e900cc",
"assets/assets/page05/kakaopay.png": "c859e3f09226090af7035fbc673bd01f",
"assets/assets/page05/UI_Page05_QR.png": "1faac0a729545148cf8815c842ab565e",
"assets/assets/page05/QR.svg": "6e5ad21b61513d6a785b7ae350cd32e7",
"assets/assets/page05/QR.png": "12bdf14903a904a3e44d6d433c4d3194",
"assets/assets/data/content_zh_CN.json": "c4f567a6c13c974c7dfdc36bcfb16584",
"assets/assets/data/content_en_US.json": "907c32569ea13a58672959747ad14d84",
"assets/assets/data/content_ja_JP.json": "bfb4d83af6dc0d388ecaa8fe5dc544ba",
"assets/assets/data/content_zh_TW.json": "383d4aea1957f6afbc7ee5f5fd804f6a",
"assets/assets/data/content_ko_KR.json": "19b93a1395b1e639d860829acb435f3d",
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
"assets/assets/page03/map.jpg": "df6d2198cb2c7992716bb6ec0cf2aeb6",
"assets/assets/page03/UI_Page03_PopUp_4.png": "b11abc999c13686620e71bc567d2a047",
"assets/assets/page03/UI_Page03_PopUp_11.png": "5c007b7edca5fddd12c852901a521313",
"assets/assets/page03/UI_Page03_PopUp_13.png": "4ef3689476ea8b12f59e5a1b68887b04",
"assets/assets/page03/map-mobile.jpg": "126e464ad46a07b21545ded4f16e2795",
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
"assets/assets/page03/map-mobile.webp": "db5e1e418dfd4cddcc34cc0739be7359",
"assets/assets/page03/map.webp": "8fa2a4d40aef1ff107b29c86cf04d3a0",
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
"assets/fonts/MaterialIcons-Regular.otf": "3829368e78d0ac4b3d40428ffdcd3899",
"assets/NOTICES": "92bff88c54e9554270253d2c358de122",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"version.json": "8770b3d564f3bdf408ba630689dea918",
"main.dart.js": "df65515e57fdbfad7dc26352cb4d11e0",
"favicon.png": "29cce6f8664bbc848dd798aa56485b59",
"flutter_bootstrap.js": "d49352d8b4f5b9c7588cd012d06d1f5c",
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
