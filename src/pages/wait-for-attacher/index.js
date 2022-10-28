import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Button from "component/button"
import { useStoreContext } from "context/StoreContext"

const WaitForAttacher = () => {
  const { ctcInfo, role } = useStoreContext()
  const navigate = useNavigate()

  const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds))

  const copyToClipboard = async (button) => {
    navigator.clipboard.writeText(ctcInfo);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = "Copied!";
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }
  
  useEffect(() => {
    if (role !== 'deployer') navigate('/select-role')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role])

  return (
    <div className="">
      <p>Waiting for Attacher to join...</p>
      <br />
      <p>Please give them this contract info:</p>
      <pre className='bg-[rgba(255,255,255,0.3)] rounded-[10px] text-[18px] my-[30px] p-5 text-left'>
        {ctcInfo}
      </pre>
      <Button
        title="Copy to clipboard"
        handleClick={(e) => copyToClipboard(e.currentTarget)}
      />

    </div>)
}

export default WaitForAttacher