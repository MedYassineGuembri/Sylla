import React from 'react';

const index = () => {
    return (
        <div>
            <link rel="stylesheet" href="Logstyle.css"></link>
            <body>
            <form>
                <h1>Administrateur Estiam</h1>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Password"/>
                <input type="submit" placeholder="log-in"/>
            </form>
            </body> 
        </div>
    );
};

export default index;