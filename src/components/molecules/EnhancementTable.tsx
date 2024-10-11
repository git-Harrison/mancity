import React from 'react';

const enhancementData = [
    { level: "1강 → 2강", ovr: "+1", successRate: "100.0%" },
    { level: "2강 → 3강", ovr: "+1", successRate: "81.0%" },
    { level: "3강 → 4강", ovr: "+2", successRate: "64.0%" },
    { level: "4강 → 5강", ovr: "+2", successRate: "50.0%" },
    { level: "5강 → 6강", ovr: "+2", successRate: "26.0%" },
    { level: "6강 → 7강", ovr: "+3", successRate: "15.0%" },
    { level: "7강 → 8강", ovr: "+4", successRate: "7.0%" },
    { level: "8강 → 9강", ovr: "+4", successRate: "4.0%" },
    { level: "9강 → 10강", ovr: "+5", successRate: "2.0%" },
];

const EnhancementTable: React.FC = () => {
    return (
        <div className="enhancement-table-container">
            <table className="enhancement-table">
                <thead>
                <tr>
                    <th>강화 등급</th>
                    <th>상승 OVR</th>
                    <th>강화 성공 확률</th>
                </tr>
                </thead>
                <tbody>
                {enhancementData.map((data, index) => (
                    <tr key={index}>
                        <td>{data.level}</td>
                        <td>{data.ovr}</td>
                        <td>{data.successRate}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default EnhancementTable;