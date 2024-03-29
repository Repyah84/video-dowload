import { VideApi } from "~api/video"

export const getVideoInfo = async (videoId: string) => {
  let interval: ReturnType<typeof setInterval> | null = null

  try {
    interval = setInterval(() => {
      console.log("waiting response")
    }, 3000)

    const res = await VideApi.getInfoWithQuality(videoId)

    clearInterval(interval)
    interval = null

    return res
  } catch (error) {
    clearInterval(interval)
    interval = null

    console.error(error)
  }
}
