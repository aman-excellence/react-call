import React from 'react'

const Form = ({ setShow, data, setData }) => {
  const handleClose = () => setShow(false)

  return (
    <div>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Modal title</h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={handleClose}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <input
              placeholder='roomid'
              value={data.room}
              onChange={e => setData({ ...data, room: e.target.value })}
            />
            <input
              placeholder='email'
              value={data.email}
              onChange={e => setData({ ...data, email: e.target.value })}
            />
            <input
              placeholder='name'
              value={data.name}
              onChange={e => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className='modal-footer'>
            <button type='submit' className='btn btn-primary' onClick={handleClose}>
              Save changes
            </button>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form;
