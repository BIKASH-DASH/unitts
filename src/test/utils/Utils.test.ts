import { Utils } from '../../app/Utils/Utils';
import { IncomingMessage } from 'http';


describe('utils test suite', () => {
    test('getrequest path is a valid request', () => {
        const url ='http://localhost:8080/login';
        const request = {
            url
        } as IncomingMessage;
        const resultPath = Utils.getRequestBasePath(request);
        expect(resultPath).toBe('login')
    });

    test('getrequest path with no path name', () => {
        const url ='http://localhost:8080/';
        const request = {
            url
        } as IncomingMessage;
        const resultPath = Utils.getRequestBasePath(request);
        expect(resultPath).toBeFalsy();
    });

    test('getrequest if its empty', () => {
        const url ='';
        const request = {
            url
        } as IncomingMessage;
        const resultPath = Utils.getRequestBasePath(request);
        expect(resultPath).toBeFalsy();
    });




});