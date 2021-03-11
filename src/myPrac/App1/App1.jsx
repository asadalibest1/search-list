import React from 'react'
import data from "../json/list.json"

export default function App1() {
    const [search, setSearch] = React.useState("");

    const filterData = data.filter(list => {
        return list.toLowerCase().includes( search.toLowerCase() )
        // console.log(list.toLowerCase().includes( search.toLowerCase() ))
    })

    return (
        <div>
            <h1 className="text-center my-3">My Lists</h1>
            <div className="container">
                <div className="text-center my-5">
                    <input type="text" className="py-1" onChange={e => setSearch(e.target.value)}/>
                    <button className="btn btn-primary mx-2">Search</button>
                </div>
                {filterData.map((list, ind) => {
                    return <div className="alert alert-info" key={ind} role="alert">
                        {list}
                        {/* {console.log(list)} */}
                    </div>
                })}
            </div>
        </div>
    )
}
