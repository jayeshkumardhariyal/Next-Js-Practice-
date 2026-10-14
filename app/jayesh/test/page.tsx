type User={
    id:number,
    name:String,
    username:String
}

export default async function Test(){
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const users=await response.json()
    return(
        <div>
        <h1>Hello from Test page !!!</h1>
        <p>This is a test page</p>
        <ul>
            {users.map((user:User)=>(
                <li key={user.id}>{user.name}</li>

            ))}
        </ul>
        </div>
    )
}