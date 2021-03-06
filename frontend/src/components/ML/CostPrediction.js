import React, { Component } from 'react';

import axios from 'axios';

import {FaArrowCircleRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class CostPrediction extends Component {
    
    // continue button
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    // constructor
    constructor(props) {
        super(props);
        this.state = {
            area:'',
            no_floors:'',
            no_rooms:'',
            no_bathrooms:'',
            no_doors:'',
            no_windows:'',
            wall_material:'',
            celing_material:'',
            floor_material:'',
            roof_material:'',
            prediction:''
        }
        this.myDivToFocus = React.createRef();
    }

    // form data submit handler
    handleForm = (e) => {
        e.preventDefault();
        const data = {
            area:this.state.area, 
            no_floors:this.state.no_floors,
            no_rooms:this.state.no_rooms,
            no_bathrooms:this.state.no_bathrooms,
            no_doors:this.state.no_doors,
            no_windows:this.state.no_windows,
            wall_material:this.state.wall_material,
            celing_material:this.state.celing_material,
            floor_material:this.state.floor_material,
            roof_material:this.state.roof_material
        }
        // submit data to the backend through a api
        axios.post("http://127.0.0.1:5000/predict_constr_cost", data)
        .then(res => this.setState({prediction:res.data.prediction}));
    }

    // Input handler
    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})
    }

    // function to scroll to a point
    handleOnClick = (e) => {
        if(this.myDivToFocus.current) {
            this.myDivToFocus.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }

    render() {
        return (
            <main className="main-expand">
                <div>
                    {/* Inputs for Construction info */}
                    <div className="text-center">
                    <div ref={this.myDivToFocus}></div>
                        <h1>House Construction Cost Prediction</h1>
                        <h2>House Construction Cost Prediction according to your Archi: Plan</h2>
                        <br/>

                        
                        <div className="text-center jumbotron jumbotron-fluid">
                            <h3>Your House Construction Cost will be around :</h3>
                            <h2>LKR. {this.state.prediction}</h2>
                        </div>
                        <br/>
          
                        <br/>
                        <div className="text-center jumbotron jumbotron-fluid">
                            <form action="/predict_cost_v2" method="POST" onSubmit={this.handleForm} >
                                <h4><u>House Construction Cost Prediction Info</u></h4>
                                    <hr/>
                                    <div className="form-row d-flex justify-content-center">
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Area :</label>
                                            <input type="number" className="form-control" id="validationServer01" name="area" onChange={this.handleInput} required />
                                        </div>
                                    </div>
                                    <br/>
                                    <hr/>
                                    <br/>
                                    <div className="form-row d-flex justify-content-center">

                                        <div className=" col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of Floors :</label>
                                            <select className="custom-select" name="no_floors" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Floor</option>
                                            <option value="2">2 Floors</option>
                                            </select>
                                        </div>

                                        <div className=" col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of Rooms :</label>
                                            <select className="custom-select" name="no_rooms" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Room</option>
                                            <option value="2">2 Rooms</option>
                                            <option value="3">3 Rooms</option>
                                            <option value="4">4 Rooms</option>
                                            <option value="5">5 Rooms</option>
                                            <option value="6">6 Rooms</option>
                                            <option value="7">7 Rooms</option>
                                            <option value="8">8 Rooms</option>
                                            <option value="9">9 Rooms</option>
                                            <option value="10">10 Rooms</option>
                                            <option value="11">11 Rooms</option>
                                            <option value="12">12 Rooms</option>
                                            <option value="13">13 Rooms</option>
                                            <option value="14">14 Rooms</option>
                                            <option value="15">15 Rooms</option>
                                            </select>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">No.of Bathrooms :</label>
                                            <select className="custom-select" name="no_bathrooms" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Bathroom</option>
                                            <option value="2">2 Bathrooms</option>
                                            <option value="3">3 Bathrooms</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row d-flex justify-content-center">

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of doors :</label>
                                            <select className="custom-select" name="no_doors" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Door</option>
                                            <option value="2">2 Doors</option>
                                            <option value="3">3 Doors</option>
                                            <option value="4">4 Doors</option>
                                            <option value="5">5 Doors</option>
                                            <option value="6">6 Doors</option>
                                            <option value="7">7 Doors</option>
                                            <option value="8">8 Doors</option>
                                            <option value="9">9 Doors</option>
                                            <option value="10">10 Doors</option>
                                            <option value="11">11 Doors</option>
                                            <option value="12">12 Doors</option>
                                            <option value="13">13 Doors</option>
                                            <option value="14">14 Doors</option>
                                            <option value="15">15 Doors</option>
                                            <option value="16">16 Doors</option>
                                            <option value="17">17 Doors</option>
                                            <option value="18">18 Doors</option>
                                            <option value="19">19 Doors</option>
                                            <option value="20">20 Doors</option>
                                            </select>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Number of Windows :</label>
                                            <select className="custom-select" name="no_windows" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="1">1 Window</option>
                                            <option value="2">2 Windows</option>
                                            <option value="3">3 Windows</option>
                                            <option value="4">4 Windows</option>
                                            <option value="5">5 Windows</option>
                                            <option value="6">6 Windows</option>
                                            <option value="7">7 Windows</option>
                                            <option value="8">8 Windows</option>
                                            <option value="9">9 Windows</option>
                                            <option value="10">10 Windows</option>
                                            <option value="11">11 Windows</option>
                                            <option value="12">12 Windows</option>
                                            <option value="13">13 Windows</option>
                                            <option value="14">14 Windows</option>
                                            <option value="15">15 Windows</option>
                                            <option value="16">16 Windows</option>
                                            <option value="17">17 Windows</option>
                                            <option value="18">18 Windows</option>
                                            <option value="19">19 Windows</option>
                                            <option value="20">20 Windows</option>
                                            <option value="21">21 Windows</option>
                                            <option value="22">22 Windows</option>
                                            <option value="23">23 Windows</option>
                                            <option value="24">24 Windows</option>
                                            <option value="25">25 Windows</option>
                                            </select>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Wall Material :</label>
                                            <select className="custom-select" name="wall_material" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="Cement Block">Cement Block</option>
                                            <option value="Tiles">Tiles</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-row d-flex justify-content-center">

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Celing Material :</label>
                                            <select className="custom-select" name="celing_material" id="inputGroupSelect01" onChange={this.handleInput}required>
                                            <option defaultValue>Choose...</option>
                                            <option value="Tiles">Tiles</option>
                                            <option value="Wood">Wood</option>
                                            </select>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Floor Material :</label>
                                            <select className="custom-select" name="floor_material" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="Cement">Cement</option>
                                            <option value="Tiles">Tiles</option>
                                            </select>
                                        </div>

                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer01">Roof Material :</label>
                                            <select className="custom-select" name="roof_material" id="inputGroupSelect01" onChange={this.handleInput} required>
                                            <option defaultValue>Choose...</option>
                                            <option value="Asbastos">Asbastos</option>
                                            <option value="Tiles">Roof Tiles</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button onClick={this.handleOnClick} className="btn btn-primary " type="submit">Submit</button>
                                        
                                    </div>
                                    
                            </form>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row col-12">
                    <div className="text-right left_btn col-4">
                    </div>
                    <div className="col-4"></div>
                </div>
            </main>
            
        )
    }
}
