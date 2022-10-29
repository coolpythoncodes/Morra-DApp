import { useStoreContext } from 'context/StoreContext'
import Button from 'component/button'
import { ACTION_TYPES } from 'reducer/store-reducer'
import FingerSquare from 'component/finger-square'
import GuessSquare from 'component/guess-square'
import toast from 'react-hot-toast'

const Morra = () => {
    const { dispatch, finger, guess, resolveFingersAndGuessP } = useStoreContext()

    const fingersArray = [...Array(6).keys()]
    const guessArray = [...Array(11).keys()]

    const playFinger = (finger) => {
        dispatch({
            type: ACTION_TYPES.PLAY_FINGER,
            payload: finger
        })
    }

    const makeGuess = (guess) => {
        dispatch({
            type: ACTION_TYPES.PLAY_GUESS,
            payload: guess
        })
    }

    const handleClick = async () => {
        if (!finger && !guess) {
            toast.error('a finger and guess are required')
        } else {
            resolveFingersAndGuessP([finger,guess])
        }
    }

    return (
        <div>
            <p>How many fingers will you play?</p>
            <div className="flex items-center justify-center space-x-4 mt-2 mb-10">
                {
                    fingersArray.map((finger, index) => (
                        <FingerSquare
                            key={index}
                            value={finger}
                            chooseSquare={playFinger}
                        />
                    ))
                }
            </div>

            <p>Guess the total number of fingers</p>
            <div className="flex items-center justify-center flex-wrap gap-4 mt-2 mb-10">
                {
                    guessArray.map((guess, index) => (
                        <GuessSquare
                            key={`guess-${index}`}
                            value={guess}
                            chooseSquare={makeGuess}
                        />
                    ))
                }
            </div>

            <Button title="play" handleClick={handleClick} />
        </div>
    )
}

export default Morra