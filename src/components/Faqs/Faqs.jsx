import React from 'react'
import { Accordion } from 'react-bootstrap'
import './faq.css'
import { faqs } from './faq'

const Faqs = () => {
  return (
    <div className='pb-1 faq-section' id="faq">
            <div className="container">
                <div className="accordion-box">
                    <Accordion defaultActiveKey="0">
                        {faqs.map((faq) => (
                            <Accordion.Item eventKey={faq.id - 1} key={faq.id}>
                                <Accordion.Header><span className='faq-question'>{faq.question}</span></Accordion.Header>
                                <Accordion.Body>
                                    <p dangerouslySetInnerHTML={{__html:faq.answer}}></p>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
  )
}

export default Faqs