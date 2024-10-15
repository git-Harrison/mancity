import * as XLSX from 'xlsx';
import {Player} from '../../models/interfaces/Player.interface';

export const useExcelExportViewModel = () => {
    const downloadExcel = (players: Player[]) => {
        const exportData = players.map((player) => ({
            Name: player.name,
            Position: player.position,
            Nationality: player.nationality,
            'Overall Ability': player.overall_ability,
            'Transfer Fee': player.transfer_details ? player.transfer_details.transfer_fee : 'N/A',
        }));

        const worksheet = XLSX.utils.json_to_sheet(exportData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Players');
        XLSX.writeFile(workbook, 'transfer_market_players.xlsx');
    };

    return {
        downloadExcel,
    };
};