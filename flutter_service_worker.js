'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1ac57eb0214a8f5216f1da7dd479b33f",
"index.html": "2f3191d10c6c82831bb1448c0b0f11c1",
"/": "2f3191d10c6c82831bb1448c0b0f11c1",
"firebase-messaging-sw.js": "5a4584fee34f37485d83b9990c26c5f3",
"main.dart.js": "df73bf49a2b483a7add5a7d1a9668a3d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon.ico": "832e1a488a6643bc78230facd7a0c888",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "58ee11c303f89422c7f5e7ed43ceeca4",
".git/config": "61ea0653d130dbde0ad30405ab0ac4dc",
".git/objects/0d/2c911d03fe6e08ff20bb7837098171bd9b8012": "95537770879e17f59d2da02fecf8d231",
".git/objects/6f/6134c8eb3c6e2250b063f0e04d88514869fdd1": "430f542ede5a1098c0738597017d1004",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/4372cf99d75d7ed54001370c3a755e90df8242": "ec7f9177334194da29ba376a182fb105",
".git/objects/56/d8a085e5e339ddbe27ffdec3e2a1f124fad994": "55f9f8e0708d0a3935297d783acc435d",
".git/objects/33/327cfcb41531e3c8c757a6d5458ecf5af94439": "c281290356c05bef5e524f04fe27c8d9",
".git/objects/9d/f3756fec1a5ef833147eac4ba82a0e9352c48a": "6ac60b24c3d937f2e2c8234bcbc1095e",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/02/5244aa3e03b01c9c319e9385692f40a536a019": "57595a1a13202ab46a716bab63c9bad8",
".git/objects/02/4b39980070e5f777620e33aced4c88ec1d28f0": "6b1ac847925e98e61dc09af0c22b80fb",
".git/objects/a4/055cd8235bf5bb449f5ebf9cb2a0754aef60aa": "d86a5e8dddcddd1e7c54ed8b844c7a7b",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/b2/44c732b245b8334efff3daaf7f69413587e709": "19898e0cf27c4f8a61900068bc4e1154",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/ad/2a66b3c7612ab3dedd569eea1dbdf28a519df4": "cc4cf2267bd351564b20ef49f6c2b889",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/da/1d31fca12ab8624069f4ab35cc7ee96e13251d": "bfd9f7d63d3e1ec42e2fa08fcb63daa0",
".git/objects/da/aaa89ea378f94c6d07e25376761e0ac6879bfa": "c530c1d49996251e2e1943edcd4233e1",
".git/objects/b4/ebba6d4f5220130bf4338a370d9badf90d4ad3": "e302482c0bfb4778655e3a85f96bf863",
".git/objects/d6/d7a0f15945b2dc2f72b0850fe70e653a697ea9": "0847791133c1673b76e56ed17393cc3a",
".git/objects/bc/8b4226ad1765354945075e87b098ff3c0bd665": "24c859f798cb58c5af54d9faf38399db",
".git/objects/bc/83f68d0f1ca46f15cec77c2cab3a0c9c9a96f6": "b01964a2ed56a382658a6f5205e4a209",
".git/objects/bc/306f66f3914eb05a20f821170829e2eb9d826b": "bf0502b3361d4ffc90932f32a99e36f1",
".git/objects/bc/0c1b4938b4ee0ced59d5791624837c010314ce": "aca91fa6c7820a84d4556b98dc3e9d4e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/a570c7d3435f46de960abe36ce767b8bbea6a4": "51df32ad654acdd923ab3a6825465258",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ab/46369bd554e33b9da5f15ba02d8c109fb2e7fc": "b039e67f797163b463b506fc829ebad9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/e2e669fb6dc3b7c34aa817e22026be47635abe": "8f6688c69b4f5a3e31c5d9e11a94d186",
".git/objects/ee/eea86ee02e589acb8b7fe93498117b69bda48e": "99777149bf69304756cee28bc4eac80f",
".git/objects/e3/97ea39849498201c03a5fe72ec2c8859c3b221": "ebfb33b5dcfb8db5441c413a19445cc4",
".git/objects/e3/ccec8c518ccb21032b2e56a7ec19f98cc13262": "998f0d3020fefa8a6eb26db93822ce8a",
".git/objects/c8/6e511194d349df2462e70aeb9f360f89127a09": "a2d32bfa15b12ae2a189e2f28517e3be",
".git/objects/ec/8246cc12f259ec05125a38381ceeabf028d31c": "7538c9d9ef6e0fc3f7ff889d1e1f22bd",
".git/objects/20/512be3c559508db8b4d03c627fb975061477ed": "d025028f658411966ac76baa9b908a36",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/dca9e1d01ef2503c17dcfaa0771d4f5eeb8220": "db0fadec23b852a6431e12a7e1fe6b06",
".git/objects/11/ddc9212cdda92498ef1d07661215b1a554b343": "555e8c8eda60e35812c5f4d12f002a23",
".git/objects/11/8c0202a775d1dd180bb81d2438b91ec249d1be": "c8f27663120face41579fc4ae1dce5a2",
".git/objects/7c/7e77ed49d7ff3e278c9befacb82431337aab0e": "04855e278ef34cf9a937d16aa10c2527",
".git/objects/16/d8e9f9c7c7ca3a94aeaebb4b29090b94232912": "8185872f47761847136cd42b71e40605",
".git/objects/89/0691a2cdd8c1851a0eb41fe845b0abf45e3648": "21b201e757ba0471b380f8c4baa3f450",
".git/objects/89/e9094be50843e54eddd1dc1e98306b8256b9cd": "92a52fcce38a4b1418638630658aa64c",
".git/objects/89/4665efbf0bc16c40cd7f77fd44d83e46fc1f0c": "8c25ba32f68adb02207640eedaed8463",
".git/objects/1f/9d033e4c0e8781b87567ccbca1adb8af1d233b": "daddb0762fa4bbfc4388af91d107ed0c",
".git/objects/73/5d5e30fbc81f157483011a6f67a0c580863aa2": "287664c02e6fbb59b42e16ceccff3108",
".git/objects/80/a589ff0e71fc2bb27c42767119564919c37765": "f9f09b943cf27155a82879486d0b4f4c",
".git/objects/80/97c528bc7bb5049fcbe50ff447aa112153c10e": "9e6723f92b7925937e32b591afb89bd4",
".git/objects/74/9f3151d868b9e627841063b6b3d46d335cbfd5": "f9e52e4601b0f180b3bb15e808779164",
".git/objects/74/e912e820a8a9f654fc3dc7b8e91ba17ab956c9": "4737d8e53ca2fcc3525cf26b2fd245f6",
".git/objects/1a/be5a3383703a08a375cf92e1547b215116fa20": "7f4014ced80bb4149d661a66bada8b51",
".git/objects/28/e257b8d782250eb79613d1b303d49e90ed02ec": "876f9e102113bc535b455156de7915cf",
".git/objects/17/8994344b2b1d0f59a517410f8443f7f1b23145": "a9cb0d1c31eaa80811e69c2e891782e4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/d6260abe8c2258768d125f20d4e876f78aff74": "cf6cbe2a2dbecd1c6aee725970a7769c",
".git/objects/10/1f86eb62f250fcc22faf4ac122a9d8f03a122b": "5d8d821c73cb18528bf6e22407207631",
".git/objects/19/ef039eb76231c56a222be75d465549f3f98d4f": "b5846d21068c1fd3c85c90819d34f2d6",
".git/objects/4c/373bbc9c28c1d281ddcefc2f25dfb4003e3114": "df6fa636a8f2fdf8ffade8814ee490b4",
".git/objects/4c/c28e19963b291b2a6557f32fc6b4c02f6c9594": "15bdc923ffd9903306b3393ade2763d3",
".git/objects/75/7d124913662f90aea27d054afee8cd3250b508": "c247d80ec30021d7f399befc2cb0a781",
".git/objects/86/43c4c37ae77ceb9c7aca4f267faaf796aea024": "6508d6fe0c7e54dd98b13aff1c7f3623",
".git/objects/72/c3fb1f9ad7195be0bb3fb5115e81a8e39eb0a2": "2bf5e80ccb5aa29fb38eaea09536485d",
".git/objects/44/84ba4dfb101bd91b53cd689ab8bb735e9a1880": "fe014c6866f69a29df8c5e9b4073eab4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/4baabc931e166ce9d64221ce53199076f9118c": "b58c1b8b450f06d6a6716de4aff2a470",
".git/objects/07/42d3cbf846fd40fd48fb694a4e930f7cfa0181": "d1339bbb91f3f48e5978ee318e382372",
".git/objects/38/708b836855391491486ecfc2273b283b5d15e3": "1b37d1b360cd8164f51e0e99a0d437c7",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/6e/c60535ed5bf13cebe4c7b677fb8f382e96fcd3": "8137884978c9a86025819c186ad7ea45",
".git/objects/36/26986eb82ed275c46412f93260c4ae1b32ab70": "28e7f7fc87a9a2cbaa8a6d22ca6ced07",
".git/objects/5c/60e4673060ae1f9fcba46a6786dcac7fc0e82b": "8a447aa8adeddccfcc0aa09fe131097c",
".git/objects/31/cc77540408feda2f9f6e6ec6f69b667eb585bf": "0243529a8d9a58fba001876983546e34",
".git/objects/91/f5998812687faa07ac8869965007ec15ec30e3": "9168de6df3bd85a886f4234e5a4115ba",
".git/objects/3f/0281425e86178cc3cad08303aceed9fbe01ee8": "8438f8865fdf8565aa396f1371329c9e",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/08/241d41f0db17bfd782a9fc3d9fc1ca0d9f7342": "9ac5384e2efc825879420035a7877c5d",
".git/objects/6c/db21fffbac6f1d8624b489e988a800c21d2d3d": "7d0b6975cc08d1e691ee1727abb4cab6",
".git/objects/6c/fd4e58a897129a135807ddf8ed3a03b34ae0da": "f37cb0224491ce10d002e14a0a120c48",
".git/objects/99/b9810caae8ad288362fda4f8cd7bf171da00f2": "0baaffa43ef75fbe942d5669a7bb7f0d",
".git/objects/97/88321ce46420a280cedac5ba2a5f2bf893a4ba": "a643e9c0d129df0991ec92a998c542cc",
".git/objects/bf/c09c4b88d038cd53659c75b4e97e0fdb2fb880": "aa4e37234f395030c01d383b4e98051b",
".git/objects/d3/e10226ea3a4c65af6c40320eac9fd069f2a947": "97cd2f2a4d2bd5a08cf274427c3a6a81",
".git/objects/a0/2bc396460322733409f9686900613b307a29b4": "e16fcf2af0d4451b2ed9ca5028cf7e21",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/0c8f1bc026ab77e86a6417ae28c473d6c93138": "584f84208748ae0327f0cb18cba1fdd5",
".git/objects/a8/4d1cac20ffb189d5d79f2222a4ca59e3e44f22": "b3a2499da6d58f9e38e0449dd2c2c30f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/a603a5ba88a4a8d0a7d990082db54df5f46ab0": "9a516f21cc125ad7a5ef72e130c516f0",
".git/objects/b9/6ce4257f37e8c102b0b27a97f8ff92016699b8": "04ebefb121ee7dc292ab81d8f2b02f5b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/21c459e5b0c8c792184f3c55b0ce99fe2d8bd4": "509bd73b55d4c5f2849ff66fed468b4e",
".git/objects/c3/63435c7c21b7ae44b62590104012b3e0188b1c": "3caa565559a049209e2d46d41f95ce67",
".git/objects/c3/3114f3723605bbd25f5bb3afeab37be0e06930": "77383e1bad5d3966bd346a1d858dbc7d",
".git/objects/e1/02e00bea4fe48d7166c210f9dcd121413a0032": "b7bc326109b09f54e63ce0413a422b92",
".git/objects/cd/5e18cc98dfed94bc205127d7fd1ca52141e4ea": "b7f6dbebfbbd5cac9f8c45833159dd76",
".git/objects/cc/205cbb10b375c5b11521bd734ad4ce632251ce": "4100a296e4a81fbb5cd60ea14521bc96",
".git/objects/e6/70ccafc1950fc592f1da1f27684c0fe99177d3": "3a1b7f8f758a65c9117440f37f8f993c",
".git/objects/e6/3a0f6e8b4a38659942e3ae6f8de77fef2e6947": "1bc4eafb1e253123a3b27e778e73651d",
".git/objects/f9/09ae644951c8db0872e15607b819a2718e6cac": "825d297896fd4cf6167e1e7aa17b2058",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/e8/493183ae3710d584624cf789fe3da8bfb213af": "f1d4c7511612f55ebaa285c6ee85da7c",
".git/objects/ff/f4bf0fdbb481bbd1d051f2218852dc47234ce1": "b5f197dbb95eb38c4f59fa7caede3dfb",
".git/objects/ff/d984901944709af306ed4108319286287c5ee7": "678cfa0b537a156448e5fd9450bd8b5f",
".git/objects/c5/0b9a45453eea962ff213611e3084c69229f884": "b1d94a572c3c28503df6c025a4f0616c",
".git/objects/e9/72bdcaa93931b2028b219bdbe4a00eb3c79069": "2ae857bea93533a9b742fa2a9b86da4d",
".git/objects/f8/8f28fd90ba3fc920cfa956062e9ca57b961358": "a7aa6af716656a2617366068a55cbaca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/278885693b98cca7e3e17f016ab19e210481e4": "bec37f0411f1c078c91484fc07c91f51",
".git/objects/79/2177735a296016d02198f4e040d0640c710059": "a5cab068320bdfe07b16bb8177708fe3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/e89e46e63a8f17e48e776589ef204712e7b7ef": "de95b5ae5a537361e8abad46151fb376",
".git/objects/83/503b6faf15481ee8d0d5207ecfce5493dca27a": "33288e4127188953a17374d1350bb975",
".git/objects/70/e40b08b99a1b307953987c217815dc1106f275": "a550891a8fb8f35b222dcb04fcb3cd34",
".git/objects/70/b90882adb5b0e21f206bcb6c8361883470e2ab": "fc0cdc091dd99cbb163f6bf723b009f5",
".git/objects/70/1f0bf3fe58e593697282713dc0f4d5f735de76": "af9fd0e7aae10bffba3fe80e45b4f1f0",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4a/07ca422116fc71b2868014d268b28d72a0fabb": "e5c82eb21f8504961f690035f3d4c253",
".git/objects/15/80b4a60722bf061a8baffde85a7330ba1a705b": "2599032e3c0848fad51b4e7cf3d0992a",
".git/objects/12/ad55a9e1af266731c6584c9309f61dbbd6cf7d": "1ce6fff7111c860bcfb3536d39a92433",
".git/objects/1d/9471e962b14ac5fceb92f87ef8a620e339a54b": "0ccada3842c1f7e36eca36bafa991ae2",
".git/objects/1d/30c57f590f3203743a839c6fb2ce2b17f37fe5": "2df210432f41d57a61ca146c5f40d226",
".git/objects/71/cd6991f20ced969d4e77c65172d9221a0b387c": "93f7c3c5fbe254c2cf6158993962866d",
".git/objects/71/7cb37253ae2e626594a8cf76691122891f14bd": "3858cecf027faa847bee2eb5efa78989",
".git/objects/76/de2ebe90976f126eb8430f1bf9e10b6ae3c3b2": "e9f420daddbf636c07c54bce451a2e86",
".git/objects/1c/2df287b51503eb907ad643fde4aaa7f274cb33": "a302ee1d9f4a5eb765b7a73c5ae6fa44",
".git/objects/82/c5adf50cc8e2472bff7fe95fbef87f6dd726c7": "df70671496ae3176b4a96948e32cd948",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/49/8d09278d306f80a5245f78a80d1b6dbf71a478": "5f2b9a9972d3d215f6bf42d411317352",
".git/objects/40/7e83e4fccfa2c603213ca16ec5ab0800a3efae": "a36a75bd4b3a191d6b86f6cc6c54ed01",
".git/objects/40/a98c2ef80abc63367350c5cb9464672a72b261": "d39e23ec97c4fb7b007b6c6ed4746572",
".git/objects/2e/102c44deb5778aa20a4f653cd6cba6de1e4145": "3d739e58de732e502b0498d96f00f431",
".git/objects/78/a1c7a9ddabb82b35f32a628384e57fd70bea80": "ced247aa284298134c8ba8ad5b8946a3",
".git/objects/78/c9eef2b54ef9d2fbf6144ee64cdf5fd85afadd": "3b8b1b63b6c414e383bd750bdb778897",
".git/objects/8e/9eb08325a7726c61d0eef10e11d27138012605": "de4a1552d3ed7b93070f10160d49ab20",
".git/objects/22/bc9c2904e284d5e0a5ee2892792a371e06637e": "d00a4053df64418b343245234330e828",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "75ca17aa1920dfd0b5d556381144a4bd",
".git/logs/refs/heads/main": "1bddbb1b46faacc65ae811d1f6557cbe",
".git/logs/refs/remotes/origin/main": "29c5342de4ec96895eb0f53f1ce45c25",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "cfd09e0c72eb56bc4d9929a5f0c28671",
".git/refs/remotes/origin/main": "cfd09e0c72eb56bc4d9929a5f0c28671",
".git/index": "5b41de5968ac0ef103e67755de43823f",
".git/COMMIT_EDITMSG": "13211ac2c7428e62e89680d1bb285e5c",
"assets/AssetManifest.json": "397c90eacd623ef438d9ebef9117e073",
"assets/NOTICES": "260ae8fe1282e5127c1929d4ff156689",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator_small.gif": "502a31bacaa2182d511eb4866354fbab",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator.gif": "3990e106caf3029a36788b9b58a86b41",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator_small.gif": "05ffb16f4f31cf9941a8295740476ee1",
"assets/packages/loading_gifs/assets/images/placeholder_empty.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/rspik-4.png": "ec624f45e81fc514881391739a1fced4",
"assets/assets/images/activesg-5.png": "bc9278adb11aef33b2b76a1e6497b124",
"assets/assets/images/activesg-4.png": "743c8d0d0b714566c7eb68002975bb6e",
"assets/assets/images/rspik-3.png": "baa5501b5bb294f27bb6595f93f2a127",
"assets/assets/images/rspik-2.png": "602fd96d0f97e1cd55e9ff65fd3c7b57",
"assets/assets/images/activesg-1.png": "b11f681654594408081d94a907db362e",
"assets/assets/images/activesg-3.png": "3580fca1961cb24f26b7382163605c67",
"assets/assets/images/rspik-1.png": "811ff8558f2456ba26988efbaada96ac",
"assets/assets/images/activesg-2.png": "d6a26c1755f9c90eb2450f966b7c52a1",
"assets/assets/images/tbs-1.png": "29cc411ba60e2df20741ce3006714945",
"assets/assets/images/gmail.png": "bcb7da3b0772db5b4294eeeb8b6c0553",
"assets/assets/images/truenft-3.png": "25fe0e4b0a14a48fd8823b5d4155d0c4",
"assets/assets/images/imc-1.png": "b473dfb5a394ebee79976281c492eccc",
"assets/assets/images/bmkg.png": "11bb2d959e58505b7417bf1cf5d7ab3f",
"assets/assets/images/truenft-2.png": "af2ba044e0c75e91bfc6e1c3397c8ab2",
"assets/assets/images/tbs-2.png": "ecc7de266d2c119c2b21fb6e591c7481",
"assets/assets/images/imc-2.png": "48681c9ee07718d28e38285c2a4efdd7",
"assets/assets/images/imc-3.png": "846364b6628c8e37cbcf9c665111b736",
"assets/assets/images/background.jpg": "68172f69261ac433cffd7a21ae466afc",
"assets/assets/images/truenft-1.png": "16218f2cd3b438e2f30cab65fe2cc863",
"assets/assets/images/tbs-3.png": "47912be2e2b1d08abf513a4ec1844c3c",
"assets/assets/images/persist-1.png": "00845ac18920da93482f78f67a20581c",
"assets/assets/images/Zignaly-3.png": "fbc8d856d5fd9ea3f4e77566b8e130ff",
"assets/assets/images/pawoon-1.png": "18bf8ac4ec7e1c2a5f4aaa217649c0de",
"assets/assets/images/Zignaly-2.png": "bf9cebeec99411690cee024d7c4c28d4",
"assets/assets/images/codina-1.png": "e7b47e5be5cccd746ccfd59da19eeb2f",
"assets/assets/images/codina-3.png": "217052339cd79f141c1ff8cec24e88ac",
"assets/assets/images/persist-2.png": "ddf6d8af5fa27f64514983686841ac71",
"assets/assets/images/pawoon-2.png": "8c54d4edb3ac7e3b279a861b93ec5542",
"assets/assets/images/pawoon-3.png": "1b8715c41d096916416029360ea45db1",
"assets/assets/images/persist-3.png": "3a85493bb6a255d5d632500d14eebf0d",
"assets/assets/images/Zignaly-1.png": "28cd66ba2a0aeb72ddf21656927a8ede",
"assets/assets/images/codina-2.png": "2b34912d294be1fcce1579df8e5e3881",
"assets/assets/images/logo.png": "118b0500f57550b5b9b5939f78142929",
"assets/assets/images/gawe-2.png": "363dfe7d8b2fe0bddadf0b75218eb891",
"assets/assets/images/onezo-3.png": "54d95adc19f065bdfc869ecdead77fd9",
"assets/assets/images/onezo-2.png": "18fb375b4bfc103257c2a4b5a9748713",
"assets/assets/images/pawoon-6.png": "570dfc10817ac649a5d7753b89776b87",
"assets/assets/images/gawe-3.png": "c5cdb42458159d7d35156afbfec68989",
"assets/assets/images/ico-1.png": "c4bae439dace457cb9ed01d238dd5e3f",
"assets/assets/images/Zignaly-4.png": "6980b672b78867d3587b71b8622733f9",
"assets/assets/images/linkedin.png": "780a3517324e1ee68a127b26ff78eadf",
"assets/assets/images/profile.png": "731e56a8f46fca6fd4a1c97563d4e365",
"assets/assets/images/gawe-1.png": "1d9e018132441de21552db0fd8184eda",
"assets/assets/images/pawoon-4.png": "7e0a339abeb6da64c110ef06878676ce",
"assets/assets/images/onezo-1.png": "fdda29b738f639c193637138b8d2bf31",
"assets/assets/images/pawoon-5.png": "773f531b163be56b64e8981a62d5c5a5",
"assets/assets/images/ico-2.png": "d2e1e6258d708da100a72cdb7a8fd1b8",
"assets/assets/images/codina-4.png": "f6e2c5bb7024bbd9f29b53918f8aadc5",
"assets/assets/images/sempoa-2.png": "6e4c8f666fdc2fb05fc1376112e27aff",
"assets/assets/images/sempoa-3.png": "dbcf3d2d42eb635c3db91d449ebfeadd",
"assets/assets/images/sempoa-1.png": "9d842975803c79bc61eb633e8aa9ffa5",
"assets/assets/images/marcel.png": "08b64f5e9bc87b7173b3b96084410cdd",
"assets/assets/images/bg.png": "f22b9a7870e0b58d6d3d1ab8f1c16fc8",
"assets/assets/images/bg.jpg": "43da98083a050210d144c1eb052b4148",
"assets/assets/icons/favicon.ico": "832e1a488a6643bc78230facd7a0c888",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/icon-192.png": "bd96f8a17f7ec4ecd44094235ee320c8",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
