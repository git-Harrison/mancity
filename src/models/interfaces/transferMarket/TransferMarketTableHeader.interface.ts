import { ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';

export interface TransferMarketTableHeaderProps {
    filters: {
        position: string;
        nationality: string;
        name: string;
    };
    handleFilterChange: (e: ChangeEvent<any>, filterType: string) => void;
    handlePositionChange: (e: SelectChangeEvent<string>) => void;
    handleNationalityChange: (e: SelectChangeEvent<string>) => void;
    handleSort: (key: string) => void;
    handleResetFilters: () => void;
    sortKey: string;
    sortOrder: string;
}
