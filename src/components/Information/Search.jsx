import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css';


export default function Search () {
    return (
        <div className="col-md-6 searchInput col-sm-6 col-7">
            <span><SearchIcon /></span><input type="text" placeholder="Search" name="searchNote" />
        </div>
        
        
    );
}
