import path from 'path'
import { fileURLToPath } from 'url'

let __filename = fileURLToPath(import.meta.url)
let __dirname = path.dirname(__filename)

export { __filename, __dirname }