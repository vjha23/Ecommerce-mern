import React from 'react'

function ErrorBox(props) {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
            {props.children}
        </div>
    )
}

export default ErrorBox
