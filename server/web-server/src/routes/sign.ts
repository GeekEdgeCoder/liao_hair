
import { Route, TYPE } from '../util/route-util';
import { pool } from '../util/mysql';
import { getPostData } from '../util/post-util';
import { getCheckSignInCode } from '../config';
import * as rp from 'request-promise';
// import {User} from './../dto/user';
@(Route({ path: 'sign' }) as any)
export class Sign {
    @Route({ path: 'in', type: TYPE.POST })
    async in(ctx, next) {
        const result = '123';

        const login: any = await getPostData(ctx);



        const data = await rp({
            uri: getCheckSignInCode(login.code),
            json: true
        });
        // const data = {"session_key":"UujTHz+UTVb71NSm8124DQ==","openid":"owmye4o4eCcsMPzagInzUM3nBdbA"};
        // console.log(data);
        // const result = await pool.query(`SELECT count(*) AS signIn FROM user WHERE name = ${name} AND password= ${password}`);
        ctx.body = data;
    }
}