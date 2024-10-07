export interface CommonDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title: string;
    content: string | React.ReactNode;
    dialogType?: 'confirm' | 'success' | 'failure';
    onExited?: () => void;
}