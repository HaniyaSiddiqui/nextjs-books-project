import { FC } from "react"  // Function component 

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="max-w-screen-2xl mx-auto px-5 ">
            {children}
        </div>
    )
}


export default Wrapper
