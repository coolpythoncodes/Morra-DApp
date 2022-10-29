import { useStoreContext } from 'context/StoreContext'
import React from 'react'

const SeeOutcome = () => {
    const { seeOutcome } = useStoreContext()
    return (
        <div className="main-con">
            <p>Thank you for playing. The outcome of this game was:</p>
            <br /><p>{seeOutcome || 'Unknown'}</p>
            <br />
        </div>
    )
}

export default SeeOutcome