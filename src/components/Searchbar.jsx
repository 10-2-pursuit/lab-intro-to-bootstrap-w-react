import React from 'react';

const Searchbar = () => {
    return (
        <div className='d-flex justify-content-center'>
            <form action="" className='container row p-3'>
                <label htmlFor="location" className='form-label col-sm-2'>Search posts by location...</label>
                <div className='col-sm-8'>
                    <input type="text" className='form-control'/>
                </div>
                <div className="col-sm-2">
                    <button className='btn backgroundOrange'>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default Searchbar;
