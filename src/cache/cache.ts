import { Redis } from "ioredis";

const redisClient = new Redis()
// 127.0.0.1:6379 

export const addToCache = async (email: string, userDetails: any) => {
    // await redisClient.connect()
    await redisClient.set(email, userDetails)
    // await redisClient.disconnect()

}

export const getToCache = async (email: string) => {
    // await redisClient.connect()
    const userDetails = await redisClient.get(email)
    // await redisClient.disconnect()
    return userDetails
}

export const deleteToCache = async (email: string) => {
    // await redisClient.connect()
    await redisClient.del(email)
    // await redisClient.disconnect()
}

export default redisClient