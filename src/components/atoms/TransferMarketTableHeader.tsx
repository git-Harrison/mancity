import React from 'react';
import {TextField, Select, MenuItem, Button, InputLabel, FormControl, Box} from '@mui/material';
import {FaSort, FaSortUp, FaSortDown} from 'react-icons/fa';
import {
    TransferMarketTableHeaderProps
} from '../../models/interfaces/transferMarket/TransferMarketTableHeader.interface';

const TransferMarketTableHeader: React.FC<TransferMarketTableHeaderProps> = ({
                                                                                 filters,
                                                                                 handleFilterChange,
                                                                                 handlePositionChange,
                                                                                 handleNationalityChange,
                                                                                 handleSort,
                                                                                 handleResetFilters,
                                                                                 sortKey,
                                                                                 sortOrder,
                                                                                 positions,
                                                                                 nationalities
                                                                             }) => {
    const getSortIcon = (key: string) => {
        if (sortKey !== key) return <FaSort style={{marginLeft: '8px'}}/>;
        return sortOrder === 'desc' ? <FaSortDown style={{marginLeft: '8px'}}/> :
            <FaSortUp style={{marginLeft: '8px'}}/>;
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 2,
                backgroundColor: 'var(--contents-background-color)',
                padding: 2,
                borderRadius: 1,
                fontFamily: '"Pretendard-Regular", sans-serif',
            }}
        >
            <Box sx={{display: 'flex', gap: 2}}>
                <TextField
                    label="선수명 검색"
                    variant="outlined"
                    value={filters.name}
                    onChange={(e) => handleFilterChange(e, 'name')}
                    size="small"
                    sx={{
                        color: 'var(--text-color)',
                        input: {color: 'var(--text-color)'},
                        borderRadius: '4px',
                        '& input:-webkit-autofill': {
                            WebkitBoxShadow: 'unset',
                            WebkitTextFillColor: 'var(--text-color)',
                        },
                    }}
                    InputLabelProps={{
                        sx: {
                            fontFamily: '"Pretendard-Regular", sans-serif',
                            color: 'var(--text-color)',
                            fontSize: '16px',
                        },
                    }}
                />
                <FormControl size="small" sx={{minWidth: 120, backgroundColor: 'transparent'}}>
                    <InputLabel>포지션</InputLabel>
                    <Select value={filters.position} onChange={handlePositionChange}>
                        <MenuItem value="">모든 포지션</MenuItem>
                        {positions.map((position) => (
                            <MenuItem key={position} value={position}>
                                {position}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl size="small" sx={{minWidth: 120, backgroundColor: 'transparent'}}>
                    <InputLabel>국가</InputLabel>
                    <Select value={filters.nationality} onChange={handleNationalityChange}>
                        <MenuItem value="">모든 국가</MenuItem>
                        {nationalities.map((nationality) => (
                            <MenuItem key={nationality} value={nationality}>
                                {nationality}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button
                    variant="outlined"
                    onClick={handleResetFilters}
                    sx={{
                        height: '40px',
                        fontSize: '14px',
                        textTransform: 'none',
                        color: 'var(--text-color)',
                        backgroundColor: 'transparent',
                        borderColor: 'var(--city-color)',
                        fontFamily: '"Pretendard-Regular", sans-serif',
                        '&:hover': {
                            backgroundColor: 'var(--city-color)',
                            color: '#ffffff',
                        },
                    }}
                >
                    초기화
                </Button>
            </Box>
            <Box sx={{display: 'flex', gap: 1}}>
                <Button
                    variant="contained"
                    onClick={() => handleSort('overall_ability')}
                    sx={{
                        width: '100px',
                        height: '44px',
                        fontSize: '16px',
                        textTransform: 'none',
                        color: '#ffffff',
                        backgroundColor: '#3e3d55',
                        transition: 'transform 0.3s ease-in-out',
                        fontFamily: '"Pretendard-Regular", sans-serif',
                        '&:hover': {
                            color: '#ffffff',
                            backgroundColor: 'var(--city-color)',
                        },
                    }}
                >
                    능력치 {getSortIcon('overall_ability')}
                </Button>
                <Button
                    variant="contained"
                    onClick={() => handleSort('transfer_details.transfer_fee')}
                    sx={{
                        width: '100px',
                        height: '44px',
                        fontSize: '16px',
                        textTransform: 'none',
                        color: '#ffffff',
                        backgroundColor: '#3e3d55',
                        transition: 'transform 0.3s ease-in-out',
                        fontFamily: '"Pretendard-Regular", sans-serif',
                        '&:hover': {
                            color: '#ffffff',
                            backgroundColor: 'var(--city-color)',
                        },
                    }}
                >
                    이적료 {getSortIcon('transfer_details.transfer_fee')}
                </Button>
            </Box>
        </Box>
    );
};

export default TransferMarketTableHeader;
