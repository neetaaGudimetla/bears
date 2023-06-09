const express = require('express');
const product = require('./api/product');
const app = express();
const PORT = process.env.PORT || 5050;
app.use("/api/product", product);
app.get("/bearproducts", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: 'Got Bear Productssss Data successfully',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

/* npm start
PS E:\AI-Related\bears> npm start

> bears@1.0.0 start
> node index.js

Server is running on PORT 5050

http://localhost:5050/bearproducts
{
    "status": 200,
    "message": "Got Bear Productssss Data successfully"
}

http://localhost:5050/api/product

{
    "status": 200,
    "message": "Got data from bears successfully"
}


====================================================================================
git add .
git commit -m "Initial Project"
git push origin main
====================================================================================
*/