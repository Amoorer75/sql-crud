import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default function ListItems(){
    const [gameItems,setGameItems] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios('http://localhost:3001/api/reviews')

            console.log(response.data)

            setGameItems(response.data)

        }catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
       
        fetchData()
        
    },[])

    const game_items = gameItems.map((item) => {
        return (
        <li key={item.id} className = 'hover-item'>
            <NavLink to={`/moblie-games/${item.id}`}>
                {item.game_name}
            </NavLink>
        </li>
        )
    })
    
    // const prices = gameItems.map((price) => price.game_price)
    
    // const totalPrice = prices.reduce((prevValue, cerrValue) => Math.floor(prevValue + cerrValue), 0) 

    // console.log(prices)

    return(
        <div className="">
            <h2>Mobile Games</h2>

            <ul>
                {game_items}
            </ul>

            {/* <p><b>Totol Amount</b>: ${totalPrice} </p> */}


        </div>
    )
}