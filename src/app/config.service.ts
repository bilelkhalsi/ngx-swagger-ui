import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

/**
 * RESOLUTIONS
 */
const PRINT_MOBILE = 'print and (max-width: 600px)';

export function ConfigFactory(configService: ConfigService) {
    return () => configService.initConfig();
}
/**
 * Service that contains global config of the app.
 * Config is initialized at application loading.
 * @export
 * @class RuConfigService
 */
@Injectable()
export class ConfigService {


    constructor() { }

    public initConfig(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

}
