const List = ({id,title,removeItem}) => {
    return (
        <div className="list-item">
            <p className="title">{title}</p>
            <div className="button-container">
                <button>แก้ไข</button>
                <button onClick={()=>removeItem(id)}>ลบ</button>
            </div>
       </div>
    )
}

export default List;