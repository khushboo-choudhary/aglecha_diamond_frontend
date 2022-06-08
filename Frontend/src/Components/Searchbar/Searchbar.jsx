import React, { useState } from "react";
import data from "./db.json";


function SearchBar() {

    const [searchTerm, setSearchterm] = useState("");
    console.log(setSearchterm,searchTerm);
     return (
        <>
         <div className="search">
             <div className="searchInput">
                 
                 {
                  data
                     .filter((val)=>{
                    //     if(searchTerm === ""){
                    //         return val;
                    //     }
                    //     else if
                    (val.tag.toLowerCase().includes(searchTerm.toLowerCase()))
                            return val;
                        // }
                     })
                       .map((val) => {
                         return(
                             <div className="template" key={val.id}>
                             <img src={val.image} alt="" className="src" />
                             <h3>{val.descriptiption}</h3>
                             <p className="price">{val.price}</p>
                             </div>
                         )
                       })
                     }
                 
             </div>
         </div>
         </>
     )
}

export default SearchBar();