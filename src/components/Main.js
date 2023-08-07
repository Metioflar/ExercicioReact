import React, {Component} from "react";
import "./Main.css";
import {FaBeer} from 'react-icons/fa';
export default class Main extends Component{
    state = {
        novaTarefa: 'Lista de tarefas',
        };
    mudaInput = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        });
    }
    render(){
        const {novaTarefa} = this.state
        return (
            <div className="main">
                <h1>{novaTarefa}</h1>
                <form action="#" className="form">
                    <input onChange={this.mudaInput} type="text"></input>
                    <button type="submit"><FaBeer/>Cervejinha!</button>
                </form>
            </div>
            )
    }
}