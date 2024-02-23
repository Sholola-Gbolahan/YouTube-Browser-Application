import React from 'react'

const SearchBar = () => {
  return (
    <div className='ui segment'>
        <form class="ui form" method="post">
            <div className='field'>
                <label>
                    Video Search
                </label>
                <input  type='text'/>

            </div>
        </form>

    </div>
  )
}

export default SearchBar