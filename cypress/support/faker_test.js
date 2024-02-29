import { faker } from '@faker-js/faker';
export default class DataGenerator {
    static generatetestData() {
        return {
            email: faker.internet.email(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
         //  phoneNumber: faker.definitions.phoneNumber.formats(),
           // faker.phone.phoneNumberFormat(3),
            company: faker.company.bs(),
        };
    }
}