import {Request, Response} from "express";

export class CrmRoutes {
    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successful!!!!'
                })
            });
        app.route('/crm')
            .get((req: Request, res: Response) => {
                res.status(200).json({
                    message: 'Welcome To main crm'
                });
            })
    }
}