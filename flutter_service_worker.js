'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3d380ed65a1c14788dfb6147124991ae",
".git/config": "c554b66435eba55abaf46d7be102fb2e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a6eae0cd5964b4ae6d9e1502c023d57b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "efff14dc85d40629f7f6ddd33181a8ae",
".git/logs/refs/heads/main": "f8717dd021072df4b12ae0175daa0d78",
".git/logs/refs/remotes/origin/main": "cf408657473773939727058208c796fc",
".git/objects/00/3ddd373f4eb8d3ef0295c58995974921507b2c": "cfb5334e8448cb657f066994a63c5c04",
".git/objects/03/d3c8d3747f0b6c578c5f5e51fa78032ce9efaa": "c94324b94901456afb556054a682ddda",
".git/objects/07/1c4a4d3977aeb71015eb2ff180438289bfe7ff": "3bf1d169255bfe2a9d76092ab4e9b83d",
".git/objects/09/45e89f1fafd224df3c45b30aa4403476577c59": "549e86f458af0d5cd904784d9e0cc1ce",
".git/objects/09/b40812e03059af68c16b7a9574305459f5de34": "3a164488cd8a00be4892565b508e185c",
".git/objects/0b/975a90d81bcb78387dbf89da47bc67fa8375bb": "ff32125eb3d8231b12aef02b939b97a6",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0d/a9356179130f3358cc2a472eec5539e08868d7": "a0e09765b4bb60e987f5ea866e090383",
".git/objects/0f/81c52b452307d870b7a64483286ce57144ad88": "5e5bae7b1e0b214cf8268c5dc8ff2271",
".git/objects/10/215e519a474ba79a3025d018c3aecd5e13d445": "9090876bd017f45acde8d7cc3692f7d9",
".git/objects/10/2dbab12756dd0174977a2c6eceb854ec11eab3": "ebec2dc7f2a3bfb69982e7734bd4e753",
".git/objects/10/416c513ba8e045e68fc2023d25343aca2ddf9c": "8b643ee9d746f1e27bd5eebeae639380",
".git/objects/1b/06574458be2b7462add3ef402e792dfc734e7a": "d716831a26c9ec87d8545a3faf455606",
".git/objects/1b/c69cf4096d308e90cafd7bd724505e6c59a26b": "e3bb7621b54e639a7200212f16d246ea",
".git/objects/1b/e0d67df99a3c4f28bfa79af8e75360c37ab7fc": "4634b14dd66a0d08538ae04649bbc443",
".git/objects/1d/bd5dc2837038b3e0df0cf3d9d6b265dfe04475": "78cec55d0822e4039d85164715c15595",
".git/objects/1f/db8eaa66eb11cab0545476b75529105f5b0638": "52fbde27d9a0bf5a468d163dd82d19af",
".git/objects/23/387f7526e1ef3f46033c1f0c97a75450065221": "e38abe395a8d782a8c7774935f5cbecd",
".git/objects/2b/206704cfc3bfe18c2b7bb16275a5b57402b57b": "ecf5a386c49cec4ba53408e18d3341a6",
".git/objects/2f/1eca255c57e41bbe244eabda4c136afa504f76": "7f3217a4ece4f32715142cabf6410ea4",
".git/objects/30/4d84cdd8126325c589bae5fb20afbad3858734": "88a0a29e37da582df838534b386844ac",
".git/objects/3c/bce9acfb8beb49b73eb516dcc7db0e87052c5b": "950cb3de8a11f600d1e614daf82db1c7",
".git/objects/3f/5f5d1d91f0d9fa0d8fbea2d115c22c65648e91": "dad584bd399beeba5bcf04fd5cc29eb6",
".git/objects/45/350eee8d3421d2570abadabc5b1654c2eae65d": "7169d012c3bc14aae9109e880cef67a4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6b6688b1585676488fd8b2a65a99cd27e1b8dc": "b3402160e31c01dfd12744e601075bf2",
".git/objects/47/28f3b7f9adc26580dbaf070bafa0aef5c3477c": "3731e2e739be4ed181211712d9bcdc4f",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4f/397a19b27876e3b91c1b41e682be8dfa77d6a5": "c866c95adf35856e8fbaeff99bae1fac",
".git/objects/50/ee8b7b27221790a3aee914e4ff29070ffa1b15": "a5fad1bd2ecb427e05b4a8fa1dee0917",
".git/objects/52/5ca1d0b210d69354d2375d974bbac58d2abce6": "fb872f79b9e9fdf1071eae1d6b1bd139",
".git/objects/53/0dd3a34084106cc6fbc95e60648f4bbca2c33c": "82946c1720d26e894b467ae6d7bef8dc",
".git/objects/58/a405d0f1e26ce3f9e02fed2a12878d7948e7ca": "d31ee48c672f0194d5e584fb524e1236",
".git/objects/59/178eb93be39849f77d562db6cc55710eb0b5bf": "07844a02e6016cc8d84af0d95fcba243",
".git/objects/62/e84fdf44ebbcfe0da1afa809208c5424a151f3": "43ccbd0dad0f3e652ba93b0851b8a982",
".git/objects/65/087f831155765380feb9a997c6de1a89e88c8a": "c5793f59b0e9aaac8bdfd63401adcc1c",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/e02338498c5143cf2b9d1ad7bfbcf93eacec64": "c26efd46ceb69e8528d198ac67773c47",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/513ffda9e18e5fa7c98c68d70a499ba713a639": "86b3c9ef3e545798ea4e7912187b2278",
".git/objects/6e/0f0d8acadda4c0a289c50e771e62343658d68e": "d0c1098fe4d05e86e4ceaa333acc97e1",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/73/e5bfcf247e0bd7ce34e27e15d22bbb6c36bc48": "6c6a062eb4ef73a7201573246413f97b",
".git/objects/77/891c6b454a6f1865e6242964ca18734433ad1a": "f5ddc544fc619c3dd0f34bef3509a2d2",
".git/objects/78/940a69141f125cfe468732ff7328bde4aeebed": "0e3b0b7bd0a5746e09f191fa394aef31",
".git/objects/7b/dbac2b9d36da7a7f10d29d4c67188d0226cace": "c345fd676e65deceda3a1c94f5113aa3",
".git/objects/7f/4e2998f31ed46d53eb546cbc560f6604f33937": "adbe36bdeeee323a9ff1693125e08c6d",
".git/objects/81/3e795062539a13b536f84154e5704442b71d64": "946fc6a68d7c268a1dc53bab7874a3f2",
".git/objects/83/d1408f76a6a0f8b13dbb26b24e534ac190d44e": "f8ba3e4a71283dccddd07fafaf8dbc08",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/86/e6bf46a9b045813f168c0b7d48b97ef1e3685b": "fff17f0baafb1704ce0b293e19c0c6f9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/346dc379784c9a001814c26ea8fc8a736d22ab": "8a6db0958c91adcabb9ed74e984e3581",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/92/7711f3ba8dc57e05d9a0031d4deed30e29560f": "86605ecaa15a074dd99488c8ed21320f",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9f/6907343d8d17ee9b289a1560793a6be65ac494": "320050160aa237da703e58c631994282",
".git/objects/9f/7130a3f5a4f496108ddfb67aa4410c3d23c577": "577d332c848542db3b9cc8c00f182498",
".git/objects/a9/8fc4fda32d976d159389d0c471f0a99c672eb2": "8017737c191e4add994388a9162e2407",
".git/objects/ac/671d9aa241d4025c512bcfbd6a1e6927c596f3": "830d0472533396dd9801dad9d4f9bcd8",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b0/61a18fc3a1a5559716b61a776949613b4ecb8a": "b6d710cfb5a897885e8d26a41621df3e",
".git/objects/b4/d6114add938ea1e77fe2cccf2d7a0f373b1440": "192e1f2a41be1080c3891cc483eb65c1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/ae9eb5db37410ebb123c5117b1bb458463aa50": "f271ee3bb5b881dd41813bd8b263a6e2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bd/6f334d4e8910a15b49638afdcd6d24dde05853": "a40a745445c4ada0f8bee067a00bb783",
".git/objects/be/19824c0152c2620e0dce5cb4484bfd75482a6f": "2857667faa92e70313159fad42612171",
".git/objects/be/88b462a4e6896e6354e76ea200a806984fffc1": "9eaaf792760f48d2119f146b80bb8920",
".git/objects/c5/003541fc209e97e16d60a1dd659de2e08fd333": "8c5eb0f5133159fc1f843ee665f65710",
".git/objects/c8/38c99f6f74d82636ed49f33c78d296205e95d8": "6dcb95cab98afc084faf80a42bdec99f",
".git/objects/c8/c551a63b2fb13f6fed86d9a2469455ea93051d": "5c2f2b6e4d298ad7fb2fd907ef302413",
".git/objects/c9/c9ef342ab05120c82a52d0282ac0296607b967": "532f4fabf3e4cdb51981ccc147fb11a8",
".git/objects/ca/2b04b9712f4cab93fb838ba59276a5c18f7be6": "d0e9f1f14224058225933f97ce840128",
".git/objects/ce/6ba96029ea8b37de0eddc23412ccd116260ede": "d3f64db2d9df61e5509d35632de1b524",
".git/objects/cf/4dcfe312151ce152654a71ecc70752d1cedae1": "5f97a284ef54802abda44f1e2d364ec9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/2fc4b5144e76f8c179bee69ac13cb51c4a5303": "dbdfbc4e299403ebba40cad3b42750ad",
".git/objects/db/071190a541d2cc2c9d0eaea0f4def4f7527868": "99f6ea24ad83cf8f0a3f8bcf89953e37",
".git/objects/db/9d8a817ac07d6000caa14d3c01ca671e3f31e9": "af54732330348f59e651f8d7c201a290",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e1/17e91a28b1c958b59358908cfe2b20f0b23745": "9d9f332c930439c7addcd6c8b718f181",
".git/objects/e6/ccdac8f08eba7f9e6f08037dea5c5deb2c80aa": "0733fe24c913bed3b6c572b20829f031",
".git/objects/e7/029b4550e9851de9760d836360a9c471cb97e9": "4572e7df7be92800a7ab8f6bbaf0039e",
".git/objects/e8/18dfe7345a2d0700e44e3433faa0eedd67e9a8": "a7d7b9b7db970d723398928425ebf0a5",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d6f62c7efdf3b387f8a793cdeda501ee48825d": "734af860aa1b4e03a08c3551e9db1671",
".git/objects/ed/2a477a068c4ab17b3f1bc3e706985075082f23": "fef4353272aaf776c2d1f3231db24507",
".git/objects/ed/39012afd9ac0dc5404583ac221a59b0970f545": "143af316500e1e08a28184693acacd40",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/1b8ad4df9573c8c982f43621332cbeced1abaa": "eac47274b11db6971f8a2a10e5861b8a",
".git/objects/fe/d0e7884e784b0eee96d46989a8e83bc56afc62": "7c74d6046f785d9497e237e9776cc703",
".git/refs/heads/main": "f247af18d71e68629217a87855f2f831",
".git/refs/remotes/origin/main": "f247af18d71e68629217a87855f2f831",
"assets/AssetManifest.bin": "a53491ba33870e68dce7c820b0867cda",
"assets/AssetManifest.bin.json": "bb5daa477ab092a8c1a34a960dc05d3a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cf64bdde553dfde8cb9e93ee2615cf1d",
"assets/NOTICES": "734be2ee72fd1d24c03ba2de048269f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "5fafcdfcf66cca4bc598030d809f9f38",
"canvaskit/canvaskit.js.symbols": "a33008c82ec1b7607a977403039f176b",
"canvaskit/canvaskit.wasm": "2739473de9d2da4ced5f634e37080f9c",
"canvaskit/chromium/canvaskit.js": "510533ba693c18488e96b3508a4faaaf",
"canvaskit/chromium/canvaskit.js.symbols": "f00a4a30835d8acb65f3599a457357f2",
"canvaskit/chromium/canvaskit.wasm": "3a601f0ebd92016813ded440934ff535",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "c77269dd6b1e12566f122ae1d507050c",
"canvaskit/skwasm.wasm": "05260a82c515b8c20dc75ed389b5fd41",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "7c42988c09d09783fa1288942440aec1",
"canvaskit/skwasm_heavy.wasm": "f35bd288b5ad2cc562888179ee1b24ac",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "9b21803008294d32ef5a88634be97b77",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d0ef6c2e356d6929014d3fdb51a5179b",
"/": "d0ef6c2e356d6929014d3fdb51a5179b",
"main.dart.js": "2a9acb6e3cf527b27690046fcda311aa",
"manifest.json": "f1e26f1cc05bfe93628600f2da62510a",
"version.json": "6205167d11daf22a2fb578ce5845a7b9"};
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
