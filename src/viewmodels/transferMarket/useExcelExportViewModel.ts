import * as XLSX from 'xlsx';
import {Player} from '../../models/interfaces/Player.interface';

export const useExcelExportViewModel = () => {
    const downloadExcel = (players: Player[]) => {
        const exportData = players.map((player) => ({
            Name: player.name,
            Number: player.number,
            Position: player.position,
            Nationality: player.nationality,
            'Overall Ability': player.overall_ability,
            'Dominant Foot': player.dominant_foot || 'N/A',
            Height: player.height ? `${player.height} cm` : 'N/A',
            Weight: player.weight ? `${player.weight} kg` : 'N/A',
            'Date of Birth': player.date_of_birth || 'N/A',
            'Current Team': player.current_team || 'N/A',
            'Previous Team': player.previous_team || 'N/A',
            'Transfer Date': player.transfer_date || 'N/A',
            'Enhancement Level': player.enhancementLevel,
            Honors: player.honors
                ? Object.entries(player.honors)
                    .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : ''}`)
                    .join('; ')
                : 'N/A',
            'Club History': player.club_history
                ? player.club_history
                    .map(
                        (history) => `${history.year} - ${history.club}${history.loan ? ' (Loan)' : ''}`
                    )
                    .join('; ')
                : 'N/A',
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