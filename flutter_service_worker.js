'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "3a3ab7cf9600f245d0bfdd9d5d942d10",
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
".git/objects/16/412a9cec5fc85b3b6a7f207514cadc81f06409": "62264e63c6efbdf0056b2cdcbf15ebfa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/e0/a675dc8d05dd6a221794ab136337fd8ab8e9a9": "80e38915c674480b1b7e7b04150af2d5",
".git/objects/85/f425a1732cce1ac5733037b959a918ba5eb3f3": "b03e61782171c2e4d19cd78efdf7d8dc",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/65/ff41ea77a5aa61c1398c3e4bf08e7ac6ba6802": "a6fee17e1f45690226ea30ebbc0b4867",
".git/objects/34/797ef0fa4ca17b40d4d9742373c3179c671c43": "f3fde94fddcee86a5e044248451da445",
".git/objects/38/99e8e40f4d6a6f6313514ebdd61f390fd652d0": "42cb46d195837b8dccd4609002a76689",
".git/objects/b3/54b9942401fd234aca955b9a2e817433fbe215": "ae1285168acbf017f8afe5505a9c5434",
".git/objects/00/8b36a7b0e8b36938c079557e26fc4598b48ef1": "76efb4d99403e1ef60a37e7a5f592a3c",
".git/objects/77/d536e3a0444433c3fc3404fd58599bc943d30b": "ef6d18d7c986070b2536ced67f66c06b",
".git/objects/77/2513825987ff6cf80fc1148ee0f586f6f500f4": "fdaf933b2be3b2fe16c20137196a5325",
".git/objects/5b/80583d82dda35a647e74bed5ef73dff698d22a": "26217c6a0bdcc67dd56124c0344a34ec",
".git/objects/5b/40ea0af7506c92afd64d354109b8972b7e45ef": "b34d99819e3efbc0673c81201f63346a",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/72/9f7ab9ae061df81a428cc1ee87944b1e0ddd86": "8fef44185d982378aa4f48a3ec4b86fc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/6d/eb31d45f90f3df88d978ea873ddf2853ce30eb": "938197b5a8293ea742be342c35a8eab5",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ad/ff7137e55eadc0d62e546ebdc3034b298d5a70": "c97385aa117b48dca45d9aaf88c64282",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/13/b7946306c913d5a4a052143874e20550d66996": "dd7d798de7277c0826fd4b6e62d26a64",
".git/objects/75/6c5326807887105a69812a44e9f1a949cf9a7b": "0b166b7775cc87d36d956b115470a2fd",
".git/objects/90/641dc5b6548698979375d6dba635e2ba21c054": "66c97137bf2641afb06cfb8c4d356ddd",
".git/objects/e8/981276a9319f1464c8ddfed77824774ec1e230": "39430a7bfe77d359cae9f3c7530dab1f",
".git/objects/e8/2a8b9268bb608a792cc4c07920e90f09afc6a4": "8dc551bc82e01c0db3bd29978d2f4110",
".git/objects/4b/d452b285a7fdd4abe9c446e8db4144801a5abb": "de24c27a389f1bf1c970cdfe19132b4a",
".git/objects/4b/61b6bdc28ced275942f642878358a7eac9e6d1": "cc3120b8b1536189a87b305762f438be",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/1047ba7d4fe52cc90d18ac43177429a669ccae": "9ba99dad6f8d7e0533a9144545bbc0c0",
".git/objects/80/427e659f0470fbdda6848d1ac9e37c6e749f15": "e80428d4d5dcc5735c2f59fa8664cf3a",
".git/objects/80/6b3b6b59f40fdd095eab485e4b5062d4b587bb": "1980841e40c46106237d1b118703410a",
".git/objects/96/f3ef03c0274545417f384d115699d7315633dc": "b67af189a95bf0406d6994266aa728f1",
".git/objects/35/207ec5b633b1ba7b113a895cceba68e3125b8d": "4ff41f73686064abe03605ed94d95b77",
".git/objects/35/64ba8cf0a1f78ce4f62c2277f5d46fb06a780f": "dd6aeb36728a63af405f080ddde68e63",
".git/objects/bd/b4e586728fa40388fbe7d5a827f2f859594fd3": "764d179ac9851adde7b2abf1b671e033",
".git/objects/45/895b3ad8d808e001b4c71f43433c5f204f1054": "e404fe0d7100ac21bc59c3ce19c3425c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/03/49d354428c585044e84e4b34b2d44163162a60": "6c5fa4e2a56c0368733b1fce2b8a0156",
".git/objects/29/4a3bb10bcff78bcb1ad3add0170a4e31542c41": "610a34e2f2262494f3b3eaea22e3ef28",
".git/objects/8e/ba4cefaabc566d12091a5a2db54529a3fd0781": "06df3c82f5704090de52c5477503e8d9",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/9b/8581ef1e3869fa83b1873e84f7b0d186fa8aad": "d29de5307182c9ef637af7fef8731a19",
".git/objects/81/39801023f0d338453ba18b1c7ee34b14601977": "8150e8a031be216c5569b62c32d4a6e3",
".git/objects/26/45d500bead41eb5010434cd3d08a54a25d4f81": "2a4fdc3181eca8915f41b44762654768",
".git/objects/26/132a776c49145e9ceb8ed74aace7c2d3bd1dce": "7d859a54f140561a8435465c67c23af0",
".git/objects/1d/252b499385880dc8814225a72bcf57062d3e2d": "38e93db36c6b8b87a33fbf65fd8fa017",
".git/objects/58/87eff0188c128d6e9c00e071a6b4a89b757103": "c03d0262248659afdd567cc6497f6b21",
".git/objects/a7/d3a22dc096d666c7c9bda8cb11a3052f4e2fe8": "af1433829b4e47391cff91a3ada984d6",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6f/9f38a5a24354d1fe29453f4b9fc2e685cc01fc": "5b8079e455cd55385a4049763d2ab61b",
".git/objects/10/ec356ef65063e02fca404c91e32c2203295442": "eb22e3fd8b521f921e5717183d011e30",
".git/objects/87/be7392dc5f201954912144981e9a6e656ab524": "6b6883e92571a3ca28ab051c882c71d5",
".git/objects/68/fd2817b8a733c9301ac682211aba3454410919": "cdf7f7ebc356ad2b0d7fe268d617067a",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/bc/a86fbb47a38363426be2e825b0a67f36985743": "910626b8bcaf9c025c0d56ec5acc5d12",
".git/objects/bc/b65755237379cb3abf7d0e21003d3ccd3ea49f": "d27d6b4fd0770160a5b8ef12ab7f4b45",
".git/objects/39/0d42f1639493b7a4d2a427bb7f5d58af1033ce": "98800fe946697a8b0183c4c81299abae",
".git/objects/c9/f8b13afb78813c99b9f030513b8c75fa021b14": "7b7d5c73b4fb5f1688d59a3de2d6ed55",
".git/objects/c2/f311fe01ed628f38fef5fffaa0728f5c49384e": "f5490884fc342269e053ca3d00cd753a",
".git/objects/e3/4c5a2e5ff91d0c547be9eb62f293396e57825f": "95989fca47d61b0c42006469886d6e41",
".git/objects/ac/824b362b6a49d6060a6cb0ced8f20278a2eb29": "bc788ad275fb3889a1c58e6b81ef7db0",
".git/objects/4e/e4155e3f95365a2abeb0f9b113bb9ee16b6e5e": "ddd0f63f48648b5198e5208910b932ed",
".git/objects/83/e3d47895a334e226a9d2f7e16c5cba1027f8d1": "fac664fe28782e3442058fd59bf21e89",
".git/objects/2f/def1499ccf91e2349a6a7d742b42a6a17bc83d": "490d2c7c0cad616abaf5246046ce6660",
".git/objects/70/72adda47b79d726c12f83af97de85de921c821": "9ef1d64dc02fe83feeb935b4c9f59d44",
".git/objects/64/e4c95723a198d479837591441325ad131a58eb": "a1c23fe7e7c6b5c86bb6983bea44ba31",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/fd/6cedf0a1ae0cf288145aeb376342d4aab8b8ba": "f87c4c8c8ef65620c0f2d06b8430147f",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/a258699c214a05e5b22af46983d305ad81753f": "997d341e0ae8ef3d0c10f1bcd9b13ef6",
".git/objects/8b/44c9ea206a1adf6c3ca8909600863305ae0247": "72c33419de73757a68f2c53a848341fd",
".git/objects/9d/9e24522e7e9b2c93a0421443840824b59affd4": "2d7e49f44a7741f5ea90948f454b6d3c",
".git/objects/78/52af2e52ac4764a02343a9b152273040b51425": "ccc588783ea3c2d2f99f12ee3925ca4f",
".git/objects/f0/de4224a8d954d69c525fc04539955236af362d": "e2c79665e4b5f1b8361de8855513e1d9",
".git/objects/a2/4eb4fe9cf64e0c10f0d27d6964304882796495": "d2a2a14ace428365af52bab6de21c996",
".git/objects/86/a3dc62d599503ed63541a2966597e26870ef4b": "dccac24a9403fc929d68d3bc2b433c09",
".git/objects/56/32cf1ee6a8387a3a67a66cba23454d09584634": "c556eca29195328874c4bb9d898858d7",
".git/objects/07/4dfe5e80955122962b44f8219c4fc318c78ffa": "be81c0f43b1cda48020ff75dcdbbda5b",
".git/objects/07/b1b09cf31dbdeb14df4f066fc75f8d064db6e0": "5a36b1315bbee55368073c3634466f8a",
".git/objects/2a/48518db210b879022c109f7bebd25a9cf97d8e": "17be57ad62e5d2df203773848e8db56e",
".git/objects/c0/5e9aceed8c41f8596a0209913c4251fb361a0c": "3dc85346b6b77ca0668e50da06a69ed4",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/af95971524e2775614744c98d935e3b60dbf7c": "6fc23cbc6cfca1d7e2448fd492f3674a",
".git/objects/92/63324ea9776aad3cbebdcccb0d9ab690c1efbd": "7c3fa0005fd26128abac5ea9f2003e44",
".git/objects/92/5332767a90c77b1c14d70b242994a208b4a3a2": "ef4f87ac508c4b2217652142ab210da2",
".git/objects/e7/8dd2dfddb441c287ba474801691bc27fecc3f3": "189855472ca8ee4395269a97df8d6fcd",
".git/objects/e7/427ad2f3467cb062204aaf311dcbd16552c7ce": "1d8d7a0d7ce4a15aaa4701b70d26ba1b",
".git/objects/93/2b55f8fb2c4bb9bed608f2ab8d53c22e9d2653": "0797af76775c873180fe37ea3ec0ef10",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d5/05d1d27bc2f964ba93249ec790880d7f1c6980": "dce59f2949ed66ea7a5e86a82107dca8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/ba/f9fb6ce3adb5d719cc0c6c05720373d546f73e": "8f26744cd5f48ac69323bab220cb89a6",
".git/objects/ba/7fb9c1603596dc16eb957c32dacf12b55bee3f": "a27787f74737b3f700bdfc6974e3e181",
".git/objects/ba/6725f7dba3584e74905098fba870dc7d10d21f": "a088f2e22a1fdaecfff4a00df291cce7",
".git/objects/d1/89763b99980c03402fc505df5c22e95bb7d008": "ed2a2a267414932e14f3037163f38965",
".git/objects/d1/a72ac1abd8b7583db2aef22143a2df11b78307": "eb3bab0b16fac13ec0e9ea975513122f",
".git/objects/41/d6ede526d888c822702795dfd18080c8df52d3": "b2c4bdc8ff8ee7c0da9c94b9dd386181",
".git/objects/43/7c56bd0e199991d0017a409b7e6e878967d16f": "6bb752326e383d9bb6ff685372157452",
".git/objects/7a/6855684788cb30d605f79d7383b8f179374842": "eb234c4325297e280f09f836982348f4",
".git/objects/7a/90e16febf6a57f781c3615cc3707a3a3b77dc7": "3c5930278bf8d54cd9056824c7d0187f",
".git/objects/b4/a20951896a98935c435e529b84eded21b33f70": "a4a628c94bcb8bd231e82889fb5cf28f",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/c5/d9bfb86e6b3fb697644abfcf12b8e13231b536": "94c595b2b4b9e0737abef48fbd2e9a94",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a9/1f81ce287bb8e5ed530edc99b8fa7968e982ab": "571fda48449d46f52c57cba4bf1facd4",
".git/objects/a9/51132207e15b23a2d30ef6ab8f1dc1dddd7f8d": "df9fdde0b355c36e2640635911669738",
".git/objects/7f/7b6d75156f3b2ec7847ed2ecca1aff58259250": "fd255bb6628947ab3df1116e9d66669c",
".git/objects/d3/17f81ee416862117b621d006b20be6828d3c76": "2c66cd19977bb0eac522a81bd3bd4537",
".git/objects/c3/59fd3e08a4bed15faa023f22bfbbbdaee143f4": "777103b20850426473d6e8845121b1d9",
".git/objects/fa/d2da29a89f58f8aa67def42735911bafe24a10": "22724ea7c8053d76af9443104e26eacb",
".git/objects/8c/fa47ed00586085b58bd24ae96ce91dcac80599": "cfe44d3faf7916ff32a32e6dc9f180d8",
".git/objects/84/3ccbef8b52412685cf65edadde2a716f4b54fe": "8620c62614ff7eef9e7379926f7b974a",
".git/objects/b2/8a20cd975684c6abf7a5231c14c9899ef9ca24": "0ed2be1d6ac3edcf53a30a987dcf58a3",
".git/objects/b2/2452c8de5bea0eed07c53c7aaf46adea1327ac": "619999f41f998c58a7ea1fc21123f6b0",
".git/objects/b2/6467e341a525a926a709e082a43d908a4703b6": "6d77e9e36438155e202bfd74397517a8",
".git/objects/cc/2a2a47df4fc496683eb6975a54be17c0206928": "33a8d3288948f5eb893a97bf0d3d5bb6",
".git/objects/22/d030978811095ee317d963c5de0708b3904fe0": "e1c43a8b59abdb103e0411cb065e11b8",
".git/objects/42/63be7616a05ca5d838ec5743e8f69157a1b990": "3da80dcf72eef98b48cb7580e31d2391",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/7e/5980979987b103706e8525b44bee71b31f1267": "c0b0aea10e163125621c37fb711c0523",
".git/objects/ec/5f92d1bc536be703dea072602cc85532ce2fad": "c548fed4d378ce0a63394ab4cd2e3fc2",
".git/objects/a6/e8eece67394cc2af18db2f57d2abb4110b8850": "664553f91194bad11c66e84880b33e1e",
".git/objects/12/dbdef64d03964930ba4d9dc501abd412ced6d9": "ee93cc6cdf1d55db7015af8f409e6369",
".git/objects/eb/521b96fe575cefcad961f6d2e9f30243861f05": "471d1a61c61740e09b5af01503e77672",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c1/20350318475e088eb26a6d6c4f13053ee2547f": "b5778b37cd9c0340253546e155b5ae56",
".git/objects/36/d08d44b70e25df775fdbd6b30236db7e40385c": "37037f6d6e4701836568a577ec448b16",
".git/objects/25/9517f882c39160027a41475bbfe71252d96a13": "105fe2b6c06098bfab07e039d42a86e3",
".git/objects/37/ed3ae245fda482d22c2977c06402e10a98a201": "26eea6854c890c91861c4dcbbde6d979",
".git/objects/d8/4de9ff6bf4e44e051fc284040c251d58007825": "e2e61d4214a20e0c0d32bce8913bea61",
".git/objects/ea/e4965741838d57fdd37f159447f591992d7f33": "06f42d0f81f51727962f743d6fd9721c",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/df00522c9328776e52477990cf0cb3451e9ee2": "8ad5550ac01aec476eafa4479923823d",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/05/9b96ba0e847cf7084bae998b54576dd14a721a": "9babb4ff804a98b4322a46a65e88b2c4",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/4a/4a471fc428c7be5e1aacd505330970925ea382": "cf37f4094b5b40e942b6d5d78d4de793",
".git/objects/4a/bce2caa4a6f37389382da5a86145c66250e4ff": "afa52a67fc8299ea8f5d76a20be5afc3",
".git/logs/refs/remotes/origin/gh-pages": "fcea2878a8c5b34af75dcdd56c2150e6",
".git/logs/refs/heads/gh-pages": "89235f07b60ea5a574c3d79d60c55ac6",
".git/logs/HEAD": "89235f07b60ea5a574c3d79d60c55ac6",
".git/refs/remotes/origin/gh-pages": "7efedb8420869a26babb35ee523ee854",
".git/refs/heads/gh-pages": "7efedb8420869a26babb35ee523ee854",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "cea6d72ab909a421365533416c2ccebf",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/index": "fabd9d50bc48e982102bc5e227348bc3",
"manifest.json": "98b6f6426f6a99211c74014cc4745891",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"index.html": "36ff31b9c90669514290960a5dbc6424",
"/": "36ff31b9c90669514290960a5dbc6424",
"assets/AssetManifest.bin.json": "73d38bbb3930723a9ed6b800319ce677",
"assets/AssetManifest.bin": "a4e0f784d2bed2c767a93f60b9c10303",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/page05/UI_Page05_QR.png": "1faac0a729545148cf8815c842ab565e",
"assets/assets/page01/UI_Page01_5.png": "0cff241490af554225f2554943084e05",
"assets/assets/page01/UI_Page01_2.png": "44cf034280ba2cf2b847c9a4eb509a6b",
"assets/assets/page01/UI_Page01_1.png": "c83ae5825171887229238dcb75be1662",
"assets/assets/page01/UI_Page01_4.png": "14b862539fa7555d02dfaf8f4035523c",
"assets/assets/page01/UI_Page01_6.png": "e8ab0ce8455f57bf3cdf0a185cc50044",
"assets/assets/page01/UI_Page01_7.png": "752d38253aca12a9d6e4adc63bdf1c32",
"assets/assets/page01/UI_Page01_3.png": "783d61b99ab30ee2350bdc262f0d46bd",
"assets/assets/page02/UI_Page02_6.png": "c91c25f41a3bf3adf208dd108004d5c7",
"assets/assets/page02/UI_Page02_3.png": "e1f0b00457fff44b8a438ba61c0f9378",
"assets/assets/page02/UI_Page02_1.png": "029e2137415877da32fbd60e0a6dfb1c",
"assets/assets/page02/UI_Page02_7.png": "4332241aef35b045f08e11b2db91b788",
"assets/assets/page02/UI_Page02_5.png": "c1f1645761e9f161bfa416976fbfae58",
"assets/assets/page02/UI_Page02_4.png": "eb3787347860c6a5a2cdc38c9bfa4f8d",
"assets/assets/page02/UI_Page02_2.png": "c9bc6307e452bad61433e42a703a7db4",
"assets/assets/bg/ScreenSaver_BG_07.jpg": "26e2fe37208bb32041f87cbdd6eaeaff",
"assets/assets/bg/Work_1080x1920_002_Home_08.jpg": "20c092a70c356facc4d60d6d3f030ad2",
"assets/assets/bg/ScreenSaver_BG_17.jpg": "ae0960dee7c536e3c89ae4054f0a0167",
"assets/assets/bg/Final_TouchIcon.png": "884ff30ecf06b053945154f7f2ca8503",
"assets/assets/bg/ScreenSaver_BG_06.jpg": "492af5c8c28e663aa1f8cde207fde1f5",
"assets/assets/bg/ScreenSaver_BG_05.jpg": "50361622c1dd587e747023557c8a9df6",
"assets/assets/bg/Work_1080x1920_002_Home_10.jpg": "ab592a272cb4752efb534b32605f839e",
"assets/assets/bg/Work_1080x1920_002_Home_01.jpg": "b4d91bddb7f53ec54cb5e321f4f1faed",
"assets/assets/bg/Work_1080x1920_002_Home_06.jpg": "a6a2f9990815c3cd43b10dcaba6fdfe2",
"assets/assets/bg/Work_1080x1920_002_Home_12.jpg": "039c372a3fa370ae0acbbfba60fab8bf",
"assets/assets/bg/Work_1080x1920_002_Home_07.jpg": "7691272ac57b01bc6ed3ed9df6fcc386",
"assets/assets/bg/Work_1080x1920_002_Home_02.jpg": "8739cba5a33db29fea41c184d02b9fe2",
"assets/assets/bg/Work_1080x1920_002_Home_03.jpg": "d9fbd0c972a7705c7c56671e29c5add2",
"assets/assets/bg/ScreenSaver_BG_02.jpg": "072eb0c16987b78ea7ea68ec8d05d186",
"assets/assets/bg/ScreenSaver_BG_11.jpg": "a7f6ff7a1313714c31db11222512dada",
"assets/assets/bg/ScreenSaver_BG_14.jpg": "87062c9534010d245bf4214277219ce7",
"assets/assets/bg/ScreenSaver_BG_16.jpg": "5fc59e7b7e68ea3621b215eb94c9f7d4",
"assets/assets/bg/ScreenSaver_BG_13.jpg": "a5218de874350106073e7c20870223d5",
"assets/assets/bg/Work_1080x1920_002_Home_14.jpg": "255bc5f0a077654ef738cdeccb14d2d7",
"assets/assets/bg/ScreenSaver_BG_09.jpg": "5efb14b433dc7312dbdbc25ba6f3c592",
"assets/assets/bg/Work_1080x1920_002_Home_15.jpg": "c537e4c70e393ba0461a20fc92802baf",
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
"assets/assets/page03/map.jpg": "a77dc9096b6786dee9fea8b46de7a2e8",
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
"assets/assets/page04/UI_Page04.png": "2ad4fcfea0bfaf5067828a01af445f60",
"assets/fonts/MaterialIcons-Regular.otf": "209e791c4aacc7020bd4e5979613e12c",
"assets/NOTICES": "6bfd14c0110f89f35df407ff909db43b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"version.json": "8770b3d564f3bdf408ba630689dea918",
"main.dart.js": "68f07831eedbb01265e5ba24ccf2429d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "03c669e906811cdc3dc771e90c5fb398",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
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
