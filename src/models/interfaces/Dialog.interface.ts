export interface CommonDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title: string;
    content: string | React.ReactNode; // JSX 요소를 받을 수 있음
    dialogType?: 'confirm' | 'success' | 'insufficientCity' | 'playerLimitExceeded' | 'failure';
    onExited?: () => void;
}