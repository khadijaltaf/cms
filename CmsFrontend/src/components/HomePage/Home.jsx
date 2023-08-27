import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

//export default Homeimport React, { useEffect } from "react";
const HomePage = () => {
  useEffect(() => {
    alert("34");
  }, []);
  const data = [
    {
      id: "1",
      title: "Card 1",
      image:
        "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png",
    },
    {
      id: "2",
      title: "Card 2",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    },
    {
      id: "3",
      title: "Card 3",
      image:
        "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png",
    },
    {
      id: "4",
      title: "Card 4",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    },
    // Add more card data here
  ];

  return (
    <div style={styles.container}>
      <img
        src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt="Home"
        style={styles.homeImage}
      />
      <button style={styles.centerButton}>Center Aligned Button</button>
      <div style={styles.cardContainer}>
        {data.map((item) => (
          <div key={item.id} style={styles.cardItem}>
            <img src={item.image} alt={item.title} style={styles.cardImage} />
            <p style={styles.cardTitle}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  homeImage: {
    width: "100%", // Use full width
    maxWidth: "200px", // Limit maximum width
    height: "auto", // Automatically adjust height
    marginBottom: "20px",
  },
  centerButton: {
    textAlign: "center",
    padding: "10px",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap", // Allow cards to wrap to the next row
    justifyContent: "center",
    marginTop: "20px",
  },
  cardItem: {
    flex: "0 0 calc(33.33% - 10px)", // 3 cards per row with margin
    marginBottom: "20px",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: "auto",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  cardTitle: {
    fontFamily: "Poppin, sanserif",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default HomePage;
