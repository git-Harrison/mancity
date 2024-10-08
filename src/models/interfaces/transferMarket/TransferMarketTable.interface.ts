import {Player} from '../Player.interface';

export interface TransferMarketTableProps {
    players: Player[];
    onPlayerClick: (player: Player) => void;
}
