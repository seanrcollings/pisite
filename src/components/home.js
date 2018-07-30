import React, { Component } from 'react';

import backgroundImg from '../img/blue.png'
import NavBar from './navbar/navbar';

export default class Home extends Component {
    render() {
         return (
            <div className = 'home'>
            <NavBar />
                <div className = 'home__title'>
                    <h1>Welcome to my Pi Site</h1>
                    <img src = {backgroundImg} alt = 'backgroung'/>
                </div>

                <div className = 'home__content'>
                    <div className = 'home__description'>
                        <h2>What's a Pi Site?</h2>
                        <p>A Pi site is a website that I am hosting from a Rasberry Pi 3 using apache for serving the pages</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo ex, feugiat vel quam elementum, luctus eleifend tellus. Sed sed viverra sem. Sed blandit risus ornare, tempor lectus sit amet, placerat augue. Aenean aliquet nunc magna, sit amet condimentum turpis finibus id. Donec efficitur diam vitae neque pulvinar, id tempus nisl egestas. Duis at mattis augue. Nullam ut felis quis orci faucibus ultrices. Nam vulputate lectus in purus feugiat luctus. Nam eu purus sit amet augue consectetur volutpat sed vel nisi. Aenean bibendum arcu sit amet mollis hendrerit. Cras ut enim condimentum, placerat libero sodales, condimentum magna. Duis quam tellus, posuere a nisl eget, tempor volutpat felis. Nam ut risus metus.</p>

                        <p>	Nunc sit amet ante interdum tortor molestie eleifend lacinia ultrices justo. Morbi leo erat, mollis vitae dolor sit amet, sodales maximus neque. Nam ante eros, mollis vitae vehicula vitae, tincidunt in lorem. Donec ultrices nibh suscipit libero rhoncus ultrices. Curabitur eget egestas neque, a aliquet mauris. Phasellus facilisis tortor eu metus faucibus efficitur. Aliquam molestie augue sed semper elementum. Sed consequat libero et vulputate tristique. Sed ac arcu accumsan, blandit sem id, laoreet arcu. Praesent euismod volutpat erat.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo ex, feugiat vel quam elementum, luctus eleifend tellus. Sed sed viverra sem. Sed blandit risus ornare, tempor lectus sit amet, placerat augue. Aenean aliquet nunc magna, sit amet condimentum turpis finibus id. Donec efficitur diam vitae neque pulvinar, id tempus nisl egestas. Duis at mattis augue. Nullam ut felis quis orci faucibus ultrices. Nam vulputate lectus in purus feugiat luctus. Nam eu purus sit amet augue consectetur volutpat sed vel nisi. Aenean bibendum arcu sit amet mollis hendrerit. Cras ut enim condimentum, placerat libero sodales, condimentum magna. Duis quam tellus, posuere a nisl eget, tempor volutpat felis. Nam ut risus metus. Nunc sit amet ante interdum tortor molestie eleifend lacinia ultrices justo. Morbi leo erat, mollis vitae dolor sit amet, sodales maximus neque. Nam ante eros, mollis vitae vehicula vitae, tincidunt in lorem. Donec ultrices nibh suscipit libero rhoncus ultrices. Curabitur eget egestas neque, a aliquet mauris. Phasellus facilisis tortor eu metus faucibus efficitur. Aliquam molestie augue sed semper elementum. Sed consequat libero et vulputate tristique. Sed ac arcu accumsan, blandit sem id, laoreet arcu. Praesent euismod volutpat erat.</p>
                    </div>

                        <div id = 'home__link-boxes'>
                            link boxes will go here   
                        </div>
                </div> {/* CONTENT END */}
            </div> 
         )
    }
}