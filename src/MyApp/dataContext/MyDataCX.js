import React, { Components } from 'react'
export const MyDataContext = React.createContext({})


export default class extends Components{
    state = { total: 5 }

    render(){
        return(
            <MyDataContext.Provider value={this.state} >

            { this.props.children }

            </MyDataContext.Provider>
        )
    }
}