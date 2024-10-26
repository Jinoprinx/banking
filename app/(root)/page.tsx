import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

 const Home = ()=> {

    const loggedIn = {firstName:'Jino', lastName: 'Prinx', email:'aiprinx@gmail.com'}

    return(
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext= "Manage and access all your account information in one click"
                    />

                    <TotalBalanceBox
                    accounts = {[]}
                    totalBanks = {1}
                    totalCurrentBalance= {1505.75}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>
            < RightSidebar
                user={loggedIn}
                transactions= {[]}
                banks= {[{currentBalance: 455.20}, {currentBalance: 1280.95}]}
                />
        </section>
    )
 }
 export default Home;