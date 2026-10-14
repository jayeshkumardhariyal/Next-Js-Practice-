type ProfilePageParams={
    params: Promise<{name:string}>

}

const users=[
    {
        id:1,
        name:"Rohan",
        email:"rohan@gmail.com"
    },
    {
        id:2,
        name:"Rahul",
        email:"rahul@gmail.com"
    },
    {
        id:3,
        name:"Anjali",
        email:"anjali@gmail.com"
    }

]
export default async function Rahul({params}:ProfilePageParams){
    const pageParams=await params;
    const username=pageParams.name
    console.log(username)
    const user=users.find((user)=>user.name.toLocaleLowerCase() === username.toLocaleLowerCase())
    if(!user){
        return(
            <div>
                <h1>No user exits with this username </h1>
                <h2>{`Username : ${username}`}</h2>
            </div>
        )
    }
    
    return(
        <div>
           <h1>{`Profile Id: ${user.id}`}</h1>
           <h1>{`Profile Name: ${user.name}`}</h1>
           <h1>{`Profile email: ${user.email}`}</h1>
        </div>
    )
}