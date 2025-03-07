

import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path: path.join(process.cwd(), ".env")})

export default {
    port: process.env.PORT, 
    db_url: process.env.DB_URL,
    bycrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
    default_password: process.env.DEFAULT_PASSWORD,
}
