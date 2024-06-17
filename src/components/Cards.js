import React from 'react';
import CardItem from './Carditem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Our Customer Favorites: </h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src={'${process.env.PUBLIC_URL}/bobs-business/images/lychee.png'}
                    label='Best Seller'
                    path='/menu'
                    />

                    <CardItem 
                    src="../images/lychee.png"
                    text="Lychee Boba Tea"
                    label='Fan Favorite'
                    path='/menu'
                    />

                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="images/tarrotea.png"
                    text="Taro Tea"
                    label='Best Seller'
                    path='/menu'
                    />

                    <CardItem 
                    src="images/grass milk tea.png"
                    text="Grass Jelly"
                    label='Limited Time Only!'
                    path='/menu'
                    />

                    <CardItem 
                    src="images/greentea.png"
                    text="Green Tea Boba"
                    label='Classic'
                    path='/menu'
                    />

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
