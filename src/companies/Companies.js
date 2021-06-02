import React, {useEffect, useState} from "react";
import {InputAdornment, TextField} from "@material-ui/core";
import {get} from "../utils/http";
import "./Companies.css";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {Search} from "@material-ui/icons";
import Button from "@material-ui/core/Button";

// const companiesMock = [
//     ...Array(5).fill(0).map(() => ({name: "Apple", ticker: "AAPL", price: 100.0, up: (Math.random() < 0.5), percentage: Math.random().toFixed(2)})),
//     ...Array(5).fill(0).map(() => ({name: "Tesla", ticker: "TSLA", price: 200.2, up: (Math.random() < 0.5), percentage: Math.random().toFixed(2)})),
//     ...Array(5).fill(0).map(() => ({name: "Microsoft", ticker: "MSFT", price: 50.01, up: (Math.random() < 0.5), percentage: Math.random().toFixed(2)})),
//     ...Array(5).fill(0).map(() => ({name: "NVIDIA", ticker: "NVDA", price: 1000.5, up: (Math.random() < 0.5), percentage: Math.random().toFixed(2)})),
//     ...Array(5).fill(0).map(() => ({name: "Sirius", ticker: "SIR", price: 10000, up: true, percentage: 100})),
// ].sort(() => 0.5 - Math.random());

const Companies = () => {
    const [search, setSearch] = useState("");
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        get('companies')
            .then(res => setCompanies(res))
            .catch(err => {
            })
    }, [])

    const includesSearch = (value) => {
        return value.name.toLowerCase().includes(search.toLowerCase()) || value.ticker.toLowerCase().includes(search.toLowerCase())
    }

    const filteredCompanies = companies.filter(includesSearch);

    return (
        <div className={"companies-screen"}>
            <TextField className={"companies-search-input"}
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start">
                                   <Search />
                               </InputAdornment>
                           ),
                       }}
                       value={search}
                       onChange={e => setSearch(e.target.value)}
                       placeholder={"Search by company name or ticker..."}
            />
            <div className={"companies-list"}>
                {filteredCompanies.length > 0 ? filteredCompanies.map(company => (
                    <div className={"company-card"}>
                        <div className={"company-card-header"}>
                            <span className={"company-ticker"}>{company.ticker}</span>
                            <span className={"company-name"}>{company.name}</span>
                        </div>
                        <div className={"company-card-price"}>
                            <span className={"company-price"}>${company.price}</span>
                            <div className={`company-card-percentage${company.percentage > 0 ? ' price-up' : ' price-down'}`}>
                                <span className={"company-percentage"}>% {company.percentage}</span>
                                {company.percentage > 0 ? <ArrowUpwardIcon className={"arrow-icon"}/> : <ArrowDownwardIcon className={"arrow-icon"}/>}
                            </div>
                        </div>
                        <Button color={"default"} variant={"contained"}>Comprar</Button>
                    </div>
                )) :
                <div className={"no-results-text"}>
                    No se han encontrado resultados para su búsqueda
                </div>
                }
            </div>
        </div>
    )
}

export default Companies;
