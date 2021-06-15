import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Button from "@material-ui/core/Button";
import "./CompanyCard.css"


const CompanyCard = (props) => {

    return (
        <div className={"company-card"}>
            <div className={"company-card-header"}>
                <span className={"company-ticker"}>{props.company.ticker}</span>
                <span className={"company-name"}>{props.company.name}</span>
            </div>
            <div className={"company-card-price"}>
                <span className={"company-price"}>${props.company.price}</span>
                <div
                    className={`company-card-percentage${props.company.percentage > 0 ? ' price-up' : ' price-down'}`}>
                    <span className={"company-percentage"}>% {props.company.percentage}</span>
                    {props.company.percentage > 0 ? <ArrowUpwardIcon className={"arrow-icon"}/> :
                        <ArrowDownwardIcon className={"arrow-icon"}/>}
                </div>
            </div>
            <Button color={"default"} variant={"contained"}
                    data-cy={"buy-button"}
                    onClick={props.onClick}>Buy</Button>
        </div>
    )
}

export default CompanyCard;
