import React from 'react';
import {GridLoader} from 'react-spinners';
import {LoadingSpinnerProps} from '../../models/interfaces/Loading.interface';

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({message, size = 15}) => {
    return (
        <div className="loading-overlay">
            <div className="loading-spinner">
                <GridLoader color="#98C5E9" size={15}/>
                <span>{message}</span>
            </div>
        </div>
    );
};

export default LoadingSpinner;
