import app from "./app.js";
import databaseStart from "./config/connectToDb.js"
databaseStart();



app.listen(process.env.PORT, () => {
    console.log(`\n\nserver is running. . . \nlisten port at: http://localhost:${process.env.PORT}\nBackend endpoint:${process.env.BACKENDURL}`);
});
