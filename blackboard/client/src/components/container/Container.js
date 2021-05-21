import React from 'react';
import Board from '../board/Board';
import './style.css';
import StopIcon from '@material-ui/icons/Stop';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
// import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
class Container extends React.Component
{   erased = false;
    prevColor;
    prevSize;
    constructor(props)
    {
        super(props);
        this.state = {
            color: "#92F799",
            size: "2"
        }
        
    }
    setPrev()
    {
        if(this.erased)
            {
                this.setState({color:this.prevColor,size:this.prevSize})
                this.erased  =false;
            }
    }
    changeColor(param)
        {
            if(this.erased)
                this.setState({size: this.prevSize})
                this.setState({color:param.target.value})
        }
        changeSize(param)
        {
            this.setState({size:param.target.value})
        }
        erase()
        {   this.prevColor = this.state.color;
            this.prevSize  = this.state.size;
            this.erased = true;
            this.setState({
                color:"black",
                size:"55"
            })
            
        }
    render()
    {
        return(
            <div className="container">
                <h1>BlackBoard</h1>
                <div className="tools-section">
                   
                <div className="hoverEff">
                    <CreateOutlinedIcon onClick={this.setPrev.bind(this) } id="pen"/>
                </div> 
               
                <div className="hoverEff">
                <input type="color" value={this.state.color} id="color-picker" onChange={this.changeColor.bind(this)}/>
                </div>
                <div className="hoverEff">
                   <StopIcon onClick={this.erase.bind(this)}id="eraser"/>
                </div>
                <div className="brush-size-container" value={this.state.color} onChange={this.changeSize.bind(this)}>
                <sup>
                <select className="select-size" id="size-picker"> 
                
                        <option value={"2"}>Brush-Size</option>
                        <option value={"2"}>2</option>
                        <option value={"5"}>5</option> 
                        <option value={"10"}>10</option> 
                        <option value={"20"}>20</option> 
                        <option value={"30"}>30</option>    
                    
                    </select></sup>
                </div>   
                
                </div> 
                <div className="board-container">
                    <Board color={this.state.color} size={this.state.size}></Board>
                </div>
            </div>
        )
    }

}

export default Container;