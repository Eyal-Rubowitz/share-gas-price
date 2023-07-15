export default function ItemProfile() {
    
    const itemName = "An hardcoded item name."
    const itemPrice = "An hardcoded price $."
    const itemDetails = "More detailes typed by the user who shared info about the item."
    
    return (
        <>
            Item profile
            <input type="image"></input>
            <div>{itemName}</div>
            <div>{itemPrice}</div>
            <div>{itemDetails}</div>
        </>
    );
}