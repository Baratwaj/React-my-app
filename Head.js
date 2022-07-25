import React from 'react';

const Head = props => {
    return(
        <div className='container main-head'>
           
                <input type='search' placeholder='search' className='search-box'/>
            <div>
                <h2 className='m-head'>
                The Leader in <br>
                </br><span className='span1'>Website,</span> Creation
                </h2>
            </div>
            <button className='btn-head'>Start Now</button>
           
        </div>


    );
}
export default Head;