import logo from "../assets/gql-logo.png";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} alt="GraphQL Logo" className="mr-2" />
            <div>Project MGMT</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
