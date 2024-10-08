import { Player } from '../Player.interface';

export interface TransferMarketTableBodyProps {
    players: Player[];
    onPlayerClick: (player: Player) => void;
}
