import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const options = {
    definition: {
        openapi: "3.0.0",
        info: { title: "Vista API", version: "1.0.0" },
        components: {
            schemas: {
                CreateCompanyDTO: {
                    type: "object",
                    required: ["name", "registrationNumber"],
                    properties: {
                        name: { type: "string", example: "Vista Corp" },
                        registrationNumber: { type: "string", example: "123456789" },
                    },
                },
            },
        },
        servers: [{ url: "http://localhost:3005" }],
    },
    apis: ["./controllers/*.controllers.ts"],
};
const swaggerSpec = swaggerJsDoc(options);
export function setupSwagger(app) {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
//# sourceMappingURL=swagger.js.map