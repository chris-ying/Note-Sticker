import React from 'react'
import '../css/style.css'

var Card = React.createClass({

    remove() {
        this.props.onRemove(this.props.id)
    },

    render() {
        return ( 
            <div className="card">
                <div className="text-wrapper">
                    <h3>{this.props.children}</h3>
                </div>
                <span>
                    <div className="btn remove-btn" onClick={this.remove}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                </span>
            </div>
        )
    },
})

export default Card
