const DonationCards = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "2rem",
      }}
    >
      {/* Card 1 */}
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "1rem",
          width: "30%",
        }}
      >
        <h3>Education</h3>
        <p>Support school program and supplies 📚</p>
        <button>Donate Now</button>
      </div>

      {/* Card 2 */}
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "1rem",
          width: "30%",
        }}
      >
        <h3>Health Care</h3>
        <p>Provide medicines & care for families 💊</p>
        <button>Donate Now</button>
      </div>

      {/* Card 3 */}
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "1rem",
          width: "30%",
        }}
      >
        <h3>Food AID</h3>
        <p>Deliver meals to those in need 🍚</p>
        <button>Donate Now</button>
      </div>
    </section>
  );
};

export default DonationCards;