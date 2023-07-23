const Home = () => {
  return (
    <div className="container p-4">
      <div className="d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            <span className="text-danger">Oops!</span> Page not found.
          </p>
          <p className="lead">
            The page you're looking for is lost in the space.
          </p>
          <a href="/" className="btn btn-outline-success">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
