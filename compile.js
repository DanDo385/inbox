const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

const input = {
    language: "Solidity",
    sources: {
        "Inbox.sol": {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            "*": {
                "*": ["*"],
            },
        },
    },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

// Assuming your contract is named 'Inbox' and it's the only contract in Inbox.sol
for (let contractName in output.contracts["Inbox.sol"]) {
    console.log('Bytecode:', output.contracts["Inbox.sol"][contractName].evm.bytecode.object);
}
