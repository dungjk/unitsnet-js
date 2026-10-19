/**
 * rolldown-plugin-dts may emit a stub index.d.ts plus index2.d.ts with bundled types.
 * Publish a single dist/index.d.ts for package "types" / exports.
 */
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
const stub = path.join(dist, 'index.d.ts');
const chunk = path.join(dist, 'index2.d.ts');

if (!fs.existsSync(chunk)) {
  return;
}

fs.unlinkSync(stub);
fs.renameSync(chunk, stub);
