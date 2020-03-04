import { NestMiddleware, Injectable } from "@nestjs/common";
import { Request, Response } from "express";
@Injectable()
export class AppMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, application/json');
        next();
    }
}