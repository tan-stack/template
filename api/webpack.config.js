// eslint-disable-next-line import/no-commonjs
module.exports = {
    mode: 'production',
    externals: {
        '@fastify/static': '\'@fastify/static\'',
        '@nestjs/microservices/microservices-module': '\'@nestjs/microservices/microservices-module\'',
        '@nestjs/websockets/socket-module': '\'@nestjs/websockets/socket-module\'',
    },
};
