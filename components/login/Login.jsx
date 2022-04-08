export function Login({
    loggedin = false,
    name,
    onRegister,
    onLogout,
  }) {
    if (loggedin) {
      return (
        <>
            <p>
                <a href="/">Forsíða</a>
            </p>
            <p>
                Skráður inn sem <strong>{name}</strong>
            </p>
            <p>
                <a href="/logout">Útskrá</a>
            </p>
        </>
      );
    }
  
    return (
      <>
        <p>
            <a href="/">Forsíða</a>
        </p>
        <p>
          <a href="/login">Innskráning</a>
        </p>
        <p>
          <a href="/register">Nýskráning</a>
        </p>
        
      </>
    );
  }