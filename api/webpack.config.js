module.exports = {
    mode: 'production',
    externals: {
        'fastify-static': '\'fastify-static\'',
        '@nestjs/websockets/socket-module': '\'@nestjs/websockets/socket-module\'',
        '@nestjs/microservices/microservices-module': '\'@nestjs/microservices/microservices-module\'',
    },
};
