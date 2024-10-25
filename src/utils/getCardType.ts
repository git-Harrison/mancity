export const getCardType = (playerNumber: number): string => {
    if ([1042, 101008, 101037, 1051, 101032, 101010, 101021].includes(playerNumber)) {
        return 'bdo';
    } else if ([9, 17, 16, 20, 47, 19, 3, 24, 1026, 101007, 101019, 1055, 101055, 101056].includes(playerNumber)) {
        return 'dld';
    } else if ([101049].includes(playerNumber)) {
        return 'icon';
    }
    return '';
};