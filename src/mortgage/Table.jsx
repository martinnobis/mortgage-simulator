import React, { useState, useEffect } from '../../node_modules/react';

import Row from '../../node_modules/react-bootstrap/Row'
import Col from '../../node_modules/react-bootstrap/Col'
import ListGroup from '../../node_modules/react-bootstrap/esm/ListGroup';
import Nav from '../../node_modules/react-bootstrap/esm/Nav';
import Tab from '../../node_modules/react-bootstrap/esm/Tab';

import Day from './Day'

const locale = "en-US"
const formatDate = Intl.DateTimeFormat(locale).format

Array.range = (start, end) => Array.from({ length: (end - start + 1) }, (v, k) => k + start);

const TabPaneMonth = (props) => {
    const days = props.days.map((d, i) => {
        return (
            <ListGroup.Item key={i}
                style={{ backgroundColor: (i % 2 === 0) ? '#ecf0f1' : '#fff' }}
            >
                <Day
                    date={formatDate(d.date)}
                    balance={d.endBalance}
                    interestToday={d.interestToday}
                    interestPeriod={d.interestPeriod}
                    interestTotal={d.interestTotal}
                    payments={d.payments}
                />
            </ListGroup.Item>
        )
    })

    return (
        <Tab.Pane eventKey={props.month}>
            <ListGroup className="overflow-auto" style={{ 'maxHeight': '500px' }}>
                {days}
            </ListGroup>
        </Tab.Pane>
    )
}

const TabPaneYear = (props) => {
    const [daysPerMonth, setDaysPerMonth] = useState([])
    const [months, setMonths] = useState([])

    useEffect(() => {
        const monthStrings = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let temp = []
        let newMonths = []
        for (const [i, v] of monthStrings.entries()) {
            let daysThisMonth = props.days.filter(d => d.date.getMonth() === i)
            if (daysThisMonth.length > 0) { temp.push(daysThisMonth); newMonths.push(v) }
        }
        setDaysPerMonth(temp)
        setMonths(newMonths)
    }, [props.days])

    return (
        <Tab.Pane eventKey={props.year}>
            <Tab.Container mountOnEnter={true} unMountOnExit={true} defaultActiveKey={0}>
                <Row noGutters={true}>
                    <Col xs="auto">
                        <Nav variant="pills" className="flex-column">
                            {months.map((e, i) => <Nav.Item key={i}> <Nav.Link eventKey={i} >{e}</Nav.Link> </Nav.Item>)}
                        </Nav>
                    </Col>
                    <Col>
                        <Tab.Content className="col">
                            {months.map((e, i) => <TabPaneMonth key={i} month={i} days={daysPerMonth[i]} />)}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Tab.Pane>
    )
}


const Table = (props) => {
    const [years, setYears] = useState([])
    const [daysPerYear, setDaysPerYear] = useState([])

    useEffect(() => {
        if (props.days.length > 0) {
            const yearsTemp = Array.range(props.days[0].date.getFullYear(), props.days[props.days.length - 1].date.getFullYear())
            setYears(yearsTemp)
            setDaysPerYear(
                yearsTemp.map(
                    year => props.days.filter(
                        day => day.date.getFullYear() === year
                    )
                )
            )
        }
    }, [props.days])

    /*
        eventKey has to be the indexes, instead of the year/month, otherwuse defaultActiveKey
        wouldn't work!
    */

    return (
        <Tab.Container mountOnEnter={true} unMountOnExit={true} defaultActiveKey={0}>
            <Row noGutters={true}>
                <Col xs="auto" className="overflow-auto" style={{ 'maxHeight': '500px' }}>
                    <Nav variant="pills" className="flex-column">
                        {years.map((e, i) => <Nav.Item key={i}> <Nav.Link eventKey={i} >{e}</Nav.Link> </Nav.Item>)}
                    </Nav>
                </Col>
                <Tab.Content className="col">
                    {years.map((e, i) => <TabPaneYear key={i} year={i} days={daysPerYear[i]} />)}
                </Tab.Content>
            </Row>
        </Tab.Container>
    )
}

export default Table