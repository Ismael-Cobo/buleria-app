import React from 'react'

export const LoadingScreen = () => {
    return (
        <div className="loader-container">
            <div className="loader book">
                <figure className="page"></figure>
                <figure className="page"></figure>
                <figure className="page"></figure>
            </div>
            <h4>Loading</h4>
        </div>
    )
}
