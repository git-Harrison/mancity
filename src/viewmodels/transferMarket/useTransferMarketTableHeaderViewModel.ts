import {useState, ChangeEvent} from 'react';
import {SelectChangeEvent} from '@mui/material';

export const useTransferMarketTableHeaderViewModel = () => {
    const [filters, setFilters] = useState({
        position: '',
        nationality: '',
        name: '',
    });

    const handleFilterChange = (e: ChangeEvent<any>, filterType: string) => {
        setFilters({...filters, [filterType]: e.target.value});
    };

    const handlePositionChange = (e: SelectChangeEvent<string>) => {
        setFilters({...filters, position: e.target.value});
    };

    const handleNationalityChange = (e: SelectChangeEvent<string>) => {
        setFilters({...filters, nationality: e.target.value});
    };

    const handleResetFilters = () => {
        setFilters({
            position: '',
            nationality: '',
            name: '',
        });
    };

    return {
        filters,
        handleFilterChange,
        handlePositionChange,
        handleNationalityChange,
        handleResetFilters,
    };
};
