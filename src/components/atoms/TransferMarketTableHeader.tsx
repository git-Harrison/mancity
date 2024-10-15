import React from 'react';
import {TextField, Select, MenuItem, Button, InputLabel, FormControl, Box} from '@mui/material';
import {FaSort, FaSortUp, FaSortDown, FaDownload} from 'react-icons/fa';
import {HiOutlineDownload} from 'react-icons/hi';
import {
    TransferMarketTableHeaderProps
} from '../../models/interfaces/Player.interface';
import {useExcelExportViewModel} from '../../viewmodels/transferMarket/useExcelExportViewModel';

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
                                                                                 nationalities,
                                                                                 players
                                                                             }) => {
    const {downloadExcel} = useExcelExportViewModel();

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
                        transition: 'all 0.2s ease',
                        fontFamily: '"Pretendard-Regular", sans-serif',
                        '&:hover': {
                            backgroundColor: 'var(--city-color)',
                        },
                    }}
                >
                    초기화
                </Button>
            </Box>
            <Box sx={{display: 'flex', gap: 1}}>
                <Button
                    variant="contained"
                    onClick={() => downloadExcel(players)}
                    sx={{
                        width: '180px',
                        height: '44px',
                        fontSize: '16px',
                        textTransform: 'none',
                        color: 'var(--text-color)',
                        backgroundColor: 'var(--table-header-color)',
                        transition: 'all 0.2s ease',
                        fontFamily: '"Pretendard-Regular", sans-serif',
                        '&:hover': {
                            backgroundColor: 'var(--city-color)',
                        },
                    }}
                >
                    선수정보 다운로드 <HiOutlineDownload style={{marginLeft: '4px'}}/>
                </Button>
                <Button
                    variant="contained"
                    onClick={() => handleSort('overall_ability')}
                    sx={{
                        width: '100px',
                        height: '44px',
                        fontSize: '16px',
                        textTransform: 'none',
                        color: 'var(--text-color)',
                        backgroundColor: 'var(--table-header-color)',
                        transition: 'all 0.2s ease',
                        fontFamily: '"Pretendard-Regular", sans-serif',
                        '&:hover': {
                            backgroundColor: 'var(--city-color)',
                        },
                    }}
                >
                    능력치 {getSortIcon('overall_ability')}
                </Button>
                <Button
                    variant="contained"
                    onClick={() => handleSort('transfer_fee')}
                    sx={{
                        width: '100px',
                        height: '44px',
                        fontSize: '16px',
                        textTransform: 'none',
                        color: 'var(--text-color)',
                        backgroundColor: 'var(--table-header-color)',
                        transition: 'all 0.2s ease',
                        fontFamily: '"Pretendard-Regular", sans-serif',
                        '&:hover': {
                            backgroundColor: 'var(--city-color)',
                        },
                    }}
                >
                    이적료 {getSortIcon('transfer_fee')}
                </Button>
            </Box>
        </Box>
    );
};

export default TransferMarketTableHeader;