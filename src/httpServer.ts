import * as https from 'https';
import * as fs from 'fs';
import { ApiServices } from './services/apiServices';

export class HttpServer {
    public getServer(
        headLess: boolean = true
    ): https.Server {
        let apiServices = new ApiServices();
        apiServices.init(headLess);

        return https.createServer(
            this.getServerOptions(),
            apiServices.getListener());
    }

    private getServerOptions(): https.ServerOptions {
        return {
            key: fs.readFileSync('./cert/key.pem'),
            cert: fs.readFileSync('./cert/cert.pem')
        };
    }
}
