


function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Laptop",
    "model":"elitebook",
    "price":"89000",
    "color":"white"
  };

  return (
    <>
      <h1>Laptop</h1>
      <p>Model:{structuredData.model}</p>
      <p>Price:{structuredData.price}</p>
      <p>Color:{structuredData.color}</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}

export default App;