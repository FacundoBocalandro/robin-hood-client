import React, {useEffect, useState} from "react";
import {InputAdornment, TextField} from "@material-ui/core";
import {get, post} from "../utils/http";
import "./Companies.css";
import {Search} from "@material-ui/icons";
import CompanyCard from "../company-card/CompanyCard";
import BuyStockModal from "../buy-stock-modal/BuyStockModal";
import {useHistory} from "react-router";

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
    const [modalInfo, setModalInfo] = useState({open: false});
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        get('user')
            .then(res => setUserInfo(res));
        get('companies')
            .then(res => setCompanies(res))
            .catch(err => console.log(err));
    }, [])

    const includesSearch = (value) => {
        return value.name.toLowerCase().includes(search.toLowerCase()) || value.ticker.toLowerCase().includes(search.toLowerCase())
    }

    const filteredCompanies = companies.filter(includesSearch);

    const openModal = (company) => {
        setModalInfo({open: true, company, shares: 0});
    }

    const history = useHistory();
    const redirectToStocks = () => {
        history.push('/main/stocks')
    }

    const handleBuy = () => {
        post('transaction', {
            amount: modalInfo.shares, price: modalInfo.company.price, tickerDto: {
                companyName: modalInfo.company.name,
                id: modalInfo.company.id,
                tickerName: modalInfo.company.ticker
            }
        }).then((res) => {
            setUserInfo(res.userDto)
            setModalInfo({...modalInfo, confirmed: true})
        })
    }

    const closeModal = () => setModalInfo({open: false})

    const onlyNumbers = (value) => {
        return value.replaceAll(/([^0-9])+/g, '')
    }

    const changeShares = (e) => {
        setModalInfo({...modalInfo, shares: onlyNumbers(e.target.value)})
    }


    return (
        <div className={"companies-screen"}>
            {modalInfo.open && <BuyStockModal modalInfo={modalInfo}
                                              closeModal={closeModal}
                                              handleBuy={handleBuy}
                                              changeShares={changeShares}
                                              redirectToStocks={redirectToStocks} accountBalance={userInfo.accountBalance}/>}

            <TextField className={"companies-search-input"}
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start">
                                   <Search/>
                               </InputAdornment>
                           ),
                       }}
                       data-cy={"company-search"}
                       value={search}
                       onChange={e => setSearch(e.target.value)}
                       placeholder={"Search by company name or ticker..."}
            />
            <div className={"companies-list"}>
                {filteredCompanies.length > 0 ? filteredCompanies.map(company => (
                        <CompanyCard company={company} onClick={() => openModal(company)}/>
                    )) :
                    <div className={"no-results-text"}>
                        No se han encontrado resultados para su búsqueda
                    </div>
                }
            </div>
        </div>
    )
}

export default Companies
