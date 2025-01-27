export default function Loading() {
    return (
      <div className="loading-page">
        <h1>Loading...</h1>
        <style jsx>{`
          .loading-page {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
          }
          h1 {
            font-size: 2rem;
            color: #333;
          }
        `}</style>
      </div>
    );
  }
  