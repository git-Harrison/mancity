import React from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@mui/material';
import {CommonDialogProps} from '../../models/interfaces/Dialog.interface';

const CommonDialog: React.FC<CommonDialogProps> = ({
                                                       open,
                                                       onClose,
                                                       onConfirm,
                                                       title,
                                                       content,
                                                       dialogType = 'confirm',
                                                   }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="common-dialog-title"
            className={`common-dialog ${dialogType}`}
        >
            <DialogTitle id="common-dialog-title">{title}</DialogTitle>
            <DialogContent>{content}</DialogContent>
            <DialogActions>
                {dialogType === 'confirm' && (
                    <>
                        <Button onClick={onClose} color="secondary">
                            취소
                        </Button>
                        <Button onClick={onConfirm} color="primary">
                            확인
                        </Button>
                    </>
                )}
                {dialogType === 'success' && (
                    <Button onClick={onClose} color="primary">
                        확인
                    </Button>
                )}
                {dialogType === 'insufficientCity' && (
                    <Button onClick={onClose} color="primary">
                        닫기
                    </Button>
                )}
                {dialogType === 'playerLimitExceeded' && (
                    <Button onClick={onClose} color="primary">
                        닫기
                    </Button>
                )}
                {dialogType === 'failure' && (
                    <Button onClick={onClose} color="primary">
                        닫기
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
};

export default CommonDialog;