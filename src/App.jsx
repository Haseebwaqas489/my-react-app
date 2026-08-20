function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Laptop",
    "model": "elitebook",
    "price": "89000",
    "priceCurrency": "PKR",
    "color": "white",

    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "120"
    }
  };

  return (
    <>
      <h1>Laptop</h1>

      <p>Model: {structuredData.model}</p>
      <p>Price: {structuredData.price}</p>
      <p>Color: {structuredData.color}</p>
      <p>Price Currency: {structuredData.priceCurrency}</p>

      <p>
        Rating: {structuredData.aggregateRating.ratingValue}/5
      </p>

      <p>
        Total Ratings: {structuredData.aggregateRating.ratingCount}
      </p>

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