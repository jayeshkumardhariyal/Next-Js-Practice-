"use client"

import { useState } from "react"

type User={
    id:number,
    name: String,
    username:String

}
export default  function FiteredUsers({users}:{users:User[]}){
    const [searchTerm,setSearchterm]=useState("")

    const filteredUsers=users.filter((User)=>{
        return User.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    })


    return(
        <div>
            <input type="text"
            placeholder="Enter text"
            value={searchTerm}
            onChange={(e)=>setSearchterm(e.target.value)}
             />
             <ul>
                {filteredUsers.map((user:User)=>{
                    return(
                        <li key={user.id}>{user.name}</li>
                    )
                })}
             </ul>
        </div>
    )



}