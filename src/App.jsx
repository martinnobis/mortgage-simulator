import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { useTranslation } from 'react-i18next'

import Home from './mortgage/pages/Home'
import Faq from './mortgage/pages/Faq'
import PrivacyPolicy from './mortgage/pages/PrivacyPolicy'
import AcceptableUse from './mortgage/pages/AcceptableUse'
import Contact from './mortgage/pages/Contact'

import { calcMinPayment } from "./mortgage/mortgage"

import './scss/custom.scss';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import TopNavBar from './mortgage/TopNavBar'
import Footer from './mortgage/Footer'

import "./App.css" // import after Bootstrap stuff so that it can override it

const defaultChange = {
  title: "Add a title",
  type: "Interest rate change",
  amount: 0,
  date: JSON.stringify(new Date()),
  active: true
}

const App = () => {
  const { t, i18n } = useTranslation();
  const [amountBorrowed, setAmountBorrowed] = useState(parseFloat(localStorage.getItem("amountBorrowed")) || 0)
  const [rate, setRate] = useState(parseFloat(localStorage.getItem("rate")) || 0)
  const [term, setTerm] = useState(parseFloat(localStorage.getItem("term")) || 30)
  const [startDate, setStartDate] = useState(new Date(JSON.parse(localStorage.getItem("startDate")) || new Date()))
  const [repaymentFreq, setRepaymentFreq] = useState(localStorage.getItem("repaymentFreq") || 0)
  const [repayments, setRepayments] = useState(localStorage.getItem("repayments") || 0)

  const [minRepayments, setMinRepayments] = useState(localStorage.getItem("minRepayments") || 0)
  const [days, setDays] = useState([])
  const [interestTotal, setInterestTotal] = useState(0)
  const [repaymentsTotal, setRepaymentsTotal] = useState(0)

  const [changes, setChanges] = useState(JSON.parse(localStorage.getItem("changes")) ||
    [defaultChange]
  )

  const handleChangeChange = (i, c) => {
    let temp = [...changes]
    temp[i] = c
    setChanges(temp)
    localStorage.setItem("changes", JSON.stringify(temp))
  }

  const addNewChange = () => {
    let temp = [...changes]
    temp.push(defaultChange)
    setChanges(temp)
    localStorage.setItem("changes", JSON.stringify(temp))
  }

  useEffect(() => {
    const m = calcMinPayment(amountBorrowed, rate, term, repaymentFreq)
    setMinRepayments(m)
    localStorage.setItem("minRepayments", m)
  }, [amountBorrowed, rate, term, repaymentFreq])

  const handleAmountBorrowedChange = a => {
    setAmountBorrowed(parseFloat(a))
    localStorage.setItem("amountBorrowed", a)
  }

  const handleRateChange = r => {
    setRate(parseFloat(r))
    localStorage.setItem("rate", r)
  }

  const handleTermChange = t => {
    setTerm(t)
    localStorage.setItem("term", t)
  }

  const handleRepaymentFreqChange = f => {
    setRepaymentFreq(f)
    localStorage.setItem("repaymentFreq", f)
  }

  const handleStartDateChange = d => {
    setStartDate(d)
    localStorage.setItem("startDate", JSON.stringify(d))
  }

  const handleRepaymentsChange = r => {
    setRepayments(parseFloat(r))
  }

  const handleResetClick = () => {
    setRepayments(minRepayments.toFixed(2))
  }

  useEffect(() => {
    // is changed by 2 functions so use a useEffect instead
    localStorage.setItem("repayments", repayments)
  }, [repayments])


  const handleDaysChange = d => {
    // when simulate is clicked, repayments may still be empty if the user didn't change it
    // the calculations will use the minimum repayments, so just pop that in the repayments input
    if (repayments === 0) {
      setRepayments(minRepayments.toFixed(2))
    }
    setDays(d)
  }

  const handleInterestTotalChange = i => setInterestTotal(i)
  const handleRepaymentsTotalChange = i => setRepaymentsTotal(i)

  const setLanguage = lang => i18n.changeLanguage(lang)

  // favicon font is Kreon (https://fonts.google.com/specimen/Kreon)

  const simFunctions = {
    handleAmountBorrowedChange,
    handleRateChange,
    handleTermChange,
    handleStartDateChange,
    handleRepaymentFreqChange,
    handleRepaymentsChange,
    handleResetClick,
    handleDaysChange,
    handleInterestTotalChange,
    handleRepaymentsTotalChange,
    addNewChange,
    handleChangeChange
  }

  let inputs = {
    "amountBorrowed": amountBorrowed,
    "rate": rate,
    "term": term,
    "startDate": startDate,
    "repaymentFreq": repaymentFreq,
    "repayments": repayments,
    "changes": changes
  }

  return (
    <div>
      <Router>
        <TopNavBar setLanguage={setLanguage} currentLanguage={i18n.language} />
        <Jumbotron>
          <h1>Mortgage Simulator</h1>
          <p>Simulate, analyze and forecast your mortgage home loan</p>
        </Jumbotron>
        <Container>
          <Switch>
            <Route path="/faq" exact><Faq /></Route>
            <Route path="/privacy-policy" exact><PrivacyPolicy /></Route>
            <Route path="/acceptable-use" exact ><AcceptableUse /></Route>
            <Route path="/contact" exact ><Contact /></Route>
            {/* Client side cannot send/set status code */}
            <Route path="*">
              <Home
                inputs={inputs}
                minRepayments={minRepayments}
                days={days}
                interestTotal={interestTotal}
                repaymentsTotal={repaymentsTotal}
                simFunctions={simFunctions}
              />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </Router>
    </div >
  );
}

export default App