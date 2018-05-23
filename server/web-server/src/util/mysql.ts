import { createPool, Pool} from 'promise-mysql';

export const pool: Pool = createPool({
    host: '106.14.150.87',
    user: 'root',
    password: 'ger.170728##',
    port: 3306,
    database: 'liao_hair',
    connectionLimit: 10
});