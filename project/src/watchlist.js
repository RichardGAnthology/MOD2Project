import React from 'react'

const watchlist = (props) => {
    return (
        <div>
            <p>
                Watch List Test
            </p>
            <p>
                {props.newStock}
                {props.isAdded}
            </p>
        </div>
    ) 
}

export default watchlist
