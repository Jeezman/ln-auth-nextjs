import { Request, Response, NextFunction } from 'express';
import { emitSocketEvent } from '../app';
import {  responseError } from '../helpers';
import lnurlServer from '../helpers/lnurl';

export const lnurlLogin = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const result = await lnurlServer.generateNewUrl("login");

        res.send(result);
    } catch (err) {
        next(err);
    }
}

export const pseudoLogin = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const query = req.query;
        if (query.key) {
            const key: string = String(query.key);

            emitSocketEvent.emit('auth', { key });
            res.json({ key });
        } else {
            return responseError(res, 404, 'Unsuccesful LNURL AUTH login'); 
        }
    } catch (err) {
        next(err);
    }
}