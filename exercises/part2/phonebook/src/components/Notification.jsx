const Notification = ({ message, type = "success" }) => {
    if (!message) return null

    const baseStyle = {
        background: "#f4f4f4",
        padding: "12px 16px",
        marginBottom: "16px",
        borderRadius: "6px",
        fontWeight: "bold",
        boxShadow: "0 0 8px rgba(0,0,0,0.1)",
        transition: "opacity 0.5s ease-in-out",
    }

    const typeStyle = {
        success: {
            color: "#2e7d32",
            border: "2px solid #2e7d32",
            boxShadow: "0 0 10px #66bb6a",
        },
        error: {
            color: "#c62828",
            border: "2px solid #c62828",
            boxShadow: "0 0 10px #ef5350"
        }
    }

    const messageStyle = {
        ...baseStyle,
        ...typeStyle[type]
    }

    

    return (
        <div style={messageStyle}>
            {message}
        </div>
    )
}

export default Notification