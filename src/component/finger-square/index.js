import { useStoreContext } from "context/StoreContext"

const FingerSquare = ({ value, chooseSquare }) => {
    const { finger } = useStoreContext()
    return (
        <div
            className={`flex items-center justify-center rounded cursor-pointer text-white h-10  w-10 border border-[rgb(60,111,255)] ${finger === value ? 'bg-[rgb(60,111,255)]' : ''}`}
            onClick={() => chooseSquare(value)}
        >
            {value}
        </div>
    )
}

export default FingerSquare