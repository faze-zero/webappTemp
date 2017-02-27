import { ServiceDescription } from '../shared/service-description'
export class Service {

    constructor(public name, public description, public imagePath, public serviceDescription: ServiceDescription[]) {

    }

}
