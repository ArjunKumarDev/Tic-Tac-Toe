import React from 'react'
import Celeberate from './Celeberate';
import { Modal } from 'antd'

const InfoModal = ({ visible, result }) => {

    return (
        <Modal visible={visible} className="info__modal" closable={true} centered={true} footer={null} closeIcon={false} >

            <h3 className="modal__text bd-container">{`Game finished! Winner is ${result.winner}`}</h3>

            {result.winner !== "No one" && <Celeberate width={500} height={300} />}
        </Modal>
    )
}

export default InfoModal;