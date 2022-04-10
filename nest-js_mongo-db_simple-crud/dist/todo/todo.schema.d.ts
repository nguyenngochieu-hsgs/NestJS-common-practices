/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type TodoDocument = Todo & Document;
export declare class Todo {
    title: string;
    description: string;
    finished_status: boolean;
}
export declare const TodoSchema: import("mongoose").Schema<Document<Todo, any, any>, import("mongoose").Model<Document<Todo, any, any>, any, any, any>, {}, {}>;
