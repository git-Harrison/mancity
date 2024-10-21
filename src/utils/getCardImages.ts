import {Player} from '../models/interfaces/Player.interface';

const iconsNumber = [101049];
const dboNumbers = [1042, 101008, 101037, 1051, 101032, 101010, 101021];
const dldNumbers = [9, 17, 16, 20, 47, 19, 3, 24, 1026, 101007, 101019, 1055, 101055, 101056];

export const getCardImages = (player: Player) => {
    const isIconsNumber = iconsNumber.includes(player.number);
    const isBboNumbers = dboNumbers.includes(player.number);
    const isBldNumbers = dldNumbers.includes(player.number);

    if (isBldNumbers) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_bld_bg.png`,
            league: `${process.env.PUBLIC_URL}/images/player_card_league_white_icon.webp`,
            tag: `${process.env.PUBLIC_URL}/images/card_bld_tag.png`,
        };
    }

    if (isBboNumbers) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_bdo_bg.png`,
            league: `${process.env.PUBLIC_URL}/images/player_card_bdo_icon.webp`,
            tag: `${process.env.PUBLIC_URL}/images/card_bdo_tag.png`,
        };
    }

    if (isIconsNumber) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_icon_bg.png`,
            league: `${process.env.PUBLIC_URL}/images/player_card_bdo_icon2.webp`,
            tag: `${process.env.PUBLIC_URL}/images/card_icon_tag.png`,
        };
    }

    if (player.transfer_date) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_toty_bg.png`,
            league: `${process.env.PUBLIC_URL}/images/player_card_league_icon.webp`,
            tag: `${process.env.PUBLIC_URL}/images/card_toty_tag.png`,
        };
    }

    if (player.overall_ability < 60) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_default_bg.png`,
            league: `${process.env.PUBLIC_URL}/images/player_card_league_icon.webp`,
            tag: `${process.env.PUBLIC_URL}/images/card_default_tag.png`,
        };
    } else if (player.overall_ability < 70) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_tt_bg.png`,
            league: `${process.env.PUBLIC_URL}/images/player_card_league_icon.webp`,
            tag: `${process.env.PUBLIC_URL}/images/card_tt_tag.png`,
        };
    } else if (player.overall_ability < 80) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_cc_bg.png`,
            league: `${process.env.PUBLIC_URL}/images/player_card_league_icon.webp`,
            tag: `${process.env.PUBLIC_URL}/images/card_cc_tag.png`,
        };
    } else if (player.overall_ability < 90) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_ld_bg.png`,
            league: `${process.env.PUBLIC_URL}/images/player_card_league_icon.webp`,
            tag: `${process.env.PUBLIC_URL}/images/card_ld_tag.png`,
        };
    } else if (player.overall_ability < 100) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_jnm_bg.png`,
            league: `${process.env.PUBLIC_URL}/images/player_card_league_icon.webp`,
            tag: `${process.env.PUBLIC_URL}/images/card_jnm_tag.png`,
        };
    } else if (player.overall_ability < 110) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_ut_bg.png`,
            league: `${process.env.PUBLIC_URL}/images/player_card_league_icon.webp`,
            tag: `${process.env.PUBLIC_URL}/images/card_ut_tag.png`,
        };
    } else if (player.overall_ability < 120) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_cu_bg.png`,
            league: `${process.env.PUBLIC_URL}/images/player_card_league_white_icon.webp`,
            tag: `${process.env.PUBLIC_URL}/images/card_cu_tag.png`,
        };
    } else {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_default_bg.png`,
            league: `${process.env.PUBLIC_URL}/images/player_card_league_icon.webp`,
            tag: `${process.env.PUBLIC_URL}/images/card_default_tag.png`,
        };
    }
};