type ProfilePageParams={
    params: Promise<{name:string}>

}
export default async function Rahul({params}:ProfilePageParams){
    const pageParams=await params;
    const username=pageParams.name
    console.log(username)
    return(
        <div>
            <h1>Hey Rahul</h1>
            <p> Hi this is rahul</p>
        </div>
    )
}