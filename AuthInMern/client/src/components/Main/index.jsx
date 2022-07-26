import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <img
          style={{
            height: "100%",
            backgroundColor: "white",
            margin: "10px",
            padding: "30px",
            borderRadius: "10px",
          }}
          src="https://www.dupleit.com//images/logo-duple.svg"
          className="logo"
          alt=""
        />
        <h1>Sample Task </h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div style={{height:"80vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center", color:"red"}}>
		<h1><a style={{color:"#fba92a"}} href="https://www.dupleit.com/">Go To Official Website of duple</a></h1>
        
      </div>
    </div>
  );
};

export default Main;
