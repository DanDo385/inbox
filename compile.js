const fs = require('fs');
const path = require('path');

// Output directory
const buildPath = path.resolve(__dirname, 'build');
fs.rmSync(buildPath, { recursive: true, force: true });
fs.mkdirSync(buildPath);

for (let contract in output.contracts['Inbox.sol']) {
    fs.writeFileSync(
        path.resolve(buildPath, contract + '.json'),
        JSON.stringify({
            abi: output.contracts['Inbox.sol'][contract].abi,
            bytecode: output.contracts['Inbox.sol'][contract].evm.bytecode.object,
        }, null, 2) // Pretty print JSON
    );
}
