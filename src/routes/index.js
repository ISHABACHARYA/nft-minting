let express = require("express");
let walletController = require("../modules/wallet/walletController");
const router = express.Router();

router.get("/wallet", walletController.connect);
router.get("/latest-block", walletController.latestBlock);

module.exports = router;
