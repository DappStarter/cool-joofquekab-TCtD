require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food plunge response oil concert grace force flat ghost'; 
let testAccounts = [
"0xc34d13ddc4131c74a1daf0db020e4020ffe44d0c3a7694ecbf0b3ff51bba58cc",
"0x8aeb9e8349254424054fe0d9bf313da54280a443af8fdcd29e5a957079dbca76",
"0x78d409a21ca93a2f6d2d177d03fdc9ba6ae58cee918d5a08b966b2b8d8821ca0",
"0x7fc1d2377dd8425305c5632f34da5dea6691135fb44dc68927c30fa071d8750d",
"0x6d7887dbb154c2b809a0344c502a098ad84684905812d83c90e62a712d8dae53",
"0xfac630d8c15f00abc2fe79981771938c0b1cf7a98e489685157d3d396e6f5d70",
"0x24bced771fafa21d58c5051b17146eb95d7df8fd9cd257a7df76cd230b9af20c",
"0xf10947fc8449023551a476d02c268cc64c9ec5d7950b82806c194b821a3a8555",
"0x08f9b889eef9c105972419bb2e3890381830d862c030d2cdc323dfc07cedde07",
"0xbe6a7becde96e5acd38b00317272075f35e34890638311a9f37e9002dd73d772"
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


