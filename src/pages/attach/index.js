
const Attach = () => {
    return (
        <div className="">
            <p>Please paste the contract info to attach to:</p>
            <br />
            <textarea spellCheck="false"
                className=''
                // onChange={(e) => setCtcInfoStr(e.target.value)}
                placeholder='Please paste the contract info here'
            />
            <br />
            <button
            // disabled={!ctcInfoStr}
            // onClick={() => attach(ctcInfoStr)}
            >Attach</button>
        </div>)
}

export default Attach