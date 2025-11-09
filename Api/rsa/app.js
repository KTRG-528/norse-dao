const express = require('express');
const app = express();
app.use(express.json());
app.post('/ip/register', async (req, res) => {
// accepts metadata, uploads to IPFS/Arweave, calls deploy contract / mint
res.json({ ok: true });
•
•
•
5});
app.post('/attest', async (req, res) => {
// receive agent attestations and anchor merkle root on-chain
res.json({ ok: true });
});
module.exports = app;