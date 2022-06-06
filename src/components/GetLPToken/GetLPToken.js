import React, {useState} from 'react'
import { Col, Row, Modal, Button, Form, InputGroup, FormControl } from 'react-bootstrap'
import './GetLPToken.scss'
 

const GetLPToken = props => {
    return (
        <Modal centered scrollable={true} className="connect_wallet get_tokens" show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Deposit Saita-BUSD LP Tokens</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col className="lp_tokens">
                        <Form className="lptokn_area">
                            <p className="text-end"><span>0.568438531</span> Saita-BUSD LP available</p>
                            <InputGroup>
                                <FormControl id="search" placeholder="0.351816135" />
                                <div className="action">
                                    <span className="token_name">Saita-BUSD LP</span>
                                    <Button className="max_btn cm_btn">Max</Button>
                                </div>
                            </InputGroup>
                            <div className="confirmation">
                                <Button className="cancel_btn">Cancel</Button>
                                <Button className="cm_btn confirm">Confirm</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}

export default GetLPToken;
