import { MagickInputFile, Call, MagickOutputFile, MagickFile } from "../magickApi";
import { blobToString, outputFileToInputFile, asInputFile } from "./file";

export async function compare(img1: MagickInputFile, img2: MagickInputFile, error: number = 0.01): Promise<boolean> {
  const result = await Call(
    [img1, img2], 
    ['convert', img1.name, img2.name, '-trim', '+repage', '-resize', '256x256^!', '-metric', 'RMSE', '-format', '%[distortion]', '-compare', 'info:info.txt']
    )
  const n = await blobToString(result[0].blob)
  const identical = parseFloat(n)
  return identical <= error
}

export async function extractInfo(img: MagickInputFile|MagickOutputFile): Promise<any>{
  let inputImage =  await asInputFile(img)
  let processedFiles = await Call( [inputImage], ["convert", inputImage.name, "info.json"]);
  return  JSON.parse(await blobToString(processedFiles[0].blob))
}