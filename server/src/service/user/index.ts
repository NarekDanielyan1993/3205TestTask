import { IUserService } from 'types/service';
import { UserType } from 'types/user';
import { readFileAsync } from 'utils/helper';

export class UserService implements IUserService {
    async getUser(userData: UserType): Promise<UserType> {
        const { number, email } = userData;
        const data = await readFileAsync('./users.json');

        let filterFn;
        if (number) {
            filterFn = (elem: UserType) =>
                elem.email.toLowerCase() === email.toLowerCase() &&
                number.toString() === elem.number;
        } else {
            filterFn = (elem: UserType) =>
                elem.email.toLowerCase() === email.toLowerCase();
        }
        return JSON.parse(data).filter(filterFn);
    }
}
