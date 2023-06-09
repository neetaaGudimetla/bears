const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: 'Got data from bears successfully',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});
module.exports = router;