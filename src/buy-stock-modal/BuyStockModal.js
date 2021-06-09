import React from "react";
import "./BuyStockModal.css";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import {TextField} from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";

const BuyStockModal = ({modalInfo, closeModal, redirectToStocks, handleBuy, changeShares, accountBalance}) => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <Dialog open={modalInfo.open} onClose={closeModal} aria-labelledby="form-dialog-title">
            <div className={"buy-modal"}>
                {modalInfo.confirmed ?
                    <div className={"success-checkmark-container"}>
                        <div className="success-checkmark">
                            <div className="check-icon">
                                <span className="icon-line line-tip"/>
                                <span className="icon-line line-long"/>
                                <div className="icon-circle"/>
                                <div className="icon-fix"/>
                            </div>
                        </div>
                        <Button onClick={redirectToStocks} variant={"contained"} color={"primary"}>
                            My Stocks
                        </Button>
                    </div> :
                    <>
                        <DialogTitle id="form-dialog-title">Buy {modalInfo.company.ticker} stock</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Buy {modalInfo.company.name} stock at ${modalInfo.company.price} per share.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Shares"
                                placeholder={"Enter number of shares..."}
                                fullWidth
                                value={modalInfo.shares}
                                onChange={changeShares}
                                error={(modalInfo.shares * modalInfo.company.price) > accountBalance}
                            />
                            <div>Total Price: ${numberWithCommas(modalInfo.shares * modalInfo.company.price)}</div>
                            <div>Your Balance: ${numberWithCommas(accountBalance)}</div>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closeModal} variant={"contained"}>
                                Cancel
                            </Button>
                            <Button onClick={handleBuy} color="primary" variant={"contained"} disabled={(modalInfo.shares * modalInfo.company.price) > accountBalance || modalInfo.shares === 0}>
                                Buy
                            </Button>
                        </DialogActions>
                    </>}
            </div>
        </Dialog>
    )
}

export default BuyStockModal;
