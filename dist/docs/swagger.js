"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDefiniton = {
    openapi: "3.0.1",
    info: {
        title: "Swagger Writer",
        version: "1.0.0",
    },
    servers: [
        {
            url: "https://petstore.swagger.io/v2",
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
            },
        },
        schemas: {
            user: {
                type: "object",
                required: ["nombre", "lugarDeNacimiento", "fechaDeNacimiento", "generosLiterarios", "librosDestacados"],
                properties: {
                    nombre: {
                        type: "string",
                    },
                    lugarDeNacimiento: {
                        type: "string",
                    },
                    fechaDeNacimientoe: {
                        type: "Date",
                    },
                    generosLiterarios: {
                        type: "string",
                    },
                    librosDestacados: {
                        type: "string",
                    },
                },
            },
        },
    },
};
const swaggerOptions = {};
exports.default = (0, swagger_jsdoc_1.default)(swaggerOptions);
