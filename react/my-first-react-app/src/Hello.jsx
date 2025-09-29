import React from "react";

export const MyComponent = ({name = "John", job = "Clerk"}) => {
    return <h2>Hello, I am a component. {name} works as {job}</h2>
}


export default MyComponent;