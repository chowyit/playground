import React from 'react'
import {VscClearAll} from 'react-icons/vsc'

function ClearAll({removeAll}) {
  return (
    <>
    <div>
        <button>
            <VscClearAll className="clear-all-button" onClick ={() => removeAll([])}/>
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