import React from 'react';



class Jumbo extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className='test section' id={this.props.name}>
                <div className='text'>#{this.props.name}</div>
            </div>
        );
    }
    

}

export default Jumbo;