import {Player} from '../models/interfaces/Player.interface';

const iconNumbers = [1042, 101008, 101049, 101037, 1051];

// getCardImages 함수 정의
export const getCardImages = (player: Player) => {
    const isIconNumbers = iconNumbers.includes(player.number);

    if (isIconNumbers) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_icon_bg.png`,
            tag: `${process.env.PUBLIC_URL}/images/card_icon_tag.png`,
            badge: `${process.env.PUBLIC_URL}/images/card_icon_badge.png`
        };
    }

    if (player.transfer_date) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_toty_bg.png`,
            tag: `${process.env.PUBLIC_URL}/images/card_toty_tag.png`,
            badge: `${process.env.PUBLIC_URL}/images/card_toty_badge.png`
        };
    }

    if (player.overall_ability < 60) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_default_bg.png`,
            tag: `${process.env.PUBLIC_URL}/images/card_default_tag.png`,
            badge: `${process.env.PUBLIC_URL}/images/card_default_badge.png`
        };
    } else if (player.overall_ability < 70) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_tt_bg.png`,
            tag: `${process.env.PUBLIC_URL}/images/card_tttag.png`,
            badge: `${process.env.PUBLIC_URL}/images/card_tt_badge.png`
        };
    } else if (player.overall_ability < 80) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_fc_bg.png`,
            tag: `${process.env.PUBLIC_URL}/images/card_fc_tag.png`,
            badge: `${process.env.PUBLIC_URL}/images/card_fc_badge.png`
        };
    } else if (player.overall_ability < 90) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_cc_bg.png`,
            tag: `${process.env.PUBLIC_URL}/images/card_cc_tag.png`,
            badge: `${process.env.PUBLIC_URL}/images/card_cc_badge.png`
        };
    } else if (player.overall_ability < 100) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_ld_bg.png`,
            tag: `${process.env.PUBLIC_URL}/images/card_ld_tag.png`,
            badge: `${process.env.PUBLIC_URL}/images/card_ld_badge.png`
        };
    } else if (player.overall_ability < 110) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_jnm_bg.png`,
            tag: `${process.env.PUBLIC_URL}/images/card_jnm_tag.png`,
            badge: `${process.env.PUBLIC_URL}/images/card_jnm_badge.png`
        };
    } else if (player.overall_ability < 120) {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_ut_bg.png`,
            tag: `${process.env.PUBLIC_URL}/images/card_ut_tag.png`,
            badge: `${process.env.PUBLIC_URL}/images/card_ut_badge.png`
        };
    } else {
        return {
            background: `${process.env.PUBLIC_URL}/images/card_default_bg.png`,
            tag: `${process.env.PUBLIC_URL}/images/card_default_tag.png`,
            badge: `${process.env.PUBLIC_URL}/images/card_default_badge.png`
        };
    }
};