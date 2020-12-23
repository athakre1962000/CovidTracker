import React from "react"
import { Cards, Chart, CountryPicker } from "./Components"
import styles from "./App.module.css"
import { fetchData } from "./api"

import Paper from "@material-ui/core/Paper"



class App extends React.Component {
    

    
state = {
    data: {},
    country: ''
}



async componentDidMount() {
    const fetchedData = await fetchData()
    
    this.setState({ data : fetchedData})
}


handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country)
    this.setState({data: fetchedData, country: country})
    
}

    
    render() {
        
        

        const {data, country} = this.state
        return (
            
            <Paper className={styles.container}>
            
                
                
                <img src={require('./images/image.jpg')} className={styles.image} alt="img"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/><br />
                <footer>All Rights Reserved @covid_tracker</footer>
                
           
            </Paper>
            
        )
    } 
}

export default App