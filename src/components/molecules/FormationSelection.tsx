import React from 'react';
import {useFormationSelectionViewModel} from '../../viewmodels/useFormationSelectionViewModel';
import {FormationSelectionProps} from '../../models/interfaces/Formation.interface';
import {Button, Box} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const FormationSelection: React.FC<FormationSelectionProps> = ({onSelectFormation}) => {
    const {
        formationsTable,
        isTableVisible,
        selectedFormation,
        handleFormationClick,
        toggleTableVisibility
    } = useFormationSelectionViewModel();

    return (
        <div className="formation-selection">
            <Box sx={{display: 'flex', gap: 1}}>
                <Button
                    variant="outlined"
                    onClick={toggleTableVisibility}
                    sx={{
                        width: '150px',
                        height: '40px',
                        fontSize: '14px',
                        textTransform: 'none',
                        color: 'var(--text-color)',
                        borderColor: 'var(--background-color)',
                        backgroundColor: 'var(--background-color)',
                        transition: 'all 0.2s ease',
                        fontFamily: '"Pretendard-Regular", sans-serif',
                        '&:hover': {
                            color: 'var(--background-color)',
                            backgroundColor: 'var(--nav-hover-before-color)',
                        },
                    }}
                >
                    {selectedFormation ? `${selectedFormation.name}` : '포메이션 선택'}
                    {isTableVisible ? <ArrowDropUpIcon sx={{ ml: 1 }} /> : <ArrowDropDownIcon sx={{ ml: 1 }} />}
                </Button>
            </Box>

            {isTableVisible && (
                <table className="formation-table">
                    <thead>
                    <tr>
                        <th>3 Back</th>
                        <th>4 Back</th>
                        <th>5 Back</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.from({length: 5}).map((_, index) => (
                        <tr key={index}>
                            <td onClick={() => handleFormationClick(formationsTable['3 Back'][index], onSelectFormation)}>
                                {formationsTable['3 Back'][index]?.name || ''}
                            </td>
                            <td onClick={() => handleFormationClick(formationsTable['4 Back'][index], onSelectFormation)}>
                                {formationsTable['4 Back'][index]?.name || ''}
                            </td>
                            <td onClick={() => handleFormationClick(formationsTable['5 Back'][index], onSelectFormation)}>
                                {formationsTable['5 Back'][index]?.name || ''}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default FormationSelection;