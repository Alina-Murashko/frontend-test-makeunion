import {User} from "../../app/users/users.reducer.ts";

export function getUser (obj: Partial<User>) {
    let objectUser = {}
    function makeObj(obj :any ) {
        if (Object.keys(obj).length === 0) {
            return objectUser
        }
        const arr = Object.keys(obj)
        const objNew = arr.reduce((acc, key) => {
            if (typeof obj[key] === 'string' || typeof obj[key] === 'number') {
                objectUser = {...objectUser, [key]: obj[key]}
                return acc
            } else {
                return {...acc, ...obj[key]}
            }
        }, {})
        return makeObj(objNew)
    }
    makeObj(obj)
    return objectUser
}

export function capitalizeFirstLetter(string: string) {
    return string[0].toUpperCase() + string.substring(1);
}