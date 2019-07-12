import { CrmRoutes } from './crmRoutes';


export class Index {
    public base(app): void{
        new CrmRoutes().routes(app);
    }
}