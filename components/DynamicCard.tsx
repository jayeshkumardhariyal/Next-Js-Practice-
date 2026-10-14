type CardProps={
    title:String,
    description:String
}
export default function DynamicCard({title,description}:CardProps){
    return(
        <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
    )
}