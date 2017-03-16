import React from 'react'
import Card from './Card'
import '../css/style.css'

var Board = React.createClass({
    
    getInitialState() {
        return {
            cards: []
        }
    },

    nextId() {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    },

    add() {
        var newText = this.refs.newText
        
        var cards = [
            ...this.state.cards,
            {
                id: this.nextId(),
                card: newText.value
            }
        ]
        this.setState({cards})
        
        newText.value = ''
    },

    remove(id) {
        var cards = this.state.cards.filter(card => card.id !== id)
        this.setState({cards})
    },

    eachCard(card) {
        return (<Card key={card.id}
                      id={card.id}
                      onRemove={this.remove}>
                  {card.card}
                </Card>)
    },

    render() {
        return (
            <div>
               <form id="input-section">
                    <input ref="newText" id="input-field" placeholder="Input text here" />
                    <div id="add-btn" className="btn" onClick={ this.add }>Add</div>
               </form>

                <div className='board'>
                   {this.state.cards.map(this.eachCard)}
                </div>
            </div>
        )
    }
})

export default Board
