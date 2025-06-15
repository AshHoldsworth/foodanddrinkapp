import "../../css/home.css";

export const Home: React.FC = () => {
  return (
    <>
      <main className="grid">
        <h2>Welcome to my App!</h2>
        <input type="text" placeholder="Search Food & Drink!" maxLength={40} />
        <img
          src={require("../../assets/images/search-black.png")}
          alt="search"
          id="main-search-icon"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores id
          consequuntur eaque, ex mollitia ipsum accusantium culpa explicabo
          expedita a eius! Assumenda, reiciendis molestiae libero dolor ex vero
          necessitatibus, blanditiis, dolorum laboriosam dicta cumque illo alias
          repudiandae inventore. Expedita dolores adipisci ea nulla. Sapiente
          aliquid, tempora voluptates quaerat obcaecati architecto alias ipsa id
          officiis at modi in amet quos laborum earum, minus consectetur
          perferendis quas magni mollitia minima necessitatibus nemo pariatur
          eius. Voluptatum molestiae, itaque veniam mollitia qui sunt inventore
          ex aperiam in enim voluptatibus esse. Similique repellendus non error
          consectetur esse consequuntur? Delectus corrupti, quisquam
          reprehenderit molestias cupiditate, ab provident officia a debitis
          natus dolores accusantium atque sequi. Maxime aliquid voluptatum
          laboriosam ea culpa. Harum perspiciatis cum non unde accusamus
          repudiandae sit debitis ipsa ad, minima tenetur corporis adipisci ex
          repellat saepe nulla nesciunt? Voluptatem cupiditate cumque quaerat
          placeat, unde, nisi nesciunt aliquam suscipit quia, voluptatum nostrum
          temporibus exercitationem.
        </p>
      </main>
    </>
  );
};
