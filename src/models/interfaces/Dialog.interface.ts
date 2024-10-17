export interface CommonDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title: string;
    content: string | React.ReactNode;
    dialogType?: 'confirm' | 'success' | 'insufficientCity' | 'playerLimitExceeded';
    onExited?: () => void;
}