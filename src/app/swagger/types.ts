export interface Swagger {
    swagger: string;
    info: any;
    basePath: string;
    schemes: string[];
    tags: Tag[];
    paths: Path[];
    securityDefinitions: SecurityDefinition[];
    definition: Definition[];
    externalDocs: any;
}

export interface Tag {
    name: string;
    description: string;
    externalDocs: any; // TODO
}


export interface Path {
    name: string;
    actions: Operation[];
}

export interface Operation {
    name: string;
    tags: string[];
    summary: string;
    description: string;
    operationId: string;
    consumes: string[];
    produces: string[];
    parameters: any[]; // TODO
    responses: Response[];
    security: any[]; // TODO
}

export interface Response {
    code: string;
    description: string;
}

export interface SecurityDefinition {
    name: string;
    type: string;
    in: string;
    authorizationUrl: string;
    flow: string;
    scopes: string[];
}

export interface Definition {
    name: string;
    type: string;
    properties: Propertie[]; // TODO
}

export interface Propertie {
    name: string;
    type: string;
    format: string;
}
