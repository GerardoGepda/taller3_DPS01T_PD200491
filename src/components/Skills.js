import React from "react";
import Card from "./Card";
import './../styles/Skills.css'

class Skills extends React.Component {
    render() {
        return (
            <div>
                <h3 className='subtitle'>Lenguajes que he aprendido</h3>
                <Card>
                    <img src={require('./../img/csharp-icon.png')} className='icon' alt="lang-icon"/>
                    <img src={require('./../img/java-icon.png')} className='icon' alt="lang-icon"/>
                    <img src={require('./../img/js-icon.png')} className='icon' alt="lang-icon"/>
                    <img src={require('./../img/php-icon.png')} className='icon' alt="lang-icon"/>
                </Card>
                <h3 className='subtitle'>Frameworks y librerías que he usado</h3>
                <Card>
                    <img src={require('./../img/laravel.jpg')} className='icon' alt="lang-icon"/>
                    <img src={require('./../img/react.png')} className='icon' alt="lang-icon"/>
                    <img src={require('./../img/symfony.png')} className='icon' alt="lang-icon"/>
                    <img src={require('./../img/express.png')} className='icon' alt="lang-icon"/>
                </Card>
            </div>
        );
    }
}

export default Skills;