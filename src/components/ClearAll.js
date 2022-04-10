import React from 'react'
import {VscClearAll} from 'react-icons/vsc'
import {clearAll} from '../redux/reducer'
import {useDispatch} from 'react-redux'
import { clear } from '@testing-library/user-event/dist/clear';

function ClearAll() {
  
  const dispatch = useDispatch();

  const onClickHandle = () => {
    dispatch(clearAll())
  }
  
  return (
    <>
    <div>
        <button>
            <VscClearAll className="clear-all-button" onClick ={onClickHandle}/>
        </button>
    </div>
    <div>
        <p className="clear-all-text">
            CLEAR ALL
        </p>
    </div>
    </>
  )
}

export default ClearAll