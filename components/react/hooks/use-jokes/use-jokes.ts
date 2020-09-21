import { useState, useEffect } from 'react'
import { useLocalJokes } from '@teambit/bad-jokes.hooks.use-local-jokes'
import { useRemoteJokes } from '@teambit/bad-jokes.hooks.use-remote-jokes'


export const useJokes = (local:boolean):[(local:boolean) => void, () => void, string, string, boolean, (joke:string) => void, (joke:string) => void] => {
    const [getLocalJoke, localJoke, localJokeError, saveJoke, removeJoke] = useLocalJokes();
    const [getRemoteJoke, remoteJoke, isLoading, remoteJokeError] = useRemoteJokes();
    const [isLocal, setIsLocal] = useState(local)

    const getJoke = isLocal ? getLocalJoke : getRemoteJoke;
    const joke = isLocal ? localJoke : remoteJoke;
    const error = isLocal ? localJokeError : remoteJokeError;
    const disableGetJoke = isLocal ? !!localJokeError : isLoading;

    useEffect(()=> {
        getJoke();
    },[isLocal])

    return [setIsLocal, getJoke, joke, error, disableGetJoke, saveJoke, removeJoke]
}