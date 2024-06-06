import { Flex, Icon } from '@chakra-ui/react';
import EmailIcon from 'src/component/icons/emailIcon';
import PhoneIcon from 'src/component/icons/phoneIcon';
import {
    StyledUserCardDetail,
    StyledUserCardDetailIcon,
    StyledUserCardDetailText,
} from 'src/module/users/userCard/userCardDetails/style';
import { IUserCardDetails } from 'src/types/user';

function UserCardDetails({ email, number }: IUserCardDetails) {
    return (
        <Flex flexDir="column" gap={3}>
            <StyledUserCardDetail>
                <StyledUserCardDetailIcon>
                    <Icon as={PhoneIcon} />
                </StyledUserCardDetailIcon>
                <StyledUserCardDetailText>{number}</StyledUserCardDetailText>
            </StyledUserCardDetail>
            <StyledUserCardDetail>
                <StyledUserCardDetailIcon>
                    <Icon as={EmailIcon} />
                </StyledUserCardDetailIcon>
                <StyledUserCardDetailText>{email}</StyledUserCardDetailText>
            </StyledUserCardDetail>
        </Flex>
    );
}

export default UserCardDetails;
