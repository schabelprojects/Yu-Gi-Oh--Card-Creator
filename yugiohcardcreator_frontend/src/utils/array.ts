import {nanoid} from "nanoid"

export function createArraysWithIds(length: number){
    // @ts-ignore
    return Array.from({length}, () => {
        return { id: nanoid() };
    })
}