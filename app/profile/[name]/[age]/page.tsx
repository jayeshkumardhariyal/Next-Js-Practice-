type ProfilePageParams = {
  params: Promise<{ name: string; age: string }>
}

const users = [
  {
    id: 1,
    name: "Rohan",
    age: 25,
    email: "rohan@gmail.com",
  },
  {
    id: 2,
    name: "Rahul",
    age: 28,
    email: "rahul@gmail.com",
  },
  {
    id: 3,
    name: "Anjali",
    age: 22,
    email: "anjali@gmail.com",
  },
]

export default async function ProfilePage({ params }: ProfilePageParams) {
  const { name, age } = await params
  const userAge = Number(age)
  const user = users.find(
    (user) =>
      user.name.toLocaleLowerCase() === name.toLocaleLowerCase() && user.age === userAge,
  )


  if (!user) {
    return (
      <div>
        <h1>No user exists with this username and age</h1>
        <h2>{`Username: ${name}`}</h2>
        <h2>{`Age: ${age}`}</h2>
      </div>
    )
  }

  return (
    <div>
      <h1>{`Profile Id: ${user.id}`}</h1>
      <h1>{`Profile Name: ${user.name}`}</h1>
      <h1>{`Profile Age: ${user.age}`}</h1>
      <h1>{`Profile email: ${user.email}`}</h1>
    </div>
  )
}