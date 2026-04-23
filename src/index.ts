import app from "./server";



const port = parseInt(process.env.PORT || '5000');


app.listen(port, () => {
    console.log(`express is running on port ${port}`)
})