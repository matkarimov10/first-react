export function Main() {
    // const isOpen = true
    const fruit = ["apple", "banana", "orange", "mango"]
    return (
        <>
            <ol>
                {fruit.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </>
    )
}