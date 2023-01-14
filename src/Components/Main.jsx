
import MainCss from './Main.module.css';
import React, {Component} from 'react';

class Main extends Component{
    render(){
        return(
            <>
                <div className={MainCss.mynav2}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Main;