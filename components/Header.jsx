const React = require('react');
module.exports = function Header({user}){
    return(
        <div className='header'>
            <div>
                <a href = '/'>Home</a>
            </div>

            {user ? (
                <div>
                    <button type='submit' name='log-out-btn'>log out</button>
                </div>
            ) : (
                <>
                    <div>
                        <a href = '/login'>Login</a>
                    </div>

                    <div>
                        <a href = '/register'>Sign Up</a>
                    </div>
                </>
            ) }

        </div>
    )
}
