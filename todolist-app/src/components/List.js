const List = ({id,title}) => {
    return (
        <div className="list-item">
            <p className="title">{title}</p>
            <div className="button-container">
                <button>แก้ไข</button>
                <button>ลบ</button>
            </div>
       </div>
    )
}

export default List;