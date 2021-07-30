import AdminNav from "./AdminNav"

function AdminMain(props){
    return <div>
        <AdminNav></AdminNav>
        <div>{props.children}</div>
    </div>
}
export default AdminMain