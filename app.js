const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hola Anddy</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .container {
                    text-align: center;
                    background: rgba(255, 255, 255, 0.95);
                    padding: 60px 80px;
                    border-radius: 20px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    animation: fadeIn 1s ease-in;
                }
                h1 {
                    font-size: 4rem;
                    color: #667eea;
                    margin-bottom: 20px;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
                    animation: bounce 2s infinite;
                }
                p {
                    font-size: 1.5rem;
                    color: #555;
                    margin-top: 10px;
                }
                .emoji {
                    font-size: 3rem;
                    margin-top: 20px;
                    animation: wave 1s infinite;
                    display: inline-block;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes wave {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(20deg); }
                    75% { transform: rotate(-20deg); }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>¡Hola Anddy!</h1>
                <p>Bienvenido a mi aplicación DevOps</p>
                <div class="emoji">👋</div>
            </div>
        </body>
        </html>
    `);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});