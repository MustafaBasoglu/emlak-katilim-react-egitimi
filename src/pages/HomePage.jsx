import { useLoaderData } from "react-router-dom";

function HomePage() {
  const { users } = useLoaderData();

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <h2>Users</h2>
       {users.map((user) => (
        <div className="user" key={user.id}>
          <p>
            <strong>Name:</strong> <span>{user.name}</span>
            <br />
            <strong>Email :</strong> <span>{user.email}</span>
          </p>
        </div>
      ))}
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste aut
        dignissimos quasi inventore cum praesentium harum blanditiis dolores
        quia distinctio sunt fuga perspiciatis atque quidem velit, facere
        explicabo et dolor autem nesciunt voluptatum eligendi accusamus!
        Corrupti, veniam autem? Eveniet doloremque ratione hic explicabo itaque
        fugiat molestiae illo eius laborum nesciunt! Quos quibusdam
        necessitatibus saepe consequatur qui veniam fugiat dolor ut laborum,
        asperiores neque odio accusamus optio tempore maxime recusandae
        molestias doloremque porro dolore voluptatibus temporibus, obcaecati
        voluptate quidem. Nam?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste aut
        dignissimos quasi inventore cum praesentium harum blanditiis dolores
        quia distinctio sunt fuga perspiciatis atque quidem velit, facere
        explicabo et dolor autem nesciunt voluptatum eligendi accusamus!
        Corrupti, veniam autem? Eveniet doloremque ratione hic explicabo itaque
        fugiat molestiae illo eius laborum nesciunt! Quos quibusdam
        necessitatibus saepe consequatur qui veniam fugiat dolor ut laborum,
        asperiores neque odio accusamus optio tempore maxime recusandae
        molestias doloremque porro dolore voluptatibus temporibus, obcaecati
        voluptate quidem. Nam?
      </p>
    </div>
  );
}

export default HomePage;
