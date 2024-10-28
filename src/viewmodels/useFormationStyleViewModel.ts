export const useFormationStyleViewModel = () => {
    const formationPositionStyles: Record<string, Record<string, { top: string; left: string }[]>> = {
        // 3 Back
        '3-4-3': {
            goalkeeper: [{top: '76%', left: '50%'}],
            defenders: [
                {top: '55%', left: '20%'},   // Left Center-back
                {top: '55%', left: '50%'},   // Center-back
                {top: '55%', left: '80%'},   // Right Center-back
            ],
            midfielders: [
                {top: '35%', left: '20%'},   // Left-midfield
                {top: '35%', left: '40%'},   // Center-midfield
                {top: '35%', left: '60%'},   // Center-midfield
                {top: '35%', left: '80%'},   // Right-midfield
            ],
            forwards: [
                {top: '10%', left: '30%'},   // Left-wing
                {top: '10%', left: '50%'},   // Striker
                {top: '10%', left: '70%'},   // Right-wing
            ]
        },

        '3-4-3(2)': {
            goalkeeper: [{top: '76%', left: '50%'}],
            defenders: [
                {top: '55%', left: '20%'},   // Left Center-back
                {top: '55%', left: '50%'},   // Center-back
                {top: '55%', left: '80%'},   // Right Center-back
            ],
            midfielders: [
                {top: '35%', left: '20%'},   // Left-midfield
                {top: '35%', left: '40%'},   // Center-midfield
                {top: '35%', left: '60%'},   // Center-midfield
                {top: '35%', left: '80%'},   // Right-midfield
            ],
            forwards: [
                {top: '10%', left: '40%'},   // Left Striker
                {top: '10%', left: '60%'},   // Right Striker
                {top: '5%', left: '50%'},    // Center Forward
            ]
        },

        '3-4-1-2': {
            goalkeeper: [{top: '76%', left: '50%'}],
            defenders: [
                {top: '55%', left: '20%'},   // Left Center-back
                {top: '55%', left: '50%'},   // Center-back
                {top: '55%', left: '80%'},   // Right Center-back
            ],
            midfielders: [
                {top: '35%', left: '20%'},   // Left-midfield
                {top: '35%', left: '40%'},   // Center-midfield
                {top: '35%', left: '60%'},   // Center-midfield
                {top: '35%', left: '80%'},   // Right-midfield
            ],
            forwards: [
                {top: '20%', left: '50%'},   // Attacking-midfield
                {top: '10%', left: '40%'},   // Left Striker
                {top: '10%', left: '60%'},   // Right Striker
            ]
        },

        '3-2-3-2': {
            goalkeeper: [{top: '76%', left: '50%'}],
            defenders: [
                {top: '60%', left: '20%'},   // Left Center-back
                {top: '60%', left: '50%'},   // Center-back
                {top: '60%', left: '80%'},   // Right Center-back
            ],
            midfielders: [
                {top: '40%', left: '35%'},   // Defensive-midfield
                {top: '40%', left: '65%'},   // Defensive-midfield
                {top: '25%', left: '20%'},   // Left-midfield
                {top: '30%', left: '80%'},   // Right-midfield
                {top: '25%', left: '50%'},   // Center-attacking-midfield
            ],
            forwards: [
                {top: '5%', left: '40%'},   // Left Striker
                {top: '5%', left: '60%'},   // Right Striker
            ]
        },

        '3-1-4-2': {
            goalkeeper: [{top: '76%', left: '50%'}],
            defenders: [
                {top: '55%', left: '20%'},   // Left Center-back
                {top: '55%', left: '50%'},   // Center-back
                {top: '55%', left: '80%'},   // Right Center-back
            ],
            midfielders: [
                {top: '40%', left: '50%'},   // Defensive-midfield
                {top: '35%', left: '20%'},   // Left-midfield
                {top: '35%', left: '40%'},   // Center-midfield
                {top: '35%', left: '60%'},   // Center-midfield
                {top: '35%', left: '80%'},   // Right-midfield
            ],
            forwards: [
                {top: '10%', left: '35%'},   // Left Striker
                {top: '10%', left: '65%'},   // Right Striker
            ]
        },

        // 4 Back
        '4-2-3-1': {
            goalkeeper: [{top: '76%', left: '50%'}],
            defenders: [
                {top: '60%', left: '20%'},   // Left-back
                {top: '55%', left: '35%'},   // Left Center-back
                {top: '55%', left: '65%'},   // Right Center-back
                {top: '60%', left: '80%'},   // Right-back
            ],
            midfielders: [
                {top: '35%', left: '40%'},   // Defensive-midfield
                {top: '35%', left: '60%'},   // Defensive-midfield
                {top: '30%', left: '20%'},   // Left-midfield
                {top: '30%', left: '50%'},   // Center-attacking-midfield
                {top: '30%', left: '80%'},   // Right-midfield
            ],
            forwards: [
                {top: '10%', left: '50%'},   // Striker
            ]
        },

        '4-4-2': {
            goalkeeper: [{top: '76%', left: '50%'}],
            defenders: [
                {top: '60%', left: '20%'},   // Left-back
                {top: '55%', left: '40%'},   // Left Center-back
                {top: '55%', left: '60%'},   // Right Center-back
                {top: '60%', left: '80%'},   // Right-back
            ],
            midfielders: [
                {top: '30%', left: '20%'},   // Left-midfield
                {top: '30%', left: '40%'},   // Left Center-midfield
                {top: '30%', left: '60%'},   // Right Center-midfield
                {top: '30%', left: '80%'},   // Right-midfield
            ],
            forwards: [
                {top: '10%', left: '40%'},   // Left Striker
                {top: '10%', left: '60%'},   // Right Striker
            ]
        },

        '4-3-3': {
            goalkeeper: [{top: '76%', left: '50%'}],
            defenders: [
                {top: '60%', left: '20%'},   // Left-back
                {top: '60%', left: '40%'},   // Left Center-back
                {top: '60%', left: '60%'},   // Right Center-back
                {top: '60%', left: '80%'},   // Right-back
            ],
            midfielders: [
                {top: '35%', left: '35%'},   // Left Center-midfield
                {top: '30%', left: '50%'},   // Center-midfield
                {top: '35%', left: '65%'},   // Right Center-midfield
            ],
            forwards: [
                {top: '10%', left: '20%'},   // Left-wing
                {top: '10%', left: '50%'},   // Striker
                {top: '10%', left: '80%'},   // Right-wing
            ]
        },

        '4-4-1-1': {
            goalkeeper: [{top: '76%', left: '50%'}],
            defenders: [
                {top: '60%', left: '20%'},   // Left-back
                {top: '60%', left: '40%'},   // Left Center-back
                {top: '60%', left: '60%'},   // Right Center-back
                {top: '60%', left: '80%'},   // Right-back
            ],
            midfielders: [
                {top: '20%', left: '20%'},   // Left-midfield
                {top: '35%', left: '35%'},   // Left Center-midfield
                {top: '35%', left: '65%'},   // Right Center-midfield
                {top: '20%', left: '80%'},   // Right-midfield
            ],
            forwards: [
                {top: '25%', left: '50%'},   // Attacking-midfield
                {top: '5%', left: '50%'},   // Striker
            ]
        },

        '4-1-4-1': {
            goalkeeper: [{top: '76%', left: '50%'}],
            defenders: [
                {top: '60%', left: '20%'},   // Left-back
                {top: '60%', left: '40%'},   // Left Center-back
                {top: '60%', left: '60%'},   // Right Center-back
                {top: '60%', left: '80%'},   // Right-back
            ],
            midfielders: [
                {top: '40%', left: '50%'},   // Defensive-midfield
                {top: '30%', left: '20%'},   // Left-midfield
                {top: '30%', left: '40%'},   // Left Center-midfield
                {top: '30%', left: '60%'},   // Right Center-midfield
                {top: '30%', left: '80%'},   // Right-midfield
            ],
            forwards: [
                {top: '10%', left: '50%'},   // Striker
            ]
        },

        // 5 Back
        '5-3-2': {
            goalkeeper: [{top: '76%', left: '50%'}],
            defenders: [
                {top: '60%', left: '10%'},   // Left-wing-back
                {top: '55%', left: '25%'},   // Left Center-back
                {top: '55%', left: '50%'},   // Center-back
                {top: '55%', left: '75%'},   // Right Center-back
                {top: '60%', left: '90%'},   // Right-wing-back
            ],
            midfielders: [
                {top: '30%', left: '35%'},   // Left Center-midfield
                {top: '30%', left: '50%'},   // Center-midfield
                {top: '30%', left: '65%'},   // Right Center-midfield
            ],
            forwards: [
                {top: '10%', left: '40%'},   // Left Striker
                {top: '10%', left: '60%'},   // Right Striker
            ]
        },

        '5-4-1': {
            goalkeeper: [{top: '76%', left: '50%'}],
            defenders: [
                {top: '60%', left: '10%'},   // Left-wing-back
                {top: '55%', left: '25%'},   // Left Center-back
                {top: '55%', left: '50%'},   // Center-back
                {top: '55%', left: '75%'},   // Right Center-back
                {top: '60%', left: '90%'},   // Right-wing-back
            ],
            midfielders: [
                {top: '30%', left: '20%'},   // Left-midfield
                {top: '30%', left: '40%'},   // Left Center-midfield
                {top: '30%', left: '60%'},   // Right Center-midfield
                {top: '30%', left: '80%'},   // Right-midfield
            ],
            forwards: [
                {top: '10%', left: '50%'},   // Striker
            ]
        },

        '5-2-1-2': {
            goalkeeper: [{top: '76%', left: '50%'}],
            defenders: [
                {top: '60%', left: '10%'},   // Left-wing-back
                {top: '55%', left: '25%'},   // Left Center-back
                {top: '55%', left: '50%'},   // Center-back
                {top: '55%', left: '75%'},   // Right Center-back
                {top: '60%', left: '90%'},   // Right-wing-back
            ],
            midfielders: [
                {top: '30%', left: '40%'},   // Left Center-midfield
                {top: '30%', left: '60%'},   // Right Center-midfield
                {top: '25%', left: '50%'},   // Center-attacking-midfield
            ],
            forwards: [
                {top: '10%', left: '40%'},   // Left Striker
                {top: '10%', left: '60%'},   // Right Striker
            ]
        },

        '5-2-2-1': {
            goalkeeper: [{top: '76%', left: '50%'}],
            defenders: [
                {top: '60%', left: '10%'},   // Left-wing-back
                {top: '55%', left: '25%'},   // Left Center-back
                {top: '55%', left: '50%'},   // Center-back
                {top: '55%', left: '75%'},   // Right Center-back
                {top: '60%', left: '90%'},   // Right-wing-back
            ],
            midfielders: [
                {top: '30%', left: '40%'},   // Left Center-midfield
                {top: '30%', left: '60%'},   // Right Center-midfield
            ],
            forwards: [
                {top: '10%', left: '20%'},   // Left Forward
                {top: '10%', left: '50%'},   // Striker
                {top: '10%', left: '80%'},   // Right Forward
            ]
        },

        '5-3-2(2)': {
            goalkeeper: [{top: '76%', left: '50%'}],
            defenders: [
                {top: '60%', left: '10%'},   // Left-wing-back
                {top: '55%', left: '30%'},   // Left Center-back
                {top: '55%', left: '50%'},   // Center-back
                {top: '55%', left: '70%'},   // Right Center-back
                {top: '60%', left: '90%'},   // Right-wing-back
            ],
            midfielders: [
                {top: '30%', left: '35%'},   // Left Center-midfield
                {top: '30%', left: '50%'},   // Center-midfield
                {top: '30%', left: '65%'},   // Right Center-midfield
            ],
            forwards: [
                {top: '10%', left: '40%'},   // Left Striker
                {top: '10%', left: '60%'},   // Right Striker
            ]
        }
    };

    const getFormationPositions = (formationName: string) => {
        return formationPositionStyles[formationName] || null;
    };

    return {
        getFormationPositions,
    };
};
