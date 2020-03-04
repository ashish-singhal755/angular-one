import * as winston from 'winston';
import * as wdrf from 'winston-daily-rotate-file';
import * as dateFormat from 'dateformat';

winston.transports.DailyRotateFile = wdrf;
export const infoTrensport = new winston.transports.DailyRotateFile({
    filename: 'application-%DATE%.log',
    level: "info",
    datePattern: 'YYYY-MM-DD',
    zippedArchive: false,
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize({ all: true }),
        winston.format.printf((info) => {
            const {
                timestamp, level, message, ...args
            } = info
            const ts = dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT");
            return `${ts} [INFO] : ${message} ${Object.keys(args).length ? args : 'fdgdfgdfg'}`;
        }),
    ),
});
export const errorTrensport = new winston.transports.DailyRotateFile({
    filename: 'application-%DATE%.log',
    level: "error",
    datePattern: 'YYYY-MM-DD',
    zippedArchive: false,
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize({ all: true }),
        winston.format.printf((info) => {
            const {
                timestamp, level, message, ...args
            } = info
            const ts = dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT");
            return `${ts} [ERROR] : ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
        }),
    ),
});

export const myCustomLevels = {
    levels: {
        error: 0,
        info: 1,
        warn: 2,
        debug: 3
    },
    colors: {
        error: 'red',
        info: 'blue',
        debug: 'green',
        warn: 'yellow',
    }
};