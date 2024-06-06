import {
    StyledUserCard,
    StyledUserCardHeader,
} from 'src/module/users/userCard/style';
import UserCardDetails from 'src/module/users/userCard/userCardDetails';
import { IUserCard } from 'src/types/user';

function UserCard({ number, email }: IUserCard) {
    return (
        <StyledUserCard>
            <StyledUserCardHeader as="h2">
                User Information
            </StyledUserCardHeader>
            <UserCardDetails email={email} number={number} />
        </StyledUserCard>
    );
}

export default UserCard;
