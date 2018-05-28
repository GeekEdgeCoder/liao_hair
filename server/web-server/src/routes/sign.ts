
import { Route, TYPE } from '../util/route-util';
import { pool } from '../util/mysql';
import { getPostData } from '../util/post-util';
import { getCheckSignInCode } from '../config';
import * as rp from 'request-promise';
import {encode} from './../util/jwt';
// import {User} from './../dto/user';
@(Route({ path: 'sign' }) as any)
export class Sign {
    @Route({ path: 'in', type: TYPE.POST })
    async in(ctx, next) {
   

        const login: any = await getPostData(ctx);



        const {openid, session_key} = await rp({
            uri: getCheckSignInCode(login.code),
            json: true
        });
        const {count} = await pool.query(`SELECT count(*) AS count FROM user_wechat WHERE openid='${openid}'`);
        if(count>0) {

        }else{
            const data = await pool.query(`INSERT INTO user_wechat (openid,session_key) VALUES ('${openid}','${session_key}')`);
        }
        const data = {
            token: encode(openid)
        };
        // const data = {"session_key":"UujTHz+UTVb71NSm8124DQ==","openid":"owmye4o4eCcsMPzagInzUM3nBdbA"};
        // console.log(data);
        // const result = await pool.query(`SELECT count(*) AS signIn FROM user WHERE name = ${name} AND password= ${password}`);
        ctx.body = data;
    }
}