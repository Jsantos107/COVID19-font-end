import React from 'react'
import { findAllByDisplayValue } from '@testing-library/react'

export default function ShowSmile({photoInfo, selectPhoto, jokeInfo, selectJoke, reload}){

    const randomPic = () => {
        const max = photoInfo.length
        const i = Math.floor(Math.random() * Math.floor(max))
        const photo = photoInfo[i]

        return selectPhoto(photo), joke()
    }

    const joke = () => {
        if(jokeInfo.type === "single")
            return  selectJoke(jokeInfo)
        else{
            const joke = {joke: "Something went wrong please smile again."}
            return selectJoke(joke)
        }
    }

    return(
        <div className="smile">
            <button className='click-me-button' onClick={() => randomPic()}> CLICK ME! </button>
            <button className='smile-again-button' onClick={()=> reload()}>Smile Again?</button>
        </div>
    )
}