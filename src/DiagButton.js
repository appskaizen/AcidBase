import React, {Component} from 'react';

class Button extends Component {
    render() {
        return(
            <p className="col-auto">
               <button className="button is-link" 
onClick={()=>this.props.handleSolve(this.props.children)}>
                    {this.props.children}
               </button>
            </p>
        )
    }
}

export default Button