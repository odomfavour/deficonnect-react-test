import React from 'react'
import { Modal } from 'react-bootstrap'
import { BsXLg } from 'react-icons/bs'
import './tradingModal.css'


const TradingModal = ({show, handleClose}) => {
    // const [lgShow, setLgShow] = useState(false);
    return (
        <section>
            <Modal
                size="md"
                show={show}
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Body className='trading-modal-body'>
                    <div className="d-flex justify-content-end">
                        <BsXLg className='text-white cancel-btn' role="button"  onClick={handleClose}/>
                    </div>

                    <div className="button-area">
                        <a href="https://www.bitrue.com/trade/dfc_usdt" target="_blank" rel='noreferrer' className="btn-trading btn-warning btn-sm rounded2 me-2 mb-3">Start Trading</a>
                        <a href="https://twitter.com/deficonnect/status/1487746184332652546?t=IovKSy8d_jRlaQ8ar2HPjg&amp;s=09" target="_blank" rel='noreferrer' className="btn-trading btn-warning btn-sm rounded2 mb-3">Catch Us On Twitter</a>
                    </div>
                </Modal.Body>
            </Modal>

        </section>
    )
}

export default TradingModal