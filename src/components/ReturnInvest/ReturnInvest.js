import React, {useState} from 'react'
import { Col, Row, Modal, Button, Table } from 'react-bootstrap'
import './ReturnInvest.scss'
const ReturnInvest = props => {
    return (
        <Modal centered scrollable={true} className="connect_wallet return_invest" show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Return on Invest</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col className="lp_tokens">
                        <div className="invest_area">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Timeframe</th>
                                        <th>ROI</th>
                                        <th>Saita per $1000</th>
                                    </tr>                                    
                                </thead>
                                <tbody>   
                                    <tr>
                                        <td>1d</td>
                                        <td>0,72%</td>
                                        <td>35.82</td>
                                    </tr>
                                    <tr>
                                        <td>7d</td>
                                        <td>5,14%</td>
                                        <td>256.24</td>
                                    </tr>
                                    <tr>
                                        <td>30d</td>
                                        <td>23,94%</td>
                                        <td>1194.5</td>
                                    </tr>
                                    <tr>
                                        <td>365d(APY)</td>
                                        <td>1262,94%</td>
                                        <td>62951.97</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <p>Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.</p>
                            <div className="confirmation">
                                <Button className="cm_btn confirm">Get Saita</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}

export default ReturnInvest;
