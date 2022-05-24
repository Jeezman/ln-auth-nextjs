import app from "./app";

const PORT = process.env.PORT || 8005;

const server = app.listen(PORT, (): void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
});

process.on('uncaughtException', error => {
    console.error(error);
});

process.on('beforeExit', code => {
    try {
        server.close();
    } catch (error) {
        console.error(error);
    }
    process.exit(code);
});