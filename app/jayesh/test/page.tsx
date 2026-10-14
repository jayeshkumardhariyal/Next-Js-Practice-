import FilteredUsers from "@/components/UsersFiltered"

export default async function Test(){
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const users=await response.json()
    return(
        <div>
        <h1>Hello from Test page !!!</h1>
        <p>This is a test page</p>
        <FilteredUsers users={users}/>
        </div>
    )
}