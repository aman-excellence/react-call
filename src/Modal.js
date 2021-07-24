import { Modal, Button } from 'bootstrap';
import React from 'react';


const Form = ({ show, setShow, data, setData ,handleSubmit}) => {

    const handleClose = () => setShow(false);
    
    return (
        <div>
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                          
                            <input placeholder="roomid" value={data.room} onChange={(e) => setData({ ...data, room: e.target.value })} />
                            <input placeholder="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                            <input placeholder="name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                           
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary" onClick={handleClose}>Save changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
        </div>

    );
}

export default Form;