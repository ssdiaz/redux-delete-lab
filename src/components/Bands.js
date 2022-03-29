import React, { Component } from 'react'
import Band from './Band'

class Bands extends Component {


    render() {
        console.log(this.props,'props')
        console.log(this.state,'state')
        console.log('hello')


        
        return(
            <div>
                <Band bands={this.props.bands}   />
            </div>
        )
    }

}

export default Bands