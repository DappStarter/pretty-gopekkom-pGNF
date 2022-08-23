require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name recipe saddle arrow hidden fork swap giant'; 
let testAccounts = [
"0x3a2b899722d3f2dfde4cc013daad823d2dbefda3d63bc725f8e3402c6195ae66",
"0x3cbdd3ee2ae4dcf81ab80f6291aa0dd8168002949adf064baa5345910427e57c",
"0xfab22fda0443107e49d63c162cf11501741ac74da4f54732cc533a37b1c29f94",
"0x8e22519a1e0a691467b8390d6240365e8630a01f62850e50e73d1cc332881baf",
"0x9e5a181dd83ffe99447edb574da40f20039f7042987ff44f38bb2b8548125717",
"0xa097d0717f059fbcaa454fe95108e8cd2c114f891fb446540a31fa32fd1ceccd",
"0x778e07135ff6e4655faf432990dd8b1d1d2d15e3626eed167436bd643983705b",
"0xe61c8b805a012a2228267e9c3f79ccf15b381aeeba283e92372282a104d965df",
"0x67beee4527be4645f6b281e488111fc67e9f22a0fde4ba2aedad89fad278141e",
"0x047ef6dce5efb6c71e3a0d304aeda64e1cf73e0d04fde023a4e2ee11e2e26e56"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


