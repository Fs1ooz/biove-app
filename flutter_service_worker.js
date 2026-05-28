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
".git/index": "52a961dadca4523bc114fac574893988",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "387030e18ab4827c9a430a481c3b94a9",
".git/logs/refs/heads/main": "8c45777cfdfa2672a8f6f99c196c4ba4",
".git/logs/refs/remotes/origin/main": "32c51e82e304ea792cf5add75c83e644",
".git/objects/00/3ddd373f4eb8d3ef0295c58995974921507b2c": "cfb5334e8448cb657f066994a63c5c04",
".git/objects/03/3fb9fa6c9ff14a88080a7c2296191a0dd1516e": "0c1a62b60395385d0b6d28649ec3347a",
".git/objects/03/d3c8d3747f0b6c578c5f5e51fa78032ce9efaa": "c94324b94901456afb556054a682ddda",
".git/objects/05/010eea8b92b2770f0e883a69e9fe98d2177f76": "c59d3395dc47286b4092cc83605ef675",
".git/objects/05/60daa84c7c8436816d1bf00c6d95ffe1a454bd": "583883ee19a3a4648f41e258466c3c73",
".git/objects/06/b01557e7a3d71439686f6939828fdf826380ec": "1fad13d266a4a711367ae2b4442a90c2",
".git/objects/07/1c4a4d3977aeb71015eb2ff180438289bfe7ff": "3bf1d169255bfe2a9d76092ab4e9b83d",
".git/objects/09/45e89f1fafd224df3c45b30aa4403476577c59": "549e86f458af0d5cd904784d9e0cc1ce",
".git/objects/09/b40812e03059af68c16b7a9574305459f5de34": "3a164488cd8a00be4892565b508e185c",
".git/objects/0b/975a90d81bcb78387dbf89da47bc67fa8375bb": "ff32125eb3d8231b12aef02b939b97a6",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0c/9c54eb3ca5e9fd04bc785560348088fee9217d": "8915bd13fa6b1bd5f7e6b032346bf434",
".git/objects/0d/2c98164f9d111c5b7c4144b935347082ede661": "27eae407b67f1e8a7865c88fc59ff16c",
".git/objects/0d/38b088d1efe6dd8efc0adf1d40341a4fb5a610": "06693218a166145c6c26fcb044af6c49",
".git/objects/0d/94e0338197bfadb36a73ee1d5c908a406325c7": "d69faea58ae064aa520a9fc47f541b08",
".git/objects/0d/a9356179130f3358cc2a472eec5539e08868d7": "a0e09765b4bb60e987f5ea866e090383",
".git/objects/0e/427709c7cf5ba4d1176cbfd8fd9c0f3c724f53": "4613d935eacf32d771874d79a20cfd3c",
".git/objects/0e/e79c9c006a4eeab1fd59cf3565d72f7a0f440f": "97aacdcfb43d93b16e79b93b1e70d706",
".git/objects/0f/81c52b452307d870b7a64483286ce57144ad88": "5e5bae7b1e0b214cf8268c5dc8ff2271",
".git/objects/10/215e519a474ba79a3025d018c3aecd5e13d445": "9090876bd017f45acde8d7cc3692f7d9",
".git/objects/10/2dbab12756dd0174977a2c6eceb854ec11eab3": "ebec2dc7f2a3bfb69982e7734bd4e753",
".git/objects/10/416c513ba8e045e68fc2023d25343aca2ddf9c": "8b643ee9d746f1e27bd5eebeae639380",
".git/objects/10/450c28a46b166d4b0f6cfc0dae39d6f91a2fd8": "11d1f0934066fad2847b1533daa14b7c",
".git/objects/11/06104cb9de0c59637282e1ae86f81dacc9c39d": "12c498cd046234a54a010300298fec5f",
".git/objects/14/a95244ae43072c3c9b8988a07274335cecec8f": "94a6aa134b938e61b68c14f394846501",
".git/objects/19/6743384bb558d3a020f2d56934f166171c4d46": "850847202a0316c5c1c94df0dccd4cbb",
".git/objects/19/beb2913744c35cf74b8b88665d3c9f3e768482": "8297aec3402af7b3be428852c0170dd6",
".git/objects/19/e8cc6e563c9c40da1e1687b18d7945b88769d9": "660af00edd466e6cc193031610da9182",
".git/objects/1b/01692c3b6ffd84332b38ce968563d9d7c9fbe1": "6694cb1fbbe1249b3ead3e5bdaa8b023",
".git/objects/1b/06574458be2b7462add3ef402e792dfc734e7a": "d716831a26c9ec87d8545a3faf455606",
".git/objects/1b/c69cf4096d308e90cafd7bd724505e6c59a26b": "e3bb7621b54e639a7200212f16d246ea",
".git/objects/1b/e0d67df99a3c4f28bfa79af8e75360c37ab7fc": "4634b14dd66a0d08538ae04649bbc443",
".git/objects/1c/e11b56e293614e22df263c1cd7a36cef53a8b1": "4e0488ef61348de598bdbabbe7085a3c",
".git/objects/1c/fe792bfe2e554f464630a03e426da2b2e2b3ff": "258ea295dc786ab02bc9ae882d50c4fe",
".git/objects/1d/1c651dbde87759fad37aafa871ee1193eecbfd": "0b29f132e47fdf791d4c80c71a0aaa96",
".git/objects/1d/bd5dc2837038b3e0df0cf3d9d6b265dfe04475": "78cec55d0822e4039d85164715c15595",
".git/objects/1e/793c61ccc245d57de2577fdfed26ce9048d666": "225790a3fb5df34ed4620c240e4bb439",
".git/objects/1f/db8eaa66eb11cab0545476b75529105f5b0638": "52fbde27d9a0bf5a468d163dd82d19af",
".git/objects/20/60a1227f909f9c8d0e94a4554b823da3357442": "f1b65aaae538fa19ed8b90fda57e6449",
".git/objects/21/52a8cf04cfe99cdf658ee5b8fc157394a0a15e": "b2ea3739242fb29dfbcfc3779d32ae5a",
".git/objects/21/b06b6b7eb58af19d35424be114b55db084ce8a": "69a70cf68b0446d2a2e8804edafd79ee",
".git/objects/23/387f7526e1ef3f46033c1f0c97a75450065221": "e38abe395a8d782a8c7774935f5cbecd",
".git/objects/25/a77f2ea87f1150cb8caefdcc18f325a82fa03a": "ce05fa0ace445b98a21c2afc3353f764",
".git/objects/25/e6b8b1f102931823e32c35cffe6a74afb7f491": "620e2ff1d78df69fe3f3eda37f5e872f",
".git/objects/27/5b5985c7195ca2fa616cd9fd99edc7c1f909e1": "3bf2fe840f1e6c9a5c261f590d26ef74",
".git/objects/27/be561f1177278f02694e7d35e0a2d4d0d4a494": "eb53443e799ca5dac82c959c8aac2609",
".git/objects/28/e8bb232c2bfca1d203f209219483272992263a": "0fd4613eb148ebb8b30f73595a12a49c",
".git/objects/2b/206704cfc3bfe18c2b7bb16275a5b57402b57b": "ecf5a386c49cec4ba53408e18d3341a6",
".git/objects/2b/7050975106d08539b942957b45d058edee89b3": "70e0236da8b7a3397ee186c309d1a144",
".git/objects/2b/b2a9fd36d524fa548a471ab209db1b93e39c5d": "892942d8d0951eff05ebe289a4f7b2fb",
".git/objects/2c/0e55fc7f062c10f9788c081dea681bdfc64e85": "aac70937ef125a7576bf02838bd3ee24",
".git/objects/2c/8a140ff1e6b762461f3f296c26691ce2661fed": "6ce96695fe955ef3eba15834bbb0453d",
".git/objects/2c/ed8c3e992e421d3a4ff2faf8d4ba32814b2c05": "4b695333016fb43074b939fb179ae682",
".git/objects/2f/1eca255c57e41bbe244eabda4c136afa504f76": "7f3217a4ece4f32715142cabf6410ea4",
".git/objects/2f/6fcbf414e0d7826eca194d67293289715360df": "7d54dee8b5d62ad68a02f7e1dce4291b",
".git/objects/30/4d84cdd8126325c589bae5fb20afbad3858734": "88a0a29e37da582df838534b386844ac",
".git/objects/30/96dca73c144304185a59219b79ba0487bfe65b": "f9ad3cd3cd11934f103dd39646fc02a9",
".git/objects/32/1795a3d03765d28e5f784a3655481e3f44baa0": "95a29ed14d2f9f6bb9f8f236676f525a",
".git/objects/32/a276bf7670e8fbc1172d516d207aac9e3ce26d": "9f23ad5c99811476c8f4ce5665251612",
".git/objects/33/e2df6a4f9402ad510956631a1c2bbab9efa8e4": "80cf0a9c077a4c7ed85d14cbbace3d3d",
".git/objects/35/099cc256180333035dda502d8eb8a274933a45": "e6d87ab5786ec1476ac0038a6b578564",
".git/objects/35/8a32155b9b9b00b18fd1efb0e426b0fa51243b": "b7a23cd552c5438c90551d66c737b40e",
".git/objects/36/6087465c8da42b075c4d7ddef621bd650b5dd9": "eea5b7e1bae978cfbab6e9d962f971c6",
".git/objects/37/1468b69a90fbf9008dfee0457d56cc6b12e4fb": "d33ffef4c6bb22e58d7691de220fc069",
".git/objects/37/fc41fe2188d61df17f0b436e167fa06be69658": "61738f7d025f47a40006a857a5db5ae6",
".git/objects/38/31954364729d58a3930eb82662b74f7f1e36d3": "b2a992d7f9b4814cef56d89898d1b712",
".git/objects/38/b010231b3023397e6a8c2fa875ea5b0839d9f8": "d74165e16daebd5e889cec8382c509a3",
".git/objects/39/583daef966d9322e645b0ce08367c19a29d629": "f26f8f0243f3194659c65891169f7234",
".git/objects/39/d1167a91b1cb8dc005eaef0c85b21cc9f9eb47": "0f6a11d2c122649f38e436147fb0d671",
".git/objects/3c/0e411d1d5e7a02c8af5f2606f4719e0ab949cb": "097ee61c811053b5438396a16206f625",
".git/objects/3c/29092f9ec7cd82d4f3cb4459b616f506e09a41": "55ea7e62213dcdc5c6f827e43b1686fa",
".git/objects/3c/bce9acfb8beb49b73eb516dcc7db0e87052c5b": "950cb3de8a11f600d1e614daf82db1c7",
".git/objects/3c/cacb2c292fb5a47e3f15f7caa4c10b6110af62": "f0248a84043f3394644039e532d65674",
".git/objects/3c/d1163df636695a68aeec3ee0b655cafd93915b": "04fbe8eb61259fc07c42a31164fd31c6",
".git/objects/3c/f2bf6bbf97ec414f9dccf42098526bf93dd47d": "44958837225f5407c9b3a67f3d4e4c12",
".git/objects/3f/5f5d1d91f0d9fa0d8fbea2d115c22c65648e91": "dad584bd399beeba5bcf04fd5cc29eb6",
".git/objects/3f/cd6682cbe74a9e486ee5903f809b8c2fdf4d24": "8f8e376098bfd4c2dd0e6f4ad5094c24",
".git/objects/43/fbf58f5d1a5370b4b01d16a41dfa85328bab28": "27d506e4b974c4f6658a17abd434010d",
".git/objects/44/47678c0aa3667fe8977dd492fc0d7e081c11f2": "723dbb0c10cdb755326e2e835b8e4162",
".git/objects/44/54ebbf1465aaccf50a95ccc9a9ac9fc062da18": "34f2ec43dc3621745e459e476babdafc",
".git/objects/44/f97e0bab6d8875de61877bf17ddb904a708050": "c131499a78df82597d5ad7c4dd863be8",
".git/objects/45/350eee8d3421d2570abadabc5b1654c2eae65d": "7169d012c3bc14aae9109e880cef67a4",
".git/objects/45/b4f7588d16808058b90c2c99f8b4728557768f": "2808ec529cf9e0c7862ac602b584ae18",
".git/objects/45/efdad9c6719e2c47664e2b3d9f9c39fe7dadcd": "9ba7ff9a27bf0e8ba9cfb7bf51fbbe23",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6b6688b1585676488fd8b2a65a99cd27e1b8dc": "b3402160e31c01dfd12744e601075bf2",
".git/objects/47/28f3b7f9adc26580dbaf070bafa0aef5c3477c": "3731e2e739be4ed181211712d9bcdc4f",
".git/objects/48/c8563f83767ad266e7cacb15ace3c20134748e": "d37ee80c2142542eeba92da16d0eceb8",
".git/objects/4b/24edc4633a1157f2d1020d99394c109d6ca361": "b2e6b8a5d8c54f1cfa4332a5372fdccd",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/a1d89d7b440a5b99a7dbc1d0a98b6b0eeb0608": "467a8510aa33b2f640e81d981f42c3e3",
".git/objects/4e/85bc525862d8007daaf896cbcea3f172f8cc0c": "3cd2258252f6c93d9aee56e635dc4207",
".git/objects/4f/397a19b27876e3b91c1b41e682be8dfa77d6a5": "c866c95adf35856e8fbaeff99bae1fac",
".git/objects/50/d054b29790951b694cc0c05b65d4a30e0a985c": "0accd1b8e9cffb44c95da2c4bcca1bdf",
".git/objects/50/ee8b7b27221790a3aee914e4ff29070ffa1b15": "a5fad1bd2ecb427e05b4a8fa1dee0917",
".git/objects/52/5ca1d0b210d69354d2375d974bbac58d2abce6": "fb872f79b9e9fdf1071eae1d6b1bd139",
".git/objects/53/0dd3a34084106cc6fbc95e60648f4bbca2c33c": "82946c1720d26e894b467ae6d7bef8dc",
".git/objects/54/857d643095fcedc82d1854c88de00ec50103f7": "8f1fa7f10b13ca30542ac087be822753",
".git/objects/55/11a7d31f922dbb74fc8e279707f1ab2de9106a": "5d4730bd6beef355f82526a6a098d7e4",
".git/objects/56/3416919ef485dbf723bebf4a5fa9076f591043": "192f01e76a53b94156e40e6f249f919c",
".git/objects/57/3751243aab9415c3bdd85ce4799ac6e3ec7014": "caebd63341b87ec41bcec2a0346928f2",
".git/objects/57/3873a6b66f6e7d9c6989fe054c4351fd15c754": "95243303d5da3ebf977017db1bed5af1",
".git/objects/58/a405d0f1e26ce3f9e02fed2a12878d7948e7ca": "d31ee48c672f0194d5e584fb524e1236",
".git/objects/59/178eb93be39849f77d562db6cc55710eb0b5bf": "07844a02e6016cc8d84af0d95fcba243",
".git/objects/5c/37b4b7708256f3118995a8ab16d98d84829479": "2b3fd9be42f19ae8422e25e5d9099894",
".git/objects/5c/ff41130ba447605b12bb5077772b0486bd6bd6": "b5f81f1c61e037161d6831c8e751cdcc",
".git/objects/5e/2d563b643e76c754532038bcbc44aafdb499ed": "d4b0c723b93797c262c29e17b65bd0f5",
".git/objects/5e/47c6337c17570afa36ab6a50aadc64b0363d30": "932b59d96a0b458767d110ed1341b7ef",
".git/objects/60/79384db88f97a34142fb5201b14788a3edcbaf": "9a9a0fa41569cf17eec5e2e824dbd236",
".git/objects/62/e84fdf44ebbcfe0da1afa809208c5424a151f3": "43ccbd0dad0f3e652ba93b0851b8a982",
".git/objects/64/1d8e640fddfdbf3491d05dc9a0eeff0f47de01": "dd2bca769b17634b0cb75debac2b83c9",
".git/objects/65/087f831155765380feb9a997c6de1a89e88c8a": "c5793f59b0e9aaac8bdfd63401adcc1c",
".git/objects/66/c8a6b23551ab7db5b1d659a51abafc585fc13a": "1104afb09e79c4f5fb33025781ec2451",
".git/objects/67/cd877371cefb6131a45e454b8ac4564805d937": "2aae739a0673d7c24bef02127dce43e6",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/e02338498c5143cf2b9d1ad7bfbcf93eacec64": "c26efd46ceb69e8528d198ac67773c47",
".git/objects/69/50cca28258ac2c5bf3f6d53b455a066359b7fa": "23829e71ca371ee1f28e8902072a1578",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/1f0a761a822ac476b5c8b552884f3eb62c1c0a": "a169305abc02cd954ff31d50fe42162e",
".git/objects/6a/203c7acbc21fd6d52b6b72424acd3e67b50415": "df97f6c37204c51758846e7690c51bd9",
".git/objects/6b/3d3c6024bcdc09058d20b8b916dfb07af8d0fe": "a3adcfa818cb6d461607da2fd66ea109",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/7622f336d5b05d7ab8d3ace7e17fc7ccec8c2d": "728effeed951bdb6bda35fac77d25993",
".git/objects/6c/8ddeb955d65a30f87ecb164a09cd75cf4ac9d3": "bdbc73d202b1187ca411902564f24d9e",
".git/objects/6d/513ffda9e18e5fa7c98c68d70a499ba713a639": "86b3c9ef3e545798ea4e7912187b2278",
".git/objects/6e/0f0d8acadda4c0a289c50e771e62343658d68e": "d0c1098fe4d05e86e4ceaa333acc97e1",
".git/objects/6e/f1232492463806e312c30bd78a3b915a9bb1d8": "5bbda210744c2d8f62db98d28bc26cf5",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/73/345d7c3758d8c289f77bb2b918a41de4e3ad01": "40d1777e8527bf96b2e6392d57bee10d",
".git/objects/73/579b09d4cf6447083c512a2f88ff7d0a34f1e8": "f95b28ec5ebd1ec51dffc0b9ff4e910e",
".git/objects/73/e5bfcf247e0bd7ce34e27e15d22bbb6c36bc48": "6c6a062eb4ef73a7201573246413f97b",
".git/objects/74/ea025f3e76625c764b738a90609ab583ed170d": "b75c81e1fb2a09da691de2af12d51bbd",
".git/objects/75/9afa441509a72c9fcd63ce8965d785b81a0326": "d186dfbcd6f38a13b7632dfea1c05c34",
".git/objects/75/bcedc9c9a21443debf3fb799e8cdd5e6a33bf8": "161f13cb8b4a17c074ac9a8518f1538d",
".git/objects/75/d3d6069b487eb11264d971daef935fe099ac6e": "6afba6d69b6a9bb6efdb9c227875fd11",
".git/objects/76/527b6c38e4a79c96d21fcaee7187bd14becffd": "68a3f3ef6ed2813f7cd8cc9b5e587ca1",
".git/objects/77/48a3c2089240d95c117b4ff5fcb091c481093c": "249fd9c301a45993dd239cb9333b197e",
".git/objects/77/891c6b454a6f1865e6242964ca18734433ad1a": "f5ddc544fc619c3dd0f34bef3509a2d2",
".git/objects/78/6bb69b00ff297476e81c40b65b97022572be60": "452e8c477168227284447dd6799c1e4d",
".git/objects/78/940a69141f125cfe468732ff7328bde4aeebed": "0e3b0b7bd0a5746e09f191fa394aef31",
".git/objects/7a/4e12f6a258b889ad16dac0fc1576c36b40c045": "5fb1328f6a1183045d8ba461f2cb7bd4",
".git/objects/7a/6c7a93dc03c26929cf443194b18d630e7afec1": "1fed7b0a6ba4a59ee8bc2cacff25c048",
".git/objects/7b/dbac2b9d36da7a7f10d29d4c67188d0226cace": "c345fd676e65deceda3a1c94f5113aa3",
".git/objects/7e/2b9468ebb8252476604920d394e797c966c7a3": "77b267d67177f890a31691e12b70f6f9",
".git/objects/7f/18761cc0434869a077bb9d8eea3b9e824299c1": "ac509ed0900ae175ff4e16867899d1ac",
".git/objects/7f/4e2998f31ed46d53eb546cbc560f6604f33937": "adbe36bdeeee323a9ff1693125e08c6d",
".git/objects/7f/d590225bdf44812b7ad8b7513db063512616c5": "9a1df020b7477924b9984147dbf4ff36",
".git/objects/80/0062777ceff2eb8e66c67a83ade8ed7f534c76": "4fec76bfdb997851c002e6ed668caa44",
".git/objects/80/86d1b67e3188846d391042c16535e90c395bb8": "5d8dff53e5781d5690ee86e4d0b42590",
".git/objects/81/3e795062539a13b536f84154e5704442b71d64": "946fc6a68d7c268a1dc53bab7874a3f2",
".git/objects/81/8a1b644666c81a511f0d7208a26af7507d4340": "d993420ce4ce5283abe1ca82fe6a9b45",
".git/objects/81/bf740b8069b76df355e213e3811d0d8b17c320": "7914918735c08070ed723461c01d62f9",
".git/objects/82/91cf93ea82e1359badef6d5e650f40afbc1350": "cc5cbec926514b0c8dcfa8c865937e5c",
".git/objects/83/d1408f76a6a0f8b13dbb26b24e534ac190d44e": "f8ba3e4a71283dccddd07fafaf8dbc08",
".git/objects/84/329d2a3019203de111b85bbff2cf310e2cf711": "87fbf315f35ad1aaeea02c38aeeaff74",
".git/objects/84/85d475064b110551b34287a93b13a4d6d557d6": "e4b3dd3b8e06daf1377cc7566c296e00",
".git/objects/85/c2e5ffc98a82c107d566e7d4d5f0b7f097b996": "85adbaa07bc4dbe2f7bbb9dbad663d5f",
".git/objects/85/d7739fb162287a9f52629aa691565a6707dafc": "9a59c3ab8679dc3611c3b2b6c0b48e47",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/86/e6bf46a9b045813f168c0b7d48b97ef1e3685b": "fff17f0baafb1704ce0b293e19c0c6f9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/9a934bb16ba62835aede9a3a832a1725ca8fd9": "073911c6735e57a781fcbcc28eaa0a62",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/137891791fe96927ad78e64b0aad7bded08bdc": "9abb042e8c58ed4d703beb8e66b37150",
".git/objects/8c/399d78a745707cf98f473148a6482939ed2bbf": "905ab7feec6880f1f01fdb6dc5d6750c",
".git/objects/8c/4dcfb96309a69d0e12f284f0b44d1425941d32": "157daaa3aac1c0af62eedd8f05528fbf",
".git/objects/8c/dd7d93026c3bdf5f31e5fa01cb85c1a02520e0": "d0d92878466fdbbb2edf2287af329f13",
".git/objects/8e/346dc379784c9a001814c26ea8fc8a736d22ab": "8a6db0958c91adcabb9ed74e984e3581",
".git/objects/8e/adc830215b475018edb6fc450bb87e72a72b9d": "ac72c4f7c60ffafb0e5aeef6d087950d",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/4b992bf4038714bfa250cf3b4a4fb5d408a9ae": "0226713bcee45081a484e65baae176ee",
".git/objects/91/54e0041fed626077047374f2cae6b71e827433": "12d8628127619e14f255a26991e6f175",
".git/objects/91/f87fba9fab6c1f7525cf99271f4cc1a56bb388": "0f3c2ead9912df9bb23035cdd96c60ad",
".git/objects/92/7711f3ba8dc57e05d9a0031d4deed30e29560f": "86605ecaa15a074dd99488c8ed21320f",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/ebec96d3fa480a6bb498222d492fbc42b2a4e0": "391d1857fcf35e21a5b5b36a2554026a",
".git/objects/95/0e05f259d09ba8c71690f03bfbc048217cb0a1": "a50f8d2f3cfa575f5814585e19dd5a92",
".git/objects/95/a13eaa4666914fdb53332ee4851c7e0db7f02c": "fb7e732cc81418cb9dfe17f181839567",
".git/objects/97/16fecfcd357128f94364007dfe3f05106148ac": "66ceb9e506eae6d8bf1d6ccc994ec94a",
".git/objects/97/fdbba3673795109e7f8f69107a26102ee74db1": "3824b2f45e935295876b871f3578b29f",
".git/objects/99/c4bada94ea10d95c35776231162cd4f33a46a8": "697c7f658627980cdefb1b559baf5966",
".git/objects/9a/bac0a10f14150ea30571909cb5f54e29974606": "5c5ba486297a5283e05fc8d556028d89",
".git/objects/9b/dede07556722990cf43cfed9145b9059e0b1db": "d5071b6433b4e9b3d5b15b7275adb9f9",
".git/objects/9b/e371ca3588728c7250d16936a0e9a414023d3f": "7e36751d8000e36bb734a61ef9aa4726",
".git/objects/9b/fbfc23e45bc08755f62a521900389ccbe54b49": "a38c1556bed68ef3e69b115c875c7c96",
".git/objects/9d/48891a9bef994ea7d7f3fb0147306249c666ff": "2d93f7f4508bac8fe585f280574c8264",
".git/objects/9f/6907343d8d17ee9b289a1560793a6be65ac494": "320050160aa237da703e58c631994282",
".git/objects/9f/7130a3f5a4f496108ddfb67aa4410c3d23c577": "577d332c848542db3b9cc8c00f182498",
".git/objects/a5/52c012d8fe8b69cac2a146a2c0f97e7a9bf50e": "41802358fe3c94be6a1dbf80c76be9c7",
".git/objects/a7/aa02acf507919be6cc0d1ca2b5df877e2fe460": "32da641bc503e8a745844d74777fcd22",
".git/objects/a9/20a6ed5c0e7efbbd7a658eef8b867d1c90f86b": "c2b47d4e3dd8e245ca7f95a3c8e19b93",
".git/objects/a9/8fc4fda32d976d159389d0c471f0a99c672eb2": "8017737c191e4add994388a9162e2407",
".git/objects/ab/35f7e03b7f42e39948f3c34bf8492f8d017967": "73c26259f8d9d263e1e5ab9b84ab2f03",
".git/objects/ac/671d9aa241d4025c512bcfbd6a1e6927c596f3": "830d0472533396dd9801dad9d4f9bcd8",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/f7d9fc700c6f373ae0a442616efdb7aec4f0fd": "9f99c5860f1c2c19ce43151358b5ecba",
".git/objects/b0/61a18fc3a1a5559716b61a776949613b4ecb8a": "b6d710cfb5a897885e8d26a41621df3e",
".git/objects/b0/d559d81289d726794815852736cf0f5ee27648": "11df08c72ba9fba3211c4f1cb889f93a",
".git/objects/b3/847679c9163d515e662ac3c13440433f641868": "405b82272b39749e179c5ae748d3a1c4",
".git/objects/b4/2ce6deac14eba95e0e7f0f537cda92779dad8c": "b4e25965e4fbd852b8a41205b3997520",
".git/objects/b4/d6114add938ea1e77fe2cccf2d7a0f373b1440": "192e1f2a41be1080c3891cc483eb65c1",
".git/objects/b5/a9bee4cb5717fe08f39b639eedff70a15781ea": "18bd02911ac9a48157d877f1bf014ca8",
".git/objects/b6/35824f32661e4ec5d918e310d3d8e62ae75f18": "42c5779f54c3b1b68d456f37c8c0119a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/ae9eb5db37410ebb123c5117b1bb458463aa50": "f271ee3bb5b881dd41813bd8b263a6e2",
".git/objects/b8/e13d13ac64aacee1f268bb4ab0189c66413f5b": "de398dbef2a5ef979a06d18f9a1d9b80",
".git/objects/b9/07d51a118b8c415c1c99ce8700cde3f912193c": "80b33eaae00464e21957e8cd3e015cee",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ba/352a9defbf317a716ab1a9f61a1e926fa9a2e3": "c16e48dc4750de883834a62be417f5e9",
".git/objects/ba/3591617a4fde063861f832b01d5902035faea2": "e3553b6f09937ae660e5fda8359a1461",
".git/objects/ba/cd5b2d9647fc49972ab8d39813ecb92136da72": "8f36e6c85a23d79edd8ef0c12a796906",
".git/objects/bd/6f334d4e8910a15b49638afdcd6d24dde05853": "a40a745445c4ada0f8bee067a00bb783",
".git/objects/be/19824c0152c2620e0dce5cb4484bfd75482a6f": "2857667faa92e70313159fad42612171",
".git/objects/be/88b462a4e6896e6354e76ea200a806984fffc1": "9eaaf792760f48d2119f146b80bb8920",
".git/objects/be/8c390c949de5eef976c85b32359553eda0cbec": "00ea1ed64108922230aeb60a935d770a",
".git/objects/bf/51f01a53b1b61d99194dd55f96b8715ec9d673": "33ff5f95d7d2c44e6520c404abd6e290",
".git/objects/c5/003541fc209e97e16d60a1dd659de2e08fd333": "8c5eb0f5133159fc1f843ee665f65710",
".git/objects/c5/b4653403d81ef99836a2556c7dba989f40425f": "6d8f5c06c5801e89a5161442a4b460a3",
".git/objects/c6/0739fceeea67268f6df08703b6fdcbaa3407a3": "23e79b70087c5239af5f9f55be24a6c8",
".git/objects/c6/a53dd1ca1b24b88366bef6e9b33b386e598de6": "32c7e3b9223369438a029ab876a7dc2e",
".git/objects/c7/7b0d7d1fe2ff1c3030c99d7bddec753e6052b6": "969049fe2feed9a5592b72c0b6a8e437",
".git/objects/c8/165062a0fcda2fddc58ab333ba3efa81ad9d60": "49986e8ac322dbf7ab3157c89b48db49",
".git/objects/c8/316538eb327c4859c97b6f9b6460bf741e6cc7": "6d8792ce747cd3b5b07a118be98301b5",
".git/objects/c8/38c99f6f74d82636ed49f33c78d296205e95d8": "6dcb95cab98afc084faf80a42bdec99f",
".git/objects/c8/c551a63b2fb13f6fed86d9a2469455ea93051d": "5c2f2b6e4d298ad7fb2fd907ef302413",
".git/objects/c8/df57eec16f2233dbbd43188cac18db5c0ed5ee": "4227c4445ee65d06557ad6eae77eba3c",
".git/objects/c9/c9ef342ab05120c82a52d0282ac0296607b967": "532f4fabf3e4cdb51981ccc147fb11a8",
".git/objects/c9/d371dd046ed22c96b53cf504fed4ed80ca78a2": "afd1315f373d4a085b242a8772296277",
".git/objects/ca/2b04b9712f4cab93fb838ba59276a5c18f7be6": "d0e9f1f14224058225933f97ce840128",
".git/objects/ca/85c4cec24842b0b0d4dce6c36001bc8662006a": "b43655fff160305d9b8c372302f3bd70",
".git/objects/cb/744c30491c6eeb9090bafd8d6d1d0474528638": "a6629722df8107fa9221563eac9d8bf9",
".git/objects/ce/6ba96029ea8b37de0eddc23412ccd116260ede": "d3f64db2d9df61e5509d35632de1b524",
".git/objects/cf/4dcfe312151ce152654a71ecc70752d1cedae1": "5f97a284ef54802abda44f1e2d364ec9",
".git/objects/cf/64ad807b1c8e255b52707d44591be116194666": "c5290705e5599ce11e9f64d49625535c",
".git/objects/d1/01c88e45435cee0677781e95a13b02049db596": "e1155cef4b051c9c88695263a3bc3422",
".git/objects/d1/26920428cff9d1e8a2dae5e177cbdfbc5b0059": "49b1a6c2564f6b14b7edda00c3517de6",
".git/objects/d1/d23a0fa6ad4243e41e22e3060cc45e94336179": "16842203eeafab8b1d06cc22fcdd71f6",
".git/objects/d4/1d576da6e12e6f8af672be081dc5785d4e6c45": "cb7162a340262fb786d7e405f959f0cb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/b3b76358fcf6270be47613864d44f2ea7b0265": "52931002018feea47d32329579d90dff",
".git/objects/d5/2688526c7fbfb0e51bbcccf54ca549efd5e506": "d7b16ad97a38f705c54089cc0d55ff77",
".git/objects/d5/67458d481a22489b5848c81da377c5da9d9be7": "8d772d23847267a70e00b4944383cb35",
".git/objects/d5/feef1d5c8dd5fdf9eacf7d0b019c3afe8313cb": "7a211385077c15d2b6388185ad29d08f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/9f156fcd2e394c9823da8b67e099e2f0f8f57e": "b56e25dc06f52849f931b637586dc8e6",
".git/objects/d7/18ee972193c796cff346879aa91e0d47901dab": "1e0ef78f9d596c8ffe533f18b5629588",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/42aa4b5fa5ecad770a5ec9ca696e203fe3666d": "2f35e26285d2d5f31bea322d52a136d7",
".git/objects/d8/dc8f021ee673b4ae605232a7c2bccd011d34a7": "21e4cc0a5509266297807b24a0644bbc",
".git/objects/d9/24d1bfa1f5e9084c43ba360c923917a996adc9": "f746f19ffd96505d11e2e5893eb64834",
".git/objects/d9/2fc4b5144e76f8c179bee69ac13cb51c4a5303": "dbdfbc4e299403ebba40cad3b42750ad",
".git/objects/d9/a462494254ad2d3331a76d358a18a8867a39b3": "f35b7aaaa30952f90a6d87b760c9e09e",
".git/objects/da/59737d17185652fd3536718c9448d7e9a2dafd": "c58fb6529f3a7f80d4fca968a9be1418",
".git/objects/db/071190a541d2cc2c9d0eaea0f4def4f7527868": "99f6ea24ad83cf8f0a3f8bcf89953e37",
".git/objects/db/8a0908bc9be5ce4386cf6ab411fd68137dfca3": "edf1a25eed87086d00059d7a4cac8426",
".git/objects/db/9d8a817ac07d6000caa14d3c01ca671e3f31e9": "af54732330348f59e651f8d7c201a290",
".git/objects/dd/36066048a4cb684682f7338154e8d0bdc4e056": "9c9a8f32b6a2cb308b2e7963c33f8d34",
".git/objects/de/a0a8e46081a1e7db0c26ac2ce5c7921ba8cb28": "fb1273fcedc5ac185b2efe67b7a00808",
".git/objects/de/afccffe3ba4c799dafcf4954f9ced4d339f0b0": "2f1ce3f8cc864ee8e0ba03406d100055",
".git/objects/df/e7608dea2e34e7e5e85d8b87ee8d6b307a51b9": "18426bb50ab38c203b75e6d7acc5aad5",
".git/objects/df/fa1ba577b7f121cc73d4920c397ec3445067b8": "5115342e7db8c52edbf0844e7cd2d75a",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e1/17e91a28b1c958b59358908cfe2b20f0b23745": "9d9f332c930439c7addcd6c8b718f181",
".git/objects/e1/50bf68507ee943e754bbc9eb8e3bf809520663": "981e3efd9791aa1bb24bb88b1d45717d",
".git/objects/e4/a2bbe04b9b03e8e1ae42cc7ac2016174af27e6": "5d36ecdedccbe7d299a8abbd1ef71c31",
".git/objects/e5/e73926aebb654566f37e2659fb2318a8fbd991": "df588f5c57784abfd193e596daa30317",
".git/objects/e5/f2cd6ffe89abc1cb4ab57fa7b567465a63e584": "a2536d51db1874e02808b7c97390b430",
".git/objects/e6/ccdac8f08eba7f9e6f08037dea5c5deb2c80aa": "0733fe24c913bed3b6c572b20829f031",
".git/objects/e7/029b4550e9851de9760d836360a9c471cb97e9": "4572e7df7be92800a7ab8f6bbaf0039e",
".git/objects/e7/8cbf3e283f2e954a041ec68e1819ace2755bb9": "816ac0096734aa233337a62f435c7a06",
".git/objects/e8/18dfe7345a2d0700e44e3433faa0eedd67e9a8": "a7d7b9b7db970d723398928425ebf0a5",
".git/objects/e9/0fd88df6d444819a8a44e1c0c7223d0c742df2": "995cf50873cbd2aa17f5b29427436719",
".git/objects/e9/5272665e1ecf7f7175112a0b421860f54e2b4b": "a52170228d2f4edcfa1cd00d6e0d500b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d6f62c7efdf3b387f8a793cdeda501ee48825d": "734af860aa1b4e03a08c3551e9db1671",
".git/objects/ed/2a477a068c4ab17b3f1bc3e706985075082f23": "fef4353272aaf776c2d1f3231db24507",
".git/objects/ed/39012afd9ac0dc5404583ac221a59b0970f545": "143af316500e1e08a28184693acacd40",
".git/objects/f4/65911cdabbfafa2fda997c807b6d1c29bc6cbc": "66c43d1bbeeae8344c0cad5843269ee4",
".git/objects/f4/cdf29f8af07f1130a1ddb2f61a3704b581f9cc": "aa5a5ea006b20b64eae2e0a7ee7a5762",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/373e3f3cf9776175c9db1deec7f49a136fd3c9": "023c12bac0c6bcfa83e9f67fe1f4831b",
".git/objects/f7/b9518ef822994dfaf1fab304eb0c8bce8cbb26": "4ae4d4ccffbf5c9e4232cd3b1e29d732",
".git/objects/f8/6a2dc24ff1e71343fe55a003e7cac86c350619": "83d2330f940c5929054bdc8e1fd5a8e0",
".git/objects/f9/1b8ad4df9573c8c982f43621332cbeced1abaa": "eac47274b11db6971f8a2a10e5861b8a",
".git/objects/fb/b3b218b8faa14e4a43d8792643cf43a1bbc65e": "524e153518bea52ed18b81cf9349467a",
".git/objects/fc/ca0235385b1a67e780375b4fcb58baefb25f9a": "e469a6ef5e2eef8b156f5c4cd1b7b0f1",
".git/objects/fd/0bf05269687e9ea93976c107b9c319cbe45daa": "b0d36d1eb23688e54eb893f45a03ad05",
".git/objects/fd/a655330cb96ef874f3cbd3a2ece053f764db33": "80d60e1bfc959536540bca174e2b4dfb",
".git/objects/fe/d0e7884e784b0eee96d46989a8e83bc56afc62": "7c74d6046f785d9497e237e9776cc703",
".git/refs/heads/main": "a403cde7791fa3ea354adeb5944109f7",
".git/refs/remotes/origin/main": "a403cde7791fa3ea354adeb5944109f7",
"assets/AssetManifest.bin": "58ad4e7d23683e8fb9418eecd85b6744",
"assets/AssetManifest.bin.json": "4ec5be0135a20b31271e10106b15b247",
"assets/assets/images/logo.svg": "b3467af388290416a81ef5ed5bf32f7b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6af1eda6a53e25f0bb63c957c8dfa14f",
"assets/NOTICES": "4dd6bbdf868a02c815c0b3351f3f58d5",
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
"flutter_bootstrap.js": "41b1c03fa55e54808c0a05810b721f42",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d0ef6c2e356d6929014d3fdb51a5179b",
"/": "d0ef6c2e356d6929014d3fdb51a5179b",
"main.dart.js": "aa5ad913963e2d2abb1f2d6c76d5d310",
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
