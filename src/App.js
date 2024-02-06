// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom';
// import { Switch, Route, Redirect } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import YorePay from './pages/YorePay';
import YoreFinances from './pages/YoreFinances';
import YoreCredit from './pages/YoreCredit';

import GamifiedEducationPlatform from './pages/GamifiedEducationPlatform';
import FinancialHealth from './pages/FinancialHealth';
import Solutions from './pages/Solutions';
import YoreAi from './pages/YoreAi';
import Rewards from './pages/Rewards';
import About from './pages/About';


// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";

// import { Environment, OrbitControls, useFBX, useGLTF } from "@react-three/drei";
// import ModelView from "./ModelViewer";


function App() {
  return (
    <div className="App">
      
        {/* <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/yoreweb/yore-pay' component={YorePay} />
          <Route exact path='/yoreweb/yore-pay/banking-pay' component={YorePay} />
          <Route exact path='/yoreweb/yore-pay/postpaid-account-pay' component={YorePay} />
          <Route exact path='/yoreweb/yore-pay/split-pay' component={YorePay} />
          <Route exact path='/yoreweb/yore-pay/cards-pay' component={YorePay} />
          <Route exact path='/yoreweb/yore-pay/crypto-pay' component={YorePay} />

          <Route exact path='/yoreweb/yore-finances' component={YoreFinances} />
          <Route exact path='/yoreweb/yore-finances/cashflow-finances' component={YoreFinances} />
          <Route exact path='/yoreweb/yore-finances/networth-finances' component={YoreFinances} />
          <Route exact path='/yoreweb/yore-finances/credit-health-finances' component={YoreFinances} />
          <Route exact path='/yoreweb/yore-finances/lending-borrowing-finances' component={YoreFinances} />
          <Route exact path='/yoreweb/yore-finances/budget-finances' component={YoreFinances} />

          <Route exact path='/yoreweb/yore-credit' component={YoreCredit} />
          <Route exact path='/yoreweb/yore-credit/banking-credit' component={YoreCredit} />
          <Route exact path='/yoreweb/yore-credit/postpaid-account-credit' component={YoreCredit} />
          <Route exact path='/yoreweb/yore-credit/split-credit' component={YoreCredit} />
          <Route exact path='/yoreweb/yore-credit/cards-credit' component={YoreCredit} />
          <Route exact path='/yoreweb/yore-credit/crypto-credit' component={YoreCredit} />

          <Route exact path='/yoreweb/gamified-education-platform' component={GamifiedEducationPlatform} />
          <Route exact path='/yoreweb/financial-health' component={FinancialHealth} />
          <Route exact path='/yoreweb/solutions' component={Solutions} />
          <Route exact path='/yoreweb/yore-ai' component={YoreAi} />
          <Route exact path='/yoreweb/rewards' component={Rewards} />
          <Route exact path='/yoreweb/about' component={About} />
          <Redirect to='/' />
        </Switch> */}


        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/yore-pay' component={YorePay} />
          <Route exact path='/yore-pay/banking' component={YorePay} />
          <Route exact path='/yore-pay/split-pay' component={YorePay} />
          <Route exact path='/yore-pay/postpaid-account' component={YorePay} />
          <Route exact path='/yore-pay/cards' component={YorePay} />
          <Route exact path='/yore-pay/crypto' component={YorePay} />

          <Route exact path='/yore-finances' component={YoreFinances} />
          <Route exact path='/yore-finances/cash-flow-manager' component={YoreFinances} />
          <Route exact path='/yore-finances/net-worth-analysis' component={YoreFinances} />
          <Route exact path='/yore-finances/credit-health-manager' component={YoreFinances} />
          <Route exact path='/yore-finances/loaning' component={YoreFinances} />
          <Route exact path='/yore-finances/budget-tracker' component={YoreFinances} />

          <Route exact path='/yore-credit' component={YoreCredit} />
          <Route exact path='/yore-credit/micro-credit' component={YoreCredit} />
          <Route exact path='/yore-credit/p2p-credit' component={YoreCredit} />
          <Route exact path='/yore-credit/personal-credit' component={YoreCredit} />
          <Route exact path='/yore-credit/gold-credit' component={YoreCredit} />
          <Route exact path='/yore-credit/vehicle-credit' component={YoreCredit} />

          <Route exact path='/gamified-education-platform' component={GamifiedEducationPlatform} />
          <Route exact path='/financial-health' component={FinancialHealth} />
          <Route exact path='/solutions' component={Solutions} />
          <Route exact path='/yore-ai' component={YoreAi} />
          <Route exact path='/rewards' component={Rewards} />
          <Route exact path='/about' component={About} />
          <Redirect to='/' />
        </Switch>


      {/* <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/YorePay' component={YorePay} />
          <Route exact path='/Solutions' component={Solutions} />
          <Route exact path='/About' component={About} />
        </Switch>
      </Router> */}


    </div>
  );
}

export default App;
