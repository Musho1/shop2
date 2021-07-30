const { Link } = require("react-router-dom");

function AdminNav(){
    return <div>
        <nav className="adminNAv">
            <ul>
                <Link to="/AdminProduct">Product</Link>
            </ul>
        </nav>
    </div>
}
export default AdminNav