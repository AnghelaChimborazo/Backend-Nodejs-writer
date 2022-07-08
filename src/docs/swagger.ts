import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefiniton: OAS3Definition = {
    openapi: "3.0.1",
    info:{
        title: "Swagger Writer",
         version: "1.0.0",
    },
    servers:[
        {
            url: "https://petstore.swagger.io/v2",
        },
    ],
    components: {
        securitySchemes:{
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
const swaggerOptions: OAS3Options ={

 };

 export default swaggerJSDoc(swaggerOptions)