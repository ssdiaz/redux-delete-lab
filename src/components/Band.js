import React, { Component } from 'react'


class Band extends Component {

    handleDelete = (band) => {
        console.log(band.id, 'clicked')
        
        this.props.deleteBand(band.id)

    }


    render() {
        return(
            <div>
                {this.props.bands.map( band => 
                    <div>
                        <li key={band.id}>{band.name}</li>
                        <button onClick={this.handleDelete(band)} >DELETE</button>
                    </div>
                )}
            </div>
        )
    }

}

export default Band