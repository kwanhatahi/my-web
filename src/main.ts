import express, { query } from 'express';
import http from 'http';
import cors from 'cors';
import * as bodyParser from 'body-parser';

export function add(num1: number, num2: number){
    return num1 + num2;
}



